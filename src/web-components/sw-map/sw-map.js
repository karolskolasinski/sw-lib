import makeLog from '../../utils/make-log';

const log = makeLog('sw-map');

function createNode(text) {
    const node = document.createElement('div');
    node.innerHTML = text;
    return node.children[0];
}

// const svgMarkup = `<svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
//     <rect stroke="white" fill="#1b468d" x="1" y="1" width="10" height="10" />
//     <text x="6" y="9" font-size="0.75em" font-family="Arial" font-weight="bold" text-anchor="middle" fill="white">x</text>
// </svg>`;

const makeIcon = color => `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
    <path fill="${color}" d="M256 0c-88.366 0-160 71.634-160 160 0 160 160 352 160 352s160-192 160-352c0-88.366-71.635-160-160-160zM256 256c-53.020 0-96-42.98-96-96s42.98-96 96-96 96 42.98 96 96-42.98 96-96 96z"></path>
</svg>`;

async function ensureJsIsLoaded() {
    if (!window['H']) {
        await import('https://js.api.here.com/v3/3.1/mapsjs-core.js');
        await import('https://js.api.here.com/v3/3.1/mapsjs-service.js');
        await import('https://js.api.here.com/v3/3.1/mapsjs-mapevents.js');
        await import('https://js.api.here.com/v3/3.1/mapsjs-ui.js');
    }
}

function waitForAttributes(el, attributes, fnc) {
    const allAttributesReady = attributes.every(attr => el.myAttrs[attr]);

    if (allAttributesReady) {
        fnc();
    }
}

class SwMap extends HTMLElement {
    static get observedAttributes() {
        return ['api-key', 'width', 'height'];
    }

    constructor() {
        super();
        this.myAttrs = {};
        this.attachShadow({ mode: 'open' });
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.onResize = this.onResize.bind(this);
        this.onMapClick = this.onMapClick.bind(this);
        this.styleNode = createNode(`<style>
:host {
    display: block;
    width: 100%;
    height: 100%;
}
</style>`);
        this.shadowRoot.appendChild(this.styleNode);
        this.shadowRoot.appendChild(createNode('<link href="https://js.api.here.com/v3/3.1/mapsjs-ui.css" rel="stylesheet"/>'));

        this.observer = new MutationObserver(mutationsList => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    this.syncMarkers();
                }
            }
        });

        this.addedMarkers = [];
    }

    onMarkerClick(event) {
        const selectedEvent = new CustomEvent('selected', {
            bubbles: true,
            detail: event.target.getData().mid
        });
        log('dispatching event', selectedEvent);
        this.dispatchEvent(selectedEvent);
    }

    async attributeChangedCallback(attrName, _previous, current) {
        this.myAttrs[attrName] = current;
        log('got attribute', attrName);
        waitForAttributes(this, ['api-key'], async () => {
            log('establishing new here connection for key:' + current);
            await ensureJsIsLoaded();

            this.markersGroup = new H.map.Group();

            if (this.mainNode) {
                this.mainNode.remove();
                if (this.map) {
                    this.map.removeEventListener('tap', this.onMapClick);
                    this.markersGroup.removeEventListener('tap', this.onMarkerClick);
                }
            }

            this.mainNode = createNode('<div class="map-container"></div>');
            this.mainNode.style.width = this.clientWidth + 'px';
            this.mainNode.style.height = this.clientHeight + 'px';
            this.shadowRoot.appendChild(this.mainNode);

            this.platform = new H.service.Platform({
                apikey: this.getAttribute('api-key')
            });

            log('drawing a map');
            const defaultLayers = this.platform.createDefaultLayers();
            this.map = new H.Map(
                this.mainNode,
                defaultLayers.vector.normal.map,
                {
                    zoom: 6,
                    center: { lat: 52, lng: 19 }
                }
            );

            this.map.addObject(this.markersGroup);

            this.ui = H.ui.UI.createDefault(this.map, defaultLayers, 'pl-PL');
            this.ui.removeControl('mapsettings');

            this.syncMarkers();

            var mapEvents = new H.mapevents.MapEvents(this.map);
            new H.mapevents.Behavior(mapEvents);

            this.map.addEventListener('tap', this.onMapClick);
            this.markersGroup.addEventListener('tap', this.onMarkerClick);
        });
    }

    onMapClick(event) {
        if (this.getAttribute('selectable') !== null) {
            const coord = this.map.screenToGeo(
                event.currentPointer.viewportX,
                event.currentPointer.viewportY
            );
            this.setLocation(coord);
        }
    }

    setLocation(coords) {
        if (!this.map) {
            log('Map is not initialized');
            return;
        }
        if (!this.marker) {
            const icon = new H.map.Icon(makeIcon('#000'));
            this.marker = new H.map.Marker(coords, { icon: icon });
            this.map.addObject(this.marker);
        } else {
            this.marker.setGeometry(coords);
        }

        const updateEvent = new CustomEvent('update', {
            bubbles: true,
            detail: coords
        });
        log('Dispatching update event', updateEvent);
        this.dispatchEvent(updateEvent);
    }

    connectedCallback() {
        this.observer.observe(this, { childList: true });
        window.addEventListener('resize', this.onResize);
    }

    disconnectedCallback() {
        this.observer.disconnect();
        window.removeEventListener('resize', this.onResize);
    }

    onResize() {
        if (this.map) {
            this.map.getViewPort().resize();
        }
    }

    syncMarkers() {
        let markersToRemove = [...this.addedMarkers];
        Array.from(this.children).forEach(child => {
            const lat = child.getAttribute('lat');
            const lng = child.getAttribute('lng');
            const color = child.getAttribute('color');
            const mid = child.getAttribute('mid');

            if (child instanceof SwMapMarker) {
                let marker = this.addedMarkers.find(marker => marker.lat === lat && marker.lng === lng && marker.color === color && marker.mid === mid);

                if (!marker) {
                    const icon = new H.map.Icon(makeIcon(color));
                    marker = new H.map.Marker(
                        { lat, lng },
                        {
                            icon: icon,
                            data: { mid }
                        }
                    );
                    this.markersGroup.addObject(marker);
                    marker.addEventListener('click', this.onMarkerClick);
                    const m = { lat, lng, marker, color, mid };
                    log('adding marker', m);
                    this.addedMarkers.push(m);
                }

                markersToRemove = markersToRemove.filter(m => m.lat !== lat && m.lng !== lng && m.color !== color && m.mid === mid);
            }
        });

        markersToRemove.forEach(m => {
            const marker = m.marker;
            log('removing marker', m);
            marker.removeEventListener('click', this.onMarkerClick);
            this.markersGroup.removeObject(marker);
        });
    }

}

class SwMapMarker extends HTMLElement {
}

const isElementDefined = customElements.get('sw-map');

if (!isElementDefined) {
    customElements.define('sw-map', SwMap);
    customElements.define('sw-map-marker', SwMapMarker);
}
