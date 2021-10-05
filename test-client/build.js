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
  var sw_button_style_default = "button {\n    color: var(--foreground-color);\n    background: var(--primary-color-70);\n    padding: .4rem;\n    font-size: 1rem;\n    cursor: pointer;\n    border: none;\n    border-radius: 3px;\n    white-space: nowrap;\n}\n\nbutton:disabled,\nbutton:disabled:hover {\n    background: var(--primary-color-40);\n}\n\nbutton:hover {\n    background: var(--primary-color-100);\n}\n\nbutton:active {\n    background: var(--primary-color-100);\n    box-shadow: 0 0 2px 1px var(--primary-color-100);\n}\n";

  // src/sw-button/sw-button.jsx
  var SwButton = class extends _ {
    render({ icon, disabled }) {
      const child = this.props.children.props.children;
      return /* @__PURE__ */ v(d, null, /* @__PURE__ */ v("style", null, sw_button_style_default), /* @__PURE__ */ v("button", {
        type: "button",
        role: "button",
        disabled: disabled !== "false" && !!disabled
      }, child));
    }
  };

  // src/sw-text-input/sw-text-input.style.css
  var sw_text_input_style_default = "*, ::after, ::before {\n    box-sizing: border-box;\n}\n\n.input-wrapper {\n    position: relative;\n    margin: 1.5rem 0;\n}\n\ninput {\n    width: 100%;\n    padding: .4rem;\n    font-size: 1rem;\n    border: 0;\n    border-bottom: 1px solid lightgray;\n    background: var(--background-color);\n}\n\ninput[type=text], input[type=password] {\n    margin-bottom: .5rem;\n}\n\ninput[type=submit] {\n    width: fit-content;\n    margin-top: .5rem;\n    color: var(--foreground-color);\n    cursor: pointer;\n    background: var(--primary-color-100);\n    border: none;\n}\n\ninput[type=submit]:disabled,\ninput[type=submit]:disabled:hover {\n    background: var(--primary-color-40);\n}\n\ninput[type=submit]:hover {\n    background: var(--primary-color-90);\n}\n\ninput[type=submit]:active {\n    background: var(--primary-color-70);\n}\n\ninput.primary,\ninput.danger {\n    width: fit-content;\n    background: var(--primary-color-100);\n    color: white;\n    border: 0;\n    cursor: pointer;\n    white-space: nowrap;\n}\n\ninput.primary:hover {\n    background: var(--primary-color-90);\n    outline: 0;\n}\n\ninput.primary:focus,\ninput[type=submit]:focus {\n    box-shadow: 0 0 2px 1px var(--primary-color-70);\n}\n\ninput.danger:hover {\n    background: rgba(255, 0, 0, 0.8);\n    outline: 0;\n}\n\ninput.danger:focus {\n    box-shadow: 0 0 2px 1px rgba(255, 0, 0, 0.8);\n}\n\nlabel:not(.toggle) {\n    position: absolute;\n    top: .5rem;\n    left: .4rem;\n    transition: .2s ease-out all;\n    cursor: text;\n    height: 1rem;\n}\n\ninput:focus + label,\ninput:not(:placeholder-shown) + label {\n    top: -1.5rem;\n    font-size: .85rem;\n    color: gray;\n}\n\ninput:focus-visible {\n    outline: 0;\n    border-bottom-color: var(--primary-color-100);\n    box-shadow: 0 1px 0 0 var(--primary-color-100);\n}\n";

  // src/sw-text-input/sw-text-input.jsx
  var SwTextInput = class extends _ {
    render({ name, required, placeholder, disabled, value }) {
      return /* @__PURE__ */ v(d, null, /* @__PURE__ */ v("style", null, sw_text_input_style_default), /* @__PURE__ */ v("div", {
        className: "input-wrapper"
      }, /* @__PURE__ */ v("input", {
        ref: (node) => this.ref = node,
        id: name,
        name,
        type: "text",
        required: required === "true",
        placeholder: " ",
        disabled,
        value,
        onInput: (e2) => this.ref.getRootNode().host.dispatchEvent(new CustomEvent("changeEvent", {
          detail: { name, value: e2.target.value },
          bubbles: true
        })),
        "aria-labelledby": placeholder
      }), /* @__PURE__ */ v("label", {
        htmlFor: name
      }, placeholder)));
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

  // src/sw-pagination/sw-pagination.style.css
  var sw_pagination_style_default = "a {\n    text-decoration: none;\n}\n\n.wrapper {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    padding-top: 2rem;\n}\n\ndiv.wrapper a,\ndiv.wrapper span {\n    margin: 0 .5rem;\n}\n\n#next {\n    margin-left: .5rem;\n}\n\n.currentPage {\n    color: var(--primary-color-100)\n}\n\n.previous, .next {\n    font-weight: bold;\n    text-transform: uppercase;\n    letter-spacing: .125rem;\n}\n\nspan:not(span.currentPage, span.caption) {\n    cursor: pointer;\n}\n";

  // src/sw-pagination/sw-pagination.jsx
  var SwPagination = class extends _ {
    pageChange(page) {
      this.ref.getRootNode().host.dispatchEvent(new CustomEvent("pageChange", {
        detail: { page },
        bubbles: true
      }));
    }
    render({ currentPage, numberOfPages }) {
      currentPage = Number.parseInt(currentPage);
      numberOfPages = Number.parseInt(numberOfPages);
      return /* @__PURE__ */ v(d, null, /* @__PURE__ */ v("style", null, sw_pagination_style_default), /* @__PURE__ */ v("div", {
        ref: (node) => this.ref = node,
        className: "wrapper"
      }, currentPage > 1 ? /* @__PURE__ */ v("span", {
        className: "previous",
        onClick: () => this.pageChange(currentPage - 1)
      }, "Previous page") : "", numberOfPages > 1 && currentPage !== 1 ? /* @__PURE__ */ v("span", {
        onClick: () => this.pageChange(1)
      }, "1") : "", numberOfPages > 7 && currentPage > 4 || numberOfPages === 7 && currentPage > 5 ? /* @__PURE__ */ v("span", {
        className: "caption"
      }, "...") : "", currentPage - 4 > 0 && currentPage + 1 > numberOfPages && currentPage !== 5 ? /* @__PURE__ */ v("span", {
        onClick: () => this.pageChange(currentPage - 4)
      }, currentPage - 4) : "", currentPage - 3 > 0 && currentPage + 2 > numberOfPages && currentPage !== 4 ? /* @__PURE__ */ v("span", {
        onClick: () => this.pageChange(currentPage - 3)
      }, currentPage - 3) : "", currentPage - 2 > 0 && currentPage !== 3 ? /* @__PURE__ */ v("span", {
        onClick: () => this.pageChange(currentPage - 2)
      }, currentPage - 2) : "", currentPage - 1 > 0 && currentPage !== 2 ? /* @__PURE__ */ v("span", {
        onClick: () => this.pageChange(currentPage - 1)
      }, currentPage - 1) : "", /* @__PURE__ */ v("span", {
        className: "currentPage"
      }, currentPage), currentPage + 1 <= numberOfPages ? /* @__PURE__ */ v("span", {
        onClick: () => this.pageChange(currentPage + 1)
      }, currentPage + 1) : "", currentPage + 2 <= numberOfPages ? /* @__PURE__ */ v("span", {
        onClick: () => this.pageChange(currentPage + 2)
      }, currentPage + 2) : "", currentPage + 3 <= numberOfPages && currentPage - 4 < 4 && currentPage < 4 ? /* @__PURE__ */ v("span", {
        onClick: () => this.pageChange(currentPage + 3)
      }, currentPage + 3) : "", currentPage + 4 <= numberOfPages && currentPage - 4 < 4 && currentPage < 3 ? /* @__PURE__ */ v("span", {
        onClick: () => this.pageChange(currentPage + 4)
      }, currentPage + 4) : "", /* @__PURE__ */ v("span", {
        className: "caption"
      }, "of"), /* @__PURE__ */ v("span", {
        className: "caption"
      }, numberOfPages), numberOfPages > 1 && numberOfPages - currentPage !== 0 ? /* @__PURE__ */ v("span", {
        className: "next",
        onClick: () => this.pageChange(currentPage + 1)
      }, "Next page") : ""));
    }
  };

  // src/sw-table/sw-table.style.css
  var sw_table_style_default = "table {\n    width: 100%;\n    border-collapse: collapse;\n    border-spacing: 0;\n    text-align: left;\n    background: #fbfbfb;\n}\n\nthead {\n    font-style: italic;\n    color: darkgray;\n}\n\ntbody tr:nth-child(even) {\n    background: white;\n}\n\ntbody tr:nth-child(odd) {\n    border-bottom: 1px solid #eeeeee;\n}\n\nth, td {\n    padding: .5rem;\n}\n\ntd.components *:not(:first-child) {\n    margin-left: 2rem;\n}\n";

  // src/sw-table/sw-table.jsx
  var SwTable = class extends _ {
    render({ config: { source, fields } }) {
      if (source && typeof source === "string") {
        source = JSON.parse(source);
      }
      if (fields && typeof fields === "string") {
        fields = JSON.parse(fields);
      }
      if (source && fields) {
        return /* @__PURE__ */ v(d, null, /* @__PURE__ */ v("style", null, sw_table_style_default), /* @__PURE__ */ v("table", null, /* @__PURE__ */ v("thead", null, /* @__PURE__ */ v("tr", null, fields?.map((field) => /* @__PURE__ */ v("th", null, field?.label)))), /* @__PURE__ */ v("tbody", null, source?.map((item) => /* @__PURE__ */ v("tr", null, fields?.map((field) => field.component ? /* @__PURE__ */ v("td", {
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

  // src/sw-utils/sw-flash-message/sw-flash-message.style.css
  var sw_flash_message_style_default = ".message-container {\n    position: fixed;\n    top: 2rem;\n    right: 2rem;\n    display: flex;\n    flex-direction: column;\n}\n\n.flash-message {\n    display: flex;\n    backdrop-filter: blur(3px);\n    margin-bottom: 1rem;\n    cursor: pointer;\n    min-height: 3.5rem;\n    box-shadow: rgba(0, 0, 0, 0.04) 0 3px 5px;\n    border-radius: var(--radius);\n}\n\n.content {\n    display: flex;\n    width: 20rem;\n    justify-content: center;\n    align-items: center;\n    padding: 1rem;\n    border-radius: 0 var(--radius) var(--radius) 0;\n    color: #333841;\n}\n\n.icon {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 4rem;\n    border-radius: var(--radius) 0 0 var(--radius);\n}\n\n.info {\n    background: rgba(84, 178, 255, 0.3);\n}\n\n.info-border {\n    border: 1px solid rgba(0, 146, 255, 0.4);\n}\n\n.success {\n    background: rgba(0, 248, 65, 0.3);\n}\n\n.success-border {\n    border: 1px solid rgba(74, 194, 107, 0.4);\n}\n\n.warning {\n    background: rgba(255, 233, 30, 0.3);\n}\n\n.warning-border {\n    border: 1px solid rgba(212, 167, 44, 0.4)\n}\n\n.error {\n    background: rgba(255, 94, 64, 0.3);\n}\n\n.error-border {\n    border: 1px solid rgba(255, 129, 130, 0.4);\n}\n\n/* ----------------------------------------------\n * Generated by Animista on 2021-10-1 11:48:55\n * Licensed under FreeBSD License.\n * See http://animista.net/license for more info.\n * w: http://animista.net, t: @cssanimista\n * ---------------------------------------------- */\n\n/**\n * ----------------------------------------\n * animation bounce-right\n * ----------------------------------------\n */\n.bounce-right {\n    -webkit-animation: bounce-right 0.8s both;\n    animation: bounce-right 0.8s both;\n}\n\n@-webkit-keyframes bounce-right {\n    0% {\n        -webkit-transform: translateX(48px);\n        transform: translateX(48px);\n        -webkit-animation-timing-function: ease-in;\n        animation-timing-function: ease-in;\n        opacity: 1;\n    }\n    24% {\n        opacity: 1;\n    }\n    40% {\n        -webkit-transform: translateX(26px);\n        transform: translateX(26px);\n        -webkit-animation-timing-function: ease-in;\n        animation-timing-function: ease-in;\n    }\n    65% {\n        -webkit-transform: translateX(13px);\n        transform: translateX(13px);\n        -webkit-animation-timing-function: ease-in;\n        animation-timing-function: ease-in;\n    }\n    82% {\n        -webkit-transform: translateX(6.5px);\n        transform: translateX(6.5px);\n        -webkit-animation-timing-function: ease-in;\n        animation-timing-function: ease-in;\n    }\n    93% {\n        -webkit-transform: translateX(4px);\n        transform: translateX(4px);\n        -webkit-animation-timing-function: ease-in;\n        animation-timing-function: ease-in;\n    }\n    25%,\n    55%,\n    75%,\n    87%,\n    98% {\n        -webkit-transform: translateX(0px);\n        transform: translateX(0px);\n        -webkit-animation-timing-function: ease-out;\n        animation-timing-function: ease-out;\n    }\n    100% {\n        -webkit-transform: translateX(0px);\n        transform: translateX(0px);\n        -webkit-animation-timing-function: ease-out;\n        animation-timing-function: ease-out;\n        opacity: 1;\n    }\n}\n\n@keyframes bounce-right {\n    0% {\n        -webkit-transform: translateX(48px);\n        transform: translateX(48px);\n        -webkit-animation-timing-function: ease-in;\n        animation-timing-function: ease-in;\n        opacity: 1;\n    }\n    24% {\n        opacity: 1;\n    }\n    40% {\n        -webkit-transform: translateX(26px);\n        transform: translateX(26px);\n        -webkit-animation-timing-function: ease-in;\n        animation-timing-function: ease-in;\n    }\n    65% {\n        -webkit-transform: translateX(13px);\n        transform: translateX(13px);\n        -webkit-animation-timing-function: ease-in;\n        animation-timing-function: ease-in;\n    }\n    82% {\n        -webkit-transform: translateX(6.5px);\n        transform: translateX(6.5px);\n        -webkit-animation-timing-function: ease-in;\n        animation-timing-function: ease-in;\n    }\n    93% {\n        -webkit-transform: translateX(4px);\n        transform: translateX(4px);\n        -webkit-animation-timing-function: ease-in;\n        animation-timing-function: ease-in;\n    }\n    25%,\n    55%,\n    75%,\n    87%,\n    98% {\n        -webkit-transform: translateX(0px);\n        transform: translateX(0px);\n        -webkit-animation-timing-function: ease-out;\n        animation-timing-function: ease-out;\n    }\n    100% {\n        -webkit-transform: translateX(0px);\n        transform: translateX(0px);\n        -webkit-animation-timing-function: ease-out;\n        animation-timing-function: ease-out;\n        opacity: 1;\n    }\n}\n\n/**\n * ----------------------------------------\n * animation slide-out-blurred-right\n * ----------------------------------------\n */\n.slide-out-blurred-right {\n    -webkit-animation: slide-out-blurred-right 0.45s cubic-bezier(0.755, 0.050, 0.855, 0.060) both;\n    animation: slide-out-blurred-right 0.45s cubic-bezier(0.755, 0.050, 0.855, 0.060) both;\n}\n\n@-webkit-keyframes slide-out-blurred-right {\n    0% {\n        -webkit-transform: translateX(0) scaleY(1) scaleX(1);\n        transform: translateX(0) scaleY(1) scaleX(1);\n        -webkit-transform-origin: 50% 50%;\n        transform-origin: 50% 50%;\n        -webkit-filter: blur(0);\n        filter: blur(0);\n        opacity: 1;\n    }\n    100% {\n        -webkit-transform: translateX(1000px) scaleX(2) scaleY(0.2);\n        transform: translateX(1000px) scaleX(2) scaleY(0.2);\n        -webkit-transform-origin: 0 50%;\n        transform-origin: 0 50%;\n        -webkit-filter: blur(40px);\n        filter: blur(40px);\n        opacity: 0;\n    }\n}\n\n@keyframes slide-out-blurred-right {\n    0% {\n        -webkit-transform: translateX(0) scaleY(1) scaleX(1);\n        transform: translateX(0) scaleY(1) scaleX(1);\n        -webkit-transform-origin: 50% 50%;\n        transform-origin: 50% 50%;\n        -webkit-filter: blur(0);\n        filter: blur(0);\n        opacity: 1;\n    }\n    100% {\n        -webkit-transform: translateX(1000px) scaleX(2) scaleY(0.2);\n        transform: translateX(1000px) scaleX(2) scaleY(0.2);\n        -webkit-transform-origin: 0 50%;\n        transform-origin: 0 50%;\n        -webkit-filter: blur(40px);\n        filter: blur(40px);\n        opacity: 0;\n    }\n}\n";

  // src/sw-utils/sw-flash-message/sw-flash-message.jsx
  var isStyleFileAdded = false;
  function addStyleFile() {
    const style = document.createElement("style");
    style.innerHTML = sw_flash_message_style_default;
    document.head.appendChild(style);
    isStyleFileAdded = true;
  }
  function manageMessageContainer(withAction) {
    if (!document.querySelector(".message-container") && !withAction) {
      const messageContainer2 = document.createElement("div");
      messageContainer2.classList.add("message-container");
      document.body.appendChild(messageContainer2);
      return;
    }
    const messageContainer = document.querySelector(".message-container");
    if (messageContainer && !messageContainer.hasChildNodes()) {
      messageContainer.remove();
    }
  }
  function displayFlashMessage(flashMessage2) {
    manageMessageContainer();
    const messageContainer = document.querySelector(".message-container");
    messageContainer.appendChild(flashMessage2);
  }
  function flashMessage(message, level) {
    if (typeof message !== "string" || level && typeof level !== "string") {
      throw new Error("The passed parameters are not strings");
    }
    if (!isStyleFileAdded)
      addStyleFile();
    const item = document.createElement("div");
    switch (level) {
      default:
      case "info": {
        item.innerHTML = `<div class="flash-message bounce-right info-border">
                                  <div class="icon info">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" fill="var(--flash-info-color)" />
                                          <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" fill="var(--flash-info-color)" />
                                      </svg>
                                  </div>
                                  <div class="content">${message}</div>
                              </div>`;
        break;
      }
      case "success": {
        item.innerHTML = `<div class="flash-message bounce-right success-border">
                                  <div class="icon success">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" fill="var(--flash-success-color)" />
                                          <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" fill="var(--flash-success-color)" />
                                      </svg>
                                  </div>
                                  <div class="content">${message}</div>
                              </div>`;
        break;
      }
      case "warning": {
        item.innerHTML = `<div class="flash-message bounce-right warning-border">
                                  <div class="icon warning">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" fill="var(--flash-warning-color)" />
                                          <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" fill="var(--flash-warning-color)" />
                                      </svg>
                                  </div>
                                  <div class="content">${message}</div>
                              </div>`;
        break;
      }
      case "error": {
        item.innerHTML = `<div class="flash-message bounce-right error-border">
                                  <div class="icon error">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 16 16">
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" fill="var(--flash-warning-color)" />
                                          <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" fill="var(--flash-warning-color)" />
                                      </svg>
                                  </div>
                                  <div class="content">${message}</div>
                              </div>`;
        break;
      }
    }
    const flashMessage2 = item.firstChild;
    flashMessage2.onclick = () => {
      flashMessage2.classList.add("slide-out-blurred-right");
      setTimeout(() => {
        flashMessage2.remove();
        manageMessageContainer(true);
      }, 500);
    };
    setTimeout(() => {
      flashMessage2.classList.add("slide-out-blurred-right");
      setTimeout(() => {
        flashMessage2.remove();
        manageMessageContainer(true);
      }, 500);
    }, 1e4);
    displayFlashMessage(flashMessage2);
  }

  // src/index.js
  preact_custom_element_esm_default(SwButton, "sw-button", ["icon", "disabled"], { shadow: true });
  preact_custom_element_esm_default(SwTextInput, "sw-text-input", ["name", "required", "placeholder", "disabled", "value"], { shadow: true });
  preact_custom_element_esm_default(SwLoader, "sw-loader", [], { shadow: true });
  preact_custom_element_esm_default(SwPagination, "sw-pagination", ["current-page", "number-of-pages"], { shadow: true });
  preact_custom_element_esm_default(SwTable, "sw-table", ["config"], { shadow: true });

  // test-client/index.jsx
  var Main = class extends _ {
    render() {
      return /* @__PURE__ */ v(d, null, /* @__PURE__ */ v("h2", {
        style: "cursor: pointer",
        onClick: () => {
          flashMessage("Info flash message", "info");
          flashMessage("Success flash message", "success");
          flashMessage("Warning flash message", "warning");
          flashMessage("Error flash message", "error");
        }
      }, "Click here to test flash messages"), /* @__PURE__ */ v("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam distinctio, excepturi iste nostrum odit quibusdam quisquam sunt tempore ullam voluptates. Aperiam commodi debitis doloremque, error et hic in mollitia nemo numquam rem, tempora ut vel? Debitis dolorem excepturi illo non odit provident quas rerum, tempore voluptatibus! Alias animi aut blanditiis consequuntur culpa debitis delectus deleniti dignissimos dolor dolores eius eligendi enim et, exercitationem illum in ipsa iusto laborum molestias, necessitatibus neque nisi nobis obcaecati pariatur porro praesentium quam quas quisquam repellendus saepe sit soluta sunt unde vel vero voluptatem voluptates. Amet aperiam autem consectetur cum cumque doloremque eius eos error facilis hic illum ipsum, iure laboriosam molestiae natus nisi numquam odit optio perspiciatis praesentium quis quos recusandae reiciendis sunt tenetur ullam, vitae! Aspernatur, deserunt distinctio doloremque et facere fuga fugiat in inventore iste itaque nihil placeat possimus reiciendis totam veritatis. Ad aut consequatur delectus distinctio dolor dolorem est eum eveniet fugiat harum illo, maiores minima mollitia quam, quos. Cupiditate esse id pariatur ullam. Alias eum nemo nobis, quod quos similique sit. Alias animi delectus doloremque ducimus, error, est, facilis fugit laborum laudantium natus nihil omnis praesentium quidem sunt ullam! A, ad deserunt dolorum ea exercitationem in laudantium officia quam, quas quasi quidem, sequi vero. Alias animi aperiam consectetur distinctio dolore ea eligendi fugiat itaque magnam maxime neque nobis, perferendis, porro quaerat quam repellat, repellendus repudiandae saepe tempore temporibus ullam veniam voluptatum? Accusamus aliquid consequuntur cupiditate dicta doloremque dolores dolorum eaque esse eveniet excepturi facere facilis fuga in laborum magnam maiores minima modi nostrum, obcaecati odio omnis quas repellendus reprehenderit sit soluta tenetur voluptatum? Aliquid atque aut autem culpa dignissimos doloremque ea eligendi exercitationem illum iusto maiores maxime minus modi molestias neque, nisi pariatur perferendis placeat, ratione repudiandae vel, voluptatem voluptatum. Adipisci assumenda dignissimos eaque eius, esse excepturi illo itaque libero, molestias nihil nulla perferendis perspiciatis quae, quas quo quod recusandae reiciendis repudiandae sed ut! Dignissimos doloremque fugit repellat sapiente tempore. Aliquid at cumque enim error eum, excepturi explicabo in libero minima nostrum, odit perferendis porro. Aliquam assumenda beatae dolore doloribus eligendi, excepturi facilis, iste libero molestias neque pariatur placeat quidem? Ad aperiam dignissimos eligendi, esse, excepturi explicabo itaque molestias nemo sapiente temporibus ullam vero? Ad animi cupiditate dolorem ea eligendi, est minus nisi odio pariatur qui? Aliquam beatae commodi consequatur culpa dicta distinctio ducimus error est, in iste libero obcaecati, omnis, pariatur reiciendis totam! Aliquam architecto dicta doloribus ea eaque error eum eveniet expedita, harum itaque molestiae numquam perspiciatis, provident quas quidem ullam voluptates. Aspernatur molestiae natus obcaecati saepe sapiente. Ad ea fugit natus quod, quos rem ut voluptatum! Consectetur dicta est ex minus nemo numquam qui quis quo sit unde. Aliquam, consectetur consequuntur, cupiditate deserunt dignissimos dolore exercitationem impedit iste laboriosam laborum magni maxime nam non obcaecati officia optio placeat quibusdam quidem sed tempore temporibus vitae voluptates? Adipisci animi consequatur culpa cumque id, illo ipsa non praesentium qui sapiente ullam veritatis vitae voluptatum? Accusantium aperiam aut autem corporis cum delectus dignissimos eaque ex, excepturi id ipsam laborum maxime molestias mollitia natus necessitatibus odit perferendis placeat porro provident quaerat repudiandae, totam voluptate voluptatem voluptatum? Corporis quaerat quisquam sed. Alias earum nemo, nisi quod similique tempora unde veniam! Ab aliquam amet asperiores cumque deleniti earum, eius eum expedita facilis impedit, inventore nihil omnis, porro qui sed voluptate voluptatum. Animi commodi consectetur eos ipsam magni qui reiciendis sit vitae? Accusamus aliquid iusto libero nemo saepe. At deserunt ex hic laboriosam maiores necessitatibus neque optio quos recusandae unde. Fuga iusto magnam nulla, tenetur vel vero? Aliquid blanditiis consequuntur eveniet, magnam nesciunt nobis voluptas. A beatae, debitis deleniti doloribus fuga fugit labore odio quos ratione ut. Corporis doloribus, ducimus, explicabo facere, iste magni nobis perferendis quaerat quo repellendus sapiente sequi sit soluta sunt suscipit tempora tempore. Dolor et incidunt quae rerum. Ab alias, esse hic magnam veritatis vitae voluptas. A aliquam aperiam at beatae enim, est eveniet ex, excepturi exercitationem, laboriosam minus porro quae rem sit suscipit tempore ullam vero. Aperiam aut culpa dicta distinctio dolores doloribus earum et facere, facilis fugit impedit ipsum labore optio, porro reiciendis rem repellat rerum sapiente sit unde veritatis, voluptas voluptatum! Ab aliquam asperiores autem cupiditate earum eveniet explicabo ipsum itaque iusto minus modi, neque nostrum, officia, vitae."));
    }
  };
  S(v(Main), document.body);
})();
//# sourceMappingURL=build.js.map
