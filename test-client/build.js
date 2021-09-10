(() => {
  // node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var i;
  var t;
  var o;
  var r;
  var f;
  var e = {};
  var c = [];
  var s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function a(n2, l3) {
    for (var u3 in l3)
      n2[u3] = l3[u3];
    return n2;
  }
  function h(n2) {
    var l3 = n2.parentNode;
    l3 && l3.removeChild(n2);
  }
  function v(l3, u3, i3) {
    var t2, o2, r3, f2 = {};
    for (r3 in u3)
      r3 == "key" ? t2 = u3[r3] : r3 == "ref" ? o2 = u3[r3] : f2[r3] = u3[r3];
    if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n.call(arguments, 2) : i3), typeof l3 == "function" && l3.defaultProps != null)
      for (r3 in l3.defaultProps)
        f2[r3] === void 0 && (f2[r3] = l3.defaultProps[r3]);
    return y(l3, f2, t2, o2, null);
  }
  function y(n2, i3, t2, o2, r3) {
    var f2 = { type: n2, props: i3, key: t2, ref: o2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: r3 == null ? ++u : r3 };
    return l.vnode != null && l.vnode(f2), f2;
  }
  function d(n2) {
    return n2.children;
  }
  function _(n2, l3) {
    this.props = n2, this.context = l3;
  }
  function k(n2, l3) {
    if (l3 == null)
      return n2.__ ? k(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u3; l3 < n2.__k.length; l3++)
      if ((u3 = n2.__k[l3]) != null && u3.__e != null)
        return u3.__e;
    return typeof n2.type == "function" ? k(n2) : null;
  }
  function b(n2) {
    var l3, u3;
    if ((n2 = n2.__) != null && n2.__c != null) {
      for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++)
        if ((u3 = n2.__k[l3]) != null && u3.__e != null) {
          n2.__e = n2.__c.base = u3.__e;
          break;
        }
      return b(n2);
    }
  }
  function m(n2) {
    (!n2.__d && (n2.__d = true) && t.push(n2) && !g.__r++ || r !== l.debounceRendering) && ((r = l.debounceRendering) || o)(g);
  }
  function g() {
    for (var n2; g.__r = t.length; )
      n2 = t.sort(function(n3, l3) {
        return n3.__v.__b - l3.__v.__b;
      }), t = [], n2.some(function(n3) {
        var l3, u3, i3, t2, o2, r3;
        n3.__d && (o2 = (t2 = (l3 = n3).__v).__e, (r3 = l3.__P) && (u3 = [], (i3 = a({}, t2)).__v = t2.__v + 1, j(r3, t2, i3, l3.__n, r3.ownerSVGElement !== void 0, t2.__h != null ? [o2] : null, u3, o2 == null ? k(t2) : o2, t2.__h), z(u3, t2), t2.__e != o2 && b(t2)));
      });
  }
  function w(n2, l3, u3, i3, t2, o2, r3, f2, s3, a3) {
    var h2, v2, p, _2, b2, m2, g2, w2 = i3 && i3.__k || c, A = w2.length;
    for (u3.__k = [], h2 = 0; h2 < l3.length; h2++)
      if ((_2 = u3.__k[h2] = (_2 = l3[h2]) == null || typeof _2 == "boolean" ? null : typeof _2 == "string" || typeof _2 == "number" || typeof _2 == "bigint" ? y(null, _2, null, null, _2) : Array.isArray(_2) ? y(d, { children: _2 }, null, null, null) : _2.__b > 0 ? y(_2.type, _2.props, _2.key, null, _2.__v) : _2) != null) {
        if (_2.__ = u3, _2.__b = u3.__b + 1, (p = w2[h2]) === null || p && _2.key == p.key && _2.type === p.type)
          w2[h2] = void 0;
        else
          for (v2 = 0; v2 < A; v2++) {
            if ((p = w2[v2]) && _2.key == p.key && _2.type === p.type) {
              w2[v2] = void 0;
              break;
            }
            p = null;
          }
        j(n2, _2, p = p || e, t2, o2, r3, f2, s3, a3), b2 = _2.__e, (v2 = _2.ref) && p.ref != v2 && (g2 || (g2 = []), p.ref && g2.push(p.ref, null, _2), g2.push(v2, _2.__c || b2, _2)), b2 != null ? (m2 == null && (m2 = b2), typeof _2.type == "function" && _2.__k != null && _2.__k === p.__k ? _2.__d = s3 = x(_2, s3, n2) : s3 = P(n2, _2, p, w2, b2, s3), a3 || u3.type !== "option" ? typeof u3.type == "function" && (u3.__d = s3) : n2.value = "") : s3 && p.__e == s3 && s3.parentNode != n2 && (s3 = k(p));
      }
    for (u3.__e = m2, h2 = A; h2--; )
      w2[h2] != null && (typeof u3.type == "function" && w2[h2].__e != null && w2[h2].__e == u3.__d && (u3.__d = k(i3, h2 + 1)), N(w2[h2], w2[h2]));
    if (g2)
      for (h2 = 0; h2 < g2.length; h2++)
        M(g2[h2], g2[++h2], g2[++h2]);
  }
  function x(n2, l3, u3) {
    var i3, t2;
    for (i3 = 0; i3 < n2.__k.length; i3++)
      (t2 = n2.__k[i3]) && (t2.__ = n2, l3 = typeof t2.type == "function" ? x(t2, l3, u3) : P(u3, t2, t2, n2.__k, t2.__e, l3));
    return l3;
  }
  function P(n2, l3, u3, i3, t2, o2) {
    var r3, f2, e2;
    if (l3.__d !== void 0)
      r3 = l3.__d, l3.__d = void 0;
    else if (u3 == null || t2 != o2 || t2.parentNode == null)
      n:
        if (o2 == null || o2.parentNode !== n2)
          n2.appendChild(t2), r3 = null;
        else {
          for (f2 = o2, e2 = 0; (f2 = f2.nextSibling) && e2 < i3.length; e2 += 2)
            if (f2 == t2)
              break n;
          n2.insertBefore(t2, o2), r3 = o2;
        }
    return r3 !== void 0 ? r3 : t2.nextSibling;
  }
  function C(n2, l3, u3, i3, t2) {
    var o2;
    for (o2 in u3)
      o2 === "children" || o2 === "key" || o2 in l3 || H(n2, o2, null, u3[o2], i3);
    for (o2 in l3)
      t2 && typeof l3[o2] != "function" || o2 === "children" || o2 === "key" || o2 === "value" || o2 === "checked" || u3[o2] === l3[o2] || H(n2, o2, l3[o2], u3[o2], i3);
  }
  function $(n2, l3, u3) {
    l3[0] === "-" ? n2.setProperty(l3, u3) : n2[l3] = u3 == null ? "" : typeof u3 != "number" || s.test(l3) ? u3 : u3 + "px";
  }
  function H(n2, l3, u3, i3, t2) {
    var o2;
    n:
      if (l3 === "style")
        if (typeof u3 == "string")
          n2.style.cssText = u3;
        else {
          if (typeof i3 == "string" && (n2.style.cssText = i3 = ""), i3)
            for (l3 in i3)
              u3 && l3 in u3 || $(n2.style, l3, "");
          if (u3)
            for (l3 in u3)
              i3 && u3[l3] === i3[l3] || $(n2.style, l3, u3[l3]);
        }
      else if (l3[0] === "o" && l3[1] === "n")
        o2 = l3 !== (l3 = l3.replace(/Capture$/, "")), l3 = l3.toLowerCase() in n2 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + o2] = u3, u3 ? i3 || n2.addEventListener(l3, o2 ? T : I, o2) : n2.removeEventListener(l3, o2 ? T : I, o2);
      else if (l3 !== "dangerouslySetInnerHTML") {
        if (t2)
          l3 = l3.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
        else if (l3 !== "href" && l3 !== "list" && l3 !== "form" && l3 !== "tabIndex" && l3 !== "download" && l3 in n2)
          try {
            n2[l3] = u3 == null ? "" : u3;
            break n;
          } catch (n3) {
          }
        typeof u3 == "function" || (u3 != null && (u3 !== false || l3[0] === "a" && l3[1] === "r") ? n2.setAttribute(l3, u3) : n2.removeAttribute(l3));
      }
  }
  function I(n2) {
    this.l[n2.type + false](l.event ? l.event(n2) : n2);
  }
  function T(n2) {
    this.l[n2.type + true](l.event ? l.event(n2) : n2);
  }
  function j(n2, u3, i3, t2, o2, r3, f2, e2, c3) {
    var s3, h2, v2, y2, p, k2, b2, m2, g2, x2, A, P2 = u3.type;
    if (u3.constructor !== void 0)
      return null;
    i3.__h != null && (c3 = i3.__h, e2 = u3.__e = i3.__e, u3.__h = null, r3 = [e2]), (s3 = l.__b) && s3(u3);
    try {
      n:
        if (typeof P2 == "function") {
          if (m2 = u3.props, g2 = (s3 = P2.contextType) && t2[s3.__c], x2 = s3 ? g2 ? g2.props.value : s3.__ : t2, i3.__c ? b2 = (h2 = u3.__c = i3.__c).__ = h2.__E : ("prototype" in P2 && P2.prototype.render ? u3.__c = h2 = new P2(m2, x2) : (u3.__c = h2 = new _(m2, x2), h2.constructor = P2, h2.render = O), g2 && g2.sub(h2), h2.props = m2, h2.state || (h2.state = {}), h2.context = x2, h2.__n = t2, v2 = h2.__d = true, h2.__h = []), h2.__s == null && (h2.__s = h2.state), P2.getDerivedStateFromProps != null && (h2.__s == h2.state && (h2.__s = a({}, h2.__s)), a(h2.__s, P2.getDerivedStateFromProps(m2, h2.__s))), y2 = h2.props, p = h2.state, v2)
            P2.getDerivedStateFromProps == null && h2.componentWillMount != null && h2.componentWillMount(), h2.componentDidMount != null && h2.__h.push(h2.componentDidMount);
          else {
            if (P2.getDerivedStateFromProps == null && m2 !== y2 && h2.componentWillReceiveProps != null && h2.componentWillReceiveProps(m2, x2), !h2.__e && h2.shouldComponentUpdate != null && h2.shouldComponentUpdate(m2, h2.__s, x2) === false || u3.__v === i3.__v) {
              h2.props = m2, h2.state = h2.__s, u3.__v !== i3.__v && (h2.__d = false), h2.__v = u3, u3.__e = i3.__e, u3.__k = i3.__k, u3.__k.forEach(function(n3) {
                n3 && (n3.__ = u3);
              }), h2.__h.length && f2.push(h2);
              break n;
            }
            h2.componentWillUpdate != null && h2.componentWillUpdate(m2, h2.__s, x2), h2.componentDidUpdate != null && h2.__h.push(function() {
              h2.componentDidUpdate(y2, p, k2);
            });
          }
          h2.context = x2, h2.props = m2, h2.state = h2.__s, (s3 = l.__r) && s3(u3), h2.__d = false, h2.__v = u3, h2.__P = n2, s3 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s, h2.getChildContext != null && (t2 = a(a({}, t2), h2.getChildContext())), v2 || h2.getSnapshotBeforeUpdate == null || (k2 = h2.getSnapshotBeforeUpdate(y2, p)), A = s3 != null && s3.type === d && s3.key == null ? s3.props.children : s3, w(n2, Array.isArray(A) ? A : [A], u3, i3, t2, o2, r3, f2, e2, c3), h2.base = u3.__e, u3.__h = null, h2.__h.length && f2.push(h2), b2 && (h2.__E = h2.__ = null), h2.__e = false;
        } else
          r3 == null && u3.__v === i3.__v ? (u3.__k = i3.__k, u3.__e = i3.__e) : u3.__e = L(i3.__e, u3, i3, t2, o2, r3, f2, c3);
      (s3 = l.diffed) && s3(u3);
    } catch (n3) {
      u3.__v = null, (c3 || r3 != null) && (u3.__e = e2, u3.__h = !!c3, r3[r3.indexOf(e2)] = null), l.__e(n3, u3, i3);
    }
  }
  function z(n2, u3) {
    l.__c && l.__c(u3, n2), n2.some(function(u4) {
      try {
        n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
          n3.call(u4);
        });
      } catch (n3) {
        l.__e(n3, u4.__v);
      }
    });
  }
  function L(l3, u3, i3, t2, o2, r3, f2, c3) {
    var s3, a3, v2, y2 = i3.props, p = u3.props, d2 = u3.type, _2 = 0;
    if (d2 === "svg" && (o2 = true), r3 != null) {
      for (; _2 < r3.length; _2++)
        if ((s3 = r3[_2]) && (s3 === l3 || (d2 ? s3.localName == d2 : s3.nodeType == 3))) {
          l3 = s3, r3[_2] = null;
          break;
        }
    }
    if (l3 == null) {
      if (d2 === null)
        return document.createTextNode(p);
      l3 = o2 ? document.createElementNS("http://www.w3.org/2000/svg", d2) : document.createElement(d2, p.is && p), r3 = null, c3 = false;
    }
    if (d2 === null)
      y2 === p || c3 && l3.data === p || (l3.data = p);
    else {
      if (r3 = r3 && n.call(l3.childNodes), a3 = (y2 = i3.props || e).dangerouslySetInnerHTML, v2 = p.dangerouslySetInnerHTML, !c3) {
        if (r3 != null)
          for (y2 = {}, _2 = 0; _2 < l3.attributes.length; _2++)
            y2[l3.attributes[_2].name] = l3.attributes[_2].value;
        (v2 || a3) && (v2 && (a3 && v2.__html == a3.__html || v2.__html === l3.innerHTML) || (l3.innerHTML = v2 && v2.__html || ""));
      }
      if (C(l3, p, y2, o2, c3), v2)
        u3.__k = [];
      else if (_2 = u3.props.children, w(l3, Array.isArray(_2) ? _2 : [_2], u3, i3, t2, o2 && d2 !== "foreignObject", r3, f2, r3 ? r3[0] : i3.__k && k(i3, 0), c3), r3 != null)
        for (_2 = r3.length; _2--; )
          r3[_2] != null && h(r3[_2]);
      c3 || ("value" in p && (_2 = p.value) !== void 0 && (_2 !== l3.value || d2 === "progress" && !_2) && H(l3, "value", _2, y2.value, false), "checked" in p && (_2 = p.checked) !== void 0 && _2 !== l3.checked && H(l3, "checked", _2, y2.checked, false));
    }
    return l3;
  }
  function M(n2, u3, i3) {
    try {
      typeof n2 == "function" ? n2(u3) : n2.current = u3;
    } catch (n3) {
      l.__e(n3, i3);
    }
  }
  function N(n2, u3, i3) {
    var t2, o2;
    if (l.unmount && l.unmount(n2), (t2 = n2.ref) && (t2.current && t2.current !== n2.__e || M(t2, null, u3)), (t2 = n2.__c) != null) {
      if (t2.componentWillUnmount)
        try {
          t2.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u3);
        }
      t2.base = t2.__P = null;
    }
    if (t2 = n2.__k)
      for (o2 = 0; o2 < t2.length; o2++)
        t2[o2] && N(t2[o2], u3, typeof n2.type != "function");
    i3 || n2.__e == null || h(n2.__e), n2.__e = n2.__d = void 0;
  }
  function O(n2, l3, u3) {
    return this.constructor(n2, u3);
  }
  function S(u3, i3, t2) {
    var o2, r3, f2;
    l.__ && l.__(u3, i3), r3 = (o2 = typeof t2 == "function") ? null : t2 && t2.__k || i3.__k, f2 = [], j(i3, u3 = (!o2 && t2 || i3).__k = v(d, null, [u3]), r3 || e, e, i3.ownerSVGElement !== void 0, !o2 && t2 ? [t2] : r3 ? null : i3.firstChild ? n.call(i3.childNodes) : null, f2, !o2 && t2 ? t2 : r3 ? r3.__e : i3.firstChild, o2), z(f2, u3);
  }
  function q(n2, l3) {
    S(n2, l3, q);
  }
  function B(l3, u3, i3) {
    var t2, o2, r3, f2 = a({}, l3.props);
    for (r3 in u3)
      r3 == "key" ? t2 = u3[r3] : r3 == "ref" ? o2 = u3[r3] : f2[r3] = u3[r3];
    return arguments.length > 2 && (f2.children = arguments.length > 3 ? n.call(arguments, 2) : i3), y(l3.type, f2, t2 || l3.key, o2 || l3.ref, null);
  }
  n = c.slice, l = { __e: function(n2, l3) {
    for (var u3, i3, t2; l3 = l3.__; )
      if ((u3 = l3.__c) && !u3.__)
        try {
          if ((i3 = u3.constructor) && i3.getDerivedStateFromError != null && (u3.setState(i3.getDerivedStateFromError(n2)), t2 = u3.__d), u3.componentDidCatch != null && (u3.componentDidCatch(n2), t2 = u3.__d), t2)
            return u3.__E = u3;
        } catch (l4) {
          n2 = l4;
        }
    throw n2;
  } }, u = 0, i = function(n2) {
    return n2 != null && n2.constructor === void 0;
  }, _.prototype.setState = function(n2, l3) {
    var u3;
    u3 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = a({}, this.state), typeof n2 == "function" && (n2 = n2(a({}, u3), this.props)), n2 && a(u3, n2), n2 != null && this.__v && (l3 && this.__h.push(l3), m(this));
  }, _.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), m(this));
  }, _.prototype.render = d, t = [], o = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g.__r = 0, f = 0;

  // node_modules/preact-custom-element/dist/preact-custom-element.esm.js
  function r2() {
    return (r2 = Object.assign || function(t2) {
      for (var e2 = 1; e2 < arguments.length; e2++) {
        var n2 = arguments[e2];
        for (var o2 in n2)
          Object.prototype.hasOwnProperty.call(n2, o2) && (t2[o2] = n2[o2]);
      }
      return t2;
    }).apply(this, arguments);
  }
  function i2(t2) {
    this.getChildContext = function() {
      return t2.context;
    };
    var e2 = t2.children, n2 = function(t3, e3) {
      if (t3 == null)
        return {};
      var n3, o2, r3 = {}, i3 = Object.keys(t3);
      for (o2 = 0; o2 < i3.length; o2++)
        e3.indexOf(n3 = i3[o2]) >= 0 || (r3[n3] = t3[n3]);
      return r3;
    }(t2, ["context", "children"]);
    return B(e2, n2);
  }
  function a2() {
    var o2 = new CustomEvent("_preact", { detail: {}, bubbles: true, cancelable: true });
    this.dispatchEvent(o2), this._vdom = v(i2, r2({}, this._props, { context: o2.detail.context }), function e2(n2, o3) {
      if (n2.nodeType === 3)
        return n2.data;
      if (n2.nodeType !== 1)
        return null;
      var r3 = [], i3 = {}, a3 = 0, c3 = n2.attributes, l3 = n2.childNodes;
      for (a3 = c3.length; a3--; )
        c3[a3].name !== "slot" && (i3[c3[a3].name] = c3[a3].value, i3[s2(c3[a3].name)] = c3[a3].value);
      for (a3 = l3.length; a3--; ) {
        var p = e2(l3[a3], null), d2 = l3[a3].slot;
        d2 ? i3[d2] = v(u2, { name: d2 }, p) : r3[a3] = p;
      }
      var h2 = o3 ? v(u2, null, r3) : r3;
      return v(o3 || n2.nodeName.toLowerCase(), i3, h2);
    }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? q : S)(this._vdom, this._root);
  }
  function s2(t2) {
    return t2.replace(/-(\w)/g, function(t3, e2) {
      return e2 ? e2.toUpperCase() : "";
    });
  }
  function c2(t2, e2, r3) {
    if (this._vdom) {
      var i3 = {};
      i3[t2] = r3 = r3 == null ? void 0 : r3, i3[s2(t2)] = r3, this._vdom = B(this._vdom, i3), S(this._vdom, this._root);
    }
  }
  function l2() {
    S(this._vdom = null, this._root);
  }
  function u2(e2, n2) {
    var o2 = this;
    return v("slot", r2({}, e2, { ref: function(t2) {
      t2 ? (o2.ref = t2, o2._listener || (o2._listener = function(t3) {
        t3.stopPropagation(), t3.detail.context = n2;
      }, t2.addEventListener("_preact", o2._listener))) : o2.ref.removeEventListener("_preact", o2._listener);
    } }));
  }
  function preact_custom_element_esm_default(t2, e2, n2, o2) {
    function r3() {
      var e3 = Reflect.construct(HTMLElement, [], r3);
      return e3._vdomComponent = t2, e3._root = o2 && o2.shadow ? e3.attachShadow({ mode: "open" }) : e3, e3;
    }
    return (r3.prototype = Object.create(HTMLElement.prototype)).constructor = r3, r3.prototype.connectedCallback = a2, r3.prototype.attributeChangedCallback = c2, r3.prototype.disconnectedCallback = l2, n2 = n2 || t2.observedAttributes || Object.keys(t2.propTypes || {}), r3.observedAttributes = n2, n2.forEach(function(t3) {
      Object.defineProperty(r3.prototype, t3, { get: function() {
        return this._vdom.props[t3];
      }, set: function(e3) {
        this._vdom ? this.attributeChangedCallback(t3, null, e3) : (this._props || (this._props = {}), this._props[t3] = e3, this.connectedCallback());
        var n3 = typeof e3;
        e3 != null && n3 !== "string" && n3 !== "boolean" && n3 !== "number" || this.setAttribute(t3, e3);
      } });
    }), customElements.define(e2 || t2.tagName || t2.displayName || t2.name, r3);
  }

  // src/sw-button/sw-button.style.css
  var sw_button_style_default = "input {\n    padding: .4rem;\n    font-size: 1rem;\n    border: 0;\n    border-bottom: 1px solid lightgray;\n    border-radius: 3px;\n}\n\ninput[type=text], input[type=password] {\n    margin-bottom: .5rem;\n}\n\ninput[type=submit] {\n    width: fit-content;\n    margin-top: .5rem;\n    color: var(--foreground-color);\n    cursor: pointer;\n    background: var(--primary-color-100);\n    border: none;\n}\n\ninput[type=submit]:disabled,\ninput[type=submit]:disabled:hover {\n    background: var(--primary-color-40);\n}\n\ninput[type=submit]:hover {\n    background: var(--primary-color-90);\n}\n\ninput[type=submit]:active {\n    background: var(--primary-color-70);\n}\n\ninput.primary,\ninput.danger {\n    width: fit-content;\n    background: var(--primary-color-100);\n    color: white;\n    border: 0;\n    cursor: pointer;\n    white-space: nowrap;\n}\n\ninput.primary:hover {\n    background: var(--primary-color-90);\n    outline: 0;\n}\n\ninput.primary:focus,\ninput[type=submit]:focus {\n    box-shadow: 0 0 2px 1px var(--primary-color-70);\n}\n\ninput.danger:hover {\n    background: rgba(255, 0, 0, 0.8);\n    outline: 0;\n}\n\ninput.danger:focus {\n    box-shadow: 0 0 2px 1px rgba(255, 0, 0, 0.8);\n}\n\nlabel:not(.toggle) {\n    position: relative;\n    top: -2.1rem;\n    left: .45rem;\n    transition: .2s ease-out all;\n    cursor: text;\n    height: 1rem;\n}\n\ninput:focus + label,\ninput:not(:placeholder-shown) + label {\n    top: -4rem;\n    font-size: .85rem;\n    color: gray;\n}\n";

  // src/sw-button/sw-button.jsx
  var SwButton = class extends _ {
    render({ swClass, icon, buttonText }) {
      const innerText = this.props.children.props.children;
      return /* @__PURE__ */ v(d, null, /* @__PURE__ */ v("style", null, sw_button_style_default), /* @__PURE__ */ v("input", {
        className: swClass,
        type: "button",
        value: innerText.length ? innerText : buttonText,
        role: "button",
        "aria-labelledby": innerText.length ? innerText : buttonText
      }));
    }
  };

  // src/sw-loader/sw-loader.style.css
  var sw_loader_style_default = "@keyframes loader-1 {\n    0% {\n        top: 17px;\n        height: 115px\n    }\n    50% {\n        top: 39px;\n        height: 72px\n    }\n    100% {\n        top: 39px;\n        height: 72px\n    }\n}\n\n@keyframes loader-2 {\n    0% {\n        top: 23px;\n        height: 104px\n    }\n    50% {\n        top: 39px;\n        height: 72px\n    }\n    100% {\n        top: 39px;\n        height: 72px\n    }\n}\n\n@keyframes loader-3 {\n    0% {\n        top: 28px;\n        height: 94px\n    }\n    50% {\n        top: 39px;\n        height: 72px\n    }\n    100% {\n        top: 39px;\n        height: 72px\n    }\n}\n\n.loader div {\n    position: absolute;\n    width: 18px\n}\n\n.loader div:nth-child(1) {\n    left: 28.5px;\n    background: var(--primary-color-100);\n    animation: loader-1 1s cubic-bezier(0, .5, .5, 1) infinite;\n    animation-delay: -0.2s\n}\n\n.loader div:nth-child(2) {\n    left: 66px;\n    background: var(--primary-color-70);\n    animation: loader-2 1s cubic-bezier(0, .5, .5, 1) infinite;\n    animation-delay: -0.1s\n}\n\n.loader div:nth-child(3) {\n    left: 103.5px;\n    background: var(--primary-color-40);\n    animation: loader-3 1s cubic-bezier(0, .5, .5, 1) infinite;\n}\n\n.loader-box {\n    width: 150px;\n    height: 150px;\n    display: inline-block;\n    overflow: hidden;\n    background: none;\n}\n\n.loader {\n    width: 100%;\n    height: 100%;\n    position: relative;\n    transform: translateZ(0) scale(1);\n    backface-visibility: hidden;\n    transform-origin: 0 0;\n}\n\n.loader div {\n    box-sizing: content-box;\n}\n";

  // src/sw-loader/sw-loader.jsx
  var SwLoader = class extends _ {
    render() {
      return /* @__PURE__ */ v(d, null, /* @__PURE__ */ v("style", null, sw_loader_style_default), /* @__PURE__ */ v("div", {
        className: "loader-box"
      }, /* @__PURE__ */ v("div", {
        className: "loader"
      }, /* @__PURE__ */ v("div", null), /* @__PURE__ */ v("div", null), /* @__PURE__ */ v("div", null))));
    }
  };

  // src/sw-table/sw-table.style.css
  var sw_table_style_default = "table {\n    width: 100%;\n    border-collapse: collapse;\n    border-spacing: 0;\n    text-align: left;\n    background: #fbfbfb;\n}\n\nthead {\n    font-style: italic;\n    color: darkgray;\n}\n\ntbody tr:nth-child(even) {\n    background: white;\n}\n\ntbody tr:nth-child(odd) {\n    border-bottom: 1px solid #eeeeee;\n}\n\nth, td {\n    padding: .5rem;\n}\n\ntd.components *:not(:first-child) {\n    margin-left: 2rem;\n}\n";

  // src/sw-table/sw-table.jsx
  var SwTable = class extends _ {
    render({ source: source2, fields: fields2 }) {
      if (source2 && fields2 && typeof source2 === "object" && typeof fields2 === "object") {
        this.setState({
          source: source2,
          fields: fields2
        });
      }
      if (this.state.source && this.state.fields) {
        return /* @__PURE__ */ v(d, null, /* @__PURE__ */ v("style", null, sw_table_style_default), /* @__PURE__ */ v("table", null, /* @__PURE__ */ v("thead", null, /* @__PURE__ */ v("tr", null, this.state.fields?.map((field) => /* @__PURE__ */ v("th", null, field?.label)))), /* @__PURE__ */ v("tbody", null, this.state.source?.map((item) => /* @__PURE__ */ v("tr", null, this.state.fields?.map((field) => field.component ? /* @__PURE__ */ v("td", {
          className: "components",
          nowrap: true
        }, field?.component(item)) : /* @__PURE__ */ v("td", {
          nowrap: true
        }, item[field?.field])))))));
      } else {
        return /* @__PURE__ */ v(d, null, /* @__PURE__ */ v("style", null, sw_table_style_default), /* @__PURE__ */ v("sw-loader", null));
      }
    }
  };

  // src/index.js
  preact_custom_element_esm_default(SwButton, "sw-button", [], { shadow: true });
  preact_custom_element_esm_default(SwLoader, "sw-loader", [], { shadow: true });
  preact_custom_element_esm_default(SwTable, "sw-table", ["source", "fields"], { shadow: true });

  // test-client/index.jsx
  var source = [
    {
      id: "2f984f9a51903dd2af4c6cf3cd00141f",
      rev: "10-2fb3414188f50f26b50978f41f905e28",
      docType: "genericArticle",
      label: "Article 1",
      revCreatedBy: "John",
      revCreatedAt: 1629795068605
    },
    {
      id: "djl03f9a51903dd2af4c6cf3cdww993d",
      rev: "08-2d03414188f50f26b50978f41f90244d",
      docType: "genericArticle",
      label: "Article 2",
      revCreatedBy: "Will",
      revCreatedAt: 1630145063766
    }
  ];
  var fields = [
    {
      label: "Tytu\u0142",
      field: "label",
      sortable: true
    },
    {
      label: "Utworzy\u0142",
      field: "revCreatedBy",
      sortable: true
    },
    {
      label: "Data utworzenia",
      field: "revCreatedAt",
      sortable: true
    },
    {
      label: "Actions",
      component: (item) => /* @__PURE__ */ v(d, null, /* @__PURE__ */ v("sw-button", {
        "sw-class": "danger",
        icon: "fas fa-info-circle",
        onclick: () => onDetailsItemClick(item),
        "button-text": "Szczeg\xF3\u0142y"
      }, "Szczeg\xF3\u0142y"), /* @__PURE__ */ v("sw-button", {
        "sw-class": "primary",
        icon: "trash",
        onclick: () => onRemoveItemClick(item),
        "button-text": "Usu\u0144"
      }, "Usu\u0144"))
    }
  ];
  var Main = class extends _ {
    render() {
      return /* @__PURE__ */ v(d, null, /* @__PURE__ */ v("sw-table", {
        source,
        fields
      }));
    }
  };
  S(v(Main), document.body);
})();
//# sourceMappingURL=build.js.map
