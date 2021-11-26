(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // node_modules/preact/dist/preact.module.js
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
    var h2, v2, p, _3, b2, m2, g2, w2 = i3 && i3.__k || c, A = w2.length;
    for (u3.__k = [], h2 = 0; h2 < l3.length; h2++)
      if ((_3 = u3.__k[h2] = (_3 = l3[h2]) == null || typeof _3 == "boolean" ? null : typeof _3 == "string" || typeof _3 == "number" || typeof _3 == "bigint" ? y(null, _3, null, null, _3) : Array.isArray(_3) ? y(d, { children: _3 }, null, null, null) : _3.__b > 0 ? y(_3.type, _3.props, _3.key, null, _3.__v) : _3) != null) {
        if (_3.__ = u3, _3.__b = u3.__b + 1, (p = w2[h2]) === null || p && _3.key == p.key && _3.type === p.type)
          w2[h2] = void 0;
        else
          for (v2 = 0; v2 < A; v2++) {
            if ((p = w2[v2]) && _3.key == p.key && _3.type === p.type) {
              w2[v2] = void 0;
              break;
            }
            p = null;
          }
        j(n2, _3, p = p || e, t2, o2, r3, f2, s3, a3), b2 = _3.__e, (v2 = _3.ref) && p.ref != v2 && (g2 || (g2 = []), p.ref && g2.push(p.ref, null, _3), g2.push(v2, _3.__c || b2, _3)), b2 != null ? (m2 == null && (m2 = b2), typeof _3.type == "function" && _3.__k != null && _3.__k === p.__k ? _3.__d = s3 = x(_3, s3, n2) : s3 = P(n2, _3, p, w2, b2, s3), a3 || u3.type !== "option" ? typeof u3.type == "function" && (u3.__d = s3) : n2.value = "") : s3 && p.__e == s3 && s3.parentNode != n2 && (s3 = k(p));
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
    var s3, a3, v2, y2 = i3.props, p = u3.props, d2 = u3.type, _3 = 0;
    if (d2 === "svg" && (o2 = true), r3 != null) {
      for (; _3 < r3.length; _3++)
        if ((s3 = r3[_3]) && (s3 === l3 || (d2 ? s3.localName == d2 : s3.nodeType == 3))) {
          l3 = s3, r3[_3] = null;
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
          for (y2 = {}, _3 = 0; _3 < l3.attributes.length; _3++)
            y2[l3.attributes[_3].name] = l3.attributes[_3].value;
        (v2 || a3) && (v2 && (a3 && v2.__html == a3.__html || v2.__html === l3.innerHTML) || (l3.innerHTML = v2 && v2.__html || ""));
      }
      if (C(l3, p, y2, o2, c3), v2)
        u3.__k = [];
      else if (_3 = u3.props.children, w(l3, Array.isArray(_3) ? _3 : [_3], u3, i3, t2, o2 && d2 !== "foreignObject", r3, f2, r3 ? r3[0] : i3.__k && k(i3, 0), c3), r3 != null)
        for (_3 = r3.length; _3--; )
          r3[_3] != null && h(r3[_3]);
      c3 || ("value" in p && (_3 = p.value) !== void 0 && (_3 !== l3.value || d2 === "progress" && !_3) && H(l3, "value", _3, y2.value, false), "checked" in p && (_3 = p.checked) !== void 0 && _3 !== l3.checked && H(l3, "checked", _3, y2.checked, false));
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
  var n, l, u, i, t, o, r, f, e, c, s;
  var init_preact_module = __esm({
    "node_modules/preact/dist/preact.module.js"() {
      init_preact_shim();
      e = {};
      c = [];
      s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
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
    }
  });

  // preact-shim.js
  var init_preact_shim = __esm({
    "preact-shim.js"() {
      init_preact_module();
    }
  });

  // node_modules/lodash/lodash.js
  var require_lodash = __commonJS({
    "node_modules/lodash/lodash.js"(exports, module) {
      init_preact_shim();
      (function() {
        var undefined2;
        var VERSION = "4.17.21";
        var LARGE_ARRAY_SIZE = 200;
        var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
        var HASH_UNDEFINED = "__lodash_hash_undefined__";
        var MAX_MEMOIZE_SIZE = 500;
        var PLACEHOLDER = "__lodash_placeholder__";
        var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
        var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
        var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
        var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
        var HOT_COUNT = 800, HOT_SPAN = 16;
        var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
        var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN = 0 / 0;
        var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
        var wrapFlags = [
          ["ary", WRAP_ARY_FLAG],
          ["bind", WRAP_BIND_FLAG],
          ["bindKey", WRAP_BIND_KEY_FLAG],
          ["curry", WRAP_CURRY_FLAG],
          ["curryRight", WRAP_CURRY_RIGHT_FLAG],
          ["flip", WRAP_FLIP_FLAG],
          ["partial", WRAP_PARTIAL_FLAG],
          ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
          ["rearg", WRAP_REARG_FLAG]
        ];
        var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]";
        var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
        var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
        var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
        var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
        var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
        var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
        var reTrimStart = /^\s+/;
        var reWhitespace = /\s/;
        var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
        var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
        var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
        var reEscapeChar = /\\(\\)?/g;
        var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
        var reFlags = /\w*$/;
        var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
        var reIsBinary = /^0b[01]+$/i;
        var reIsHostCtor = /^\[object .+?Constructor\]$/;
        var reIsOctal = /^0o[0-7]+$/i;
        var reIsUint = /^(?:0|[1-9]\d*)$/;
        var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
        var reNoMatch = /($^)/;
        var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
        var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
        var rsApos = "['\u2019]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
        var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
        var reApos = RegExp(rsApos, "g");
        var reComboMark = RegExp(rsCombo, "g");
        var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
        var reUnicodeWord = RegExp([
          rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
          rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
          rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
          rsUpper + "+" + rsOptContrUpper,
          rsOrdUpper,
          rsOrdLower,
          rsDigits,
          rsEmoji
        ].join("|"), "g");
        var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
        var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
        var contextProps = [
          "Array",
          "Buffer",
          "DataView",
          "Date",
          "Error",
          "Float32Array",
          "Float64Array",
          "Function",
          "Int8Array",
          "Int16Array",
          "Int32Array",
          "Map",
          "Math",
          "Object",
          "Promise",
          "RegExp",
          "Set",
          "String",
          "Symbol",
          "TypeError",
          "Uint8Array",
          "Uint8ClampedArray",
          "Uint16Array",
          "Uint32Array",
          "WeakMap",
          "_",
          "clearTimeout",
          "isFinite",
          "parseInt",
          "setTimeout"
        ];
        var templateCounter = -1;
        var typedArrayTags = {};
        typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
        typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
        var cloneableTags = {};
        cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
        cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
        var deburredLetters = {
          "\xC0": "A",
          "\xC1": "A",
          "\xC2": "A",
          "\xC3": "A",
          "\xC4": "A",
          "\xC5": "A",
          "\xE0": "a",
          "\xE1": "a",
          "\xE2": "a",
          "\xE3": "a",
          "\xE4": "a",
          "\xE5": "a",
          "\xC7": "C",
          "\xE7": "c",
          "\xD0": "D",
          "\xF0": "d",
          "\xC8": "E",
          "\xC9": "E",
          "\xCA": "E",
          "\xCB": "E",
          "\xE8": "e",
          "\xE9": "e",
          "\xEA": "e",
          "\xEB": "e",
          "\xCC": "I",
          "\xCD": "I",
          "\xCE": "I",
          "\xCF": "I",
          "\xEC": "i",
          "\xED": "i",
          "\xEE": "i",
          "\xEF": "i",
          "\xD1": "N",
          "\xF1": "n",
          "\xD2": "O",
          "\xD3": "O",
          "\xD4": "O",
          "\xD5": "O",
          "\xD6": "O",
          "\xD8": "O",
          "\xF2": "o",
          "\xF3": "o",
          "\xF4": "o",
          "\xF5": "o",
          "\xF6": "o",
          "\xF8": "o",
          "\xD9": "U",
          "\xDA": "U",
          "\xDB": "U",
          "\xDC": "U",
          "\xF9": "u",
          "\xFA": "u",
          "\xFB": "u",
          "\xFC": "u",
          "\xDD": "Y",
          "\xFD": "y",
          "\xFF": "y",
          "\xC6": "Ae",
          "\xE6": "ae",
          "\xDE": "Th",
          "\xFE": "th",
          "\xDF": "ss",
          "\u0100": "A",
          "\u0102": "A",
          "\u0104": "A",
          "\u0101": "a",
          "\u0103": "a",
          "\u0105": "a",
          "\u0106": "C",
          "\u0108": "C",
          "\u010A": "C",
          "\u010C": "C",
          "\u0107": "c",
          "\u0109": "c",
          "\u010B": "c",
          "\u010D": "c",
          "\u010E": "D",
          "\u0110": "D",
          "\u010F": "d",
          "\u0111": "d",
          "\u0112": "E",
          "\u0114": "E",
          "\u0116": "E",
          "\u0118": "E",
          "\u011A": "E",
          "\u0113": "e",
          "\u0115": "e",
          "\u0117": "e",
          "\u0119": "e",
          "\u011B": "e",
          "\u011C": "G",
          "\u011E": "G",
          "\u0120": "G",
          "\u0122": "G",
          "\u011D": "g",
          "\u011F": "g",
          "\u0121": "g",
          "\u0123": "g",
          "\u0124": "H",
          "\u0126": "H",
          "\u0125": "h",
          "\u0127": "h",
          "\u0128": "I",
          "\u012A": "I",
          "\u012C": "I",
          "\u012E": "I",
          "\u0130": "I",
          "\u0129": "i",
          "\u012B": "i",
          "\u012D": "i",
          "\u012F": "i",
          "\u0131": "i",
          "\u0134": "J",
          "\u0135": "j",
          "\u0136": "K",
          "\u0137": "k",
          "\u0138": "k",
          "\u0139": "L",
          "\u013B": "L",
          "\u013D": "L",
          "\u013F": "L",
          "\u0141": "L",
          "\u013A": "l",
          "\u013C": "l",
          "\u013E": "l",
          "\u0140": "l",
          "\u0142": "l",
          "\u0143": "N",
          "\u0145": "N",
          "\u0147": "N",
          "\u014A": "N",
          "\u0144": "n",
          "\u0146": "n",
          "\u0148": "n",
          "\u014B": "n",
          "\u014C": "O",
          "\u014E": "O",
          "\u0150": "O",
          "\u014D": "o",
          "\u014F": "o",
          "\u0151": "o",
          "\u0154": "R",
          "\u0156": "R",
          "\u0158": "R",
          "\u0155": "r",
          "\u0157": "r",
          "\u0159": "r",
          "\u015A": "S",
          "\u015C": "S",
          "\u015E": "S",
          "\u0160": "S",
          "\u015B": "s",
          "\u015D": "s",
          "\u015F": "s",
          "\u0161": "s",
          "\u0162": "T",
          "\u0164": "T",
          "\u0166": "T",
          "\u0163": "t",
          "\u0165": "t",
          "\u0167": "t",
          "\u0168": "U",
          "\u016A": "U",
          "\u016C": "U",
          "\u016E": "U",
          "\u0170": "U",
          "\u0172": "U",
          "\u0169": "u",
          "\u016B": "u",
          "\u016D": "u",
          "\u016F": "u",
          "\u0171": "u",
          "\u0173": "u",
          "\u0174": "W",
          "\u0175": "w",
          "\u0176": "Y",
          "\u0177": "y",
          "\u0178": "Y",
          "\u0179": "Z",
          "\u017B": "Z",
          "\u017D": "Z",
          "\u017A": "z",
          "\u017C": "z",
          "\u017E": "z",
          "\u0132": "IJ",
          "\u0133": "ij",
          "\u0152": "Oe",
          "\u0153": "oe",
          "\u0149": "'n",
          "\u017F": "s"
        };
        var htmlEscapes = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;"
        };
        var htmlUnescapes = {
          "&amp;": "&",
          "&lt;": "<",
          "&gt;": ">",
          "&quot;": '"',
          "&#39;": "'"
        };
        var stringEscapes = {
          "\\": "\\",
          "'": "'",
          "\n": "n",
          "\r": "r",
          "\u2028": "u2028",
          "\u2029": "u2029"
        };
        var freeParseFloat = parseFloat, freeParseInt = parseInt;
        var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
        var freeSelf = typeof self == "object" && self && self.Object === Object && self;
        var root = freeGlobal || freeSelf || Function("return this")();
        var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
        var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
        var moduleExports = freeModule && freeModule.exports === freeExports;
        var freeProcess = moduleExports && freeGlobal.process;
        var nodeUtil = function() {
          try {
            var types = freeModule && freeModule.require && freeModule.require("util").types;
            if (types) {
              return types;
            }
            return freeProcess && freeProcess.binding && freeProcess.binding("util");
          } catch (e2) {
          }
        }();
        var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
        function apply(func, thisArg, args) {
          switch (args.length) {
            case 0:
              return func.call(thisArg);
            case 1:
              return func.call(thisArg, args[0]);
            case 2:
              return func.call(thisArg, args[0], args[1]);
            case 3:
              return func.call(thisArg, args[0], args[1], args[2]);
          }
          return func.apply(thisArg, args);
        }
        function arrayAggregator(array, setter, iteratee, accumulator) {
          var index = -1, length = array == null ? 0 : array.length;
          while (++index < length) {
            var value = array[index];
            setter(accumulator, value, iteratee(value), array);
          }
          return accumulator;
        }
        function arrayEach(array, iteratee) {
          var index = -1, length = array == null ? 0 : array.length;
          while (++index < length) {
            if (iteratee(array[index], index, array) === false) {
              break;
            }
          }
          return array;
        }
        function arrayEachRight(array, iteratee) {
          var length = array == null ? 0 : array.length;
          while (length--) {
            if (iteratee(array[length], length, array) === false) {
              break;
            }
          }
          return array;
        }
        function arrayEvery(array, predicate) {
          var index = -1, length = array == null ? 0 : array.length;
          while (++index < length) {
            if (!predicate(array[index], index, array)) {
              return false;
            }
          }
          return true;
        }
        function arrayFilter(array, predicate) {
          var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
          while (++index < length) {
            var value = array[index];
            if (predicate(value, index, array)) {
              result[resIndex++] = value;
            }
          }
          return result;
        }
        function arrayIncludes(array, value) {
          var length = array == null ? 0 : array.length;
          return !!length && baseIndexOf(array, value, 0) > -1;
        }
        function arrayIncludesWith(array, value, comparator) {
          var index = -1, length = array == null ? 0 : array.length;
          while (++index < length) {
            if (comparator(value, array[index])) {
              return true;
            }
          }
          return false;
        }
        function arrayMap(array, iteratee) {
          var index = -1, length = array == null ? 0 : array.length, result = Array(length);
          while (++index < length) {
            result[index] = iteratee(array[index], index, array);
          }
          return result;
        }
        function arrayPush(array, values) {
          var index = -1, length = values.length, offset = array.length;
          while (++index < length) {
            array[offset + index] = values[index];
          }
          return array;
        }
        function arrayReduce(array, iteratee, accumulator, initAccum) {
          var index = -1, length = array == null ? 0 : array.length;
          if (initAccum && length) {
            accumulator = array[++index];
          }
          while (++index < length) {
            accumulator = iteratee(accumulator, array[index], index, array);
          }
          return accumulator;
        }
        function arrayReduceRight(array, iteratee, accumulator, initAccum) {
          var length = array == null ? 0 : array.length;
          if (initAccum && length) {
            accumulator = array[--length];
          }
          while (length--) {
            accumulator = iteratee(accumulator, array[length], length, array);
          }
          return accumulator;
        }
        function arraySome(array, predicate) {
          var index = -1, length = array == null ? 0 : array.length;
          while (++index < length) {
            if (predicate(array[index], index, array)) {
              return true;
            }
          }
          return false;
        }
        var asciiSize = baseProperty("length");
        function asciiToArray(string) {
          return string.split("");
        }
        function asciiWords(string) {
          return string.match(reAsciiWord) || [];
        }
        function baseFindKey(collection, predicate, eachFunc) {
          var result;
          eachFunc(collection, function(value, key, collection2) {
            if (predicate(value, key, collection2)) {
              result = key;
              return false;
            }
          });
          return result;
        }
        function baseFindIndex(array, predicate, fromIndex, fromRight) {
          var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
          while (fromRight ? index-- : ++index < length) {
            if (predicate(array[index], index, array)) {
              return index;
            }
          }
          return -1;
        }
        function baseIndexOf(array, value, fromIndex) {
          return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
        }
        function baseIndexOfWith(array, value, fromIndex, comparator) {
          var index = fromIndex - 1, length = array.length;
          while (++index < length) {
            if (comparator(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function baseIsNaN(value) {
          return value !== value;
        }
        function baseMean(array, iteratee) {
          var length = array == null ? 0 : array.length;
          return length ? baseSum(array, iteratee) / length : NAN;
        }
        function baseProperty(key) {
          return function(object) {
            return object == null ? undefined2 : object[key];
          };
        }
        function basePropertyOf(object) {
          return function(key) {
            return object == null ? undefined2 : object[key];
          };
        }
        function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
          eachFunc(collection, function(value, index, collection2) {
            accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
          });
          return accumulator;
        }
        function baseSortBy(array, comparer) {
          var length = array.length;
          array.sort(comparer);
          while (length--) {
            array[length] = array[length].value;
          }
          return array;
        }
        function baseSum(array, iteratee) {
          var result, index = -1, length = array.length;
          while (++index < length) {
            var current = iteratee(array[index]);
            if (current !== undefined2) {
              result = result === undefined2 ? current : result + current;
            }
          }
          return result;
        }
        function baseTimes(n2, iteratee) {
          var index = -1, result = Array(n2);
          while (++index < n2) {
            result[index] = iteratee(index);
          }
          return result;
        }
        function baseToPairs(object, props) {
          return arrayMap(props, function(key) {
            return [key, object[key]];
          });
        }
        function baseTrim(string) {
          return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
        }
        function baseUnary(func) {
          return function(value) {
            return func(value);
          };
        }
        function baseValues(object, props) {
          return arrayMap(props, function(key) {
            return object[key];
          });
        }
        function cacheHas(cache, key) {
          return cache.has(key);
        }
        function charsStartIndex(strSymbols, chrSymbols) {
          var index = -1, length = strSymbols.length;
          while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
          }
          return index;
        }
        function charsEndIndex(strSymbols, chrSymbols) {
          var index = strSymbols.length;
          while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
          }
          return index;
        }
        function countHolders(array, placeholder) {
          var length = array.length, result = 0;
          while (length--) {
            if (array[length] === placeholder) {
              ++result;
            }
          }
          return result;
        }
        var deburrLetter = basePropertyOf(deburredLetters);
        var escapeHtmlChar = basePropertyOf(htmlEscapes);
        function escapeStringChar(chr) {
          return "\\" + stringEscapes[chr];
        }
        function getValue(object, key) {
          return object == null ? undefined2 : object[key];
        }
        function hasUnicode(string) {
          return reHasUnicode.test(string);
        }
        function hasUnicodeWord(string) {
          return reHasUnicodeWord.test(string);
        }
        function iteratorToArray(iterator) {
          var data, result = [];
          while (!(data = iterator.next()).done) {
            result.push(data.value);
          }
          return result;
        }
        function mapToArray(map) {
          var index = -1, result = Array(map.size);
          map.forEach(function(value, key) {
            result[++index] = [key, value];
          });
          return result;
        }
        function overArg(func, transform) {
          return function(arg) {
            return func(transform(arg));
          };
        }
        function replaceHolders(array, placeholder) {
          var index = -1, length = array.length, resIndex = 0, result = [];
          while (++index < length) {
            var value = array[index];
            if (value === placeholder || value === PLACEHOLDER) {
              array[index] = PLACEHOLDER;
              result[resIndex++] = index;
            }
          }
          return result;
        }
        function setToArray(set) {
          var index = -1, result = Array(set.size);
          set.forEach(function(value) {
            result[++index] = value;
          });
          return result;
        }
        function setToPairs(set) {
          var index = -1, result = Array(set.size);
          set.forEach(function(value) {
            result[++index] = [value, value];
          });
          return result;
        }
        function strictIndexOf(array, value, fromIndex) {
          var index = fromIndex - 1, length = array.length;
          while (++index < length) {
            if (array[index] === value) {
              return index;
            }
          }
          return -1;
        }
        function strictLastIndexOf(array, value, fromIndex) {
          var index = fromIndex + 1;
          while (index--) {
            if (array[index] === value) {
              return index;
            }
          }
          return index;
        }
        function stringSize(string) {
          return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
        }
        function stringToArray(string) {
          return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
        }
        function trimmedEndIndex(string) {
          var index = string.length;
          while (index-- && reWhitespace.test(string.charAt(index))) {
          }
          return index;
        }
        var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
        function unicodeSize(string) {
          var result = reUnicode.lastIndex = 0;
          while (reUnicode.test(string)) {
            ++result;
          }
          return result;
        }
        function unicodeToArray(string) {
          return string.match(reUnicode) || [];
        }
        function unicodeWords(string) {
          return string.match(reUnicodeWord) || [];
        }
        var runInContext = function runInContext2(context) {
          context = context == null ? root : _3.defaults(root.Object(), context, _3.pick(root, contextProps));
          var Array2 = context.Array, Date2 = context.Date, Error2 = context.Error, Function2 = context.Function, Math2 = context.Math, Object2 = context.Object, RegExp2 = context.RegExp, String2 = context.String, TypeError2 = context.TypeError;
          var arrayProto = Array2.prototype, funcProto = Function2.prototype, objectProto = Object2.prototype;
          var coreJsData = context["__core-js_shared__"];
          var funcToString = funcProto.toString;
          var hasOwnProperty = objectProto.hasOwnProperty;
          var idCounter = 0;
          var maskSrcKey = function() {
            var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
            return uid ? "Symbol(src)_1." + uid : "";
          }();
          var nativeObjectToString = objectProto.toString;
          var objectCtorString = funcToString.call(Object2);
          var oldDash = root._;
          var reIsNative = RegExp2("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
          var Buffer2 = moduleExports ? context.Buffer : undefined2, Symbol2 = context.Symbol, Uint8Array2 = context.Uint8Array, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : undefined2, getPrototype = overArg(Object2.getPrototypeOf, Object2), objectCreate = Object2.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : undefined2, symIterator = Symbol2 ? Symbol2.iterator : undefined2, symToStringTag = Symbol2 ? Symbol2.toStringTag : undefined2;
          var defineProperty = function() {
            try {
              var func = getNative(Object2, "defineProperty");
              func({}, "", {});
              return func;
            } catch (e2) {
            }
          }();
          var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date2 && Date2.now !== root.Date.now && Date2.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
          var nativeCeil = Math2.ceil, nativeFloor = Math2.floor, nativeGetSymbols = Object2.getOwnPropertySymbols, nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : undefined2, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object2.keys, Object2), nativeMax = Math2.max, nativeMin = Math2.min, nativeNow = Date2.now, nativeParseInt = context.parseInt, nativeRandom = Math2.random, nativeReverse = arrayProto.reverse;
          var DataView = getNative(context, "DataView"), Map2 = getNative(context, "Map"), Promise2 = getNative(context, "Promise"), Set2 = getNative(context, "Set"), WeakMap = getNative(context, "WeakMap"), nativeCreate = getNative(Object2, "create");
          var metaMap = WeakMap && new WeakMap();
          var realNames = {};
          var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set2), weakMapCtorString = toSource(WeakMap);
          var symbolProto = Symbol2 ? Symbol2.prototype : undefined2, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined2, symbolToString = symbolProto ? symbolProto.toString : undefined2;
          function lodash(value) {
            if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
              if (value instanceof LodashWrapper) {
                return value;
              }
              if (hasOwnProperty.call(value, "__wrapped__")) {
                return wrapperClone(value);
              }
            }
            return new LodashWrapper(value);
          }
          var baseCreate = function() {
            function object() {
            }
            return function(proto) {
              if (!isObject(proto)) {
                return {};
              }
              if (objectCreate) {
                return objectCreate(proto);
              }
              object.prototype = proto;
              var result2 = new object();
              object.prototype = undefined2;
              return result2;
            };
          }();
          function baseLodash() {
          }
          function LodashWrapper(value, chainAll) {
            this.__wrapped__ = value;
            this.__actions__ = [];
            this.__chain__ = !!chainAll;
            this.__index__ = 0;
            this.__values__ = undefined2;
          }
          lodash.templateSettings = {
            "escape": reEscape,
            "evaluate": reEvaluate,
            "interpolate": reInterpolate,
            "variable": "",
            "imports": {
              "_": lodash
            }
          };
          lodash.prototype = baseLodash.prototype;
          lodash.prototype.constructor = lodash;
          LodashWrapper.prototype = baseCreate(baseLodash.prototype);
          LodashWrapper.prototype.constructor = LodashWrapper;
          function LazyWrapper(value) {
            this.__wrapped__ = value;
            this.__actions__ = [];
            this.__dir__ = 1;
            this.__filtered__ = false;
            this.__iteratees__ = [];
            this.__takeCount__ = MAX_ARRAY_LENGTH;
            this.__views__ = [];
          }
          function lazyClone() {
            var result2 = new LazyWrapper(this.__wrapped__);
            result2.__actions__ = copyArray(this.__actions__);
            result2.__dir__ = this.__dir__;
            result2.__filtered__ = this.__filtered__;
            result2.__iteratees__ = copyArray(this.__iteratees__);
            result2.__takeCount__ = this.__takeCount__;
            result2.__views__ = copyArray(this.__views__);
            return result2;
          }
          function lazyReverse() {
            if (this.__filtered__) {
              var result2 = new LazyWrapper(this);
              result2.__dir__ = -1;
              result2.__filtered__ = true;
            } else {
              result2 = this.clone();
              result2.__dir__ *= -1;
            }
            return result2;
          }
          function lazyValue() {
            var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
            if (!isArr || !isRight && arrLength == length && takeCount == length) {
              return baseWrapperValue(array, this.__actions__);
            }
            var result2 = [];
            outer:
              while (length-- && resIndex < takeCount) {
                index += dir;
                var iterIndex = -1, value = array[index];
                while (++iterIndex < iterLength) {
                  var data = iteratees[iterIndex], iteratee2 = data.iteratee, type = data.type, computed = iteratee2(value);
                  if (type == LAZY_MAP_FLAG) {
                    value = computed;
                  } else if (!computed) {
                    if (type == LAZY_FILTER_FLAG) {
                      continue outer;
                    } else {
                      break outer;
                    }
                  }
                }
                result2[resIndex++] = value;
              }
            return result2;
          }
          LazyWrapper.prototype = baseCreate(baseLodash.prototype);
          LazyWrapper.prototype.constructor = LazyWrapper;
          function Hash(entries) {
            var index = -1, length = entries == null ? 0 : entries.length;
            this.clear();
            while (++index < length) {
              var entry = entries[index];
              this.set(entry[0], entry[1]);
            }
          }
          function hashClear() {
            this.__data__ = nativeCreate ? nativeCreate(null) : {};
            this.size = 0;
          }
          function hashDelete(key) {
            var result2 = this.has(key) && delete this.__data__[key];
            this.size -= result2 ? 1 : 0;
            return result2;
          }
          function hashGet(key) {
            var data = this.__data__;
            if (nativeCreate) {
              var result2 = data[key];
              return result2 === HASH_UNDEFINED ? undefined2 : result2;
            }
            return hasOwnProperty.call(data, key) ? data[key] : undefined2;
          }
          function hashHas(key) {
            var data = this.__data__;
            return nativeCreate ? data[key] !== undefined2 : hasOwnProperty.call(data, key);
          }
          function hashSet(key, value) {
            var data = this.__data__;
            this.size += this.has(key) ? 0 : 1;
            data[key] = nativeCreate && value === undefined2 ? HASH_UNDEFINED : value;
            return this;
          }
          Hash.prototype.clear = hashClear;
          Hash.prototype["delete"] = hashDelete;
          Hash.prototype.get = hashGet;
          Hash.prototype.has = hashHas;
          Hash.prototype.set = hashSet;
          function ListCache(entries) {
            var index = -1, length = entries == null ? 0 : entries.length;
            this.clear();
            while (++index < length) {
              var entry = entries[index];
              this.set(entry[0], entry[1]);
            }
          }
          function listCacheClear() {
            this.__data__ = [];
            this.size = 0;
          }
          function listCacheDelete(key) {
            var data = this.__data__, index = assocIndexOf(data, key);
            if (index < 0) {
              return false;
            }
            var lastIndex = data.length - 1;
            if (index == lastIndex) {
              data.pop();
            } else {
              splice.call(data, index, 1);
            }
            --this.size;
            return true;
          }
          function listCacheGet(key) {
            var data = this.__data__, index = assocIndexOf(data, key);
            return index < 0 ? undefined2 : data[index][1];
          }
          function listCacheHas(key) {
            return assocIndexOf(this.__data__, key) > -1;
          }
          function listCacheSet(key, value) {
            var data = this.__data__, index = assocIndexOf(data, key);
            if (index < 0) {
              ++this.size;
              data.push([key, value]);
            } else {
              data[index][1] = value;
            }
            return this;
          }
          ListCache.prototype.clear = listCacheClear;
          ListCache.prototype["delete"] = listCacheDelete;
          ListCache.prototype.get = listCacheGet;
          ListCache.prototype.has = listCacheHas;
          ListCache.prototype.set = listCacheSet;
          function MapCache(entries) {
            var index = -1, length = entries == null ? 0 : entries.length;
            this.clear();
            while (++index < length) {
              var entry = entries[index];
              this.set(entry[0], entry[1]);
            }
          }
          function mapCacheClear() {
            this.size = 0;
            this.__data__ = {
              "hash": new Hash(),
              "map": new (Map2 || ListCache)(),
              "string": new Hash()
            };
          }
          function mapCacheDelete(key) {
            var result2 = getMapData(this, key)["delete"](key);
            this.size -= result2 ? 1 : 0;
            return result2;
          }
          function mapCacheGet(key) {
            return getMapData(this, key).get(key);
          }
          function mapCacheHas(key) {
            return getMapData(this, key).has(key);
          }
          function mapCacheSet(key, value) {
            var data = getMapData(this, key), size2 = data.size;
            data.set(key, value);
            this.size += data.size == size2 ? 0 : 1;
            return this;
          }
          MapCache.prototype.clear = mapCacheClear;
          MapCache.prototype["delete"] = mapCacheDelete;
          MapCache.prototype.get = mapCacheGet;
          MapCache.prototype.has = mapCacheHas;
          MapCache.prototype.set = mapCacheSet;
          function SetCache(values2) {
            var index = -1, length = values2 == null ? 0 : values2.length;
            this.__data__ = new MapCache();
            while (++index < length) {
              this.add(values2[index]);
            }
          }
          function setCacheAdd(value) {
            this.__data__.set(value, HASH_UNDEFINED);
            return this;
          }
          function setCacheHas(value) {
            return this.__data__.has(value);
          }
          SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
          SetCache.prototype.has = setCacheHas;
          function Stack(entries) {
            var data = this.__data__ = new ListCache(entries);
            this.size = data.size;
          }
          function stackClear() {
            this.__data__ = new ListCache();
            this.size = 0;
          }
          function stackDelete(key) {
            var data = this.__data__, result2 = data["delete"](key);
            this.size = data.size;
            return result2;
          }
          function stackGet(key) {
            return this.__data__.get(key);
          }
          function stackHas(key) {
            return this.__data__.has(key);
          }
          function stackSet(key, value) {
            var data = this.__data__;
            if (data instanceof ListCache) {
              var pairs = data.__data__;
              if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
                pairs.push([key, value]);
                this.size = ++data.size;
                return this;
              }
              data = this.__data__ = new MapCache(pairs);
            }
            data.set(key, value);
            this.size = data.size;
            return this;
          }
          Stack.prototype.clear = stackClear;
          Stack.prototype["delete"] = stackDelete;
          Stack.prototype.get = stackGet;
          Stack.prototype.has = stackHas;
          Stack.prototype.set = stackSet;
          function arrayLikeKeys(value, inherited) {
            var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value.length, String2) : [], length = result2.length;
            for (var key in value) {
              if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
                result2.push(key);
              }
            }
            return result2;
          }
          function arraySample(array) {
            var length = array.length;
            return length ? array[baseRandom(0, length - 1)] : undefined2;
          }
          function arraySampleSize(array, n2) {
            return shuffleSelf(copyArray(array), baseClamp(n2, 0, array.length));
          }
          function arrayShuffle(array) {
            return shuffleSelf(copyArray(array));
          }
          function assignMergeValue(object, key, value) {
            if (value !== undefined2 && !eq(object[key], value) || value === undefined2 && !(key in object)) {
              baseAssignValue(object, key, value);
            }
          }
          function assignValue(object, key, value) {
            var objValue = object[key];
            if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined2 && !(key in object)) {
              baseAssignValue(object, key, value);
            }
          }
          function assocIndexOf(array, key) {
            var length = array.length;
            while (length--) {
              if (eq(array[length][0], key)) {
                return length;
              }
            }
            return -1;
          }
          function baseAggregator(collection, setter, iteratee2, accumulator) {
            baseEach(collection, function(value, key, collection2) {
              setter(accumulator, value, iteratee2(value), collection2);
            });
            return accumulator;
          }
          function baseAssign(object, source) {
            return object && copyObject(source, keys(source), object);
          }
          function baseAssignIn(object, source) {
            return object && copyObject(source, keysIn(source), object);
          }
          function baseAssignValue(object, key, value) {
            if (key == "__proto__" && defineProperty) {
              defineProperty(object, key, {
                "configurable": true,
                "enumerable": true,
                "value": value,
                "writable": true
              });
            } else {
              object[key] = value;
            }
          }
          function baseAt(object, paths) {
            var index = -1, length = paths.length, result2 = Array2(length), skip = object == null;
            while (++index < length) {
              result2[index] = skip ? undefined2 : get(object, paths[index]);
            }
            return result2;
          }
          function baseClamp(number, lower, upper) {
            if (number === number) {
              if (upper !== undefined2) {
                number = number <= upper ? number : upper;
              }
              if (lower !== undefined2) {
                number = number >= lower ? number : lower;
              }
            }
            return number;
          }
          function baseClone(value, bitmask, customizer, key, object, stack) {
            var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
            if (customizer) {
              result2 = object ? customizer(value, key, object, stack) : customizer(value);
            }
            if (result2 !== undefined2) {
              return result2;
            }
            if (!isObject(value)) {
              return value;
            }
            var isArr = isArray(value);
            if (isArr) {
              result2 = initCloneArray(value);
              if (!isDeep) {
                return copyArray(value, result2);
              }
            } else {
              var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
              if (isBuffer(value)) {
                return cloneBuffer(value, isDeep);
              }
              if (tag == objectTag || tag == argsTag || isFunc && !object) {
                result2 = isFlat || isFunc ? {} : initCloneObject(value);
                if (!isDeep) {
                  return isFlat ? copySymbolsIn(value, baseAssignIn(result2, value)) : copySymbols(value, baseAssign(result2, value));
                }
              } else {
                if (!cloneableTags[tag]) {
                  return object ? value : {};
                }
                result2 = initCloneByTag(value, tag, isDeep);
              }
            }
            stack || (stack = new Stack());
            var stacked = stack.get(value);
            if (stacked) {
              return stacked;
            }
            stack.set(value, result2);
            if (isSet(value)) {
              value.forEach(function(subValue) {
                result2.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
              });
            } else if (isMap(value)) {
              value.forEach(function(subValue, key2) {
                result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
              });
            }
            var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
            var props = isArr ? undefined2 : keysFunc(value);
            arrayEach(props || value, function(subValue, key2) {
              if (props) {
                key2 = subValue;
                subValue = value[key2];
              }
              assignValue(result2, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
            });
            return result2;
          }
          function baseConforms(source) {
            var props = keys(source);
            return function(object) {
              return baseConformsTo(object, source, props);
            };
          }
          function baseConformsTo(object, source, props) {
            var length = props.length;
            if (object == null) {
              return !length;
            }
            object = Object2(object);
            while (length--) {
              var key = props[length], predicate = source[key], value = object[key];
              if (value === undefined2 && !(key in object) || !predicate(value)) {
                return false;
              }
            }
            return true;
          }
          function baseDelay(func, wait, args) {
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            return setTimeout2(function() {
              func.apply(undefined2, args);
            }, wait);
          }
          function baseDifference(array, values2, iteratee2, comparator) {
            var index = -1, includes2 = arrayIncludes, isCommon = true, length = array.length, result2 = [], valuesLength = values2.length;
            if (!length) {
              return result2;
            }
            if (iteratee2) {
              values2 = arrayMap(values2, baseUnary(iteratee2));
            }
            if (comparator) {
              includes2 = arrayIncludesWith;
              isCommon = false;
            } else if (values2.length >= LARGE_ARRAY_SIZE) {
              includes2 = cacheHas;
              isCommon = false;
              values2 = new SetCache(values2);
            }
            outer:
              while (++index < length) {
                var value = array[index], computed = iteratee2 == null ? value : iteratee2(value);
                value = comparator || value !== 0 ? value : 0;
                if (isCommon && computed === computed) {
                  var valuesIndex = valuesLength;
                  while (valuesIndex--) {
                    if (values2[valuesIndex] === computed) {
                      continue outer;
                    }
                  }
                  result2.push(value);
                } else if (!includes2(values2, computed, comparator)) {
                  result2.push(value);
                }
              }
            return result2;
          }
          var baseEach = createBaseEach(baseForOwn);
          var baseEachRight = createBaseEach(baseForOwnRight, true);
          function baseEvery(collection, predicate) {
            var result2 = true;
            baseEach(collection, function(value, index, collection2) {
              result2 = !!predicate(value, index, collection2);
              return result2;
            });
            return result2;
          }
          function baseExtremum(array, iteratee2, comparator) {
            var index = -1, length = array.length;
            while (++index < length) {
              var value = array[index], current = iteratee2(value);
              if (current != null && (computed === undefined2 ? current === current && !isSymbol(current) : comparator(current, computed))) {
                var computed = current, result2 = value;
              }
            }
            return result2;
          }
          function baseFill(array, value, start, end) {
            var length = array.length;
            start = toInteger(start);
            if (start < 0) {
              start = -start > length ? 0 : length + start;
            }
            end = end === undefined2 || end > length ? length : toInteger(end);
            if (end < 0) {
              end += length;
            }
            end = start > end ? 0 : toLength(end);
            while (start < end) {
              array[start++] = value;
            }
            return array;
          }
          function baseFilter(collection, predicate) {
            var result2 = [];
            baseEach(collection, function(value, index, collection2) {
              if (predicate(value, index, collection2)) {
                result2.push(value);
              }
            });
            return result2;
          }
          function baseFlatten(array, depth, predicate, isStrict, result2) {
            var index = -1, length = array.length;
            predicate || (predicate = isFlattenable);
            result2 || (result2 = []);
            while (++index < length) {
              var value = array[index];
              if (depth > 0 && predicate(value)) {
                if (depth > 1) {
                  baseFlatten(value, depth - 1, predicate, isStrict, result2);
                } else {
                  arrayPush(result2, value);
                }
              } else if (!isStrict) {
                result2[result2.length] = value;
              }
            }
            return result2;
          }
          var baseFor = createBaseFor();
          var baseForRight = createBaseFor(true);
          function baseForOwn(object, iteratee2) {
            return object && baseFor(object, iteratee2, keys);
          }
          function baseForOwnRight(object, iteratee2) {
            return object && baseForRight(object, iteratee2, keys);
          }
          function baseFunctions(object, props) {
            return arrayFilter(props, function(key) {
              return isFunction(object[key]);
            });
          }
          function baseGet(object, path) {
            path = castPath(path, object);
            var index = 0, length = path.length;
            while (object != null && index < length) {
              object = object[toKey(path[index++])];
            }
            return index && index == length ? object : undefined2;
          }
          function baseGetAllKeys(object, keysFunc, symbolsFunc) {
            var result2 = keysFunc(object);
            return isArray(object) ? result2 : arrayPush(result2, symbolsFunc(object));
          }
          function baseGetTag(value) {
            if (value == null) {
              return value === undefined2 ? undefinedTag : nullTag;
            }
            return symToStringTag && symToStringTag in Object2(value) ? getRawTag(value) : objectToString(value);
          }
          function baseGt(value, other) {
            return value > other;
          }
          function baseHas(object, key) {
            return object != null && hasOwnProperty.call(object, key);
          }
          function baseHasIn(object, key) {
            return object != null && key in Object2(object);
          }
          function baseInRange(number, start, end) {
            return number >= nativeMin(start, end) && number < nativeMax(start, end);
          }
          function baseIntersection(arrays, iteratee2, comparator) {
            var includes2 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
            while (othIndex--) {
              var array = arrays[othIndex];
              if (othIndex && iteratee2) {
                array = arrayMap(array, baseUnary(iteratee2));
              }
              maxLength = nativeMin(array.length, maxLength);
              caches[othIndex] = !comparator && (iteratee2 || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined2;
            }
            array = arrays[0];
            var index = -1, seen = caches[0];
            outer:
              while (++index < length && result2.length < maxLength) {
                var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
                value = comparator || value !== 0 ? value : 0;
                if (!(seen ? cacheHas(seen, computed) : includes2(result2, computed, comparator))) {
                  othIndex = othLength;
                  while (--othIndex) {
                    var cache = caches[othIndex];
                    if (!(cache ? cacheHas(cache, computed) : includes2(arrays[othIndex], computed, comparator))) {
                      continue outer;
                    }
                  }
                  if (seen) {
                    seen.push(computed);
                  }
                  result2.push(value);
                }
              }
            return result2;
          }
          function baseInverter(object, setter, iteratee2, accumulator) {
            baseForOwn(object, function(value, key, object2) {
              setter(accumulator, iteratee2(value), key, object2);
            });
            return accumulator;
          }
          function baseInvoke(object, path, args) {
            path = castPath(path, object);
            object = parent(object, path);
            var func = object == null ? object : object[toKey(last(path))];
            return func == null ? undefined2 : apply(func, object, args);
          }
          function baseIsArguments(value) {
            return isObjectLike(value) && baseGetTag(value) == argsTag;
          }
          function baseIsArrayBuffer(value) {
            return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
          }
          function baseIsDate(value) {
            return isObjectLike(value) && baseGetTag(value) == dateTag;
          }
          function baseIsEqual(value, other, bitmask, customizer, stack) {
            if (value === other) {
              return true;
            }
            if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
              return value !== value && other !== other;
            }
            return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
          }
          function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
            var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
            objTag = objTag == argsTag ? objectTag : objTag;
            othTag = othTag == argsTag ? objectTag : othTag;
            var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
            if (isSameTag && isBuffer(object)) {
              if (!isBuffer(other)) {
                return false;
              }
              objIsArr = true;
              objIsObj = false;
            }
            if (isSameTag && !objIsObj) {
              stack || (stack = new Stack());
              return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
            }
            if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
              var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
              if (objIsWrapped || othIsWrapped) {
                var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
                stack || (stack = new Stack());
                return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
              }
            }
            if (!isSameTag) {
              return false;
            }
            stack || (stack = new Stack());
            return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
          }
          function baseIsMap(value) {
            return isObjectLike(value) && getTag(value) == mapTag;
          }
          function baseIsMatch(object, source, matchData, customizer) {
            var index = matchData.length, length = index, noCustomizer = !customizer;
            if (object == null) {
              return !length;
            }
            object = Object2(object);
            while (index--) {
              var data = matchData[index];
              if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
                return false;
              }
            }
            while (++index < length) {
              data = matchData[index];
              var key = data[0], objValue = object[key], srcValue = data[1];
              if (noCustomizer && data[2]) {
                if (objValue === undefined2 && !(key in object)) {
                  return false;
                }
              } else {
                var stack = new Stack();
                if (customizer) {
                  var result2 = customizer(objValue, srcValue, key, object, source, stack);
                }
                if (!(result2 === undefined2 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
                  return false;
                }
              }
            }
            return true;
          }
          function baseIsNative(value) {
            if (!isObject(value) || isMasked(value)) {
              return false;
            }
            var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
            return pattern.test(toSource(value));
          }
          function baseIsRegExp(value) {
            return isObjectLike(value) && baseGetTag(value) == regexpTag;
          }
          function baseIsSet(value) {
            return isObjectLike(value) && getTag(value) == setTag;
          }
          function baseIsTypedArray(value) {
            return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
          }
          function baseIteratee(value) {
            if (typeof value == "function") {
              return value;
            }
            if (value == null) {
              return identity;
            }
            if (typeof value == "object") {
              return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
            }
            return property(value);
          }
          function baseKeys(object) {
            if (!isPrototype(object)) {
              return nativeKeys(object);
            }
            var result2 = [];
            for (var key in Object2(object)) {
              if (hasOwnProperty.call(object, key) && key != "constructor") {
                result2.push(key);
              }
            }
            return result2;
          }
          function baseKeysIn(object) {
            if (!isObject(object)) {
              return nativeKeysIn(object);
            }
            var isProto = isPrototype(object), result2 = [];
            for (var key in object) {
              if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
                result2.push(key);
              }
            }
            return result2;
          }
          function baseLt(value, other) {
            return value < other;
          }
          function baseMap(collection, iteratee2) {
            var index = -1, result2 = isArrayLike(collection) ? Array2(collection.length) : [];
            baseEach(collection, function(value, key, collection2) {
              result2[++index] = iteratee2(value, key, collection2);
            });
            return result2;
          }
          function baseMatches(source) {
            var matchData = getMatchData(source);
            if (matchData.length == 1 && matchData[0][2]) {
              return matchesStrictComparable(matchData[0][0], matchData[0][1]);
            }
            return function(object) {
              return object === source || baseIsMatch(object, source, matchData);
            };
          }
          function baseMatchesProperty(path, srcValue) {
            if (isKey(path) && isStrictComparable(srcValue)) {
              return matchesStrictComparable(toKey(path), srcValue);
            }
            return function(object) {
              var objValue = get(object, path);
              return objValue === undefined2 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
            };
          }
          function baseMerge(object, source, srcIndex, customizer, stack) {
            if (object === source) {
              return;
            }
            baseFor(source, function(srcValue, key) {
              stack || (stack = new Stack());
              if (isObject(srcValue)) {
                baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
              } else {
                var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : undefined2;
                if (newValue === undefined2) {
                  newValue = srcValue;
                }
                assignMergeValue(object, key, newValue);
              }
            }, keysIn);
          }
          function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
            var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
            if (stacked) {
              assignMergeValue(object, key, stacked);
              return;
            }
            var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined2;
            var isCommon = newValue === undefined2;
            if (isCommon) {
              var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
              newValue = srcValue;
              if (isArr || isBuff || isTyped) {
                if (isArray(objValue)) {
                  newValue = objValue;
                } else if (isArrayLikeObject(objValue)) {
                  newValue = copyArray(objValue);
                } else if (isBuff) {
                  isCommon = false;
                  newValue = cloneBuffer(srcValue, true);
                } else if (isTyped) {
                  isCommon = false;
                  newValue = cloneTypedArray(srcValue, true);
                } else {
                  newValue = [];
                }
              } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
                newValue = objValue;
                if (isArguments(objValue)) {
                  newValue = toPlainObject(objValue);
                } else if (!isObject(objValue) || isFunction(objValue)) {
                  newValue = initCloneObject(srcValue);
                }
              } else {
                isCommon = false;
              }
            }
            if (isCommon) {
              stack.set(srcValue, newValue);
              mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
              stack["delete"](srcValue);
            }
            assignMergeValue(object, key, newValue);
          }
          function baseNth(array, n2) {
            var length = array.length;
            if (!length) {
              return;
            }
            n2 += n2 < 0 ? length : 0;
            return isIndex(n2, length) ? array[n2] : undefined2;
          }
          function baseOrderBy(collection, iteratees, orders) {
            if (iteratees.length) {
              iteratees = arrayMap(iteratees, function(iteratee2) {
                if (isArray(iteratee2)) {
                  return function(value) {
                    return baseGet(value, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
                  };
                }
                return iteratee2;
              });
            } else {
              iteratees = [identity];
            }
            var index = -1;
            iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
            var result2 = baseMap(collection, function(value, key, collection2) {
              var criteria = arrayMap(iteratees, function(iteratee2) {
                return iteratee2(value);
              });
              return { "criteria": criteria, "index": ++index, "value": value };
            });
            return baseSortBy(result2, function(object, other) {
              return compareMultiple(object, other, orders);
            });
          }
          function basePick(object, paths) {
            return basePickBy(object, paths, function(value, path) {
              return hasIn(object, path);
            });
          }
          function basePickBy(object, paths, predicate) {
            var index = -1, length = paths.length, result2 = {};
            while (++index < length) {
              var path = paths[index], value = baseGet(object, path);
              if (predicate(value, path)) {
                baseSet(result2, castPath(path, object), value);
              }
            }
            return result2;
          }
          function basePropertyDeep(path) {
            return function(object) {
              return baseGet(object, path);
            };
          }
          function basePullAll(array, values2, iteratee2, comparator) {
            var indexOf2 = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values2.length, seen = array;
            if (array === values2) {
              values2 = copyArray(values2);
            }
            if (iteratee2) {
              seen = arrayMap(array, baseUnary(iteratee2));
            }
            while (++index < length) {
              var fromIndex = 0, value = values2[index], computed = iteratee2 ? iteratee2(value) : value;
              while ((fromIndex = indexOf2(seen, computed, fromIndex, comparator)) > -1) {
                if (seen !== array) {
                  splice.call(seen, fromIndex, 1);
                }
                splice.call(array, fromIndex, 1);
              }
            }
            return array;
          }
          function basePullAt(array, indexes) {
            var length = array ? indexes.length : 0, lastIndex = length - 1;
            while (length--) {
              var index = indexes[length];
              if (length == lastIndex || index !== previous) {
                var previous = index;
                if (isIndex(index)) {
                  splice.call(array, index, 1);
                } else {
                  baseUnset(array, index);
                }
              }
            }
            return array;
          }
          function baseRandom(lower, upper) {
            return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
          }
          function baseRange(start, end, step, fromRight) {
            var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result2 = Array2(length);
            while (length--) {
              result2[fromRight ? length : ++index] = start;
              start += step;
            }
            return result2;
          }
          function baseRepeat(string, n2) {
            var result2 = "";
            if (!string || n2 < 1 || n2 > MAX_SAFE_INTEGER) {
              return result2;
            }
            do {
              if (n2 % 2) {
                result2 += string;
              }
              n2 = nativeFloor(n2 / 2);
              if (n2) {
                string += string;
              }
            } while (n2);
            return result2;
          }
          function baseRest(func, start) {
            return setToString(overRest(func, start, identity), func + "");
          }
          function baseSample(collection) {
            return arraySample(values(collection));
          }
          function baseSampleSize(collection, n2) {
            var array = values(collection);
            return shuffleSelf(array, baseClamp(n2, 0, array.length));
          }
          function baseSet(object, path, value, customizer) {
            if (!isObject(object)) {
              return object;
            }
            path = castPath(path, object);
            var index = -1, length = path.length, lastIndex = length - 1, nested = object;
            while (nested != null && ++index < length) {
              var key = toKey(path[index]), newValue = value;
              if (key === "__proto__" || key === "constructor" || key === "prototype") {
                return object;
              }
              if (index != lastIndex) {
                var objValue = nested[key];
                newValue = customizer ? customizer(objValue, key, nested) : undefined2;
                if (newValue === undefined2) {
                  newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
                }
              }
              assignValue(nested, key, newValue);
              nested = nested[key];
            }
            return object;
          }
          var baseSetData = !metaMap ? identity : function(func, data) {
            metaMap.set(func, data);
            return func;
          };
          var baseSetToString = !defineProperty ? identity : function(func, string) {
            return defineProperty(func, "toString", {
              "configurable": true,
              "enumerable": false,
              "value": constant(string),
              "writable": true
            });
          };
          function baseShuffle(collection) {
            return shuffleSelf(values(collection));
          }
          function baseSlice(array, start, end) {
            var index = -1, length = array.length;
            if (start < 0) {
              start = -start > length ? 0 : length + start;
            }
            end = end > length ? length : end;
            if (end < 0) {
              end += length;
            }
            length = start > end ? 0 : end - start >>> 0;
            start >>>= 0;
            var result2 = Array2(length);
            while (++index < length) {
              result2[index] = array[index + start];
            }
            return result2;
          }
          function baseSome(collection, predicate) {
            var result2;
            baseEach(collection, function(value, index, collection2) {
              result2 = predicate(value, index, collection2);
              return !result2;
            });
            return !!result2;
          }
          function baseSortedIndex(array, value, retHighest) {
            var low = 0, high = array == null ? low : array.length;
            if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
              while (low < high) {
                var mid = low + high >>> 1, computed = array[mid];
                if (computed !== null && !isSymbol(computed) && (retHighest ? computed <= value : computed < value)) {
                  low = mid + 1;
                } else {
                  high = mid;
                }
              }
              return high;
            }
            return baseSortedIndexBy(array, value, identity, retHighest);
          }
          function baseSortedIndexBy(array, value, iteratee2, retHighest) {
            var low = 0, high = array == null ? 0 : array.length;
            if (high === 0) {
              return 0;
            }
            value = iteratee2(value);
            var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined2;
            while (low < high) {
              var mid = nativeFloor((low + high) / 2), computed = iteratee2(array[mid]), othIsDefined = computed !== undefined2, othIsNull = computed === null, othIsReflexive = computed === computed, othIsSymbol = isSymbol(computed);
              if (valIsNaN) {
                var setLow = retHighest || othIsReflexive;
              } else if (valIsUndefined) {
                setLow = othIsReflexive && (retHighest || othIsDefined);
              } else if (valIsNull) {
                setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
              } else if (valIsSymbol) {
                setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
              } else if (othIsNull || othIsSymbol) {
                setLow = false;
              } else {
                setLow = retHighest ? computed <= value : computed < value;
              }
              if (setLow) {
                low = mid + 1;
              } else {
                high = mid;
              }
            }
            return nativeMin(high, MAX_ARRAY_INDEX);
          }
          function baseSortedUniq(array, iteratee2) {
            var index = -1, length = array.length, resIndex = 0, result2 = [];
            while (++index < length) {
              var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
              if (!index || !eq(computed, seen)) {
                var seen = computed;
                result2[resIndex++] = value === 0 ? 0 : value;
              }
            }
            return result2;
          }
          function baseToNumber(value) {
            if (typeof value == "number") {
              return value;
            }
            if (isSymbol(value)) {
              return NAN;
            }
            return +value;
          }
          function baseToString(value) {
            if (typeof value == "string") {
              return value;
            }
            if (isArray(value)) {
              return arrayMap(value, baseToString) + "";
            }
            if (isSymbol(value)) {
              return symbolToString ? symbolToString.call(value) : "";
            }
            var result2 = value + "";
            return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
          }
          function baseUniq(array, iteratee2, comparator) {
            var index = -1, includes2 = arrayIncludes, length = array.length, isCommon = true, result2 = [], seen = result2;
            if (comparator) {
              isCommon = false;
              includes2 = arrayIncludesWith;
            } else if (length >= LARGE_ARRAY_SIZE) {
              var set2 = iteratee2 ? null : createSet(array);
              if (set2) {
                return setToArray(set2);
              }
              isCommon = false;
              includes2 = cacheHas;
              seen = new SetCache();
            } else {
              seen = iteratee2 ? [] : result2;
            }
            outer:
              while (++index < length) {
                var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
                value = comparator || value !== 0 ? value : 0;
                if (isCommon && computed === computed) {
                  var seenIndex = seen.length;
                  while (seenIndex--) {
                    if (seen[seenIndex] === computed) {
                      continue outer;
                    }
                  }
                  if (iteratee2) {
                    seen.push(computed);
                  }
                  result2.push(value);
                } else if (!includes2(seen, computed, comparator)) {
                  if (seen !== result2) {
                    seen.push(computed);
                  }
                  result2.push(value);
                }
              }
            return result2;
          }
          function baseUnset(object, path) {
            path = castPath(path, object);
            object = parent(object, path);
            return object == null || delete object[toKey(last(path))];
          }
          function baseUpdate(object, path, updater, customizer) {
            return baseSet(object, path, updater(baseGet(object, path)), customizer);
          }
          function baseWhile(array, predicate, isDrop, fromRight) {
            var length = array.length, index = fromRight ? length : -1;
            while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {
            }
            return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
          }
          function baseWrapperValue(value, actions) {
            var result2 = value;
            if (result2 instanceof LazyWrapper) {
              result2 = result2.value();
            }
            return arrayReduce(actions, function(result3, action) {
              return action.func.apply(action.thisArg, arrayPush([result3], action.args));
            }, result2);
          }
          function baseXor(arrays, iteratee2, comparator) {
            var length = arrays.length;
            if (length < 2) {
              return length ? baseUniq(arrays[0]) : [];
            }
            var index = -1, result2 = Array2(length);
            while (++index < length) {
              var array = arrays[index], othIndex = -1;
              while (++othIndex < length) {
                if (othIndex != index) {
                  result2[index] = baseDifference(result2[index] || array, arrays[othIndex], iteratee2, comparator);
                }
              }
            }
            return baseUniq(baseFlatten(result2, 1), iteratee2, comparator);
          }
          function baseZipObject(props, values2, assignFunc) {
            var index = -1, length = props.length, valsLength = values2.length, result2 = {};
            while (++index < length) {
              var value = index < valsLength ? values2[index] : undefined2;
              assignFunc(result2, props[index], value);
            }
            return result2;
          }
          function castArrayLikeObject(value) {
            return isArrayLikeObject(value) ? value : [];
          }
          function castFunction(value) {
            return typeof value == "function" ? value : identity;
          }
          function castPath(value, object) {
            if (isArray(value)) {
              return value;
            }
            return isKey(value, object) ? [value] : stringToPath(toString(value));
          }
          var castRest = baseRest;
          function castSlice(array, start, end) {
            var length = array.length;
            end = end === undefined2 ? length : end;
            return !start && end >= length ? array : baseSlice(array, start, end);
          }
          var clearTimeout = ctxClearTimeout || function(id) {
            return root.clearTimeout(id);
          };
          function cloneBuffer(buffer, isDeep) {
            if (isDeep) {
              return buffer.slice();
            }
            var length = buffer.length, result2 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
            buffer.copy(result2);
            return result2;
          }
          function cloneArrayBuffer(arrayBuffer) {
            var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
            new Uint8Array2(result2).set(new Uint8Array2(arrayBuffer));
            return result2;
          }
          function cloneDataView(dataView, isDeep) {
            var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
            return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
          }
          function cloneRegExp(regexp) {
            var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
            result2.lastIndex = regexp.lastIndex;
            return result2;
          }
          function cloneSymbol(symbol) {
            return symbolValueOf ? Object2(symbolValueOf.call(symbol)) : {};
          }
          function cloneTypedArray(typedArray, isDeep) {
            var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
            return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
          }
          function compareAscending(value, other) {
            if (value !== other) {
              var valIsDefined = value !== undefined2, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
              var othIsDefined = other !== undefined2, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
              if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
                return 1;
              }
              if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
                return -1;
              }
            }
            return 0;
          }
          function compareMultiple(object, other, orders) {
            var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
            while (++index < length) {
              var result2 = compareAscending(objCriteria[index], othCriteria[index]);
              if (result2) {
                if (index >= ordersLength) {
                  return result2;
                }
                var order = orders[index];
                return result2 * (order == "desc" ? -1 : 1);
              }
            }
            return object.index - other.index;
          }
          function composeArgs(args, partials, holders, isCurried) {
            var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
            while (++leftIndex < leftLength) {
              result2[leftIndex] = partials[leftIndex];
            }
            while (++argsIndex < holdersLength) {
              if (isUncurried || argsIndex < argsLength) {
                result2[holders[argsIndex]] = args[argsIndex];
              }
            }
            while (rangeLength--) {
              result2[leftIndex++] = args[argsIndex++];
            }
            return result2;
          }
          function composeArgsRight(args, partials, holders, isCurried) {
            var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
            while (++argsIndex < rangeLength) {
              result2[argsIndex] = args[argsIndex];
            }
            var offset = argsIndex;
            while (++rightIndex < rightLength) {
              result2[offset + rightIndex] = partials[rightIndex];
            }
            while (++holdersIndex < holdersLength) {
              if (isUncurried || argsIndex < argsLength) {
                result2[offset + holders[holdersIndex]] = args[argsIndex++];
              }
            }
            return result2;
          }
          function copyArray(source, array) {
            var index = -1, length = source.length;
            array || (array = Array2(length));
            while (++index < length) {
              array[index] = source[index];
            }
            return array;
          }
          function copyObject(source, props, object, customizer) {
            var isNew = !object;
            object || (object = {});
            var index = -1, length = props.length;
            while (++index < length) {
              var key = props[index];
              var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined2;
              if (newValue === undefined2) {
                newValue = source[key];
              }
              if (isNew) {
                baseAssignValue(object, key, newValue);
              } else {
                assignValue(object, key, newValue);
              }
            }
            return object;
          }
          function copySymbols(source, object) {
            return copyObject(source, getSymbols(source), object);
          }
          function copySymbolsIn(source, object) {
            return copyObject(source, getSymbolsIn(source), object);
          }
          function createAggregator(setter, initializer) {
            return function(collection, iteratee2) {
              var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
              return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
            };
          }
          function createAssigner(assigner) {
            return baseRest(function(object, sources) {
              var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined2, guard = length > 2 ? sources[2] : undefined2;
              customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined2;
              if (guard && isIterateeCall(sources[0], sources[1], guard)) {
                customizer = length < 3 ? undefined2 : customizer;
                length = 1;
              }
              object = Object2(object);
              while (++index < length) {
                var source = sources[index];
                if (source) {
                  assigner(object, source, index, customizer);
                }
              }
              return object;
            });
          }
          function createBaseEach(eachFunc, fromRight) {
            return function(collection, iteratee2) {
              if (collection == null) {
                return collection;
              }
              if (!isArrayLike(collection)) {
                return eachFunc(collection, iteratee2);
              }
              var length = collection.length, index = fromRight ? length : -1, iterable = Object2(collection);
              while (fromRight ? index-- : ++index < length) {
                if (iteratee2(iterable[index], index, iterable) === false) {
                  break;
                }
              }
              return collection;
            };
          }
          function createBaseFor(fromRight) {
            return function(object, iteratee2, keysFunc) {
              var index = -1, iterable = Object2(object), props = keysFunc(object), length = props.length;
              while (length--) {
                var key = props[fromRight ? length : ++index];
                if (iteratee2(iterable[key], key, iterable) === false) {
                  break;
                }
              }
              return object;
            };
          }
          function createBind(func, bitmask, thisArg) {
            var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
            function wrapper() {
              var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
              return fn.apply(isBind ? thisArg : this, arguments);
            }
            return wrapper;
          }
          function createCaseFirst(methodName) {
            return function(string) {
              string = toString(string);
              var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined2;
              var chr = strSymbols ? strSymbols[0] : string.charAt(0);
              var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
              return chr[methodName]() + trailing;
            };
          }
          function createCompounder(callback) {
            return function(string) {
              return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
            };
          }
          function createCtor(Ctor) {
            return function() {
              var args = arguments;
              switch (args.length) {
                case 0:
                  return new Ctor();
                case 1:
                  return new Ctor(args[0]);
                case 2:
                  return new Ctor(args[0], args[1]);
                case 3:
                  return new Ctor(args[0], args[1], args[2]);
                case 4:
                  return new Ctor(args[0], args[1], args[2], args[3]);
                case 5:
                  return new Ctor(args[0], args[1], args[2], args[3], args[4]);
                case 6:
                  return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
                case 7:
                  return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
              }
              var thisBinding = baseCreate(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
              return isObject(result2) ? result2 : thisBinding;
            };
          }
          function createCurry(func, bitmask, arity) {
            var Ctor = createCtor(func);
            function wrapper() {
              var length = arguments.length, args = Array2(length), index = length, placeholder = getHolder(wrapper);
              while (index--) {
                args[index] = arguments[index];
              }
              var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
              length -= holders.length;
              if (length < arity) {
                return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, undefined2, args, holders, undefined2, undefined2, arity - length);
              }
              var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
              return apply(fn, this, args);
            }
            return wrapper;
          }
          function createFind(findIndexFunc) {
            return function(collection, predicate, fromIndex) {
              var iterable = Object2(collection);
              if (!isArrayLike(collection)) {
                var iteratee2 = getIteratee(predicate, 3);
                collection = keys(collection);
                predicate = function(key) {
                  return iteratee2(iterable[key], key, iterable);
                };
              }
              var index = findIndexFunc(collection, predicate, fromIndex);
              return index > -1 ? iterable[iteratee2 ? collection[index] : index] : undefined2;
            };
          }
          function createFlow(fromRight) {
            return flatRest(function(funcs) {
              var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
              if (fromRight) {
                funcs.reverse();
              }
              while (index--) {
                var func = funcs[index];
                if (typeof func != "function") {
                  throw new TypeError2(FUNC_ERROR_TEXT);
                }
                if (prereq && !wrapper && getFuncName(func) == "wrapper") {
                  var wrapper = new LodashWrapper([], true);
                }
              }
              index = wrapper ? index : length;
              while (++index < length) {
                func = funcs[index];
                var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined2;
                if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
                  wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
                } else {
                  wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
                }
              }
              return function() {
                var args = arguments, value = args[0];
                if (wrapper && args.length == 1 && isArray(value)) {
                  return wrapper.plant(value).value();
                }
                var index2 = 0, result2 = length ? funcs[index2].apply(this, args) : value;
                while (++index2 < length) {
                  result2 = funcs[index2].call(this, result2);
                }
                return result2;
              };
            });
          }
          function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
            var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined2 : createCtor(func);
            function wrapper() {
              var length = arguments.length, args = Array2(length), index = length;
              while (index--) {
                args[index] = arguments[index];
              }
              if (isCurried) {
                var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
              }
              if (partials) {
                args = composeArgs(args, partials, holders, isCurried);
              }
              if (partialsRight) {
                args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
              }
              length -= holdersCount;
              if (isCurried && length < arity) {
                var newHolders = replaceHolders(args, placeholder);
                return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, thisArg, args, newHolders, argPos, ary2, arity - length);
              }
              var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
              length = args.length;
              if (argPos) {
                args = reorder(args, argPos);
              } else if (isFlip && length > 1) {
                args.reverse();
              }
              if (isAry && ary2 < length) {
                args.length = ary2;
              }
              if (this && this !== root && this instanceof wrapper) {
                fn = Ctor || createCtor(fn);
              }
              return fn.apply(thisBinding, args);
            }
            return wrapper;
          }
          function createInverter(setter, toIteratee) {
            return function(object, iteratee2) {
              return baseInverter(object, setter, toIteratee(iteratee2), {});
            };
          }
          function createMathOperation(operator, defaultValue) {
            return function(value, other) {
              var result2;
              if (value === undefined2 && other === undefined2) {
                return defaultValue;
              }
              if (value !== undefined2) {
                result2 = value;
              }
              if (other !== undefined2) {
                if (result2 === undefined2) {
                  return other;
                }
                if (typeof value == "string" || typeof other == "string") {
                  value = baseToString(value);
                  other = baseToString(other);
                } else {
                  value = baseToNumber(value);
                  other = baseToNumber(other);
                }
                result2 = operator(value, other);
              }
              return result2;
            };
          }
          function createOver(arrayFunc) {
            return flatRest(function(iteratees) {
              iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
              return baseRest(function(args) {
                var thisArg = this;
                return arrayFunc(iteratees, function(iteratee2) {
                  return apply(iteratee2, thisArg, args);
                });
              });
            });
          }
          function createPadding(length, chars) {
            chars = chars === undefined2 ? " " : baseToString(chars);
            var charsLength = chars.length;
            if (charsLength < 2) {
              return charsLength ? baseRepeat(chars, length) : chars;
            }
            var result2 = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
            return hasUnicode(chars) ? castSlice(stringToArray(result2), 0, length).join("") : result2.slice(0, length);
          }
          function createPartial(func, bitmask, thisArg, partials) {
            var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
            function wrapper() {
              var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
              while (++leftIndex < leftLength) {
                args[leftIndex] = partials[leftIndex];
              }
              while (argsLength--) {
                args[leftIndex++] = arguments[++argsIndex];
              }
              return apply(fn, isBind ? thisArg : this, args);
            }
            return wrapper;
          }
          function createRange(fromRight) {
            return function(start, end, step) {
              if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
                end = step = undefined2;
              }
              start = toFinite(start);
              if (end === undefined2) {
                end = start;
                start = 0;
              } else {
                end = toFinite(end);
              }
              step = step === undefined2 ? start < end ? 1 : -1 : toFinite(step);
              return baseRange(start, end, step, fromRight);
            };
          }
          function createRelationalOperation(operator) {
            return function(value, other) {
              if (!(typeof value == "string" && typeof other == "string")) {
                value = toNumber(value);
                other = toNumber(other);
              }
              return operator(value, other);
            };
          }
          function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
            var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined2, newHoldersRight = isCurry ? undefined2 : holders, newPartials = isCurry ? partials : undefined2, newPartialsRight = isCurry ? undefined2 : partials;
            bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
            bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
            if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
              bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
            }
            var newData = [
              func,
              bitmask,
              thisArg,
              newPartials,
              newHolders,
              newPartialsRight,
              newHoldersRight,
              argPos,
              ary2,
              arity
            ];
            var result2 = wrapFunc.apply(undefined2, newData);
            if (isLaziable(func)) {
              setData(result2, newData);
            }
            result2.placeholder = placeholder;
            return setWrapToString(result2, func, bitmask);
          }
          function createRound(methodName) {
            var func = Math2[methodName];
            return function(number, precision) {
              number = toNumber(number);
              precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
              if (precision && nativeIsFinite(number)) {
                var pair = (toString(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
                pair = (toString(value) + "e").split("e");
                return +(pair[0] + "e" + (+pair[1] - precision));
              }
              return func(number);
            };
          }
          var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY) ? noop : function(values2) {
            return new Set2(values2);
          };
          function createToPairs(keysFunc) {
            return function(object) {
              var tag = getTag(object);
              if (tag == mapTag) {
                return mapToArray(object);
              }
              if (tag == setTag) {
                return setToPairs(object);
              }
              return baseToPairs(object, keysFunc(object));
            };
          }
          function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
            var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
            if (!isBindKey && typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            var length = partials ? partials.length : 0;
            if (!length) {
              bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
              partials = holders = undefined2;
            }
            ary2 = ary2 === undefined2 ? ary2 : nativeMax(toInteger(ary2), 0);
            arity = arity === undefined2 ? arity : toInteger(arity);
            length -= holders ? holders.length : 0;
            if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
              var partialsRight = partials, holdersRight = holders;
              partials = holders = undefined2;
            }
            var data = isBindKey ? undefined2 : getData(func);
            var newData = [
              func,
              bitmask,
              thisArg,
              partials,
              holders,
              partialsRight,
              holdersRight,
              argPos,
              ary2,
              arity
            ];
            if (data) {
              mergeData(newData, data);
            }
            func = newData[0];
            bitmask = newData[1];
            thisArg = newData[2];
            partials = newData[3];
            holders = newData[4];
            arity = newData[9] = newData[9] === undefined2 ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
            if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
              bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
            }
            if (!bitmask || bitmask == WRAP_BIND_FLAG) {
              var result2 = createBind(func, bitmask, thisArg);
            } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
              result2 = createCurry(func, bitmask, arity);
            } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
              result2 = createPartial(func, bitmask, thisArg, partials);
            } else {
              result2 = createHybrid.apply(undefined2, newData);
            }
            var setter = data ? baseSetData : setData;
            return setWrapToString(setter(result2, newData), func, bitmask);
          }
          function customDefaultsAssignIn(objValue, srcValue, key, object) {
            if (objValue === undefined2 || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
              return srcValue;
            }
            return objValue;
          }
          function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
            if (isObject(objValue) && isObject(srcValue)) {
              stack.set(srcValue, objValue);
              baseMerge(objValue, srcValue, undefined2, customDefaultsMerge, stack);
              stack["delete"](srcValue);
            }
            return objValue;
          }
          function customOmitClone(value) {
            return isPlainObject(value) ? undefined2 : value;
          }
          function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
            if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
              return false;
            }
            var arrStacked = stack.get(array);
            var othStacked = stack.get(other);
            if (arrStacked && othStacked) {
              return arrStacked == other && othStacked == array;
            }
            var index = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined2;
            stack.set(array, other);
            stack.set(other, array);
            while (++index < arrLength) {
              var arrValue = array[index], othValue = other[index];
              if (customizer) {
                var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
              }
              if (compared !== undefined2) {
                if (compared) {
                  continue;
                }
                result2 = false;
                break;
              }
              if (seen) {
                if (!arraySome(other, function(othValue2, othIndex) {
                  if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                    return seen.push(othIndex);
                  }
                })) {
                  result2 = false;
                  break;
                }
              } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                result2 = false;
                break;
              }
            }
            stack["delete"](array);
            stack["delete"](other);
            return result2;
          }
          function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
            switch (tag) {
              case dataViewTag:
                if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
                  return false;
                }
                object = object.buffer;
                other = other.buffer;
              case arrayBufferTag:
                if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
                  return false;
                }
                return true;
              case boolTag:
              case dateTag:
              case numberTag:
                return eq(+object, +other);
              case errorTag:
                return object.name == other.name && object.message == other.message;
              case regexpTag:
              case stringTag:
                return object == other + "";
              case mapTag:
                var convert = mapToArray;
              case setTag:
                var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
                convert || (convert = setToArray);
                if (object.size != other.size && !isPartial) {
                  return false;
                }
                var stacked = stack.get(object);
                if (stacked) {
                  return stacked == other;
                }
                bitmask |= COMPARE_UNORDERED_FLAG;
                stack.set(object, other);
                var result2 = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
                stack["delete"](object);
                return result2;
              case symbolTag:
                if (symbolValueOf) {
                  return symbolValueOf.call(object) == symbolValueOf.call(other);
                }
            }
            return false;
          }
          function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
            if (objLength != othLength && !isPartial) {
              return false;
            }
            var index = objLength;
            while (index--) {
              var key = objProps[index];
              if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
                return false;
              }
            }
            var objStacked = stack.get(object);
            var othStacked = stack.get(other);
            if (objStacked && othStacked) {
              return objStacked == other && othStacked == object;
            }
            var result2 = true;
            stack.set(object, other);
            stack.set(other, object);
            var skipCtor = isPartial;
            while (++index < objLength) {
              key = objProps[index];
              var objValue = object[key], othValue = other[key];
              if (customizer) {
                var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
              }
              if (!(compared === undefined2 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
                result2 = false;
                break;
              }
              skipCtor || (skipCtor = key == "constructor");
            }
            if (result2 && !skipCtor) {
              var objCtor = object.constructor, othCtor = other.constructor;
              if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
                result2 = false;
              }
            }
            stack["delete"](object);
            stack["delete"](other);
            return result2;
          }
          function flatRest(func) {
            return setToString(overRest(func, undefined2, flatten), func + "");
          }
          function getAllKeys(object) {
            return baseGetAllKeys(object, keys, getSymbols);
          }
          function getAllKeysIn(object) {
            return baseGetAllKeys(object, keysIn, getSymbolsIn);
          }
          var getData = !metaMap ? noop : function(func) {
            return metaMap.get(func);
          };
          function getFuncName(func) {
            var result2 = func.name + "", array = realNames[result2], length = hasOwnProperty.call(realNames, result2) ? array.length : 0;
            while (length--) {
              var data = array[length], otherFunc = data.func;
              if (otherFunc == null || otherFunc == func) {
                return data.name;
              }
            }
            return result2;
          }
          function getHolder(func) {
            var object = hasOwnProperty.call(lodash, "placeholder") ? lodash : func;
            return object.placeholder;
          }
          function getIteratee() {
            var result2 = lodash.iteratee || iteratee;
            result2 = result2 === iteratee ? baseIteratee : result2;
            return arguments.length ? result2(arguments[0], arguments[1]) : result2;
          }
          function getMapData(map2, key) {
            var data = map2.__data__;
            return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
          }
          function getMatchData(object) {
            var result2 = keys(object), length = result2.length;
            while (length--) {
              var key = result2[length], value = object[key];
              result2[length] = [key, value, isStrictComparable(value)];
            }
            return result2;
          }
          function getNative(object, key) {
            var value = getValue(object, key);
            return baseIsNative(value) ? value : undefined2;
          }
          function getRawTag(value) {
            var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
            try {
              value[symToStringTag] = undefined2;
              var unmasked = true;
            } catch (e2) {
            }
            var result2 = nativeObjectToString.call(value);
            if (unmasked) {
              if (isOwn) {
                value[symToStringTag] = tag;
              } else {
                delete value[symToStringTag];
              }
            }
            return result2;
          }
          var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
            if (object == null) {
              return [];
            }
            object = Object2(object);
            return arrayFilter(nativeGetSymbols(object), function(symbol) {
              return propertyIsEnumerable.call(object, symbol);
            });
          };
          var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
            var result2 = [];
            while (object) {
              arrayPush(result2, getSymbols(object));
              object = getPrototype(object);
            }
            return result2;
          };
          var getTag = baseGetTag;
          if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
            getTag = function(value) {
              var result2 = baseGetTag(value), Ctor = result2 == objectTag ? value.constructor : undefined2, ctorString = Ctor ? toSource(Ctor) : "";
              if (ctorString) {
                switch (ctorString) {
                  case dataViewCtorString:
                    return dataViewTag;
                  case mapCtorString:
                    return mapTag;
                  case promiseCtorString:
                    return promiseTag;
                  case setCtorString:
                    return setTag;
                  case weakMapCtorString:
                    return weakMapTag;
                }
              }
              return result2;
            };
          }
          function getView(start, end, transforms) {
            var index = -1, length = transforms.length;
            while (++index < length) {
              var data = transforms[index], size2 = data.size;
              switch (data.type) {
                case "drop":
                  start += size2;
                  break;
                case "dropRight":
                  end -= size2;
                  break;
                case "take":
                  end = nativeMin(end, start + size2);
                  break;
                case "takeRight":
                  start = nativeMax(start, end - size2);
                  break;
              }
            }
            return { "start": start, "end": end };
          }
          function getWrapDetails(source) {
            var match = source.match(reWrapDetails);
            return match ? match[1].split(reSplitDetails) : [];
          }
          function hasPath(object, path, hasFunc) {
            path = castPath(path, object);
            var index = -1, length = path.length, result2 = false;
            while (++index < length) {
              var key = toKey(path[index]);
              if (!(result2 = object != null && hasFunc(object, key))) {
                break;
              }
              object = object[key];
            }
            if (result2 || ++index != length) {
              return result2;
            }
            length = object == null ? 0 : object.length;
            return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
          }
          function initCloneArray(array) {
            var length = array.length, result2 = new array.constructor(length);
            if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
              result2.index = array.index;
              result2.input = array.input;
            }
            return result2;
          }
          function initCloneObject(object) {
            return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
          }
          function initCloneByTag(object, tag, isDeep) {
            var Ctor = object.constructor;
            switch (tag) {
              case arrayBufferTag:
                return cloneArrayBuffer(object);
              case boolTag:
              case dateTag:
                return new Ctor(+object);
              case dataViewTag:
                return cloneDataView(object, isDeep);
              case float32Tag:
              case float64Tag:
              case int8Tag:
              case int16Tag:
              case int32Tag:
              case uint8Tag:
              case uint8ClampedTag:
              case uint16Tag:
              case uint32Tag:
                return cloneTypedArray(object, isDeep);
              case mapTag:
                return new Ctor();
              case numberTag:
              case stringTag:
                return new Ctor(object);
              case regexpTag:
                return cloneRegExp(object);
              case setTag:
                return new Ctor();
              case symbolTag:
                return cloneSymbol(object);
            }
          }
          function insertWrapDetails(source, details) {
            var length = details.length;
            if (!length) {
              return source;
            }
            var lastIndex = length - 1;
            details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
            details = details.join(length > 2 ? ", " : " ");
            return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
          }
          function isFlattenable(value) {
            return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
          }
          function isIndex(value, length) {
            var type = typeof value;
            length = length == null ? MAX_SAFE_INTEGER : length;
            return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
          }
          function isIterateeCall(value, index, object) {
            if (!isObject(object)) {
              return false;
            }
            var type = typeof index;
            if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
              return eq(object[index], value);
            }
            return false;
          }
          function isKey(value, object) {
            if (isArray(value)) {
              return false;
            }
            var type = typeof value;
            if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
              return true;
            }
            return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object2(object);
          }
          function isKeyable(value) {
            var type = typeof value;
            return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
          }
          function isLaziable(func) {
            var funcName = getFuncName(func), other = lodash[funcName];
            if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
              return false;
            }
            if (func === other) {
              return true;
            }
            var data = getData(other);
            return !!data && func === data[0];
          }
          function isMasked(func) {
            return !!maskSrcKey && maskSrcKey in func;
          }
          var isMaskable = coreJsData ? isFunction : stubFalse;
          function isPrototype(value) {
            var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
            return value === proto;
          }
          function isStrictComparable(value) {
            return value === value && !isObject(value);
          }
          function matchesStrictComparable(key, srcValue) {
            return function(object) {
              if (object == null) {
                return false;
              }
              return object[key] === srcValue && (srcValue !== undefined2 || key in Object2(object));
            };
          }
          function memoizeCapped(func) {
            var result2 = memoize(func, function(key) {
              if (cache.size === MAX_MEMOIZE_SIZE) {
                cache.clear();
              }
              return key;
            });
            var cache = result2.cache;
            return result2;
          }
          function mergeData(data, source) {
            var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
            var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
            if (!(isCommon || isCombo)) {
              return data;
            }
            if (srcBitmask & WRAP_BIND_FLAG) {
              data[2] = source[2];
              newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
            }
            var value = source[3];
            if (value) {
              var partials = data[3];
              data[3] = partials ? composeArgs(partials, value, source[4]) : value;
              data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
            }
            value = source[5];
            if (value) {
              partials = data[5];
              data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
              data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
            }
            value = source[7];
            if (value) {
              data[7] = value;
            }
            if (srcBitmask & WRAP_ARY_FLAG) {
              data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
            }
            if (data[9] == null) {
              data[9] = source[9];
            }
            data[0] = source[0];
            data[1] = newBitmask;
            return data;
          }
          function nativeKeysIn(object) {
            var result2 = [];
            if (object != null) {
              for (var key in Object2(object)) {
                result2.push(key);
              }
            }
            return result2;
          }
          function objectToString(value) {
            return nativeObjectToString.call(value);
          }
          function overRest(func, start, transform2) {
            start = nativeMax(start === undefined2 ? func.length - 1 : start, 0);
            return function() {
              var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array2(length);
              while (++index < length) {
                array[index] = args[start + index];
              }
              index = -1;
              var otherArgs = Array2(start + 1);
              while (++index < start) {
                otherArgs[index] = args[index];
              }
              otherArgs[start] = transform2(array);
              return apply(func, this, otherArgs);
            };
          }
          function parent(object, path) {
            return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
          }
          function reorder(array, indexes) {
            var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
            while (length--) {
              var index = indexes[length];
              array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined2;
            }
            return array;
          }
          function safeGet(object, key) {
            if (key === "constructor" && typeof object[key] === "function") {
              return;
            }
            if (key == "__proto__") {
              return;
            }
            return object[key];
          }
          var setData = shortOut(baseSetData);
          var setTimeout2 = ctxSetTimeout || function(func, wait) {
            return root.setTimeout(func, wait);
          };
          var setToString = shortOut(baseSetToString);
          function setWrapToString(wrapper, reference, bitmask) {
            var source = reference + "";
            return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
          }
          function shortOut(func) {
            var count = 0, lastCalled = 0;
            return function() {
              var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
              lastCalled = stamp;
              if (remaining > 0) {
                if (++count >= HOT_COUNT) {
                  return arguments[0];
                }
              } else {
                count = 0;
              }
              return func.apply(undefined2, arguments);
            };
          }
          function shuffleSelf(array, size2) {
            var index = -1, length = array.length, lastIndex = length - 1;
            size2 = size2 === undefined2 ? length : size2;
            while (++index < size2) {
              var rand = baseRandom(index, lastIndex), value = array[rand];
              array[rand] = array[index];
              array[index] = value;
            }
            array.length = size2;
            return array;
          }
          var stringToPath = memoizeCapped(function(string) {
            var result2 = [];
            if (string.charCodeAt(0) === 46) {
              result2.push("");
            }
            string.replace(rePropName, function(match, number, quote, subString) {
              result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
            });
            return result2;
          });
          function toKey(value) {
            if (typeof value == "string" || isSymbol(value)) {
              return value;
            }
            var result2 = value + "";
            return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
          }
          function toSource(func) {
            if (func != null) {
              try {
                return funcToString.call(func);
              } catch (e2) {
              }
              try {
                return func + "";
              } catch (e2) {
              }
            }
            return "";
          }
          function updateWrapDetails(details, bitmask) {
            arrayEach(wrapFlags, function(pair) {
              var value = "_." + pair[0];
              if (bitmask & pair[1] && !arrayIncludes(details, value)) {
                details.push(value);
              }
            });
            return details.sort();
          }
          function wrapperClone(wrapper) {
            if (wrapper instanceof LazyWrapper) {
              return wrapper.clone();
            }
            var result2 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
            result2.__actions__ = copyArray(wrapper.__actions__);
            result2.__index__ = wrapper.__index__;
            result2.__values__ = wrapper.__values__;
            return result2;
          }
          function chunk(array, size2, guard) {
            if (guard ? isIterateeCall(array, size2, guard) : size2 === undefined2) {
              size2 = 1;
            } else {
              size2 = nativeMax(toInteger(size2), 0);
            }
            var length = array == null ? 0 : array.length;
            if (!length || size2 < 1) {
              return [];
            }
            var index = 0, resIndex = 0, result2 = Array2(nativeCeil(length / size2));
            while (index < length) {
              result2[resIndex++] = baseSlice(array, index, index += size2);
            }
            return result2;
          }
          function compact(array) {
            var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result2 = [];
            while (++index < length) {
              var value = array[index];
              if (value) {
                result2[resIndex++] = value;
              }
            }
            return result2;
          }
          function concat() {
            var length = arguments.length;
            if (!length) {
              return [];
            }
            var args = Array2(length - 1), array = arguments[0], index = length;
            while (index--) {
              args[index - 1] = arguments[index];
            }
            return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
          }
          var difference = baseRest(function(array, values2) {
            return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true)) : [];
          });
          var differenceBy = baseRest(function(array, values2) {
            var iteratee2 = last(values2);
            if (isArrayLikeObject(iteratee2)) {
              iteratee2 = undefined2;
            }
            return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
          });
          var differenceWith = baseRest(function(array, values2) {
            var comparator = last(values2);
            if (isArrayLikeObject(comparator)) {
              comparator = undefined2;
            }
            return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), undefined2, comparator) : [];
          });
          function drop(array, n2, guard) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            n2 = guard || n2 === undefined2 ? 1 : toInteger(n2);
            return baseSlice(array, n2 < 0 ? 0 : n2, length);
          }
          function dropRight(array, n2, guard) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            n2 = guard || n2 === undefined2 ? 1 : toInteger(n2);
            n2 = length - n2;
            return baseSlice(array, 0, n2 < 0 ? 0 : n2);
          }
          function dropRightWhile(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
          }
          function dropWhile(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
          }
          function fill(array, value, start, end) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            if (start && typeof start != "number" && isIterateeCall(array, value, start)) {
              start = 0;
              end = length;
            }
            return baseFill(array, value, start, end);
          }
          function findIndex(array, predicate, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return -1;
            }
            var index = fromIndex == null ? 0 : toInteger(fromIndex);
            if (index < 0) {
              index = nativeMax(length + index, 0);
            }
            return baseFindIndex(array, getIteratee(predicate, 3), index);
          }
          function findLastIndex(array, predicate, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return -1;
            }
            var index = length - 1;
            if (fromIndex !== undefined2) {
              index = toInteger(fromIndex);
              index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
            }
            return baseFindIndex(array, getIteratee(predicate, 3), index, true);
          }
          function flatten(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseFlatten(array, 1) : [];
          }
          function flattenDeep(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseFlatten(array, INFINITY) : [];
          }
          function flattenDepth(array, depth) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            depth = depth === undefined2 ? 1 : toInteger(depth);
            return baseFlatten(array, depth);
          }
          function fromPairs(pairs) {
            var index = -1, length = pairs == null ? 0 : pairs.length, result2 = {};
            while (++index < length) {
              var pair = pairs[index];
              result2[pair[0]] = pair[1];
            }
            return result2;
          }
          function head(array) {
            return array && array.length ? array[0] : undefined2;
          }
          function indexOf(array, value, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return -1;
            }
            var index = fromIndex == null ? 0 : toInteger(fromIndex);
            if (index < 0) {
              index = nativeMax(length + index, 0);
            }
            return baseIndexOf(array, value, index);
          }
          function initial(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseSlice(array, 0, -1) : [];
          }
          var intersection = baseRest(function(arrays) {
            var mapped = arrayMap(arrays, castArrayLikeObject);
            return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
          });
          var intersectionBy = baseRest(function(arrays) {
            var iteratee2 = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
            if (iteratee2 === last(mapped)) {
              iteratee2 = undefined2;
            } else {
              mapped.pop();
            }
            return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee2, 2)) : [];
          });
          var intersectionWith = baseRest(function(arrays) {
            var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
            comparator = typeof comparator == "function" ? comparator : undefined2;
            if (comparator) {
              mapped.pop();
            }
            return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined2, comparator) : [];
          });
          function join(array, separator) {
            return array == null ? "" : nativeJoin.call(array, separator);
          }
          function last(array) {
            var length = array == null ? 0 : array.length;
            return length ? array[length - 1] : undefined2;
          }
          function lastIndexOf(array, value, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return -1;
            }
            var index = length;
            if (fromIndex !== undefined2) {
              index = toInteger(fromIndex);
              index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
            }
            return value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, true);
          }
          function nth(array, n2) {
            return array && array.length ? baseNth(array, toInteger(n2)) : undefined2;
          }
          var pull = baseRest(pullAll);
          function pullAll(array, values2) {
            return array && array.length && values2 && values2.length ? basePullAll(array, values2) : array;
          }
          function pullAllBy(array, values2, iteratee2) {
            return array && array.length && values2 && values2.length ? basePullAll(array, values2, getIteratee(iteratee2, 2)) : array;
          }
          function pullAllWith(array, values2, comparator) {
            return array && array.length && values2 && values2.length ? basePullAll(array, values2, undefined2, comparator) : array;
          }
          var pullAt = flatRest(function(array, indexes) {
            var length = array == null ? 0 : array.length, result2 = baseAt(array, indexes);
            basePullAt(array, arrayMap(indexes, function(index) {
              return isIndex(index, length) ? +index : index;
            }).sort(compareAscending));
            return result2;
          });
          function remove(array, predicate) {
            var result2 = [];
            if (!(array && array.length)) {
              return result2;
            }
            var index = -1, indexes = [], length = array.length;
            predicate = getIteratee(predicate, 3);
            while (++index < length) {
              var value = array[index];
              if (predicate(value, index, array)) {
                result2.push(value);
                indexes.push(index);
              }
            }
            basePullAt(array, indexes);
            return result2;
          }
          function reverse(array) {
            return array == null ? array : nativeReverse.call(array);
          }
          function slice(array, start, end) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            if (end && typeof end != "number" && isIterateeCall(array, start, end)) {
              start = 0;
              end = length;
            } else {
              start = start == null ? 0 : toInteger(start);
              end = end === undefined2 ? length : toInteger(end);
            }
            return baseSlice(array, start, end);
          }
          function sortedIndex(array, value) {
            return baseSortedIndex(array, value);
          }
          function sortedIndexBy(array, value, iteratee2) {
            return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2));
          }
          function sortedIndexOf(array, value) {
            var length = array == null ? 0 : array.length;
            if (length) {
              var index = baseSortedIndex(array, value);
              if (index < length && eq(array[index], value)) {
                return index;
              }
            }
            return -1;
          }
          function sortedLastIndex(array, value) {
            return baseSortedIndex(array, value, true);
          }
          function sortedLastIndexBy(array, value, iteratee2) {
            return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2), true);
          }
          function sortedLastIndexOf(array, value) {
            var length = array == null ? 0 : array.length;
            if (length) {
              var index = baseSortedIndex(array, value, true) - 1;
              if (eq(array[index], value)) {
                return index;
              }
            }
            return -1;
          }
          function sortedUniq(array) {
            return array && array.length ? baseSortedUniq(array) : [];
          }
          function sortedUniqBy(array, iteratee2) {
            return array && array.length ? baseSortedUniq(array, getIteratee(iteratee2, 2)) : [];
          }
          function tail(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseSlice(array, 1, length) : [];
          }
          function take(array, n2, guard) {
            if (!(array && array.length)) {
              return [];
            }
            n2 = guard || n2 === undefined2 ? 1 : toInteger(n2);
            return baseSlice(array, 0, n2 < 0 ? 0 : n2);
          }
          function takeRight(array, n2, guard) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            n2 = guard || n2 === undefined2 ? 1 : toInteger(n2);
            n2 = length - n2;
            return baseSlice(array, n2 < 0 ? 0 : n2, length);
          }
          function takeRightWhile(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
          }
          function takeWhile(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
          }
          var union = baseRest(function(arrays) {
            return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
          });
          var unionBy = baseRest(function(arrays) {
            var iteratee2 = last(arrays);
            if (isArrayLikeObject(iteratee2)) {
              iteratee2 = undefined2;
            }
            return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2));
          });
          var unionWith = baseRest(function(arrays) {
            var comparator = last(arrays);
            comparator = typeof comparator == "function" ? comparator : undefined2;
            return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined2, comparator);
          });
          function uniq(array) {
            return array && array.length ? baseUniq(array) : [];
          }
          function uniqBy(array, iteratee2) {
            return array && array.length ? baseUniq(array, getIteratee(iteratee2, 2)) : [];
          }
          function uniqWith(array, comparator) {
            comparator = typeof comparator == "function" ? comparator : undefined2;
            return array && array.length ? baseUniq(array, undefined2, comparator) : [];
          }
          function unzip(array) {
            if (!(array && array.length)) {
              return [];
            }
            var length = 0;
            array = arrayFilter(array, function(group) {
              if (isArrayLikeObject(group)) {
                length = nativeMax(group.length, length);
                return true;
              }
            });
            return baseTimes(length, function(index) {
              return arrayMap(array, baseProperty(index));
            });
          }
          function unzipWith(array, iteratee2) {
            if (!(array && array.length)) {
              return [];
            }
            var result2 = unzip(array);
            if (iteratee2 == null) {
              return result2;
            }
            return arrayMap(result2, function(group) {
              return apply(iteratee2, undefined2, group);
            });
          }
          var without = baseRest(function(array, values2) {
            return isArrayLikeObject(array) ? baseDifference(array, values2) : [];
          });
          var xor = baseRest(function(arrays) {
            return baseXor(arrayFilter(arrays, isArrayLikeObject));
          });
          var xorBy = baseRest(function(arrays) {
            var iteratee2 = last(arrays);
            if (isArrayLikeObject(iteratee2)) {
              iteratee2 = undefined2;
            }
            return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee2, 2));
          });
          var xorWith = baseRest(function(arrays) {
            var comparator = last(arrays);
            comparator = typeof comparator == "function" ? comparator : undefined2;
            return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined2, comparator);
          });
          var zip = baseRest(unzip);
          function zipObject(props, values2) {
            return baseZipObject(props || [], values2 || [], assignValue);
          }
          function zipObjectDeep(props, values2) {
            return baseZipObject(props || [], values2 || [], baseSet);
          }
          var zipWith = baseRest(function(arrays) {
            var length = arrays.length, iteratee2 = length > 1 ? arrays[length - 1] : undefined2;
            iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : undefined2;
            return unzipWith(arrays, iteratee2);
          });
          function chain(value) {
            var result2 = lodash(value);
            result2.__chain__ = true;
            return result2;
          }
          function tap(value, interceptor) {
            interceptor(value);
            return value;
          }
          function thru(value, interceptor) {
            return interceptor(value);
          }
          var wrapperAt = flatRest(function(paths) {
            var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
              return baseAt(object, paths);
            };
            if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
              return this.thru(interceptor);
            }
            value = value.slice(start, +start + (length ? 1 : 0));
            value.__actions__.push({
              "func": thru,
              "args": [interceptor],
              "thisArg": undefined2
            });
            return new LodashWrapper(value, this.__chain__).thru(function(array) {
              if (length && !array.length) {
                array.push(undefined2);
              }
              return array;
            });
          });
          function wrapperChain() {
            return chain(this);
          }
          function wrapperCommit() {
            return new LodashWrapper(this.value(), this.__chain__);
          }
          function wrapperNext() {
            if (this.__values__ === undefined2) {
              this.__values__ = toArray(this.value());
            }
            var done = this.__index__ >= this.__values__.length, value = done ? undefined2 : this.__values__[this.__index__++];
            return { "done": done, "value": value };
          }
          function wrapperToIterator() {
            return this;
          }
          function wrapperPlant(value) {
            var result2, parent2 = this;
            while (parent2 instanceof baseLodash) {
              var clone2 = wrapperClone(parent2);
              clone2.__index__ = 0;
              clone2.__values__ = undefined2;
              if (result2) {
                previous.__wrapped__ = clone2;
              } else {
                result2 = clone2;
              }
              var previous = clone2;
              parent2 = parent2.__wrapped__;
            }
            previous.__wrapped__ = value;
            return result2;
          }
          function wrapperReverse() {
            var value = this.__wrapped__;
            if (value instanceof LazyWrapper) {
              var wrapped = value;
              if (this.__actions__.length) {
                wrapped = new LazyWrapper(this);
              }
              wrapped = wrapped.reverse();
              wrapped.__actions__.push({
                "func": thru,
                "args": [reverse],
                "thisArg": undefined2
              });
              return new LodashWrapper(wrapped, this.__chain__);
            }
            return this.thru(reverse);
          }
          function wrapperValue() {
            return baseWrapperValue(this.__wrapped__, this.__actions__);
          }
          var countBy = createAggregator(function(result2, value, key) {
            if (hasOwnProperty.call(result2, key)) {
              ++result2[key];
            } else {
              baseAssignValue(result2, key, 1);
            }
          });
          function every(collection, predicate, guard) {
            var func = isArray(collection) ? arrayEvery : baseEvery;
            if (guard && isIterateeCall(collection, predicate, guard)) {
              predicate = undefined2;
            }
            return func(collection, getIteratee(predicate, 3));
          }
          function filter(collection, predicate) {
            var func = isArray(collection) ? arrayFilter : baseFilter;
            return func(collection, getIteratee(predicate, 3));
          }
          var find = createFind(findIndex);
          var findLast = createFind(findLastIndex);
          function flatMap(collection, iteratee2) {
            return baseFlatten(map(collection, iteratee2), 1);
          }
          function flatMapDeep(collection, iteratee2) {
            return baseFlatten(map(collection, iteratee2), INFINITY);
          }
          function flatMapDepth(collection, iteratee2, depth) {
            depth = depth === undefined2 ? 1 : toInteger(depth);
            return baseFlatten(map(collection, iteratee2), depth);
          }
          function forEach(collection, iteratee2) {
            var func = isArray(collection) ? arrayEach : baseEach;
            return func(collection, getIteratee(iteratee2, 3));
          }
          function forEachRight(collection, iteratee2) {
            var func = isArray(collection) ? arrayEachRight : baseEachRight;
            return func(collection, getIteratee(iteratee2, 3));
          }
          var groupBy = createAggregator(function(result2, value, key) {
            if (hasOwnProperty.call(result2, key)) {
              result2[key].push(value);
            } else {
              baseAssignValue(result2, key, [value]);
            }
          });
          function includes(collection, value, fromIndex, guard) {
            collection = isArrayLike(collection) ? collection : values(collection);
            fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
            var length = collection.length;
            if (fromIndex < 0) {
              fromIndex = nativeMax(length + fromIndex, 0);
            }
            return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
          }
          var invokeMap = baseRest(function(collection, path, args) {
            var index = -1, isFunc = typeof path == "function", result2 = isArrayLike(collection) ? Array2(collection.length) : [];
            baseEach(collection, function(value) {
              result2[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
            });
            return result2;
          });
          var keyBy = createAggregator(function(result2, value, key) {
            baseAssignValue(result2, key, value);
          });
          function map(collection, iteratee2) {
            var func = isArray(collection) ? arrayMap : baseMap;
            return func(collection, getIteratee(iteratee2, 3));
          }
          function orderBy(collection, iteratees, orders, guard) {
            if (collection == null) {
              return [];
            }
            if (!isArray(iteratees)) {
              iteratees = iteratees == null ? [] : [iteratees];
            }
            orders = guard ? undefined2 : orders;
            if (!isArray(orders)) {
              orders = orders == null ? [] : [orders];
            }
            return baseOrderBy(collection, iteratees, orders);
          }
          var partition = createAggregator(function(result2, value, key) {
            result2[key ? 0 : 1].push(value);
          }, function() {
            return [[], []];
          });
          function reduce(collection, iteratee2, accumulator) {
            var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
            return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEach);
          }
          function reduceRight(collection, iteratee2, accumulator) {
            var func = isArray(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
            return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEachRight);
          }
          function reject(collection, predicate) {
            var func = isArray(collection) ? arrayFilter : baseFilter;
            return func(collection, negate(getIteratee(predicate, 3)));
          }
          function sample(collection) {
            var func = isArray(collection) ? arraySample : baseSample;
            return func(collection);
          }
          function sampleSize(collection, n2, guard) {
            if (guard ? isIterateeCall(collection, n2, guard) : n2 === undefined2) {
              n2 = 1;
            } else {
              n2 = toInteger(n2);
            }
            var func = isArray(collection) ? arraySampleSize : baseSampleSize;
            return func(collection, n2);
          }
          function shuffle(collection) {
            var func = isArray(collection) ? arrayShuffle : baseShuffle;
            return func(collection);
          }
          function size(collection) {
            if (collection == null) {
              return 0;
            }
            if (isArrayLike(collection)) {
              return isString(collection) ? stringSize(collection) : collection.length;
            }
            var tag = getTag(collection);
            if (tag == mapTag || tag == setTag) {
              return collection.size;
            }
            return baseKeys(collection).length;
          }
          function some(collection, predicate, guard) {
            var func = isArray(collection) ? arraySome : baseSome;
            if (guard && isIterateeCall(collection, predicate, guard)) {
              predicate = undefined2;
            }
            return func(collection, getIteratee(predicate, 3));
          }
          var sortBy = baseRest(function(collection, iteratees) {
            if (collection == null) {
              return [];
            }
            var length = iteratees.length;
            if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
              iteratees = [];
            } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
              iteratees = [iteratees[0]];
            }
            return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
          });
          var now = ctxNow || function() {
            return root.Date.now();
          };
          function after(n2, func) {
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            n2 = toInteger(n2);
            return function() {
              if (--n2 < 1) {
                return func.apply(this, arguments);
              }
            };
          }
          function ary(func, n2, guard) {
            n2 = guard ? undefined2 : n2;
            n2 = func && n2 == null ? func.length : n2;
            return createWrap(func, WRAP_ARY_FLAG, undefined2, undefined2, undefined2, undefined2, n2);
          }
          function before(n2, func) {
            var result2;
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            n2 = toInteger(n2);
            return function() {
              if (--n2 > 0) {
                result2 = func.apply(this, arguments);
              }
              if (n2 <= 1) {
                func = undefined2;
              }
              return result2;
            };
          }
          var bind = baseRest(function(func, thisArg, partials) {
            var bitmask = WRAP_BIND_FLAG;
            if (partials.length) {
              var holders = replaceHolders(partials, getHolder(bind));
              bitmask |= WRAP_PARTIAL_FLAG;
            }
            return createWrap(func, bitmask, thisArg, partials, holders);
          });
          var bindKey = baseRest(function(object, key, partials) {
            var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
            if (partials.length) {
              var holders = replaceHolders(partials, getHolder(bindKey));
              bitmask |= WRAP_PARTIAL_FLAG;
            }
            return createWrap(key, bitmask, object, partials, holders);
          });
          function curry(func, arity, guard) {
            arity = guard ? undefined2 : arity;
            var result2 = createWrap(func, WRAP_CURRY_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
            result2.placeholder = curry.placeholder;
            return result2;
          }
          function curryRight(func, arity, guard) {
            arity = guard ? undefined2 : arity;
            var result2 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
            result2.placeholder = curryRight.placeholder;
            return result2;
          }
          function debounce(func, wait, options) {
            var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            wait = toNumber(wait) || 0;
            if (isObject(options)) {
              leading = !!options.leading;
              maxing = "maxWait" in options;
              maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
              trailing = "trailing" in options ? !!options.trailing : trailing;
            }
            function invokeFunc(time) {
              var args = lastArgs, thisArg = lastThis;
              lastArgs = lastThis = undefined2;
              lastInvokeTime = time;
              result2 = func.apply(thisArg, args);
              return result2;
            }
            function leadingEdge(time) {
              lastInvokeTime = time;
              timerId = setTimeout2(timerExpired, wait);
              return leading ? invokeFunc(time) : result2;
            }
            function remainingWait(time) {
              var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
              return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
            }
            function shouldInvoke(time) {
              var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
              return lastCallTime === undefined2 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
            }
            function timerExpired() {
              var time = now();
              if (shouldInvoke(time)) {
                return trailingEdge(time);
              }
              timerId = setTimeout2(timerExpired, remainingWait(time));
            }
            function trailingEdge(time) {
              timerId = undefined2;
              if (trailing && lastArgs) {
                return invokeFunc(time);
              }
              lastArgs = lastThis = undefined2;
              return result2;
            }
            function cancel() {
              if (timerId !== undefined2) {
                clearTimeout(timerId);
              }
              lastInvokeTime = 0;
              lastArgs = lastCallTime = lastThis = timerId = undefined2;
            }
            function flush() {
              return timerId === undefined2 ? result2 : trailingEdge(now());
            }
            function debounced() {
              var time = now(), isInvoking = shouldInvoke(time);
              lastArgs = arguments;
              lastThis = this;
              lastCallTime = time;
              if (isInvoking) {
                if (timerId === undefined2) {
                  return leadingEdge(lastCallTime);
                }
                if (maxing) {
                  clearTimeout(timerId);
                  timerId = setTimeout2(timerExpired, wait);
                  return invokeFunc(lastCallTime);
                }
              }
              if (timerId === undefined2) {
                timerId = setTimeout2(timerExpired, wait);
              }
              return result2;
            }
            debounced.cancel = cancel;
            debounced.flush = flush;
            return debounced;
          }
          var defer = baseRest(function(func, args) {
            return baseDelay(func, 1, args);
          });
          var delay = baseRest(function(func, wait, args) {
            return baseDelay(func, toNumber(wait) || 0, args);
          });
          function flip(func) {
            return createWrap(func, WRAP_FLIP_FLAG);
          }
          function memoize(func, resolver) {
            if (typeof func != "function" || resolver != null && typeof resolver != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            var memoized = function() {
              var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
              if (cache.has(key)) {
                return cache.get(key);
              }
              var result2 = func.apply(this, args);
              memoized.cache = cache.set(key, result2) || cache;
              return result2;
            };
            memoized.cache = new (memoize.Cache || MapCache)();
            return memoized;
          }
          memoize.Cache = MapCache;
          function negate(predicate) {
            if (typeof predicate != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            return function() {
              var args = arguments;
              switch (args.length) {
                case 0:
                  return !predicate.call(this);
                case 1:
                  return !predicate.call(this, args[0]);
                case 2:
                  return !predicate.call(this, args[0], args[1]);
                case 3:
                  return !predicate.call(this, args[0], args[1], args[2]);
              }
              return !predicate.apply(this, args);
            };
          }
          function once(func) {
            return before(2, func);
          }
          var overArgs = castRest(function(func, transforms) {
            transforms = transforms.length == 1 && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
            var funcsLength = transforms.length;
            return baseRest(function(args) {
              var index = -1, length = nativeMin(args.length, funcsLength);
              while (++index < length) {
                args[index] = transforms[index].call(this, args[index]);
              }
              return apply(func, this, args);
            });
          });
          var partial = baseRest(function(func, partials) {
            var holders = replaceHolders(partials, getHolder(partial));
            return createWrap(func, WRAP_PARTIAL_FLAG, undefined2, partials, holders);
          });
          var partialRight = baseRest(function(func, partials) {
            var holders = replaceHolders(partials, getHolder(partialRight));
            return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined2, partials, holders);
          });
          var rearg = flatRest(function(func, indexes) {
            return createWrap(func, WRAP_REARG_FLAG, undefined2, undefined2, undefined2, indexes);
          });
          function rest(func, start) {
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            start = start === undefined2 ? start : toInteger(start);
            return baseRest(func, start);
          }
          function spread(func, start) {
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            start = start == null ? 0 : nativeMax(toInteger(start), 0);
            return baseRest(function(args) {
              var array = args[start], otherArgs = castSlice(args, 0, start);
              if (array) {
                arrayPush(otherArgs, array);
              }
              return apply(func, this, otherArgs);
            });
          }
          function throttle(func, wait, options) {
            var leading = true, trailing = true;
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            if (isObject(options)) {
              leading = "leading" in options ? !!options.leading : leading;
              trailing = "trailing" in options ? !!options.trailing : trailing;
            }
            return debounce(func, wait, {
              "leading": leading,
              "maxWait": wait,
              "trailing": trailing
            });
          }
          function unary(func) {
            return ary(func, 1);
          }
          function wrap(value, wrapper) {
            return partial(castFunction(wrapper), value);
          }
          function castArray() {
            if (!arguments.length) {
              return [];
            }
            var value = arguments[0];
            return isArray(value) ? value : [value];
          }
          function clone(value) {
            return baseClone(value, CLONE_SYMBOLS_FLAG);
          }
          function cloneWith(value, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined2;
            return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
          }
          function cloneDeep(value) {
            return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
          }
          function cloneDeepWith(value, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined2;
            return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
          }
          function conformsTo(object, source) {
            return source == null || baseConformsTo(object, source, keys(source));
          }
          function eq(value, other) {
            return value === other || value !== value && other !== other;
          }
          var gt = createRelationalOperation(baseGt);
          var gte = createRelationalOperation(function(value, other) {
            return value >= other;
          });
          var isArguments = baseIsArguments(function() {
            return arguments;
          }()) ? baseIsArguments : function(value) {
            return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
          };
          var isArray = Array2.isArray;
          var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
          function isArrayLike(value) {
            return value != null && isLength(value.length) && !isFunction(value);
          }
          function isArrayLikeObject(value) {
            return isObjectLike(value) && isArrayLike(value);
          }
          function isBoolean(value) {
            return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
          }
          var isBuffer = nativeIsBuffer || stubFalse;
          var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
          function isElement(value) {
            return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
          }
          function isEmpty(value) {
            if (value == null) {
              return true;
            }
            if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
              return !value.length;
            }
            var tag = getTag(value);
            if (tag == mapTag || tag == setTag) {
              return !value.size;
            }
            if (isPrototype(value)) {
              return !baseKeys(value).length;
            }
            for (var key in value) {
              if (hasOwnProperty.call(value, key)) {
                return false;
              }
            }
            return true;
          }
          function isEqual(value, other) {
            return baseIsEqual(value, other);
          }
          function isEqualWith(value, other, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined2;
            var result2 = customizer ? customizer(value, other) : undefined2;
            return result2 === undefined2 ? baseIsEqual(value, other, undefined2, customizer) : !!result2;
          }
          function isError(value) {
            if (!isObjectLike(value)) {
              return false;
            }
            var tag = baseGetTag(value);
            return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
          }
          function isFinite(value) {
            return typeof value == "number" && nativeIsFinite(value);
          }
          function isFunction(value) {
            if (!isObject(value)) {
              return false;
            }
            var tag = baseGetTag(value);
            return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
          }
          function isInteger(value) {
            return typeof value == "number" && value == toInteger(value);
          }
          function isLength(value) {
            return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
          }
          function isObject(value) {
            var type = typeof value;
            return value != null && (type == "object" || type == "function");
          }
          function isObjectLike(value) {
            return value != null && typeof value == "object";
          }
          var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
          function isMatch(object, source) {
            return object === source || baseIsMatch(object, source, getMatchData(source));
          }
          function isMatchWith(object, source, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined2;
            return baseIsMatch(object, source, getMatchData(source), customizer);
          }
          function isNaN(value) {
            return isNumber(value) && value != +value;
          }
          function isNative(value) {
            if (isMaskable(value)) {
              throw new Error2(CORE_ERROR_TEXT);
            }
            return baseIsNative(value);
          }
          function isNull(value) {
            return value === null;
          }
          function isNil(value) {
            return value == null;
          }
          function isNumber(value) {
            return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
          }
          function isPlainObject(value) {
            if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
              return false;
            }
            var proto = getPrototype(value);
            if (proto === null) {
              return true;
            }
            var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
            return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
          }
          var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
          function isSafeInteger(value) {
            return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
          }
          var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
          function isString(value) {
            return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
          }
          function isSymbol(value) {
            return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
          }
          var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
          function isUndefined(value) {
            return value === undefined2;
          }
          function isWeakMap(value) {
            return isObjectLike(value) && getTag(value) == weakMapTag;
          }
          function isWeakSet(value) {
            return isObjectLike(value) && baseGetTag(value) == weakSetTag;
          }
          var lt = createRelationalOperation(baseLt);
          var lte = createRelationalOperation(function(value, other) {
            return value <= other;
          });
          function toArray(value) {
            if (!value) {
              return [];
            }
            if (isArrayLike(value)) {
              return isString(value) ? stringToArray(value) : copyArray(value);
            }
            if (symIterator && value[symIterator]) {
              return iteratorToArray(value[symIterator]());
            }
            var tag = getTag(value), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
            return func(value);
          }
          function toFinite(value) {
            if (!value) {
              return value === 0 ? value : 0;
            }
            value = toNumber(value);
            if (value === INFINITY || value === -INFINITY) {
              var sign = value < 0 ? -1 : 1;
              return sign * MAX_INTEGER;
            }
            return value === value ? value : 0;
          }
          function toInteger(value) {
            var result2 = toFinite(value), remainder = result2 % 1;
            return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
          }
          function toLength(value) {
            return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
          }
          function toNumber(value) {
            if (typeof value == "number") {
              return value;
            }
            if (isSymbol(value)) {
              return NAN;
            }
            if (isObject(value)) {
              var other = typeof value.valueOf == "function" ? value.valueOf() : value;
              value = isObject(other) ? other + "" : other;
            }
            if (typeof value != "string") {
              return value === 0 ? value : +value;
            }
            value = baseTrim(value);
            var isBinary = reIsBinary.test(value);
            return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
          }
          function toPlainObject(value) {
            return copyObject(value, keysIn(value));
          }
          function toSafeInteger(value) {
            return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
          }
          function toString(value) {
            return value == null ? "" : baseToString(value);
          }
          var assign = createAssigner(function(object, source) {
            if (isPrototype(source) || isArrayLike(source)) {
              copyObject(source, keys(source), object);
              return;
            }
            for (var key in source) {
              if (hasOwnProperty.call(source, key)) {
                assignValue(object, key, source[key]);
              }
            }
          });
          var assignIn = createAssigner(function(object, source) {
            copyObject(source, keysIn(source), object);
          });
          var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
            copyObject(source, keysIn(source), object, customizer);
          });
          var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
            copyObject(source, keys(source), object, customizer);
          });
          var at = flatRest(baseAt);
          function create(prototype, properties) {
            var result2 = baseCreate(prototype);
            return properties == null ? result2 : baseAssign(result2, properties);
          }
          var defaults = baseRest(function(object, sources) {
            object = Object2(object);
            var index = -1;
            var length = sources.length;
            var guard = length > 2 ? sources[2] : undefined2;
            if (guard && isIterateeCall(sources[0], sources[1], guard)) {
              length = 1;
            }
            while (++index < length) {
              var source = sources[index];
              var props = keysIn(source);
              var propsIndex = -1;
              var propsLength = props.length;
              while (++propsIndex < propsLength) {
                var key = props[propsIndex];
                var value = object[key];
                if (value === undefined2 || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
                  object[key] = source[key];
                }
              }
            }
            return object;
          });
          var defaultsDeep = baseRest(function(args) {
            args.push(undefined2, customDefaultsMerge);
            return apply(mergeWith, undefined2, args);
          });
          function findKey(object, predicate) {
            return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
          }
          function findLastKey(object, predicate) {
            return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
          }
          function forIn(object, iteratee2) {
            return object == null ? object : baseFor(object, getIteratee(iteratee2, 3), keysIn);
          }
          function forInRight(object, iteratee2) {
            return object == null ? object : baseForRight(object, getIteratee(iteratee2, 3), keysIn);
          }
          function forOwn(object, iteratee2) {
            return object && baseForOwn(object, getIteratee(iteratee2, 3));
          }
          function forOwnRight(object, iteratee2) {
            return object && baseForOwnRight(object, getIteratee(iteratee2, 3));
          }
          function functions(object) {
            return object == null ? [] : baseFunctions(object, keys(object));
          }
          function functionsIn(object) {
            return object == null ? [] : baseFunctions(object, keysIn(object));
          }
          function get(object, path, defaultValue) {
            var result2 = object == null ? undefined2 : baseGet(object, path);
            return result2 === undefined2 ? defaultValue : result2;
          }
          function has(object, path) {
            return object != null && hasPath(object, path, baseHas);
          }
          function hasIn(object, path) {
            return object != null && hasPath(object, path, baseHasIn);
          }
          var invert = createInverter(function(result2, value, key) {
            if (value != null && typeof value.toString != "function") {
              value = nativeObjectToString.call(value);
            }
            result2[value] = key;
          }, constant(identity));
          var invertBy = createInverter(function(result2, value, key) {
            if (value != null && typeof value.toString != "function") {
              value = nativeObjectToString.call(value);
            }
            if (hasOwnProperty.call(result2, value)) {
              result2[value].push(key);
            } else {
              result2[value] = [key];
            }
          }, getIteratee);
          var invoke = baseRest(baseInvoke);
          function keys(object) {
            return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
          }
          function keysIn(object) {
            return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
          }
          function mapKeys(object, iteratee2) {
            var result2 = {};
            iteratee2 = getIteratee(iteratee2, 3);
            baseForOwn(object, function(value, key, object2) {
              baseAssignValue(result2, iteratee2(value, key, object2), value);
            });
            return result2;
          }
          function mapValues(object, iteratee2) {
            var result2 = {};
            iteratee2 = getIteratee(iteratee2, 3);
            baseForOwn(object, function(value, key, object2) {
              baseAssignValue(result2, key, iteratee2(value, key, object2));
            });
            return result2;
          }
          var merge = createAssigner(function(object, source, srcIndex) {
            baseMerge(object, source, srcIndex);
          });
          var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
            baseMerge(object, source, srcIndex, customizer);
          });
          var omit = flatRest(function(object, paths) {
            var result2 = {};
            if (object == null) {
              return result2;
            }
            var isDeep = false;
            paths = arrayMap(paths, function(path) {
              path = castPath(path, object);
              isDeep || (isDeep = path.length > 1);
              return path;
            });
            copyObject(object, getAllKeysIn(object), result2);
            if (isDeep) {
              result2 = baseClone(result2, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
            }
            var length = paths.length;
            while (length--) {
              baseUnset(result2, paths[length]);
            }
            return result2;
          });
          function omitBy(object, predicate) {
            return pickBy(object, negate(getIteratee(predicate)));
          }
          var pick = flatRest(function(object, paths) {
            return object == null ? {} : basePick(object, paths);
          });
          function pickBy(object, predicate) {
            if (object == null) {
              return {};
            }
            var props = arrayMap(getAllKeysIn(object), function(prop) {
              return [prop];
            });
            predicate = getIteratee(predicate);
            return basePickBy(object, props, function(value, path) {
              return predicate(value, path[0]);
            });
          }
          function result(object, path, defaultValue) {
            path = castPath(path, object);
            var index = -1, length = path.length;
            if (!length) {
              length = 1;
              object = undefined2;
            }
            while (++index < length) {
              var value = object == null ? undefined2 : object[toKey(path[index])];
              if (value === undefined2) {
                index = length;
                value = defaultValue;
              }
              object = isFunction(value) ? value.call(object) : value;
            }
            return object;
          }
          function set(object, path, value) {
            return object == null ? object : baseSet(object, path, value);
          }
          function setWith(object, path, value, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined2;
            return object == null ? object : baseSet(object, path, value, customizer);
          }
          var toPairs = createToPairs(keys);
          var toPairsIn = createToPairs(keysIn);
          function transform(object, iteratee2, accumulator) {
            var isArr = isArray(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
            iteratee2 = getIteratee(iteratee2, 4);
            if (accumulator == null) {
              var Ctor = object && object.constructor;
              if (isArrLike) {
                accumulator = isArr ? new Ctor() : [];
              } else if (isObject(object)) {
                accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
              } else {
                accumulator = {};
              }
            }
            (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object2) {
              return iteratee2(accumulator, value, index, object2);
            });
            return accumulator;
          }
          function unset(object, path) {
            return object == null ? true : baseUnset(object, path);
          }
          function update(object, path, updater) {
            return object == null ? object : baseUpdate(object, path, castFunction(updater));
          }
          function updateWith(object, path, updater, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined2;
            return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
          }
          function values(object) {
            return object == null ? [] : baseValues(object, keys(object));
          }
          function valuesIn(object) {
            return object == null ? [] : baseValues(object, keysIn(object));
          }
          function clamp(number, lower, upper) {
            if (upper === undefined2) {
              upper = lower;
              lower = undefined2;
            }
            if (upper !== undefined2) {
              upper = toNumber(upper);
              upper = upper === upper ? upper : 0;
            }
            if (lower !== undefined2) {
              lower = toNumber(lower);
              lower = lower === lower ? lower : 0;
            }
            return baseClamp(toNumber(number), lower, upper);
          }
          function inRange(number, start, end) {
            start = toFinite(start);
            if (end === undefined2) {
              end = start;
              start = 0;
            } else {
              end = toFinite(end);
            }
            number = toNumber(number);
            return baseInRange(number, start, end);
          }
          function random(lower, upper, floating) {
            if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {
              upper = floating = undefined2;
            }
            if (floating === undefined2) {
              if (typeof upper == "boolean") {
                floating = upper;
                upper = undefined2;
              } else if (typeof lower == "boolean") {
                floating = lower;
                lower = undefined2;
              }
            }
            if (lower === undefined2 && upper === undefined2) {
              lower = 0;
              upper = 1;
            } else {
              lower = toFinite(lower);
              if (upper === undefined2) {
                upper = lower;
                lower = 0;
              } else {
                upper = toFinite(upper);
              }
            }
            if (lower > upper) {
              var temp = lower;
              lower = upper;
              upper = temp;
            }
            if (floating || lower % 1 || upper % 1) {
              var rand = nativeRandom();
              return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
            }
            return baseRandom(lower, upper);
          }
          var camelCase = createCompounder(function(result2, word, index) {
            word = word.toLowerCase();
            return result2 + (index ? capitalize(word) : word);
          });
          function capitalize(string) {
            return upperFirst(toString(string).toLowerCase());
          }
          function deburr(string) {
            string = toString(string);
            return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
          }
          function endsWith(string, target, position) {
            string = toString(string);
            target = baseToString(target);
            var length = string.length;
            position = position === undefined2 ? length : baseClamp(toInteger(position), 0, length);
            var end = position;
            position -= target.length;
            return position >= 0 && string.slice(position, end) == target;
          }
          function escape(string) {
            string = toString(string);
            return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
          }
          function escapeRegExp(string) {
            string = toString(string);
            return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;
          }
          var kebabCase = createCompounder(function(result2, word, index) {
            return result2 + (index ? "-" : "") + word.toLowerCase();
          });
          var lowerCase = createCompounder(function(result2, word, index) {
            return result2 + (index ? " " : "") + word.toLowerCase();
          });
          var lowerFirst = createCaseFirst("toLowerCase");
          function pad(string, length, chars) {
            string = toString(string);
            length = toInteger(length);
            var strLength = length ? stringSize(string) : 0;
            if (!length || strLength >= length) {
              return string;
            }
            var mid = (length - strLength) / 2;
            return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
          }
          function padEnd(string, length, chars) {
            string = toString(string);
            length = toInteger(length);
            var strLength = length ? stringSize(string) : 0;
            return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
          }
          function padStart(string, length, chars) {
            string = toString(string);
            length = toInteger(length);
            var strLength = length ? stringSize(string) : 0;
            return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
          }
          function parseInt2(string, radix, guard) {
            if (guard || radix == null) {
              radix = 0;
            } else if (radix) {
              radix = +radix;
            }
            return nativeParseInt(toString(string).replace(reTrimStart, ""), radix || 0);
          }
          function repeat(string, n2, guard) {
            if (guard ? isIterateeCall(string, n2, guard) : n2 === undefined2) {
              n2 = 1;
            } else {
              n2 = toInteger(n2);
            }
            return baseRepeat(toString(string), n2);
          }
          function replace() {
            var args = arguments, string = toString(args[0]);
            return args.length < 3 ? string : string.replace(args[1], args[2]);
          }
          var snakeCase = createCompounder(function(result2, word, index) {
            return result2 + (index ? "_" : "") + word.toLowerCase();
          });
          function split(string, separator, limit) {
            if (limit && typeof limit != "number" && isIterateeCall(string, separator, limit)) {
              separator = limit = undefined2;
            }
            limit = limit === undefined2 ? MAX_ARRAY_LENGTH : limit >>> 0;
            if (!limit) {
              return [];
            }
            string = toString(string);
            if (string && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
              separator = baseToString(separator);
              if (!separator && hasUnicode(string)) {
                return castSlice(stringToArray(string), 0, limit);
              }
            }
            return string.split(separator, limit);
          }
          var startCase = createCompounder(function(result2, word, index) {
            return result2 + (index ? " " : "") + upperFirst(word);
          });
          function startsWith(string, target, position) {
            string = toString(string);
            position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);
            target = baseToString(target);
            return string.slice(position, position + target.length) == target;
          }
          function template(string, options, guard) {
            var settings = lodash.templateSettings;
            if (guard && isIterateeCall(string, options, guard)) {
              options = undefined2;
            }
            string = toString(string);
            options = assignInWith({}, options, settings, customDefaultsAssignIn);
            var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
            var isEscaping, isEvaluating, index = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
            var reDelimiters = RegExp2((options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$", "g");
            var sourceURL = "//# sourceURL=" + (hasOwnProperty.call(options, "sourceURL") ? (options.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
            string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
              interpolateValue || (interpolateValue = esTemplateValue);
              source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
              if (escapeValue) {
                isEscaping = true;
                source += "' +\n__e(" + escapeValue + ") +\n'";
              }
              if (evaluateValue) {
                isEvaluating = true;
                source += "';\n" + evaluateValue + ";\n__p += '";
              }
              if (interpolateValue) {
                source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
              }
              index = offset + match.length;
              return match;
            });
            source += "';\n";
            var variable = hasOwnProperty.call(options, "variable") && options.variable;
            if (!variable) {
              source = "with (obj) {\n" + source + "\n}\n";
            } else if (reForbiddenIdentifierChars.test(variable)) {
              throw new Error2(INVALID_TEMPL_VAR_ERROR_TEXT);
            }
            source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
            source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
            var result2 = attempt(function() {
              return Function2(importsKeys, sourceURL + "return " + source).apply(undefined2, importsValues);
            });
            result2.source = source;
            if (isError(result2)) {
              throw result2;
            }
            return result2;
          }
          function toLower(value) {
            return toString(value).toLowerCase();
          }
          function toUpper(value) {
            return toString(value).toUpperCase();
          }
          function trim(string, chars, guard) {
            string = toString(string);
            if (string && (guard || chars === undefined2)) {
              return baseTrim(string);
            }
            if (!string || !(chars = baseToString(chars))) {
              return string;
            }
            var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
            return castSlice(strSymbols, start, end).join("");
          }
          function trimEnd(string, chars, guard) {
            string = toString(string);
            if (string && (guard || chars === undefined2)) {
              return string.slice(0, trimmedEndIndex(string) + 1);
            }
            if (!string || !(chars = baseToString(chars))) {
              return string;
            }
            var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
            return castSlice(strSymbols, 0, end).join("");
          }
          function trimStart(string, chars, guard) {
            string = toString(string);
            if (string && (guard || chars === undefined2)) {
              return string.replace(reTrimStart, "");
            }
            if (!string || !(chars = baseToString(chars))) {
              return string;
            }
            var strSymbols = stringToArray(string), start = charsStartIndex(strSymbols, stringToArray(chars));
            return castSlice(strSymbols, start).join("");
          }
          function truncate(string, options) {
            var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
            if (isObject(options)) {
              var separator = "separator" in options ? options.separator : separator;
              length = "length" in options ? toInteger(options.length) : length;
              omission = "omission" in options ? baseToString(options.omission) : omission;
            }
            string = toString(string);
            var strLength = string.length;
            if (hasUnicode(string)) {
              var strSymbols = stringToArray(string);
              strLength = strSymbols.length;
            }
            if (length >= strLength) {
              return string;
            }
            var end = length - stringSize(omission);
            if (end < 1) {
              return omission;
            }
            var result2 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
            if (separator === undefined2) {
              return result2 + omission;
            }
            if (strSymbols) {
              end += result2.length - end;
            }
            if (isRegExp(separator)) {
              if (string.slice(end).search(separator)) {
                var match, substring = result2;
                if (!separator.global) {
                  separator = RegExp2(separator.source, toString(reFlags.exec(separator)) + "g");
                }
                separator.lastIndex = 0;
                while (match = separator.exec(substring)) {
                  var newEnd = match.index;
                }
                result2 = result2.slice(0, newEnd === undefined2 ? end : newEnd);
              }
            } else if (string.indexOf(baseToString(separator), end) != end) {
              var index = result2.lastIndexOf(separator);
              if (index > -1) {
                result2 = result2.slice(0, index);
              }
            }
            return result2 + omission;
          }
          function unescape2(string) {
            string = toString(string);
            return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
          }
          var upperCase = createCompounder(function(result2, word, index) {
            return result2 + (index ? " " : "") + word.toUpperCase();
          });
          var upperFirst = createCaseFirst("toUpperCase");
          function words(string, pattern, guard) {
            string = toString(string);
            pattern = guard ? undefined2 : pattern;
            if (pattern === undefined2) {
              return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
            }
            return string.match(pattern) || [];
          }
          var attempt = baseRest(function(func, args) {
            try {
              return apply(func, undefined2, args);
            } catch (e2) {
              return isError(e2) ? e2 : new Error2(e2);
            }
          });
          var bindAll = flatRest(function(object, methodNames) {
            arrayEach(methodNames, function(key) {
              key = toKey(key);
              baseAssignValue(object, key, bind(object[key], object));
            });
            return object;
          });
          function cond(pairs) {
            var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
            pairs = !length ? [] : arrayMap(pairs, function(pair) {
              if (typeof pair[1] != "function") {
                throw new TypeError2(FUNC_ERROR_TEXT);
              }
              return [toIteratee(pair[0]), pair[1]];
            });
            return baseRest(function(args) {
              var index = -1;
              while (++index < length) {
                var pair = pairs[index];
                if (apply(pair[0], this, args)) {
                  return apply(pair[1], this, args);
                }
              }
            });
          }
          function conforms(source) {
            return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
          }
          function constant(value) {
            return function() {
              return value;
            };
          }
          function defaultTo(value, defaultValue) {
            return value == null || value !== value ? defaultValue : value;
          }
          var flow = createFlow();
          var flowRight = createFlow(true);
          function identity(value) {
            return value;
          }
          function iteratee(func) {
            return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
          }
          function matches(source) {
            return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
          }
          function matchesProperty(path, srcValue) {
            return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
          }
          var method = baseRest(function(path, args) {
            return function(object) {
              return baseInvoke(object, path, args);
            };
          });
          var methodOf = baseRest(function(object, args) {
            return function(path) {
              return baseInvoke(object, path, args);
            };
          });
          function mixin(object, source, options) {
            var props = keys(source), methodNames = baseFunctions(source, props);
            if (options == null && !(isObject(source) && (methodNames.length || !props.length))) {
              options = source;
              source = object;
              object = this;
              methodNames = baseFunctions(source, keys(source));
            }
            var chain2 = !(isObject(options) && "chain" in options) || !!options.chain, isFunc = isFunction(object);
            arrayEach(methodNames, function(methodName) {
              var func = source[methodName];
              object[methodName] = func;
              if (isFunc) {
                object.prototype[methodName] = function() {
                  var chainAll = this.__chain__;
                  if (chain2 || chainAll) {
                    var result2 = object(this.__wrapped__), actions = result2.__actions__ = copyArray(this.__actions__);
                    actions.push({ "func": func, "args": arguments, "thisArg": object });
                    result2.__chain__ = chainAll;
                    return result2;
                  }
                  return func.apply(object, arrayPush([this.value()], arguments));
                };
              }
            });
            return object;
          }
          function noConflict() {
            if (root._ === this) {
              root._ = oldDash;
            }
            return this;
          }
          function noop() {
          }
          function nthArg(n2) {
            n2 = toInteger(n2);
            return baseRest(function(args) {
              return baseNth(args, n2);
            });
          }
          var over = createOver(arrayMap);
          var overEvery = createOver(arrayEvery);
          var overSome = createOver(arraySome);
          function property(path) {
            return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
          }
          function propertyOf(object) {
            return function(path) {
              return object == null ? undefined2 : baseGet(object, path);
            };
          }
          var range = createRange();
          var rangeRight = createRange(true);
          function stubArray() {
            return [];
          }
          function stubFalse() {
            return false;
          }
          function stubObject() {
            return {};
          }
          function stubString() {
            return "";
          }
          function stubTrue() {
            return true;
          }
          function times(n2, iteratee2) {
            n2 = toInteger(n2);
            if (n2 < 1 || n2 > MAX_SAFE_INTEGER) {
              return [];
            }
            var index = MAX_ARRAY_LENGTH, length = nativeMin(n2, MAX_ARRAY_LENGTH);
            iteratee2 = getIteratee(iteratee2);
            n2 -= MAX_ARRAY_LENGTH;
            var result2 = baseTimes(length, iteratee2);
            while (++index < n2) {
              iteratee2(index);
            }
            return result2;
          }
          function toPath(value) {
            if (isArray(value)) {
              return arrayMap(value, toKey);
            }
            return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
          }
          function uniqueId(prefix) {
            var id = ++idCounter;
            return toString(prefix) + id;
          }
          var add = createMathOperation(function(augend, addend) {
            return augend + addend;
          }, 0);
          var ceil = createRound("ceil");
          var divide = createMathOperation(function(dividend, divisor) {
            return dividend / divisor;
          }, 1);
          var floor = createRound("floor");
          function max(array) {
            return array && array.length ? baseExtremum(array, identity, baseGt) : undefined2;
          }
          function maxBy(array, iteratee2) {
            return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseGt) : undefined2;
          }
          function mean(array) {
            return baseMean(array, identity);
          }
          function meanBy(array, iteratee2) {
            return baseMean(array, getIteratee(iteratee2, 2));
          }
          function min(array) {
            return array && array.length ? baseExtremum(array, identity, baseLt) : undefined2;
          }
          function minBy(array, iteratee2) {
            return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseLt) : undefined2;
          }
          var multiply = createMathOperation(function(multiplier, multiplicand) {
            return multiplier * multiplicand;
          }, 1);
          var round = createRound("round");
          var subtract = createMathOperation(function(minuend, subtrahend) {
            return minuend - subtrahend;
          }, 0);
          function sum(array) {
            return array && array.length ? baseSum(array, identity) : 0;
          }
          function sumBy(array, iteratee2) {
            return array && array.length ? baseSum(array, getIteratee(iteratee2, 2)) : 0;
          }
          lodash.after = after;
          lodash.ary = ary;
          lodash.assign = assign;
          lodash.assignIn = assignIn;
          lodash.assignInWith = assignInWith;
          lodash.assignWith = assignWith;
          lodash.at = at;
          lodash.before = before;
          lodash.bind = bind;
          lodash.bindAll = bindAll;
          lodash.bindKey = bindKey;
          lodash.castArray = castArray;
          lodash.chain = chain;
          lodash.chunk = chunk;
          lodash.compact = compact;
          lodash.concat = concat;
          lodash.cond = cond;
          lodash.conforms = conforms;
          lodash.constant = constant;
          lodash.countBy = countBy;
          lodash.create = create;
          lodash.curry = curry;
          lodash.curryRight = curryRight;
          lodash.debounce = debounce;
          lodash.defaults = defaults;
          lodash.defaultsDeep = defaultsDeep;
          lodash.defer = defer;
          lodash.delay = delay;
          lodash.difference = difference;
          lodash.differenceBy = differenceBy;
          lodash.differenceWith = differenceWith;
          lodash.drop = drop;
          lodash.dropRight = dropRight;
          lodash.dropRightWhile = dropRightWhile;
          lodash.dropWhile = dropWhile;
          lodash.fill = fill;
          lodash.filter = filter;
          lodash.flatMap = flatMap;
          lodash.flatMapDeep = flatMapDeep;
          lodash.flatMapDepth = flatMapDepth;
          lodash.flatten = flatten;
          lodash.flattenDeep = flattenDeep;
          lodash.flattenDepth = flattenDepth;
          lodash.flip = flip;
          lodash.flow = flow;
          lodash.flowRight = flowRight;
          lodash.fromPairs = fromPairs;
          lodash.functions = functions;
          lodash.functionsIn = functionsIn;
          lodash.groupBy = groupBy;
          lodash.initial = initial;
          lodash.intersection = intersection;
          lodash.intersectionBy = intersectionBy;
          lodash.intersectionWith = intersectionWith;
          lodash.invert = invert;
          lodash.invertBy = invertBy;
          lodash.invokeMap = invokeMap;
          lodash.iteratee = iteratee;
          lodash.keyBy = keyBy;
          lodash.keys = keys;
          lodash.keysIn = keysIn;
          lodash.map = map;
          lodash.mapKeys = mapKeys;
          lodash.mapValues = mapValues;
          lodash.matches = matches;
          lodash.matchesProperty = matchesProperty;
          lodash.memoize = memoize;
          lodash.merge = merge;
          lodash.mergeWith = mergeWith;
          lodash.method = method;
          lodash.methodOf = methodOf;
          lodash.mixin = mixin;
          lodash.negate = negate;
          lodash.nthArg = nthArg;
          lodash.omit = omit;
          lodash.omitBy = omitBy;
          lodash.once = once;
          lodash.orderBy = orderBy;
          lodash.over = over;
          lodash.overArgs = overArgs;
          lodash.overEvery = overEvery;
          lodash.overSome = overSome;
          lodash.partial = partial;
          lodash.partialRight = partialRight;
          lodash.partition = partition;
          lodash.pick = pick;
          lodash.pickBy = pickBy;
          lodash.property = property;
          lodash.propertyOf = propertyOf;
          lodash.pull = pull;
          lodash.pullAll = pullAll;
          lodash.pullAllBy = pullAllBy;
          lodash.pullAllWith = pullAllWith;
          lodash.pullAt = pullAt;
          lodash.range = range;
          lodash.rangeRight = rangeRight;
          lodash.rearg = rearg;
          lodash.reject = reject;
          lodash.remove = remove;
          lodash.rest = rest;
          lodash.reverse = reverse;
          lodash.sampleSize = sampleSize;
          lodash.set = set;
          lodash.setWith = setWith;
          lodash.shuffle = shuffle;
          lodash.slice = slice;
          lodash.sortBy = sortBy;
          lodash.sortedUniq = sortedUniq;
          lodash.sortedUniqBy = sortedUniqBy;
          lodash.split = split;
          lodash.spread = spread;
          lodash.tail = tail;
          lodash.take = take;
          lodash.takeRight = takeRight;
          lodash.takeRightWhile = takeRightWhile;
          lodash.takeWhile = takeWhile;
          lodash.tap = tap;
          lodash.throttle = throttle;
          lodash.thru = thru;
          lodash.toArray = toArray;
          lodash.toPairs = toPairs;
          lodash.toPairsIn = toPairsIn;
          lodash.toPath = toPath;
          lodash.toPlainObject = toPlainObject;
          lodash.transform = transform;
          lodash.unary = unary;
          lodash.union = union;
          lodash.unionBy = unionBy;
          lodash.unionWith = unionWith;
          lodash.uniq = uniq;
          lodash.uniqBy = uniqBy;
          lodash.uniqWith = uniqWith;
          lodash.unset = unset;
          lodash.unzip = unzip;
          lodash.unzipWith = unzipWith;
          lodash.update = update;
          lodash.updateWith = updateWith;
          lodash.values = values;
          lodash.valuesIn = valuesIn;
          lodash.without = without;
          lodash.words = words;
          lodash.wrap = wrap;
          lodash.xor = xor;
          lodash.xorBy = xorBy;
          lodash.xorWith = xorWith;
          lodash.zip = zip;
          lodash.zipObject = zipObject;
          lodash.zipObjectDeep = zipObjectDeep;
          lodash.zipWith = zipWith;
          lodash.entries = toPairs;
          lodash.entriesIn = toPairsIn;
          lodash.extend = assignIn;
          lodash.extendWith = assignInWith;
          mixin(lodash, lodash);
          lodash.add = add;
          lodash.attempt = attempt;
          lodash.camelCase = camelCase;
          lodash.capitalize = capitalize;
          lodash.ceil = ceil;
          lodash.clamp = clamp;
          lodash.clone = clone;
          lodash.cloneDeep = cloneDeep;
          lodash.cloneDeepWith = cloneDeepWith;
          lodash.cloneWith = cloneWith;
          lodash.conformsTo = conformsTo;
          lodash.deburr = deburr;
          lodash.defaultTo = defaultTo;
          lodash.divide = divide;
          lodash.endsWith = endsWith;
          lodash.eq = eq;
          lodash.escape = escape;
          lodash.escapeRegExp = escapeRegExp;
          lodash.every = every;
          lodash.find = find;
          lodash.findIndex = findIndex;
          lodash.findKey = findKey;
          lodash.findLast = findLast;
          lodash.findLastIndex = findLastIndex;
          lodash.findLastKey = findLastKey;
          lodash.floor = floor;
          lodash.forEach = forEach;
          lodash.forEachRight = forEachRight;
          lodash.forIn = forIn;
          lodash.forInRight = forInRight;
          lodash.forOwn = forOwn;
          lodash.forOwnRight = forOwnRight;
          lodash.get = get;
          lodash.gt = gt;
          lodash.gte = gte;
          lodash.has = has;
          lodash.hasIn = hasIn;
          lodash.head = head;
          lodash.identity = identity;
          lodash.includes = includes;
          lodash.indexOf = indexOf;
          lodash.inRange = inRange;
          lodash.invoke = invoke;
          lodash.isArguments = isArguments;
          lodash.isArray = isArray;
          lodash.isArrayBuffer = isArrayBuffer;
          lodash.isArrayLike = isArrayLike;
          lodash.isArrayLikeObject = isArrayLikeObject;
          lodash.isBoolean = isBoolean;
          lodash.isBuffer = isBuffer;
          lodash.isDate = isDate;
          lodash.isElement = isElement;
          lodash.isEmpty = isEmpty;
          lodash.isEqual = isEqual;
          lodash.isEqualWith = isEqualWith;
          lodash.isError = isError;
          lodash.isFinite = isFinite;
          lodash.isFunction = isFunction;
          lodash.isInteger = isInteger;
          lodash.isLength = isLength;
          lodash.isMap = isMap;
          lodash.isMatch = isMatch;
          lodash.isMatchWith = isMatchWith;
          lodash.isNaN = isNaN;
          lodash.isNative = isNative;
          lodash.isNil = isNil;
          lodash.isNull = isNull;
          lodash.isNumber = isNumber;
          lodash.isObject = isObject;
          lodash.isObjectLike = isObjectLike;
          lodash.isPlainObject = isPlainObject;
          lodash.isRegExp = isRegExp;
          lodash.isSafeInteger = isSafeInteger;
          lodash.isSet = isSet;
          lodash.isString = isString;
          lodash.isSymbol = isSymbol;
          lodash.isTypedArray = isTypedArray;
          lodash.isUndefined = isUndefined;
          lodash.isWeakMap = isWeakMap;
          lodash.isWeakSet = isWeakSet;
          lodash.join = join;
          lodash.kebabCase = kebabCase;
          lodash.last = last;
          lodash.lastIndexOf = lastIndexOf;
          lodash.lowerCase = lowerCase;
          lodash.lowerFirst = lowerFirst;
          lodash.lt = lt;
          lodash.lte = lte;
          lodash.max = max;
          lodash.maxBy = maxBy;
          lodash.mean = mean;
          lodash.meanBy = meanBy;
          lodash.min = min;
          lodash.minBy = minBy;
          lodash.stubArray = stubArray;
          lodash.stubFalse = stubFalse;
          lodash.stubObject = stubObject;
          lodash.stubString = stubString;
          lodash.stubTrue = stubTrue;
          lodash.multiply = multiply;
          lodash.nth = nth;
          lodash.noConflict = noConflict;
          lodash.noop = noop;
          lodash.now = now;
          lodash.pad = pad;
          lodash.padEnd = padEnd;
          lodash.padStart = padStart;
          lodash.parseInt = parseInt2;
          lodash.random = random;
          lodash.reduce = reduce;
          lodash.reduceRight = reduceRight;
          lodash.repeat = repeat;
          lodash.replace = replace;
          lodash.result = result;
          lodash.round = round;
          lodash.runInContext = runInContext2;
          lodash.sample = sample;
          lodash.size = size;
          lodash.snakeCase = snakeCase;
          lodash.some = some;
          lodash.sortedIndex = sortedIndex;
          lodash.sortedIndexBy = sortedIndexBy;
          lodash.sortedIndexOf = sortedIndexOf;
          lodash.sortedLastIndex = sortedLastIndex;
          lodash.sortedLastIndexBy = sortedLastIndexBy;
          lodash.sortedLastIndexOf = sortedLastIndexOf;
          lodash.startCase = startCase;
          lodash.startsWith = startsWith;
          lodash.subtract = subtract;
          lodash.sum = sum;
          lodash.sumBy = sumBy;
          lodash.template = template;
          lodash.times = times;
          lodash.toFinite = toFinite;
          lodash.toInteger = toInteger;
          lodash.toLength = toLength;
          lodash.toLower = toLower;
          lodash.toNumber = toNumber;
          lodash.toSafeInteger = toSafeInteger;
          lodash.toString = toString;
          lodash.toUpper = toUpper;
          lodash.trim = trim;
          lodash.trimEnd = trimEnd;
          lodash.trimStart = trimStart;
          lodash.truncate = truncate;
          lodash.unescape = unescape2;
          lodash.uniqueId = uniqueId;
          lodash.upperCase = upperCase;
          lodash.upperFirst = upperFirst;
          lodash.each = forEach;
          lodash.eachRight = forEachRight;
          lodash.first = head;
          mixin(lodash, function() {
            var source = {};
            baseForOwn(lodash, function(func, methodName) {
              if (!hasOwnProperty.call(lodash.prototype, methodName)) {
                source[methodName] = func;
              }
            });
            return source;
          }(), { "chain": false });
          lodash.VERSION = VERSION;
          arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
            lodash[methodName].placeholder = lodash;
          });
          arrayEach(["drop", "take"], function(methodName, index) {
            LazyWrapper.prototype[methodName] = function(n2) {
              n2 = n2 === undefined2 ? 1 : nativeMax(toInteger(n2), 0);
              var result2 = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
              if (result2.__filtered__) {
                result2.__takeCount__ = nativeMin(n2, result2.__takeCount__);
              } else {
                result2.__views__.push({
                  "size": nativeMin(n2, MAX_ARRAY_LENGTH),
                  "type": methodName + (result2.__dir__ < 0 ? "Right" : "")
                });
              }
              return result2;
            };
            LazyWrapper.prototype[methodName + "Right"] = function(n2) {
              return this.reverse()[methodName](n2).reverse();
            };
          });
          arrayEach(["filter", "map", "takeWhile"], function(methodName, index) {
            var type = index + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
            LazyWrapper.prototype[methodName] = function(iteratee2) {
              var result2 = this.clone();
              result2.__iteratees__.push({
                "iteratee": getIteratee(iteratee2, 3),
                "type": type
              });
              result2.__filtered__ = result2.__filtered__ || isFilter;
              return result2;
            };
          });
          arrayEach(["head", "last"], function(methodName, index) {
            var takeName = "take" + (index ? "Right" : "");
            LazyWrapper.prototype[methodName] = function() {
              return this[takeName](1).value()[0];
            };
          });
          arrayEach(["initial", "tail"], function(methodName, index) {
            var dropName = "drop" + (index ? "" : "Right");
            LazyWrapper.prototype[methodName] = function() {
              return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
            };
          });
          LazyWrapper.prototype.compact = function() {
            return this.filter(identity);
          };
          LazyWrapper.prototype.find = function(predicate) {
            return this.filter(predicate).head();
          };
          LazyWrapper.prototype.findLast = function(predicate) {
            return this.reverse().find(predicate);
          };
          LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
            if (typeof path == "function") {
              return new LazyWrapper(this);
            }
            return this.map(function(value) {
              return baseInvoke(value, path, args);
            });
          });
          LazyWrapper.prototype.reject = function(predicate) {
            return this.filter(negate(getIteratee(predicate)));
          };
          LazyWrapper.prototype.slice = function(start, end) {
            start = toInteger(start);
            var result2 = this;
            if (result2.__filtered__ && (start > 0 || end < 0)) {
              return new LazyWrapper(result2);
            }
            if (start < 0) {
              result2 = result2.takeRight(-start);
            } else if (start) {
              result2 = result2.drop(start);
            }
            if (end !== undefined2) {
              end = toInteger(end);
              result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start);
            }
            return result2;
          };
          LazyWrapper.prototype.takeRightWhile = function(predicate) {
            return this.reverse().takeWhile(predicate).reverse();
          };
          LazyWrapper.prototype.toArray = function() {
            return this.take(MAX_ARRAY_LENGTH);
          };
          baseForOwn(LazyWrapper.prototype, function(func, methodName) {
            var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
            if (!lodashFunc) {
              return;
            }
            lodash.prototype[methodName] = function() {
              var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee2 = args[0], useLazy = isLazy || isArray(value);
              var interceptor = function(value2) {
                var result3 = lodashFunc.apply(lodash, arrayPush([value2], args));
                return isTaker && chainAll ? result3[0] : result3;
              };
              if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
                isLazy = useLazy = false;
              }
              var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
              if (!retUnwrapped && useLazy) {
                value = onlyLazy ? value : new LazyWrapper(this);
                var result2 = func.apply(value, args);
                result2.__actions__.push({ "func": thru, "args": [interceptor], "thisArg": undefined2 });
                return new LodashWrapper(result2, chainAll);
              }
              if (isUnwrapped && onlyLazy) {
                return func.apply(this, args);
              }
              result2 = this.thru(interceptor);
              return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
            };
          });
          arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
            var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
            lodash.prototype[methodName] = function() {
              var args = arguments;
              if (retUnwrapped && !this.__chain__) {
                var value = this.value();
                return func.apply(isArray(value) ? value : [], args);
              }
              return this[chainName](function(value2) {
                return func.apply(isArray(value2) ? value2 : [], args);
              });
            };
          });
          baseForOwn(LazyWrapper.prototype, function(func, methodName) {
            var lodashFunc = lodash[methodName];
            if (lodashFunc) {
              var key = lodashFunc.name + "";
              if (!hasOwnProperty.call(realNames, key)) {
                realNames[key] = [];
              }
              realNames[key].push({ "name": methodName, "func": lodashFunc });
            }
          });
          realNames[createHybrid(undefined2, WRAP_BIND_KEY_FLAG).name] = [{
            "name": "wrapper",
            "func": undefined2
          }];
          LazyWrapper.prototype.clone = lazyClone;
          LazyWrapper.prototype.reverse = lazyReverse;
          LazyWrapper.prototype.value = lazyValue;
          lodash.prototype.at = wrapperAt;
          lodash.prototype.chain = wrapperChain;
          lodash.prototype.commit = wrapperCommit;
          lodash.prototype.next = wrapperNext;
          lodash.prototype.plant = wrapperPlant;
          lodash.prototype.reverse = wrapperReverse;
          lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
          lodash.prototype.first = lodash.prototype.head;
          if (symIterator) {
            lodash.prototype[symIterator] = wrapperToIterator;
          }
          return lodash;
        };
        var _3 = runInContext();
        if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
          root._ = _3;
          define(function() {
            return _3;
          });
        } else if (freeModule) {
          (freeModule.exports = _3)._ = _3;
          freeExports._ = _3;
        } else {
          root._ = _3;
        }
      }).call(exports);
    }
  });

  // node_modules/entities/lib/maps/decode.json
  var require_decode = __commonJS({
    "node_modules/entities/lib/maps/decode.json"(exports, module) {
      module.exports = { "0": 65533, "128": 8364, "130": 8218, "131": 402, "132": 8222, "133": 8230, "134": 8224, "135": 8225, "136": 710, "137": 8240, "138": 352, "139": 8249, "140": 338, "142": 381, "145": 8216, "146": 8217, "147": 8220, "148": 8221, "149": 8226, "150": 8211, "151": 8212, "152": 732, "153": 8482, "154": 353, "155": 8250, "156": 339, "158": 382, "159": 376 };
    }
  });

  // node_modules/entities/lib/decode_codepoint.js
  var require_decode_codepoint = __commonJS({
    "node_modules/entities/lib/decode_codepoint.js"(exports) {
      init_preact_shim();
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var decode_json_1 = __importDefault(require_decode());
      var fromCodePoint = String.fromCodePoint || function(codePoint) {
        var output = "";
        if (codePoint > 65535) {
          codePoint -= 65536;
          output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296);
          codePoint = 56320 | codePoint & 1023;
        }
        output += String.fromCharCode(codePoint);
        return output;
      };
      function decodeCodePoint(codePoint) {
        if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) {
          return "\uFFFD";
        }
        if (codePoint in decode_json_1.default) {
          codePoint = decode_json_1.default[codePoint];
        }
        return fromCodePoint(codePoint);
      }
      exports.default = decodeCodePoint;
    }
  });

  // node_modules/entities/lib/maps/entities.json
  var require_entities = __commonJS({
    "node_modules/entities/lib/maps/entities.json"(exports, module) {
      module.exports = { Aacute: "\xC1", aacute: "\xE1", Abreve: "\u0102", abreve: "\u0103", ac: "\u223E", acd: "\u223F", acE: "\u223E\u0333", Acirc: "\xC2", acirc: "\xE2", acute: "\xB4", Acy: "\u0410", acy: "\u0430", AElig: "\xC6", aelig: "\xE6", af: "\u2061", Afr: "\u{1D504}", afr: "\u{1D51E}", Agrave: "\xC0", agrave: "\xE0", alefsym: "\u2135", aleph: "\u2135", Alpha: "\u0391", alpha: "\u03B1", Amacr: "\u0100", amacr: "\u0101", amalg: "\u2A3F", amp: "&", AMP: "&", andand: "\u2A55", And: "\u2A53", and: "\u2227", andd: "\u2A5C", andslope: "\u2A58", andv: "\u2A5A", ang: "\u2220", ange: "\u29A4", angle: "\u2220", angmsdaa: "\u29A8", angmsdab: "\u29A9", angmsdac: "\u29AA", angmsdad: "\u29AB", angmsdae: "\u29AC", angmsdaf: "\u29AD", angmsdag: "\u29AE", angmsdah: "\u29AF", angmsd: "\u2221", angrt: "\u221F", angrtvb: "\u22BE", angrtvbd: "\u299D", angsph: "\u2222", angst: "\xC5", angzarr: "\u237C", Aogon: "\u0104", aogon: "\u0105", Aopf: "\u{1D538}", aopf: "\u{1D552}", apacir: "\u2A6F", ap: "\u2248", apE: "\u2A70", ape: "\u224A", apid: "\u224B", apos: "'", ApplyFunction: "\u2061", approx: "\u2248", approxeq: "\u224A", Aring: "\xC5", aring: "\xE5", Ascr: "\u{1D49C}", ascr: "\u{1D4B6}", Assign: "\u2254", ast: "*", asymp: "\u2248", asympeq: "\u224D", Atilde: "\xC3", atilde: "\xE3", Auml: "\xC4", auml: "\xE4", awconint: "\u2233", awint: "\u2A11", backcong: "\u224C", backepsilon: "\u03F6", backprime: "\u2035", backsim: "\u223D", backsimeq: "\u22CD", Backslash: "\u2216", Barv: "\u2AE7", barvee: "\u22BD", barwed: "\u2305", Barwed: "\u2306", barwedge: "\u2305", bbrk: "\u23B5", bbrktbrk: "\u23B6", bcong: "\u224C", Bcy: "\u0411", bcy: "\u0431", bdquo: "\u201E", becaus: "\u2235", because: "\u2235", Because: "\u2235", bemptyv: "\u29B0", bepsi: "\u03F6", bernou: "\u212C", Bernoullis: "\u212C", Beta: "\u0392", beta: "\u03B2", beth: "\u2136", between: "\u226C", Bfr: "\u{1D505}", bfr: "\u{1D51F}", bigcap: "\u22C2", bigcirc: "\u25EF", bigcup: "\u22C3", bigodot: "\u2A00", bigoplus: "\u2A01", bigotimes: "\u2A02", bigsqcup: "\u2A06", bigstar: "\u2605", bigtriangledown: "\u25BD", bigtriangleup: "\u25B3", biguplus: "\u2A04", bigvee: "\u22C1", bigwedge: "\u22C0", bkarow: "\u290D", blacklozenge: "\u29EB", blacksquare: "\u25AA", blacktriangle: "\u25B4", blacktriangledown: "\u25BE", blacktriangleleft: "\u25C2", blacktriangleright: "\u25B8", blank: "\u2423", blk12: "\u2592", blk14: "\u2591", blk34: "\u2593", block: "\u2588", bne: "=\u20E5", bnequiv: "\u2261\u20E5", bNot: "\u2AED", bnot: "\u2310", Bopf: "\u{1D539}", bopf: "\u{1D553}", bot: "\u22A5", bottom: "\u22A5", bowtie: "\u22C8", boxbox: "\u29C9", boxdl: "\u2510", boxdL: "\u2555", boxDl: "\u2556", boxDL: "\u2557", boxdr: "\u250C", boxdR: "\u2552", boxDr: "\u2553", boxDR: "\u2554", boxh: "\u2500", boxH: "\u2550", boxhd: "\u252C", boxHd: "\u2564", boxhD: "\u2565", boxHD: "\u2566", boxhu: "\u2534", boxHu: "\u2567", boxhU: "\u2568", boxHU: "\u2569", boxminus: "\u229F", boxplus: "\u229E", boxtimes: "\u22A0", boxul: "\u2518", boxuL: "\u255B", boxUl: "\u255C", boxUL: "\u255D", boxur: "\u2514", boxuR: "\u2558", boxUr: "\u2559", boxUR: "\u255A", boxv: "\u2502", boxV: "\u2551", boxvh: "\u253C", boxvH: "\u256A", boxVh: "\u256B", boxVH: "\u256C", boxvl: "\u2524", boxvL: "\u2561", boxVl: "\u2562", boxVL: "\u2563", boxvr: "\u251C", boxvR: "\u255E", boxVr: "\u255F", boxVR: "\u2560", bprime: "\u2035", breve: "\u02D8", Breve: "\u02D8", brvbar: "\xA6", bscr: "\u{1D4B7}", Bscr: "\u212C", bsemi: "\u204F", bsim: "\u223D", bsime: "\u22CD", bsolb: "\u29C5", bsol: "\\", bsolhsub: "\u27C8", bull: "\u2022", bullet: "\u2022", bump: "\u224E", bumpE: "\u2AAE", bumpe: "\u224F", Bumpeq: "\u224E", bumpeq: "\u224F", Cacute: "\u0106", cacute: "\u0107", capand: "\u2A44", capbrcup: "\u2A49", capcap: "\u2A4B", cap: "\u2229", Cap: "\u22D2", capcup: "\u2A47", capdot: "\u2A40", CapitalDifferentialD: "\u2145", caps: "\u2229\uFE00", caret: "\u2041", caron: "\u02C7", Cayleys: "\u212D", ccaps: "\u2A4D", Ccaron: "\u010C", ccaron: "\u010D", Ccedil: "\xC7", ccedil: "\xE7", Ccirc: "\u0108", ccirc: "\u0109", Cconint: "\u2230", ccups: "\u2A4C", ccupssm: "\u2A50", Cdot: "\u010A", cdot: "\u010B", cedil: "\xB8", Cedilla: "\xB8", cemptyv: "\u29B2", cent: "\xA2", centerdot: "\xB7", CenterDot: "\xB7", cfr: "\u{1D520}", Cfr: "\u212D", CHcy: "\u0427", chcy: "\u0447", check: "\u2713", checkmark: "\u2713", Chi: "\u03A7", chi: "\u03C7", circ: "\u02C6", circeq: "\u2257", circlearrowleft: "\u21BA", circlearrowright: "\u21BB", circledast: "\u229B", circledcirc: "\u229A", circleddash: "\u229D", CircleDot: "\u2299", circledR: "\xAE", circledS: "\u24C8", CircleMinus: "\u2296", CirclePlus: "\u2295", CircleTimes: "\u2297", cir: "\u25CB", cirE: "\u29C3", cire: "\u2257", cirfnint: "\u2A10", cirmid: "\u2AEF", cirscir: "\u29C2", ClockwiseContourIntegral: "\u2232", CloseCurlyDoubleQuote: "\u201D", CloseCurlyQuote: "\u2019", clubs: "\u2663", clubsuit: "\u2663", colon: ":", Colon: "\u2237", Colone: "\u2A74", colone: "\u2254", coloneq: "\u2254", comma: ",", commat: "@", comp: "\u2201", compfn: "\u2218", complement: "\u2201", complexes: "\u2102", cong: "\u2245", congdot: "\u2A6D", Congruent: "\u2261", conint: "\u222E", Conint: "\u222F", ContourIntegral: "\u222E", copf: "\u{1D554}", Copf: "\u2102", coprod: "\u2210", Coproduct: "\u2210", copy: "\xA9", COPY: "\xA9", copysr: "\u2117", CounterClockwiseContourIntegral: "\u2233", crarr: "\u21B5", cross: "\u2717", Cross: "\u2A2F", Cscr: "\u{1D49E}", cscr: "\u{1D4B8}", csub: "\u2ACF", csube: "\u2AD1", csup: "\u2AD0", csupe: "\u2AD2", ctdot: "\u22EF", cudarrl: "\u2938", cudarrr: "\u2935", cuepr: "\u22DE", cuesc: "\u22DF", cularr: "\u21B6", cularrp: "\u293D", cupbrcap: "\u2A48", cupcap: "\u2A46", CupCap: "\u224D", cup: "\u222A", Cup: "\u22D3", cupcup: "\u2A4A", cupdot: "\u228D", cupor: "\u2A45", cups: "\u222A\uFE00", curarr: "\u21B7", curarrm: "\u293C", curlyeqprec: "\u22DE", curlyeqsucc: "\u22DF", curlyvee: "\u22CE", curlywedge: "\u22CF", curren: "\xA4", curvearrowleft: "\u21B6", curvearrowright: "\u21B7", cuvee: "\u22CE", cuwed: "\u22CF", cwconint: "\u2232", cwint: "\u2231", cylcty: "\u232D", dagger: "\u2020", Dagger: "\u2021", daleth: "\u2138", darr: "\u2193", Darr: "\u21A1", dArr: "\u21D3", dash: "\u2010", Dashv: "\u2AE4", dashv: "\u22A3", dbkarow: "\u290F", dblac: "\u02DD", Dcaron: "\u010E", dcaron: "\u010F", Dcy: "\u0414", dcy: "\u0434", ddagger: "\u2021", ddarr: "\u21CA", DD: "\u2145", dd: "\u2146", DDotrahd: "\u2911", ddotseq: "\u2A77", deg: "\xB0", Del: "\u2207", Delta: "\u0394", delta: "\u03B4", demptyv: "\u29B1", dfisht: "\u297F", Dfr: "\u{1D507}", dfr: "\u{1D521}", dHar: "\u2965", dharl: "\u21C3", dharr: "\u21C2", DiacriticalAcute: "\xB4", DiacriticalDot: "\u02D9", DiacriticalDoubleAcute: "\u02DD", DiacriticalGrave: "`", DiacriticalTilde: "\u02DC", diam: "\u22C4", diamond: "\u22C4", Diamond: "\u22C4", diamondsuit: "\u2666", diams: "\u2666", die: "\xA8", DifferentialD: "\u2146", digamma: "\u03DD", disin: "\u22F2", div: "\xF7", divide: "\xF7", divideontimes: "\u22C7", divonx: "\u22C7", DJcy: "\u0402", djcy: "\u0452", dlcorn: "\u231E", dlcrop: "\u230D", dollar: "$", Dopf: "\u{1D53B}", dopf: "\u{1D555}", Dot: "\xA8", dot: "\u02D9", DotDot: "\u20DC", doteq: "\u2250", doteqdot: "\u2251", DotEqual: "\u2250", dotminus: "\u2238", dotplus: "\u2214", dotsquare: "\u22A1", doublebarwedge: "\u2306", DoubleContourIntegral: "\u222F", DoubleDot: "\xA8", DoubleDownArrow: "\u21D3", DoubleLeftArrow: "\u21D0", DoubleLeftRightArrow: "\u21D4", DoubleLeftTee: "\u2AE4", DoubleLongLeftArrow: "\u27F8", DoubleLongLeftRightArrow: "\u27FA", DoubleLongRightArrow: "\u27F9", DoubleRightArrow: "\u21D2", DoubleRightTee: "\u22A8", DoubleUpArrow: "\u21D1", DoubleUpDownArrow: "\u21D5", DoubleVerticalBar: "\u2225", DownArrowBar: "\u2913", downarrow: "\u2193", DownArrow: "\u2193", Downarrow: "\u21D3", DownArrowUpArrow: "\u21F5", DownBreve: "\u0311", downdownarrows: "\u21CA", downharpoonleft: "\u21C3", downharpoonright: "\u21C2", DownLeftRightVector: "\u2950", DownLeftTeeVector: "\u295E", DownLeftVectorBar: "\u2956", DownLeftVector: "\u21BD", DownRightTeeVector: "\u295F", DownRightVectorBar: "\u2957", DownRightVector: "\u21C1", DownTeeArrow: "\u21A7", DownTee: "\u22A4", drbkarow: "\u2910", drcorn: "\u231F", drcrop: "\u230C", Dscr: "\u{1D49F}", dscr: "\u{1D4B9}", DScy: "\u0405", dscy: "\u0455", dsol: "\u29F6", Dstrok: "\u0110", dstrok: "\u0111", dtdot: "\u22F1", dtri: "\u25BF", dtrif: "\u25BE", duarr: "\u21F5", duhar: "\u296F", dwangle: "\u29A6", DZcy: "\u040F", dzcy: "\u045F", dzigrarr: "\u27FF", Eacute: "\xC9", eacute: "\xE9", easter: "\u2A6E", Ecaron: "\u011A", ecaron: "\u011B", Ecirc: "\xCA", ecirc: "\xEA", ecir: "\u2256", ecolon: "\u2255", Ecy: "\u042D", ecy: "\u044D", eDDot: "\u2A77", Edot: "\u0116", edot: "\u0117", eDot: "\u2251", ee: "\u2147", efDot: "\u2252", Efr: "\u{1D508}", efr: "\u{1D522}", eg: "\u2A9A", Egrave: "\xC8", egrave: "\xE8", egs: "\u2A96", egsdot: "\u2A98", el: "\u2A99", Element: "\u2208", elinters: "\u23E7", ell: "\u2113", els: "\u2A95", elsdot: "\u2A97", Emacr: "\u0112", emacr: "\u0113", empty: "\u2205", emptyset: "\u2205", EmptySmallSquare: "\u25FB", emptyv: "\u2205", EmptyVerySmallSquare: "\u25AB", emsp13: "\u2004", emsp14: "\u2005", emsp: "\u2003", ENG: "\u014A", eng: "\u014B", ensp: "\u2002", Eogon: "\u0118", eogon: "\u0119", Eopf: "\u{1D53C}", eopf: "\u{1D556}", epar: "\u22D5", eparsl: "\u29E3", eplus: "\u2A71", epsi: "\u03B5", Epsilon: "\u0395", epsilon: "\u03B5", epsiv: "\u03F5", eqcirc: "\u2256", eqcolon: "\u2255", eqsim: "\u2242", eqslantgtr: "\u2A96", eqslantless: "\u2A95", Equal: "\u2A75", equals: "=", EqualTilde: "\u2242", equest: "\u225F", Equilibrium: "\u21CC", equiv: "\u2261", equivDD: "\u2A78", eqvparsl: "\u29E5", erarr: "\u2971", erDot: "\u2253", escr: "\u212F", Escr: "\u2130", esdot: "\u2250", Esim: "\u2A73", esim: "\u2242", Eta: "\u0397", eta: "\u03B7", ETH: "\xD0", eth: "\xF0", Euml: "\xCB", euml: "\xEB", euro: "\u20AC", excl: "!", exist: "\u2203", Exists: "\u2203", expectation: "\u2130", exponentiale: "\u2147", ExponentialE: "\u2147", fallingdotseq: "\u2252", Fcy: "\u0424", fcy: "\u0444", female: "\u2640", ffilig: "\uFB03", fflig: "\uFB00", ffllig: "\uFB04", Ffr: "\u{1D509}", ffr: "\u{1D523}", filig: "\uFB01", FilledSmallSquare: "\u25FC", FilledVerySmallSquare: "\u25AA", fjlig: "fj", flat: "\u266D", fllig: "\uFB02", fltns: "\u25B1", fnof: "\u0192", Fopf: "\u{1D53D}", fopf: "\u{1D557}", forall: "\u2200", ForAll: "\u2200", fork: "\u22D4", forkv: "\u2AD9", Fouriertrf: "\u2131", fpartint: "\u2A0D", frac12: "\xBD", frac13: "\u2153", frac14: "\xBC", frac15: "\u2155", frac16: "\u2159", frac18: "\u215B", frac23: "\u2154", frac25: "\u2156", frac34: "\xBE", frac35: "\u2157", frac38: "\u215C", frac45: "\u2158", frac56: "\u215A", frac58: "\u215D", frac78: "\u215E", frasl: "\u2044", frown: "\u2322", fscr: "\u{1D4BB}", Fscr: "\u2131", gacute: "\u01F5", Gamma: "\u0393", gamma: "\u03B3", Gammad: "\u03DC", gammad: "\u03DD", gap: "\u2A86", Gbreve: "\u011E", gbreve: "\u011F", Gcedil: "\u0122", Gcirc: "\u011C", gcirc: "\u011D", Gcy: "\u0413", gcy: "\u0433", Gdot: "\u0120", gdot: "\u0121", ge: "\u2265", gE: "\u2267", gEl: "\u2A8C", gel: "\u22DB", geq: "\u2265", geqq: "\u2267", geqslant: "\u2A7E", gescc: "\u2AA9", ges: "\u2A7E", gesdot: "\u2A80", gesdoto: "\u2A82", gesdotol: "\u2A84", gesl: "\u22DB\uFE00", gesles: "\u2A94", Gfr: "\u{1D50A}", gfr: "\u{1D524}", gg: "\u226B", Gg: "\u22D9", ggg: "\u22D9", gimel: "\u2137", GJcy: "\u0403", gjcy: "\u0453", gla: "\u2AA5", gl: "\u2277", glE: "\u2A92", glj: "\u2AA4", gnap: "\u2A8A", gnapprox: "\u2A8A", gne: "\u2A88", gnE: "\u2269", gneq: "\u2A88", gneqq: "\u2269", gnsim: "\u22E7", Gopf: "\u{1D53E}", gopf: "\u{1D558}", grave: "`", GreaterEqual: "\u2265", GreaterEqualLess: "\u22DB", GreaterFullEqual: "\u2267", GreaterGreater: "\u2AA2", GreaterLess: "\u2277", GreaterSlantEqual: "\u2A7E", GreaterTilde: "\u2273", Gscr: "\u{1D4A2}", gscr: "\u210A", gsim: "\u2273", gsime: "\u2A8E", gsiml: "\u2A90", gtcc: "\u2AA7", gtcir: "\u2A7A", gt: ">", GT: ">", Gt: "\u226B", gtdot: "\u22D7", gtlPar: "\u2995", gtquest: "\u2A7C", gtrapprox: "\u2A86", gtrarr: "\u2978", gtrdot: "\u22D7", gtreqless: "\u22DB", gtreqqless: "\u2A8C", gtrless: "\u2277", gtrsim: "\u2273", gvertneqq: "\u2269\uFE00", gvnE: "\u2269\uFE00", Hacek: "\u02C7", hairsp: "\u200A", half: "\xBD", hamilt: "\u210B", HARDcy: "\u042A", hardcy: "\u044A", harrcir: "\u2948", harr: "\u2194", hArr: "\u21D4", harrw: "\u21AD", Hat: "^", hbar: "\u210F", Hcirc: "\u0124", hcirc: "\u0125", hearts: "\u2665", heartsuit: "\u2665", hellip: "\u2026", hercon: "\u22B9", hfr: "\u{1D525}", Hfr: "\u210C", HilbertSpace: "\u210B", hksearow: "\u2925", hkswarow: "\u2926", hoarr: "\u21FF", homtht: "\u223B", hookleftarrow: "\u21A9", hookrightarrow: "\u21AA", hopf: "\u{1D559}", Hopf: "\u210D", horbar: "\u2015", HorizontalLine: "\u2500", hscr: "\u{1D4BD}", Hscr: "\u210B", hslash: "\u210F", Hstrok: "\u0126", hstrok: "\u0127", HumpDownHump: "\u224E", HumpEqual: "\u224F", hybull: "\u2043", hyphen: "\u2010", Iacute: "\xCD", iacute: "\xED", ic: "\u2063", Icirc: "\xCE", icirc: "\xEE", Icy: "\u0418", icy: "\u0438", Idot: "\u0130", IEcy: "\u0415", iecy: "\u0435", iexcl: "\xA1", iff: "\u21D4", ifr: "\u{1D526}", Ifr: "\u2111", Igrave: "\xCC", igrave: "\xEC", ii: "\u2148", iiiint: "\u2A0C", iiint: "\u222D", iinfin: "\u29DC", iiota: "\u2129", IJlig: "\u0132", ijlig: "\u0133", Imacr: "\u012A", imacr: "\u012B", image: "\u2111", ImaginaryI: "\u2148", imagline: "\u2110", imagpart: "\u2111", imath: "\u0131", Im: "\u2111", imof: "\u22B7", imped: "\u01B5", Implies: "\u21D2", incare: "\u2105", in: "\u2208", infin: "\u221E", infintie: "\u29DD", inodot: "\u0131", intcal: "\u22BA", int: "\u222B", Int: "\u222C", integers: "\u2124", Integral: "\u222B", intercal: "\u22BA", Intersection: "\u22C2", intlarhk: "\u2A17", intprod: "\u2A3C", InvisibleComma: "\u2063", InvisibleTimes: "\u2062", IOcy: "\u0401", iocy: "\u0451", Iogon: "\u012E", iogon: "\u012F", Iopf: "\u{1D540}", iopf: "\u{1D55A}", Iota: "\u0399", iota: "\u03B9", iprod: "\u2A3C", iquest: "\xBF", iscr: "\u{1D4BE}", Iscr: "\u2110", isin: "\u2208", isindot: "\u22F5", isinE: "\u22F9", isins: "\u22F4", isinsv: "\u22F3", isinv: "\u2208", it: "\u2062", Itilde: "\u0128", itilde: "\u0129", Iukcy: "\u0406", iukcy: "\u0456", Iuml: "\xCF", iuml: "\xEF", Jcirc: "\u0134", jcirc: "\u0135", Jcy: "\u0419", jcy: "\u0439", Jfr: "\u{1D50D}", jfr: "\u{1D527}", jmath: "\u0237", Jopf: "\u{1D541}", jopf: "\u{1D55B}", Jscr: "\u{1D4A5}", jscr: "\u{1D4BF}", Jsercy: "\u0408", jsercy: "\u0458", Jukcy: "\u0404", jukcy: "\u0454", Kappa: "\u039A", kappa: "\u03BA", kappav: "\u03F0", Kcedil: "\u0136", kcedil: "\u0137", Kcy: "\u041A", kcy: "\u043A", Kfr: "\u{1D50E}", kfr: "\u{1D528}", kgreen: "\u0138", KHcy: "\u0425", khcy: "\u0445", KJcy: "\u040C", kjcy: "\u045C", Kopf: "\u{1D542}", kopf: "\u{1D55C}", Kscr: "\u{1D4A6}", kscr: "\u{1D4C0}", lAarr: "\u21DA", Lacute: "\u0139", lacute: "\u013A", laemptyv: "\u29B4", lagran: "\u2112", Lambda: "\u039B", lambda: "\u03BB", lang: "\u27E8", Lang: "\u27EA", langd: "\u2991", langle: "\u27E8", lap: "\u2A85", Laplacetrf: "\u2112", laquo: "\xAB", larrb: "\u21E4", larrbfs: "\u291F", larr: "\u2190", Larr: "\u219E", lArr: "\u21D0", larrfs: "\u291D", larrhk: "\u21A9", larrlp: "\u21AB", larrpl: "\u2939", larrsim: "\u2973", larrtl: "\u21A2", latail: "\u2919", lAtail: "\u291B", lat: "\u2AAB", late: "\u2AAD", lates: "\u2AAD\uFE00", lbarr: "\u290C", lBarr: "\u290E", lbbrk: "\u2772", lbrace: "{", lbrack: "[", lbrke: "\u298B", lbrksld: "\u298F", lbrkslu: "\u298D", Lcaron: "\u013D", lcaron: "\u013E", Lcedil: "\u013B", lcedil: "\u013C", lceil: "\u2308", lcub: "{", Lcy: "\u041B", lcy: "\u043B", ldca: "\u2936", ldquo: "\u201C", ldquor: "\u201E", ldrdhar: "\u2967", ldrushar: "\u294B", ldsh: "\u21B2", le: "\u2264", lE: "\u2266", LeftAngleBracket: "\u27E8", LeftArrowBar: "\u21E4", leftarrow: "\u2190", LeftArrow: "\u2190", Leftarrow: "\u21D0", LeftArrowRightArrow: "\u21C6", leftarrowtail: "\u21A2", LeftCeiling: "\u2308", LeftDoubleBracket: "\u27E6", LeftDownTeeVector: "\u2961", LeftDownVectorBar: "\u2959", LeftDownVector: "\u21C3", LeftFloor: "\u230A", leftharpoondown: "\u21BD", leftharpoonup: "\u21BC", leftleftarrows: "\u21C7", leftrightarrow: "\u2194", LeftRightArrow: "\u2194", Leftrightarrow: "\u21D4", leftrightarrows: "\u21C6", leftrightharpoons: "\u21CB", leftrightsquigarrow: "\u21AD", LeftRightVector: "\u294E", LeftTeeArrow: "\u21A4", LeftTee: "\u22A3", LeftTeeVector: "\u295A", leftthreetimes: "\u22CB", LeftTriangleBar: "\u29CF", LeftTriangle: "\u22B2", LeftTriangleEqual: "\u22B4", LeftUpDownVector: "\u2951", LeftUpTeeVector: "\u2960", LeftUpVectorBar: "\u2958", LeftUpVector: "\u21BF", LeftVectorBar: "\u2952", LeftVector: "\u21BC", lEg: "\u2A8B", leg: "\u22DA", leq: "\u2264", leqq: "\u2266", leqslant: "\u2A7D", lescc: "\u2AA8", les: "\u2A7D", lesdot: "\u2A7F", lesdoto: "\u2A81", lesdotor: "\u2A83", lesg: "\u22DA\uFE00", lesges: "\u2A93", lessapprox: "\u2A85", lessdot: "\u22D6", lesseqgtr: "\u22DA", lesseqqgtr: "\u2A8B", LessEqualGreater: "\u22DA", LessFullEqual: "\u2266", LessGreater: "\u2276", lessgtr: "\u2276", LessLess: "\u2AA1", lesssim: "\u2272", LessSlantEqual: "\u2A7D", LessTilde: "\u2272", lfisht: "\u297C", lfloor: "\u230A", Lfr: "\u{1D50F}", lfr: "\u{1D529}", lg: "\u2276", lgE: "\u2A91", lHar: "\u2962", lhard: "\u21BD", lharu: "\u21BC", lharul: "\u296A", lhblk: "\u2584", LJcy: "\u0409", ljcy: "\u0459", llarr: "\u21C7", ll: "\u226A", Ll: "\u22D8", llcorner: "\u231E", Lleftarrow: "\u21DA", llhard: "\u296B", lltri: "\u25FA", Lmidot: "\u013F", lmidot: "\u0140", lmoustache: "\u23B0", lmoust: "\u23B0", lnap: "\u2A89", lnapprox: "\u2A89", lne: "\u2A87", lnE: "\u2268", lneq: "\u2A87", lneqq: "\u2268", lnsim: "\u22E6", loang: "\u27EC", loarr: "\u21FD", lobrk: "\u27E6", longleftarrow: "\u27F5", LongLeftArrow: "\u27F5", Longleftarrow: "\u27F8", longleftrightarrow: "\u27F7", LongLeftRightArrow: "\u27F7", Longleftrightarrow: "\u27FA", longmapsto: "\u27FC", longrightarrow: "\u27F6", LongRightArrow: "\u27F6", Longrightarrow: "\u27F9", looparrowleft: "\u21AB", looparrowright: "\u21AC", lopar: "\u2985", Lopf: "\u{1D543}", lopf: "\u{1D55D}", loplus: "\u2A2D", lotimes: "\u2A34", lowast: "\u2217", lowbar: "_", LowerLeftArrow: "\u2199", LowerRightArrow: "\u2198", loz: "\u25CA", lozenge: "\u25CA", lozf: "\u29EB", lpar: "(", lparlt: "\u2993", lrarr: "\u21C6", lrcorner: "\u231F", lrhar: "\u21CB", lrhard: "\u296D", lrm: "\u200E", lrtri: "\u22BF", lsaquo: "\u2039", lscr: "\u{1D4C1}", Lscr: "\u2112", lsh: "\u21B0", Lsh: "\u21B0", lsim: "\u2272", lsime: "\u2A8D", lsimg: "\u2A8F", lsqb: "[", lsquo: "\u2018", lsquor: "\u201A", Lstrok: "\u0141", lstrok: "\u0142", ltcc: "\u2AA6", ltcir: "\u2A79", lt: "<", LT: "<", Lt: "\u226A", ltdot: "\u22D6", lthree: "\u22CB", ltimes: "\u22C9", ltlarr: "\u2976", ltquest: "\u2A7B", ltri: "\u25C3", ltrie: "\u22B4", ltrif: "\u25C2", ltrPar: "\u2996", lurdshar: "\u294A", luruhar: "\u2966", lvertneqq: "\u2268\uFE00", lvnE: "\u2268\uFE00", macr: "\xAF", male: "\u2642", malt: "\u2720", maltese: "\u2720", Map: "\u2905", map: "\u21A6", mapsto: "\u21A6", mapstodown: "\u21A7", mapstoleft: "\u21A4", mapstoup: "\u21A5", marker: "\u25AE", mcomma: "\u2A29", Mcy: "\u041C", mcy: "\u043C", mdash: "\u2014", mDDot: "\u223A", measuredangle: "\u2221", MediumSpace: "\u205F", Mellintrf: "\u2133", Mfr: "\u{1D510}", mfr: "\u{1D52A}", mho: "\u2127", micro: "\xB5", midast: "*", midcir: "\u2AF0", mid: "\u2223", middot: "\xB7", minusb: "\u229F", minus: "\u2212", minusd: "\u2238", minusdu: "\u2A2A", MinusPlus: "\u2213", mlcp: "\u2ADB", mldr: "\u2026", mnplus: "\u2213", models: "\u22A7", Mopf: "\u{1D544}", mopf: "\u{1D55E}", mp: "\u2213", mscr: "\u{1D4C2}", Mscr: "\u2133", mstpos: "\u223E", Mu: "\u039C", mu: "\u03BC", multimap: "\u22B8", mumap: "\u22B8", nabla: "\u2207", Nacute: "\u0143", nacute: "\u0144", nang: "\u2220\u20D2", nap: "\u2249", napE: "\u2A70\u0338", napid: "\u224B\u0338", napos: "\u0149", napprox: "\u2249", natural: "\u266E", naturals: "\u2115", natur: "\u266E", nbsp: "\xA0", nbump: "\u224E\u0338", nbumpe: "\u224F\u0338", ncap: "\u2A43", Ncaron: "\u0147", ncaron: "\u0148", Ncedil: "\u0145", ncedil: "\u0146", ncong: "\u2247", ncongdot: "\u2A6D\u0338", ncup: "\u2A42", Ncy: "\u041D", ncy: "\u043D", ndash: "\u2013", nearhk: "\u2924", nearr: "\u2197", neArr: "\u21D7", nearrow: "\u2197", ne: "\u2260", nedot: "\u2250\u0338", NegativeMediumSpace: "\u200B", NegativeThickSpace: "\u200B", NegativeThinSpace: "\u200B", NegativeVeryThinSpace: "\u200B", nequiv: "\u2262", nesear: "\u2928", nesim: "\u2242\u0338", NestedGreaterGreater: "\u226B", NestedLessLess: "\u226A", NewLine: "\n", nexist: "\u2204", nexists: "\u2204", Nfr: "\u{1D511}", nfr: "\u{1D52B}", ngE: "\u2267\u0338", nge: "\u2271", ngeq: "\u2271", ngeqq: "\u2267\u0338", ngeqslant: "\u2A7E\u0338", nges: "\u2A7E\u0338", nGg: "\u22D9\u0338", ngsim: "\u2275", nGt: "\u226B\u20D2", ngt: "\u226F", ngtr: "\u226F", nGtv: "\u226B\u0338", nharr: "\u21AE", nhArr: "\u21CE", nhpar: "\u2AF2", ni: "\u220B", nis: "\u22FC", nisd: "\u22FA", niv: "\u220B", NJcy: "\u040A", njcy: "\u045A", nlarr: "\u219A", nlArr: "\u21CD", nldr: "\u2025", nlE: "\u2266\u0338", nle: "\u2270", nleftarrow: "\u219A", nLeftarrow: "\u21CD", nleftrightarrow: "\u21AE", nLeftrightarrow: "\u21CE", nleq: "\u2270", nleqq: "\u2266\u0338", nleqslant: "\u2A7D\u0338", nles: "\u2A7D\u0338", nless: "\u226E", nLl: "\u22D8\u0338", nlsim: "\u2274", nLt: "\u226A\u20D2", nlt: "\u226E", nltri: "\u22EA", nltrie: "\u22EC", nLtv: "\u226A\u0338", nmid: "\u2224", NoBreak: "\u2060", NonBreakingSpace: "\xA0", nopf: "\u{1D55F}", Nopf: "\u2115", Not: "\u2AEC", not: "\xAC", NotCongruent: "\u2262", NotCupCap: "\u226D", NotDoubleVerticalBar: "\u2226", NotElement: "\u2209", NotEqual: "\u2260", NotEqualTilde: "\u2242\u0338", NotExists: "\u2204", NotGreater: "\u226F", NotGreaterEqual: "\u2271", NotGreaterFullEqual: "\u2267\u0338", NotGreaterGreater: "\u226B\u0338", NotGreaterLess: "\u2279", NotGreaterSlantEqual: "\u2A7E\u0338", NotGreaterTilde: "\u2275", NotHumpDownHump: "\u224E\u0338", NotHumpEqual: "\u224F\u0338", notin: "\u2209", notindot: "\u22F5\u0338", notinE: "\u22F9\u0338", notinva: "\u2209", notinvb: "\u22F7", notinvc: "\u22F6", NotLeftTriangleBar: "\u29CF\u0338", NotLeftTriangle: "\u22EA", NotLeftTriangleEqual: "\u22EC", NotLess: "\u226E", NotLessEqual: "\u2270", NotLessGreater: "\u2278", NotLessLess: "\u226A\u0338", NotLessSlantEqual: "\u2A7D\u0338", NotLessTilde: "\u2274", NotNestedGreaterGreater: "\u2AA2\u0338", NotNestedLessLess: "\u2AA1\u0338", notni: "\u220C", notniva: "\u220C", notnivb: "\u22FE", notnivc: "\u22FD", NotPrecedes: "\u2280", NotPrecedesEqual: "\u2AAF\u0338", NotPrecedesSlantEqual: "\u22E0", NotReverseElement: "\u220C", NotRightTriangleBar: "\u29D0\u0338", NotRightTriangle: "\u22EB", NotRightTriangleEqual: "\u22ED", NotSquareSubset: "\u228F\u0338", NotSquareSubsetEqual: "\u22E2", NotSquareSuperset: "\u2290\u0338", NotSquareSupersetEqual: "\u22E3", NotSubset: "\u2282\u20D2", NotSubsetEqual: "\u2288", NotSucceeds: "\u2281", NotSucceedsEqual: "\u2AB0\u0338", NotSucceedsSlantEqual: "\u22E1", NotSucceedsTilde: "\u227F\u0338", NotSuperset: "\u2283\u20D2", NotSupersetEqual: "\u2289", NotTilde: "\u2241", NotTildeEqual: "\u2244", NotTildeFullEqual: "\u2247", NotTildeTilde: "\u2249", NotVerticalBar: "\u2224", nparallel: "\u2226", npar: "\u2226", nparsl: "\u2AFD\u20E5", npart: "\u2202\u0338", npolint: "\u2A14", npr: "\u2280", nprcue: "\u22E0", nprec: "\u2280", npreceq: "\u2AAF\u0338", npre: "\u2AAF\u0338", nrarrc: "\u2933\u0338", nrarr: "\u219B", nrArr: "\u21CF", nrarrw: "\u219D\u0338", nrightarrow: "\u219B", nRightarrow: "\u21CF", nrtri: "\u22EB", nrtrie: "\u22ED", nsc: "\u2281", nsccue: "\u22E1", nsce: "\u2AB0\u0338", Nscr: "\u{1D4A9}", nscr: "\u{1D4C3}", nshortmid: "\u2224", nshortparallel: "\u2226", nsim: "\u2241", nsime: "\u2244", nsimeq: "\u2244", nsmid: "\u2224", nspar: "\u2226", nsqsube: "\u22E2", nsqsupe: "\u22E3", nsub: "\u2284", nsubE: "\u2AC5\u0338", nsube: "\u2288", nsubset: "\u2282\u20D2", nsubseteq: "\u2288", nsubseteqq: "\u2AC5\u0338", nsucc: "\u2281", nsucceq: "\u2AB0\u0338", nsup: "\u2285", nsupE: "\u2AC6\u0338", nsupe: "\u2289", nsupset: "\u2283\u20D2", nsupseteq: "\u2289", nsupseteqq: "\u2AC6\u0338", ntgl: "\u2279", Ntilde: "\xD1", ntilde: "\xF1", ntlg: "\u2278", ntriangleleft: "\u22EA", ntrianglelefteq: "\u22EC", ntriangleright: "\u22EB", ntrianglerighteq: "\u22ED", Nu: "\u039D", nu: "\u03BD", num: "#", numero: "\u2116", numsp: "\u2007", nvap: "\u224D\u20D2", nvdash: "\u22AC", nvDash: "\u22AD", nVdash: "\u22AE", nVDash: "\u22AF", nvge: "\u2265\u20D2", nvgt: ">\u20D2", nvHarr: "\u2904", nvinfin: "\u29DE", nvlArr: "\u2902", nvle: "\u2264\u20D2", nvlt: "<\u20D2", nvltrie: "\u22B4\u20D2", nvrArr: "\u2903", nvrtrie: "\u22B5\u20D2", nvsim: "\u223C\u20D2", nwarhk: "\u2923", nwarr: "\u2196", nwArr: "\u21D6", nwarrow: "\u2196", nwnear: "\u2927", Oacute: "\xD3", oacute: "\xF3", oast: "\u229B", Ocirc: "\xD4", ocirc: "\xF4", ocir: "\u229A", Ocy: "\u041E", ocy: "\u043E", odash: "\u229D", Odblac: "\u0150", odblac: "\u0151", odiv: "\u2A38", odot: "\u2299", odsold: "\u29BC", OElig: "\u0152", oelig: "\u0153", ofcir: "\u29BF", Ofr: "\u{1D512}", ofr: "\u{1D52C}", ogon: "\u02DB", Ograve: "\xD2", ograve: "\xF2", ogt: "\u29C1", ohbar: "\u29B5", ohm: "\u03A9", oint: "\u222E", olarr: "\u21BA", olcir: "\u29BE", olcross: "\u29BB", oline: "\u203E", olt: "\u29C0", Omacr: "\u014C", omacr: "\u014D", Omega: "\u03A9", omega: "\u03C9", Omicron: "\u039F", omicron: "\u03BF", omid: "\u29B6", ominus: "\u2296", Oopf: "\u{1D546}", oopf: "\u{1D560}", opar: "\u29B7", OpenCurlyDoubleQuote: "\u201C", OpenCurlyQuote: "\u2018", operp: "\u29B9", oplus: "\u2295", orarr: "\u21BB", Or: "\u2A54", or: "\u2228", ord: "\u2A5D", order: "\u2134", orderof: "\u2134", ordf: "\xAA", ordm: "\xBA", origof: "\u22B6", oror: "\u2A56", orslope: "\u2A57", orv: "\u2A5B", oS: "\u24C8", Oscr: "\u{1D4AA}", oscr: "\u2134", Oslash: "\xD8", oslash: "\xF8", osol: "\u2298", Otilde: "\xD5", otilde: "\xF5", otimesas: "\u2A36", Otimes: "\u2A37", otimes: "\u2297", Ouml: "\xD6", ouml: "\xF6", ovbar: "\u233D", OverBar: "\u203E", OverBrace: "\u23DE", OverBracket: "\u23B4", OverParenthesis: "\u23DC", para: "\xB6", parallel: "\u2225", par: "\u2225", parsim: "\u2AF3", parsl: "\u2AFD", part: "\u2202", PartialD: "\u2202", Pcy: "\u041F", pcy: "\u043F", percnt: "%", period: ".", permil: "\u2030", perp: "\u22A5", pertenk: "\u2031", Pfr: "\u{1D513}", pfr: "\u{1D52D}", Phi: "\u03A6", phi: "\u03C6", phiv: "\u03D5", phmmat: "\u2133", phone: "\u260E", Pi: "\u03A0", pi: "\u03C0", pitchfork: "\u22D4", piv: "\u03D6", planck: "\u210F", planckh: "\u210E", plankv: "\u210F", plusacir: "\u2A23", plusb: "\u229E", pluscir: "\u2A22", plus: "+", plusdo: "\u2214", plusdu: "\u2A25", pluse: "\u2A72", PlusMinus: "\xB1", plusmn: "\xB1", plussim: "\u2A26", plustwo: "\u2A27", pm: "\xB1", Poincareplane: "\u210C", pointint: "\u2A15", popf: "\u{1D561}", Popf: "\u2119", pound: "\xA3", prap: "\u2AB7", Pr: "\u2ABB", pr: "\u227A", prcue: "\u227C", precapprox: "\u2AB7", prec: "\u227A", preccurlyeq: "\u227C", Precedes: "\u227A", PrecedesEqual: "\u2AAF", PrecedesSlantEqual: "\u227C", PrecedesTilde: "\u227E", preceq: "\u2AAF", precnapprox: "\u2AB9", precneqq: "\u2AB5", precnsim: "\u22E8", pre: "\u2AAF", prE: "\u2AB3", precsim: "\u227E", prime: "\u2032", Prime: "\u2033", primes: "\u2119", prnap: "\u2AB9", prnE: "\u2AB5", prnsim: "\u22E8", prod: "\u220F", Product: "\u220F", profalar: "\u232E", profline: "\u2312", profsurf: "\u2313", prop: "\u221D", Proportional: "\u221D", Proportion: "\u2237", propto: "\u221D", prsim: "\u227E", prurel: "\u22B0", Pscr: "\u{1D4AB}", pscr: "\u{1D4C5}", Psi: "\u03A8", psi: "\u03C8", puncsp: "\u2008", Qfr: "\u{1D514}", qfr: "\u{1D52E}", qint: "\u2A0C", qopf: "\u{1D562}", Qopf: "\u211A", qprime: "\u2057", Qscr: "\u{1D4AC}", qscr: "\u{1D4C6}", quaternions: "\u210D", quatint: "\u2A16", quest: "?", questeq: "\u225F", quot: '"', QUOT: '"', rAarr: "\u21DB", race: "\u223D\u0331", Racute: "\u0154", racute: "\u0155", radic: "\u221A", raemptyv: "\u29B3", rang: "\u27E9", Rang: "\u27EB", rangd: "\u2992", range: "\u29A5", rangle: "\u27E9", raquo: "\xBB", rarrap: "\u2975", rarrb: "\u21E5", rarrbfs: "\u2920", rarrc: "\u2933", rarr: "\u2192", Rarr: "\u21A0", rArr: "\u21D2", rarrfs: "\u291E", rarrhk: "\u21AA", rarrlp: "\u21AC", rarrpl: "\u2945", rarrsim: "\u2974", Rarrtl: "\u2916", rarrtl: "\u21A3", rarrw: "\u219D", ratail: "\u291A", rAtail: "\u291C", ratio: "\u2236", rationals: "\u211A", rbarr: "\u290D", rBarr: "\u290F", RBarr: "\u2910", rbbrk: "\u2773", rbrace: "}", rbrack: "]", rbrke: "\u298C", rbrksld: "\u298E", rbrkslu: "\u2990", Rcaron: "\u0158", rcaron: "\u0159", Rcedil: "\u0156", rcedil: "\u0157", rceil: "\u2309", rcub: "}", Rcy: "\u0420", rcy: "\u0440", rdca: "\u2937", rdldhar: "\u2969", rdquo: "\u201D", rdquor: "\u201D", rdsh: "\u21B3", real: "\u211C", realine: "\u211B", realpart: "\u211C", reals: "\u211D", Re: "\u211C", rect: "\u25AD", reg: "\xAE", REG: "\xAE", ReverseElement: "\u220B", ReverseEquilibrium: "\u21CB", ReverseUpEquilibrium: "\u296F", rfisht: "\u297D", rfloor: "\u230B", rfr: "\u{1D52F}", Rfr: "\u211C", rHar: "\u2964", rhard: "\u21C1", rharu: "\u21C0", rharul: "\u296C", Rho: "\u03A1", rho: "\u03C1", rhov: "\u03F1", RightAngleBracket: "\u27E9", RightArrowBar: "\u21E5", rightarrow: "\u2192", RightArrow: "\u2192", Rightarrow: "\u21D2", RightArrowLeftArrow: "\u21C4", rightarrowtail: "\u21A3", RightCeiling: "\u2309", RightDoubleBracket: "\u27E7", RightDownTeeVector: "\u295D", RightDownVectorBar: "\u2955", RightDownVector: "\u21C2", RightFloor: "\u230B", rightharpoondown: "\u21C1", rightharpoonup: "\u21C0", rightleftarrows: "\u21C4", rightleftharpoons: "\u21CC", rightrightarrows: "\u21C9", rightsquigarrow: "\u219D", RightTeeArrow: "\u21A6", RightTee: "\u22A2", RightTeeVector: "\u295B", rightthreetimes: "\u22CC", RightTriangleBar: "\u29D0", RightTriangle: "\u22B3", RightTriangleEqual: "\u22B5", RightUpDownVector: "\u294F", RightUpTeeVector: "\u295C", RightUpVectorBar: "\u2954", RightUpVector: "\u21BE", RightVectorBar: "\u2953", RightVector: "\u21C0", ring: "\u02DA", risingdotseq: "\u2253", rlarr: "\u21C4", rlhar: "\u21CC", rlm: "\u200F", rmoustache: "\u23B1", rmoust: "\u23B1", rnmid: "\u2AEE", roang: "\u27ED", roarr: "\u21FE", robrk: "\u27E7", ropar: "\u2986", ropf: "\u{1D563}", Ropf: "\u211D", roplus: "\u2A2E", rotimes: "\u2A35", RoundImplies: "\u2970", rpar: ")", rpargt: "\u2994", rppolint: "\u2A12", rrarr: "\u21C9", Rrightarrow: "\u21DB", rsaquo: "\u203A", rscr: "\u{1D4C7}", Rscr: "\u211B", rsh: "\u21B1", Rsh: "\u21B1", rsqb: "]", rsquo: "\u2019", rsquor: "\u2019", rthree: "\u22CC", rtimes: "\u22CA", rtri: "\u25B9", rtrie: "\u22B5", rtrif: "\u25B8", rtriltri: "\u29CE", RuleDelayed: "\u29F4", ruluhar: "\u2968", rx: "\u211E", Sacute: "\u015A", sacute: "\u015B", sbquo: "\u201A", scap: "\u2AB8", Scaron: "\u0160", scaron: "\u0161", Sc: "\u2ABC", sc: "\u227B", sccue: "\u227D", sce: "\u2AB0", scE: "\u2AB4", Scedil: "\u015E", scedil: "\u015F", Scirc: "\u015C", scirc: "\u015D", scnap: "\u2ABA", scnE: "\u2AB6", scnsim: "\u22E9", scpolint: "\u2A13", scsim: "\u227F", Scy: "\u0421", scy: "\u0441", sdotb: "\u22A1", sdot: "\u22C5", sdote: "\u2A66", searhk: "\u2925", searr: "\u2198", seArr: "\u21D8", searrow: "\u2198", sect: "\xA7", semi: ";", seswar: "\u2929", setminus: "\u2216", setmn: "\u2216", sext: "\u2736", Sfr: "\u{1D516}", sfr: "\u{1D530}", sfrown: "\u2322", sharp: "\u266F", SHCHcy: "\u0429", shchcy: "\u0449", SHcy: "\u0428", shcy: "\u0448", ShortDownArrow: "\u2193", ShortLeftArrow: "\u2190", shortmid: "\u2223", shortparallel: "\u2225", ShortRightArrow: "\u2192", ShortUpArrow: "\u2191", shy: "\xAD", Sigma: "\u03A3", sigma: "\u03C3", sigmaf: "\u03C2", sigmav: "\u03C2", sim: "\u223C", simdot: "\u2A6A", sime: "\u2243", simeq: "\u2243", simg: "\u2A9E", simgE: "\u2AA0", siml: "\u2A9D", simlE: "\u2A9F", simne: "\u2246", simplus: "\u2A24", simrarr: "\u2972", slarr: "\u2190", SmallCircle: "\u2218", smallsetminus: "\u2216", smashp: "\u2A33", smeparsl: "\u29E4", smid: "\u2223", smile: "\u2323", smt: "\u2AAA", smte: "\u2AAC", smtes: "\u2AAC\uFE00", SOFTcy: "\u042C", softcy: "\u044C", solbar: "\u233F", solb: "\u29C4", sol: "/", Sopf: "\u{1D54A}", sopf: "\u{1D564}", spades: "\u2660", spadesuit: "\u2660", spar: "\u2225", sqcap: "\u2293", sqcaps: "\u2293\uFE00", sqcup: "\u2294", sqcups: "\u2294\uFE00", Sqrt: "\u221A", sqsub: "\u228F", sqsube: "\u2291", sqsubset: "\u228F", sqsubseteq: "\u2291", sqsup: "\u2290", sqsupe: "\u2292", sqsupset: "\u2290", sqsupseteq: "\u2292", square: "\u25A1", Square: "\u25A1", SquareIntersection: "\u2293", SquareSubset: "\u228F", SquareSubsetEqual: "\u2291", SquareSuperset: "\u2290", SquareSupersetEqual: "\u2292", SquareUnion: "\u2294", squarf: "\u25AA", squ: "\u25A1", squf: "\u25AA", srarr: "\u2192", Sscr: "\u{1D4AE}", sscr: "\u{1D4C8}", ssetmn: "\u2216", ssmile: "\u2323", sstarf: "\u22C6", Star: "\u22C6", star: "\u2606", starf: "\u2605", straightepsilon: "\u03F5", straightphi: "\u03D5", strns: "\xAF", sub: "\u2282", Sub: "\u22D0", subdot: "\u2ABD", subE: "\u2AC5", sube: "\u2286", subedot: "\u2AC3", submult: "\u2AC1", subnE: "\u2ACB", subne: "\u228A", subplus: "\u2ABF", subrarr: "\u2979", subset: "\u2282", Subset: "\u22D0", subseteq: "\u2286", subseteqq: "\u2AC5", SubsetEqual: "\u2286", subsetneq: "\u228A", subsetneqq: "\u2ACB", subsim: "\u2AC7", subsub: "\u2AD5", subsup: "\u2AD3", succapprox: "\u2AB8", succ: "\u227B", succcurlyeq: "\u227D", Succeeds: "\u227B", SucceedsEqual: "\u2AB0", SucceedsSlantEqual: "\u227D", SucceedsTilde: "\u227F", succeq: "\u2AB0", succnapprox: "\u2ABA", succneqq: "\u2AB6", succnsim: "\u22E9", succsim: "\u227F", SuchThat: "\u220B", sum: "\u2211", Sum: "\u2211", sung: "\u266A", sup1: "\xB9", sup2: "\xB2", sup3: "\xB3", sup: "\u2283", Sup: "\u22D1", supdot: "\u2ABE", supdsub: "\u2AD8", supE: "\u2AC6", supe: "\u2287", supedot: "\u2AC4", Superset: "\u2283", SupersetEqual: "\u2287", suphsol: "\u27C9", suphsub: "\u2AD7", suplarr: "\u297B", supmult: "\u2AC2", supnE: "\u2ACC", supne: "\u228B", supplus: "\u2AC0", supset: "\u2283", Supset: "\u22D1", supseteq: "\u2287", supseteqq: "\u2AC6", supsetneq: "\u228B", supsetneqq: "\u2ACC", supsim: "\u2AC8", supsub: "\u2AD4", supsup: "\u2AD6", swarhk: "\u2926", swarr: "\u2199", swArr: "\u21D9", swarrow: "\u2199", swnwar: "\u292A", szlig: "\xDF", Tab: "	", target: "\u2316", Tau: "\u03A4", tau: "\u03C4", tbrk: "\u23B4", Tcaron: "\u0164", tcaron: "\u0165", Tcedil: "\u0162", tcedil: "\u0163", Tcy: "\u0422", tcy: "\u0442", tdot: "\u20DB", telrec: "\u2315", Tfr: "\u{1D517}", tfr: "\u{1D531}", there4: "\u2234", therefore: "\u2234", Therefore: "\u2234", Theta: "\u0398", theta: "\u03B8", thetasym: "\u03D1", thetav: "\u03D1", thickapprox: "\u2248", thicksim: "\u223C", ThickSpace: "\u205F\u200A", ThinSpace: "\u2009", thinsp: "\u2009", thkap: "\u2248", thksim: "\u223C", THORN: "\xDE", thorn: "\xFE", tilde: "\u02DC", Tilde: "\u223C", TildeEqual: "\u2243", TildeFullEqual: "\u2245", TildeTilde: "\u2248", timesbar: "\u2A31", timesb: "\u22A0", times: "\xD7", timesd: "\u2A30", tint: "\u222D", toea: "\u2928", topbot: "\u2336", topcir: "\u2AF1", top: "\u22A4", Topf: "\u{1D54B}", topf: "\u{1D565}", topfork: "\u2ADA", tosa: "\u2929", tprime: "\u2034", trade: "\u2122", TRADE: "\u2122", triangle: "\u25B5", triangledown: "\u25BF", triangleleft: "\u25C3", trianglelefteq: "\u22B4", triangleq: "\u225C", triangleright: "\u25B9", trianglerighteq: "\u22B5", tridot: "\u25EC", trie: "\u225C", triminus: "\u2A3A", TripleDot: "\u20DB", triplus: "\u2A39", trisb: "\u29CD", tritime: "\u2A3B", trpezium: "\u23E2", Tscr: "\u{1D4AF}", tscr: "\u{1D4C9}", TScy: "\u0426", tscy: "\u0446", TSHcy: "\u040B", tshcy: "\u045B", Tstrok: "\u0166", tstrok: "\u0167", twixt: "\u226C", twoheadleftarrow: "\u219E", twoheadrightarrow: "\u21A0", Uacute: "\xDA", uacute: "\xFA", uarr: "\u2191", Uarr: "\u219F", uArr: "\u21D1", Uarrocir: "\u2949", Ubrcy: "\u040E", ubrcy: "\u045E", Ubreve: "\u016C", ubreve: "\u016D", Ucirc: "\xDB", ucirc: "\xFB", Ucy: "\u0423", ucy: "\u0443", udarr: "\u21C5", Udblac: "\u0170", udblac: "\u0171", udhar: "\u296E", ufisht: "\u297E", Ufr: "\u{1D518}", ufr: "\u{1D532}", Ugrave: "\xD9", ugrave: "\xF9", uHar: "\u2963", uharl: "\u21BF", uharr: "\u21BE", uhblk: "\u2580", ulcorn: "\u231C", ulcorner: "\u231C", ulcrop: "\u230F", ultri: "\u25F8", Umacr: "\u016A", umacr: "\u016B", uml: "\xA8", UnderBar: "_", UnderBrace: "\u23DF", UnderBracket: "\u23B5", UnderParenthesis: "\u23DD", Union: "\u22C3", UnionPlus: "\u228E", Uogon: "\u0172", uogon: "\u0173", Uopf: "\u{1D54C}", uopf: "\u{1D566}", UpArrowBar: "\u2912", uparrow: "\u2191", UpArrow: "\u2191", Uparrow: "\u21D1", UpArrowDownArrow: "\u21C5", updownarrow: "\u2195", UpDownArrow: "\u2195", Updownarrow: "\u21D5", UpEquilibrium: "\u296E", upharpoonleft: "\u21BF", upharpoonright: "\u21BE", uplus: "\u228E", UpperLeftArrow: "\u2196", UpperRightArrow: "\u2197", upsi: "\u03C5", Upsi: "\u03D2", upsih: "\u03D2", Upsilon: "\u03A5", upsilon: "\u03C5", UpTeeArrow: "\u21A5", UpTee: "\u22A5", upuparrows: "\u21C8", urcorn: "\u231D", urcorner: "\u231D", urcrop: "\u230E", Uring: "\u016E", uring: "\u016F", urtri: "\u25F9", Uscr: "\u{1D4B0}", uscr: "\u{1D4CA}", utdot: "\u22F0", Utilde: "\u0168", utilde: "\u0169", utri: "\u25B5", utrif: "\u25B4", uuarr: "\u21C8", Uuml: "\xDC", uuml: "\xFC", uwangle: "\u29A7", vangrt: "\u299C", varepsilon: "\u03F5", varkappa: "\u03F0", varnothing: "\u2205", varphi: "\u03D5", varpi: "\u03D6", varpropto: "\u221D", varr: "\u2195", vArr: "\u21D5", varrho: "\u03F1", varsigma: "\u03C2", varsubsetneq: "\u228A\uFE00", varsubsetneqq: "\u2ACB\uFE00", varsupsetneq: "\u228B\uFE00", varsupsetneqq: "\u2ACC\uFE00", vartheta: "\u03D1", vartriangleleft: "\u22B2", vartriangleright: "\u22B3", vBar: "\u2AE8", Vbar: "\u2AEB", vBarv: "\u2AE9", Vcy: "\u0412", vcy: "\u0432", vdash: "\u22A2", vDash: "\u22A8", Vdash: "\u22A9", VDash: "\u22AB", Vdashl: "\u2AE6", veebar: "\u22BB", vee: "\u2228", Vee: "\u22C1", veeeq: "\u225A", vellip: "\u22EE", verbar: "|", Verbar: "\u2016", vert: "|", Vert: "\u2016", VerticalBar: "\u2223", VerticalLine: "|", VerticalSeparator: "\u2758", VerticalTilde: "\u2240", VeryThinSpace: "\u200A", Vfr: "\u{1D519}", vfr: "\u{1D533}", vltri: "\u22B2", vnsub: "\u2282\u20D2", vnsup: "\u2283\u20D2", Vopf: "\u{1D54D}", vopf: "\u{1D567}", vprop: "\u221D", vrtri: "\u22B3", Vscr: "\u{1D4B1}", vscr: "\u{1D4CB}", vsubnE: "\u2ACB\uFE00", vsubne: "\u228A\uFE00", vsupnE: "\u2ACC\uFE00", vsupne: "\u228B\uFE00", Vvdash: "\u22AA", vzigzag: "\u299A", Wcirc: "\u0174", wcirc: "\u0175", wedbar: "\u2A5F", wedge: "\u2227", Wedge: "\u22C0", wedgeq: "\u2259", weierp: "\u2118", Wfr: "\u{1D51A}", wfr: "\u{1D534}", Wopf: "\u{1D54E}", wopf: "\u{1D568}", wp: "\u2118", wr: "\u2240", wreath: "\u2240", Wscr: "\u{1D4B2}", wscr: "\u{1D4CC}", xcap: "\u22C2", xcirc: "\u25EF", xcup: "\u22C3", xdtri: "\u25BD", Xfr: "\u{1D51B}", xfr: "\u{1D535}", xharr: "\u27F7", xhArr: "\u27FA", Xi: "\u039E", xi: "\u03BE", xlarr: "\u27F5", xlArr: "\u27F8", xmap: "\u27FC", xnis: "\u22FB", xodot: "\u2A00", Xopf: "\u{1D54F}", xopf: "\u{1D569}", xoplus: "\u2A01", xotime: "\u2A02", xrarr: "\u27F6", xrArr: "\u27F9", Xscr: "\u{1D4B3}", xscr: "\u{1D4CD}", xsqcup: "\u2A06", xuplus: "\u2A04", xutri: "\u25B3", xvee: "\u22C1", xwedge: "\u22C0", Yacute: "\xDD", yacute: "\xFD", YAcy: "\u042F", yacy: "\u044F", Ycirc: "\u0176", ycirc: "\u0177", Ycy: "\u042B", ycy: "\u044B", yen: "\xA5", Yfr: "\u{1D51C}", yfr: "\u{1D536}", YIcy: "\u0407", yicy: "\u0457", Yopf: "\u{1D550}", yopf: "\u{1D56A}", Yscr: "\u{1D4B4}", yscr: "\u{1D4CE}", YUcy: "\u042E", yucy: "\u044E", yuml: "\xFF", Yuml: "\u0178", Zacute: "\u0179", zacute: "\u017A", Zcaron: "\u017D", zcaron: "\u017E", Zcy: "\u0417", zcy: "\u0437", Zdot: "\u017B", zdot: "\u017C", zeetrf: "\u2128", ZeroWidthSpace: "\u200B", Zeta: "\u0396", zeta: "\u03B6", zfr: "\u{1D537}", Zfr: "\u2128", ZHcy: "\u0416", zhcy: "\u0436", zigrarr: "\u21DD", zopf: "\u{1D56B}", Zopf: "\u2124", Zscr: "\u{1D4B5}", zscr: "\u{1D4CF}", zwj: "\u200D", zwnj: "\u200C" };
    }
  });

  // node_modules/entities/lib/maps/legacy.json
  var require_legacy = __commonJS({
    "node_modules/entities/lib/maps/legacy.json"(exports, module) {
      module.exports = { Aacute: "\xC1", aacute: "\xE1", Acirc: "\xC2", acirc: "\xE2", acute: "\xB4", AElig: "\xC6", aelig: "\xE6", Agrave: "\xC0", agrave: "\xE0", amp: "&", AMP: "&", Aring: "\xC5", aring: "\xE5", Atilde: "\xC3", atilde: "\xE3", Auml: "\xC4", auml: "\xE4", brvbar: "\xA6", Ccedil: "\xC7", ccedil: "\xE7", cedil: "\xB8", cent: "\xA2", copy: "\xA9", COPY: "\xA9", curren: "\xA4", deg: "\xB0", divide: "\xF7", Eacute: "\xC9", eacute: "\xE9", Ecirc: "\xCA", ecirc: "\xEA", Egrave: "\xC8", egrave: "\xE8", ETH: "\xD0", eth: "\xF0", Euml: "\xCB", euml: "\xEB", frac12: "\xBD", frac14: "\xBC", frac34: "\xBE", gt: ">", GT: ">", Iacute: "\xCD", iacute: "\xED", Icirc: "\xCE", icirc: "\xEE", iexcl: "\xA1", Igrave: "\xCC", igrave: "\xEC", iquest: "\xBF", Iuml: "\xCF", iuml: "\xEF", laquo: "\xAB", lt: "<", LT: "<", macr: "\xAF", micro: "\xB5", middot: "\xB7", nbsp: "\xA0", not: "\xAC", Ntilde: "\xD1", ntilde: "\xF1", Oacute: "\xD3", oacute: "\xF3", Ocirc: "\xD4", ocirc: "\xF4", Ograve: "\xD2", ograve: "\xF2", ordf: "\xAA", ordm: "\xBA", Oslash: "\xD8", oslash: "\xF8", Otilde: "\xD5", otilde: "\xF5", Ouml: "\xD6", ouml: "\xF6", para: "\xB6", plusmn: "\xB1", pound: "\xA3", quot: '"', QUOT: '"', raquo: "\xBB", reg: "\xAE", REG: "\xAE", sect: "\xA7", shy: "\xAD", sup1: "\xB9", sup2: "\xB2", sup3: "\xB3", szlig: "\xDF", THORN: "\xDE", thorn: "\xFE", times: "\xD7", Uacute: "\xDA", uacute: "\xFA", Ucirc: "\xDB", ucirc: "\xFB", Ugrave: "\xD9", ugrave: "\xF9", uml: "\xA8", Uuml: "\xDC", uuml: "\xFC", Yacute: "\xDD", yacute: "\xFD", yen: "\xA5", yuml: "\xFF" };
    }
  });

  // node_modules/entities/lib/maps/xml.json
  var require_xml = __commonJS({
    "node_modules/entities/lib/maps/xml.json"(exports, module) {
      module.exports = { amp: "&", apos: "'", gt: ">", lt: "<", quot: '"' };
    }
  });

  // node_modules/htmlparser2/lib/Tokenizer.js
  var require_Tokenizer = __commonJS({
    "node_modules/htmlparser2/lib/Tokenizer.js"(exports) {
      init_preact_shim();
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var decode_codepoint_1 = __importDefault(require_decode_codepoint());
      var entities_json_1 = __importDefault(require_entities());
      var legacy_json_1 = __importDefault(require_legacy());
      var xml_json_1 = __importDefault(require_xml());
      function whitespace(c3) {
        return c3 === " " || c3 === "\n" || c3 === "	" || c3 === "\f" || c3 === "\r";
      }
      function isASCIIAlpha(c3) {
        return c3 >= "a" && c3 <= "z" || c3 >= "A" && c3 <= "Z";
      }
      function ifElseState(upper, SUCCESS, FAILURE) {
        var lower = upper.toLowerCase();
        if (upper === lower) {
          return function(t2, c3) {
            if (c3 === lower) {
              t2._state = SUCCESS;
            } else {
              t2._state = FAILURE;
              t2._index--;
            }
          };
        }
        return function(t2, c3) {
          if (c3 === lower || c3 === upper) {
            t2._state = SUCCESS;
          } else {
            t2._state = FAILURE;
            t2._index--;
          }
        };
      }
      function consumeSpecialNameChar(upper, NEXT_STATE) {
        var lower = upper.toLowerCase();
        return function(t2, c3) {
          if (c3 === lower || c3 === upper) {
            t2._state = NEXT_STATE;
          } else {
            t2._state = 3;
            t2._index--;
          }
        };
      }
      var stateBeforeCdata1 = ifElseState("C", 24, 16);
      var stateBeforeCdata2 = ifElseState("D", 25, 16);
      var stateBeforeCdata3 = ifElseState("A", 26, 16);
      var stateBeforeCdata4 = ifElseState("T", 27, 16);
      var stateBeforeCdata5 = ifElseState("A", 28, 16);
      var stateBeforeScript1 = consumeSpecialNameChar("R", 35);
      var stateBeforeScript2 = consumeSpecialNameChar("I", 36);
      var stateBeforeScript3 = consumeSpecialNameChar("P", 37);
      var stateBeforeScript4 = consumeSpecialNameChar("T", 38);
      var stateAfterScript1 = ifElseState("R", 40, 1);
      var stateAfterScript2 = ifElseState("I", 41, 1);
      var stateAfterScript3 = ifElseState("P", 42, 1);
      var stateAfterScript4 = ifElseState("T", 43, 1);
      var stateBeforeStyle1 = consumeSpecialNameChar("Y", 45);
      var stateBeforeStyle2 = consumeSpecialNameChar("L", 46);
      var stateBeforeStyle3 = consumeSpecialNameChar("E", 47);
      var stateAfterStyle1 = ifElseState("Y", 49, 1);
      var stateAfterStyle2 = ifElseState("L", 50, 1);
      var stateAfterStyle3 = ifElseState("E", 51, 1);
      var stateBeforeSpecialT = consumeSpecialNameChar("I", 54);
      var stateBeforeTitle1 = consumeSpecialNameChar("T", 55);
      var stateBeforeTitle2 = consumeSpecialNameChar("L", 56);
      var stateBeforeTitle3 = consumeSpecialNameChar("E", 57);
      var stateAfterSpecialTEnd = ifElseState("I", 58, 1);
      var stateAfterTitle1 = ifElseState("T", 59, 1);
      var stateAfterTitle2 = ifElseState("L", 60, 1);
      var stateAfterTitle3 = ifElseState("E", 61, 1);
      var stateBeforeEntity = ifElseState("#", 63, 64);
      var stateBeforeNumericEntity = ifElseState("X", 66, 65);
      var Tokenizer = function() {
        function Tokenizer2(options, cbs) {
          var _a;
          this._state = 1;
          this.buffer = "";
          this.sectionStart = 0;
          this._index = 0;
          this.bufferOffset = 0;
          this.baseState = 1;
          this.special = 1;
          this.running = true;
          this.ended = false;
          this.cbs = cbs;
          this.xmlMode = !!(options === null || options === void 0 ? void 0 : options.xmlMode);
          this.decodeEntities = (_a = options === null || options === void 0 ? void 0 : options.decodeEntities) !== null && _a !== void 0 ? _a : true;
        }
        Tokenizer2.prototype.reset = function() {
          this._state = 1;
          this.buffer = "";
          this.sectionStart = 0;
          this._index = 0;
          this.bufferOffset = 0;
          this.baseState = 1;
          this.special = 1;
          this.running = true;
          this.ended = false;
        };
        Tokenizer2.prototype.write = function(chunk) {
          if (this.ended)
            this.cbs.onerror(Error(".write() after done!"));
          this.buffer += chunk;
          this.parse();
        };
        Tokenizer2.prototype.end = function(chunk) {
          if (this.ended)
            this.cbs.onerror(Error(".end() after done!"));
          if (chunk)
            this.write(chunk);
          this.ended = true;
          if (this.running)
            this.finish();
        };
        Tokenizer2.prototype.pause = function() {
          this.running = false;
        };
        Tokenizer2.prototype.resume = function() {
          this.running = true;
          if (this._index < this.buffer.length) {
            this.parse();
          }
          if (this.ended) {
            this.finish();
          }
        };
        Tokenizer2.prototype.getAbsoluteIndex = function() {
          return this.bufferOffset + this._index;
        };
        Tokenizer2.prototype.stateText = function(c3) {
          if (c3 === "<") {
            if (this._index > this.sectionStart) {
              this.cbs.ontext(this.getSection());
            }
            this._state = 2;
            this.sectionStart = this._index;
          } else if (this.decodeEntities && c3 === "&" && (this.special === 1 || this.special === 4)) {
            if (this._index > this.sectionStart) {
              this.cbs.ontext(this.getSection());
            }
            this.baseState = 1;
            this._state = 62;
            this.sectionStart = this._index;
          }
        };
        Tokenizer2.prototype.isTagStartChar = function(c3) {
          return isASCIIAlpha(c3) || this.xmlMode && !whitespace(c3) && c3 !== "/" && c3 !== ">";
        };
        Tokenizer2.prototype.stateBeforeTagName = function(c3) {
          if (c3 === "/") {
            this._state = 5;
          } else if (c3 === "<") {
            this.cbs.ontext(this.getSection());
            this.sectionStart = this._index;
          } else if (c3 === ">" || this.special !== 1 || whitespace(c3)) {
            this._state = 1;
          } else if (c3 === "!") {
            this._state = 15;
            this.sectionStart = this._index + 1;
          } else if (c3 === "?") {
            this._state = 17;
            this.sectionStart = this._index + 1;
          } else if (!this.isTagStartChar(c3)) {
            this._state = 1;
          } else {
            this._state = !this.xmlMode && (c3 === "s" || c3 === "S") ? 32 : !this.xmlMode && (c3 === "t" || c3 === "T") ? 52 : 3;
            this.sectionStart = this._index;
          }
        };
        Tokenizer2.prototype.stateInTagName = function(c3) {
          if (c3 === "/" || c3 === ">" || whitespace(c3)) {
            this.emitToken("onopentagname");
            this._state = 8;
            this._index--;
          }
        };
        Tokenizer2.prototype.stateBeforeClosingTagName = function(c3) {
          if (whitespace(c3)) {
          } else if (c3 === ">") {
            this._state = 1;
          } else if (this.special !== 1) {
            if (this.special !== 4 && (c3 === "s" || c3 === "S")) {
              this._state = 33;
            } else if (this.special === 4 && (c3 === "t" || c3 === "T")) {
              this._state = 53;
            } else {
              this._state = 1;
              this._index--;
            }
          } else if (!this.isTagStartChar(c3)) {
            this._state = 20;
            this.sectionStart = this._index;
          } else {
            this._state = 6;
            this.sectionStart = this._index;
          }
        };
        Tokenizer2.prototype.stateInClosingTagName = function(c3) {
          if (c3 === ">" || whitespace(c3)) {
            this.emitToken("onclosetag");
            this._state = 7;
            this._index--;
          }
        };
        Tokenizer2.prototype.stateAfterClosingTagName = function(c3) {
          if (c3 === ">") {
            this._state = 1;
            this.sectionStart = this._index + 1;
          }
        };
        Tokenizer2.prototype.stateBeforeAttributeName = function(c3) {
          if (c3 === ">") {
            this.cbs.onopentagend();
            this._state = 1;
            this.sectionStart = this._index + 1;
          } else if (c3 === "/") {
            this._state = 4;
          } else if (!whitespace(c3)) {
            this._state = 9;
            this.sectionStart = this._index;
          }
        };
        Tokenizer2.prototype.stateInSelfClosingTag = function(c3) {
          if (c3 === ">") {
            this.cbs.onselfclosingtag();
            this._state = 1;
            this.sectionStart = this._index + 1;
            this.special = 1;
          } else if (!whitespace(c3)) {
            this._state = 8;
            this._index--;
          }
        };
        Tokenizer2.prototype.stateInAttributeName = function(c3) {
          if (c3 === "=" || c3 === "/" || c3 === ">" || whitespace(c3)) {
            this.cbs.onattribname(this.getSection());
            this.sectionStart = -1;
            this._state = 10;
            this._index--;
          }
        };
        Tokenizer2.prototype.stateAfterAttributeName = function(c3) {
          if (c3 === "=") {
            this._state = 11;
          } else if (c3 === "/" || c3 === ">") {
            this.cbs.onattribend(void 0);
            this._state = 8;
            this._index--;
          } else if (!whitespace(c3)) {
            this.cbs.onattribend(void 0);
            this._state = 9;
            this.sectionStart = this._index;
          }
        };
        Tokenizer2.prototype.stateBeforeAttributeValue = function(c3) {
          if (c3 === '"') {
            this._state = 12;
            this.sectionStart = this._index + 1;
          } else if (c3 === "'") {
            this._state = 13;
            this.sectionStart = this._index + 1;
          } else if (!whitespace(c3)) {
            this._state = 14;
            this.sectionStart = this._index;
            this._index--;
          }
        };
        Tokenizer2.prototype.handleInAttributeValue = function(c3, quote) {
          if (c3 === quote) {
            this.emitToken("onattribdata");
            this.cbs.onattribend(quote);
            this._state = 8;
          } else if (this.decodeEntities && c3 === "&") {
            this.emitToken("onattribdata");
            this.baseState = this._state;
            this._state = 62;
            this.sectionStart = this._index;
          }
        };
        Tokenizer2.prototype.stateInAttributeValueDoubleQuotes = function(c3) {
          this.handleInAttributeValue(c3, '"');
        };
        Tokenizer2.prototype.stateInAttributeValueSingleQuotes = function(c3) {
          this.handleInAttributeValue(c3, "'");
        };
        Tokenizer2.prototype.stateInAttributeValueNoQuotes = function(c3) {
          if (whitespace(c3) || c3 === ">") {
            this.emitToken("onattribdata");
            this.cbs.onattribend(null);
            this._state = 8;
            this._index--;
          } else if (this.decodeEntities && c3 === "&") {
            this.emitToken("onattribdata");
            this.baseState = this._state;
            this._state = 62;
            this.sectionStart = this._index;
          }
        };
        Tokenizer2.prototype.stateBeforeDeclaration = function(c3) {
          this._state = c3 === "[" ? 23 : c3 === "-" ? 18 : 16;
        };
        Tokenizer2.prototype.stateInDeclaration = function(c3) {
          if (c3 === ">") {
            this.cbs.ondeclaration(this.getSection());
            this._state = 1;
            this.sectionStart = this._index + 1;
          }
        };
        Tokenizer2.prototype.stateInProcessingInstruction = function(c3) {
          if (c3 === ">") {
            this.cbs.onprocessinginstruction(this.getSection());
            this._state = 1;
            this.sectionStart = this._index + 1;
          }
        };
        Tokenizer2.prototype.stateBeforeComment = function(c3) {
          if (c3 === "-") {
            this._state = 19;
            this.sectionStart = this._index + 1;
          } else {
            this._state = 16;
          }
        };
        Tokenizer2.prototype.stateInComment = function(c3) {
          if (c3 === "-")
            this._state = 21;
        };
        Tokenizer2.prototype.stateInSpecialComment = function(c3) {
          if (c3 === ">") {
            this.cbs.oncomment(this.buffer.substring(this.sectionStart, this._index));
            this._state = 1;
            this.sectionStart = this._index + 1;
          }
        };
        Tokenizer2.prototype.stateAfterComment1 = function(c3) {
          if (c3 === "-") {
            this._state = 22;
          } else {
            this._state = 19;
          }
        };
        Tokenizer2.prototype.stateAfterComment2 = function(c3) {
          if (c3 === ">") {
            this.cbs.oncomment(this.buffer.substring(this.sectionStart, this._index - 2));
            this._state = 1;
            this.sectionStart = this._index + 1;
          } else if (c3 !== "-") {
            this._state = 19;
          }
        };
        Tokenizer2.prototype.stateBeforeCdata6 = function(c3) {
          if (c3 === "[") {
            this._state = 29;
            this.sectionStart = this._index + 1;
          } else {
            this._state = 16;
            this._index--;
          }
        };
        Tokenizer2.prototype.stateInCdata = function(c3) {
          if (c3 === "]")
            this._state = 30;
        };
        Tokenizer2.prototype.stateAfterCdata1 = function(c3) {
          if (c3 === "]")
            this._state = 31;
          else
            this._state = 29;
        };
        Tokenizer2.prototype.stateAfterCdata2 = function(c3) {
          if (c3 === ">") {
            this.cbs.oncdata(this.buffer.substring(this.sectionStart, this._index - 2));
            this._state = 1;
            this.sectionStart = this._index + 1;
          } else if (c3 !== "]") {
            this._state = 29;
          }
        };
        Tokenizer2.prototype.stateBeforeSpecialS = function(c3) {
          if (c3 === "c" || c3 === "C") {
            this._state = 34;
          } else if (c3 === "t" || c3 === "T") {
            this._state = 44;
          } else {
            this._state = 3;
            this._index--;
          }
        };
        Tokenizer2.prototype.stateBeforeSpecialSEnd = function(c3) {
          if (this.special === 2 && (c3 === "c" || c3 === "C")) {
            this._state = 39;
          } else if (this.special === 3 && (c3 === "t" || c3 === "T")) {
            this._state = 48;
          } else
            this._state = 1;
        };
        Tokenizer2.prototype.stateBeforeSpecialLast = function(c3, special) {
          if (c3 === "/" || c3 === ">" || whitespace(c3)) {
            this.special = special;
          }
          this._state = 3;
          this._index--;
        };
        Tokenizer2.prototype.stateAfterSpecialLast = function(c3, sectionStartOffset) {
          if (c3 === ">" || whitespace(c3)) {
            this.special = 1;
            this._state = 6;
            this.sectionStart = this._index - sectionStartOffset;
            this._index--;
          } else
            this._state = 1;
        };
        Tokenizer2.prototype.parseFixedEntity = function(map) {
          if (map === void 0) {
            map = this.xmlMode ? xml_json_1.default : entities_json_1.default;
          }
          if (this.sectionStart + 1 < this._index) {
            var entity = this.buffer.substring(this.sectionStart + 1, this._index);
            if (Object.prototype.hasOwnProperty.call(map, entity)) {
              this.emitPartial(map[entity]);
              this.sectionStart = this._index + 1;
            }
          }
        };
        Tokenizer2.prototype.parseLegacyEntity = function() {
          var start = this.sectionStart + 1;
          var limit = Math.min(this._index - start, 6);
          while (limit >= 2) {
            var entity = this.buffer.substr(start, limit);
            if (Object.prototype.hasOwnProperty.call(legacy_json_1.default, entity)) {
              this.emitPartial(legacy_json_1.default[entity]);
              this.sectionStart += limit + 1;
              return;
            }
            limit--;
          }
        };
        Tokenizer2.prototype.stateInNamedEntity = function(c3) {
          if (c3 === ";") {
            this.parseFixedEntity();
            if (this.baseState === 1 && this.sectionStart + 1 < this._index && !this.xmlMode) {
              this.parseLegacyEntity();
            }
            this._state = this.baseState;
          } else if ((c3 < "0" || c3 > "9") && !isASCIIAlpha(c3)) {
            if (this.xmlMode || this.sectionStart + 1 === this._index) {
            } else if (this.baseState !== 1) {
              if (c3 !== "=") {
                this.parseFixedEntity(legacy_json_1.default);
              }
            } else {
              this.parseLegacyEntity();
            }
            this._state = this.baseState;
            this._index--;
          }
        };
        Tokenizer2.prototype.decodeNumericEntity = function(offset, base, strict) {
          var sectionStart = this.sectionStart + offset;
          if (sectionStart !== this._index) {
            var entity = this.buffer.substring(sectionStart, this._index);
            var parsed = parseInt(entity, base);
            this.emitPartial(decode_codepoint_1.default(parsed));
            this.sectionStart = strict ? this._index + 1 : this._index;
          }
          this._state = this.baseState;
        };
        Tokenizer2.prototype.stateInNumericEntity = function(c3) {
          if (c3 === ";") {
            this.decodeNumericEntity(2, 10, true);
          } else if (c3 < "0" || c3 > "9") {
            if (!this.xmlMode) {
              this.decodeNumericEntity(2, 10, false);
            } else {
              this._state = this.baseState;
            }
            this._index--;
          }
        };
        Tokenizer2.prototype.stateInHexEntity = function(c3) {
          if (c3 === ";") {
            this.decodeNumericEntity(3, 16, true);
          } else if ((c3 < "a" || c3 > "f") && (c3 < "A" || c3 > "F") && (c3 < "0" || c3 > "9")) {
            if (!this.xmlMode) {
              this.decodeNumericEntity(3, 16, false);
            } else {
              this._state = this.baseState;
            }
            this._index--;
          }
        };
        Tokenizer2.prototype.cleanup = function() {
          if (this.sectionStart < 0) {
            this.buffer = "";
            this.bufferOffset += this._index;
            this._index = 0;
          } else if (this.running) {
            if (this._state === 1) {
              if (this.sectionStart !== this._index) {
                this.cbs.ontext(this.buffer.substr(this.sectionStart));
              }
              this.buffer = "";
              this.bufferOffset += this._index;
              this._index = 0;
            } else if (this.sectionStart === this._index) {
              this.buffer = "";
              this.bufferOffset += this._index;
              this._index = 0;
            } else {
              this.buffer = this.buffer.substr(this.sectionStart);
              this._index -= this.sectionStart;
              this.bufferOffset += this.sectionStart;
            }
            this.sectionStart = 0;
          }
        };
        Tokenizer2.prototype.parse = function() {
          while (this._index < this.buffer.length && this.running) {
            var c3 = this.buffer.charAt(this._index);
            if (this._state === 1) {
              this.stateText(c3);
            } else if (this._state === 12) {
              this.stateInAttributeValueDoubleQuotes(c3);
            } else if (this._state === 9) {
              this.stateInAttributeName(c3);
            } else if (this._state === 19) {
              this.stateInComment(c3);
            } else if (this._state === 20) {
              this.stateInSpecialComment(c3);
            } else if (this._state === 8) {
              this.stateBeforeAttributeName(c3);
            } else if (this._state === 3) {
              this.stateInTagName(c3);
            } else if (this._state === 6) {
              this.stateInClosingTagName(c3);
            } else if (this._state === 2) {
              this.stateBeforeTagName(c3);
            } else if (this._state === 10) {
              this.stateAfterAttributeName(c3);
            } else if (this._state === 13) {
              this.stateInAttributeValueSingleQuotes(c3);
            } else if (this._state === 11) {
              this.stateBeforeAttributeValue(c3);
            } else if (this._state === 5) {
              this.stateBeforeClosingTagName(c3);
            } else if (this._state === 7) {
              this.stateAfterClosingTagName(c3);
            } else if (this._state === 32) {
              this.stateBeforeSpecialS(c3);
            } else if (this._state === 21) {
              this.stateAfterComment1(c3);
            } else if (this._state === 14) {
              this.stateInAttributeValueNoQuotes(c3);
            } else if (this._state === 4) {
              this.stateInSelfClosingTag(c3);
            } else if (this._state === 16) {
              this.stateInDeclaration(c3);
            } else if (this._state === 15) {
              this.stateBeforeDeclaration(c3);
            } else if (this._state === 22) {
              this.stateAfterComment2(c3);
            } else if (this._state === 18) {
              this.stateBeforeComment(c3);
            } else if (this._state === 33) {
              this.stateBeforeSpecialSEnd(c3);
            } else if (this._state === 53) {
              stateAfterSpecialTEnd(this, c3);
            } else if (this._state === 39) {
              stateAfterScript1(this, c3);
            } else if (this._state === 40) {
              stateAfterScript2(this, c3);
            } else if (this._state === 41) {
              stateAfterScript3(this, c3);
            } else if (this._state === 34) {
              stateBeforeScript1(this, c3);
            } else if (this._state === 35) {
              stateBeforeScript2(this, c3);
            } else if (this._state === 36) {
              stateBeforeScript3(this, c3);
            } else if (this._state === 37) {
              stateBeforeScript4(this, c3);
            } else if (this._state === 38) {
              this.stateBeforeSpecialLast(c3, 2);
            } else if (this._state === 42) {
              stateAfterScript4(this, c3);
            } else if (this._state === 43) {
              this.stateAfterSpecialLast(c3, 6);
            } else if (this._state === 44) {
              stateBeforeStyle1(this, c3);
            } else if (this._state === 29) {
              this.stateInCdata(c3);
            } else if (this._state === 45) {
              stateBeforeStyle2(this, c3);
            } else if (this._state === 46) {
              stateBeforeStyle3(this, c3);
            } else if (this._state === 47) {
              this.stateBeforeSpecialLast(c3, 3);
            } else if (this._state === 48) {
              stateAfterStyle1(this, c3);
            } else if (this._state === 49) {
              stateAfterStyle2(this, c3);
            } else if (this._state === 50) {
              stateAfterStyle3(this, c3);
            } else if (this._state === 51) {
              this.stateAfterSpecialLast(c3, 5);
            } else if (this._state === 52) {
              stateBeforeSpecialT(this, c3);
            } else if (this._state === 54) {
              stateBeforeTitle1(this, c3);
            } else if (this._state === 55) {
              stateBeforeTitle2(this, c3);
            } else if (this._state === 56) {
              stateBeforeTitle3(this, c3);
            } else if (this._state === 57) {
              this.stateBeforeSpecialLast(c3, 4);
            } else if (this._state === 58) {
              stateAfterTitle1(this, c3);
            } else if (this._state === 59) {
              stateAfterTitle2(this, c3);
            } else if (this._state === 60) {
              stateAfterTitle3(this, c3);
            } else if (this._state === 61) {
              this.stateAfterSpecialLast(c3, 5);
            } else if (this._state === 17) {
              this.stateInProcessingInstruction(c3);
            } else if (this._state === 64) {
              this.stateInNamedEntity(c3);
            } else if (this._state === 23) {
              stateBeforeCdata1(this, c3);
            } else if (this._state === 62) {
              stateBeforeEntity(this, c3);
            } else if (this._state === 24) {
              stateBeforeCdata2(this, c3);
            } else if (this._state === 25) {
              stateBeforeCdata3(this, c3);
            } else if (this._state === 30) {
              this.stateAfterCdata1(c3);
            } else if (this._state === 31) {
              this.stateAfterCdata2(c3);
            } else if (this._state === 26) {
              stateBeforeCdata4(this, c3);
            } else if (this._state === 27) {
              stateBeforeCdata5(this, c3);
            } else if (this._state === 28) {
              this.stateBeforeCdata6(c3);
            } else if (this._state === 66) {
              this.stateInHexEntity(c3);
            } else if (this._state === 65) {
              this.stateInNumericEntity(c3);
            } else if (this._state === 63) {
              stateBeforeNumericEntity(this, c3);
            } else {
              this.cbs.onerror(Error("unknown _state"), this._state);
            }
            this._index++;
          }
          this.cleanup();
        };
        Tokenizer2.prototype.finish = function() {
          if (this.sectionStart < this._index) {
            this.handleTrailingData();
          }
          this.cbs.onend();
        };
        Tokenizer2.prototype.handleTrailingData = function() {
          var data = this.buffer.substr(this.sectionStart);
          if (this._state === 29 || this._state === 30 || this._state === 31) {
            this.cbs.oncdata(data);
          } else if (this._state === 19 || this._state === 21 || this._state === 22) {
            this.cbs.oncomment(data);
          } else if (this._state === 64 && !this.xmlMode) {
            this.parseLegacyEntity();
            if (this.sectionStart < this._index) {
              this._state = this.baseState;
              this.handleTrailingData();
            }
          } else if (this._state === 65 && !this.xmlMode) {
            this.decodeNumericEntity(2, 10, false);
            if (this.sectionStart < this._index) {
              this._state = this.baseState;
              this.handleTrailingData();
            }
          } else if (this._state === 66 && !this.xmlMode) {
            this.decodeNumericEntity(3, 16, false);
            if (this.sectionStart < this._index) {
              this._state = this.baseState;
              this.handleTrailingData();
            }
          } else if (this._state !== 3 && this._state !== 8 && this._state !== 11 && this._state !== 10 && this._state !== 9 && this._state !== 13 && this._state !== 12 && this._state !== 14 && this._state !== 6) {
            this.cbs.ontext(data);
          }
        };
        Tokenizer2.prototype.getSection = function() {
          return this.buffer.substring(this.sectionStart, this._index);
        };
        Tokenizer2.prototype.emitToken = function(name) {
          this.cbs[name](this.getSection());
          this.sectionStart = -1;
        };
        Tokenizer2.prototype.emitPartial = function(value) {
          if (this.baseState !== 1) {
            this.cbs.onattribdata(value);
          } else {
            this.cbs.ontext(value);
          }
        };
        return Tokenizer2;
      }();
      exports.default = Tokenizer;
    }
  });

  // node_modules/htmlparser2/lib/Parser.js
  var require_Parser = __commonJS({
    "node_modules/htmlparser2/lib/Parser.js"(exports) {
      init_preact_shim();
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Parser = void 0;
      var Tokenizer_1 = __importDefault(require_Tokenizer());
      var formTags = new Set([
        "input",
        "option",
        "optgroup",
        "select",
        "button",
        "datalist",
        "textarea"
      ]);
      var pTag = new Set(["p"]);
      var openImpliesClose = {
        tr: new Set(["tr", "th", "td"]),
        th: new Set(["th"]),
        td: new Set(["thead", "th", "td"]),
        body: new Set(["head", "link", "script"]),
        li: new Set(["li"]),
        p: pTag,
        h1: pTag,
        h2: pTag,
        h3: pTag,
        h4: pTag,
        h5: pTag,
        h6: pTag,
        select: formTags,
        input: formTags,
        output: formTags,
        button: formTags,
        datalist: formTags,
        textarea: formTags,
        option: new Set(["option"]),
        optgroup: new Set(["optgroup", "option"]),
        dd: new Set(["dt", "dd"]),
        dt: new Set(["dt", "dd"]),
        address: pTag,
        article: pTag,
        aside: pTag,
        blockquote: pTag,
        details: pTag,
        div: pTag,
        dl: pTag,
        fieldset: pTag,
        figcaption: pTag,
        figure: pTag,
        footer: pTag,
        form: pTag,
        header: pTag,
        hr: pTag,
        main: pTag,
        nav: pTag,
        ol: pTag,
        pre: pTag,
        section: pTag,
        table: pTag,
        ul: pTag,
        rt: new Set(["rt", "rp"]),
        rp: new Set(["rt", "rp"]),
        tbody: new Set(["thead", "tbody"]),
        tfoot: new Set(["thead", "tbody"])
      };
      var voidElements = new Set([
        "area",
        "base",
        "basefont",
        "br",
        "col",
        "command",
        "embed",
        "frame",
        "hr",
        "img",
        "input",
        "isindex",
        "keygen",
        "link",
        "meta",
        "param",
        "source",
        "track",
        "wbr"
      ]);
      var foreignContextElements = new Set(["math", "svg"]);
      var htmlIntegrationElements = new Set([
        "mi",
        "mo",
        "mn",
        "ms",
        "mtext",
        "annotation-xml",
        "foreignObject",
        "desc",
        "title"
      ]);
      var reNameEnd = /\s|\//;
      var Parser = function() {
        function Parser2(cbs, options) {
          if (options === void 0) {
            options = {};
          }
          var _a, _b, _c, _d, _e;
          this.startIndex = 0;
          this.endIndex = null;
          this.tagname = "";
          this.attribname = "";
          this.attribvalue = "";
          this.attribs = null;
          this.stack = [];
          this.foreignContext = [];
          this.options = options;
          this.cbs = cbs !== null && cbs !== void 0 ? cbs : {};
          this.lowerCaseTagNames = (_a = options.lowerCaseTags) !== null && _a !== void 0 ? _a : !options.xmlMode;
          this.lowerCaseAttributeNames = (_b = options.lowerCaseAttributeNames) !== null && _b !== void 0 ? _b : !options.xmlMode;
          this.tokenizer = new ((_c = options.Tokenizer) !== null && _c !== void 0 ? _c : Tokenizer_1.default)(this.options, this);
          (_e = (_d = this.cbs).onparserinit) === null || _e === void 0 ? void 0 : _e.call(_d, this);
        }
        Parser2.prototype.updatePosition = function(initialOffset) {
          if (this.endIndex === null) {
            if (this.tokenizer.sectionStart <= initialOffset) {
              this.startIndex = 0;
            } else {
              this.startIndex = this.tokenizer.sectionStart - initialOffset;
            }
          } else {
            this.startIndex = this.endIndex + 1;
          }
          this.endIndex = this.tokenizer.getAbsoluteIndex();
        };
        Parser2.prototype.ontext = function(data) {
          var _a, _b;
          this.updatePosition(1);
          this.endIndex--;
          (_b = (_a = this.cbs).ontext) === null || _b === void 0 ? void 0 : _b.call(_a, data);
        };
        Parser2.prototype.onopentagname = function(name) {
          var _a, _b;
          if (this.lowerCaseTagNames) {
            name = name.toLowerCase();
          }
          this.tagname = name;
          if (!this.options.xmlMode && Object.prototype.hasOwnProperty.call(openImpliesClose, name)) {
            var el = void 0;
            while (this.stack.length > 0 && openImpliesClose[name].has(el = this.stack[this.stack.length - 1])) {
              this.onclosetag(el);
            }
          }
          if (this.options.xmlMode || !voidElements.has(name)) {
            this.stack.push(name);
            if (foreignContextElements.has(name)) {
              this.foreignContext.push(true);
            } else if (htmlIntegrationElements.has(name)) {
              this.foreignContext.push(false);
            }
          }
          (_b = (_a = this.cbs).onopentagname) === null || _b === void 0 ? void 0 : _b.call(_a, name);
          if (this.cbs.onopentag)
            this.attribs = {};
        };
        Parser2.prototype.onopentagend = function() {
          var _a, _b;
          this.updatePosition(1);
          if (this.attribs) {
            (_b = (_a = this.cbs).onopentag) === null || _b === void 0 ? void 0 : _b.call(_a, this.tagname, this.attribs);
            this.attribs = null;
          }
          if (!this.options.xmlMode && this.cbs.onclosetag && voidElements.has(this.tagname)) {
            this.cbs.onclosetag(this.tagname);
          }
          this.tagname = "";
        };
        Parser2.prototype.onclosetag = function(name) {
          this.updatePosition(1);
          if (this.lowerCaseTagNames) {
            name = name.toLowerCase();
          }
          if (foreignContextElements.has(name) || htmlIntegrationElements.has(name)) {
            this.foreignContext.pop();
          }
          if (this.stack.length && (this.options.xmlMode || !voidElements.has(name))) {
            var pos = this.stack.lastIndexOf(name);
            if (pos !== -1) {
              if (this.cbs.onclosetag) {
                pos = this.stack.length - pos;
                while (pos--) {
                  this.cbs.onclosetag(this.stack.pop());
                }
              } else
                this.stack.length = pos;
            } else if (name === "p" && !this.options.xmlMode) {
              this.onopentagname(name);
              this.closeCurrentTag();
            }
          } else if (!this.options.xmlMode && (name === "br" || name === "p")) {
            this.onopentagname(name);
            this.closeCurrentTag();
          }
        };
        Parser2.prototype.onselfclosingtag = function() {
          if (this.options.xmlMode || this.options.recognizeSelfClosing || this.foreignContext[this.foreignContext.length - 1]) {
            this.closeCurrentTag();
          } else {
            this.onopentagend();
          }
        };
        Parser2.prototype.closeCurrentTag = function() {
          var _a, _b;
          var name = this.tagname;
          this.onopentagend();
          if (this.stack[this.stack.length - 1] === name) {
            (_b = (_a = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a, name);
            this.stack.pop();
          }
        };
        Parser2.prototype.onattribname = function(name) {
          if (this.lowerCaseAttributeNames) {
            name = name.toLowerCase();
          }
          this.attribname = name;
        };
        Parser2.prototype.onattribdata = function(value) {
          this.attribvalue += value;
        };
        Parser2.prototype.onattribend = function(quote) {
          var _a, _b;
          (_b = (_a = this.cbs).onattribute) === null || _b === void 0 ? void 0 : _b.call(_a, this.attribname, this.attribvalue, quote);
          if (this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname)) {
            this.attribs[this.attribname] = this.attribvalue;
          }
          this.attribname = "";
          this.attribvalue = "";
        };
        Parser2.prototype.getInstructionName = function(value) {
          var idx = value.search(reNameEnd);
          var name = idx < 0 ? value : value.substr(0, idx);
          if (this.lowerCaseTagNames) {
            name = name.toLowerCase();
          }
          return name;
        };
        Parser2.prototype.ondeclaration = function(value) {
          if (this.cbs.onprocessinginstruction) {
            var name_1 = this.getInstructionName(value);
            this.cbs.onprocessinginstruction("!" + name_1, "!" + value);
          }
        };
        Parser2.prototype.onprocessinginstruction = function(value) {
          if (this.cbs.onprocessinginstruction) {
            var name_2 = this.getInstructionName(value);
            this.cbs.onprocessinginstruction("?" + name_2, "?" + value);
          }
        };
        Parser2.prototype.oncomment = function(value) {
          var _a, _b, _c, _d;
          this.updatePosition(4);
          (_b = (_a = this.cbs).oncomment) === null || _b === void 0 ? void 0 : _b.call(_a, value);
          (_d = (_c = this.cbs).oncommentend) === null || _d === void 0 ? void 0 : _d.call(_c);
        };
        Parser2.prototype.oncdata = function(value) {
          var _a, _b, _c, _d, _e, _f;
          this.updatePosition(1);
          if (this.options.xmlMode || this.options.recognizeCDATA) {
            (_b = (_a = this.cbs).oncdatastart) === null || _b === void 0 ? void 0 : _b.call(_a);
            (_d = (_c = this.cbs).ontext) === null || _d === void 0 ? void 0 : _d.call(_c, value);
            (_f = (_e = this.cbs).oncdataend) === null || _f === void 0 ? void 0 : _f.call(_e);
          } else {
            this.oncomment("[CDATA[" + value + "]]");
          }
        };
        Parser2.prototype.onerror = function(err) {
          var _a, _b;
          (_b = (_a = this.cbs).onerror) === null || _b === void 0 ? void 0 : _b.call(_a, err);
        };
        Parser2.prototype.onend = function() {
          var _a, _b;
          if (this.cbs.onclosetag) {
            for (var i3 = this.stack.length; i3 > 0; this.cbs.onclosetag(this.stack[--i3]))
              ;
          }
          (_b = (_a = this.cbs).onend) === null || _b === void 0 ? void 0 : _b.call(_a);
        };
        Parser2.prototype.reset = function() {
          var _a, _b, _c, _d;
          (_b = (_a = this.cbs).onreset) === null || _b === void 0 ? void 0 : _b.call(_a);
          this.tokenizer.reset();
          this.tagname = "";
          this.attribname = "";
          this.attribs = null;
          this.stack = [];
          (_d = (_c = this.cbs).onparserinit) === null || _d === void 0 ? void 0 : _d.call(_c, this);
        };
        Parser2.prototype.parseComplete = function(data) {
          this.reset();
          this.end(data);
        };
        Parser2.prototype.write = function(chunk) {
          this.tokenizer.write(chunk);
        };
        Parser2.prototype.end = function(chunk) {
          this.tokenizer.end(chunk);
        };
        Parser2.prototype.pause = function() {
          this.tokenizer.pause();
        };
        Parser2.prototype.resume = function() {
          this.tokenizer.resume();
        };
        Parser2.prototype.parseChunk = function(chunk) {
          this.write(chunk);
        };
        Parser2.prototype.done = function(chunk) {
          this.end(chunk);
        };
        return Parser2;
      }();
      exports.Parser = Parser;
    }
  });

  // node_modules/domelementtype/lib/index.js
  var require_lib = __commonJS({
    "node_modules/domelementtype/lib/index.js"(exports) {
      init_preact_shim();
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Doctype = exports.CDATA = exports.Tag = exports.Style = exports.Script = exports.Comment = exports.Directive = exports.Text = exports.Root = exports.isTag = exports.ElementType = void 0;
      var ElementType;
      (function(ElementType2) {
        ElementType2["Root"] = "root";
        ElementType2["Text"] = "text";
        ElementType2["Directive"] = "directive";
        ElementType2["Comment"] = "comment";
        ElementType2["Script"] = "script";
        ElementType2["Style"] = "style";
        ElementType2["Tag"] = "tag";
        ElementType2["CDATA"] = "cdata";
        ElementType2["Doctype"] = "doctype";
      })(ElementType = exports.ElementType || (exports.ElementType = {}));
      function isTag(elem) {
        return elem.type === ElementType.Tag || elem.type === ElementType.Script || elem.type === ElementType.Style;
      }
      exports.isTag = isTag;
      exports.Root = ElementType.Root;
      exports.Text = ElementType.Text;
      exports.Directive = ElementType.Directive;
      exports.Comment = ElementType.Comment;
      exports.Script = ElementType.Script;
      exports.Style = ElementType.Style;
      exports.Tag = ElementType.Tag;
      exports.CDATA = ElementType.CDATA;
      exports.Doctype = ElementType.Doctype;
    }
  });

  // node_modules/domhandler/lib/node.js
  var require_node = __commonJS({
    "node_modules/domhandler/lib/node.js"(exports) {
      init_preact_shim();
      "use strict";
      var __extends = exports && exports.__extends || function() {
        var extendStatics = function(d2, b2) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
            d3.__proto__ = b3;
          } || function(d3, b3) {
            for (var p in b3)
              if (Object.prototype.hasOwnProperty.call(b3, p))
                d3[p] = b3[p];
          };
          return extendStatics(d2, b2);
        };
        return function(d2, b2) {
          if (typeof b2 !== "function" && b2 !== null)
            throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
          extendStatics(d2, b2);
          function __() {
            this.constructor = d2;
          }
          d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
        };
      }();
      var __assign = exports && exports.__assign || function() {
        __assign = Object.assign || function(t2) {
          for (var s3, i3 = 1, n2 = arguments.length; i3 < n2; i3++) {
            s3 = arguments[i3];
            for (var p in s3)
              if (Object.prototype.hasOwnProperty.call(s3, p))
                t2[p] = s3[p];
          }
          return t2;
        };
        return __assign.apply(this, arguments);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.cloneNode = exports.hasChildren = exports.isDocument = exports.isDirective = exports.isComment = exports.isText = exports.isCDATA = exports.isTag = exports.Element = exports.Document = exports.NodeWithChildren = exports.ProcessingInstruction = exports.Comment = exports.Text = exports.DataNode = exports.Node = void 0;
      var domelementtype_1 = require_lib();
      var nodeTypes = new Map([
        [domelementtype_1.ElementType.Tag, 1],
        [domelementtype_1.ElementType.Script, 1],
        [domelementtype_1.ElementType.Style, 1],
        [domelementtype_1.ElementType.Directive, 1],
        [domelementtype_1.ElementType.Text, 3],
        [domelementtype_1.ElementType.CDATA, 4],
        [domelementtype_1.ElementType.Comment, 8],
        [domelementtype_1.ElementType.Root, 9]
      ]);
      var Node = function() {
        function Node2(type) {
          this.type = type;
          this.parent = null;
          this.prev = null;
          this.next = null;
          this.startIndex = null;
          this.endIndex = null;
        }
        Object.defineProperty(Node2.prototype, "nodeType", {
          get: function() {
            var _a;
            return (_a = nodeTypes.get(this.type)) !== null && _a !== void 0 ? _a : 1;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Node2.prototype, "parentNode", {
          get: function() {
            return this.parent;
          },
          set: function(parent) {
            this.parent = parent;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Node2.prototype, "previousSibling", {
          get: function() {
            return this.prev;
          },
          set: function(prev) {
            this.prev = prev;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Node2.prototype, "nextSibling", {
          get: function() {
            return this.next;
          },
          set: function(next) {
            this.next = next;
          },
          enumerable: false,
          configurable: true
        });
        Node2.prototype.cloneNode = function(recursive) {
          if (recursive === void 0) {
            recursive = false;
          }
          return cloneNode(this, recursive);
        };
        return Node2;
      }();
      exports.Node = Node;
      var DataNode = function(_super) {
        __extends(DataNode2, _super);
        function DataNode2(type, data) {
          var _this = _super.call(this, type) || this;
          _this.data = data;
          return _this;
        }
        Object.defineProperty(DataNode2.prototype, "nodeValue", {
          get: function() {
            return this.data;
          },
          set: function(data) {
            this.data = data;
          },
          enumerable: false,
          configurable: true
        });
        return DataNode2;
      }(Node);
      exports.DataNode = DataNode;
      var Text = function(_super) {
        __extends(Text2, _super);
        function Text2(data) {
          return _super.call(this, domelementtype_1.ElementType.Text, data) || this;
        }
        return Text2;
      }(DataNode);
      exports.Text = Text;
      var Comment = function(_super) {
        __extends(Comment2, _super);
        function Comment2(data) {
          return _super.call(this, domelementtype_1.ElementType.Comment, data) || this;
        }
        return Comment2;
      }(DataNode);
      exports.Comment = Comment;
      var ProcessingInstruction = function(_super) {
        __extends(ProcessingInstruction2, _super);
        function ProcessingInstruction2(name, data) {
          var _this = _super.call(this, domelementtype_1.ElementType.Directive, data) || this;
          _this.name = name;
          return _this;
        }
        return ProcessingInstruction2;
      }(DataNode);
      exports.ProcessingInstruction = ProcessingInstruction;
      var NodeWithChildren = function(_super) {
        __extends(NodeWithChildren2, _super);
        function NodeWithChildren2(type, children) {
          var _this = _super.call(this, type) || this;
          _this.children = children;
          return _this;
        }
        Object.defineProperty(NodeWithChildren2.prototype, "firstChild", {
          get: function() {
            var _a;
            return (_a = this.children[0]) !== null && _a !== void 0 ? _a : null;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(NodeWithChildren2.prototype, "lastChild", {
          get: function() {
            return this.children.length > 0 ? this.children[this.children.length - 1] : null;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(NodeWithChildren2.prototype, "childNodes", {
          get: function() {
            return this.children;
          },
          set: function(children) {
            this.children = children;
          },
          enumerable: false,
          configurable: true
        });
        return NodeWithChildren2;
      }(Node);
      exports.NodeWithChildren = NodeWithChildren;
      var Document = function(_super) {
        __extends(Document2, _super);
        function Document2(children) {
          return _super.call(this, domelementtype_1.ElementType.Root, children) || this;
        }
        return Document2;
      }(NodeWithChildren);
      exports.Document = Document;
      var Element = function(_super) {
        __extends(Element2, _super);
        function Element2(name, attribs, children, type) {
          if (children === void 0) {
            children = [];
          }
          if (type === void 0) {
            type = name === "script" ? domelementtype_1.ElementType.Script : name === "style" ? domelementtype_1.ElementType.Style : domelementtype_1.ElementType.Tag;
          }
          var _this = _super.call(this, type, children) || this;
          _this.name = name;
          _this.attribs = attribs;
          return _this;
        }
        Object.defineProperty(Element2.prototype, "tagName", {
          get: function() {
            return this.name;
          },
          set: function(name) {
            this.name = name;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Element2.prototype, "attributes", {
          get: function() {
            var _this = this;
            return Object.keys(this.attribs).map(function(name) {
              var _a, _b;
              return {
                name,
                value: _this.attribs[name],
                namespace: (_a = _this["x-attribsNamespace"]) === null || _a === void 0 ? void 0 : _a[name],
                prefix: (_b = _this["x-attribsPrefix"]) === null || _b === void 0 ? void 0 : _b[name]
              };
            });
          },
          enumerable: false,
          configurable: true
        });
        return Element2;
      }(NodeWithChildren);
      exports.Element = Element;
      function isTag(node) {
        return (0, domelementtype_1.isTag)(node);
      }
      exports.isTag = isTag;
      function isCDATA(node) {
        return node.type === domelementtype_1.ElementType.CDATA;
      }
      exports.isCDATA = isCDATA;
      function isText(node) {
        return node.type === domelementtype_1.ElementType.Text;
      }
      exports.isText = isText;
      function isComment(node) {
        return node.type === domelementtype_1.ElementType.Comment;
      }
      exports.isComment = isComment;
      function isDirective(node) {
        return node.type === domelementtype_1.ElementType.Directive;
      }
      exports.isDirective = isDirective;
      function isDocument(node) {
        return node.type === domelementtype_1.ElementType.Root;
      }
      exports.isDocument = isDocument;
      function hasChildren(node) {
        return Object.prototype.hasOwnProperty.call(node, "children");
      }
      exports.hasChildren = hasChildren;
      function cloneNode(node, recursive) {
        if (recursive === void 0) {
          recursive = false;
        }
        var result;
        if (isText(node)) {
          result = new Text(node.data);
        } else if (isComment(node)) {
          result = new Comment(node.data);
        } else if (isTag(node)) {
          var children = recursive ? cloneChildren(node.children) : [];
          var clone_1 = new Element(node.name, __assign({}, node.attribs), children);
          children.forEach(function(child) {
            return child.parent = clone_1;
          });
          if (node["x-attribsNamespace"]) {
            clone_1["x-attribsNamespace"] = __assign({}, node["x-attribsNamespace"]);
          }
          if (node["x-attribsPrefix"]) {
            clone_1["x-attribsPrefix"] = __assign({}, node["x-attribsPrefix"]);
          }
          result = clone_1;
        } else if (isCDATA(node)) {
          var children = recursive ? cloneChildren(node.children) : [];
          var clone_2 = new NodeWithChildren(domelementtype_1.ElementType.CDATA, children);
          children.forEach(function(child) {
            return child.parent = clone_2;
          });
          result = clone_2;
        } else if (isDocument(node)) {
          var children = recursive ? cloneChildren(node.children) : [];
          var clone_3 = new Document(children);
          children.forEach(function(child) {
            return child.parent = clone_3;
          });
          if (node["x-mode"]) {
            clone_3["x-mode"] = node["x-mode"];
          }
          result = clone_3;
        } else if (isDirective(node)) {
          var instruction = new ProcessingInstruction(node.name, node.data);
          if (node["x-name"] != null) {
            instruction["x-name"] = node["x-name"];
            instruction["x-publicId"] = node["x-publicId"];
            instruction["x-systemId"] = node["x-systemId"];
          }
          result = instruction;
        } else {
          throw new Error("Not implemented yet: " + node.type);
        }
        result.startIndex = node.startIndex;
        result.endIndex = node.endIndex;
        return result;
      }
      exports.cloneNode = cloneNode;
      function cloneChildren(childs) {
        var children = childs.map(function(child) {
          return cloneNode(child, true);
        });
        for (var i3 = 1; i3 < children.length; i3++) {
          children[i3].prev = children[i3 - 1];
          children[i3 - 1].next = children[i3];
        }
        return children;
      }
    }
  });

  // node_modules/domhandler/lib/index.js
  var require_lib2 = __commonJS({
    "node_modules/domhandler/lib/index.js"(exports) {
      init_preact_shim();
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m2, k2, k22) {
        if (k22 === void 0)
          k22 = k2;
        Object.defineProperty(o2, k22, { enumerable: true, get: function() {
          return m2[k2];
        } });
      } : function(o2, m2, k2, k22) {
        if (k22 === void 0)
          k22 = k2;
        o2[k22] = m2[k2];
      });
      var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
        for (var p in m2)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m2, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.DomHandler = void 0;
      var domelementtype_1 = require_lib();
      var node_1 = require_node();
      __exportStar(require_node(), exports);
      var reWhitespace = /\s+/g;
      var defaultOpts = {
        normalizeWhitespace: false,
        withStartIndices: false,
        withEndIndices: false,
        xmlMode: false
      };
      var DomHandler = function() {
        function DomHandler2(callback, options, elementCB) {
          this.dom = [];
          this.root = new node_1.Document(this.dom);
          this.done = false;
          this.tagStack = [this.root];
          this.lastNode = null;
          this.parser = null;
          if (typeof options === "function") {
            elementCB = options;
            options = defaultOpts;
          }
          if (typeof callback === "object") {
            options = callback;
            callback = void 0;
          }
          this.callback = callback !== null && callback !== void 0 ? callback : null;
          this.options = options !== null && options !== void 0 ? options : defaultOpts;
          this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
        }
        DomHandler2.prototype.onparserinit = function(parser) {
          this.parser = parser;
        };
        DomHandler2.prototype.onreset = function() {
          this.dom = [];
          this.root = new node_1.Document(this.dom);
          this.done = false;
          this.tagStack = [this.root];
          this.lastNode = null;
          this.parser = null;
        };
        DomHandler2.prototype.onend = function() {
          if (this.done)
            return;
          this.done = true;
          this.parser = null;
          this.handleCallback(null);
        };
        DomHandler2.prototype.onerror = function(error) {
          this.handleCallback(error);
        };
        DomHandler2.prototype.onclosetag = function() {
          this.lastNode = null;
          var elem = this.tagStack.pop();
          if (this.options.withEndIndices) {
            elem.endIndex = this.parser.endIndex;
          }
          if (this.elementCB)
            this.elementCB(elem);
        };
        DomHandler2.prototype.onopentag = function(name, attribs) {
          var type = this.options.xmlMode ? domelementtype_1.ElementType.Tag : void 0;
          var element = new node_1.Element(name, attribs, void 0, type);
          this.addNode(element);
          this.tagStack.push(element);
        };
        DomHandler2.prototype.ontext = function(data) {
          var normalizeWhitespace = this.options.normalizeWhitespace;
          var lastNode = this.lastNode;
          if (lastNode && lastNode.type === domelementtype_1.ElementType.Text) {
            if (normalizeWhitespace) {
              lastNode.data = (lastNode.data + data).replace(reWhitespace, " ");
            } else {
              lastNode.data += data;
            }
            if (this.options.withEndIndices) {
              lastNode.endIndex = this.parser.endIndex;
            }
          } else {
            if (normalizeWhitespace) {
              data = data.replace(reWhitespace, " ");
            }
            var node = new node_1.Text(data);
            this.addNode(node);
            this.lastNode = node;
          }
        };
        DomHandler2.prototype.oncomment = function(data) {
          if (this.lastNode && this.lastNode.type === domelementtype_1.ElementType.Comment) {
            this.lastNode.data += data;
            return;
          }
          var node = new node_1.Comment(data);
          this.addNode(node);
          this.lastNode = node;
        };
        DomHandler2.prototype.oncommentend = function() {
          this.lastNode = null;
        };
        DomHandler2.prototype.oncdatastart = function() {
          var text = new node_1.Text("");
          var node = new node_1.NodeWithChildren(domelementtype_1.ElementType.CDATA, [text]);
          this.addNode(node);
          text.parent = node;
          this.lastNode = text;
        };
        DomHandler2.prototype.oncdataend = function() {
          this.lastNode = null;
        };
        DomHandler2.prototype.onprocessinginstruction = function(name, data) {
          var node = new node_1.ProcessingInstruction(name, data);
          this.addNode(node);
        };
        DomHandler2.prototype.handleCallback = function(error) {
          if (typeof this.callback === "function") {
            this.callback(error, this.dom);
          } else if (error) {
            throw error;
          }
        };
        DomHandler2.prototype.addNode = function(node) {
          var parent = this.tagStack[this.tagStack.length - 1];
          var previousSibling = parent.children[parent.children.length - 1];
          if (this.options.withStartIndices) {
            node.startIndex = this.parser.startIndex;
          }
          if (this.options.withEndIndices) {
            node.endIndex = this.parser.endIndex;
          }
          parent.children.push(node);
          if (previousSibling) {
            node.prev = previousSibling;
            previousSibling.next = node;
          }
          node.parent = parent;
          this.lastNode = null;
        };
        return DomHandler2;
      }();
      exports.DomHandler = DomHandler;
      exports.default = DomHandler;
    }
  });

  // node_modules/entities/lib/decode.js
  var require_decode2 = __commonJS({
    "node_modules/entities/lib/decode.js"(exports) {
      init_preact_shim();
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.decodeHTML = exports.decodeHTMLStrict = exports.decodeXML = void 0;
      var entities_json_1 = __importDefault(require_entities());
      var legacy_json_1 = __importDefault(require_legacy());
      var xml_json_1 = __importDefault(require_xml());
      var decode_codepoint_1 = __importDefault(require_decode_codepoint());
      var strictEntityRe = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
      exports.decodeXML = getStrictDecoder(xml_json_1.default);
      exports.decodeHTMLStrict = getStrictDecoder(entities_json_1.default);
      function getStrictDecoder(map) {
        var replace = getReplacer(map);
        return function(str) {
          return String(str).replace(strictEntityRe, replace);
        };
      }
      var sorter = function(a3, b2) {
        return a3 < b2 ? 1 : -1;
      };
      exports.decodeHTML = function() {
        var legacy = Object.keys(legacy_json_1.default).sort(sorter);
        var keys = Object.keys(entities_json_1.default).sort(sorter);
        for (var i3 = 0, j2 = 0; i3 < keys.length; i3++) {
          if (legacy[j2] === keys[i3]) {
            keys[i3] += ";?";
            j2++;
          } else {
            keys[i3] += ";";
          }
        }
        var re = new RegExp("&(?:" + keys.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g");
        var replace = getReplacer(entities_json_1.default);
        function replacer(str) {
          if (str.substr(-1) !== ";")
            str += ";";
          return replace(str);
        }
        return function(str) {
          return String(str).replace(re, replacer);
        };
      }();
      function getReplacer(map) {
        return function replace(str) {
          if (str.charAt(1) === "#") {
            var secondChar = str.charAt(2);
            if (secondChar === "X" || secondChar === "x") {
              return decode_codepoint_1.default(parseInt(str.substr(3), 16));
            }
            return decode_codepoint_1.default(parseInt(str.substr(2), 10));
          }
          return map[str.slice(1, -1)] || str;
        };
      }
    }
  });

  // node_modules/entities/lib/encode.js
  var require_encode = __commonJS({
    "node_modules/entities/lib/encode.js"(exports) {
      init_preact_shim();
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.escapeUTF8 = exports.escape = exports.encodeNonAsciiHTML = exports.encodeHTML = exports.encodeXML = void 0;
      var xml_json_1 = __importDefault(require_xml());
      var inverseXML = getInverseObj(xml_json_1.default);
      var xmlReplacer = getInverseReplacer(inverseXML);
      exports.encodeXML = getASCIIEncoder(inverseXML);
      var entities_json_1 = __importDefault(require_entities());
      var inverseHTML = getInverseObj(entities_json_1.default);
      var htmlReplacer = getInverseReplacer(inverseHTML);
      exports.encodeHTML = getInverse(inverseHTML, htmlReplacer);
      exports.encodeNonAsciiHTML = getASCIIEncoder(inverseHTML);
      function getInverseObj(obj) {
        return Object.keys(obj).sort().reduce(function(inverse, name) {
          inverse[obj[name]] = "&" + name + ";";
          return inverse;
        }, {});
      }
      function getInverseReplacer(inverse) {
        var single = [];
        var multiple = [];
        for (var _i = 0, _a = Object.keys(inverse); _i < _a.length; _i++) {
          var k2 = _a[_i];
          if (k2.length === 1) {
            single.push("\\" + k2);
          } else {
            multiple.push(k2);
          }
        }
        single.sort();
        for (var start = 0; start < single.length - 1; start++) {
          var end = start;
          while (end < single.length - 1 && single[end].charCodeAt(1) + 1 === single[end + 1].charCodeAt(1)) {
            end += 1;
          }
          var count = 1 + end - start;
          if (count < 3)
            continue;
          single.splice(start, count, single[start] + "-" + single[end]);
        }
        multiple.unshift("[" + single.join("") + "]");
        return new RegExp(multiple.join("|"), "g");
      }
      var reNonASCII = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g;
      var getCodePoint = String.prototype.codePointAt != null ? function(str) {
        return str.codePointAt(0);
      } : function(c3) {
        return (c3.charCodeAt(0) - 55296) * 1024 + c3.charCodeAt(1) - 56320 + 65536;
      };
      function singleCharReplacer(c3) {
        return "&#x" + (c3.length > 1 ? getCodePoint(c3) : c3.charCodeAt(0)).toString(16).toUpperCase() + ";";
      }
      function getInverse(inverse, re) {
        return function(data) {
          return data.replace(re, function(name) {
            return inverse[name];
          }).replace(reNonASCII, singleCharReplacer);
        };
      }
      var reEscapeChars = new RegExp(xmlReplacer.source + "|" + reNonASCII.source, "g");
      function escape(data) {
        return data.replace(reEscapeChars, singleCharReplacer);
      }
      exports.escape = escape;
      function escapeUTF8(data) {
        return data.replace(xmlReplacer, singleCharReplacer);
      }
      exports.escapeUTF8 = escapeUTF8;
      function getASCIIEncoder(obj) {
        return function(data) {
          return data.replace(reEscapeChars, function(c3) {
            return obj[c3] || singleCharReplacer(c3);
          });
        };
      }
    }
  });

  // node_modules/entities/lib/index.js
  var require_lib3 = __commonJS({
    "node_modules/entities/lib/index.js"(exports) {
      init_preact_shim();
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.decodeXMLStrict = exports.decodeHTML5Strict = exports.decodeHTML4Strict = exports.decodeHTML5 = exports.decodeHTML4 = exports.decodeHTMLStrict = exports.decodeHTML = exports.decodeXML = exports.encodeHTML5 = exports.encodeHTML4 = exports.escapeUTF8 = exports.escape = exports.encodeNonAsciiHTML = exports.encodeHTML = exports.encodeXML = exports.encode = exports.decodeStrict = exports.decode = void 0;
      var decode_1 = require_decode2();
      var encode_1 = require_encode();
      function decode(data, level) {
        return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTML)(data);
      }
      exports.decode = decode;
      function decodeStrict(data, level) {
        return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTMLStrict)(data);
      }
      exports.decodeStrict = decodeStrict;
      function encode(data, level) {
        return (!level || level <= 0 ? encode_1.encodeXML : encode_1.encodeHTML)(data);
      }
      exports.encode = encode;
      var encode_2 = require_encode();
      Object.defineProperty(exports, "encodeXML", { enumerable: true, get: function() {
        return encode_2.encodeXML;
      } });
      Object.defineProperty(exports, "encodeHTML", { enumerable: true, get: function() {
        return encode_2.encodeHTML;
      } });
      Object.defineProperty(exports, "encodeNonAsciiHTML", { enumerable: true, get: function() {
        return encode_2.encodeNonAsciiHTML;
      } });
      Object.defineProperty(exports, "escape", { enumerable: true, get: function() {
        return encode_2.escape;
      } });
      Object.defineProperty(exports, "escapeUTF8", { enumerable: true, get: function() {
        return encode_2.escapeUTF8;
      } });
      Object.defineProperty(exports, "encodeHTML4", { enumerable: true, get: function() {
        return encode_2.encodeHTML;
      } });
      Object.defineProperty(exports, "encodeHTML5", { enumerable: true, get: function() {
        return encode_2.encodeHTML;
      } });
      var decode_2 = require_decode2();
      Object.defineProperty(exports, "decodeXML", { enumerable: true, get: function() {
        return decode_2.decodeXML;
      } });
      Object.defineProperty(exports, "decodeHTML", { enumerable: true, get: function() {
        return decode_2.decodeHTML;
      } });
      Object.defineProperty(exports, "decodeHTMLStrict", { enumerable: true, get: function() {
        return decode_2.decodeHTMLStrict;
      } });
      Object.defineProperty(exports, "decodeHTML4", { enumerable: true, get: function() {
        return decode_2.decodeHTML;
      } });
      Object.defineProperty(exports, "decodeHTML5", { enumerable: true, get: function() {
        return decode_2.decodeHTML;
      } });
      Object.defineProperty(exports, "decodeHTML4Strict", { enumerable: true, get: function() {
        return decode_2.decodeHTMLStrict;
      } });
      Object.defineProperty(exports, "decodeHTML5Strict", { enumerable: true, get: function() {
        return decode_2.decodeHTMLStrict;
      } });
      Object.defineProperty(exports, "decodeXMLStrict", { enumerable: true, get: function() {
        return decode_2.decodeXML;
      } });
    }
  });

  // node_modules/dom-serializer/lib/foreignNames.js
  var require_foreignNames = __commonJS({
    "node_modules/dom-serializer/lib/foreignNames.js"(exports) {
      init_preact_shim();
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.attributeNames = exports.elementNames = void 0;
      exports.elementNames = new Map([
        ["altglyph", "altGlyph"],
        ["altglyphdef", "altGlyphDef"],
        ["altglyphitem", "altGlyphItem"],
        ["animatecolor", "animateColor"],
        ["animatemotion", "animateMotion"],
        ["animatetransform", "animateTransform"],
        ["clippath", "clipPath"],
        ["feblend", "feBlend"],
        ["fecolormatrix", "feColorMatrix"],
        ["fecomponenttransfer", "feComponentTransfer"],
        ["fecomposite", "feComposite"],
        ["feconvolvematrix", "feConvolveMatrix"],
        ["fediffuselighting", "feDiffuseLighting"],
        ["fedisplacementmap", "feDisplacementMap"],
        ["fedistantlight", "feDistantLight"],
        ["fedropshadow", "feDropShadow"],
        ["feflood", "feFlood"],
        ["fefunca", "feFuncA"],
        ["fefuncb", "feFuncB"],
        ["fefuncg", "feFuncG"],
        ["fefuncr", "feFuncR"],
        ["fegaussianblur", "feGaussianBlur"],
        ["feimage", "feImage"],
        ["femerge", "feMerge"],
        ["femergenode", "feMergeNode"],
        ["femorphology", "feMorphology"],
        ["feoffset", "feOffset"],
        ["fepointlight", "fePointLight"],
        ["fespecularlighting", "feSpecularLighting"],
        ["fespotlight", "feSpotLight"],
        ["fetile", "feTile"],
        ["feturbulence", "feTurbulence"],
        ["foreignobject", "foreignObject"],
        ["glyphref", "glyphRef"],
        ["lineargradient", "linearGradient"],
        ["radialgradient", "radialGradient"],
        ["textpath", "textPath"]
      ]);
      exports.attributeNames = new Map([
        ["definitionurl", "definitionURL"],
        ["attributename", "attributeName"],
        ["attributetype", "attributeType"],
        ["basefrequency", "baseFrequency"],
        ["baseprofile", "baseProfile"],
        ["calcmode", "calcMode"],
        ["clippathunits", "clipPathUnits"],
        ["diffuseconstant", "diffuseConstant"],
        ["edgemode", "edgeMode"],
        ["filterunits", "filterUnits"],
        ["glyphref", "glyphRef"],
        ["gradienttransform", "gradientTransform"],
        ["gradientunits", "gradientUnits"],
        ["kernelmatrix", "kernelMatrix"],
        ["kernelunitlength", "kernelUnitLength"],
        ["keypoints", "keyPoints"],
        ["keysplines", "keySplines"],
        ["keytimes", "keyTimes"],
        ["lengthadjust", "lengthAdjust"],
        ["limitingconeangle", "limitingConeAngle"],
        ["markerheight", "markerHeight"],
        ["markerunits", "markerUnits"],
        ["markerwidth", "markerWidth"],
        ["maskcontentunits", "maskContentUnits"],
        ["maskunits", "maskUnits"],
        ["numoctaves", "numOctaves"],
        ["pathlength", "pathLength"],
        ["patterncontentunits", "patternContentUnits"],
        ["patterntransform", "patternTransform"],
        ["patternunits", "patternUnits"],
        ["pointsatx", "pointsAtX"],
        ["pointsaty", "pointsAtY"],
        ["pointsatz", "pointsAtZ"],
        ["preservealpha", "preserveAlpha"],
        ["preserveaspectratio", "preserveAspectRatio"],
        ["primitiveunits", "primitiveUnits"],
        ["refx", "refX"],
        ["refy", "refY"],
        ["repeatcount", "repeatCount"],
        ["repeatdur", "repeatDur"],
        ["requiredextensions", "requiredExtensions"],
        ["requiredfeatures", "requiredFeatures"],
        ["specularconstant", "specularConstant"],
        ["specularexponent", "specularExponent"],
        ["spreadmethod", "spreadMethod"],
        ["startoffset", "startOffset"],
        ["stddeviation", "stdDeviation"],
        ["stitchtiles", "stitchTiles"],
        ["surfacescale", "surfaceScale"],
        ["systemlanguage", "systemLanguage"],
        ["tablevalues", "tableValues"],
        ["targetx", "targetX"],
        ["targety", "targetY"],
        ["textlength", "textLength"],
        ["viewbox", "viewBox"],
        ["viewtarget", "viewTarget"],
        ["xchannelselector", "xChannelSelector"],
        ["ychannelselector", "yChannelSelector"],
        ["zoomandpan", "zoomAndPan"]
      ]);
    }
  });

  // node_modules/dom-serializer/lib/index.js
  var require_lib4 = __commonJS({
    "node_modules/dom-serializer/lib/index.js"(exports) {
      init_preact_shim();
      "use strict";
      var __assign = exports && exports.__assign || function() {
        __assign = Object.assign || function(t2) {
          for (var s3, i3 = 1, n2 = arguments.length; i3 < n2; i3++) {
            s3 = arguments[i3];
            for (var p in s3)
              if (Object.prototype.hasOwnProperty.call(s3, p))
                t2[p] = s3[p];
          }
          return t2;
        };
        return __assign.apply(this, arguments);
      };
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m2, k2, k22) {
        if (k22 === void 0)
          k22 = k2;
        Object.defineProperty(o2, k22, { enumerable: true, get: function() {
          return m2[k2];
        } });
      } : function(o2, m2, k2, k22) {
        if (k22 === void 0)
          k22 = k2;
        o2[k22] = m2[k2];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o2, v2) {
        Object.defineProperty(o2, "default", { enumerable: true, value: v2 });
      } : function(o2, v2) {
        o2["default"] = v2;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k2 in mod)
            if (k2 !== "default" && Object.prototype.hasOwnProperty.call(mod, k2))
              __createBinding(result, mod, k2);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var ElementType = __importStar(require_lib());
      var entities_1 = require_lib3();
      var foreignNames_1 = require_foreignNames();
      var unencodedElements = new Set([
        "style",
        "script",
        "xmp",
        "iframe",
        "noembed",
        "noframes",
        "plaintext",
        "noscript"
      ]);
      function formatAttributes(attributes, opts) {
        if (!attributes)
          return;
        return Object.keys(attributes).map(function(key) {
          var _a, _b;
          var value = (_a = attributes[key]) !== null && _a !== void 0 ? _a : "";
          if (opts.xmlMode === "foreign") {
            key = (_b = foreignNames_1.attributeNames.get(key)) !== null && _b !== void 0 ? _b : key;
          }
          if (!opts.emptyAttrs && !opts.xmlMode && value === "") {
            return key;
          }
          return key + '="' + (opts.decodeEntities !== false ? entities_1.encodeXML(value) : value.replace(/"/g, "&quot;")) + '"';
        }).join(" ");
      }
      var singleTag = new Set([
        "area",
        "base",
        "basefont",
        "br",
        "col",
        "command",
        "embed",
        "frame",
        "hr",
        "img",
        "input",
        "isindex",
        "keygen",
        "link",
        "meta",
        "param",
        "source",
        "track",
        "wbr"
      ]);
      function render(node, options) {
        if (options === void 0) {
          options = {};
        }
        var nodes = "length" in node ? node : [node];
        var output = "";
        for (var i3 = 0; i3 < nodes.length; i3++) {
          output += renderNode(nodes[i3], options);
        }
        return output;
      }
      exports.default = render;
      function renderNode(node, options) {
        switch (node.type) {
          case ElementType.Root:
            return render(node.children, options);
          case ElementType.Directive:
          case ElementType.Doctype:
            return renderDirective(node);
          case ElementType.Comment:
            return renderComment(node);
          case ElementType.CDATA:
            return renderCdata(node);
          case ElementType.Script:
          case ElementType.Style:
          case ElementType.Tag:
            return renderTag(node, options);
          case ElementType.Text:
            return renderText(node, options);
        }
      }
      var foreignModeIntegrationPoints = new Set([
        "mi",
        "mo",
        "mn",
        "ms",
        "mtext",
        "annotation-xml",
        "foreignObject",
        "desc",
        "title"
      ]);
      var foreignElements = new Set(["svg", "math"]);
      function renderTag(elem, opts) {
        var _a;
        if (opts.xmlMode === "foreign") {
          elem.name = (_a = foreignNames_1.elementNames.get(elem.name)) !== null && _a !== void 0 ? _a : elem.name;
          if (elem.parent && foreignModeIntegrationPoints.has(elem.parent.name)) {
            opts = __assign(__assign({}, opts), { xmlMode: false });
          }
        }
        if (!opts.xmlMode && foreignElements.has(elem.name)) {
          opts = __assign(__assign({}, opts), { xmlMode: "foreign" });
        }
        var tag = "<" + elem.name;
        var attribs = formatAttributes(elem.attribs, opts);
        if (attribs) {
          tag += " " + attribs;
        }
        if (elem.children.length === 0 && (opts.xmlMode ? opts.selfClosingTags !== false : opts.selfClosingTags && singleTag.has(elem.name))) {
          if (!opts.xmlMode)
            tag += " ";
          tag += "/>";
        } else {
          tag += ">";
          if (elem.children.length > 0) {
            tag += render(elem.children, opts);
          }
          if (opts.xmlMode || !singleTag.has(elem.name)) {
            tag += "</" + elem.name + ">";
          }
        }
        return tag;
      }
      function renderDirective(elem) {
        return "<" + elem.data + ">";
      }
      function renderText(elem, opts) {
        var data = elem.data || "";
        if (opts.decodeEntities !== false && !(!opts.xmlMode && elem.parent && unencodedElements.has(elem.parent.name))) {
          data = entities_1.encodeXML(data);
        }
        return data;
      }
      function renderCdata(elem) {
        return "<![CDATA[" + elem.children[0].data + "]]>";
      }
      function renderComment(elem) {
        return "<!--" + elem.data + "-->";
      }
    }
  });

  // node_modules/domutils/lib/stringify.js
  var require_stringify = __commonJS({
    "node_modules/domutils/lib/stringify.js"(exports) {
      init_preact_shim();
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.innerText = exports.textContent = exports.getText = exports.getInnerHTML = exports.getOuterHTML = void 0;
      var domhandler_1 = require_lib2();
      var dom_serializer_1 = __importDefault(require_lib4());
      var domelementtype_1 = require_lib();
      function getOuterHTML(node, options) {
        return (0, dom_serializer_1.default)(node, options);
      }
      exports.getOuterHTML = getOuterHTML;
      function getInnerHTML(node, options) {
        return (0, domhandler_1.hasChildren)(node) ? node.children.map(function(node2) {
          return getOuterHTML(node2, options);
        }).join("") : "";
      }
      exports.getInnerHTML = getInnerHTML;
      function getText(node) {
        if (Array.isArray(node))
          return node.map(getText).join("");
        if ((0, domhandler_1.isTag)(node))
          return node.name === "br" ? "\n" : getText(node.children);
        if ((0, domhandler_1.isCDATA)(node))
          return getText(node.children);
        if ((0, domhandler_1.isText)(node))
          return node.data;
        return "";
      }
      exports.getText = getText;
      function textContent(node) {
        if (Array.isArray(node))
          return node.map(textContent).join("");
        if ((0, domhandler_1.hasChildren)(node) && !(0, domhandler_1.isComment)(node)) {
          return textContent(node.children);
        }
        if ((0, domhandler_1.isText)(node))
          return node.data;
        return "";
      }
      exports.textContent = textContent;
      function innerText(node) {
        if (Array.isArray(node))
          return node.map(innerText).join("");
        if ((0, domhandler_1.hasChildren)(node) && (node.type === domelementtype_1.ElementType.Tag || (0, domhandler_1.isCDATA)(node))) {
          return innerText(node.children);
        }
        if ((0, domhandler_1.isText)(node))
          return node.data;
        return "";
      }
      exports.innerText = innerText;
    }
  });

  // node_modules/domutils/lib/traversal.js
  var require_traversal = __commonJS({
    "node_modules/domutils/lib/traversal.js"(exports) {
      init_preact_shim();
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.prevElementSibling = exports.nextElementSibling = exports.getName = exports.hasAttrib = exports.getAttributeValue = exports.getSiblings = exports.getParent = exports.getChildren = void 0;
      var domhandler_1 = require_lib2();
      var emptyArray = [];
      function getChildren(elem) {
        var _a;
        return (_a = elem.children) !== null && _a !== void 0 ? _a : emptyArray;
      }
      exports.getChildren = getChildren;
      function getParent(elem) {
        return elem.parent || null;
      }
      exports.getParent = getParent;
      function getSiblings(elem) {
        var _a, _b;
        var parent = getParent(elem);
        if (parent != null)
          return getChildren(parent);
        var siblings = [elem];
        var prev = elem.prev, next = elem.next;
        while (prev != null) {
          siblings.unshift(prev);
          _a = prev, prev = _a.prev;
        }
        while (next != null) {
          siblings.push(next);
          _b = next, next = _b.next;
        }
        return siblings;
      }
      exports.getSiblings = getSiblings;
      function getAttributeValue(elem, name) {
        var _a;
        return (_a = elem.attribs) === null || _a === void 0 ? void 0 : _a[name];
      }
      exports.getAttributeValue = getAttributeValue;
      function hasAttrib(elem, name) {
        return elem.attribs != null && Object.prototype.hasOwnProperty.call(elem.attribs, name) && elem.attribs[name] != null;
      }
      exports.hasAttrib = hasAttrib;
      function getName(elem) {
        return elem.name;
      }
      exports.getName = getName;
      function nextElementSibling(elem) {
        var _a;
        var next = elem.next;
        while (next !== null && !(0, domhandler_1.isTag)(next))
          _a = next, next = _a.next;
        return next;
      }
      exports.nextElementSibling = nextElementSibling;
      function prevElementSibling(elem) {
        var _a;
        var prev = elem.prev;
        while (prev !== null && !(0, domhandler_1.isTag)(prev))
          _a = prev, prev = _a.prev;
        return prev;
      }
      exports.prevElementSibling = prevElementSibling;
    }
  });

  // node_modules/domutils/lib/manipulation.js
  var require_manipulation = __commonJS({
    "node_modules/domutils/lib/manipulation.js"(exports) {
      init_preact_shim();
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.prepend = exports.prependChild = exports.append = exports.appendChild = exports.replaceElement = exports.removeElement = void 0;
      function removeElement(elem) {
        if (elem.prev)
          elem.prev.next = elem.next;
        if (elem.next)
          elem.next.prev = elem.prev;
        if (elem.parent) {
          var childs = elem.parent.children;
          childs.splice(childs.lastIndexOf(elem), 1);
        }
      }
      exports.removeElement = removeElement;
      function replaceElement(elem, replacement) {
        var prev = replacement.prev = elem.prev;
        if (prev) {
          prev.next = replacement;
        }
        var next = replacement.next = elem.next;
        if (next) {
          next.prev = replacement;
        }
        var parent = replacement.parent = elem.parent;
        if (parent) {
          var childs = parent.children;
          childs[childs.lastIndexOf(elem)] = replacement;
        }
      }
      exports.replaceElement = replaceElement;
      function appendChild(elem, child) {
        removeElement(child);
        child.next = null;
        child.parent = elem;
        if (elem.children.push(child) > 1) {
          var sibling = elem.children[elem.children.length - 2];
          sibling.next = child;
          child.prev = sibling;
        } else {
          child.prev = null;
        }
      }
      exports.appendChild = appendChild;
      function append(elem, next) {
        removeElement(next);
        var parent = elem.parent;
        var currNext = elem.next;
        next.next = currNext;
        next.prev = elem;
        elem.next = next;
        next.parent = parent;
        if (currNext) {
          currNext.prev = next;
          if (parent) {
            var childs = parent.children;
            childs.splice(childs.lastIndexOf(currNext), 0, next);
          }
        } else if (parent) {
          parent.children.push(next);
        }
      }
      exports.append = append;
      function prependChild(elem, child) {
        removeElement(child);
        child.parent = elem;
        child.prev = null;
        if (elem.children.unshift(child) !== 1) {
          var sibling = elem.children[1];
          sibling.prev = child;
          child.next = sibling;
        } else {
          child.next = null;
        }
      }
      exports.prependChild = prependChild;
      function prepend(elem, prev) {
        removeElement(prev);
        var parent = elem.parent;
        if (parent) {
          var childs = parent.children;
          childs.splice(childs.indexOf(elem), 0, prev);
        }
        if (elem.prev) {
          elem.prev.next = prev;
        }
        prev.parent = parent;
        prev.prev = elem.prev;
        prev.next = elem;
        elem.prev = prev;
      }
      exports.prepend = prepend;
    }
  });

  // node_modules/domutils/lib/querying.js
  var require_querying = __commonJS({
    "node_modules/domutils/lib/querying.js"(exports) {
      init_preact_shim();
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.findAll = exports.existsOne = exports.findOne = exports.findOneChild = exports.find = exports.filter = void 0;
      var domhandler_1 = require_lib2();
      function filter(test, node, recurse, limit) {
        if (recurse === void 0) {
          recurse = true;
        }
        if (limit === void 0) {
          limit = Infinity;
        }
        if (!Array.isArray(node))
          node = [node];
        return find(test, node, recurse, limit);
      }
      exports.filter = filter;
      function find(test, nodes, recurse, limit) {
        var result = [];
        for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
          var elem = nodes_1[_i];
          if (test(elem)) {
            result.push(elem);
            if (--limit <= 0)
              break;
          }
          if (recurse && (0, domhandler_1.hasChildren)(elem) && elem.children.length > 0) {
            var children = find(test, elem.children, recurse, limit);
            result.push.apply(result, children);
            limit -= children.length;
            if (limit <= 0)
              break;
          }
        }
        return result;
      }
      exports.find = find;
      function findOneChild(test, nodes) {
        return nodes.find(test);
      }
      exports.findOneChild = findOneChild;
      function findOne(test, nodes, recurse) {
        if (recurse === void 0) {
          recurse = true;
        }
        var elem = null;
        for (var i3 = 0; i3 < nodes.length && !elem; i3++) {
          var checked = nodes[i3];
          if (!(0, domhandler_1.isTag)(checked)) {
            continue;
          } else if (test(checked)) {
            elem = checked;
          } else if (recurse && checked.children.length > 0) {
            elem = findOne(test, checked.children);
          }
        }
        return elem;
      }
      exports.findOne = findOne;
      function existsOne(test, nodes) {
        return nodes.some(function(checked) {
          return (0, domhandler_1.isTag)(checked) && (test(checked) || checked.children.length > 0 && existsOne(test, checked.children));
        });
      }
      exports.existsOne = existsOne;
      function findAll(test, nodes) {
        var _a;
        var result = [];
        var stack = nodes.filter(domhandler_1.isTag);
        var elem;
        while (elem = stack.shift()) {
          var children = (_a = elem.children) === null || _a === void 0 ? void 0 : _a.filter(domhandler_1.isTag);
          if (children && children.length > 0) {
            stack.unshift.apply(stack, children);
          }
          if (test(elem))
            result.push(elem);
        }
        return result;
      }
      exports.findAll = findAll;
    }
  });

  // node_modules/domutils/lib/legacy.js
  var require_legacy2 = __commonJS({
    "node_modules/domutils/lib/legacy.js"(exports) {
      init_preact_shim();
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getElementsByTagType = exports.getElementsByTagName = exports.getElementById = exports.getElements = exports.testElement = void 0;
      var domhandler_1 = require_lib2();
      var querying_1 = require_querying();
      var Checks = {
        tag_name: function(name) {
          if (typeof name === "function") {
            return function(elem) {
              return (0, domhandler_1.isTag)(elem) && name(elem.name);
            };
          } else if (name === "*") {
            return domhandler_1.isTag;
          }
          return function(elem) {
            return (0, domhandler_1.isTag)(elem) && elem.name === name;
          };
        },
        tag_type: function(type) {
          if (typeof type === "function") {
            return function(elem) {
              return type(elem.type);
            };
          }
          return function(elem) {
            return elem.type === type;
          };
        },
        tag_contains: function(data) {
          if (typeof data === "function") {
            return function(elem) {
              return (0, domhandler_1.isText)(elem) && data(elem.data);
            };
          }
          return function(elem) {
            return (0, domhandler_1.isText)(elem) && elem.data === data;
          };
        }
      };
      function getAttribCheck(attrib, value) {
        if (typeof value === "function") {
          return function(elem) {
            return (0, domhandler_1.isTag)(elem) && value(elem.attribs[attrib]);
          };
        }
        return function(elem) {
          return (0, domhandler_1.isTag)(elem) && elem.attribs[attrib] === value;
        };
      }
      function combineFuncs(a3, b2) {
        return function(elem) {
          return a3(elem) || b2(elem);
        };
      }
      function compileTest(options) {
        var funcs = Object.keys(options).map(function(key) {
          var value = options[key];
          return Object.prototype.hasOwnProperty.call(Checks, key) ? Checks[key](value) : getAttribCheck(key, value);
        });
        return funcs.length === 0 ? null : funcs.reduce(combineFuncs);
      }
      function testElement(options, node) {
        var test = compileTest(options);
        return test ? test(node) : true;
      }
      exports.testElement = testElement;
      function getElements(options, nodes, recurse, limit) {
        if (limit === void 0) {
          limit = Infinity;
        }
        var test = compileTest(options);
        return test ? (0, querying_1.filter)(test, nodes, recurse, limit) : [];
      }
      exports.getElements = getElements;
      function getElementById(id, nodes, recurse) {
        if (recurse === void 0) {
          recurse = true;
        }
        if (!Array.isArray(nodes))
          nodes = [nodes];
        return (0, querying_1.findOne)(getAttribCheck("id", id), nodes, recurse);
      }
      exports.getElementById = getElementById;
      function getElementsByTagName(tagName, nodes, recurse, limit) {
        if (recurse === void 0) {
          recurse = true;
        }
        if (limit === void 0) {
          limit = Infinity;
        }
        return (0, querying_1.filter)(Checks.tag_name(tagName), nodes, recurse, limit);
      }
      exports.getElementsByTagName = getElementsByTagName;
      function getElementsByTagType(type, nodes, recurse, limit) {
        if (recurse === void 0) {
          recurse = true;
        }
        if (limit === void 0) {
          limit = Infinity;
        }
        return (0, querying_1.filter)(Checks.tag_type(type), nodes, recurse, limit);
      }
      exports.getElementsByTagType = getElementsByTagType;
    }
  });

  // node_modules/domutils/lib/helpers.js
  var require_helpers = __commonJS({
    "node_modules/domutils/lib/helpers.js"(exports) {
      init_preact_shim();
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.uniqueSort = exports.compareDocumentPosition = exports.removeSubsets = void 0;
      var domhandler_1 = require_lib2();
      function removeSubsets(nodes) {
        var idx = nodes.length;
        while (--idx >= 0) {
          var node = nodes[idx];
          if (idx > 0 && nodes.lastIndexOf(node, idx - 1) >= 0) {
            nodes.splice(idx, 1);
            continue;
          }
          for (var ancestor = node.parent; ancestor; ancestor = ancestor.parent) {
            if (nodes.includes(ancestor)) {
              nodes.splice(idx, 1);
              break;
            }
          }
        }
        return nodes;
      }
      exports.removeSubsets = removeSubsets;
      function compareDocumentPosition(nodeA, nodeB) {
        var aParents = [];
        var bParents = [];
        if (nodeA === nodeB) {
          return 0;
        }
        var current = (0, domhandler_1.hasChildren)(nodeA) ? nodeA : nodeA.parent;
        while (current) {
          aParents.unshift(current);
          current = current.parent;
        }
        current = (0, domhandler_1.hasChildren)(nodeB) ? nodeB : nodeB.parent;
        while (current) {
          bParents.unshift(current);
          current = current.parent;
        }
        var maxIdx = Math.min(aParents.length, bParents.length);
        var idx = 0;
        while (idx < maxIdx && aParents[idx] === bParents[idx]) {
          idx++;
        }
        if (idx === 0) {
          return 1;
        }
        var sharedParent = aParents[idx - 1];
        var siblings = sharedParent.children;
        var aSibling = aParents[idx];
        var bSibling = bParents[idx];
        if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
          if (sharedParent === nodeB) {
            return 4 | 16;
          }
          return 4;
        }
        if (sharedParent === nodeA) {
          return 2 | 8;
        }
        return 2;
      }
      exports.compareDocumentPosition = compareDocumentPosition;
      function uniqueSort(nodes) {
        nodes = nodes.filter(function(node, i3, arr) {
          return !arr.includes(node, i3 + 1);
        });
        nodes.sort(function(a3, b2) {
          var relative = compareDocumentPosition(a3, b2);
          if (relative & 2) {
            return -1;
          } else if (relative & 4) {
            return 1;
          }
          return 0;
        });
        return nodes;
      }
      exports.uniqueSort = uniqueSort;
    }
  });

  // node_modules/domutils/lib/feeds.js
  var require_feeds = __commonJS({
    "node_modules/domutils/lib/feeds.js"(exports) {
      init_preact_shim();
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getFeed = void 0;
      var stringify_1 = require_stringify();
      var legacy_1 = require_legacy2();
      function getFeed(doc) {
        var feedRoot = getOneElement(isValidFeed, doc);
        return !feedRoot ? null : feedRoot.name === "feed" ? getAtomFeed(feedRoot) : getRssFeed(feedRoot);
      }
      exports.getFeed = getFeed;
      function getAtomFeed(feedRoot) {
        var _a;
        var childs = feedRoot.children;
        var feed = {
          type: "atom",
          items: (0, legacy_1.getElementsByTagName)("entry", childs).map(function(item) {
            var _a2;
            var children = item.children;
            var entry = { media: getMediaElements(children) };
            addConditionally(entry, "id", "id", children);
            addConditionally(entry, "title", "title", children);
            var href2 = (_a2 = getOneElement("link", children)) === null || _a2 === void 0 ? void 0 : _a2.attribs.href;
            if (href2) {
              entry.link = href2;
            }
            var description = fetch("summary", children) || fetch("content", children);
            if (description) {
              entry.description = description;
            }
            var pubDate = fetch("updated", children);
            if (pubDate) {
              entry.pubDate = new Date(pubDate);
            }
            return entry;
          })
        };
        addConditionally(feed, "id", "id", childs);
        addConditionally(feed, "title", "title", childs);
        var href = (_a = getOneElement("link", childs)) === null || _a === void 0 ? void 0 : _a.attribs.href;
        if (href) {
          feed.link = href;
        }
        addConditionally(feed, "description", "subtitle", childs);
        var updated = fetch("updated", childs);
        if (updated) {
          feed.updated = new Date(updated);
        }
        addConditionally(feed, "author", "email", childs, true);
        return feed;
      }
      function getRssFeed(feedRoot) {
        var _a, _b;
        var childs = (_b = (_a = getOneElement("channel", feedRoot.children)) === null || _a === void 0 ? void 0 : _a.children) !== null && _b !== void 0 ? _b : [];
        var feed = {
          type: feedRoot.name.substr(0, 3),
          id: "",
          items: (0, legacy_1.getElementsByTagName)("item", feedRoot.children).map(function(item) {
            var children = item.children;
            var entry = { media: getMediaElements(children) };
            addConditionally(entry, "id", "guid", children);
            addConditionally(entry, "title", "title", children);
            addConditionally(entry, "link", "link", children);
            addConditionally(entry, "description", "description", children);
            var pubDate = fetch("pubDate", children);
            if (pubDate)
              entry.pubDate = new Date(pubDate);
            return entry;
          })
        };
        addConditionally(feed, "title", "title", childs);
        addConditionally(feed, "link", "link", childs);
        addConditionally(feed, "description", "description", childs);
        var updated = fetch("lastBuildDate", childs);
        if (updated) {
          feed.updated = new Date(updated);
        }
        addConditionally(feed, "author", "managingEditor", childs, true);
        return feed;
      }
      var MEDIA_KEYS_STRING = ["url", "type", "lang"];
      var MEDIA_KEYS_INT = [
        "fileSize",
        "bitrate",
        "framerate",
        "samplingrate",
        "channels",
        "duration",
        "height",
        "width"
      ];
      function getMediaElements(where) {
        return (0, legacy_1.getElementsByTagName)("media:content", where).map(function(elem) {
          var attribs = elem.attribs;
          var media = {
            medium: attribs.medium,
            isDefault: !!attribs.isDefault
          };
          for (var _i = 0, MEDIA_KEYS_STRING_1 = MEDIA_KEYS_STRING; _i < MEDIA_KEYS_STRING_1.length; _i++) {
            var attrib = MEDIA_KEYS_STRING_1[_i];
            if (attribs[attrib]) {
              media[attrib] = attribs[attrib];
            }
          }
          for (var _a = 0, MEDIA_KEYS_INT_1 = MEDIA_KEYS_INT; _a < MEDIA_KEYS_INT_1.length; _a++) {
            var attrib = MEDIA_KEYS_INT_1[_a];
            if (attribs[attrib]) {
              media[attrib] = parseInt(attribs[attrib], 10);
            }
          }
          if (attribs.expression) {
            media.expression = attribs.expression;
          }
          return media;
        });
      }
      function getOneElement(tagName, node) {
        return (0, legacy_1.getElementsByTagName)(tagName, node, true, 1)[0];
      }
      function fetch(tagName, where, recurse) {
        if (recurse === void 0) {
          recurse = false;
        }
        return (0, stringify_1.textContent)((0, legacy_1.getElementsByTagName)(tagName, where, recurse, 1)).trim();
      }
      function addConditionally(obj, prop, tagName, where, recurse) {
        if (recurse === void 0) {
          recurse = false;
        }
        var val = fetch(tagName, where, recurse);
        if (val)
          obj[prop] = val;
      }
      function isValidFeed(value) {
        return value === "rss" || value === "feed" || value === "rdf:RDF";
      }
    }
  });

  // node_modules/domutils/lib/index.js
  var require_lib5 = __commonJS({
    "node_modules/domutils/lib/index.js"(exports) {
      init_preact_shim();
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m2, k2, k22) {
        if (k22 === void 0)
          k22 = k2;
        Object.defineProperty(o2, k22, { enumerable: true, get: function() {
          return m2[k2];
        } });
      } : function(o2, m2, k2, k22) {
        if (k22 === void 0)
          k22 = k2;
        o2[k22] = m2[k2];
      });
      var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
        for (var p in m2)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m2, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.hasChildren = exports.isDocument = exports.isComment = exports.isText = exports.isCDATA = exports.isTag = void 0;
      __exportStar(require_stringify(), exports);
      __exportStar(require_traversal(), exports);
      __exportStar(require_manipulation(), exports);
      __exportStar(require_querying(), exports);
      __exportStar(require_legacy2(), exports);
      __exportStar(require_helpers(), exports);
      __exportStar(require_feeds(), exports);
      var domhandler_1 = require_lib2();
      Object.defineProperty(exports, "isTag", { enumerable: true, get: function() {
        return domhandler_1.isTag;
      } });
      Object.defineProperty(exports, "isCDATA", { enumerable: true, get: function() {
        return domhandler_1.isCDATA;
      } });
      Object.defineProperty(exports, "isText", { enumerable: true, get: function() {
        return domhandler_1.isText;
      } });
      Object.defineProperty(exports, "isComment", { enumerable: true, get: function() {
        return domhandler_1.isComment;
      } });
      Object.defineProperty(exports, "isDocument", { enumerable: true, get: function() {
        return domhandler_1.isDocument;
      } });
      Object.defineProperty(exports, "hasChildren", { enumerable: true, get: function() {
        return domhandler_1.hasChildren;
      } });
    }
  });

  // node_modules/htmlparser2/lib/FeedHandler.js
  var require_FeedHandler = __commonJS({
    "node_modules/htmlparser2/lib/FeedHandler.js"(exports) {
      init_preact_shim();
      "use strict";
      var __extends = exports && exports.__extends || function() {
        var extendStatics = function(d2, b2) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
            d3.__proto__ = b3;
          } || function(d3, b3) {
            for (var p in b3)
              if (Object.prototype.hasOwnProperty.call(b3, p))
                d3[p] = b3[p];
          };
          return extendStatics(d2, b2);
        };
        return function(d2, b2) {
          if (typeof b2 !== "function" && b2 !== null)
            throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
          extendStatics(d2, b2);
          function __() {
            this.constructor = d2;
          }
          d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
        };
      }();
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m2, k2, k22) {
        if (k22 === void 0)
          k22 = k2;
        Object.defineProperty(o2, k22, { enumerable: true, get: function() {
          return m2[k2];
        } });
      } : function(o2, m2, k2, k22) {
        if (k22 === void 0)
          k22 = k2;
        o2[k22] = m2[k2];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o2, v2) {
        Object.defineProperty(o2, "default", { enumerable: true, value: v2 });
      } : function(o2, v2) {
        o2["default"] = v2;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k2 in mod)
            if (k2 !== "default" && Object.prototype.hasOwnProperty.call(mod, k2))
              __createBinding(result, mod, k2);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.parseFeed = exports.FeedHandler = void 0;
      var domhandler_1 = __importDefault(require_lib2());
      var DomUtils = __importStar(require_lib5());
      var Parser_1 = require_Parser();
      var FeedItemMediaMedium;
      (function(FeedItemMediaMedium2) {
        FeedItemMediaMedium2[FeedItemMediaMedium2["image"] = 0] = "image";
        FeedItemMediaMedium2[FeedItemMediaMedium2["audio"] = 1] = "audio";
        FeedItemMediaMedium2[FeedItemMediaMedium2["video"] = 2] = "video";
        FeedItemMediaMedium2[FeedItemMediaMedium2["document"] = 3] = "document";
        FeedItemMediaMedium2[FeedItemMediaMedium2["executable"] = 4] = "executable";
      })(FeedItemMediaMedium || (FeedItemMediaMedium = {}));
      var FeedItemMediaExpression;
      (function(FeedItemMediaExpression2) {
        FeedItemMediaExpression2[FeedItemMediaExpression2["sample"] = 0] = "sample";
        FeedItemMediaExpression2[FeedItemMediaExpression2["full"] = 1] = "full";
        FeedItemMediaExpression2[FeedItemMediaExpression2["nonstop"] = 2] = "nonstop";
      })(FeedItemMediaExpression || (FeedItemMediaExpression = {}));
      var FeedHandler = function(_super) {
        __extends(FeedHandler2, _super);
        function FeedHandler2(callback, options) {
          var _this = this;
          if (typeof callback === "object") {
            callback = void 0;
            options = callback;
          }
          _this = _super.call(this, callback, options) || this;
          return _this;
        }
        FeedHandler2.prototype.onend = function() {
          var _a, _b;
          var feedRoot = getOneElement(isValidFeed, this.dom);
          if (!feedRoot) {
            this.handleCallback(new Error("couldn't find root of feed"));
            return;
          }
          var feed = {};
          if (feedRoot.name === "feed") {
            var childs = feedRoot.children;
            feed.type = "atom";
            addConditionally(feed, "id", "id", childs);
            addConditionally(feed, "title", "title", childs);
            var href = getAttribute("href", getOneElement("link", childs));
            if (href) {
              feed.link = href;
            }
            addConditionally(feed, "description", "subtitle", childs);
            var updated = fetch("updated", childs);
            if (updated) {
              feed.updated = new Date(updated);
            }
            addConditionally(feed, "author", "email", childs, true);
            feed.items = getElements("entry", childs).map(function(item) {
              var entry = {};
              var children = item.children;
              addConditionally(entry, "id", "id", children);
              addConditionally(entry, "title", "title", children);
              var href2 = getAttribute("href", getOneElement("link", children));
              if (href2) {
                entry.link = href2;
              }
              var description = fetch("summary", children) || fetch("content", children);
              if (description) {
                entry.description = description;
              }
              var pubDate = fetch("updated", children);
              if (pubDate) {
                entry.pubDate = new Date(pubDate);
              }
              entry.media = getMediaElements(children);
              return entry;
            });
          } else {
            var childs = (_b = (_a = getOneElement("channel", feedRoot.children)) === null || _a === void 0 ? void 0 : _a.children) !== null && _b !== void 0 ? _b : [];
            feed.type = feedRoot.name.substr(0, 3);
            feed.id = "";
            addConditionally(feed, "title", "title", childs);
            addConditionally(feed, "link", "link", childs);
            addConditionally(feed, "description", "description", childs);
            var updated = fetch("lastBuildDate", childs);
            if (updated) {
              feed.updated = new Date(updated);
            }
            addConditionally(feed, "author", "managingEditor", childs, true);
            feed.items = getElements("item", feedRoot.children).map(function(item) {
              var entry = {};
              var children = item.children;
              addConditionally(entry, "id", "guid", children);
              addConditionally(entry, "title", "title", children);
              addConditionally(entry, "link", "link", children);
              addConditionally(entry, "description", "description", children);
              var pubDate = fetch("pubDate", children);
              if (pubDate)
                entry.pubDate = new Date(pubDate);
              entry.media = getMediaElements(children);
              return entry;
            });
          }
          this.feed = feed;
          this.handleCallback(null);
        };
        return FeedHandler2;
      }(domhandler_1.default);
      exports.FeedHandler = FeedHandler;
      function getMediaElements(where) {
        return getElements("media:content", where).map(function(elem) {
          var media = {
            medium: elem.attribs.medium,
            isDefault: !!elem.attribs.isDefault
          };
          if (elem.attribs.url) {
            media.url = elem.attribs.url;
          }
          if (elem.attribs.fileSize) {
            media.fileSize = parseInt(elem.attribs.fileSize, 10);
          }
          if (elem.attribs.type) {
            media.type = elem.attribs.type;
          }
          if (elem.attribs.expression) {
            media.expression = elem.attribs.expression;
          }
          if (elem.attribs.bitrate) {
            media.bitrate = parseInt(elem.attribs.bitrate, 10);
          }
          if (elem.attribs.framerate) {
            media.framerate = parseInt(elem.attribs.framerate, 10);
          }
          if (elem.attribs.samplingrate) {
            media.samplingrate = parseInt(elem.attribs.samplingrate, 10);
          }
          if (elem.attribs.channels) {
            media.channels = parseInt(elem.attribs.channels, 10);
          }
          if (elem.attribs.duration) {
            media.duration = parseInt(elem.attribs.duration, 10);
          }
          if (elem.attribs.height) {
            media.height = parseInt(elem.attribs.height, 10);
          }
          if (elem.attribs.width) {
            media.width = parseInt(elem.attribs.width, 10);
          }
          if (elem.attribs.lang) {
            media.lang = elem.attribs.lang;
          }
          return media;
        });
      }
      function getElements(tagName, where) {
        return DomUtils.getElementsByTagName(tagName, where, true);
      }
      function getOneElement(tagName, node) {
        return DomUtils.getElementsByTagName(tagName, node, true, 1)[0];
      }
      function fetch(tagName, where, recurse) {
        if (recurse === void 0) {
          recurse = false;
        }
        return DomUtils.getText(DomUtils.getElementsByTagName(tagName, where, recurse, 1)).trim();
      }
      function getAttribute(name, elem) {
        if (!elem) {
          return null;
        }
        var attribs = elem.attribs;
        return attribs[name];
      }
      function addConditionally(obj, prop, what, where, recurse) {
        if (recurse === void 0) {
          recurse = false;
        }
        var tmp = fetch(what, where, recurse);
        if (tmp)
          obj[prop] = tmp;
      }
      function isValidFeed(value) {
        return value === "rss" || value === "feed" || value === "rdf:RDF";
      }
      function parseFeed(feed, options) {
        if (options === void 0) {
          options = { xmlMode: true };
        }
        var handler = new FeedHandler(options);
        new Parser_1.Parser(handler, options).end(feed);
        return handler.feed;
      }
      exports.parseFeed = parseFeed;
    }
  });

  // node_modules/htmlparser2/lib/index.js
  var require_lib6 = __commonJS({
    "node_modules/htmlparser2/lib/index.js"(exports) {
      init_preact_shim();
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m2, k2, k22) {
        if (k22 === void 0)
          k22 = k2;
        Object.defineProperty(o2, k22, { enumerable: true, get: function() {
          return m2[k2];
        } });
      } : function(o2, m2, k2, k22) {
        if (k22 === void 0)
          k22 = k2;
        o2[k22] = m2[k2];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o2, v2) {
        Object.defineProperty(o2, "default", { enumerable: true, value: v2 });
      } : function(o2, v2) {
        o2["default"] = v2;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k2 in mod)
            if (k2 !== "default" && Object.prototype.hasOwnProperty.call(mod, k2))
              __createBinding(result, mod, k2);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
        for (var p in m2)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m2, p);
      };
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.RssHandler = exports.DefaultHandler = exports.DomUtils = exports.ElementType = exports.Tokenizer = exports.createDomStream = exports.parseDOM = exports.parseDocument = exports.DomHandler = exports.Parser = void 0;
      var Parser_1 = require_Parser();
      Object.defineProperty(exports, "Parser", { enumerable: true, get: function() {
        return Parser_1.Parser;
      } });
      var domhandler_1 = require_lib2();
      Object.defineProperty(exports, "DomHandler", { enumerable: true, get: function() {
        return domhandler_1.DomHandler;
      } });
      Object.defineProperty(exports, "DefaultHandler", { enumerable: true, get: function() {
        return domhandler_1.DomHandler;
      } });
      function parseDocument(data, options) {
        var handler = new domhandler_1.DomHandler(void 0, options);
        new Parser_1.Parser(handler, options).end(data);
        return handler.root;
      }
      exports.parseDocument = parseDocument;
      function parseDOM(data, options) {
        return parseDocument(data, options).children;
      }
      exports.parseDOM = parseDOM;
      function createDomStream(cb, options, elementCb) {
        var handler = new domhandler_1.DomHandler(cb, options, elementCb);
        return new Parser_1.Parser(handler, options);
      }
      exports.createDomStream = createDomStream;
      var Tokenizer_1 = require_Tokenizer();
      Object.defineProperty(exports, "Tokenizer", { enumerable: true, get: function() {
        return __importDefault(Tokenizer_1).default;
      } });
      var ElementType = __importStar(require_lib());
      exports.ElementType = ElementType;
      __exportStar(require_FeedHandler(), exports);
      exports.DomUtils = __importStar(require_lib5());
      var FeedHandler_1 = require_FeedHandler();
      Object.defineProperty(exports, "RssHandler", { enumerable: true, get: function() {
        return FeedHandler_1.FeedHandler;
      } });
    }
  });

  // node_modules/escape-string-regexp/index.js
  var require_escape_string_regexp = __commonJS({
    "node_modules/escape-string-regexp/index.js"(exports, module) {
      init_preact_shim();
      "use strict";
      module.exports = (string) => {
        if (typeof string !== "string") {
          throw new TypeError("Expected a string");
        }
        return string.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
      };
    }
  });

  // node_modules/klona/dist/index.js
  var require_dist = __commonJS({
    "node_modules/klona/dist/index.js"(exports) {
      init_preact_shim();
      function klona(x2) {
        if (typeof x2 !== "object")
          return x2;
        var k2, tmp, str = Object.prototype.toString.call(x2);
        if (str === "[object Object]") {
          if (x2.constructor !== Object && typeof x2.constructor === "function") {
            tmp = new x2.constructor();
            for (k2 in x2) {
              if (tmp.hasOwnProperty(k2) && tmp[k2] !== x2[k2]) {
                tmp[k2] = klona(x2[k2]);
              }
            }
          } else {
            tmp = {};
            for (k2 in x2) {
              if (k2 === "__proto__") {
                Object.defineProperty(tmp, k2, {
                  value: klona(x2[k2]),
                  configurable: true,
                  enumerable: true,
                  writable: true
                });
              } else {
                tmp[k2] = klona(x2[k2]);
              }
            }
          }
          return tmp;
        }
        if (str === "[object Array]") {
          k2 = x2.length;
          for (tmp = Array(k2); k2--; ) {
            tmp[k2] = klona(x2[k2]);
          }
          return tmp;
        }
        if (str === "[object Set]") {
          tmp = new Set();
          x2.forEach(function(val) {
            tmp.add(klona(val));
          });
          return tmp;
        }
        if (str === "[object Map]") {
          tmp = new Map();
          x2.forEach(function(val, key) {
            tmp.set(klona(key), klona(val));
          });
          return tmp;
        }
        if (str === "[object Date]") {
          return new Date(+x2);
        }
        if (str === "[object RegExp]") {
          tmp = new RegExp(x2.source, x2.flags);
          tmp.lastIndex = x2.lastIndex;
          return tmp;
        }
        if (str === "[object DataView]") {
          return new x2.constructor(klona(x2.buffer));
        }
        if (str === "[object ArrayBuffer]") {
          return x2.slice(0);
        }
        if (str.slice(-6) === "Array]") {
          return new x2.constructor(x2);
        }
        return x2;
      }
      exports.klona = klona;
    }
  });

  // node_modules/sanitize-html/node_modules/is-plain-object/dist/is-plain-object.js
  var require_is_plain_object = __commonJS({
    "node_modules/sanitize-html/node_modules/is-plain-object/dist/is-plain-object.js"(exports) {
      init_preact_shim();
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      function isObject(o2) {
        return Object.prototype.toString.call(o2) === "[object Object]";
      }
      function isPlainObject(o2) {
        var ctor, prot;
        if (isObject(o2) === false)
          return false;
        ctor = o2.constructor;
        if (ctor === void 0)
          return true;
        prot = ctor.prototype;
        if (isObject(prot) === false)
          return false;
        if (prot.hasOwnProperty("isPrototypeOf") === false) {
          return false;
        }
        return true;
      }
      exports.isPlainObject = isPlainObject;
    }
  });

  // node_modules/deepmerge/dist/cjs.js
  var require_cjs = __commonJS({
    "node_modules/deepmerge/dist/cjs.js"(exports, module) {
      init_preact_shim();
      "use strict";
      var isMergeableObject = function isMergeableObject2(value) {
        return isNonNullObject(value) && !isSpecial(value);
      };
      function isNonNullObject(value) {
        return !!value && typeof value === "object";
      }
      function isSpecial(value) {
        var stringValue = Object.prototype.toString.call(value);
        return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
      }
      var canUseSymbol = typeof Symbol === "function" && Symbol.for;
      var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;
      function isReactElement(value) {
        return value.$$typeof === REACT_ELEMENT_TYPE;
      }
      function emptyTarget(val) {
        return Array.isArray(val) ? [] : {};
      }
      function cloneUnlessOtherwiseSpecified(value, options) {
        return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
      }
      function defaultArrayMerge(target, source, options) {
        return target.concat(source).map(function(element) {
          return cloneUnlessOtherwiseSpecified(element, options);
        });
      }
      function getMergeFunction(key, options) {
        if (!options.customMerge) {
          return deepmerge;
        }
        var customMerge = options.customMerge(key);
        return typeof customMerge === "function" ? customMerge : deepmerge;
      }
      function getEnumerableOwnPropertySymbols(target) {
        return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
          return target.propertyIsEnumerable(symbol);
        }) : [];
      }
      function getKeys(target) {
        return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
      }
      function propertyIsOnObject(object, property) {
        try {
          return property in object;
        } catch (_3) {
          return false;
        }
      }
      function propertyIsUnsafe(target, key) {
        return propertyIsOnObject(target, key) && !(Object.hasOwnProperty.call(target, key) && Object.propertyIsEnumerable.call(target, key));
      }
      function mergeObject(target, source, options) {
        var destination = {};
        if (options.isMergeableObject(target)) {
          getKeys(target).forEach(function(key) {
            destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
          });
        }
        getKeys(source).forEach(function(key) {
          if (propertyIsUnsafe(target, key)) {
            return;
          }
          if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
            destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
          } else {
            destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
          }
        });
        return destination;
      }
      function deepmerge(target, source, options) {
        options = options || {};
        options.arrayMerge = options.arrayMerge || defaultArrayMerge;
        options.isMergeableObject = options.isMergeableObject || isMergeableObject;
        options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
        var sourceIsArray = Array.isArray(source);
        var targetIsArray = Array.isArray(target);
        var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
        if (!sourceAndTargetTypesMatch) {
          return cloneUnlessOtherwiseSpecified(source, options);
        } else if (sourceIsArray) {
          return options.arrayMerge(target, source, options);
        } else {
          return mergeObject(target, source, options);
        }
      }
      deepmerge.all = function deepmergeAll(array, options) {
        if (!Array.isArray(array)) {
          throw new Error("first argument should be an array");
        }
        return array.reduce(function(prev, next) {
          return deepmerge(prev, next, options);
        }, {});
      };
      var deepmerge_1 = deepmerge;
      module.exports = deepmerge_1;
    }
  });

  // node_modules/parse-srcset/src/parse-srcset.js
  var require_parse_srcset = __commonJS({
    "node_modules/parse-srcset/src/parse-srcset.js"(exports, module) {
      init_preact_shim();
      (function(root, factory) {
        if (typeof define === "function" && define.amd) {
          define([], factory);
        } else if (typeof module === "object" && module.exports) {
          module.exports = factory();
        } else {
          root.parseSrcset = factory();
        }
      })(exports, function() {
        return function(input) {
          function isSpace(c4) {
            return c4 === " " || c4 === "	" || c4 === "\n" || c4 === "\f" || c4 === "\r";
          }
          function collectCharacters(regEx) {
            var chars, match = regEx.exec(input.substring(pos));
            if (match) {
              chars = match[0];
              pos += chars.length;
              return chars;
            }
          }
          var inputLength = input.length, regexLeadingSpaces = /^[ \t\n\r\u000c]+/, regexLeadingCommasOrSpaces = /^[, \t\n\r\u000c]+/, regexLeadingNotSpaces = /^[^ \t\n\r\u000c]+/, regexTrailingCommas = /[,]+$/, regexNonNegativeInteger = /^\d+$/, regexFloatingPoint = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/, url, descriptors, currentDescriptor, state, c3, pos = 0, candidates = [];
          while (true) {
            collectCharacters(regexLeadingCommasOrSpaces);
            if (pos >= inputLength) {
              return candidates;
            }
            url = collectCharacters(regexLeadingNotSpaces);
            descriptors = [];
            if (url.slice(-1) === ",") {
              url = url.replace(regexTrailingCommas, "");
              parseDescriptors();
            } else {
              tokenize();
            }
          }
          function tokenize() {
            collectCharacters(regexLeadingSpaces);
            currentDescriptor = "";
            state = "in descriptor";
            while (true) {
              c3 = input.charAt(pos);
              if (state === "in descriptor") {
                if (isSpace(c3)) {
                  if (currentDescriptor) {
                    descriptors.push(currentDescriptor);
                    currentDescriptor = "";
                    state = "after descriptor";
                  }
                } else if (c3 === ",") {
                  pos += 1;
                  if (currentDescriptor) {
                    descriptors.push(currentDescriptor);
                  }
                  parseDescriptors();
                  return;
                } else if (c3 === "(") {
                  currentDescriptor = currentDescriptor + c3;
                  state = "in parens";
                } else if (c3 === "") {
                  if (currentDescriptor) {
                    descriptors.push(currentDescriptor);
                  }
                  parseDescriptors();
                  return;
                } else {
                  currentDescriptor = currentDescriptor + c3;
                }
              } else if (state === "in parens") {
                if (c3 === ")") {
                  currentDescriptor = currentDescriptor + c3;
                  state = "in descriptor";
                } else if (c3 === "") {
                  descriptors.push(currentDescriptor);
                  parseDescriptors();
                  return;
                } else {
                  currentDescriptor = currentDescriptor + c3;
                }
              } else if (state === "after descriptor") {
                if (isSpace(c3)) {
                } else if (c3 === "") {
                  parseDescriptors();
                  return;
                } else {
                  state = "in descriptor";
                  pos -= 1;
                }
              }
              pos += 1;
            }
          }
          function parseDescriptors() {
            var pError = false, w2, d2, h2, i3, candidate = {}, desc, lastChar, value, intVal, floatVal;
            for (i3 = 0; i3 < descriptors.length; i3++) {
              desc = descriptors[i3];
              lastChar = desc[desc.length - 1];
              value = desc.substring(0, desc.length - 1);
              intVal = parseInt(value, 10);
              floatVal = parseFloat(value);
              if (regexNonNegativeInteger.test(value) && lastChar === "w") {
                if (w2 || d2) {
                  pError = true;
                }
                if (intVal === 0) {
                  pError = true;
                } else {
                  w2 = intVal;
                }
              } else if (regexFloatingPoint.test(value) && lastChar === "x") {
                if (w2 || d2 || h2) {
                  pError = true;
                }
                if (floatVal < 0) {
                  pError = true;
                } else {
                  d2 = floatVal;
                }
              } else if (regexNonNegativeInteger.test(value) && lastChar === "h") {
                if (h2 || d2) {
                  pError = true;
                }
                if (intVal === 0) {
                  pError = true;
                } else {
                  h2 = intVal;
                }
              } else {
                pError = true;
              }
            }
            if (!pError) {
              candidate.url = url;
              if (w2) {
                candidate.w = w2;
              }
              if (d2) {
                candidate.d = d2;
              }
              if (h2) {
                candidate.h = h2;
              }
              candidates.push(candidate);
            } else if (console && console.log) {
              console.log("Invalid srcset descriptor found in '" + input + "' at '" + desc + "'.");
            }
          }
        };
      });
    }
  });

  // node_modules/picocolors/picocolors.browser.js
  var require_picocolors_browser = __commonJS({
    "node_modules/picocolors/picocolors.browser.js"(exports, module) {
      init_preact_shim();
      var x2 = String;
      var create = function() {
        return { isColorSupported: false, reset: x2, bold: x2, dim: x2, italic: x2, underline: x2, inverse: x2, hidden: x2, strikethrough: x2, black: x2, red: x2, green: x2, yellow: x2, blue: x2, magenta: x2, cyan: x2, white: x2, gray: x2, bgBlack: x2, bgRed: x2, bgGreen: x2, bgYellow: x2, bgBlue: x2, bgMagenta: x2, bgCyan: x2, bgWhite: x2 };
      };
      module.exports = create();
      module.exports.createColors = create;
    }
  });

  // (disabled):node_modules/postcss/lib/terminal-highlight
  var require_terminal_highlight = __commonJS({
    "(disabled):node_modules/postcss/lib/terminal-highlight"() {
      init_preact_shim();
    }
  });

  // node_modules/postcss/lib/css-syntax-error.js
  var require_css_syntax_error = __commonJS({
    "node_modules/postcss/lib/css-syntax-error.js"(exports, module) {
      init_preact_shim();
      "use strict";
      var pico = require_picocolors_browser();
      var terminalHighlight = require_terminal_highlight();
      var CssSyntaxError = class extends Error {
        constructor(message, line, column, source, file, plugin) {
          super(message);
          this.name = "CssSyntaxError";
          this.reason = message;
          if (file) {
            this.file = file;
          }
          if (source) {
            this.source = source;
          }
          if (plugin) {
            this.plugin = plugin;
          }
          if (typeof line !== "undefined" && typeof column !== "undefined") {
            this.line = line;
            this.column = column;
          }
          this.setMessage();
          if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CssSyntaxError);
          }
        }
        setMessage() {
          this.message = this.plugin ? this.plugin + ": " : "";
          this.message += this.file ? this.file : "<css input>";
          if (typeof this.line !== "undefined") {
            this.message += ":" + this.line + ":" + this.column;
          }
          this.message += ": " + this.reason;
        }
        showSourceCode(color) {
          if (!this.source)
            return "";
          let css = this.source;
          if (color == null)
            color = pico.isColorSupported;
          if (terminalHighlight) {
            if (color)
              css = terminalHighlight(css);
          }
          let lines = css.split(/\r?\n/);
          let start = Math.max(this.line - 3, 0);
          let end = Math.min(this.line + 2, lines.length);
          let maxWidth = String(end).length;
          let mark, aside;
          if (color) {
            let { bold, red, gray } = pico.createColors(true);
            mark = (text) => bold(red(text));
            aside = (text) => gray(text);
          } else {
            mark = aside = (str) => str;
          }
          return lines.slice(start, end).map((line, index) => {
            let number = start + 1 + index;
            let gutter = " " + (" " + number).slice(-maxWidth) + " | ";
            if (number === this.line) {
              let spacing = aside(gutter.replace(/\d/g, " ")) + line.slice(0, this.column - 1).replace(/[^\t]/g, " ");
              return mark(">") + aside(gutter) + line + "\n " + spacing + mark("^");
            }
            return " " + aside(gutter) + line;
          }).join("\n");
        }
        toString() {
          let code = this.showSourceCode();
          if (code) {
            code = "\n\n" + code + "\n";
          }
          return this.name + ": " + this.message + code;
        }
      };
      module.exports = CssSyntaxError;
      CssSyntaxError.default = CssSyntaxError;
    }
  });

  // node_modules/postcss/lib/symbols.js
  var require_symbols = __commonJS({
    "node_modules/postcss/lib/symbols.js"(exports, module) {
      init_preact_shim();
      "use strict";
      module.exports.isClean = Symbol("isClean");
      module.exports.my = Symbol("my");
    }
  });

  // node_modules/postcss/lib/stringifier.js
  var require_stringifier = __commonJS({
    "node_modules/postcss/lib/stringifier.js"(exports, module) {
      init_preact_shim();
      "use strict";
      var DEFAULT_RAW = {
        colon: ": ",
        indent: "    ",
        beforeDecl: "\n",
        beforeRule: "\n",
        beforeOpen: " ",
        beforeClose: "\n",
        beforeComment: "\n",
        after: "\n",
        emptyBody: "",
        commentLeft: " ",
        commentRight: " ",
        semicolon: false
      };
      function capitalize(str) {
        return str[0].toUpperCase() + str.slice(1);
      }
      var Stringifier = class {
        constructor(builder) {
          this.builder = builder;
        }
        stringify(node, semicolon) {
          if (!this[node.type]) {
            throw new Error("Unknown AST node type " + node.type + ". Maybe you need to change PostCSS stringifier.");
          }
          this[node.type](node, semicolon);
        }
        document(node) {
          this.body(node);
        }
        root(node) {
          this.body(node);
          if (node.raws.after)
            this.builder(node.raws.after);
        }
        comment(node) {
          let left = this.raw(node, "left", "commentLeft");
          let right = this.raw(node, "right", "commentRight");
          this.builder("/*" + left + node.text + right + "*/", node);
        }
        decl(node, semicolon) {
          let between = this.raw(node, "between", "colon");
          let string = node.prop + between + this.rawValue(node, "value");
          if (node.important) {
            string += node.raws.important || " !important";
          }
          if (semicolon)
            string += ";";
          this.builder(string, node);
        }
        rule(node) {
          this.block(node, this.rawValue(node, "selector"));
          if (node.raws.ownSemicolon) {
            this.builder(node.raws.ownSemicolon, node, "end");
          }
        }
        atrule(node, semicolon) {
          let name = "@" + node.name;
          let params = node.params ? this.rawValue(node, "params") : "";
          if (typeof node.raws.afterName !== "undefined") {
            name += node.raws.afterName;
          } else if (params) {
            name += " ";
          }
          if (node.nodes) {
            this.block(node, name + params);
          } else {
            let end = (node.raws.between || "") + (semicolon ? ";" : "");
            this.builder(name + params + end, node);
          }
        }
        body(node) {
          let last = node.nodes.length - 1;
          while (last > 0) {
            if (node.nodes[last].type !== "comment")
              break;
            last -= 1;
          }
          let semicolon = this.raw(node, "semicolon");
          for (let i3 = 0; i3 < node.nodes.length; i3++) {
            let child = node.nodes[i3];
            let before = this.raw(child, "before");
            if (before)
              this.builder(before);
            this.stringify(child, last !== i3 || semicolon);
          }
        }
        block(node, start) {
          let between = this.raw(node, "between", "beforeOpen");
          this.builder(start + between + "{", node, "start");
          let after;
          if (node.nodes && node.nodes.length) {
            this.body(node);
            after = this.raw(node, "after");
          } else {
            after = this.raw(node, "after", "emptyBody");
          }
          if (after)
            this.builder(after);
          this.builder("}", node, "end");
        }
        raw(node, own, detect) {
          let value;
          if (!detect)
            detect = own;
          if (own) {
            value = node.raws[own];
            if (typeof value !== "undefined")
              return value;
          }
          let parent = node.parent;
          if (detect === "before") {
            if (!parent || parent.type === "root" && parent.first === node) {
              return "";
            }
            if (parent && parent.type === "document") {
              return "";
            }
          }
          if (!parent)
            return DEFAULT_RAW[detect];
          let root = node.root();
          if (!root.rawCache)
            root.rawCache = {};
          if (typeof root.rawCache[detect] !== "undefined") {
            return root.rawCache[detect];
          }
          if (detect === "before" || detect === "after") {
            return this.beforeAfter(node, detect);
          } else {
            let method = "raw" + capitalize(detect);
            if (this[method]) {
              value = this[method](root, node);
            } else {
              root.walk((i3) => {
                value = i3.raws[own];
                if (typeof value !== "undefined")
                  return false;
              });
            }
          }
          if (typeof value === "undefined")
            value = DEFAULT_RAW[detect];
          root.rawCache[detect] = value;
          return value;
        }
        rawSemicolon(root) {
          let value;
          root.walk((i3) => {
            if (i3.nodes && i3.nodes.length && i3.last.type === "decl") {
              value = i3.raws.semicolon;
              if (typeof value !== "undefined")
                return false;
            }
          });
          return value;
        }
        rawEmptyBody(root) {
          let value;
          root.walk((i3) => {
            if (i3.nodes && i3.nodes.length === 0) {
              value = i3.raws.after;
              if (typeof value !== "undefined")
                return false;
            }
          });
          return value;
        }
        rawIndent(root) {
          if (root.raws.indent)
            return root.raws.indent;
          let value;
          root.walk((i3) => {
            let p = i3.parent;
            if (p && p !== root && p.parent && p.parent === root) {
              if (typeof i3.raws.before !== "undefined") {
                let parts = i3.raws.before.split("\n");
                value = parts[parts.length - 1];
                value = value.replace(/\S/g, "");
                return false;
              }
            }
          });
          return value;
        }
        rawBeforeComment(root, node) {
          let value;
          root.walkComments((i3) => {
            if (typeof i3.raws.before !== "undefined") {
              value = i3.raws.before;
              if (value.includes("\n")) {
                value = value.replace(/[^\n]+$/, "");
              }
              return false;
            }
          });
          if (typeof value === "undefined") {
            value = this.raw(node, null, "beforeDecl");
          } else if (value) {
            value = value.replace(/\S/g, "");
          }
          return value;
        }
        rawBeforeDecl(root, node) {
          let value;
          root.walkDecls((i3) => {
            if (typeof i3.raws.before !== "undefined") {
              value = i3.raws.before;
              if (value.includes("\n")) {
                value = value.replace(/[^\n]+$/, "");
              }
              return false;
            }
          });
          if (typeof value === "undefined") {
            value = this.raw(node, null, "beforeRule");
          } else if (value) {
            value = value.replace(/\S/g, "");
          }
          return value;
        }
        rawBeforeRule(root) {
          let value;
          root.walk((i3) => {
            if (i3.nodes && (i3.parent !== root || root.first !== i3)) {
              if (typeof i3.raws.before !== "undefined") {
                value = i3.raws.before;
                if (value.includes("\n")) {
                  value = value.replace(/[^\n]+$/, "");
                }
                return false;
              }
            }
          });
          if (value)
            value = value.replace(/\S/g, "");
          return value;
        }
        rawBeforeClose(root) {
          let value;
          root.walk((i3) => {
            if (i3.nodes && i3.nodes.length > 0) {
              if (typeof i3.raws.after !== "undefined") {
                value = i3.raws.after;
                if (value.includes("\n")) {
                  value = value.replace(/[^\n]+$/, "");
                }
                return false;
              }
            }
          });
          if (value)
            value = value.replace(/\S/g, "");
          return value;
        }
        rawBeforeOpen(root) {
          let value;
          root.walk((i3) => {
            if (i3.type !== "decl") {
              value = i3.raws.between;
              if (typeof value !== "undefined")
                return false;
            }
          });
          return value;
        }
        rawColon(root) {
          let value;
          root.walkDecls((i3) => {
            if (typeof i3.raws.between !== "undefined") {
              value = i3.raws.between.replace(/[^\s:]/g, "");
              return false;
            }
          });
          return value;
        }
        beforeAfter(node, detect) {
          let value;
          if (node.type === "decl") {
            value = this.raw(node, null, "beforeDecl");
          } else if (node.type === "comment") {
            value = this.raw(node, null, "beforeComment");
          } else if (detect === "before") {
            value = this.raw(node, null, "beforeRule");
          } else {
            value = this.raw(node, null, "beforeClose");
          }
          let buf = node.parent;
          let depth = 0;
          while (buf && buf.type !== "root") {
            depth += 1;
            buf = buf.parent;
          }
          if (value.includes("\n")) {
            let indent = this.raw(node, null, "indent");
            if (indent.length) {
              for (let step = 0; step < depth; step++)
                value += indent;
            }
          }
          return value;
        }
        rawValue(node, prop) {
          let value = node[prop];
          let raw = node.raws[prop];
          if (raw && raw.value === value) {
            return raw.raw;
          }
          return value;
        }
      };
      module.exports = Stringifier;
    }
  });

  // node_modules/postcss/lib/stringify.js
  var require_stringify2 = __commonJS({
    "node_modules/postcss/lib/stringify.js"(exports, module) {
      init_preact_shim();
      "use strict";
      var Stringifier = require_stringifier();
      function stringify(node, builder) {
        let str = new Stringifier(builder);
        str.stringify(node);
      }
      module.exports = stringify;
      stringify.default = stringify;
    }
  });

  // node_modules/postcss/lib/node.js
  var require_node2 = __commonJS({
    "node_modules/postcss/lib/node.js"(exports, module) {
      init_preact_shim();
      "use strict";
      var { isClean, my } = require_symbols();
      var CssSyntaxError = require_css_syntax_error();
      var Stringifier = require_stringifier();
      var stringify = require_stringify2();
      function cloneNode(obj, parent) {
        let cloned = new obj.constructor();
        for (let i3 in obj) {
          if (!Object.prototype.hasOwnProperty.call(obj, i3)) {
            continue;
          }
          if (i3 === "proxyCache")
            continue;
          let value = obj[i3];
          let type = typeof value;
          if (i3 === "parent" && type === "object") {
            if (parent)
              cloned[i3] = parent;
          } else if (i3 === "source") {
            cloned[i3] = value;
          } else if (Array.isArray(value)) {
            cloned[i3] = value.map((j2) => cloneNode(j2, cloned));
          } else {
            if (type === "object" && value !== null)
              value = cloneNode(value);
            cloned[i3] = value;
          }
        }
        return cloned;
      }
      var Node = class {
        constructor(defaults = {}) {
          this.raws = {};
          this[isClean] = false;
          this[my] = true;
          for (let name in defaults) {
            if (name === "nodes") {
              this.nodes = [];
              for (let node of defaults[name]) {
                if (typeof node.clone === "function") {
                  this.append(node.clone());
                } else {
                  this.append(node);
                }
              }
            } else {
              this[name] = defaults[name];
            }
          }
        }
        error(message, opts = {}) {
          if (this.source) {
            let pos = this.positionBy(opts);
            return this.source.input.error(message, pos.line, pos.column, opts);
          }
          return new CssSyntaxError(message);
        }
        warn(result, text, opts) {
          let data = { node: this };
          for (let i3 in opts)
            data[i3] = opts[i3];
          return result.warn(text, data);
        }
        remove() {
          if (this.parent) {
            this.parent.removeChild(this);
          }
          this.parent = void 0;
          return this;
        }
        toString(stringifier = stringify) {
          if (stringifier.stringify)
            stringifier = stringifier.stringify;
          let result = "";
          stringifier(this, (i3) => {
            result += i3;
          });
          return result;
        }
        assign(overrides = {}) {
          for (let name in overrides) {
            this[name] = overrides[name];
          }
          return this;
        }
        clone(overrides = {}) {
          let cloned = cloneNode(this);
          for (let name in overrides) {
            cloned[name] = overrides[name];
          }
          return cloned;
        }
        cloneBefore(overrides = {}) {
          let cloned = this.clone(overrides);
          this.parent.insertBefore(this, cloned);
          return cloned;
        }
        cloneAfter(overrides = {}) {
          let cloned = this.clone(overrides);
          this.parent.insertAfter(this, cloned);
          return cloned;
        }
        replaceWith(...nodes) {
          if (this.parent) {
            let bookmark = this;
            let foundSelf = false;
            for (let node of nodes) {
              if (node === this) {
                foundSelf = true;
              } else if (foundSelf) {
                this.parent.insertAfter(bookmark, node);
                bookmark = node;
              } else {
                this.parent.insertBefore(bookmark, node);
              }
            }
            if (!foundSelf) {
              this.remove();
            }
          }
          return this;
        }
        next() {
          if (!this.parent)
            return void 0;
          let index = this.parent.index(this);
          return this.parent.nodes[index + 1];
        }
        prev() {
          if (!this.parent)
            return void 0;
          let index = this.parent.index(this);
          return this.parent.nodes[index - 1];
        }
        before(add) {
          this.parent.insertBefore(this, add);
          return this;
        }
        after(add) {
          this.parent.insertAfter(this, add);
          return this;
        }
        root() {
          let result = this;
          while (result.parent && result.parent.type !== "document") {
            result = result.parent;
          }
          return result;
        }
        raw(prop, defaultType) {
          let str = new Stringifier();
          return str.raw(this, prop, defaultType);
        }
        cleanRaws(keepBetween) {
          delete this.raws.before;
          delete this.raws.after;
          if (!keepBetween)
            delete this.raws.between;
        }
        toJSON(_3, inputs) {
          let fixed = {};
          let emitInputs = inputs == null;
          inputs = inputs || new Map();
          let inputsNextIndex = 0;
          for (let name in this) {
            if (!Object.prototype.hasOwnProperty.call(this, name)) {
              continue;
            }
            if (name === "parent" || name === "proxyCache")
              continue;
            let value = this[name];
            if (Array.isArray(value)) {
              fixed[name] = value.map((i3) => {
                if (typeof i3 === "object" && i3.toJSON) {
                  return i3.toJSON(null, inputs);
                } else {
                  return i3;
                }
              });
            } else if (typeof value === "object" && value.toJSON) {
              fixed[name] = value.toJSON(null, inputs);
            } else if (name === "source") {
              let inputId = inputs.get(value.input);
              if (inputId == null) {
                inputId = inputsNextIndex;
                inputs.set(value.input, inputsNextIndex);
                inputsNextIndex++;
              }
              fixed[name] = {
                inputId,
                start: value.start,
                end: value.end
              };
            } else {
              fixed[name] = value;
            }
          }
          if (emitInputs) {
            fixed.inputs = [...inputs.keys()].map((input) => input.toJSON());
          }
          return fixed;
        }
        positionInside(index) {
          let string = this.toString();
          let column = this.source.start.column;
          let line = this.source.start.line;
          for (let i3 = 0; i3 < index; i3++) {
            if (string[i3] === "\n") {
              column = 1;
              line += 1;
            } else {
              column += 1;
            }
          }
          return { line, column };
        }
        positionBy(opts) {
          let pos = this.source.start;
          if (opts.index) {
            pos = this.positionInside(opts.index);
          } else if (opts.word) {
            let index = this.toString().indexOf(opts.word);
            if (index !== -1)
              pos = this.positionInside(index);
          }
          return pos;
        }
        getProxyProcessor() {
          return {
            set(node, prop, value) {
              if (node[prop] === value)
                return true;
              node[prop] = value;
              if (prop === "prop" || prop === "value" || prop === "name" || prop === "params" || prop === "important" || prop === "text") {
                node.markDirty();
              }
              return true;
            },
            get(node, prop) {
              if (prop === "proxyOf") {
                return node;
              } else if (prop === "root") {
                return () => node.root().toProxy();
              } else {
                return node[prop];
              }
            }
          };
        }
        toProxy() {
          if (!this.proxyCache) {
            this.proxyCache = new Proxy(this, this.getProxyProcessor());
          }
          return this.proxyCache;
        }
        addToError(error) {
          error.postcssNode = this;
          if (error.stack && this.source && /\n\s{4}at /.test(error.stack)) {
            let s3 = this.source;
            error.stack = error.stack.replace(/\n\s{4}at /, `$&${s3.input.from}:${s3.start.line}:${s3.start.column}$&`);
          }
          return error;
        }
        markDirty() {
          if (this[isClean]) {
            this[isClean] = false;
            let next = this;
            while (next = next.parent) {
              next[isClean] = false;
            }
          }
        }
        get proxyOf() {
          return this;
        }
      };
      module.exports = Node;
      Node.default = Node;
    }
  });

  // node_modules/postcss/lib/declaration.js
  var require_declaration = __commonJS({
    "node_modules/postcss/lib/declaration.js"(exports, module) {
      init_preact_shim();
      "use strict";
      var Node = require_node2();
      var Declaration = class extends Node {
        constructor(defaults) {
          if (defaults && typeof defaults.value !== "undefined" && typeof defaults.value !== "string") {
            defaults = { ...defaults, value: String(defaults.value) };
          }
          super(defaults);
          this.type = "decl";
        }
        get variable() {
          return this.prop.startsWith("--") || this.prop[0] === "$";
        }
      };
      module.exports = Declaration;
      Declaration.default = Declaration;
    }
  });

  // (disabled):node_modules/source-map-js/source-map.js
  var require_source_map = __commonJS({
    "(disabled):node_modules/source-map-js/source-map.js"() {
      init_preact_shim();
    }
  });

  // (disabled):path
  var require_path = __commonJS({
    "(disabled):path"() {
      init_preact_shim();
    }
  });

  // (disabled):url
  var require_url = __commonJS({
    "(disabled):url"() {
      init_preact_shim();
    }
  });

  // node_modules/postcss/lib/map-generator.js
  var require_map_generator = __commonJS({
    "node_modules/postcss/lib/map-generator.js"(exports, module) {
      init_preact_shim();
      "use strict";
      var { SourceMapConsumer, SourceMapGenerator } = require_source_map();
      var { dirname, resolve, relative, sep } = require_path();
      var { pathToFileURL } = require_url();
      var sourceMapAvailable = Boolean(SourceMapConsumer && SourceMapGenerator);
      var pathAvailable = Boolean(dirname && resolve && relative && sep);
      var MapGenerator = class {
        constructor(stringify, root, opts) {
          this.stringify = stringify;
          this.mapOpts = opts.map || {};
          this.root = root;
          this.opts = opts;
        }
        isMap() {
          if (typeof this.opts.map !== "undefined") {
            return !!this.opts.map;
          }
          return this.previous().length > 0;
        }
        previous() {
          if (!this.previousMaps) {
            this.previousMaps = [];
            this.root.walk((node) => {
              if (node.source && node.source.input.map) {
                let map = node.source.input.map;
                if (!this.previousMaps.includes(map)) {
                  this.previousMaps.push(map);
                }
              }
            });
          }
          return this.previousMaps;
        }
        isInline() {
          if (typeof this.mapOpts.inline !== "undefined") {
            return this.mapOpts.inline;
          }
          let annotation = this.mapOpts.annotation;
          if (typeof annotation !== "undefined" && annotation !== true) {
            return false;
          }
          if (this.previous().length) {
            return this.previous().some((i3) => i3.inline);
          }
          return true;
        }
        isSourcesContent() {
          if (typeof this.mapOpts.sourcesContent !== "undefined") {
            return this.mapOpts.sourcesContent;
          }
          if (this.previous().length) {
            return this.previous().some((i3) => i3.withContent());
          }
          return true;
        }
        clearAnnotation() {
          if (this.mapOpts.annotation === false)
            return;
          let node;
          for (let i3 = this.root.nodes.length - 1; i3 >= 0; i3--) {
            node = this.root.nodes[i3];
            if (node.type !== "comment")
              continue;
            if (node.text.indexOf("# sourceMappingURL=") === 0) {
              this.root.removeChild(i3);
            }
          }
        }
        setSourcesContent() {
          let already = {};
          this.root.walk((node) => {
            if (node.source) {
              let from = node.source.input.from;
              if (from && !already[from]) {
                already[from] = true;
                this.map.setSourceContent(this.toUrl(this.path(from)), node.source.input.css);
              }
            }
          });
        }
        applyPrevMaps() {
          for (let prev of this.previous()) {
            let from = this.toUrl(this.path(prev.file));
            let root = prev.root || dirname(prev.file);
            let map;
            if (this.mapOpts.sourcesContent === false) {
              map = new SourceMapConsumer(prev.text);
              if (map.sourcesContent) {
                map.sourcesContent = map.sourcesContent.map(() => null);
              }
            } else {
              map = prev.consumer();
            }
            this.map.applySourceMap(map, from, this.toUrl(this.path(root)));
          }
        }
        isAnnotation() {
          if (this.isInline()) {
            return true;
          }
          if (typeof this.mapOpts.annotation !== "undefined") {
            return this.mapOpts.annotation;
          }
          if (this.previous().length) {
            return this.previous().some((i3) => i3.annotation);
          }
          return true;
        }
        toBase64(str) {
          if (Buffer) {
            return Buffer.from(str).toString("base64");
          } else {
            return window.btoa(unescape(encodeURIComponent(str)));
          }
        }
        addAnnotation() {
          let content;
          if (this.isInline()) {
            content = "data:application/json;base64," + this.toBase64(this.map.toString());
          } else if (typeof this.mapOpts.annotation === "string") {
            content = this.mapOpts.annotation;
          } else if (typeof this.mapOpts.annotation === "function") {
            content = this.mapOpts.annotation(this.opts.to, this.root);
          } else {
            content = this.outputFile() + ".map";
          }
          let eol = "\n";
          if (this.css.includes("\r\n"))
            eol = "\r\n";
          this.css += eol + "/*# sourceMappingURL=" + content + " */";
        }
        outputFile() {
          if (this.opts.to) {
            return this.path(this.opts.to);
          }
          if (this.opts.from) {
            return this.path(this.opts.from);
          }
          return "to.css";
        }
        generateMap() {
          this.generateString();
          if (this.isSourcesContent())
            this.setSourcesContent();
          if (this.previous().length > 0)
            this.applyPrevMaps();
          if (this.isAnnotation())
            this.addAnnotation();
          if (this.isInline()) {
            return [this.css];
          }
          return [this.css, this.map];
        }
        path(file) {
          if (file.indexOf("<") === 0)
            return file;
          if (/^\w+:\/\//.test(file))
            return file;
          if (this.mapOpts.absolute)
            return file;
          let from = this.opts.to ? dirname(this.opts.to) : ".";
          if (typeof this.mapOpts.annotation === "string") {
            from = dirname(resolve(from, this.mapOpts.annotation));
          }
          file = relative(from, file);
          return file;
        }
        toUrl(path) {
          if (sep === "\\") {
            path = path.replace(/\\/g, "/");
          }
          return encodeURI(path).replace(/[#?]/g, encodeURIComponent);
        }
        sourcePath(node) {
          if (this.mapOpts.from) {
            return this.toUrl(this.mapOpts.from);
          } else if (this.mapOpts.absolute) {
            if (pathToFileURL) {
              return pathToFileURL(node.source.input.from).toString();
            } else {
              throw new Error("`map.absolute` option is not available in this PostCSS build");
            }
          } else {
            return this.toUrl(this.path(node.source.input.from));
          }
        }
        generateString() {
          this.css = "";
          this.map = new SourceMapGenerator({ file: this.outputFile() });
          let line = 1;
          let column = 1;
          let noSource = "<no source>";
          let mapping = {
            source: "",
            generated: { line: 0, column: 0 },
            original: { line: 0, column: 0 }
          };
          let lines, last;
          this.stringify(this.root, (str, node, type) => {
            this.css += str;
            if (node && type !== "end") {
              mapping.generated.line = line;
              mapping.generated.column = column - 1;
              if (node.source && node.source.start) {
                mapping.source = this.sourcePath(node);
                mapping.original.line = node.source.start.line;
                mapping.original.column = node.source.start.column - 1;
                this.map.addMapping(mapping);
              } else {
                mapping.source = noSource;
                mapping.original.line = 1;
                mapping.original.column = 0;
                this.map.addMapping(mapping);
              }
            }
            lines = str.match(/\n/g);
            if (lines) {
              line += lines.length;
              last = str.lastIndexOf("\n");
              column = str.length - last;
            } else {
              column += str.length;
            }
            if (node && type !== "start") {
              let p = node.parent || { raws: {} };
              if (node.type !== "decl" || node !== p.last || p.raws.semicolon) {
                if (node.source && node.source.end) {
                  mapping.source = this.sourcePath(node);
                  mapping.original.line = node.source.end.line;
                  mapping.original.column = node.source.end.column - 1;
                  mapping.generated.line = line;
                  mapping.generated.column = column - 2;
                  this.map.addMapping(mapping);
                } else {
                  mapping.source = noSource;
                  mapping.original.line = 1;
                  mapping.original.column = 0;
                  mapping.generated.line = line;
                  mapping.generated.column = column - 1;
                  this.map.addMapping(mapping);
                }
              }
            }
          });
        }
        generate() {
          this.clearAnnotation();
          if (pathAvailable && sourceMapAvailable && this.isMap()) {
            return this.generateMap();
          }
          let result = "";
          this.stringify(this.root, (i3) => {
            result += i3;
          });
          return [result];
        }
      };
      module.exports = MapGenerator;
    }
  });

  // node_modules/postcss/lib/comment.js
  var require_comment = __commonJS({
    "node_modules/postcss/lib/comment.js"(exports, module) {
      init_preact_shim();
      "use strict";
      var Node = require_node2();
      var Comment = class extends Node {
        constructor(defaults) {
          super(defaults);
          this.type = "comment";
        }
      };
      module.exports = Comment;
      Comment.default = Comment;
    }
  });

  // node_modules/postcss/lib/container.js
  var require_container = __commonJS({
    "node_modules/postcss/lib/container.js"(exports, module) {
      init_preact_shim();
      "use strict";
      var { isClean, my } = require_symbols();
      var Declaration = require_declaration();
      var Comment = require_comment();
      var Node = require_node2();
      var parse;
      var Rule;
      var AtRule;
      function cleanSource(nodes) {
        return nodes.map((i3) => {
          if (i3.nodes)
            i3.nodes = cleanSource(i3.nodes);
          delete i3.source;
          return i3;
        });
      }
      function markDirtyUp(node) {
        node[isClean] = false;
        if (node.proxyOf.nodes) {
          for (let i3 of node.proxyOf.nodes) {
            markDirtyUp(i3);
          }
        }
      }
      var Container = class extends Node {
        push(child) {
          child.parent = this;
          this.proxyOf.nodes.push(child);
          return this;
        }
        each(callback) {
          if (!this.proxyOf.nodes)
            return void 0;
          let iterator = this.getIterator();
          let index, result;
          while (this.indexes[iterator] < this.proxyOf.nodes.length) {
            index = this.indexes[iterator];
            result = callback(this.proxyOf.nodes[index], index);
            if (result === false)
              break;
            this.indexes[iterator] += 1;
          }
          delete this.indexes[iterator];
          return result;
        }
        walk(callback) {
          return this.each((child, i3) => {
            let result;
            try {
              result = callback(child, i3);
            } catch (e2) {
              throw child.addToError(e2);
            }
            if (result !== false && child.walk) {
              result = child.walk(callback);
            }
            return result;
          });
        }
        walkDecls(prop, callback) {
          if (!callback) {
            callback = prop;
            return this.walk((child, i3) => {
              if (child.type === "decl") {
                return callback(child, i3);
              }
            });
          }
          if (prop instanceof RegExp) {
            return this.walk((child, i3) => {
              if (child.type === "decl" && prop.test(child.prop)) {
                return callback(child, i3);
              }
            });
          }
          return this.walk((child, i3) => {
            if (child.type === "decl" && child.prop === prop) {
              return callback(child, i3);
            }
          });
        }
        walkRules(selector, callback) {
          if (!callback) {
            callback = selector;
            return this.walk((child, i3) => {
              if (child.type === "rule") {
                return callback(child, i3);
              }
            });
          }
          if (selector instanceof RegExp) {
            return this.walk((child, i3) => {
              if (child.type === "rule" && selector.test(child.selector)) {
                return callback(child, i3);
              }
            });
          }
          return this.walk((child, i3) => {
            if (child.type === "rule" && child.selector === selector) {
              return callback(child, i3);
            }
          });
        }
        walkAtRules(name, callback) {
          if (!callback) {
            callback = name;
            return this.walk((child, i3) => {
              if (child.type === "atrule") {
                return callback(child, i3);
              }
            });
          }
          if (name instanceof RegExp) {
            return this.walk((child, i3) => {
              if (child.type === "atrule" && name.test(child.name)) {
                return callback(child, i3);
              }
            });
          }
          return this.walk((child, i3) => {
            if (child.type === "atrule" && child.name === name) {
              return callback(child, i3);
            }
          });
        }
        walkComments(callback) {
          return this.walk((child, i3) => {
            if (child.type === "comment") {
              return callback(child, i3);
            }
          });
        }
        append(...children) {
          for (let child of children) {
            let nodes = this.normalize(child, this.last);
            for (let node of nodes)
              this.proxyOf.nodes.push(node);
          }
          this.markDirty();
          return this;
        }
        prepend(...children) {
          children = children.reverse();
          for (let child of children) {
            let nodes = this.normalize(child, this.first, "prepend").reverse();
            for (let node of nodes)
              this.proxyOf.nodes.unshift(node);
            for (let id in this.indexes) {
              this.indexes[id] = this.indexes[id] + nodes.length;
            }
          }
          this.markDirty();
          return this;
        }
        cleanRaws(keepBetween) {
          super.cleanRaws(keepBetween);
          if (this.nodes) {
            for (let node of this.nodes)
              node.cleanRaws(keepBetween);
          }
        }
        insertBefore(exist, add) {
          exist = this.index(exist);
          let type = exist === 0 ? "prepend" : false;
          let nodes = this.normalize(add, this.proxyOf.nodes[exist], type).reverse();
          for (let node of nodes)
            this.proxyOf.nodes.splice(exist, 0, node);
          let index;
          for (let id in this.indexes) {
            index = this.indexes[id];
            if (exist <= index) {
              this.indexes[id] = index + nodes.length;
            }
          }
          this.markDirty();
          return this;
        }
        insertAfter(exist, add) {
          exist = this.index(exist);
          let nodes = this.normalize(add, this.proxyOf.nodes[exist]).reverse();
          for (let node of nodes)
            this.proxyOf.nodes.splice(exist + 1, 0, node);
          let index;
          for (let id in this.indexes) {
            index = this.indexes[id];
            if (exist < index) {
              this.indexes[id] = index + nodes.length;
            }
          }
          this.markDirty();
          return this;
        }
        removeChild(child) {
          child = this.index(child);
          this.proxyOf.nodes[child].parent = void 0;
          this.proxyOf.nodes.splice(child, 1);
          let index;
          for (let id in this.indexes) {
            index = this.indexes[id];
            if (index >= child) {
              this.indexes[id] = index - 1;
            }
          }
          this.markDirty();
          return this;
        }
        removeAll() {
          for (let node of this.proxyOf.nodes)
            node.parent = void 0;
          this.proxyOf.nodes = [];
          this.markDirty();
          return this;
        }
        replaceValues(pattern, opts, callback) {
          if (!callback) {
            callback = opts;
            opts = {};
          }
          this.walkDecls((decl) => {
            if (opts.props && !opts.props.includes(decl.prop))
              return;
            if (opts.fast && !decl.value.includes(opts.fast))
              return;
            decl.value = decl.value.replace(pattern, callback);
          });
          this.markDirty();
          return this;
        }
        every(condition) {
          return this.nodes.every(condition);
        }
        some(condition) {
          return this.nodes.some(condition);
        }
        index(child) {
          if (typeof child === "number")
            return child;
          if (child.proxyOf)
            child = child.proxyOf;
          return this.proxyOf.nodes.indexOf(child);
        }
        get first() {
          if (!this.proxyOf.nodes)
            return void 0;
          return this.proxyOf.nodes[0];
        }
        get last() {
          if (!this.proxyOf.nodes)
            return void 0;
          return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
        }
        normalize(nodes, sample) {
          if (typeof nodes === "string") {
            nodes = cleanSource(parse(nodes).nodes);
          } else if (Array.isArray(nodes)) {
            nodes = nodes.slice(0);
            for (let i3 of nodes) {
              if (i3.parent)
                i3.parent.removeChild(i3, "ignore");
            }
          } else if (nodes.type === "root" && this.type !== "document") {
            nodes = nodes.nodes.slice(0);
            for (let i3 of nodes) {
              if (i3.parent)
                i3.parent.removeChild(i3, "ignore");
            }
          } else if (nodes.type) {
            nodes = [nodes];
          } else if (nodes.prop) {
            if (typeof nodes.value === "undefined") {
              throw new Error("Value field is missed in node creation");
            } else if (typeof nodes.value !== "string") {
              nodes.value = String(nodes.value);
            }
            nodes = [new Declaration(nodes)];
          } else if (nodes.selector) {
            nodes = [new Rule(nodes)];
          } else if (nodes.name) {
            nodes = [new AtRule(nodes)];
          } else if (nodes.text) {
            nodes = [new Comment(nodes)];
          } else {
            throw new Error("Unknown node type in node creation");
          }
          let processed = nodes.map((i3) => {
            if (!i3[my])
              Container.rebuild(i3);
            i3 = i3.proxyOf;
            if (i3.parent)
              i3.parent.removeChild(i3);
            if (i3[isClean])
              markDirtyUp(i3);
            if (typeof i3.raws.before === "undefined") {
              if (sample && typeof sample.raws.before !== "undefined") {
                i3.raws.before = sample.raws.before.replace(/\S/g, "");
              }
            }
            i3.parent = this;
            return i3;
          });
          return processed;
        }
        getProxyProcessor() {
          return {
            set(node, prop, value) {
              if (node[prop] === value)
                return true;
              node[prop] = value;
              if (prop === "name" || prop === "params" || prop === "selector") {
                node.markDirty();
              }
              return true;
            },
            get(node, prop) {
              if (prop === "proxyOf") {
                return node;
              } else if (!node[prop]) {
                return node[prop];
              } else if (prop === "each" || typeof prop === "string" && prop.startsWith("walk")) {
                return (...args) => {
                  return node[prop](...args.map((i3) => {
                    if (typeof i3 === "function") {
                      return (child, index) => i3(child.toProxy(), index);
                    } else {
                      return i3;
                    }
                  }));
                };
              } else if (prop === "every" || prop === "some") {
                return (cb) => {
                  return node[prop]((child, ...other) => cb(child.toProxy(), ...other));
                };
              } else if (prop === "root") {
                return () => node.root().toProxy();
              } else if (prop === "nodes") {
                return node.nodes.map((i3) => i3.toProxy());
              } else if (prop === "first" || prop === "last") {
                return node[prop].toProxy();
              } else {
                return node[prop];
              }
            }
          };
        }
        getIterator() {
          if (!this.lastEach)
            this.lastEach = 0;
          if (!this.indexes)
            this.indexes = {};
          this.lastEach += 1;
          let iterator = this.lastEach;
          this.indexes[iterator] = 0;
          return iterator;
        }
      };
      Container.registerParse = (dependant) => {
        parse = dependant;
      };
      Container.registerRule = (dependant) => {
        Rule = dependant;
      };
      Container.registerAtRule = (dependant) => {
        AtRule = dependant;
      };
      module.exports = Container;
      Container.default = Container;
      Container.rebuild = (node) => {
        if (node.type === "atrule") {
          Object.setPrototypeOf(node, AtRule.prototype);
        } else if (node.type === "rule") {
          Object.setPrototypeOf(node, Rule.prototype);
        } else if (node.type === "decl") {
          Object.setPrototypeOf(node, Declaration.prototype);
        } else if (node.type === "comment") {
          Object.setPrototypeOf(node, Comment.prototype);
        }
        node[my] = true;
        if (node.nodes) {
          node.nodes.forEach((child) => {
            Container.rebuild(child);
          });
        }
      };
    }
  });

  // node_modules/postcss/lib/document.js
  var require_document = __commonJS({
    "node_modules/postcss/lib/document.js"(exports, module) {
      init_preact_shim();
      "use strict";
      var Container = require_container();
      var LazyResult;
      var Processor;
      var Document = class extends Container {
        constructor(defaults) {
          super({ type: "document", ...defaults });
          if (!this.nodes) {
            this.nodes = [];
          }
        }
        toResult(opts = {}) {
          let lazy = new LazyResult(new Processor(), this, opts);
          return lazy.stringify();
        }
      };
      Document.registerLazyResult = (dependant) => {
        LazyResult = dependant;
      };
      Document.registerProcessor = (dependant) => {
        Processor = dependant;
      };
      module.exports = Document;
      Document.default = Document;
    }
  });

  // node_modules/postcss/lib/warn-once.js
  var require_warn_once = __commonJS({
    "node_modules/postcss/lib/warn-once.js"(exports, module) {
      init_preact_shim();
      "use strict";
      var printed = {};
      module.exports = function warnOnce(message) {
        if (printed[message])
          return;
        printed[message] = true;
        if (typeof console !== "undefined" && console.warn) {
          console.warn(message);
        }
      };
    }
  });

  // node_modules/postcss/lib/warning.js
  var require_warning = __commonJS({
    "node_modules/postcss/lib/warning.js"(exports, module) {
      init_preact_shim();
      "use strict";
      var Warning = class {
        constructor(text, opts = {}) {
          this.type = "warning";
          this.text = text;
          if (opts.node && opts.node.source) {
            let pos = opts.node.positionBy(opts);
            this.line = pos.line;
            this.column = pos.column;
          }
          for (let opt in opts)
            this[opt] = opts[opt];
        }
        toString() {
          if (this.node) {
            return this.node.error(this.text, {
              plugin: this.plugin,
              index: this.index,
              word: this.word
            }).message;
          }
          if (this.plugin) {
            return this.plugin + ": " + this.text;
          }
          return this.text;
        }
      };
      module.exports = Warning;
      Warning.default = Warning;
    }
  });

  // node_modules/postcss/lib/result.js
  var require_result = __commonJS({
    "node_modules/postcss/lib/result.js"(exports, module) {
      init_preact_shim();
      "use strict";
      var Warning = require_warning();
      var Result = class {
        constructor(processor, root, opts) {
          this.processor = processor;
          this.messages = [];
          this.root = root;
          this.opts = opts;
          this.css = void 0;
          this.map = void 0;
        }
        toString() {
          return this.css;
        }
        warn(text, opts = {}) {
          if (!opts.plugin) {
            if (this.lastPlugin && this.lastPlugin.postcssPlugin) {
              opts.plugin = this.lastPlugin.postcssPlugin;
            }
          }
          let warning = new Warning(text, opts);
          this.messages.push(warning);
          return warning;
        }
        warnings() {
          return this.messages.filter((i3) => i3.type === "warning");
        }
        get content() {
          return this.css;
        }
      };
      module.exports = Result;
      Result.default = Result;
    }
  });

  // node_modules/postcss/lib/tokenize.js
  var require_tokenize = __commonJS({
    "node_modules/postcss/lib/tokenize.js"(exports, module) {
      init_preact_shim();
      "use strict";
      var SINGLE_QUOTE = "'".charCodeAt(0);
      var DOUBLE_QUOTE = '"'.charCodeAt(0);
      var BACKSLASH = "\\".charCodeAt(0);
      var SLASH = "/".charCodeAt(0);
      var NEWLINE = "\n".charCodeAt(0);
      var SPACE = " ".charCodeAt(0);
      var FEED = "\f".charCodeAt(0);
      var TAB = "	".charCodeAt(0);
      var CR = "\r".charCodeAt(0);
      var OPEN_SQUARE = "[".charCodeAt(0);
      var CLOSE_SQUARE = "]".charCodeAt(0);
      var OPEN_PARENTHESES = "(".charCodeAt(0);
      var CLOSE_PARENTHESES = ")".charCodeAt(0);
      var OPEN_CURLY = "{".charCodeAt(0);
      var CLOSE_CURLY = "}".charCodeAt(0);
      var SEMICOLON = ";".charCodeAt(0);
      var ASTERISK = "*".charCodeAt(0);
      var COLON = ":".charCodeAt(0);
      var AT = "@".charCodeAt(0);
      var RE_AT_END = /[\t\n\f\r "#'()/;[\\\]{}]/g;
      var RE_WORD_END = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g;
      var RE_BAD_BRACKET = /.[\n"'(/\\]/;
      var RE_HEX_ESCAPE = /[\da-f]/i;
      module.exports = function tokenizer(input, options = {}) {
        let css = input.css.valueOf();
        let ignore = options.ignoreErrors;
        let code, next, quote, content, escape;
        let escaped, escapePos, prev, n2, currentToken;
        let length = css.length;
        let pos = 0;
        let buffer = [];
        let returned = [];
        function position() {
          return pos;
        }
        function unclosed(what) {
          throw input.error("Unclosed " + what, pos);
        }
        function endOfFile() {
          return returned.length === 0 && pos >= length;
        }
        function nextToken(opts) {
          if (returned.length)
            return returned.pop();
          if (pos >= length)
            return;
          let ignoreUnclosed = opts ? opts.ignoreUnclosed : false;
          code = css.charCodeAt(pos);
          switch (code) {
            case NEWLINE:
            case SPACE:
            case TAB:
            case CR:
            case FEED: {
              next = pos;
              do {
                next += 1;
                code = css.charCodeAt(next);
              } while (code === SPACE || code === NEWLINE || code === TAB || code === CR || code === FEED);
              currentToken = ["space", css.slice(pos, next)];
              pos = next - 1;
              break;
            }
            case OPEN_SQUARE:
            case CLOSE_SQUARE:
            case OPEN_CURLY:
            case CLOSE_CURLY:
            case COLON:
            case SEMICOLON:
            case CLOSE_PARENTHESES: {
              let controlChar = String.fromCharCode(code);
              currentToken = [controlChar, controlChar, pos];
              break;
            }
            case OPEN_PARENTHESES: {
              prev = buffer.length ? buffer.pop()[1] : "";
              n2 = css.charCodeAt(pos + 1);
              if (prev === "url" && n2 !== SINGLE_QUOTE && n2 !== DOUBLE_QUOTE && n2 !== SPACE && n2 !== NEWLINE && n2 !== TAB && n2 !== FEED && n2 !== CR) {
                next = pos;
                do {
                  escaped = false;
                  next = css.indexOf(")", next + 1);
                  if (next === -1) {
                    if (ignore || ignoreUnclosed) {
                      next = pos;
                      break;
                    } else {
                      unclosed("bracket");
                    }
                  }
                  escapePos = next;
                  while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
                    escapePos -= 1;
                    escaped = !escaped;
                  }
                } while (escaped);
                currentToken = ["brackets", css.slice(pos, next + 1), pos, next];
                pos = next;
              } else {
                next = css.indexOf(")", pos + 1);
                content = css.slice(pos, next + 1);
                if (next === -1 || RE_BAD_BRACKET.test(content)) {
                  currentToken = ["(", "(", pos];
                } else {
                  currentToken = ["brackets", content, pos, next];
                  pos = next;
                }
              }
              break;
            }
            case SINGLE_QUOTE:
            case DOUBLE_QUOTE: {
              quote = code === SINGLE_QUOTE ? "'" : '"';
              next = pos;
              do {
                escaped = false;
                next = css.indexOf(quote, next + 1);
                if (next === -1) {
                  if (ignore || ignoreUnclosed) {
                    next = pos + 1;
                    break;
                  } else {
                    unclosed("string");
                  }
                }
                escapePos = next;
                while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
                  escapePos -= 1;
                  escaped = !escaped;
                }
              } while (escaped);
              currentToken = ["string", css.slice(pos, next + 1), pos, next];
              pos = next;
              break;
            }
            case AT: {
              RE_AT_END.lastIndex = pos + 1;
              RE_AT_END.test(css);
              if (RE_AT_END.lastIndex === 0) {
                next = css.length - 1;
              } else {
                next = RE_AT_END.lastIndex - 2;
              }
              currentToken = ["at-word", css.slice(pos, next + 1), pos, next];
              pos = next;
              break;
            }
            case BACKSLASH: {
              next = pos;
              escape = true;
              while (css.charCodeAt(next + 1) === BACKSLASH) {
                next += 1;
                escape = !escape;
              }
              code = css.charCodeAt(next + 1);
              if (escape && code !== SLASH && code !== SPACE && code !== NEWLINE && code !== TAB && code !== CR && code !== FEED) {
                next += 1;
                if (RE_HEX_ESCAPE.test(css.charAt(next))) {
                  while (RE_HEX_ESCAPE.test(css.charAt(next + 1))) {
                    next += 1;
                  }
                  if (css.charCodeAt(next + 1) === SPACE) {
                    next += 1;
                  }
                }
              }
              currentToken = ["word", css.slice(pos, next + 1), pos, next];
              pos = next;
              break;
            }
            default: {
              if (code === SLASH && css.charCodeAt(pos + 1) === ASTERISK) {
                next = css.indexOf("*/", pos + 2) + 1;
                if (next === 0) {
                  if (ignore || ignoreUnclosed) {
                    next = css.length;
                  } else {
                    unclosed("comment");
                  }
                }
                currentToken = ["comment", css.slice(pos, next + 1), pos, next];
                pos = next;
              } else {
                RE_WORD_END.lastIndex = pos + 1;
                RE_WORD_END.test(css);
                if (RE_WORD_END.lastIndex === 0) {
                  next = css.length - 1;
                } else {
                  next = RE_WORD_END.lastIndex - 2;
                }
                currentToken = ["word", css.slice(pos, next + 1), pos, next];
                buffer.push(currentToken);
                pos = next;
              }
              break;
            }
          }
          pos++;
          return currentToken;
        }
        function back(token) {
          returned.push(token);
        }
        return {
          back,
          nextToken,
          endOfFile,
          position
        };
      };
    }
  });

  // node_modules/postcss/lib/at-rule.js
  var require_at_rule = __commonJS({
    "node_modules/postcss/lib/at-rule.js"(exports, module) {
      init_preact_shim();
      "use strict";
      var Container = require_container();
      var AtRule = class extends Container {
        constructor(defaults) {
          super(defaults);
          this.type = "atrule";
        }
        append(...children) {
          if (!this.proxyOf.nodes)
            this.nodes = [];
          return super.append(...children);
        }
        prepend(...children) {
          if (!this.proxyOf.nodes)
            this.nodes = [];
          return super.prepend(...children);
        }
      };
      module.exports = AtRule;
      AtRule.default = AtRule;
      Container.registerAtRule(AtRule);
    }
  });

  // node_modules/postcss/lib/root.js
  var require_root = __commonJS({
    "node_modules/postcss/lib/root.js"(exports, module) {
      init_preact_shim();
      "use strict";
      var Container = require_container();
      var LazyResult;
      var Processor;
      var Root = class extends Container {
        constructor(defaults) {
          super(defaults);
          this.type = "root";
          if (!this.nodes)
            this.nodes = [];
        }
        removeChild(child, ignore) {
          let index = this.index(child);
          if (!ignore && index === 0 && this.nodes.length > 1) {
            this.nodes[1].raws.before = this.nodes[index].raws.before;
          }
          return super.removeChild(child);
        }
        normalize(child, sample, type) {
          let nodes = super.normalize(child);
          if (sample) {
            if (type === "prepend") {
              if (this.nodes.length > 1) {
                sample.raws.before = this.nodes[1].raws.before;
              } else {
                delete sample.raws.before;
              }
            } else if (this.first !== sample) {
              for (let node of nodes) {
                node.raws.before = sample.raws.before;
              }
            }
          }
          return nodes;
        }
        toResult(opts = {}) {
          let lazy = new LazyResult(new Processor(), this, opts);
          return lazy.stringify();
        }
      };
      Root.registerLazyResult = (dependant) => {
        LazyResult = dependant;
      };
      Root.registerProcessor = (dependant) => {
        Processor = dependant;
      };
      module.exports = Root;
      Root.default = Root;
    }
  });

  // node_modules/postcss/lib/list.js
  var require_list = __commonJS({
    "node_modules/postcss/lib/list.js"(exports, module) {
      init_preact_shim();
      "use strict";
      var list = {
        split(string, separators, last) {
          let array = [];
          let current = "";
          let split = false;
          let func = 0;
          let quote = false;
          let escape = false;
          for (let letter of string) {
            if (escape) {
              escape = false;
            } else if (letter === "\\") {
              escape = true;
            } else if (quote) {
              if (letter === quote) {
                quote = false;
              }
            } else if (letter === '"' || letter === "'") {
              quote = letter;
            } else if (letter === "(") {
              func += 1;
            } else if (letter === ")") {
              if (func > 0)
                func -= 1;
            } else if (func === 0) {
              if (separators.includes(letter))
                split = true;
            }
            if (split) {
              if (current !== "")
                array.push(current.trim());
              current = "";
              split = false;
            } else {
              current += letter;
            }
          }
          if (last || current !== "")
            array.push(current.trim());
          return array;
        },
        space(string) {
          let spaces = [" ", "\n", "	"];
          return list.split(string, spaces);
        },
        comma(string) {
          return list.split(string, [","], true);
        }
      };
      module.exports = list;
      list.default = list;
    }
  });

  // node_modules/postcss/lib/rule.js
  var require_rule = __commonJS({
    "node_modules/postcss/lib/rule.js"(exports, module) {
      init_preact_shim();
      "use strict";
      var Container = require_container();
      var list = require_list();
      var Rule = class extends Container {
        constructor(defaults) {
          super(defaults);
          this.type = "rule";
          if (!this.nodes)
            this.nodes = [];
        }
        get selectors() {
          return list.comma(this.selector);
        }
        set selectors(values) {
          let match = this.selector ? this.selector.match(/,\s*/) : null;
          let sep = match ? match[0] : "," + this.raw("between", "beforeOpen");
          this.selector = values.join(sep);
        }
      };
      module.exports = Rule;
      Rule.default = Rule;
      Container.registerRule(Rule);
    }
  });

  // node_modules/postcss/lib/parser.js
  var require_parser = __commonJS({
    "node_modules/postcss/lib/parser.js"(exports, module) {
      init_preact_shim();
      "use strict";
      var Declaration = require_declaration();
      var tokenizer = require_tokenize();
      var Comment = require_comment();
      var AtRule = require_at_rule();
      var Root = require_root();
      var Rule = require_rule();
      var Parser = class {
        constructor(input) {
          this.input = input;
          this.root = new Root();
          this.current = this.root;
          this.spaces = "";
          this.semicolon = false;
          this.customProperty = false;
          this.createTokenizer();
          this.root.source = { input, start: { offset: 0, line: 1, column: 1 } };
        }
        createTokenizer() {
          this.tokenizer = tokenizer(this.input);
        }
        parse() {
          let token;
          while (!this.tokenizer.endOfFile()) {
            token = this.tokenizer.nextToken();
            switch (token[0]) {
              case "space":
                this.spaces += token[1];
                break;
              case ";":
                this.freeSemicolon(token);
                break;
              case "}":
                this.end(token);
                break;
              case "comment":
                this.comment(token);
                break;
              case "at-word":
                this.atrule(token);
                break;
              case "{":
                this.emptyRule(token);
                break;
              default:
                this.other(token);
                break;
            }
          }
          this.endFile();
        }
        comment(token) {
          let node = new Comment();
          this.init(node, token[2]);
          node.source.end = this.getPosition(token[3] || token[2]);
          let text = token[1].slice(2, -2);
          if (/^\s*$/.test(text)) {
            node.text = "";
            node.raws.left = text;
            node.raws.right = "";
          } else {
            let match = text.match(/^(\s*)([^]*\S)(\s*)$/);
            node.text = match[2];
            node.raws.left = match[1];
            node.raws.right = match[3];
          }
        }
        emptyRule(token) {
          let node = new Rule();
          this.init(node, token[2]);
          node.selector = "";
          node.raws.between = "";
          this.current = node;
        }
        other(start) {
          let end = false;
          let type = null;
          let colon = false;
          let bracket = null;
          let brackets = [];
          let customProperty = start[1].startsWith("--");
          let tokens = [];
          let token = start;
          while (token) {
            type = token[0];
            tokens.push(token);
            if (type === "(" || type === "[") {
              if (!bracket)
                bracket = token;
              brackets.push(type === "(" ? ")" : "]");
            } else if (customProperty && colon && type === "{") {
              if (!bracket)
                bracket = token;
              brackets.push("}");
            } else if (brackets.length === 0) {
              if (type === ";") {
                if (colon) {
                  this.decl(tokens, customProperty);
                  return;
                } else {
                  break;
                }
              } else if (type === "{") {
                this.rule(tokens);
                return;
              } else if (type === "}") {
                this.tokenizer.back(tokens.pop());
                end = true;
                break;
              } else if (type === ":") {
                colon = true;
              }
            } else if (type === brackets[brackets.length - 1]) {
              brackets.pop();
              if (brackets.length === 0)
                bracket = null;
            }
            token = this.tokenizer.nextToken();
          }
          if (this.tokenizer.endOfFile())
            end = true;
          if (brackets.length > 0)
            this.unclosedBracket(bracket);
          if (end && colon) {
            while (tokens.length) {
              token = tokens[tokens.length - 1][0];
              if (token !== "space" && token !== "comment")
                break;
              this.tokenizer.back(tokens.pop());
            }
            this.decl(tokens, customProperty);
          } else {
            this.unknownWord(tokens);
          }
        }
        rule(tokens) {
          tokens.pop();
          let node = new Rule();
          this.init(node, tokens[0][2]);
          node.raws.between = this.spacesAndCommentsFromEnd(tokens);
          this.raw(node, "selector", tokens);
          this.current = node;
        }
        decl(tokens, customProperty) {
          let node = new Declaration();
          this.init(node, tokens[0][2]);
          let last = tokens[tokens.length - 1];
          if (last[0] === ";") {
            this.semicolon = true;
            tokens.pop();
          }
          node.source.end = this.getPosition(last[3] || last[2]);
          while (tokens[0][0] !== "word") {
            if (tokens.length === 1)
              this.unknownWord(tokens);
            node.raws.before += tokens.shift()[1];
          }
          node.source.start = this.getPosition(tokens[0][2]);
          node.prop = "";
          while (tokens.length) {
            let type = tokens[0][0];
            if (type === ":" || type === "space" || type === "comment") {
              break;
            }
            node.prop += tokens.shift()[1];
          }
          node.raws.between = "";
          let token;
          while (tokens.length) {
            token = tokens.shift();
            if (token[0] === ":") {
              node.raws.between += token[1];
              break;
            } else {
              if (token[0] === "word" && /\w/.test(token[1])) {
                this.unknownWord([token]);
              }
              node.raws.between += token[1];
            }
          }
          if (node.prop[0] === "_" || node.prop[0] === "*") {
            node.raws.before += node.prop[0];
            node.prop = node.prop.slice(1);
          }
          let firstSpaces = this.spacesAndCommentsFromStart(tokens);
          this.precheckMissedSemicolon(tokens);
          for (let i3 = tokens.length - 1; i3 >= 0; i3--) {
            token = tokens[i3];
            if (token[1].toLowerCase() === "!important") {
              node.important = true;
              let string = this.stringFrom(tokens, i3);
              string = this.spacesFromEnd(tokens) + string;
              if (string !== " !important")
                node.raws.important = string;
              break;
            } else if (token[1].toLowerCase() === "important") {
              let cache = tokens.slice(0);
              let str = "";
              for (let j2 = i3; j2 > 0; j2--) {
                let type = cache[j2][0];
                if (str.trim().indexOf("!") === 0 && type !== "space") {
                  break;
                }
                str = cache.pop()[1] + str;
              }
              if (str.trim().indexOf("!") === 0) {
                node.important = true;
                node.raws.important = str;
                tokens = cache;
              }
            }
            if (token[0] !== "space" && token[0] !== "comment") {
              break;
            }
          }
          let hasWord = tokens.some((i3) => i3[0] !== "space" && i3[0] !== "comment");
          this.raw(node, "value", tokens);
          if (hasWord) {
            node.raws.between += firstSpaces;
          } else {
            node.value = firstSpaces + node.value;
          }
          if (node.value.includes(":") && !customProperty) {
            this.checkMissedSemicolon(tokens);
          }
        }
        atrule(token) {
          let node = new AtRule();
          node.name = token[1].slice(1);
          if (node.name === "") {
            this.unnamedAtrule(node, token);
          }
          this.init(node, token[2]);
          let type;
          let prev;
          let shift;
          let last = false;
          let open = false;
          let params = [];
          let brackets = [];
          while (!this.tokenizer.endOfFile()) {
            token = this.tokenizer.nextToken();
            type = token[0];
            if (type === "(" || type === "[") {
              brackets.push(type === "(" ? ")" : "]");
            } else if (type === "{" && brackets.length > 0) {
              brackets.push("}");
            } else if (type === brackets[brackets.length - 1]) {
              brackets.pop();
            }
            if (brackets.length === 0) {
              if (type === ";") {
                node.source.end = this.getPosition(token[2]);
                this.semicolon = true;
                break;
              } else if (type === "{") {
                open = true;
                break;
              } else if (type === "}") {
                if (params.length > 0) {
                  shift = params.length - 1;
                  prev = params[shift];
                  while (prev && prev[0] === "space") {
                    prev = params[--shift];
                  }
                  if (prev) {
                    node.source.end = this.getPosition(prev[3] || prev[2]);
                  }
                }
                this.end(token);
                break;
              } else {
                params.push(token);
              }
            } else {
              params.push(token);
            }
            if (this.tokenizer.endOfFile()) {
              last = true;
              break;
            }
          }
          node.raws.between = this.spacesAndCommentsFromEnd(params);
          if (params.length) {
            node.raws.afterName = this.spacesAndCommentsFromStart(params);
            this.raw(node, "params", params);
            if (last) {
              token = params[params.length - 1];
              node.source.end = this.getPosition(token[3] || token[2]);
              this.spaces = node.raws.between;
              node.raws.between = "";
            }
          } else {
            node.raws.afterName = "";
            node.params = "";
          }
          if (open) {
            node.nodes = [];
            this.current = node;
          }
        }
        end(token) {
          if (this.current.nodes && this.current.nodes.length) {
            this.current.raws.semicolon = this.semicolon;
          }
          this.semicolon = false;
          this.current.raws.after = (this.current.raws.after || "") + this.spaces;
          this.spaces = "";
          if (this.current.parent) {
            this.current.source.end = this.getPosition(token[2]);
            this.current = this.current.parent;
          } else {
            this.unexpectedClose(token);
          }
        }
        endFile() {
          if (this.current.parent)
            this.unclosedBlock();
          if (this.current.nodes && this.current.nodes.length) {
            this.current.raws.semicolon = this.semicolon;
          }
          this.current.raws.after = (this.current.raws.after || "") + this.spaces;
        }
        freeSemicolon(token) {
          this.spaces += token[1];
          if (this.current.nodes) {
            let prev = this.current.nodes[this.current.nodes.length - 1];
            if (prev && prev.type === "rule" && !prev.raws.ownSemicolon) {
              prev.raws.ownSemicolon = this.spaces;
              this.spaces = "";
            }
          }
        }
        getPosition(offset) {
          let pos = this.input.fromOffset(offset);
          return {
            offset,
            line: pos.line,
            column: pos.col
          };
        }
        init(node, offset) {
          this.current.push(node);
          node.source = {
            start: this.getPosition(offset),
            input: this.input
          };
          node.raws.before = this.spaces;
          this.spaces = "";
          if (node.type !== "comment")
            this.semicolon = false;
        }
        raw(node, prop, tokens) {
          let token, type;
          let length = tokens.length;
          let value = "";
          let clean = true;
          let next, prev;
          let pattern = /^([#.|])?(\w)+/i;
          for (let i3 = 0; i3 < length; i3 += 1) {
            token = tokens[i3];
            type = token[0];
            if (type === "comment" && node.type === "rule") {
              prev = tokens[i3 - 1];
              next = tokens[i3 + 1];
              if (prev[0] !== "space" && next[0] !== "space" && pattern.test(prev[1]) && pattern.test(next[1])) {
                value += token[1];
              } else {
                clean = false;
              }
              continue;
            }
            if (type === "comment" || type === "space" && i3 === length - 1) {
              clean = false;
            } else {
              value += token[1];
            }
          }
          if (!clean) {
            let raw = tokens.reduce((all, i3) => all + i3[1], "");
            node.raws[prop] = { value, raw };
          }
          node[prop] = value;
        }
        spacesAndCommentsFromEnd(tokens) {
          let lastTokenType;
          let spaces = "";
          while (tokens.length) {
            lastTokenType = tokens[tokens.length - 1][0];
            if (lastTokenType !== "space" && lastTokenType !== "comment")
              break;
            spaces = tokens.pop()[1] + spaces;
          }
          return spaces;
        }
        spacesAndCommentsFromStart(tokens) {
          let next;
          let spaces = "";
          while (tokens.length) {
            next = tokens[0][0];
            if (next !== "space" && next !== "comment")
              break;
            spaces += tokens.shift()[1];
          }
          return spaces;
        }
        spacesFromEnd(tokens) {
          let lastTokenType;
          let spaces = "";
          while (tokens.length) {
            lastTokenType = tokens[tokens.length - 1][0];
            if (lastTokenType !== "space")
              break;
            spaces = tokens.pop()[1] + spaces;
          }
          return spaces;
        }
        stringFrom(tokens, from) {
          let result = "";
          for (let i3 = from; i3 < tokens.length; i3++) {
            result += tokens[i3][1];
          }
          tokens.splice(from, tokens.length - from);
          return result;
        }
        colon(tokens) {
          let brackets = 0;
          let token, type, prev;
          for (let [i3, element] of tokens.entries()) {
            token = element;
            type = token[0];
            if (type === "(") {
              brackets += 1;
            }
            if (type === ")") {
              brackets -= 1;
            }
            if (brackets === 0 && type === ":") {
              if (!prev) {
                this.doubleColon(token);
              } else if (prev[0] === "word" && prev[1] === "progid") {
                continue;
              } else {
                return i3;
              }
            }
            prev = token;
          }
          return false;
        }
        unclosedBracket(bracket) {
          throw this.input.error("Unclosed bracket", bracket[2]);
        }
        unknownWord(tokens) {
          throw this.input.error("Unknown word", tokens[0][2]);
        }
        unexpectedClose(token) {
          throw this.input.error("Unexpected }", token[2]);
        }
        unclosedBlock() {
          let pos = this.current.source.start;
          throw this.input.error("Unclosed block", pos.line, pos.column);
        }
        doubleColon(token) {
          throw this.input.error("Double colon", token[2]);
        }
        unnamedAtrule(node, token) {
          throw this.input.error("At-rule without name", token[2]);
        }
        precheckMissedSemicolon() {
        }
        checkMissedSemicolon(tokens) {
          let colon = this.colon(tokens);
          if (colon === false)
            return;
          let founded = 0;
          let token;
          for (let j2 = colon - 1; j2 >= 0; j2--) {
            token = tokens[j2];
            if (token[0] !== "space") {
              founded += 1;
              if (founded === 2)
                break;
            }
          }
          throw this.input.error("Missed semicolon", token[0] === "word" ? token[3] + 1 : token[2]);
        }
      };
      module.exports = Parser;
    }
  });

  // node_modules/nanoid/non-secure/index.cjs
  var require_non_secure = __commonJS({
    "node_modules/nanoid/non-secure/index.cjs"(exports, module) {
      init_preact_shim();
      var urlAlphabet = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";
      var customAlphabet = (alphabet, size) => {
        return () => {
          let id = "";
          let i3 = size;
          while (i3--) {
            id += alphabet[Math.random() * alphabet.length | 0];
          }
          return id;
        };
      };
      var nanoid = (size = 21) => {
        let id = "";
        let i3 = size;
        while (i3--) {
          id += urlAlphabet[Math.random() * 64 | 0];
        }
        return id;
      };
      module.exports = { nanoid, customAlphabet };
    }
  });

  // (disabled):fs
  var require_fs = __commonJS({
    "(disabled):fs"() {
      init_preact_shim();
    }
  });

  // node_modules/postcss/lib/previous-map.js
  var require_previous_map = __commonJS({
    "node_modules/postcss/lib/previous-map.js"(exports, module) {
      init_preact_shim();
      "use strict";
      var { SourceMapConsumer, SourceMapGenerator } = require_source_map();
      var { existsSync, readFileSync } = require_fs();
      var { dirname, join } = require_path();
      function fromBase64(str) {
        if (Buffer) {
          return Buffer.from(str, "base64").toString();
        } else {
          return window.atob(str);
        }
      }
      var PreviousMap = class {
        constructor(css, opts) {
          if (opts.map === false)
            return;
          this.loadAnnotation(css);
          this.inline = this.startWith(this.annotation, "data:");
          let prev = opts.map ? opts.map.prev : void 0;
          let text = this.loadMap(opts.from, prev);
          if (!this.mapFile && opts.from) {
            this.mapFile = opts.from;
          }
          if (this.mapFile)
            this.root = dirname(this.mapFile);
          if (text)
            this.text = text;
        }
        consumer() {
          if (!this.consumerCache) {
            this.consumerCache = new SourceMapConsumer(this.text);
          }
          return this.consumerCache;
        }
        withContent() {
          return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
        }
        startWith(string, start) {
          if (!string)
            return false;
          return string.substr(0, start.length) === start;
        }
        getAnnotationURL(sourceMapString) {
          return sourceMapString.match(/\/\*\s*# sourceMappingURL=((?:(?!sourceMappingURL=).)*)\*\//)[1].trim();
        }
        loadAnnotation(css) {
          let annotations = css.match(/\/\*\s*# sourceMappingURL=(?:(?!sourceMappingURL=).)*\*\//gm);
          if (annotations && annotations.length > 0) {
            let lastAnnotation = annotations[annotations.length - 1];
            if (lastAnnotation) {
              this.annotation = this.getAnnotationURL(lastAnnotation);
            }
          }
        }
        decodeInline(text) {
          let baseCharsetUri = /^data:application\/json;charset=utf-?8;base64,/;
          let baseUri = /^data:application\/json;base64,/;
          let charsetUri = /^data:application\/json;charset=utf-?8,/;
          let uri = /^data:application\/json,/;
          if (charsetUri.test(text) || uri.test(text)) {
            return decodeURIComponent(text.substr(RegExp.lastMatch.length));
          }
          if (baseCharsetUri.test(text) || baseUri.test(text)) {
            return fromBase64(text.substr(RegExp.lastMatch.length));
          }
          let encoding = text.match(/data:application\/json;([^,]+),/)[1];
          throw new Error("Unsupported source map encoding " + encoding);
        }
        loadFile(path) {
          this.root = dirname(path);
          if (existsSync(path)) {
            this.mapFile = path;
            return readFileSync(path, "utf-8").toString().trim();
          }
        }
        loadMap(file, prev) {
          if (prev === false)
            return false;
          if (prev) {
            if (typeof prev === "string") {
              return prev;
            } else if (typeof prev === "function") {
              let prevPath = prev(file);
              if (prevPath) {
                let map = this.loadFile(prevPath);
                if (!map) {
                  throw new Error("Unable to load previous source map: " + prevPath.toString());
                }
                return map;
              }
            } else if (prev instanceof SourceMapConsumer) {
              return SourceMapGenerator.fromSourceMap(prev).toString();
            } else if (prev instanceof SourceMapGenerator) {
              return prev.toString();
            } else if (this.isMap(prev)) {
              return JSON.stringify(prev);
            } else {
              throw new Error("Unsupported previous source map format: " + prev.toString());
            }
          } else if (this.inline) {
            return this.decodeInline(this.annotation);
          } else if (this.annotation) {
            let map = this.annotation;
            if (file)
              map = join(dirname(file), map);
            return this.loadFile(map);
          }
        }
        isMap(map) {
          if (typeof map !== "object")
            return false;
          return typeof map.mappings === "string" || typeof map._mappings === "string" || Array.isArray(map.sections);
        }
      };
      module.exports = PreviousMap;
      PreviousMap.default = PreviousMap;
    }
  });

  // node_modules/postcss/lib/input.js
  var require_input = __commonJS({
    "node_modules/postcss/lib/input.js"(exports, module) {
      init_preact_shim();
      "use strict";
      var { SourceMapConsumer, SourceMapGenerator } = require_source_map();
      var { fileURLToPath, pathToFileURL } = require_url();
      var { resolve, isAbsolute } = require_path();
      var { nanoid } = require_non_secure();
      var terminalHighlight = require_terminal_highlight();
      var CssSyntaxError = require_css_syntax_error();
      var PreviousMap = require_previous_map();
      var fromOffsetCache = Symbol("fromOffsetCache");
      var sourceMapAvailable = Boolean(SourceMapConsumer && SourceMapGenerator);
      var pathAvailable = Boolean(resolve && isAbsolute);
      var Input = class {
        constructor(css, opts = {}) {
          if (css === null || typeof css === "undefined" || typeof css === "object" && !css.toString) {
            throw new Error(`PostCSS received ${css} instead of CSS string`);
          }
          this.css = css.toString();
          if (this.css[0] === "\uFEFF" || this.css[0] === "\uFFFE") {
            this.hasBOM = true;
            this.css = this.css.slice(1);
          } else {
            this.hasBOM = false;
          }
          if (opts.from) {
            if (!pathAvailable || /^\w+:\/\//.test(opts.from) || isAbsolute(opts.from)) {
              this.file = opts.from;
            } else {
              this.file = resolve(opts.from);
            }
          }
          if (pathAvailable && sourceMapAvailable) {
            let map = new PreviousMap(this.css, opts);
            if (map.text) {
              this.map = map;
              let file = map.consumer().file;
              if (!this.file && file)
                this.file = this.mapResolve(file);
            }
          }
          if (!this.file) {
            this.id = "<input css " + nanoid(6) + ">";
          }
          if (this.map)
            this.map.file = this.from;
        }
        fromOffset(offset) {
          let lastLine, lineToIndex;
          if (!this[fromOffsetCache]) {
            let lines = this.css.split("\n");
            lineToIndex = new Array(lines.length);
            let prevIndex = 0;
            for (let i3 = 0, l3 = lines.length; i3 < l3; i3++) {
              lineToIndex[i3] = prevIndex;
              prevIndex += lines[i3].length + 1;
            }
            this[fromOffsetCache] = lineToIndex;
          } else {
            lineToIndex = this[fromOffsetCache];
          }
          lastLine = lineToIndex[lineToIndex.length - 1];
          let min = 0;
          if (offset >= lastLine) {
            min = lineToIndex.length - 1;
          } else {
            let max = lineToIndex.length - 2;
            let mid;
            while (min < max) {
              mid = min + (max - min >> 1);
              if (offset < lineToIndex[mid]) {
                max = mid - 1;
              } else if (offset >= lineToIndex[mid + 1]) {
                min = mid + 1;
              } else {
                min = mid;
                break;
              }
            }
          }
          return {
            line: min + 1,
            col: offset - lineToIndex[min] + 1
          };
        }
        error(message, line, column, opts = {}) {
          let result;
          if (!column) {
            let pos = this.fromOffset(line);
            line = pos.line;
            column = pos.col;
          }
          let origin = this.origin(line, column);
          if (origin) {
            result = new CssSyntaxError(message, origin.line, origin.column, origin.source, origin.file, opts.plugin);
          } else {
            result = new CssSyntaxError(message, line, column, this.css, this.file, opts.plugin);
          }
          result.input = { line, column, source: this.css };
          if (this.file) {
            if (pathToFileURL) {
              result.input.url = pathToFileURL(this.file).toString();
            }
            result.input.file = this.file;
          }
          return result;
        }
        origin(line, column) {
          if (!this.map)
            return false;
          let consumer = this.map.consumer();
          let from = consumer.originalPositionFor({ line, column });
          if (!from.source)
            return false;
          let fromUrl;
          if (isAbsolute(from.source)) {
            fromUrl = pathToFileURL(from.source);
          } else {
            fromUrl = new URL(from.source, this.map.consumer().sourceRoot || pathToFileURL(this.map.mapFile));
          }
          let result = {
            url: fromUrl.toString(),
            line: from.line,
            column: from.column
          };
          if (fromUrl.protocol === "file:") {
            if (fileURLToPath) {
              result.file = fileURLToPath(fromUrl);
            } else {
              throw new Error(`file: protocol is not available in this PostCSS build`);
            }
          }
          let source = consumer.sourceContentFor(from.source);
          if (source)
            result.source = source;
          return result;
        }
        mapResolve(file) {
          if (/^\w+:\/\//.test(file)) {
            return file;
          }
          return resolve(this.map.consumer().sourceRoot || this.map.root || ".", file);
        }
        get from() {
          return this.file || this.id;
        }
        toJSON() {
          let json = {};
          for (let name of ["hasBOM", "css", "file", "id"]) {
            if (this[name] != null) {
              json[name] = this[name];
            }
          }
          if (this.map) {
            json.map = { ...this.map };
            if (json.map.consumerCache) {
              json.map.consumerCache = void 0;
            }
          }
          return json;
        }
      };
      module.exports = Input;
      Input.default = Input;
      if (terminalHighlight && terminalHighlight.registerInput) {
        terminalHighlight.registerInput(Input);
      }
    }
  });

  // node_modules/postcss/lib/parse.js
  var require_parse = __commonJS({
    "node_modules/postcss/lib/parse.js"(exports, module) {
      init_preact_shim();
      "use strict";
      var Container = require_container();
      var Parser = require_parser();
      var Input = require_input();
      function parse(css, opts) {
        let input = new Input(css, opts);
        let parser = new Parser(input);
        try {
          parser.parse();
        } catch (e2) {
          if (true) {
            if (e2.name === "CssSyntaxError" && opts && opts.from) {
              if (/\.scss$/i.test(opts.from)) {
                e2.message += "\nYou tried to parse SCSS with the standard CSS parser; try again with the postcss-scss parser";
              } else if (/\.sass/i.test(opts.from)) {
                e2.message += "\nYou tried to parse Sass with the standard CSS parser; try again with the postcss-sass parser";
              } else if (/\.less$/i.test(opts.from)) {
                e2.message += "\nYou tried to parse Less with the standard CSS parser; try again with the postcss-less parser";
              }
            }
          }
          throw e2;
        }
        return parser.root;
      }
      module.exports = parse;
      parse.default = parse;
      Container.registerParse(parse);
    }
  });

  // node_modules/postcss/lib/lazy-result.js
  var require_lazy_result = __commonJS({
    "node_modules/postcss/lib/lazy-result.js"(exports, module) {
      init_preact_shim();
      "use strict";
      var { isClean, my } = require_symbols();
      var MapGenerator = require_map_generator();
      var stringify = require_stringify2();
      var Container = require_container();
      var Document = require_document();
      var warnOnce = require_warn_once();
      var Result = require_result();
      var parse = require_parse();
      var Root = require_root();
      var TYPE_TO_CLASS_NAME = {
        document: "Document",
        root: "Root",
        atrule: "AtRule",
        rule: "Rule",
        decl: "Declaration",
        comment: "Comment"
      };
      var PLUGIN_PROPS = {
        postcssPlugin: true,
        prepare: true,
        Once: true,
        Document: true,
        Root: true,
        Declaration: true,
        Rule: true,
        AtRule: true,
        Comment: true,
        DeclarationExit: true,
        RuleExit: true,
        AtRuleExit: true,
        CommentExit: true,
        RootExit: true,
        DocumentExit: true,
        OnceExit: true
      };
      var NOT_VISITORS = {
        postcssPlugin: true,
        prepare: true,
        Once: true
      };
      var CHILDREN = 0;
      function isPromise(obj) {
        return typeof obj === "object" && typeof obj.then === "function";
      }
      function getEvents(node) {
        let key = false;
        let type = TYPE_TO_CLASS_NAME[node.type];
        if (node.type === "decl") {
          key = node.prop.toLowerCase();
        } else if (node.type === "atrule") {
          key = node.name.toLowerCase();
        }
        if (key && node.append) {
          return [
            type,
            type + "-" + key,
            CHILDREN,
            type + "Exit",
            type + "Exit-" + key
          ];
        } else if (key) {
          return [type, type + "-" + key, type + "Exit", type + "Exit-" + key];
        } else if (node.append) {
          return [type, CHILDREN, type + "Exit"];
        } else {
          return [type, type + "Exit"];
        }
      }
      function toStack(node) {
        let events;
        if (node.type === "document") {
          events = ["Document", CHILDREN, "DocumentExit"];
        } else if (node.type === "root") {
          events = ["Root", CHILDREN, "RootExit"];
        } else {
          events = getEvents(node);
        }
        return {
          node,
          events,
          eventIndex: 0,
          visitors: [],
          visitorIndex: 0,
          iterator: 0
        };
      }
      function cleanMarks(node) {
        node[isClean] = false;
        if (node.nodes)
          node.nodes.forEach((i3) => cleanMarks(i3));
        return node;
      }
      var postcss = {};
      var LazyResult = class {
        constructor(processor, css, opts) {
          this.stringified = false;
          this.processed = false;
          let root;
          if (typeof css === "object" && css !== null && (css.type === "root" || css.type === "document")) {
            root = cleanMarks(css);
          } else if (css instanceof LazyResult || css instanceof Result) {
            root = cleanMarks(css.root);
            if (css.map) {
              if (typeof opts.map === "undefined")
                opts.map = {};
              if (!opts.map.inline)
                opts.map.inline = false;
              opts.map.prev = css.map;
            }
          } else {
            let parser = parse;
            if (opts.syntax)
              parser = opts.syntax.parse;
            if (opts.parser)
              parser = opts.parser;
            if (parser.parse)
              parser = parser.parse;
            try {
              root = parser(css, opts);
            } catch (error) {
              this.processed = true;
              this.error = error;
            }
            if (root && !root[my]) {
              Container.rebuild(root);
            }
          }
          this.result = new Result(processor, root, opts);
          this.helpers = { ...postcss, result: this.result, postcss };
          this.plugins = this.processor.plugins.map((plugin) => {
            if (typeof plugin === "object" && plugin.prepare) {
              return { ...plugin, ...plugin.prepare(this.result) };
            } else {
              return plugin;
            }
          });
        }
        get [Symbol.toStringTag]() {
          return "LazyResult";
        }
        get processor() {
          return this.result.processor;
        }
        get opts() {
          return this.result.opts;
        }
        get css() {
          return this.stringify().css;
        }
        get content() {
          return this.stringify().content;
        }
        get map() {
          return this.stringify().map;
        }
        get root() {
          return this.sync().root;
        }
        get messages() {
          return this.sync().messages;
        }
        warnings() {
          return this.sync().warnings();
        }
        toString() {
          return this.css;
        }
        then(onFulfilled, onRejected) {
          if (true) {
            if (!("from" in this.opts)) {
              warnOnce("Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning.");
            }
          }
          return this.async().then(onFulfilled, onRejected);
        }
        catch(onRejected) {
          return this.async().catch(onRejected);
        }
        finally(onFinally) {
          return this.async().then(onFinally, onFinally);
        }
        async() {
          if (this.error)
            return Promise.reject(this.error);
          if (this.processed)
            return Promise.resolve(this.result);
          if (!this.processing) {
            this.processing = this.runAsync();
          }
          return this.processing;
        }
        sync() {
          if (this.error)
            throw this.error;
          if (this.processed)
            return this.result;
          this.processed = true;
          if (this.processing) {
            throw this.getAsyncError();
          }
          for (let plugin of this.plugins) {
            let promise = this.runOnRoot(plugin);
            if (isPromise(promise)) {
              throw this.getAsyncError();
            }
          }
          this.prepareVisitors();
          if (this.hasListener) {
            let root = this.result.root;
            while (!root[isClean]) {
              root[isClean] = true;
              this.walkSync(root);
            }
            if (this.listeners.OnceExit) {
              if (root.type === "document") {
                for (let subRoot of root.nodes) {
                  this.visitSync(this.listeners.OnceExit, subRoot);
                }
              } else {
                this.visitSync(this.listeners.OnceExit, root);
              }
            }
          }
          return this.result;
        }
        stringify() {
          if (this.error)
            throw this.error;
          if (this.stringified)
            return this.result;
          this.stringified = true;
          this.sync();
          let opts = this.result.opts;
          let str = stringify;
          if (opts.syntax)
            str = opts.syntax.stringify;
          if (opts.stringifier)
            str = opts.stringifier;
          if (str.stringify)
            str = str.stringify;
          let map = new MapGenerator(str, this.result.root, this.result.opts);
          let data = map.generate();
          this.result.css = data[0];
          this.result.map = data[1];
          return this.result;
        }
        walkSync(node) {
          node[isClean] = true;
          let events = getEvents(node);
          for (let event of events) {
            if (event === CHILDREN) {
              if (node.nodes) {
                node.each((child) => {
                  if (!child[isClean])
                    this.walkSync(child);
                });
              }
            } else {
              let visitors = this.listeners[event];
              if (visitors) {
                if (this.visitSync(visitors, node.toProxy()))
                  return;
              }
            }
          }
        }
        visitSync(visitors, node) {
          for (let [plugin, visitor] of visitors) {
            this.result.lastPlugin = plugin;
            let promise;
            try {
              promise = visitor(node, this.helpers);
            } catch (e2) {
              throw this.handleError(e2, node.proxyOf);
            }
            if (node.type !== "root" && node.type !== "document" && !node.parent) {
              return true;
            }
            if (isPromise(promise)) {
              throw this.getAsyncError();
            }
          }
        }
        runOnRoot(plugin) {
          this.result.lastPlugin = plugin;
          try {
            if (typeof plugin === "object" && plugin.Once) {
              if (this.result.root.type === "document") {
                let roots = this.result.root.nodes.map((root) => plugin.Once(root, this.helpers));
                if (isPromise(roots[0])) {
                  return Promise.all(roots);
                }
                return roots;
              }
              return plugin.Once(this.result.root, this.helpers);
            } else if (typeof plugin === "function") {
              return plugin(this.result.root, this.result);
            }
          } catch (error) {
            throw this.handleError(error);
          }
        }
        getAsyncError() {
          throw new Error("Use process(css).then(cb) to work with async plugins");
        }
        handleError(error, node) {
          let plugin = this.result.lastPlugin;
          try {
            if (node)
              node.addToError(error);
            this.error = error;
            if (error.name === "CssSyntaxError" && !error.plugin) {
              error.plugin = plugin.postcssPlugin;
              error.setMessage();
            } else if (plugin.postcssVersion) {
              if (true) {
                let pluginName = plugin.postcssPlugin;
                let pluginVer = plugin.postcssVersion;
                let runtimeVer = this.result.processor.version;
                let a3 = pluginVer.split(".");
                let b2 = runtimeVer.split(".");
                if (a3[0] !== b2[0] || parseInt(a3[1]) > parseInt(b2[1])) {
                  console.error("Unknown error from PostCSS plugin. Your current PostCSS version is " + runtimeVer + ", but " + pluginName + " uses " + pluginVer + ". Perhaps this is the source of the error below.");
                }
              }
            }
          } catch (err) {
            if (console && console.error)
              console.error(err);
          }
          return error;
        }
        async runAsync() {
          this.plugin = 0;
          for (let i3 = 0; i3 < this.plugins.length; i3++) {
            let plugin = this.plugins[i3];
            let promise = this.runOnRoot(plugin);
            if (isPromise(promise)) {
              try {
                await promise;
              } catch (error) {
                throw this.handleError(error);
              }
            }
          }
          this.prepareVisitors();
          if (this.hasListener) {
            let root = this.result.root;
            while (!root[isClean]) {
              root[isClean] = true;
              let stack = [toStack(root)];
              while (stack.length > 0) {
                let promise = this.visitTick(stack);
                if (isPromise(promise)) {
                  try {
                    await promise;
                  } catch (e2) {
                    let node = stack[stack.length - 1].node;
                    throw this.handleError(e2, node);
                  }
                }
              }
            }
            if (this.listeners.OnceExit) {
              for (let [plugin, visitor] of this.listeners.OnceExit) {
                this.result.lastPlugin = plugin;
                try {
                  if (root.type === "document") {
                    let roots = root.nodes.map((subRoot) => visitor(subRoot, this.helpers));
                    await Promise.all(roots);
                  } else {
                    await visitor(root, this.helpers);
                  }
                } catch (e2) {
                  throw this.handleError(e2);
                }
              }
            }
          }
          this.processed = true;
          return this.stringify();
        }
        prepareVisitors() {
          this.listeners = {};
          let add = (plugin, type, cb) => {
            if (!this.listeners[type])
              this.listeners[type] = [];
            this.listeners[type].push([plugin, cb]);
          };
          for (let plugin of this.plugins) {
            if (typeof plugin === "object") {
              for (let event in plugin) {
                if (!PLUGIN_PROPS[event] && /^[A-Z]/.test(event)) {
                  throw new Error(`Unknown event ${event} in ${plugin.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
                }
                if (!NOT_VISITORS[event]) {
                  if (typeof plugin[event] === "object") {
                    for (let filter in plugin[event]) {
                      if (filter === "*") {
                        add(plugin, event, plugin[event][filter]);
                      } else {
                        add(plugin, event + "-" + filter.toLowerCase(), plugin[event][filter]);
                      }
                    }
                  } else if (typeof plugin[event] === "function") {
                    add(plugin, event, plugin[event]);
                  }
                }
              }
            }
          }
          this.hasListener = Object.keys(this.listeners).length > 0;
        }
        visitTick(stack) {
          let visit = stack[stack.length - 1];
          let { node, visitors } = visit;
          if (node.type !== "root" && node.type !== "document" && !node.parent) {
            stack.pop();
            return;
          }
          if (visitors.length > 0 && visit.visitorIndex < visitors.length) {
            let [plugin, visitor] = visitors[visit.visitorIndex];
            visit.visitorIndex += 1;
            if (visit.visitorIndex === visitors.length) {
              visit.visitors = [];
              visit.visitorIndex = 0;
            }
            this.result.lastPlugin = plugin;
            try {
              return visitor(node.toProxy(), this.helpers);
            } catch (e2) {
              throw this.handleError(e2, node);
            }
          }
          if (visit.iterator !== 0) {
            let iterator = visit.iterator;
            let child;
            while (child = node.nodes[node.indexes[iterator]]) {
              node.indexes[iterator] += 1;
              if (!child[isClean]) {
                child[isClean] = true;
                stack.push(toStack(child));
                return;
              }
            }
            visit.iterator = 0;
            delete node.indexes[iterator];
          }
          let events = visit.events;
          while (visit.eventIndex < events.length) {
            let event = events[visit.eventIndex];
            visit.eventIndex += 1;
            if (event === CHILDREN) {
              if (node.nodes && node.nodes.length) {
                node[isClean] = true;
                visit.iterator = node.getIterator();
              }
              return;
            } else if (this.listeners[event]) {
              visit.visitors = this.listeners[event];
              return;
            }
          }
          stack.pop();
        }
      };
      LazyResult.registerPostcss = (dependant) => {
        postcss = dependant;
      };
      module.exports = LazyResult;
      LazyResult.default = LazyResult;
      Root.registerLazyResult(LazyResult);
      Document.registerLazyResult(LazyResult);
    }
  });

  // node_modules/postcss/lib/processor.js
  var require_processor = __commonJS({
    "node_modules/postcss/lib/processor.js"(exports, module) {
      init_preact_shim();
      "use strict";
      var LazyResult = require_lazy_result();
      var Document = require_document();
      var Root = require_root();
      var Processor = class {
        constructor(plugins = []) {
          this.version = "8.3.9";
          this.plugins = this.normalize(plugins);
        }
        use(plugin) {
          this.plugins = this.plugins.concat(this.normalize([plugin]));
          return this;
        }
        process(css, opts = {}) {
          if (this.plugins.length === 0 && typeof opts.parser === "undefined" && typeof opts.stringifier === "undefined" && typeof opts.syntax === "undefined" && !opts.hideNothingWarning) {
            if (true) {
              if (typeof console !== "undefined" && console.warn) {
                console.warn("You did not set any plugins, parser, or stringifier. Right now, PostCSS does nothing. Pick plugins for your case on https://www.postcss.parts/ and use them in postcss.config.js.");
              }
            }
          }
          return new LazyResult(this, css, opts);
        }
        normalize(plugins) {
          let normalized = [];
          for (let i3 of plugins) {
            if (i3.postcss === true) {
              i3 = i3();
            } else if (i3.postcss) {
              i3 = i3.postcss;
            }
            if (typeof i3 === "object" && Array.isArray(i3.plugins)) {
              normalized = normalized.concat(i3.plugins);
            } else if (typeof i3 === "object" && i3.postcssPlugin) {
              normalized.push(i3);
            } else if (typeof i3 === "function") {
              normalized.push(i3);
            } else if (typeof i3 === "object" && (i3.parse || i3.stringify)) {
              if (true) {
                throw new Error("PostCSS syntaxes cannot be used as plugins. Instead, please use one of the syntax/parser/stringifier options as outlined in your PostCSS runner documentation.");
              }
            } else {
              throw new Error(i3 + " is not a PostCSS plugin");
            }
          }
          return normalized;
        }
      };
      module.exports = Processor;
      Processor.default = Processor;
      Root.registerProcessor(Processor);
      Document.registerProcessor(Processor);
    }
  });

  // node_modules/postcss/lib/fromJSON.js
  var require_fromJSON = __commonJS({
    "node_modules/postcss/lib/fromJSON.js"(exports, module) {
      init_preact_shim();
      "use strict";
      var Declaration = require_declaration();
      var PreviousMap = require_previous_map();
      var Comment = require_comment();
      var AtRule = require_at_rule();
      var Input = require_input();
      var Root = require_root();
      var Rule = require_rule();
      function fromJSON(json, inputs) {
        if (Array.isArray(json))
          return json.map((n2) => fromJSON(n2));
        let { inputs: ownInputs, ...defaults } = json;
        if (ownInputs) {
          inputs = [];
          for (let input of ownInputs) {
            let inputHydrated = { ...input, __proto__: Input.prototype };
            if (inputHydrated.map) {
              inputHydrated.map = {
                ...inputHydrated.map,
                __proto__: PreviousMap.prototype
              };
            }
            inputs.push(inputHydrated);
          }
        }
        if (defaults.nodes) {
          defaults.nodes = json.nodes.map((n2) => fromJSON(n2, inputs));
        }
        if (defaults.source) {
          let { inputId, ...source } = defaults.source;
          defaults.source = source;
          if (inputId != null) {
            defaults.source.input = inputs[inputId];
          }
        }
        if (defaults.type === "root") {
          return new Root(defaults);
        } else if (defaults.type === "decl") {
          return new Declaration(defaults);
        } else if (defaults.type === "rule") {
          return new Rule(defaults);
        } else if (defaults.type === "comment") {
          return new Comment(defaults);
        } else if (defaults.type === "atrule") {
          return new AtRule(defaults);
        } else {
          throw new Error("Unknown node type: " + json.type);
        }
      }
      module.exports = fromJSON;
      fromJSON.default = fromJSON;
    }
  });

  // node_modules/postcss/lib/postcss.js
  var require_postcss = __commonJS({
    "node_modules/postcss/lib/postcss.js"(exports, module) {
      init_preact_shim();
      "use strict";
      var CssSyntaxError = require_css_syntax_error();
      var Declaration = require_declaration();
      var LazyResult = require_lazy_result();
      var Container = require_container();
      var Processor = require_processor();
      var stringify = require_stringify2();
      var fromJSON = require_fromJSON();
      var Document = require_document();
      var Warning = require_warning();
      var Comment = require_comment();
      var AtRule = require_at_rule();
      var Result = require_result();
      var Input = require_input();
      var parse = require_parse();
      var list = require_list();
      var Rule = require_rule();
      var Root = require_root();
      var Node = require_node2();
      function postcss(...plugins) {
        if (plugins.length === 1 && Array.isArray(plugins[0])) {
          plugins = plugins[0];
        }
        return new Processor(plugins);
      }
      postcss.plugin = function plugin(name, initializer) {
        if (console && console.warn) {
          console.warn(name + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration");
          if (process.env.LANG && process.env.LANG.startsWith("cn")) {
            console.warn(name + ": \u91CC\u9762 postcss.plugin \u88AB\u5F03\u7528. \u8FC1\u79FB\u6307\u5357:\nhttps://www.w3ctech.com/topic/2226");
          }
        }
        function creator(...args) {
          let transformer = initializer(...args);
          transformer.postcssPlugin = name;
          transformer.postcssVersion = new Processor().version;
          return transformer;
        }
        let cache;
        Object.defineProperty(creator, "postcss", {
          get() {
            if (!cache)
              cache = creator();
            return cache;
          }
        });
        creator.process = function(css, processOpts, pluginOpts) {
          return postcss([creator(pluginOpts)]).process(css, processOpts);
        };
        return creator;
      };
      postcss.stringify = stringify;
      postcss.parse = parse;
      postcss.fromJSON = fromJSON;
      postcss.list = list;
      postcss.comment = (defaults) => new Comment(defaults);
      postcss.atRule = (defaults) => new AtRule(defaults);
      postcss.decl = (defaults) => new Declaration(defaults);
      postcss.rule = (defaults) => new Rule(defaults);
      postcss.root = (defaults) => new Root(defaults);
      postcss.document = (defaults) => new Document(defaults);
      postcss.CssSyntaxError = CssSyntaxError;
      postcss.Declaration = Declaration;
      postcss.Container = Container;
      postcss.Document = Document;
      postcss.Comment = Comment;
      postcss.Warning = Warning;
      postcss.AtRule = AtRule;
      postcss.Result = Result;
      postcss.Input = Input;
      postcss.Rule = Rule;
      postcss.Root = Root;
      postcss.Node = Node;
      LazyResult.registerPostcss(postcss);
      module.exports = postcss;
      postcss.default = postcss;
    }
  });

  // node_modules/sanitize-html/index.js
  var require_sanitize_html = __commonJS({
    "node_modules/sanitize-html/index.js"(exports, module) {
      init_preact_shim();
      var htmlparser = require_lib6();
      var escapeStringRegexp = require_escape_string_regexp();
      var { klona } = require_dist();
      var { isPlainObject } = require_is_plain_object();
      var deepmerge = require_cjs();
      var parseSrcset = require_parse_srcset();
      var { parse: postcssParse } = require_postcss();
      var mediaTags = [
        "img",
        "audio",
        "video",
        "picture",
        "svg",
        "object",
        "map",
        "iframe",
        "embed"
      ];
      var vulnerableTags = ["script", "style"];
      function each(obj, cb) {
        if (obj) {
          Object.keys(obj).forEach(function(key) {
            cb(obj[key], key);
          });
        }
      }
      function has(obj, key) {
        return {}.hasOwnProperty.call(obj, key);
      }
      function filter(a3, cb) {
        const n2 = [];
        each(a3, function(v2) {
          if (cb(v2)) {
            n2.push(v2);
          }
        });
        return n2;
      }
      function isEmptyObject(obj) {
        for (const key in obj) {
          if (has(obj, key)) {
            return false;
          }
        }
        return true;
      }
      function stringifySrcset(parsedSrcset) {
        return parsedSrcset.map(function(part) {
          if (!part.url) {
            throw new Error("URL missing");
          }
          return part.url + (part.w ? ` ${part.w}w` : "") + (part.h ? ` ${part.h}h` : "") + (part.d ? ` ${part.d}x` : "");
        }).join(", ");
      }
      module.exports = sanitizeHtml2;
      var VALID_HTML_ATTRIBUTE_NAME = /^[^\0\t\n\f\r /<=>]+$/;
      function sanitizeHtml2(html, options, _recursing) {
        let result = "";
        let tempResult = "";
        function Frame(tag, attribs) {
          const that = this;
          this.tag = tag;
          this.attribs = attribs || {};
          this.tagPosition = result.length;
          this.text = "";
          this.mediaChildren = [];
          this.updateParentNodeText = function() {
            if (stack.length) {
              const parentFrame = stack[stack.length - 1];
              parentFrame.text += that.text;
            }
          };
          this.updateParentNodeMediaChildren = function() {
            if (stack.length && mediaTags.includes(this.tag)) {
              const parentFrame = stack[stack.length - 1];
              parentFrame.mediaChildren.push(this.tag);
            }
          };
        }
        options = Object.assign({}, sanitizeHtml2.defaults, options);
        options.parser = Object.assign({}, htmlParserDefaults, options.parser);
        vulnerableTags.forEach(function(tag) {
          if (options.allowedTags && options.allowedTags.indexOf(tag) > -1 && !options.allowVulnerableTags) {
            console.warn(`

\u26A0\uFE0F Your \`allowedTags\` option includes, \`${tag}\`, which is inherently
vulnerable to XSS attacks. Please remove it from \`allowedTags\`.
Or, to disable this warning, add the \`allowVulnerableTags\` option
and ensure you are accounting for this risk.

`);
          }
        });
        const nonTextTagsArray = options.nonTextTags || [
          "script",
          "style",
          "textarea",
          "option"
        ];
        let allowedAttributesMap;
        let allowedAttributesGlobMap;
        if (options.allowedAttributes) {
          allowedAttributesMap = {};
          allowedAttributesGlobMap = {};
          each(options.allowedAttributes, function(attributes, tag) {
            allowedAttributesMap[tag] = [];
            const globRegex = [];
            attributes.forEach(function(obj) {
              if (typeof obj === "string" && obj.indexOf("*") >= 0) {
                globRegex.push(escapeStringRegexp(obj).replace(/\\\*/g, ".*"));
              } else {
                allowedAttributesMap[tag].push(obj);
              }
            });
            if (globRegex.length) {
              allowedAttributesGlobMap[tag] = new RegExp("^(" + globRegex.join("|") + ")$");
            }
          });
        }
        const allowedClassesMap = {};
        const allowedClassesGlobMap = {};
        each(options.allowedClasses, function(classes, tag) {
          if (allowedAttributesMap) {
            if (!has(allowedAttributesMap, tag)) {
              allowedAttributesMap[tag] = [];
            }
            allowedAttributesMap[tag].push("class");
          }
          allowedClassesMap[tag] = [];
          const globRegex = [];
          classes.forEach(function(obj) {
            if (typeof obj === "string" && obj.indexOf("*") >= 0) {
              globRegex.push(escapeStringRegexp(obj).replace(/\\\*/g, ".*"));
            } else {
              allowedClassesMap[tag].push(obj);
            }
          });
          if (globRegex.length) {
            allowedClassesGlobMap[tag] = new RegExp("^(" + globRegex.join("|") + ")$");
          }
        });
        const transformTagsMap = {};
        let transformTagsAll;
        each(options.transformTags, function(transform, tag) {
          let transFun;
          if (typeof transform === "function") {
            transFun = transform;
          } else if (typeof transform === "string") {
            transFun = sanitizeHtml2.simpleTransform(transform);
          }
          if (tag === "*") {
            transformTagsAll = transFun;
          } else {
            transformTagsMap[tag] = transFun;
          }
        });
        let depth;
        let stack;
        let skipMap;
        let transformMap;
        let skipText;
        let skipTextDepth;
        let addedText = false;
        initializeState();
        const parser = new htmlparser.Parser({
          onopentag: function(name, attribs) {
            if (options.enforceHtmlBoundary && name === "html") {
              initializeState();
            }
            if (skipText) {
              skipTextDepth++;
              return;
            }
            const frame = new Frame(name, attribs);
            stack.push(frame);
            let skip = false;
            const hasText = !!frame.text;
            let transformedTag;
            if (has(transformTagsMap, name)) {
              transformedTag = transformTagsMap[name](name, attribs);
              frame.attribs = attribs = transformedTag.attribs;
              if (transformedTag.text !== void 0) {
                frame.innerText = transformedTag.text;
              }
              if (name !== transformedTag.tagName) {
                frame.name = name = transformedTag.tagName;
                transformMap[depth] = transformedTag.tagName;
              }
            }
            if (transformTagsAll) {
              transformedTag = transformTagsAll(name, attribs);
              frame.attribs = attribs = transformedTag.attribs;
              if (name !== transformedTag.tagName) {
                frame.name = name = transformedTag.tagName;
                transformMap[depth] = transformedTag.tagName;
              }
            }
            if (options.allowedTags && options.allowedTags.indexOf(name) === -1 || options.disallowedTagsMode === "recursiveEscape" && !isEmptyObject(skipMap) || options.nestingLimit != null && depth >= options.nestingLimit) {
              skip = true;
              skipMap[depth] = true;
              if (options.disallowedTagsMode === "discard") {
                if (nonTextTagsArray.indexOf(name) !== -1) {
                  skipText = true;
                  skipTextDepth = 1;
                }
              }
              skipMap[depth] = true;
            }
            depth++;
            if (skip) {
              if (options.disallowedTagsMode === "discard") {
                return;
              }
              tempResult = result;
              result = "";
            }
            result += "<" + name;
            if (name === "script") {
              if (options.allowedScriptHostnames || options.allowedScriptDomains) {
                frame.innerText = "";
              }
            }
            if (!allowedAttributesMap || has(allowedAttributesMap, name) || allowedAttributesMap["*"]) {
              each(attribs, function(value, a3) {
                if (!VALID_HTML_ATTRIBUTE_NAME.test(a3)) {
                  delete frame.attribs[a3];
                  return;
                }
                let parsed;
                let passedAllowedAttributesMapCheck = false;
                if (!allowedAttributesMap || has(allowedAttributesMap, name) && allowedAttributesMap[name].indexOf(a3) !== -1 || allowedAttributesMap["*"] && allowedAttributesMap["*"].indexOf(a3) !== -1 || has(allowedAttributesGlobMap, name) && allowedAttributesGlobMap[name].test(a3) || allowedAttributesGlobMap["*"] && allowedAttributesGlobMap["*"].test(a3)) {
                  passedAllowedAttributesMapCheck = true;
                } else if (allowedAttributesMap && allowedAttributesMap[name]) {
                  for (const o2 of allowedAttributesMap[name]) {
                    if (isPlainObject(o2) && o2.name && o2.name === a3) {
                      passedAllowedAttributesMapCheck = true;
                      let newValue = "";
                      if (o2.multiple === true) {
                        const splitStrArray = value.split(" ");
                        for (const s3 of splitStrArray) {
                          if (o2.values.indexOf(s3) !== -1) {
                            if (newValue === "") {
                              newValue = s3;
                            } else {
                              newValue += " " + s3;
                            }
                          }
                        }
                      } else if (o2.values.indexOf(value) >= 0) {
                        newValue = value;
                      }
                      value = newValue;
                    }
                  }
                }
                if (passedAllowedAttributesMapCheck) {
                  if (options.allowedSchemesAppliedToAttributes.indexOf(a3) !== -1) {
                    if (naughtyHref(name, value)) {
                      delete frame.attribs[a3];
                      return;
                    }
                  }
                  if (name === "script" && a3 === "src") {
                    let allowed = true;
                    try {
                      const parsed2 = new URL(value);
                      if (options.allowedScriptHostnames || options.allowedScriptDomains) {
                        const allowedHostname = (options.allowedScriptHostnames || []).find(function(hostname) {
                          return hostname === parsed2.hostname;
                        });
                        const allowedDomain = (options.allowedScriptDomains || []).find(function(domain) {
                          return parsed2.hostname === domain || parsed2.hostname.endsWith(`.${domain}`);
                        });
                        allowed = allowedHostname || allowedDomain;
                      }
                    } catch (e2) {
                      allowed = false;
                    }
                    if (!allowed) {
                      delete frame.attribs[a3];
                      return;
                    }
                  }
                  if (name === "iframe" && a3 === "src") {
                    let allowed = true;
                    try {
                      value = value.replace(/^(\w+:)?\s*[\\/]\s*[\\/]/, "$1//");
                      if (value.startsWith("relative:")) {
                        throw new Error("relative: exploit attempt");
                      }
                      let base = "relative://relative-site";
                      for (let i3 = 0; i3 < 100; i3++) {
                        base += `/${i3}`;
                      }
                      const parsed2 = new URL(value, base);
                      const isRelativeUrl = parsed2 && parsed2.hostname === "relative-site" && parsed2.protocol === "relative:";
                      if (isRelativeUrl) {
                        allowed = has(options, "allowIframeRelativeUrls") ? options.allowIframeRelativeUrls : !options.allowedIframeHostnames && !options.allowedIframeDomains;
                      } else if (options.allowedIframeHostnames || options.allowedIframeDomains) {
                        const allowedHostname = (options.allowedIframeHostnames || []).find(function(hostname) {
                          return hostname === parsed2.hostname;
                        });
                        const allowedDomain = (options.allowedIframeDomains || []).find(function(domain) {
                          return parsed2.hostname === domain || parsed2.hostname.endsWith(`.${domain}`);
                        });
                        allowed = allowedHostname || allowedDomain;
                      }
                    } catch (e2) {
                      allowed = false;
                    }
                    if (!allowed) {
                      delete frame.attribs[a3];
                      return;
                    }
                  }
                  if (a3 === "srcset") {
                    try {
                      parsed = parseSrcset(value);
                      parsed.forEach(function(value2) {
                        if (naughtyHref("srcset", value2.url)) {
                          value2.evil = true;
                        }
                      });
                      parsed = filter(parsed, function(v2) {
                        return !v2.evil;
                      });
                      if (!parsed.length) {
                        delete frame.attribs[a3];
                        return;
                      } else {
                        value = stringifySrcset(filter(parsed, function(v2) {
                          return !v2.evil;
                        }));
                        frame.attribs[a3] = value;
                      }
                    } catch (e2) {
                      delete frame.attribs[a3];
                      return;
                    }
                  }
                  if (a3 === "class") {
                    const allowedSpecificClasses = allowedClassesMap[name];
                    const allowedWildcardClasses = allowedClassesMap["*"];
                    const allowedSpecificClassesGlob = allowedClassesGlobMap[name];
                    const allowedWildcardClassesGlob = allowedClassesGlobMap["*"];
                    const allowedClassesGlobs = [allowedSpecificClassesGlob, allowedWildcardClassesGlob].filter(function(t2) {
                      return t2;
                    });
                    if (allowedSpecificClasses && allowedWildcardClasses) {
                      value = filterClasses(value, deepmerge(allowedSpecificClasses, allowedWildcardClasses), allowedClassesGlobs);
                    } else {
                      value = filterClasses(value, allowedSpecificClasses || allowedWildcardClasses, allowedClassesGlobs);
                    }
                    if (!value.length) {
                      delete frame.attribs[a3];
                      return;
                    }
                  }
                  if (a3 === "style") {
                    try {
                      const abstractSyntaxTree = postcssParse(name + " {" + value + "}");
                      const filteredAST = filterCss(abstractSyntaxTree, options.allowedStyles);
                      value = stringifyStyleAttributes(filteredAST);
                      if (value.length === 0) {
                        delete frame.attribs[a3];
                        return;
                      }
                    } catch (e2) {
                      delete frame.attribs[a3];
                      return;
                    }
                  }
                  result += " " + a3;
                  if (value && value.length) {
                    result += '="' + escapeHtml(value, true) + '"';
                  }
                } else {
                  delete frame.attribs[a3];
                }
              });
            }
            if (options.selfClosing.indexOf(name) !== -1) {
              result += " />";
            } else {
              result += ">";
              if (frame.innerText && !hasText && !options.textFilter) {
                result += escapeHtml(frame.innerText);
                addedText = true;
              }
            }
            if (skip) {
              result = tempResult + escapeHtml(result);
              tempResult = "";
            }
          },
          ontext: function(text) {
            if (skipText) {
              return;
            }
            const lastFrame = stack[stack.length - 1];
            let tag;
            if (lastFrame) {
              tag = lastFrame.tag;
              text = lastFrame.innerText !== void 0 ? lastFrame.innerText : text;
            }
            if (options.disallowedTagsMode === "discard" && (tag === "script" || tag === "style")) {
              result += text;
            } else {
              const escaped = escapeHtml(text, false);
              if (options.textFilter && !addedText) {
                result += options.textFilter(escaped, tag);
              } else if (!addedText) {
                result += escaped;
              }
            }
            if (stack.length) {
              const frame = stack[stack.length - 1];
              frame.text += text;
            }
          },
          onclosetag: function(name) {
            if (skipText) {
              skipTextDepth--;
              if (!skipTextDepth) {
                skipText = false;
              } else {
                return;
              }
            }
            const frame = stack.pop();
            if (!frame) {
              return;
            }
            skipText = options.enforceHtmlBoundary ? name === "html" : false;
            depth--;
            const skip = skipMap[depth];
            if (skip) {
              delete skipMap[depth];
              if (options.disallowedTagsMode === "discard") {
                frame.updateParentNodeText();
                return;
              }
              tempResult = result;
              result = "";
            }
            if (transformMap[depth]) {
              name = transformMap[depth];
              delete transformMap[depth];
            }
            if (options.exclusiveFilter && options.exclusiveFilter(frame)) {
              result = result.substr(0, frame.tagPosition);
              return;
            }
            frame.updateParentNodeMediaChildren();
            frame.updateParentNodeText();
            if (options.selfClosing.indexOf(name) !== -1) {
              if (skip) {
                result = tempResult;
                tempResult = "";
              }
              return;
            }
            result += "</" + name + ">";
            if (skip) {
              result = tempResult + escapeHtml(result);
              tempResult = "";
            }
          }
        }, options.parser);
        parser.write(html);
        parser.end();
        return result;
        function initializeState() {
          result = "";
          depth = 0;
          stack = [];
          skipMap = {};
          transformMap = {};
          skipText = false;
          skipTextDepth = 0;
        }
        function escapeHtml(s3, quote) {
          if (typeof s3 !== "string") {
            s3 = s3 + "";
          }
          if (options.parser.decodeEntities) {
            s3 = s3.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
            if (quote) {
              s3 = s3.replace(/"/g, "&quot;");
            }
          }
          s3 = s3.replace(/&(?![a-zA-Z0-9#]{1,20};)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
          if (quote) {
            s3 = s3.replace(/"/g, "&quot;");
          }
          return s3;
        }
        function naughtyHref(name, href) {
          href = href.replace(/[\x00-\x20]+/g, "");
          href = href.replace(/<!--.*?-->/g, "");
          const matches = href.match(/^([a-zA-Z][a-zA-Z0-9.\-+]*):/);
          if (!matches) {
            if (href.match(/^[/\\]{2}/)) {
              return !options.allowProtocolRelative;
            }
            return false;
          }
          const scheme = matches[1].toLowerCase();
          if (has(options.allowedSchemesByTag, name)) {
            return options.allowedSchemesByTag[name].indexOf(scheme) === -1;
          }
          return !options.allowedSchemes || options.allowedSchemes.indexOf(scheme) === -1;
        }
        function filterCss(abstractSyntaxTree, allowedStyles) {
          if (!allowedStyles) {
            return abstractSyntaxTree;
          }
          const filteredAST = klona(abstractSyntaxTree);
          const astRules = abstractSyntaxTree.nodes[0];
          let selectedRule;
          if (allowedStyles[astRules.selector] && allowedStyles["*"]) {
            selectedRule = deepmerge(allowedStyles[astRules.selector], allowedStyles["*"]);
          } else {
            selectedRule = allowedStyles[astRules.selector] || allowedStyles["*"];
          }
          if (selectedRule) {
            filteredAST.nodes[0].nodes = astRules.nodes.reduce(filterDeclarations(selectedRule), []);
          }
          return filteredAST;
        }
        function stringifyStyleAttributes(filteredAST) {
          return filteredAST.nodes[0].nodes.reduce(function(extractedAttributes, attributeObject) {
            extractedAttributes.push(attributeObject.prop + ":" + attributeObject.value);
            return extractedAttributes;
          }, []).join(";");
        }
        function filterDeclarations(selectedRule) {
          return function(allowedDeclarationsList, attributeObject) {
            if (has(selectedRule, attributeObject.prop)) {
              const matchesRegex = selectedRule[attributeObject.prop].some(function(regularExpression) {
                return regularExpression.test(attributeObject.value);
              });
              if (matchesRegex) {
                allowedDeclarationsList.push(attributeObject);
              }
            }
            return allowedDeclarationsList;
          };
        }
        function filterClasses(classes, allowed, allowedGlobs) {
          if (!allowed) {
            return classes;
          }
          classes = classes.split(/\s+/);
          return classes.filter(function(clss) {
            return allowed.indexOf(clss) !== -1 || allowedGlobs.some(function(glob) {
              return glob.test(clss);
            });
          }).join(" ");
        }
      }
      var htmlParserDefaults = {
        decodeEntities: true
      };
      sanitizeHtml2.defaults = {
        allowedTags: [
          "address",
          "article",
          "aside",
          "footer",
          "header",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "hgroup",
          "main",
          "nav",
          "section",
          "blockquote",
          "dd",
          "div",
          "dl",
          "dt",
          "figcaption",
          "figure",
          "hr",
          "li",
          "main",
          "ol",
          "p",
          "pre",
          "ul",
          "a",
          "abbr",
          "b",
          "bdi",
          "bdo",
          "br",
          "cite",
          "code",
          "data",
          "dfn",
          "em",
          "i",
          "kbd",
          "mark",
          "q",
          "rb",
          "rp",
          "rt",
          "rtc",
          "ruby",
          "s",
          "samp",
          "small",
          "span",
          "strong",
          "sub",
          "sup",
          "time",
          "u",
          "var",
          "wbr",
          "caption",
          "col",
          "colgroup",
          "table",
          "tbody",
          "td",
          "tfoot",
          "th",
          "thead",
          "tr"
        ],
        disallowedTagsMode: "discard",
        allowedAttributes: {
          a: ["href", "name", "target"],
          img: ["src"]
        },
        selfClosing: ["img", "br", "hr", "area", "base", "basefont", "input", "link", "meta"],
        allowedSchemes: ["http", "https", "ftp", "mailto", "tel"],
        allowedSchemesByTag: {},
        allowedSchemesAppliedToAttributes: ["href", "src", "cite"],
        allowProtocolRelative: true,
        enforceHtmlBoundary: false
      };
      sanitizeHtml2.simpleTransform = function(newTagName, newAttribs, merge) {
        merge = merge === void 0 ? true : merge;
        newAttribs = newAttribs || {};
        return function(tagName, attribs) {
          let attrib;
          if (merge) {
            for (attrib in newAttribs) {
              attribs[attrib] = newAttribs[attrib];
            }
          } else {
            attribs = newAttribs;
          }
          return {
            tagName: newTagName,
            attribs
          };
        };
      };
    }
  });

  // test-client/index.jsx
  init_preact_shim();
  init_preact_module();

  // src/index.js
  init_preact_shim();

  // node_modules/preact-custom-element/dist/preact-custom-element.esm.js
  init_preact_shim();
  init_preact_module();
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

  // src/sw-button/sw-button.jsx
  init_preact_shim();
  init_preact_module();

  // src/sw-button/sw-button.style.css
  var sw_button_style_default = "*, ::before, ::after {\n    box-sizing: border-box;\n    font: inherit;\n    color: inherit;\n}\n\n.button {\n    color: var(--foreground-color);\n    background: var(--primary-color-70);\n    font-size: 1em;\n    cursor: pointer;\n    border: none;\n    border-radius: 3px;\n    white-space: nowrap;\n    padding: .4em;\n    text-decoration: none;\n}\n\n.button:hover {\n    background: var(--primary-color-100);\n}\n\n.button:disabled,\n.button:disabled:hover {\n    background: var(--primary-color-40);\n    cursor: not-allowed;\n}\n\n.button:active {\n    background: var(--primary-color-100);\n    box-shadow: 0 0 2px 1px var(--primary-color-100);\n}\n";

  // src/sw-button/sw-button.jsx
  var SwButton = class extends _ {
    render({ icon, disabled, href }) {
      const child = this.props.children.props.children;
      const isDisabled = disabled !== "false" && !!disabled;
      return /* @__PURE__ */ v(d, null, /* @__PURE__ */ v("style", null, sw_button_style_default), !isDisabled && href ? /* @__PURE__ */ v("a", {
        className: "button",
        href
      }, child) : /* @__PURE__ */ v("button", {
        className: "button",
        type: "button",
        role: "button",
        disabled: isDisabled
      }, child));
    }
  };

  // src/sw-text-input/sw-text-input.jsx
  init_preact_shim();
  init_preact_module();

  // src/common/sw-input/sw-input.style.css
  var sw_input_style_default = "*, ::before, ::after {\n    box-sizing: border-box;\n    font: inherit;\n    color: inherit;\n}\n\n.error {\n    color: var(--error-color);\n}\n\np.error {\n    margin: .3em 0 0 0;\n}\n\n.input-wrapper {\n    position: relative;\n}\n\ninput {\n    padding: .4em 0;\n    border: 0;\n    border-bottom: 1px solid lightgray;\n    width: 100%;\n    font-size: 1em;\n    background: none;\n}\n\nlabel {\n    position: absolute;\n    top: .4em;\n    left: 0;\n    cursor: text;\n    font-size: 1em;\n    transition: .2s ease-out all;\n}\n\ninput:focus + label,\ninput:not(:placeholder-shown) + label {\n    top: -1.4em;\n    font-size: .85em;\n}\n\ninput:-webkit-autofill:not(:focus),\ntextarea:-webkit-autofill:not(:focus) {\n    border-bottom-color: lightgray;\n    -webkit-box-shadow: none;\n}\n\ninput:-webkit-autofill,\ninput:-webkit-autofill:hover,\ninput:-webkit-autofill:focus,\ntextarea:-webkit-autofill,\ntextarea:-webkit-autofill:hover,\ntextarea:-webkit-autofill:focus {\n    border-bottom-color: var(--primary-color-100);\n    -webkit-box-shadow: 0 1px 0 0 var(--primary-color-100);\n    transition: background-color 5000s ease-in-out 0s;\n}\n\ninput:hover,\ninput:focus-visible {\n    outline: 0;\n    border-bottom-color: var(--primary-color-100);\n    box-shadow: 0 1px 0 0 var(--primary-color-100);\n}\n";

  // src/sw-text-input/sw-text-input.jsx
  var SwTextInput = class extends _ {
    render({ name, required, placeholder, disabled, value }) {
      return /* @__PURE__ */ v("div", {
        className: "input-wrapper",
        ref: (node) => this.ref = node
      }, /* @__PURE__ */ v("style", null, sw_input_style_default), /* @__PURE__ */ v("input", {
        id: name,
        name,
        type: "text",
        required: required === "true",
        placeholder: " ",
        disabled: disabled !== "false" && !!disabled,
        value,
        onInput: (e2) => this.ref.getRootNode().host.dispatchEvent(new CustomEvent("changeEvent", {
          detail: { name, value: e2.target.value },
          bubbles: true
        })),
        "aria-labelledby": placeholder
      }), /* @__PURE__ */ v("label", {
        htmlFor: name
      }, placeholder));
    }
  };

  // src/sw-datetime-input/sw-datetime-input.jsx
  init_preact_shim();
  init_preact_module();

  // src/sw-datetime-input/sw-datetime-input.style.css
  var sw_datetime_input_style_default = ".datetime-wrapper {\n    display: flex;\n}\n";

  // src/sw-datetime-input/sw-datetime-input.jsx
  var SwDatetimeInput = class extends _ {
    dispatchEvent(name) {
      this.ref.getRootNode().host.dispatchEvent(new CustomEvent("changeEvent", {
        detail: {
          name,
          value: this.state.value,
          error: this.state?.timeErr || this.state?.dateErr || this.state?.datetimeErr
        },
        bubbles: true
      }));
    }
    render({ name, required, placeholder, disabled, value, date, time, step }) {
      const dateVal = dateStringify(value);
      const timeVal = timeStringify(value, date);
      return /* @__PURE__ */ v("div", {
        className: "input-wrapper",
        ref: (node) => this.ref = node
      }, /* @__PURE__ */ v("style", null, sw_input_style_default), /* @__PURE__ */ v("style", null, sw_datetime_input_style_default), /* @__PURE__ */ v("div", {
        className: "datetime-wrapper"
      }, date && /* @__PURE__ */ v("input", {
        id: name + "-date",
        type: "date",
        required: required === "true",
        placeholder: " ",
        disabled: disabled !== "false" && !!disabled,
        value: this.state.dateVal ?? dateVal,
        "aria-labelledby": placeholder,
        onBlur: async (e2) => {
          const {
            newVal,
            datetimeErr
          } = datetimeToInteger(e2.target.value, time, this.state.timeVal ?? timeVal, this);
          await this.setState({
            dateVal: e2.target.value,
            timeVal: this.state.timeVal ?? timeVal,
            dateErr: e2.target.validationMessage !== e2.target.value && e2.target.validationMessage,
            value: newVal,
            datetimeErr
          });
          this.dispatchEvent(name);
        }
      }), time && /* @__PURE__ */ v("input", {
        id: name + "-time",
        type: "time",
        required: required === "true",
        placeholder: " ",
        disabled: disabled !== "false" && !!disabled,
        value: this.state.timeVal ?? timeVal,
        step,
        "aria-labelledby": placeholder,
        onBlur: async (e2) => {
          const { newVal, datetimeErr } = date ? datetimeToInteger(this.state.dateVal ?? dateVal, time, e2.target.value, this) : timeToInteger(e2.target.value);
          await this.setState({
            timeVal: e2.target.value,
            dateVal: this.state.dateVal ?? dateVal,
            timeErr: e2.target.validationMessage !== e2.target.value && e2.target.validationMessage,
            value: newVal,
            datetimeErr
          });
          this.dispatchEvent(name);
        }
      })));
    }
  };
  function dateStringify(intAsStr) {
    if (intAsStr === "") {
      return null;
    }
    const date = new Date(Number(intAsStr));
    const yyyy = String(date.getFullYear()).padStart(4, 0);
    const mm = String(date.getMonth() + 1).padStart(2, 0);
    const dd = String(date.getDate()).padStart(2, 0);
    return [yyyy, mm, dd].join("-");
  }
  function timeStringify(intAsStr, withDate) {
    if (intAsStr === "") {
      return null;
    }
    const time = new Date(Number(intAsStr));
    const arr = [];
    if (withDate) {
      arr.push(String(time.getHours()).padStart(2, 0));
      arr.push(String(time.getMinutes()).padStart(2, 0));
      arr.push(String(time.getSeconds()).padStart(2, 0));
    } else {
      arr.push(String(time.getUTCHours()).padStart(2, 0));
      arr.push(String(time.getUTCMinutes()).padStart(2, 0));
      arr.push(String(time.getUTCSeconds()).padStart(2, 0));
    }
    return arr.join(":");
  }
  function timeToInteger(timeString) {
    let arr = timeString.split(":");
    arr = arr.map((val) => Number(val));
    const seconds = arr[0] * 60 * 60 + arr[1] * 60 + (arr[2] || 0);
    return { newVal: 1e3 * seconds, datetimeErr: "" };
  }
  function datetimeToInteger(dateString, withTime, timeString) {
    if (!dateString && (!withTime || !timeString)) {
      return { newVal: null, datetimeErr: "" };
    }
    if (withTime && (!dateString || !timeString)) {
      return { newVal: null, datetimeErr: "Nieprawid\u0142owa data/godzina" };
    }
    const newString = dateString + (timeString ? "T" + timeString : "");
    return { datetimeErr: "", newVal: new Date(newString).valueOf() };
  }

  // src/sw-loader/sw-loader.jsx
  init_preact_shim();
  init_preact_module();

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

  // src/sw-pagination/sw-pagination.jsx
  init_preact_shim();
  init_preact_module();

  // src/sw-pagination/sw-pagination.style.css
  var sw_pagination_style_default = "*, ::before, ::after {\n    box-sizing: border-box;\n    font: inherit;\n    color: inherit;\n}\n\na {\n    text-decoration: none;\n}\n\n.wrapper {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    padding-top: 2em;\n}\n\ndiv.wrapper a,\ndiv.wrapper span {\n    margin: 0 .5em;\n}\n\n#next {\n    margin-left: .5em;\n}\n\n.currentPage {\n    color: var(--primary-color-100)\n}\n\n.previous,\n.next {\n    font-weight: bold;\n    text-transform: uppercase;\n}\n\nspan:not(span.currentPage, span.caption) {\n    cursor: pointer;\n}\n";

  // src/sw-utils/router.js
  init_preact_shim();
  var routes = [];
  function routeMatchUrl(route, url) {
    const testParts = url.split("/").filter((x2) => x2);
    if (testParts.length !== route.parts.length) {
      return false;
    }
    for (let i3 = 0; i3 < testParts.length; i3 += 1) {
      const routePart = route.parts[i3].toUrl({}).toString();
      if (testParts[i3] !== routePart && routePart !== void 0) {
        return false;
      }
    }
    return true;
  }
  function findDefaultRoute() {
    const defaultRoute = routes.find((r3) => r3.isDefault);
    if (!defaultRoute) {
      throw new Error("no default route specified");
    }
    defaultRoute.params = getRouteParams(defaultRoute);
    return defaultRoute;
  }
  function findRouteByName(routeName) {
    const route = routes.find((r3) => r3.name === routeName) ?? findDefaultRoute();
    route.params = getRouteParams(route);
    return route;
  }
  function findRouteByUrl(url) {
    url = (url ?? "").split("#")[1] ?? "";
    const route = routes.find((route2) => routeMatchUrl(route2, url)) ?? findDefaultRoute();
    route.params = getRouteParams(route);
    return route;
  }
  function getCurrentRoute() {
    return findRouteByUrl(window.location.href);
  }
  function getRouteUrl(routeName, params) {
    const route = findRouteByName(routeName);
    return window.location.pathname + "#" + getRoutePath(route, params);
  }
  function getRouteParams(route) {
    const pathSplit = window.location.hash.slice(1).split("/");
    let params = {};
    for (let i3 = 0; i3 < route.parts.length; i3 += 1) {
      const part = route.parts[i3];
      params = { ...params, ...part.fromUrl(pathSplit[i3]) };
    }
    return params;
  }
  function getRoutePath(route, params) {
    return route.parts.map((part) => part.toUrl(params)).join("/");
  }
  var eventListeners = {};
  function trigger(event) {
    (eventListeners[event.type] ?? []).forEach((listener) => listener(event));
  }
  window.addEventListener("hashchange", () => {
    const route = getCurrentRoute();
    const event = new CustomEvent("routeChange", { detail: route });
    trigger(event);
  });

  // src/sw-pagination/sw-pagination.jsx
  var SwPagination = class extends _ {
    pageChange(page) {
      this.ref.getRootNode().host.dispatchEvent(new CustomEvent("pageChange", {
        detail: { page },
        bubbles: true
      }));
    }
    generateTheATag(page, innerText, className) {
      return /* @__PURE__ */ v("a", {
        href: getRouteUrl(this.href, { page }),
        className: className && className,
        onClick: () => this.pageChange(page)
      }, innerText);
    }
    render({ currentPage, numberOfPages, href }) {
      currentPage = Number.parseInt(currentPage);
      numberOfPages = Number.parseInt(numberOfPages);
      if (href)
        this.href = href;
      return /* @__PURE__ */ v(d, null, /* @__PURE__ */ v("style", null, sw_pagination_style_default), /* @__PURE__ */ v("div", {
        ref: (node) => this.ref = node,
        className: "wrapper"
      }, currentPage > 1 && this.generateTheATag(currentPage - 1, "< Previous page", "previous"), numberOfPages > 1 && currentPage !== 1 && this.generateTheATag(1, "1"), numberOfPages > 7 && currentPage > 4 || numberOfPages === 7 && currentPage > 5 && /* @__PURE__ */ v("span", {
        className: "caption"
      }, "..."), currentPage - 4 > 0 && currentPage + 1 > numberOfPages && currentPage !== 5 && this.generateTheATag(currentPage - 4, currentPage - 4), currentPage - 3 > 0 && currentPage + 2 > numberOfPages && currentPage !== 4 && this.generateTheATag(currentPage - 3, currentPage - 3), currentPage - 2 > 0 && currentPage !== 3 && this.generateTheATag(currentPage - 2, currentPage - 2), currentPage - 1 > 0 && currentPage !== 2 && this.generateTheATag(currentPage - 1, currentPage - 1), /* @__PURE__ */ v("span", {
        className: "currentPage"
      }, currentPage), currentPage + 1 <= numberOfPages && this.generateTheATag(currentPage + 1, currentPage + 1), currentPage + 2 <= numberOfPages && this.generateTheATag(currentPage + 2, currentPage + 2), currentPage + 3 <= numberOfPages && currentPage - 4 < 4 && currentPage < 4 && this.generateTheATag(currentPage + 3, currentPage + 3), currentPage + 4 <= numberOfPages && currentPage - 4 < 4 && currentPage < 3 && this.generateTheATag(currentPage + 4, currentPage + 4), /* @__PURE__ */ v("span", {
        className: "caption"
      }, "of"), /* @__PURE__ */ v("span", {
        className: "caption"
      }, numberOfPages), numberOfPages > 1 && numberOfPages - currentPage !== 0 && this.generateTheATag(currentPage + 1, "Next page >", "next")));
    }
  };

  // src/sw-select/sw-select.jsx
  init_preact_shim();
  init_preact_module();

  // src/sw-select/sw-select.style.css
  var sw_select_style_default = "*, ::before, ::after {\n    box-sizing: border-box;\n    font: inherit;\n    color: inherit;\n}\n\n.select-wrapper {\n    position: relative;\n}\n\nlabel {\n    position: absolute;\n    top: -1.4em;\n    left: 0;\n    cursor: text;\n    font-size: .85em;\n}\n\n.button {\n    background-color: var(--background-color);\n    border: none;\n    text-align: left;\n    padding: .4em 0;\n    font-size: 1em;\n    width: 100%;\n    cursor: pointer;\n    border-bottom: 1px solid lightgray;\n}\n\nbutton:hover,\nbutton:focus,\nbutton:focus-visible {\n    outline: none;\n    border-bottom-color: var(--primary-color-100);\n    box-shadow: 0 1px 0 0 var(--primary-color-100);\n}\n\n.dropdown {\n    display: none;\n    margin-top: .4em;\n    width: 100%;\n    position: absolute;\n    border: 1px solid lightgray;\n    z-index: 1;\n    background: var(--background-color);\n    border-radius: var(--radius)\n}\n\n.dropdown input {\n    padding: .4em;\n    margin: .4em;\n}\n\n.results {\n    display: flex;\n    flex-direction: column;\n    max-height: 200px;\n    overflow: auto;\n}\n\n.results > * {\n    padding: .4em;\n    margin: .4em;\n}\n\n.option-hover,\n.option:hover {\n    cursor: pointer;\n    background-color: #ddd;\n}\n\n.show {\n    display: flex;\n    flex-direction: column;\n}\n\n.show-above {\n    bottom: 3.5em;\n}\n\n\n.input {\n    font-size: 1em;\n    outline: 0;\n    border: 0;\n    border-bottom: 1px solid lightgray;\n    background: var(--background-color);\n}\n\ninput:hover,\ninput:focus,\ninput:focus-visible {\n    outline: none;\n    border-bottom-color: var(--primary-color-100);\n    box-shadow: 0 1px 0 0 var(--primary-color-100);\n}\n";

  // src/sw-select/sw-select.jsx
  var import_lodash = __toModule(require_lodash());
  var counter = 2;
  var SwSelect = class extends _ {
    constructor() {
      super();
      this.toggleDropdownEventListener = this.toggleDropdownEventListener.bind(this);
      this.debounceSearch = import_lodash.default.debounce(async (sourceFn, value) => {
        try {
          const options = await sourceFn(value);
          this.setState({
            error: options?.message ? "Getting data has failed." : null,
            options: options?.documents ? options.documents : options
          });
        } catch (err) {
          const error = "Getting data has failed.";
          console.error(err, error);
          this.setState({ error });
        }
      }, 300, {
        wait: 0,
        leading: false
      });
    }
    componentWillMount() {
      document.addEventListener("click", this.toggleDropdownEventListener);
    }
    componentWillUnmount() {
      document.removeEventListener("click", this.toggleDropdownEventListener);
    }
    toggleDropdownEventListener(e2) {
      const dropdown = this.ref.getRootNode().host.shadowRoot.querySelector(".show");
      let pathElement = e2.path[0];
      const parents = [];
      while (pathElement) {
        parents.push(pathElement);
        pathElement = pathElement.parentNode;
      }
      if (dropdown && !parents.includes(this.ref)) {
        this.toggleDropdown();
      }
    }
    toggleDropdown() {
      this.setState({ isDropdownVisible: !this.state.isDropdownVisible });
      setTimeout(() => this.ref.getRootNode().host.shadowRoot.querySelector("input").focus(), 70);
      const dropdown = this.ref.getRootNode().host.shadowRoot.querySelector(".dropdown");
      dropdown.style.zIndex = this.state.isDropdownVisible ? counter-- : counter++;
    }
    sourceFnDefault(options) {
      return (searchPhrase) => options.filter((option) => option.includes(searchPhrase));
    }
    setDisplayDropdownPosition() {
      const rect = this.ref.getRootNode().host.shadowRoot.querySelector(".button").getBoundingClientRect();
      this.setState({ shouldDisplayAbove: rect.bottom + 265 > window.innerHeight });
    }
    keyAction(event) {
      switch (event.code) {
        case "Escape":
          this.toggleDropdown();
          break;
        case "ArrowDown":
          break;
        case "ArrowUp":
          break;
        case "Enter":
          break;
      }
    }
    onSearchChange(sourceFn, minimumCharLengthTrigger, event, initialOptions) {
      const value = event.target.value;
      minimumCharLengthTrigger = minimumCharLengthTrigger ?? 0;
      if (value.length <= minimumCharLengthTrigger) {
        this.setState({ options: initialOptions });
        return;
      }
      this.debounceSearch(sourceFn, value);
    }
    onOptionClick(option) {
      this.toggleDropdown();
      this.setState({ selectedOption: option.name ?? option });
      this.ref.getRootNode().host.dispatchEvent(new CustomEvent("change", {
        detail: option,
        bubbles: true
      }));
    }
    renderLabel(option, labelField) {
      if (typeof labelField !== "string") {
        return option;
      }
      return option[labelField];
    }
    render({ config: { name, sourceFn, labelField, initialOptions, selected, minimumCharLengthTrigger } = {} }) {
      const options = this.state.options ? this.state.options : initialOptions;
      if (!name || !options || sourceFn && !labelField) {
        throw new Error('Missing "name" or "initialOptions" or "labelField" parameter.');
      }
      if (!sourceFn)
        sourceFn = this.sourceFnDefault(options);
      return /* @__PURE__ */ v("div", {
        className: "select-wrapper",
        ref: (node) => this.ref = node
      }, /* @__PURE__ */ v("style", null, sw_select_style_default), /* @__PURE__ */ v("button", {
        className: "button",
        onClick: () => {
          this.toggleDropdown();
          this.setDisplayDropdownPosition();
        }
      }, this.state.selectedOption || selected || "Please select an option \u25BC"), /* @__PURE__ */ v("div", {
        className: `dropdown
                    ${this.state.isDropdownVisible && "show"} 
                    ${this.state.shouldDisplayAbove && "show-above"}`
      }, /* @__PURE__ */ v("input", {
        className: "input",
        type: "text",
        placeholder: "Start typing...",
        onKeyUp: (event) => this.keyAction(event),
        onInput: (event) => this.onSearchChange(sourceFn, minimumCharLengthTrigger, event, initialOptions)
      }), /* @__PURE__ */ v("div", {
        className: "results"
      }, options[0] && (options ?? []).map((option) => {
        return /* @__PURE__ */ v("span", {
          className: "option",
          onClick: () => this.onOptionClick(option)
        }, this.renderLabel(option, labelField));
      })), this.state.error && /* @__PURE__ */ v("p", {
        className: "error"
      }, this.state.error)), /* @__PURE__ */ v("label", {
        htmlFor: name
      }, name));
    }
  };

  // src/sw-table/sw-table.jsx
  init_preact_shim();
  init_preact_module();

  // src/sw-table/sw-table.style.css
  var sw_table_style_default = "table {\n    width: 100%;\n    border-collapse: collapse;\n    border-spacing: 0;\n    text-align: left;\n    background: #fbfbfb;\n}\n\nthead {\n    font-style: italic;\n    color: darkgray;\n}\n\ntbody tr:nth-child(even) {\n    background: white;\n}\n\ntbody tr:nth-child(odd) {\n    border-bottom: 1px solid #eeeeee;\n}\n\nth, td {\n    padding: .5em;\n}\n\ntd.components *:not(:first-child) {\n    margin-left: 2em;\n}\n";

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

  // src/sw-number-input/sw-number-input.jsx
  init_preact_shim();
  init_preact_module();
  var SwNumberInput = class extends _ {
    render({ name, required, placeholder, disabled, value, min, max, step }) {
      const minValue = Number.parseInt(min);
      const maxValue = Number.parseInt(max);
      return /* @__PURE__ */ v(d, null, /* @__PURE__ */ v("style", null, sw_input_style_default), /* @__PURE__ */ v("div", {
        className: "input-wrapper"
      }, /* @__PURE__ */ v("input", {
        ref: (node) => this.ref = node,
        id: name,
        name,
        type: "number",
        required: required === "true",
        placeholder: " ",
        disabled: disabled !== "false" && !!disabled,
        value: this.state.value ?? value,
        min: min && minValue,
        max: max && maxValue,
        step: step && Number(step),
        "aria-labelledby": placeholder,
        onBlur: async (e2) => {
          await this.setState({
            errorMessage: e2.target.validationMessage !== e2.target.value && e2.target.validationMessage,
            value: e2.target.value
          });
          this.ref.getRootNode().host.dispatchEvent(new CustomEvent("changeEvent", {
            detail: {
              name,
              value: e2.target.value,
              error: this.state.errorMessage
            },
            bubbles: true
          }));
        }
      }), /* @__PURE__ */ v("label", {
        htmlFor: name
      }, placeholder)));
    }
  };

  // src/sw-utils/sw-flash-message/flash-message.jsx
  init_preact_shim();

  // src/sw-utils/sw-modal/modal.jsx
  init_preact_shim();

  // src/sw-utils/sw-modal/modal.style.css
  var sw_modal_style_default = ".modal-container {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1;\n    background-color: black;\n    opacity: 0.5;\n}\n\n.modal-wrapper {\n    position: fixed;\n    top: 12%;\n    left: 50%;\n    transform: translate(-50%);\n    z-index: 10;\n}\n\n.modal-content {\n    background: var(--background-color);\n    border-radius: var(--radius);\n    box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;\n}\n\n.modal-content > :not(:last-child) {\n    border-bottom: 1px dotted lightgray;\n}\n\n.modal-large {\n    width: 62em;\n}\n\n.modal-small {\n    width: 30em;\n}\n\n.modal-body,\n.modal-footer {\n    padding: 2em;\n}\n\n.modal-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.modal-header-content {\n    padding: 2em;\n}\n\n.modal-header-icon {\n    padding: 2em;\n    cursor: pointer;\n}\n\n.modal-body-content {\n    max-height: 20em;\n    overflow-y: auto;\n    padding: 1em;\n}\n\n.modal-footer {\n    display: flex;\n    justify-content: flex-end;\n}\n\n.modal-footer-content > :not(:last-child) {\n    padding-right: 1em;\n}\n\n.modal-prevent {\n    pointer-events: none;\n    filter: blur(1px) brightness(95%);\n}\n\nbody > :not(.modal-wrapper, .modal-container) {\n    display: inherit;\n    filter: blur(1px);\n}\n\n/* ----------------------------------------------\n * Generated by Animista on 2021-10-8 15:29:47\n * Licensed under FreeBSD License.\n * See http://animista.net/license for more info.\n * w: http://animista.net, t: @cssanimista\n * ---------------------------------------------- */\n\n/**\n * ----------------------------------------\n * animation swing-in-top-fwd\n * ----------------------------------------\n */\n.swing-in-top-fwd {\n    -webkit-animation: swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;\n    animation: swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;\n}\n\n@-webkit-keyframes swing-in-top-fwd {\n    0% {\n        -webkit-transform: rotateX(-100deg);\n        transform: rotateX(-100deg);\n        -webkit-transform-origin: top;\n        transform-origin: top;\n        opacity: 0;\n    }\n    100% {\n        -webkit-transform: rotateX(0deg);\n        transform: rotateX(0deg);\n        -webkit-transform-origin: top;\n        transform-origin: top;\n        opacity: 1;\n    }\n}\n\n@keyframes swing-in-top-fwd {\n    0% {\n        -webkit-transform: rotateX(-100deg);\n        transform: rotateX(-100deg);\n        -webkit-transform-origin: top;\n        transform-origin: top;\n        opacity: 0;\n    }\n    100% {\n        -webkit-transform: rotateX(0deg);\n        transform: rotateX(0deg);\n        -webkit-transform-origin: top;\n        transform-origin: top;\n        opacity: 1;\n    }\n}\n\n/* ----------------------------------------------\n * Generated by Animista on 2021-10-11 12:56:33\n * Licensed under FreeBSD License.\n * See http://animista.net/license for more info.\n * w: http://animista.net, t: @cssanimista\n * ---------------------------------------------- */\n\n/**\n * ----------------------------------------\n * animation slide-out-top\n * ----------------------------------------\n */\n.slide-out-top {\n    -webkit-animation: slide-out-top 0.1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;\n    animation: slide-out-top 0.1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;\n}\n\n@-webkit-keyframes slide-out-top {\n    0% {\n        -webkit-transform: translateY(0);\n        transform: translateY(0);\n        opacity: 1;\n    }\n    100% {\n        -webkit-transform: translateY(-1000px);\n        transform: translateY(-1000px);\n        opacity: 0;\n    }\n}\n\n@keyframes slide-out-top {\n    0% {\n        -webkit-transform: translateY(0);\n        transform: translateY(0);\n        opacity: 1;\n    }\n    100% {\n        -webkit-transform: translateY(-1000px);\n        transform: translateY(-1000px);\n        opacity: 0;\n    }\n}\n";

  // src/sw-utils/sw-modal/modal.jsx
  init_preact_module();
  var import_sanitize_html = __toModule(require_sanitize_html());
  var counter2 = 0;
  function manageStyle() {
    const style = document.querySelector("#style-modal");
    if (!style) {
      const style2 = document.createElement("style");
      style2.innerHTML = sw_modal_style_default;
      style2.id = "style-modal";
      document.head.appendChild(style2);
      return;
    }
    const modalContainer = document.querySelector(".modal-container");
    if (!modalContainer)
      document.head.removeChild(style);
  }
  function managePrevent() {
    const modals = document.querySelectorAll(".modal-wrapper");
    modals?.forEach((modal2) => {
      if (modal2.id === `modal-${counter2 - 1}`)
        modal2.classList.remove("modal-prevent");
      else
        modal2.classList.add("modal-prevent");
    });
  }
  function manageModalContainer() {
    const modalContainer = document.querySelector(".modal-container");
    if (!modalContainer) {
      const modalContainer2 = document.createElement("div");
      modalContainer2.classList.add("modal-container");
      document.body.appendChild(modalContainer2);
      managePrevent();
      return;
    }
    if (counter2 === 0)
      modalContainer.remove();
    managePrevent();
    manageStyle();
  }
  function convertToElement(toConvert, modal2, close, selector) {
    let item;
    if (typeof toConvert === "string") {
      item = toConvert;
    } else if (typeof toConvert === "function") {
      item = toConvert({ close });
    }
    const element = modal2.querySelector(`.${selector}-content`);
    if (typeof item === "string") {
      element.innerHTML = (0, import_sanitize_html.default)(item);
      return;
    }
    if (item instanceof HTMLElement) {
      element.appendChild(item);
      return;
    }
    S(item ? item : toConvert, element);
  }
  function modal({ header, body, footer, large }) {
    return new Promise((resolve, reject) => {
      if (!header && !body && !footer && !large) {
        const message = "Missing modal parameters";
        reject(message);
        throw new Error(message);
      }
      const id = counter2++;
      const modalSize = large ? "modal-large" : "modal-small";
      const item = document.createElement("div");
      item.innerHTML = `<div id="modal-${id}" class="modal-wrapper modal-prevent">
                          <div class="modal-content ${modalSize} swing-in-top-fwd">
                              <div class="modal-header">
                                  <div class="modal-header-content"></div>
                                  <div class="modal-header-icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="" viewBox="0 0 16 16">
                                          <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
                                      </svg>
                                  </div>
                              </div>

                              <div class="modal-body">
                                  <div class="modal-body-content"></div>
                              </div>

                              <div class="modal-footer">
                                  <div class="modal-footer-content"></div>
                              </div>
                          </div>
                      </div>`;
      const modal2 = item.firstChild;
      function close(result) {
        const modals = document.querySelectorAll("[id^='modal-']");
        modals.forEach((modal3) => {
          const parsedId = Number.parseInt(modal3.id.substring(6, modal3.id.length));
          if (parsedId >= id) {
            const modalContent = modal3.querySelector(".modal-content");
            modalContent.classList.add("slide-out-top");
            setTimeout(() => {
              modal3.remove();
              counter2--;
              manageModalContainer();
              resolve(result);
            }, 100);
          }
        });
      }
      if (header)
        convertToElement(header, modal2, close, "modal-header");
      if (body)
        convertToElement(body, modal2, close, "modal-body");
      if (footer)
        convertToElement(footer, modal2, close, "modal-footer");
      modal2.style.top = `${id * 2 + 12}%`;
      const icon = modal2.querySelector(".modal-header-icon");
      icon.addEventListener("click", () => {
        close();
      });
      document.body.appendChild(modal2);
      manageStyle();
      manageModalContainer();
    });
  }
  function modalAlert({ title, text, buttonLabel, icon }) {
    return modal({
      header: title,
      body: text,
      footer: ({ close }) => /* @__PURE__ */ v("sw-button", {
        onClick: () => close(true)
      }, buttonLabel),
      large: false
    });
  }
  function modalPrompt({ title, text, placeholder, initialValue, icon }) {
    let content;
    return modal({
      header: title,
      body: () => /* @__PURE__ */ v(d, null, /* @__PURE__ */ v("p", null, text), /* @__PURE__ */ v("sw-text-input", {
        name: title,
        required: true,
        placeholder,
        value: initialValue,
        onchangeEvent: (detail) => content = detail.detail.value
      })),
      footer: ({ close }) => /* @__PURE__ */ v("sw-button", {
        onClick: () => close(content)
      }, "Submit"),
      large: false
    });
  }
  function modalConfirm({ title, text, okLabel, cancelLabel, icon }) {
    return modal({
      header: title,
      body: text,
      footer: ({ close }) => /* @__PURE__ */ v(d, null, /* @__PURE__ */ v("sw-button", {
        onClick: () => close(true)
      }, okLabel), /* @__PURE__ */ v("sw-button", {
        onClick: () => close(false)
      }, cancelLabel)),
      large: false
    });
  }

  // src/index.js
  var areElementsRegistered = !!customElements.get("sw-button");
  if (!areElementsRegistered) {
    preact_custom_element_esm_default(SwButton, "sw-button", ["icon", "disabled", "href"], { shadow: true });
    preact_custom_element_esm_default(SwDatetimeInput, "sw-datetime-input", ["name", "required", "placeholder", "disabled", "value", "step"], { shadow: true });
    preact_custom_element_esm_default(SwLoader, "sw-loader", [], { shadow: true });
    preact_custom_element_esm_default(SwNumberInput, "sw-number-input", ["name", "required", "placeholder", "disabled", "value", "min", "max", "step"], { shadow: true });
    preact_custom_element_esm_default(SwPagination, "sw-pagination", ["current-page", "number-of-pages", "href"], { shadow: true });
    preact_custom_element_esm_default(SwSelect, "sw-select", ["config"], { shadow: true });
    preact_custom_element_esm_default(SwTable, "sw-table", ["config"], { shadow: true });
    preact_custom_element_esm_default(SwTextInput, "sw-text-input", ["name", "required", "placeholder", "disabled", "value"], { shadow: true });
  }

  // test-client/index.jsx
  var users = [
    { id: "1", name: "Jan Kowalski" },
    { id: "2", name: "John Smith" }
  ];
  async function searchForUsers(searchPhrase) {
    return users.filter((user) => {
      return user.name.includes(searchPhrase);
    });
  }
  var article = {
    id: "abc",
    title: "aaa",
    userId: "1"
  };
  async function getUser(userId) {
    return users.find((usr) => usr.id === userId);
  }
  function setUser(selectedUser) {
    article.userId = selectedUser.id;
  }
  var Main = class extends _ {
    async componentWillMount() {
      const user = await getUser(article.userId);
      this.setState({ initialUser: user });
    }
    render() {
      return /* @__PURE__ */ v(d, null, /* @__PURE__ */ v("sw-datetime-input", {
        name: "datbezEventaeAndTime",
        onchangeEvent: (e2) => {
          console.log("Taki stan chcia\u0142em zapisa\u0107:", e2.detail.value);
          console.log("a taki jest obecny state:", this.state);
          this.setState({ "val": e2.detail.value });
        },
        date: true,
        time: true,
        customProp: "lalala",
        val: this.state.val || 1635347290788
      }), /* @__PURE__ */ v("sw-datetime-input", {
        name: "dateAndTime",
        date: true,
        time: true,
        onchangeEvent: (e2) => {
          console.log("HANDLED EVENT: ", e2);
        },
        customProp: "lalala",
        value: "1635347290788"
      }), /* @__PURE__ */ v("sw-datetime-input", {
        name: "dateOnly",
        date: true,
        onchangeEvent: (e2) => {
          console.log("HANDLED EVENT: ", e2);
        },
        customProp: "lalala",
        value: "-62101382400000"
      }), /* @__PURE__ */ v("sw-datetime-input", {
        name: "timeOnly",
        time: true,
        onchangeEvent: (e2) => {
          console.log("HANDLED EVENT: ", e2);
        },
        customProp: "lalala",
        val: 1243258883777
      }), /* @__PURE__ */ v("sw-datetime-input", {
        name: "timeOnly",
        time: true,
        onchangeEvent: (e2) => {
          console.log("HANDLED EVENT: ", e2);
        },
        customProp: "lalala",
        val: 1243258883777,
        secs: true
      }), /* @__PURE__ */ v("sw-select", {
        config: {
          name: "test",
          sourceFn: searchForUsers,
          labelField: "name",
          initialOptions: [this.state.initialUser],
          minimumCharLengthTrigger: 2
        },
        onchange: setUser
      }), /* @__PURE__ */ v("h2", {
        style: "cursor: pointer",
        onClick: async () => {
          const a3 = await modal({
            header: ({ close }) => /* @__PURE__ */ v("h2", {
              onClick: async () => {
                const c3 = await modal({
                  header: ({ close: close2 }) => "Welcomessssss",
                  body: ({ close: close2 }) => /* @__PURE__ */ v("p", null, "Welcome one our website"),
                  footer: ({ close: close2 }) => /* @__PURE__ */ v("sw-button", {
                    onClick: () => close2("modal c")
                  }, "OK")
                });
                console.log(c3);
              },
              className: "test"
            }, "Welcome CLICK!"),
            body: ({ close }) => /* @__PURE__ */ v("div", {
              className: "test2"
            }, "Welcome one our website", /* @__PURE__ */ v("div", null, "TEST")),
            footer: ({ close }) => /* @__PURE__ */ v("sw-button", {
              onClick: () => close("modal a")
            }, "OK"),
            large: true
          });
          const b2 = await modal({
            header: /* @__PURE__ */ v("h2", null, "Next"),
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci esse labore laborum non nostrum quidem quisquam suscipit ullam, voluptatem. Eligendi et explicabo inventore porro provident repellendus sit. Accusantium alias beatae blanditiis consequatur dolorem doloremque, dolores ducimus et eum fuga labore officiis pariatur quasi qui quod quos rem repudiandae velit, vitae?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci esse labore laborum non nostrum quidem quisquam suscipit ullam, voluptatem. Eligendi et explicabo inventore porro provident repellendus sit. Accusantium alias beatae blanditiis consequatur dolorem doloremque, dolores ducimus et eum fuga labore officiis pariatur quasi qui quod quos rem repudiandae velit, vitae?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci esse labore laborum non nostrum quidem quisquam suscipit ullam, voluptatem. Eligendi et explicabo inventore porro provident repellendus sit. Accusantium alias beatae blanditiis consequatur dolorem doloremque, dolores ducimus et eum fuga labore officiis pariatur quasi qui quod quos rem repudiandae velit, vitae?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci esse labore laborum non nLorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci esse labore laborum non nostrum quidem quisquam suscipit ullam, voluptatem. Eligendi et explicabo inventore porro provident repellendus sit. Accusantium alias beatae blanditiis consequatur dolorem doloremque, dolores ducimus et eum fuga labore officiis pariatur quasi qui quod quos rem repudiandae velit, vitae?",
            footer: ({ close }) => /* @__PURE__ */ v("sw-button", {
              onClick: () => close("modal b")
            }, "OK"),
            large: false
          });
          console.log(a3, b2);
        }
      }, "Click HERE!!!"), /* @__PURE__ */ v("h3", {
        style: "cursor: pointer",
        onClick: async () => {
          const alert = await modalAlert({
            title: "Danger!",
            text: "You are not allowed to view this content!",
            buttonLabel: "OK",
            icon: "cross"
          });
          console.log(alert);
        }
      }, "Modal Alert CLICK ME!"), /* @__PURE__ */ v("h3", {
        style: "cursor: pointer",
        onClick: async () => {
          const name = await modalPrompt({
            title: "Please answer",
            text: "Please enter your name",
            placeholder: "name",
            initialValue: "",
            icon: "user"
          });
          console.log(name);
        }
      }, "Modal Prompt CLICK ME!"), /* @__PURE__ */ v("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam distinctio, excepturi iste nostrum odit quibusdam quisquam sunt tempore ullam voluptates. Aperiam commodi debitis doloremque, error et hic in mollitia nemo numquam rem, tempora ut vel? Debitis dolorem excepturi illo non odit provident quas rerum, tempore voluptatibus! Alias animi aut blanditiis consequuntur culpa debitis delectus deleniti dignissimos dolor dolores eius eligendi enim et, exercitationem illum in ipsa iusto laborum molestias, necessitatibus neque nisi nobis obcaecati pariatur porro praesentium quam quas quisquam repellendus saepe sit soluta sunt unde vel vero voluptatem voluptates. Amet aperiam autem consectetur cum cumque doloremque eius eos error facilis hic illum ipsum, iure laboriosam molestiae natus nisi numquam odit optio perspiciatis praesentium quis quos recusandae reiciendis sunt tenetur ullam, vitae! Aspernatur, deserunt distinctio doloremque et facere fuga fugiat in inventore iste itaque nihil placeat possimus reiciendis totam veritatis. Ad aut consequatur delectus distinctio dolor dolorem est eum eveniet fugiat harum illo, maiores minima mollitia quam, quos. Cupiditate esse id pariatur ullam. Alias eum nemo nobis, quod quos similique sit. Alias animi delectus doloremque ducimus, error, est, facilis fugit laborum laudantium natus nihil omnis praesentium quidem sunt ullam! A, ad deserunt dolorum ea exercitationem "), /* @__PURE__ */ v("sw-select", {
        config: {
          name: "lalalaA",
          initialOptions: [
            "quisquam sapiente veritatis. Aliquid explicabo id molestiae quaerat repellendus ullam",
            "dwa",
            "trzy",
            "cztery",
            "dwa",
            "trzy",
            "cztery"
          ]
        }
      }), /* @__PURE__ */ v("sw-select", {
        config: {
          name: "lalalaA",
          initialOptions: [
            "quisquam sapiente veritatis. Aliquid explicabo id molestiae quaerat repellendus ullam",
            "dwa",
            "trzy",
            "cztery",
            "dwa",
            "trzy",
            "cztery"
          ]
        }
      }), /* @__PURE__ */ v("sw-select", {
        config: {
          name: "lalalaA",
          initialOptions: [
            "quisquam sapiente veritatis. Aliquid explicabo id molestiae quaerat repellendus ullam",
            "dwa",
            "trzy",
            "cztery",
            "dwa",
            "trzy",
            "cztery"
          ]
        }
      }), /* @__PURE__ */ v("p", null, "in laudantium officia quam, quas quasi quidem, sequi vero. Alias animi aperiam consectetur distinctio dolore ea eligendi fugiat itaque magnam maxime neque nobis, perferendis, porro quaerat quam repellat, repellendus repudiandae saepe tempore temporibus ullam veniam voluptatum? Accusamus aliquid consequuntur cupiditate dicta doloremque dolores dolorum eaque esse eveniet excepturi facere facilis fuga in laborum magnam maiores minima modi nostrum, obcaecati odio omnis quas repellendus reprehenderit sit soluta tenetur voluptatum? Aliquid atque aut autem culpa dignissimos doloremque ea eligendi exercitationem illum iusto maiores maxime minus modi molestias neque, nisi pariatur perferendis placeat, ratione repudiandae vel, voluptatem voluptatum. Adipisci assumenda dignissimos eaque eius, esse excepturi illo itaque libero, molestias nihil nulla perferendis perspiciatis quae, quas quo quod recusandae reiciendis repudiandae sed ut! Dignissimos doloremque fugit repellat sapiente tempore. Aliquid at cumque enim error eum, excepturi explicabo in libero minima nostrum, odit perferendis porro. Aliquam assumenda beatae dolore doloribus eligendi, excepturi facilis, iste libero molestias neque pariatur placeat quidem? Ad aperiam dignissimos eligendi, esse, excepturi explicabo itaque molestias nemo sapiente temporibus ullam vero? Ad animi cupiditate dolorem ea eligendi, est minus nisi odio pariatur qui? Aliquam beatae commodi consequatur culpa dicta distinctio ducimus error est, in iste libero obcaecati, omnis, pariatur reiciendis totam! Aliquam architecto dicta doloribus ea eaque error eum eveniet expedita, harum itaque molestiae numquam perspiciatis, provident quas quidem ullam voluptates. Aspernatur molestiae natus obcaecati saepe sapiente. Ad ea fugit natus quod, quos rem ut voluptatum! Consectetur dicta est ex minus nemo numquam qui quis quo sit unde. Aliquam, consectetur consequuntur, cupiditate deserunt dignissimos dolore exercitationem impedit iste laboriosam laborum magni maxime nam non obcaecati officia optio placeat quibusdam quidem sed tempore temporibus vitae voluptates? Adipisci animi consequatur culpa cumque id, illo ipsa non praesentium qui sapiente ullam veritatis vitae voluptatum? Accusantium aperiam aut autem corporis cum delectus dignissimos eaque ex, excepturi id ipsam laborum maxime molestias mollitia natus necessitatibus odit perferendis placeat porro provident quaerat repudiandae, totam voluptate voluptatem voluptatum? Corporis quaerat quisquam sed. Alias earum nemo, nisi quod similique tempora unde veniam! Ab aliquam amet asperiores cumque deleniti earum, eius eum expedita facilis impedit, inventore nihil omnis, porro qui sed voluptate voluptatum. Animi commodi consectetur eos ipsam magni qui reiciendis sit vitae?"), /* @__PURE__ */ v("select", null, /* @__PURE__ */ v("option", null, "aaa"), /* @__PURE__ */ v("option", null, "aaa"), /* @__PURE__ */ v("option", null, "aaa")), /* @__PURE__ */ v("sw-select", {
        config: {
          name: "BBBBBB",
          initialOptions: [
            "quisquam sapiente veritatis. Aliquid explicabo id molestiae quaerat repellendus ullam",
            "dwa",
            "trzy",
            "cztery",
            "dwa",
            "trzy",
            "cztery"
          ]
        }
      }), /* @__PURE__ */ v("h3", {
        style: "cursor: pointer",
        onClick: async () => {
          const userAccepted = await modalConfirm({
            title: "License",
            text: "Do you accept the license?",
            okLabel: "Yes",
            cancelLabel: "No",
            icon: "question-mark"
          });
          console.log(userAccepted);
        }
      }, "Modal Confirm CLICK ME!"));
    }
  };
  S(v(Main), document.body);
})();
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
//# sourceMappingURL=build.js.map
