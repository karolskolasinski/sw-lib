/* global H */
import { add } from 'lodash';
import makeLog from '../../utils/make-log';
import { tr } from '../../utils/tr';

const log = makeLog('sw-map');

function createNode(text) {
    const node = document.createElement('div');
    node.innerHTML = text;
    window.debug = false;
    return node.children[0];
}

// const svgMarkup = `<svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
//     <rect stroke="white" fill="#1b468d" x="1" y="1" width="10" height="10" />
//     <text x="6" y="9" font-size="0.75em" font-family="Arial" font-weight="bold" text-anchor="middle"
// fill="white">x</text> </svg>`;

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



class SwMap extends HTMLElement {

    // observedAttributes - its list attr which can be attached to component - case sensitive
    static get observedAttributes() {
        return ['api-key', 'apiKey', 'apikey', 'selectable', 'zoom', 'center-lat', 'center-lng', 'centerLat', 'centerlat', 'centerLng', 'centerlng', 'search'];
    }

    //  constructor should contains method if you would like to call them
    constructor() {
        super();
        this.myAttrs = {};
        this.attachShadow({ mode: 'open' });
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.onResize = this.onResize.bind(this);
        this.onMapClick = this.onMapClick.bind(this);
        this.onSuccess = this.onSuccess.bind(this);
        this.onError = this.onError.bind(this);
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
                if (mutation.type === 'childList' && this.map) {
                    this.syncMarkers();
                }
            }
        });

        this.addedMarkers = [];
    }

    onMarkerClick(event) {
        const selectedEvent = new CustomEvent('select', {
            bubbles: true,
            detail: event.target.getData().mid
        });
        log('dispatching event', selectedEvent);
        this.dispatchEvent(selectedEvent);
    }

    async attributeChangedCallback(attrName, _previous, current) {
        this.myAttrs[attrName] = current;
        log('got attribute', attrName);
        if (attrName === 'selectable') {
            const coords = (current || '').split('x');
            if (this.selectedCoords && coords[0] && coords[1]) {
                this.setLocation({ lat: coords[0], lng: coords[1] });
            }
            return;
        }



        const apiKey = this.myAttrs['api-key'] || this.myAttrs['apiKey'] || this.myAttrs['apikey'];

        if (!apiKey) {
            return;
        }
        log('establishing new here connection for key:' + current);
        await ensureJsIsLoaded();

        if (this.addedMarkers && this.addedMarkers.length > 0) {
            this.removeMarkers(this.addedMarkers);
            this.addedMarkers = [];
        }
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
            apikey: apiKey
        });

        log('drawing a map');
        const defaultLayers = this.platform.createDefaultLayers();
        this.map = new H.Map(
            this.mainNode,
            defaultLayers.vector.normal.map,
            {
                zoom: this.myAttrs['zoom'] ?? 6,
                center: { lat: this.myAttrs['center-lat'] ?? 52, lng: this.myAttrs['center-lng'] ?? 19 }
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

        if (this.getAttribute('selectable') !== null) {
            const split = (this.getAttribute('selectable') || '').split('x');
            if (split[0] && split[1]) {
                const coords = { lat: split[0], lng: split[1] };
                this.setLocation(coords);
                this.map.setCenter(coords);
            }
        }

        // search atrribute -> get string with address, but only longer than 3 letters as there is no sense to satrt looking for shorter string
        if (attrName === 'search') {
            if (current.length > 3) {
                this.findAddress(this.platform, current);
            }
        }


    }

    onMapClick(event) {
        if (this.getAttribute('selectable') !== null) {
            const coords = this.map.screenToGeo(
                event.currentPointer.viewportX,
                event.currentPointer.viewportY
            );
            this.setLocation(coords);
            this.triggerUpdateEvent(coords);
        }
    }

    triggerUpdateEvent(coords) {
        const updateEvent = new CustomEvent('update', {
            bubbles: true,
            detail: { value: coords }
        });
        log('Dispatching update event', updateEvent);
        this.dispatchEvent(updateEvent);
    }

    setLocation(coords) {
        if (!this.map) {
            log('Map is not initialized');
            return;
        }
        this.selectedCoords = coords;
        if (!this.marker) {
            const icon = new H.map.Icon(makeIcon('#000'));
            this.marker = new H.map.Marker(coords, { icon: icon });
            this.map.addObject(this.marker);
        } else {
            this.map.addObject(this.marker);
            this.marker.setGeometry(coords); // setGeometry are problematic, without addObject its not working[doesn't display marker]
        }
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

        this.removeMarkers(markersToRemove);
    }

    removeMarkers(markers) {
        markers.forEach(m => {
            const marker = m.marker;
            log('removing marker', m);
            marker.removeEventListener('click', this.onMarkerClick);
            if (this.markersGroup.getObjects().includes(marker)) {
                this.markersGroup.removeObject(marker);
            }
        });
    }

    //  findAddress get string as parameter, and string construction should looks like below:
    //
    //  postalCode=00-988;city=Warsaw;street=Nowa;houseNumber=45;  [; as separator, parameters are caseSensitive]
    //
    //  available parameters [city | street | houseNumber | postalCode | country] - not all are required
    //  all above will works with 'qq'  ->  { qq: address, limit: 10, in: 'countryCode:POL' };
    //  its possible to search just by string with parameter 'q': 'string....'
    findAddress(platform, address) {
        var geocoder = platform.getSearchService(),
            geocodingParameters = { qq: address, limit: 10, in: 'countryCode:POL' };

        geocoder.geocode(geocodingParameters, this.onSuccess, this.onError);
    }

    onSuccess(result) {
        var locations = result.items;
        this.syncMarkers();
        if (result.items.length > 0) {
            const coords = { lat: locations[0].position.lat, lng: locations[0].position.lng };
            this.setLocation(coords);
            this.map.setCenter(coords);
            this.map.setZoom(12);
            const icon = new H.map.Icon(makeIcon('#000'));
            this.marker = new H.map.Marker(coords, { icon: icon });
            this.map.addObject(this.marker);
        }
    }

    onError(error) {
        alert('Can\'t reach the remote server');
    }
}

class SwMapMarker extends HTMLElement {
}

const isElementDefined = customElements.get('sw-map');

if (!isElementDefined) {
    customElements.define('sw-map', SwMap);
    customElements.define('sw-map-marker', SwMapMarker);
}
