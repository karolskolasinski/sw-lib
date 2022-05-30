// ../../node_modules/preact/dist/preact.module.js
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
function a(n3, l3) {
  for (var u3 in l3)
    n3[u3] = l3[u3];
  return n3;
}
function h(n3) {
  var l3 = n3.parentNode;
  l3 && l3.removeChild(n3);
}
function v(l3, u3, i3) {
  var t3, o3, r3, f3 = {};
  for (r3 in u3)
    r3 == "key" ? t3 = u3[r3] : r3 == "ref" ? o3 = u3[r3] : f3[r3] = u3[r3];
  if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i3), typeof l3 == "function" && l3.defaultProps != null)
    for (r3 in l3.defaultProps)
      f3[r3] === void 0 && (f3[r3] = l3.defaultProps[r3]);
  return y(l3, f3, t3, o3, null);
}
function y(n3, i3, t3, o3, r3) {
  var f3 = { type: n3, props: i3, key: t3, ref: o3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: r3 == null ? ++u : r3 };
  return r3 == null && l.vnode != null && l.vnode(f3), f3;
}
function d(n3) {
  return n3.children;
}
function _(n3, l3) {
  this.props = n3, this.context = l3;
}
function k(n3, l3) {
  if (l3 == null)
    return n3.__ ? k(n3.__, n3.__.__k.indexOf(n3) + 1) : null;
  for (var u3; l3 < n3.__k.length; l3++)
    if ((u3 = n3.__k[l3]) != null && u3.__e != null)
      return u3.__e;
  return typeof n3.type == "function" ? k(n3) : null;
}
function b(n3) {
  var l3, u3;
  if ((n3 = n3.__) != null && n3.__c != null) {
    for (n3.__e = n3.__c.base = null, l3 = 0; l3 < n3.__k.length; l3++)
      if ((u3 = n3.__k[l3]) != null && u3.__e != null) {
        n3.__e = n3.__c.base = u3.__e;
        break;
      }
    return b(n3);
  }
}
function m(n3) {
  (!n3.__d && (n3.__d = true) && t.push(n3) && !g.__r++ || r !== l.debounceRendering) && ((r = l.debounceRendering) || o)(g);
}
function g() {
  for (var n3; g.__r = t.length; )
    n3 = t.sort(function(n4, l3) {
      return n4.__v.__b - l3.__v.__b;
    }), t = [], n3.some(function(n4) {
      var l3, u3, i3, t3, o3, r3;
      n4.__d && (o3 = (t3 = (l3 = n4).__v).__e, (r3 = l3.__P) && (u3 = [], (i3 = a({}, t3)).__v = t3.__v + 1, j(r3, t3, i3, l3.__n, r3.ownerSVGElement !== void 0, t3.__h != null ? [o3] : null, u3, o3 == null ? k(t3) : o3, t3.__h), z(u3, t3), t3.__e != o3 && b(t3)));
    });
}
function w(n3, l3, u3, i3, t3, o3, r3, f3, s3, a3) {
  var h3, v3, p, _3, b3, m3, g3, w3 = i3 && i3.__k || c, A = w3.length;
  for (u3.__k = [], h3 = 0; h3 < l3.length; h3++)
    if ((_3 = u3.__k[h3] = (_3 = l3[h3]) == null || typeof _3 == "boolean" ? null : typeof _3 == "string" || typeof _3 == "number" || typeof _3 == "bigint" ? y(null, _3, null, null, _3) : Array.isArray(_3) ? y(d, { children: _3 }, null, null, null) : _3.__b > 0 ? y(_3.type, _3.props, _3.key, null, _3.__v) : _3) != null) {
      if (_3.__ = u3, _3.__b = u3.__b + 1, (p = w3[h3]) === null || p && _3.key == p.key && _3.type === p.type)
        w3[h3] = void 0;
      else
        for (v3 = 0; v3 < A; v3++) {
          if ((p = w3[v3]) && _3.key == p.key && _3.type === p.type) {
            w3[v3] = void 0;
            break;
          }
          p = null;
        }
      j(n3, _3, p = p || e, t3, o3, r3, f3, s3, a3), b3 = _3.__e, (v3 = _3.ref) && p.ref != v3 && (g3 || (g3 = []), p.ref && g3.push(p.ref, null, _3), g3.push(v3, _3.__c || b3, _3)), b3 != null ? (m3 == null && (m3 = b3), typeof _3.type == "function" && _3.__k === p.__k ? _3.__d = s3 = x(_3, s3, n3) : s3 = P(n3, _3, p, w3, b3, s3), typeof u3.type == "function" && (u3.__d = s3)) : s3 && p.__e == s3 && s3.parentNode != n3 && (s3 = k(p));
    }
  for (u3.__e = m3, h3 = A; h3--; )
    w3[h3] != null && (typeof u3.type == "function" && w3[h3].__e != null && w3[h3].__e == u3.__d && (u3.__d = k(i3, h3 + 1)), N(w3[h3], w3[h3]));
  if (g3)
    for (h3 = 0; h3 < g3.length; h3++)
      M(g3[h3], g3[++h3], g3[++h3]);
}
function x(n3, l3, u3) {
  for (var i3, t3 = n3.__k, o3 = 0; t3 && o3 < t3.length; o3++)
    (i3 = t3[o3]) && (i3.__ = n3, l3 = typeof i3.type == "function" ? x(i3, l3, u3) : P(u3, i3, i3, t3, i3.__e, l3));
  return l3;
}
function P(n3, l3, u3, i3, t3, o3) {
  var r3, f3, e3;
  if (l3.__d !== void 0)
    r3 = l3.__d, l3.__d = void 0;
  else if (u3 == null || t3 != o3 || t3.parentNode == null)
    n:
      if (o3 == null || o3.parentNode !== n3)
        n3.appendChild(t3), r3 = null;
      else {
        for (f3 = o3, e3 = 0; (f3 = f3.nextSibling) && e3 < i3.length; e3 += 2)
          if (f3 == t3)
            break n;
        n3.insertBefore(t3, o3), r3 = o3;
      }
  return r3 !== void 0 ? r3 : t3.nextSibling;
}
function C(n3, l3, u3, i3, t3) {
  var o3;
  for (o3 in u3)
    o3 === "children" || o3 === "key" || o3 in l3 || H2(n3, o3, null, u3[o3], i3);
  for (o3 in l3)
    t3 && typeof l3[o3] != "function" || o3 === "children" || o3 === "key" || o3 === "value" || o3 === "checked" || u3[o3] === l3[o3] || H2(n3, o3, l3[o3], u3[o3], i3);
}
function $(n3, l3, u3) {
  l3[0] === "-" ? n3.setProperty(l3, u3) : n3[l3] = u3 == null ? "" : typeof u3 != "number" || s.test(l3) ? u3 : u3 + "px";
}
function H2(n3, l3, u3, i3, t3) {
  var o3;
  n:
    if (l3 === "style")
      if (typeof u3 == "string")
        n3.style.cssText = u3;
      else {
        if (typeof i3 == "string" && (n3.style.cssText = i3 = ""), i3)
          for (l3 in i3)
            u3 && l3 in u3 || $(n3.style, l3, "");
        if (u3)
          for (l3 in u3)
            i3 && u3[l3] === i3[l3] || $(n3.style, l3, u3[l3]);
      }
    else if (l3[0] === "o" && l3[1] === "n")
      o3 = l3 !== (l3 = l3.replace(/Capture$/, "")), l3 = l3.toLowerCase() in n3 ? l3.toLowerCase().slice(2) : l3.slice(2), n3.l || (n3.l = {}), n3.l[l3 + o3] = u3, u3 ? i3 || n3.addEventListener(l3, o3 ? T : I, o3) : n3.removeEventListener(l3, o3 ? T : I, o3);
    else if (l3 !== "dangerouslySetInnerHTML") {
      if (t3)
        l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (l3 !== "href" && l3 !== "list" && l3 !== "form" && l3 !== "tabIndex" && l3 !== "download" && l3 in n3)
        try {
          n3[l3] = u3 == null ? "" : u3;
          break n;
        } catch (n4) {
        }
      typeof u3 == "function" || (u3 != null && (u3 !== false || l3[0] === "a" && l3[1] === "r") ? n3.setAttribute(l3, u3) : n3.removeAttribute(l3));
    }
}
function I(n3) {
  this.l[n3.type + false](l.event ? l.event(n3) : n3);
}
function T(n3) {
  this.l[n3.type + true](l.event ? l.event(n3) : n3);
}
function j(n3, u3, i3, t3, o3, r3, f3, e3, c3) {
  var s3, h3, v3, y3, p, k3, b3, m3, g3, x3, A, P3 = u3.type;
  if (u3.constructor !== void 0)
    return null;
  i3.__h != null && (c3 = i3.__h, e3 = u3.__e = i3.__e, u3.__h = null, r3 = [e3]), (s3 = l.__b) && s3(u3);
  try {
    n:
      if (typeof P3 == "function") {
        if (m3 = u3.props, g3 = (s3 = P3.contextType) && t3[s3.__c], x3 = s3 ? g3 ? g3.props.value : s3.__ : t3, i3.__c ? b3 = (h3 = u3.__c = i3.__c).__ = h3.__E : ("prototype" in P3 && P3.prototype.render ? u3.__c = h3 = new P3(m3, x3) : (u3.__c = h3 = new _(m3, x3), h3.constructor = P3, h3.render = O), g3 && g3.sub(h3), h3.props = m3, h3.state || (h3.state = {}), h3.context = x3, h3.__n = t3, v3 = h3.__d = true, h3.__h = []), h3.__s == null && (h3.__s = h3.state), P3.getDerivedStateFromProps != null && (h3.__s == h3.state && (h3.__s = a({}, h3.__s)), a(h3.__s, P3.getDerivedStateFromProps(m3, h3.__s))), y3 = h3.props, p = h3.state, v3)
          P3.getDerivedStateFromProps == null && h3.componentWillMount != null && h3.componentWillMount(), h3.componentDidMount != null && h3.__h.push(h3.componentDidMount);
        else {
          if (P3.getDerivedStateFromProps == null && m3 !== y3 && h3.componentWillReceiveProps != null && h3.componentWillReceiveProps(m3, x3), !h3.__e && h3.shouldComponentUpdate != null && h3.shouldComponentUpdate(m3, h3.__s, x3) === false || u3.__v === i3.__v) {
            h3.props = m3, h3.state = h3.__s, u3.__v !== i3.__v && (h3.__d = false), h3.__v = u3, u3.__e = i3.__e, u3.__k = i3.__k, u3.__k.forEach(function(n4) {
              n4 && (n4.__ = u3);
            }), h3.__h.length && f3.push(h3);
            break n;
          }
          h3.componentWillUpdate != null && h3.componentWillUpdate(m3, h3.__s, x3), h3.componentDidUpdate != null && h3.__h.push(function() {
            h3.componentDidUpdate(y3, p, k3);
          });
        }
        h3.context = x3, h3.props = m3, h3.state = h3.__s, (s3 = l.__r) && s3(u3), h3.__d = false, h3.__v = u3, h3.__P = n3, s3 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s, h3.getChildContext != null && (t3 = a(a({}, t3), h3.getChildContext())), v3 || h3.getSnapshotBeforeUpdate == null || (k3 = h3.getSnapshotBeforeUpdate(y3, p)), A = s3 != null && s3.type === d && s3.key == null ? s3.props.children : s3, w(n3, Array.isArray(A) ? A : [A], u3, i3, t3, o3, r3, f3, e3, c3), h3.base = u3.__e, u3.__h = null, h3.__h.length && f3.push(h3), b3 && (h3.__E = h3.__ = null), h3.__e = false;
      } else
        r3 == null && u3.__v === i3.__v ? (u3.__k = i3.__k, u3.__e = i3.__e) : u3.__e = L(i3.__e, u3, i3, t3, o3, r3, f3, c3);
    (s3 = l.diffed) && s3(u3);
  } catch (n4) {
    u3.__v = null, (c3 || r3 != null) && (u3.__e = e3, u3.__h = !!c3, r3[r3.indexOf(e3)] = null), l.__e(n4, u3, i3);
  }
}
function z(n3, u3) {
  l.__c && l.__c(u3, n3), n3.some(function(u4) {
    try {
      n3 = u4.__h, u4.__h = [], n3.some(function(n4) {
        n4.call(u4);
      });
    } catch (n4) {
      l.__e(n4, u4.__v);
    }
  });
}
function L(l3, u3, i3, t3, o3, r3, f3, c3) {
  var s3, a3, v3, y3 = i3.props, p = u3.props, d3 = u3.type, _3 = 0;
  if (d3 === "svg" && (o3 = true), r3 != null) {
    for (; _3 < r3.length; _3++)
      if ((s3 = r3[_3]) && "setAttribute" in s3 == !!d3 && (d3 ? s3.localName === d3 : s3.nodeType === 3)) {
        l3 = s3, r3[_3] = null;
        break;
      }
  }
  if (l3 == null) {
    if (d3 === null)
      return document.createTextNode(p);
    l3 = o3 ? document.createElementNS("http://www.w3.org/2000/svg", d3) : document.createElement(d3, p.is && p), r3 = null, c3 = false;
  }
  if (d3 === null)
    y3 === p || c3 && l3.data === p || (l3.data = p);
  else {
    if (r3 = r3 && n.call(l3.childNodes), a3 = (y3 = i3.props || e).dangerouslySetInnerHTML, v3 = p.dangerouslySetInnerHTML, !c3) {
      if (r3 != null)
        for (y3 = {}, _3 = 0; _3 < l3.attributes.length; _3++)
          y3[l3.attributes[_3].name] = l3.attributes[_3].value;
      (v3 || a3) && (v3 && (a3 && v3.__html == a3.__html || v3.__html === l3.innerHTML) || (l3.innerHTML = v3 && v3.__html || ""));
    }
    if (C(l3, p, y3, o3, c3), v3)
      u3.__k = [];
    else if (_3 = u3.props.children, w(l3, Array.isArray(_3) ? _3 : [_3], u3, i3, t3, o3 && d3 !== "foreignObject", r3, f3, r3 ? r3[0] : i3.__k && k(i3, 0), c3), r3 != null)
      for (_3 = r3.length; _3--; )
        r3[_3] != null && h(r3[_3]);
    c3 || ("value" in p && (_3 = p.value) !== void 0 && (_3 !== l3.value || d3 === "progress" && !_3 || d3 === "option" && _3 !== y3.value) && H2(l3, "value", _3, y3.value, false), "checked" in p && (_3 = p.checked) !== void 0 && _3 !== l3.checked && H2(l3, "checked", _3, y3.checked, false));
  }
  return l3;
}
function M(n3, u3, i3) {
  try {
    typeof n3 == "function" ? n3(u3) : n3.current = u3;
  } catch (n4) {
    l.__e(n4, i3);
  }
}
function N(n3, u3, i3) {
  var t3, o3;
  if (l.unmount && l.unmount(n3), (t3 = n3.ref) && (t3.current && t3.current !== n3.__e || M(t3, null, u3)), (t3 = n3.__c) != null) {
    if (t3.componentWillUnmount)
      try {
        t3.componentWillUnmount();
      } catch (n4) {
        l.__e(n4, u3);
      }
    t3.base = t3.__P = null;
  }
  if (t3 = n3.__k)
    for (o3 = 0; o3 < t3.length; o3++)
      t3[o3] && N(t3[o3], u3, typeof n3.type != "function");
  i3 || n3.__e == null || h(n3.__e), n3.__e = n3.__d = void 0;
}
function O(n3, l3, u3) {
  return this.constructor(n3, u3);
}
n = c.slice, l = { __e: function(n3, l3, u3, i3) {
  for (var t3, o3, r3; l3 = l3.__; )
    if ((t3 = l3.__c) && !t3.__)
      try {
        if ((o3 = t3.constructor) && o3.getDerivedStateFromError != null && (t3.setState(o3.getDerivedStateFromError(n3)), r3 = t3.__d), t3.componentDidCatch != null && (t3.componentDidCatch(n3, i3 || {}), r3 = t3.__d), r3)
          return t3.__E = t3;
      } catch (l4) {
        n3 = l4;
      }
  throw n3;
} }, u = 0, i = function(n3) {
  return n3 != null && n3.constructor === void 0;
}, _.prototype.setState = function(n3, l3) {
  var u3;
  u3 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = a({}, this.state), typeof n3 == "function" && (n3 = n3(a({}, u3), this.props)), n3 && a(u3, n3), n3 != null && this.__v && (l3 && this.__h.push(l3), m(this));
}, _.prototype.forceUpdate = function(n3) {
  this.__v && (this.__e = true, n3 && this.__h.push(n3), m(this));
}, _.prototype.render = d, t = [], o = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g.__r = 0, f = 0;

// ../../dist/build.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a3, b22) => {
  for (var prop in b22 || (b22 = {}))
    if (__hasOwnProp.call(b22, prop))
      __defNormalProp(a3, prop, b22[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b22)) {
      if (__propIsEnum.call(b22, prop))
        __defNormalProp(a3, prop, b22[prop]);
    }
  return a3;
};
var __spreadProps = (a3, b22) => __defProps(a3, __getOwnPropDescs(b22));
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
function a2(n22, l3) {
  for (var u3 in l3)
    n22[u3] = l3[u3];
  return n22;
}
function h2(n22) {
  var l3 = n22.parentNode;
  l3 && l3.removeChild(n22);
}
function v2(l3, u3, i3) {
  var t22, o22, r3, f22 = {};
  for (r3 in u3)
    r3 == "key" ? t22 = u3[r3] : r3 == "ref" ? o22 = u3[r3] : f22[r3] = u3[r3];
  if (arguments.length > 2 && (f22.children = arguments.length > 3 ? n2.call(arguments, 2) : i3), typeof l3 == "function" && l3.defaultProps != null)
    for (r3 in l3.defaultProps)
      f22[r3] === void 0 && (f22[r3] = l3.defaultProps[r3]);
  return y2(l3, f22, t22, o22, null);
}
function y2(n22, i3, t22, o22, r3) {
  var f22 = { type: n22, props: i3, key: t22, ref: o22, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: r3 == null ? ++u2 : r3 };
  return r3 == null && l2.vnode != null && l2.vnode(f22), f22;
}
function d2(n22) {
  return n22.children;
}
function _2(n22, l3) {
  this.props = n22, this.context = l3;
}
function k2(n22, l3) {
  if (l3 == null)
    return n22.__ ? k2(n22.__, n22.__.__k.indexOf(n22) + 1) : null;
  for (var u3; l3 < n22.__k.length; l3++)
    if ((u3 = n22.__k[l3]) != null && u3.__e != null)
      return u3.__e;
  return typeof n22.type == "function" ? k2(n22) : null;
}
function b2(n22) {
  var l3, u3;
  if ((n22 = n22.__) != null && n22.__c != null) {
    for (n22.__e = n22.__c.base = null, l3 = 0; l3 < n22.__k.length; l3++)
      if ((u3 = n22.__k[l3]) != null && u3.__e != null) {
        n22.__e = n22.__c.base = u3.__e;
        break;
      }
    return b2(n22);
  }
}
function m2(n22) {
  (!n22.__d && (n22.__d = true) && t2.push(n22) && !g2.__r++ || r2 !== l2.debounceRendering) && ((r2 = l2.debounceRendering) || o2)(g2);
}
function g2() {
  for (var n22; g2.__r = t2.length; )
    n22 = t2.sort(function(n3, l3) {
      return n3.__v.__b - l3.__v.__b;
    }), t2 = [], n22.some(function(n3) {
      var l3, u3, i3, t22, o22, r3;
      n3.__d && (o22 = (t22 = (l3 = n3).__v).__e, (r3 = l3.__P) && (u3 = [], (i3 = a2({}, t22)).__v = t22.__v + 1, j2(r3, t22, i3, l3.__n, r3.ownerSVGElement !== void 0, t22.__h != null ? [o22] : null, u3, o22 == null ? k2(t22) : o22, t22.__h), z2(u3, t22), t22.__e != o22 && b2(t22)));
    });
}
function w2(n22, l3, u3, i3, t22, o22, r3, f22, s3, a3) {
  var h22, v3, p, _22, b22, m22, g22, w22 = i3 && i3.__k || c2, A = w22.length;
  for (u3.__k = [], h22 = 0; h22 < l3.length; h22++)
    if ((_22 = u3.__k[h22] = (_22 = l3[h22]) == null || typeof _22 == "boolean" ? null : typeof _22 == "string" || typeof _22 == "number" || typeof _22 == "bigint" ? y2(null, _22, null, null, _22) : Array.isArray(_22) ? y2(d2, { children: _22 }, null, null, null) : _22.__b > 0 ? y2(_22.type, _22.props, _22.key, null, _22.__v) : _22) != null) {
      if (_22.__ = u3, _22.__b = u3.__b + 1, (p = w22[h22]) === null || p && _22.key == p.key && _22.type === p.type)
        w22[h22] = void 0;
      else
        for (v3 = 0; v3 < A; v3++) {
          if ((p = w22[v3]) && _22.key == p.key && _22.type === p.type) {
            w22[v3] = void 0;
            break;
          }
          p = null;
        }
      j2(n22, _22, p = p || e2, t22, o22, r3, f22, s3, a3), b22 = _22.__e, (v3 = _22.ref) && p.ref != v3 && (g22 || (g22 = []), p.ref && g22.push(p.ref, null, _22), g22.push(v3, _22.__c || b22, _22)), b22 != null ? (m22 == null && (m22 = b22), typeof _22.type == "function" && _22.__k === p.__k ? _22.__d = s3 = x2(_22, s3, n22) : s3 = P2(n22, _22, p, w22, b22, s3), typeof u3.type == "function" && (u3.__d = s3)) : s3 && p.__e == s3 && s3.parentNode != n22 && (s3 = k2(p));
    }
  for (u3.__e = m22, h22 = A; h22--; )
    w22[h22] != null && (typeof u3.type == "function" && w22[h22].__e != null && w22[h22].__e == u3.__d && (u3.__d = k2(i3, h22 + 1)), N2(w22[h22], w22[h22]));
  if (g22)
    for (h22 = 0; h22 < g22.length; h22++)
      M2(g22[h22], g22[++h22], g22[++h22]);
}
function x2(n22, l3, u3) {
  for (var i3, t22 = n22.__k, o22 = 0; t22 && o22 < t22.length; o22++)
    (i3 = t22[o22]) && (i3.__ = n22, l3 = typeof i3.type == "function" ? x2(i3, l3, u3) : P2(u3, i3, i3, t22, i3.__e, l3));
  return l3;
}
function P2(n22, l3, u3, i3, t22, o22) {
  var r3, f22, e22;
  if (l3.__d !== void 0)
    r3 = l3.__d, l3.__d = void 0;
  else if (u3 == null || t22 != o22 || t22.parentNode == null)
    n:
      if (o22 == null || o22.parentNode !== n22)
        n22.appendChild(t22), r3 = null;
      else {
        for (f22 = o22, e22 = 0; (f22 = f22.nextSibling) && e22 < i3.length; e22 += 2)
          if (f22 == t22)
            break n;
        n22.insertBefore(t22, o22), r3 = o22;
      }
  return r3 !== void 0 ? r3 : t22.nextSibling;
}
function C2(n22, l3, u3, i3, t22) {
  var o22;
  for (o22 in u3)
    o22 === "children" || o22 === "key" || o22 in l3 || H22(n22, o22, null, u3[o22], i3);
  for (o22 in l3)
    t22 && typeof l3[o22] != "function" || o22 === "children" || o22 === "key" || o22 === "value" || o22 === "checked" || u3[o22] === l3[o22] || H22(n22, o22, l3[o22], u3[o22], i3);
}
function $2(n22, l3, u3) {
  l3[0] === "-" ? n22.setProperty(l3, u3) : n22[l3] = u3 == null ? "" : typeof u3 != "number" || s2.test(l3) ? u3 : u3 + "px";
}
function H22(n22, l3, u3, i3, t22) {
  var o22;
  n:
    if (l3 === "style")
      if (typeof u3 == "string")
        n22.style.cssText = u3;
      else {
        if (typeof i3 == "string" && (n22.style.cssText = i3 = ""), i3)
          for (l3 in i3)
            u3 && l3 in u3 || $2(n22.style, l3, "");
        if (u3)
          for (l3 in u3)
            i3 && u3[l3] === i3[l3] || $2(n22.style, l3, u3[l3]);
      }
    else if (l3[0] === "o" && l3[1] === "n")
      o22 = l3 !== (l3 = l3.replace(/Capture$/, "")), l3 = l3.toLowerCase() in n22 ? l3.toLowerCase().slice(2) : l3.slice(2), n22.l || (n22.l = {}), n22.l[l3 + o22] = u3, u3 ? i3 || n22.addEventListener(l3, o22 ? T2 : I2, o22) : n22.removeEventListener(l3, o22 ? T2 : I2, o22);
    else if (l3 !== "dangerouslySetInnerHTML") {
      if (t22)
        l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (l3 !== "href" && l3 !== "list" && l3 !== "form" && l3 !== "tabIndex" && l3 !== "download" && l3 in n22)
        try {
          n22[l3] = u3 == null ? "" : u3;
          break n;
        } catch (n3) {
        }
      typeof u3 == "function" || (u3 != null && (u3 !== false || l3[0] === "a" && l3[1] === "r") ? n22.setAttribute(l3, u3) : n22.removeAttribute(l3));
    }
}
function I2(n22) {
  this.l[n22.type + false](l2.event ? l2.event(n22) : n22);
}
function T2(n22) {
  this.l[n22.type + true](l2.event ? l2.event(n22) : n22);
}
function j2(n22, u3, i3, t22, o22, r3, f22, e22, c3) {
  var s3, h22, v3, y22, p, k22, b22, m22, g22, x22, A, P22 = u3.type;
  if (u3.constructor !== void 0)
    return null;
  i3.__h != null && (c3 = i3.__h, e22 = u3.__e = i3.__e, u3.__h = null, r3 = [e22]), (s3 = l2.__b) && s3(u3);
  try {
    n:
      if (typeof P22 == "function") {
        if (m22 = u3.props, g22 = (s3 = P22.contextType) && t22[s3.__c], x22 = s3 ? g22 ? g22.props.value : s3.__ : t22, i3.__c ? b22 = (h22 = u3.__c = i3.__c).__ = h22.__E : ("prototype" in P22 && P22.prototype.render ? u3.__c = h22 = new P22(m22, x22) : (u3.__c = h22 = new _2(m22, x22), h22.constructor = P22, h22.render = O2), g22 && g22.sub(h22), h22.props = m22, h22.state || (h22.state = {}), h22.context = x22, h22.__n = t22, v3 = h22.__d = true, h22.__h = []), h22.__s == null && (h22.__s = h22.state), P22.getDerivedStateFromProps != null && (h22.__s == h22.state && (h22.__s = a2({}, h22.__s)), a2(h22.__s, P22.getDerivedStateFromProps(m22, h22.__s))), y22 = h22.props, p = h22.state, v3)
          P22.getDerivedStateFromProps == null && h22.componentWillMount != null && h22.componentWillMount(), h22.componentDidMount != null && h22.__h.push(h22.componentDidMount);
        else {
          if (P22.getDerivedStateFromProps == null && m22 !== y22 && h22.componentWillReceiveProps != null && h22.componentWillReceiveProps(m22, x22), !h22.__e && h22.shouldComponentUpdate != null && h22.shouldComponentUpdate(m22, h22.__s, x22) === false || u3.__v === i3.__v) {
            h22.props = m22, h22.state = h22.__s, u3.__v !== i3.__v && (h22.__d = false), h22.__v = u3, u3.__e = i3.__e, u3.__k = i3.__k, u3.__k.forEach(function(n3) {
              n3 && (n3.__ = u3);
            }), h22.__h.length && f22.push(h22);
            break n;
          }
          h22.componentWillUpdate != null && h22.componentWillUpdate(m22, h22.__s, x22), h22.componentDidUpdate != null && h22.__h.push(function() {
            h22.componentDidUpdate(y22, p, k22);
          });
        }
        h22.context = x22, h22.props = m22, h22.state = h22.__s, (s3 = l2.__r) && s3(u3), h22.__d = false, h22.__v = u3, h22.__P = n22, s3 = h22.render(h22.props, h22.state, h22.context), h22.state = h22.__s, h22.getChildContext != null && (t22 = a2(a2({}, t22), h22.getChildContext())), v3 || h22.getSnapshotBeforeUpdate == null || (k22 = h22.getSnapshotBeforeUpdate(y22, p)), A = s3 != null && s3.type === d2 && s3.key == null ? s3.props.children : s3, w2(n22, Array.isArray(A) ? A : [A], u3, i3, t22, o22, r3, f22, e22, c3), h22.base = u3.__e, u3.__h = null, h22.__h.length && f22.push(h22), b22 && (h22.__E = h22.__ = null), h22.__e = false;
      } else
        r3 == null && u3.__v === i3.__v ? (u3.__k = i3.__k, u3.__e = i3.__e) : u3.__e = L2(i3.__e, u3, i3, t22, o22, r3, f22, c3);
    (s3 = l2.diffed) && s3(u3);
  } catch (n3) {
    u3.__v = null, (c3 || r3 != null) && (u3.__e = e22, u3.__h = !!c3, r3[r3.indexOf(e22)] = null), l2.__e(n3, u3, i3);
  }
}
function z2(n22, u3) {
  l2.__c && l2.__c(u3, n22), n22.some(function(u4) {
    try {
      n22 = u4.__h, u4.__h = [], n22.some(function(n3) {
        n3.call(u4);
      });
    } catch (n3) {
      l2.__e(n3, u4.__v);
    }
  });
}
function L2(l3, u3, i3, t22, o22, r3, f22, c3) {
  var s3, a3, v3, y22 = i3.props, p = u3.props, d22 = u3.type, _22 = 0;
  if (d22 === "svg" && (o22 = true), r3 != null) {
    for (; _22 < r3.length; _22++)
      if ((s3 = r3[_22]) && "setAttribute" in s3 == !!d22 && (d22 ? s3.localName === d22 : s3.nodeType === 3)) {
        l3 = s3, r3[_22] = null;
        break;
      }
  }
  if (l3 == null) {
    if (d22 === null)
      return document.createTextNode(p);
    l3 = o22 ? document.createElementNS("http://www.w3.org/2000/svg", d22) : document.createElement(d22, p.is && p), r3 = null, c3 = false;
  }
  if (d22 === null)
    y22 === p || c3 && l3.data === p || (l3.data = p);
  else {
    if (r3 = r3 && n2.call(l3.childNodes), a3 = (y22 = i3.props || e2).dangerouslySetInnerHTML, v3 = p.dangerouslySetInnerHTML, !c3) {
      if (r3 != null)
        for (y22 = {}, _22 = 0; _22 < l3.attributes.length; _22++)
          y22[l3.attributes[_22].name] = l3.attributes[_22].value;
      (v3 || a3) && (v3 && (a3 && v3.__html == a3.__html || v3.__html === l3.innerHTML) || (l3.innerHTML = v3 && v3.__html || ""));
    }
    if (C2(l3, p, y22, o22, c3), v3)
      u3.__k = [];
    else if (_22 = u3.props.children, w2(l3, Array.isArray(_22) ? _22 : [_22], u3, i3, t22, o22 && d22 !== "foreignObject", r3, f22, r3 ? r3[0] : i3.__k && k2(i3, 0), c3), r3 != null)
      for (_22 = r3.length; _22--; )
        r3[_22] != null && h2(r3[_22]);
    c3 || ("value" in p && (_22 = p.value) !== void 0 && (_22 !== l3.value || d22 === "progress" && !_22 || d22 === "option" && _22 !== y22.value) && H22(l3, "value", _22, y22.value, false), "checked" in p && (_22 = p.checked) !== void 0 && _22 !== l3.checked && H22(l3, "checked", _22, y22.checked, false));
  }
  return l3;
}
function M2(n22, u3, i3) {
  try {
    typeof n22 == "function" ? n22(u3) : n22.current = u3;
  } catch (n3) {
    l2.__e(n3, i3);
  }
}
function N2(n22, u3, i3) {
  var t22, o22;
  if (l2.unmount && l2.unmount(n22), (t22 = n22.ref) && (t22.current && t22.current !== n22.__e || M2(t22, null, u3)), (t22 = n22.__c) != null) {
    if (t22.componentWillUnmount)
      try {
        t22.componentWillUnmount();
      } catch (n3) {
        l2.__e(n3, u3);
      }
    t22.base = t22.__P = null;
  }
  if (t22 = n22.__k)
    for (o22 = 0; o22 < t22.length; o22++)
      t22[o22] && N2(t22[o22], u3, typeof n22.type != "function");
  i3 || n22.__e == null || h2(n22.__e), n22.__e = n22.__d = void 0;
}
function O2(n22, l3, u3) {
  return this.constructor(n22, u3);
}
function S(u3, i3, t22) {
  var o22, r3, f22;
  l2.__ && l2.__(u3, i3), r3 = (o22 = typeof t22 == "function") ? null : t22 && t22.__k || i3.__k, f22 = [], j2(i3, u3 = (!o22 && t22 || i3).__k = v2(d2, null, [u3]), r3 || e2, e2, i3.ownerSVGElement !== void 0, !o22 && t22 ? [t22] : r3 ? null : i3.firstChild ? n2.call(i3.childNodes) : null, f22, !o22 && t22 ? t22 : r3 ? r3.__e : i3.firstChild, o22), z2(f22, u3);
}
function q(n22, l3) {
  S(n22, l3, q);
}
function B(l3, u3, i3) {
  var t22, o22, r3, f22 = a2({}, l3.props);
  for (r3 in u3)
    r3 == "key" ? t22 = u3[r3] : r3 == "ref" ? o22 = u3[r3] : f22[r3] = u3[r3];
  return arguments.length > 2 && (f22.children = arguments.length > 3 ? n2.call(arguments, 2) : i3), y2(l3.type, f22, t22 || l3.key, o22 || l3.ref, null);
}
var n2;
var l2;
var u2;
var i2;
var t2;
var o2;
var r2;
var f2;
var e2;
var c2;
var s2;
var init_preact_module = __esm({
  "node_modules/preact/dist/preact.module.js"() {
    init_preact_shim();
    e2 = {};
    c2 = [];
    s2 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
    n2 = c2.slice, l2 = { __e: function(n22, l3, u3, i3) {
      for (var t22, o22, r3; l3 = l3.__; )
        if ((t22 = l3.__c) && !t22.__)
          try {
            if ((o22 = t22.constructor) && o22.getDerivedStateFromError != null && (t22.setState(o22.getDerivedStateFromError(n22)), r3 = t22.__d), t22.componentDidCatch != null && (t22.componentDidCatch(n22, i3 || {}), r3 = t22.__d), r3)
              return t22.__E = t22;
          } catch (l4) {
            n22 = l4;
          }
      throw n22;
    } }, u2 = 0, i2 = function(n22) {
      return n22 != null && n22.constructor === void 0;
    }, _2.prototype.setState = function(n22, l3) {
      var u3;
      u3 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = a2({}, this.state), typeof n22 == "function" && (n22 = n22(a2({}, u3), this.props)), n22 && a2(u3, n22), n22 != null && this.__v && (l3 && this.__h.push(l3), m2(this));
    }, _2.prototype.forceUpdate = function(n22) {
      this.__v && (this.__e = true, n22 && this.__h.push(n22), m2(this));
    }, _2.prototype.render = d2, t2 = [], o2 = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g2.__r = 0, f2 = 0;
  }
});
var init_preact_shim = __esm({
  "preact-shim.js"() {
    init_preact_module();
  }
});
var require_isArray = __commonJS({
  "node_modules/lodash/isArray.js"(exports, module) {
    init_preact_shim();
    var isArray = Array.isArray;
    module.exports = isArray;
  }
});
var require_freeGlobal = __commonJS({
  "node_modules/lodash/_freeGlobal.js"(exports, module) {
    init_preact_shim();
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    module.exports = freeGlobal;
  }
});
var require_root = __commonJS({
  "node_modules/lodash/_root.js"(exports, module) {
    init_preact_shim();
    var freeGlobal = require_freeGlobal();
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    module.exports = root;
  }
});
var require_Symbol = __commonJS({
  "node_modules/lodash/_Symbol.js"(exports, module) {
    init_preact_shim();
    var root = require_root();
    var Symbol2 = root.Symbol;
    module.exports = Symbol2;
  }
});
var require_getRawTag = __commonJS({
  "node_modules/lodash/_getRawTag.js"(exports, module) {
    init_preact_shim();
    var Symbol2 = require_Symbol();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e22) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    module.exports = getRawTag;
  }
});
var require_objectToString = __commonJS({
  "node_modules/lodash/_objectToString.js"(exports, module) {
    init_preact_shim();
    var objectProto = Object.prototype;
    var nativeObjectToString = objectProto.toString;
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    module.exports = objectToString;
  }
});
var require_baseGetTag = __commonJS({
  "node_modules/lodash/_baseGetTag.js"(exports, module) {
    init_preact_shim();
    var Symbol2 = require_Symbol();
    var getRawTag = require_getRawTag();
    var objectToString = require_objectToString();
    var nullTag = "[object Null]";
    var undefinedTag = "[object Undefined]";
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    module.exports = baseGetTag;
  }
});
var require_isObjectLike = __commonJS({
  "node_modules/lodash/isObjectLike.js"(exports, module) {
    init_preact_shim();
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    module.exports = isObjectLike;
  }
});
var require_isSymbol = __commonJS({
  "node_modules/lodash/isSymbol.js"(exports, module) {
    init_preact_shim();
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var symbolTag = "[object Symbol]";
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
    }
    module.exports = isSymbol;
  }
});
var require_isKey = __commonJS({
  "node_modules/lodash/_isKey.js"(exports, module) {
    init_preact_shim();
    var isArray = require_isArray();
    var isSymbol = require_isSymbol();
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
    var reIsPlainProp = /^\w*$/;
    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }
      var type = typeof value;
      if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
    }
    module.exports = isKey;
  }
});
var require_isObject = __commonJS({
  "node_modules/lodash/isObject.js"(exports, module) {
    init_preact_shim();
    function isObject2(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    module.exports = isObject2;
  }
});
var require_isFunction = __commonJS({
  "node_modules/lodash/isFunction.js"(exports, module) {
    init_preact_shim();
    var baseGetTag = require_baseGetTag();
    var isObject2 = require_isObject();
    var asyncTag = "[object AsyncFunction]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var proxyTag = "[object Proxy]";
    function isFunction(value) {
      if (!isObject2(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    module.exports = isFunction;
  }
});
var require_coreJsData = __commonJS({
  "node_modules/lodash/_coreJsData.js"(exports, module) {
    init_preact_shim();
    var root = require_root();
    var coreJsData = root["__core-js_shared__"];
    module.exports = coreJsData;
  }
});
var require_isMasked = __commonJS({
  "node_modules/lodash/_isMasked.js"(exports, module) {
    init_preact_shim();
    var coreJsData = require_coreJsData();
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    module.exports = isMasked;
  }
});
var require_toSource = __commonJS({
  "node_modules/lodash/_toSource.js"(exports, module) {
    init_preact_shim();
    var funcProto = Function.prototype;
    var funcToString = funcProto.toString;
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e22) {
        }
        try {
          return func + "";
        } catch (e22) {
        }
      }
      return "";
    }
    module.exports = toSource;
  }
});
var require_baseIsNative = __commonJS({
  "node_modules/lodash/_baseIsNative.js"(exports, module) {
    init_preact_shim();
    var isFunction = require_isFunction();
    var isMasked = require_isMasked();
    var isObject2 = require_isObject();
    var toSource = require_toSource();
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    function baseIsNative(value) {
      if (!isObject2(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    module.exports = baseIsNative;
  }
});
var require_getValue = __commonJS({
  "node_modules/lodash/_getValue.js"(exports, module) {
    init_preact_shim();
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    module.exports = getValue;
  }
});
var require_getNative = __commonJS({
  "node_modules/lodash/_getNative.js"(exports, module) {
    init_preact_shim();
    var baseIsNative = require_baseIsNative();
    var getValue = require_getValue();
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    module.exports = getNative;
  }
});
var require_nativeCreate = __commonJS({
  "node_modules/lodash/_nativeCreate.js"(exports, module) {
    init_preact_shim();
    var getNative = require_getNative();
    var nativeCreate = getNative(Object, "create");
    module.exports = nativeCreate;
  }
});
var require_hashClear = __commonJS({
  "node_modules/lodash/_hashClear.js"(exports, module) {
    init_preact_shim();
    var nativeCreate = require_nativeCreate();
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    module.exports = hashClear;
  }
});
var require_hashDelete = __commonJS({
  "node_modules/lodash/_hashDelete.js"(exports, module) {
    init_preact_shim();
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    module.exports = hashDelete;
  }
});
var require_hashGet = __commonJS({
  "node_modules/lodash/_hashGet.js"(exports, module) {
    init_preact_shim();
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    module.exports = hashGet;
  }
});
var require_hashHas = __commonJS({
  "node_modules/lodash/_hashHas.js"(exports, module) {
    init_preact_shim();
    var nativeCreate = require_nativeCreate();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    module.exports = hashHas;
  }
});
var require_hashSet = __commonJS({
  "node_modules/lodash/_hashSet.js"(exports, module) {
    init_preact_shim();
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    module.exports = hashSet;
  }
});
var require_Hash = __commonJS({
  "node_modules/lodash/_Hash.js"(exports, module) {
    init_preact_shim();
    var hashClear = require_hashClear();
    var hashDelete = require_hashDelete();
    var hashGet = require_hashGet();
    var hashHas = require_hashHas();
    var hashSet = require_hashSet();
    function Hash(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    module.exports = Hash;
  }
});
var require_listCacheClear = __commonJS({
  "node_modules/lodash/_listCacheClear.js"(exports, module) {
    init_preact_shim();
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    module.exports = listCacheClear;
  }
});
var require_eq = __commonJS({
  "node_modules/lodash/eq.js"(exports, module) {
    init_preact_shim();
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    module.exports = eq;
  }
});
var require_assocIndexOf = __commonJS({
  "node_modules/lodash/_assocIndexOf.js"(exports, module) {
    init_preact_shim();
    var eq = require_eq();
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    module.exports = assocIndexOf;
  }
});
var require_listCacheDelete = __commonJS({
  "node_modules/lodash/_listCacheDelete.js"(exports, module) {
    init_preact_shim();
    var assocIndexOf = require_assocIndexOf();
    var arrayProto = Array.prototype;
    var splice = arrayProto.splice;
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
    module.exports = listCacheDelete;
  }
});
var require_listCacheGet = __commonJS({
  "node_modules/lodash/_listCacheGet.js"(exports, module) {
    init_preact_shim();
    var assocIndexOf = require_assocIndexOf();
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    module.exports = listCacheGet;
  }
});
var require_listCacheHas = __commonJS({
  "node_modules/lodash/_listCacheHas.js"(exports, module) {
    init_preact_shim();
    var assocIndexOf = require_assocIndexOf();
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    module.exports = listCacheHas;
  }
});
var require_listCacheSet = __commonJS({
  "node_modules/lodash/_listCacheSet.js"(exports, module) {
    init_preact_shim();
    var assocIndexOf = require_assocIndexOf();
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
    module.exports = listCacheSet;
  }
});
var require_ListCache = __commonJS({
  "node_modules/lodash/_ListCache.js"(exports, module) {
    init_preact_shim();
    var listCacheClear = require_listCacheClear();
    var listCacheDelete = require_listCacheDelete();
    var listCacheGet = require_listCacheGet();
    var listCacheHas = require_listCacheHas();
    var listCacheSet = require_listCacheSet();
    function ListCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    module.exports = ListCache;
  }
});
var require_Map = __commonJS({
  "node_modules/lodash/_Map.js"(exports, module) {
    init_preact_shim();
    var getNative = require_getNative();
    var root = require_root();
    var Map2 = getNative(root, "Map");
    module.exports = Map2;
  }
});
var require_mapCacheClear = __commonJS({
  "node_modules/lodash/_mapCacheClear.js"(exports, module) {
    init_preact_shim();
    var Hash = require_Hash();
    var ListCache = require_ListCache();
    var Map2 = require_Map();
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    module.exports = mapCacheClear;
  }
});
var require_isKeyable = __commonJS({
  "node_modules/lodash/_isKeyable.js"(exports, module) {
    init_preact_shim();
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    module.exports = isKeyable;
  }
});
var require_getMapData = __commonJS({
  "node_modules/lodash/_getMapData.js"(exports, module) {
    init_preact_shim();
    var isKeyable = require_isKeyable();
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    module.exports = getMapData;
  }
});
var require_mapCacheDelete = __commonJS({
  "node_modules/lodash/_mapCacheDelete.js"(exports, module) {
    init_preact_shim();
    var getMapData = require_getMapData();
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    module.exports = mapCacheDelete;
  }
});
var require_mapCacheGet = __commonJS({
  "node_modules/lodash/_mapCacheGet.js"(exports, module) {
    init_preact_shim();
    var getMapData = require_getMapData();
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    module.exports = mapCacheGet;
  }
});
var require_mapCacheHas = __commonJS({
  "node_modules/lodash/_mapCacheHas.js"(exports, module) {
    init_preact_shim();
    var getMapData = require_getMapData();
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    module.exports = mapCacheHas;
  }
});
var require_mapCacheSet = __commonJS({
  "node_modules/lodash/_mapCacheSet.js"(exports, module) {
    init_preact_shim();
    var getMapData = require_getMapData();
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size = data.size;
      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }
    module.exports = mapCacheSet;
  }
});
var require_MapCache = __commonJS({
  "node_modules/lodash/_MapCache.js"(exports, module) {
    init_preact_shim();
    var mapCacheClear = require_mapCacheClear();
    var mapCacheDelete = require_mapCacheDelete();
    var mapCacheGet = require_mapCacheGet();
    var mapCacheHas = require_mapCacheHas();
    var mapCacheSet = require_mapCacheSet();
    function MapCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    module.exports = MapCache;
  }
});
var require_memoize = __commonJS({
  "node_modules/lodash/memoize.js"(exports, module) {
    init_preact_shim();
    var MapCache = require_MapCache();
    var FUNC_ERROR_TEXT = "Expected a function";
    function memoize(func, resolver) {
      if (typeof func != "function" || resolver != null && typeof resolver != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache)();
      return memoized;
    }
    memoize.Cache = MapCache;
    module.exports = memoize;
  }
});
var require_memoizeCapped = __commonJS({
  "node_modules/lodash/_memoizeCapped.js"(exports, module) {
    init_preact_shim();
    var memoize = require_memoize();
    var MAX_MEMOIZE_SIZE = 500;
    function memoizeCapped(func) {
      var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });
      var cache = result.cache;
      return result;
    }
    module.exports = memoizeCapped;
  }
});
var require_stringToPath = __commonJS({
  "node_modules/lodash/_stringToPath.js"(exports, module) {
    init_preact_shim();
    var memoizeCapped = require_memoizeCapped();
    var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = memoizeCapped(function(string) {
      var result = [];
      if (string.charCodeAt(0) === 46) {
        result.push("");
      }
      string.replace(rePropName, function(match8, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match8);
      });
      return result;
    });
    module.exports = stringToPath;
  }
});
var require_arrayMap = __commonJS({
  "node_modules/lodash/_arrayMap.js"(exports, module) {
    init_preact_shim();
    function arrayMap(array, iteratee) {
      var index = -1, length = array == null ? 0 : array.length, result = Array(length);
      while (++index < length) {
        result[index] = iteratee(array[index], index, array);
      }
      return result;
    }
    module.exports = arrayMap;
  }
});
var require_baseToString = __commonJS({
  "node_modules/lodash/_baseToString.js"(exports, module) {
    init_preact_shim();
    var Symbol2 = require_Symbol();
    var arrayMap = require_arrayMap();
    var isArray = require_isArray();
    var isSymbol = require_isSymbol();
    var INFINITY = 1 / 0;
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolToString = symbolProto ? symbolProto.toString : void 0;
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
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    module.exports = baseToString;
  }
});
var require_toString = __commonJS({
  "node_modules/lodash/toString.js"(exports, module) {
    init_preact_shim();
    var baseToString = require_baseToString();
    function toString(value) {
      return value == null ? "" : baseToString(value);
    }
    module.exports = toString;
  }
});
var require_castPath = __commonJS({
  "node_modules/lodash/_castPath.js"(exports, module) {
    init_preact_shim();
    var isArray = require_isArray();
    var isKey = require_isKey();
    var stringToPath = require_stringToPath();
    var toString = require_toString();
    function castPath(value, object) {
      if (isArray(value)) {
        return value;
      }
      return isKey(value, object) ? [value] : stringToPath(toString(value));
    }
    module.exports = castPath;
  }
});
var require_toKey = __commonJS({
  "node_modules/lodash/_toKey.js"(exports, module) {
    init_preact_shim();
    var isSymbol = require_isSymbol();
    var INFINITY = 1 / 0;
    function toKey(value) {
      if (typeof value == "string" || isSymbol(value)) {
        return value;
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    module.exports = toKey;
  }
});
var require_baseGet = __commonJS({
  "node_modules/lodash/_baseGet.js"(exports, module) {
    init_preact_shim();
    var castPath = require_castPath();
    var toKey = require_toKey();
    function baseGet(object, path) {
      path = castPath(path, object);
      var index = 0, length = path.length;
      while (object != null && index < length) {
        object = object[toKey(path[index++])];
      }
      return index && index == length ? object : void 0;
    }
    module.exports = baseGet;
  }
});
var require_get = __commonJS({
  "node_modules/lodash/get.js"(exports, module) {
    init_preact_shim();
    var baseGet = require_baseGet();
    function get2(object, path, defaultValue) {
      var result = object == null ? void 0 : baseGet(object, path);
      return result === void 0 ? defaultValue : result;
    }
    module.exports = get2;
  }
});
var require_defineProperty = __commonJS({
  "node_modules/lodash/_defineProperty.js"(exports, module) {
    init_preact_shim();
    var getNative = require_getNative();
    var defineProperty = function() {
      try {
        var func = getNative(Object, "defineProperty");
        func({}, "", {});
        return func;
      } catch (e22) {
      }
    }();
    module.exports = defineProperty;
  }
});
var require_baseAssignValue = __commonJS({
  "node_modules/lodash/_baseAssignValue.js"(exports, module) {
    init_preact_shim();
    var defineProperty = require_defineProperty();
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
    module.exports = baseAssignValue;
  }
});
var require_assignValue = __commonJS({
  "node_modules/lodash/_assignValue.js"(exports, module) {
    init_preact_shim();
    var baseAssignValue = require_baseAssignValue();
    var eq = require_eq();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
        baseAssignValue(object, key, value);
      }
    }
    module.exports = assignValue;
  }
});
var require_isIndex = __commonJS({
  "node_modules/lodash/_isIndex.js"(exports, module) {
    init_preact_shim();
    var MAX_SAFE_INTEGER = 9007199254740991;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    module.exports = isIndex;
  }
});
var require_baseSet = __commonJS({
  "node_modules/lodash/_baseSet.js"(exports, module) {
    init_preact_shim();
    var assignValue = require_assignValue();
    var castPath = require_castPath();
    var isIndex = require_isIndex();
    var isObject2 = require_isObject();
    var toKey = require_toKey();
    function baseSet(object, path, value, customizer) {
      if (!isObject2(object)) {
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
          newValue = customizer ? customizer(objValue, key, nested) : void 0;
          if (newValue === void 0) {
            newValue = isObject2(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
          }
        }
        assignValue(nested, key, newValue);
        nested = nested[key];
      }
      return object;
    }
    module.exports = baseSet;
  }
});
var require_set = __commonJS({
  "node_modules/lodash/set.js"(exports, module) {
    init_preact_shim();
    var baseSet = require_baseSet();
    function set2(object, path, value) {
      return object == null ? object : baseSet(object, path, value);
    }
    module.exports = set2;
  }
});
var require_to_no_case = __commonJS({
  "node_modules/to-no-case/index.js"(exports, module) {
    init_preact_shim();
    module.exports = toNoCase;
    var hasSpace = /\s/;
    var hasSeparator = /(_|-|\.|:)/;
    var hasCamel = /([a-z][A-Z]|[A-Z][a-z])/;
    function toNoCase(string) {
      if (hasSpace.test(string))
        return string.toLowerCase();
      if (hasSeparator.test(string))
        return (unseparate(string) || string).toLowerCase();
      if (hasCamel.test(string))
        return uncamelize(string).toLowerCase();
      return string.toLowerCase();
    }
    var separatorSplitter = /[\W_]+(.|$)/g;
    function unseparate(string) {
      return string.replace(separatorSplitter, function(m22, next) {
        return next ? " " + next : "";
      });
    }
    var camelSplitter = /(.)([A-Z]+)/g;
    function uncamelize(string) {
      return string.replace(camelSplitter, function(m22, previous, uppers) {
        return previous + " " + uppers.toLowerCase().split("").join(" ");
      });
    }
  }
});
var require_setCacheAdd = __commonJS({
  "node_modules/lodash/_setCacheAdd.js"(exports, module) {
    init_preact_shim();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }
    module.exports = setCacheAdd;
  }
});
var require_setCacheHas = __commonJS({
  "node_modules/lodash/_setCacheHas.js"(exports, module) {
    init_preact_shim();
    function setCacheHas(value) {
      return this.__data__.has(value);
    }
    module.exports = setCacheHas;
  }
});
var require_SetCache = __commonJS({
  "node_modules/lodash/_SetCache.js"(exports, module) {
    init_preact_shim();
    var MapCache = require_MapCache();
    var setCacheAdd = require_setCacheAdd();
    var setCacheHas = require_setCacheHas();
    function SetCache(values) {
      var index = -1, length = values == null ? 0 : values.length;
      this.__data__ = new MapCache();
      while (++index < length) {
        this.add(values[index]);
      }
    }
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;
    module.exports = SetCache;
  }
});
var require_baseFindIndex = __commonJS({
  "node_modules/lodash/_baseFindIndex.js"(exports, module) {
    init_preact_shim();
    function baseFindIndex(array, predicate, fromIndex, fromRight) {
      var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
      while (fromRight ? index-- : ++index < length) {
        if (predicate(array[index], index, array)) {
          return index;
        }
      }
      return -1;
    }
    module.exports = baseFindIndex;
  }
});
var require_baseIsNaN = __commonJS({
  "node_modules/lodash/_baseIsNaN.js"(exports, module) {
    init_preact_shim();
    function baseIsNaN(value) {
      return value !== value;
    }
    module.exports = baseIsNaN;
  }
});
var require_strictIndexOf = __commonJS({
  "node_modules/lodash/_strictIndexOf.js"(exports, module) {
    init_preact_shim();
    function strictIndexOf(array, value, fromIndex) {
      var index = fromIndex - 1, length = array.length;
      while (++index < length) {
        if (array[index] === value) {
          return index;
        }
      }
      return -1;
    }
    module.exports = strictIndexOf;
  }
});
var require_baseIndexOf = __commonJS({
  "node_modules/lodash/_baseIndexOf.js"(exports, module) {
    init_preact_shim();
    var baseFindIndex = require_baseFindIndex();
    var baseIsNaN = require_baseIsNaN();
    var strictIndexOf = require_strictIndexOf();
    function baseIndexOf(array, value, fromIndex) {
      return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
    }
    module.exports = baseIndexOf;
  }
});
var require_arrayIncludes = __commonJS({
  "node_modules/lodash/_arrayIncludes.js"(exports, module) {
    init_preact_shim();
    var baseIndexOf = require_baseIndexOf();
    function arrayIncludes(array, value) {
      var length = array == null ? 0 : array.length;
      return !!length && baseIndexOf(array, value, 0) > -1;
    }
    module.exports = arrayIncludes;
  }
});
var require_arrayIncludesWith = __commonJS({
  "node_modules/lodash/_arrayIncludesWith.js"(exports, module) {
    init_preact_shim();
    function arrayIncludesWith(array, value, comparator) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (comparator(value, array[index])) {
          return true;
        }
      }
      return false;
    }
    module.exports = arrayIncludesWith;
  }
});
var require_cacheHas = __commonJS({
  "node_modules/lodash/_cacheHas.js"(exports, module) {
    init_preact_shim();
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    module.exports = cacheHas;
  }
});
var require_Set = __commonJS({
  "node_modules/lodash/_Set.js"(exports, module) {
    init_preact_shim();
    var getNative = require_getNative();
    var root = require_root();
    var Set2 = getNative(root, "Set");
    module.exports = Set2;
  }
});
var require_noop = __commonJS({
  "node_modules/lodash/noop.js"(exports, module) {
    init_preact_shim();
    function noop() {
    }
    module.exports = noop;
  }
});
var require_setToArray = __commonJS({
  "node_modules/lodash/_setToArray.js"(exports, module) {
    init_preact_shim();
    function setToArray(set2) {
      var index = -1, result = Array(set2.size);
      set2.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    module.exports = setToArray;
  }
});
var require_createSet = __commonJS({
  "node_modules/lodash/_createSet.js"(exports, module) {
    init_preact_shim();
    var Set2 = require_Set();
    var noop = require_noop();
    var setToArray = require_setToArray();
    var INFINITY = 1 / 0;
    var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY) ? noop : function(values) {
      return new Set2(values);
    };
    module.exports = createSet;
  }
});
var require_baseUniq = __commonJS({
  "node_modules/lodash/_baseUniq.js"(exports, module) {
    init_preact_shim();
    var SetCache = require_SetCache();
    var arrayIncludes = require_arrayIncludes();
    var arrayIncludesWith = require_arrayIncludesWith();
    var cacheHas = require_cacheHas();
    var createSet = require_createSet();
    var setToArray = require_setToArray();
    var LARGE_ARRAY_SIZE = 200;
    function baseUniq(array, iteratee, comparator) {
      var index = -1, includes = arrayIncludes, length = array.length, isCommon = true, result = [], seen = result;
      if (comparator) {
        isCommon = false;
        includes = arrayIncludesWith;
      } else if (length >= LARGE_ARRAY_SIZE) {
        var set2 = iteratee ? null : createSet(array);
        if (set2) {
          return setToArray(set2);
        }
        isCommon = false;
        includes = cacheHas;
        seen = new SetCache();
      } else {
        seen = iteratee ? [] : result;
      }
      outer:
        while (++index < length) {
          var value = array[index], computed = iteratee ? iteratee(value) : value;
          value = comparator || value !== 0 ? value : 0;
          if (isCommon && computed === computed) {
            var seenIndex = seen.length;
            while (seenIndex--) {
              if (seen[seenIndex] === computed) {
                continue outer;
              }
            }
            if (iteratee) {
              seen.push(computed);
            }
            result.push(value);
          } else if (!includes(seen, computed, comparator)) {
            if (seen !== result) {
              seen.push(computed);
            }
            result.push(value);
          }
        }
      return result;
    }
    module.exports = baseUniq;
  }
});
var require_uniq = __commonJS({
  "node_modules/lodash/uniq.js"(exports, module) {
    init_preact_shim();
    var baseUniq = require_baseUniq();
    function uniq2(array) {
      return array && array.length ? baseUniq(array) : [];
    }
    module.exports = uniq2;
  }
});
var require_stackClear = __commonJS({
  "node_modules/lodash/_stackClear.js"(exports, module) {
    init_preact_shim();
    var ListCache = require_ListCache();
    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }
    module.exports = stackClear;
  }
});
var require_stackDelete = __commonJS({
  "node_modules/lodash/_stackDelete.js"(exports, module) {
    init_preact_shim();
    function stackDelete(key) {
      var data = this.__data__, result = data["delete"](key);
      this.size = data.size;
      return result;
    }
    module.exports = stackDelete;
  }
});
var require_stackGet = __commonJS({
  "node_modules/lodash/_stackGet.js"(exports, module) {
    init_preact_shim();
    function stackGet(key) {
      return this.__data__.get(key);
    }
    module.exports = stackGet;
  }
});
var require_stackHas = __commonJS({
  "node_modules/lodash/_stackHas.js"(exports, module) {
    init_preact_shim();
    function stackHas(key) {
      return this.__data__.has(key);
    }
    module.exports = stackHas;
  }
});
var require_stackSet = __commonJS({
  "node_modules/lodash/_stackSet.js"(exports, module) {
    init_preact_shim();
    var ListCache = require_ListCache();
    var Map2 = require_Map();
    var MapCache = require_MapCache();
    var LARGE_ARRAY_SIZE = 200;
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
    module.exports = stackSet;
  }
});
var require_Stack = __commonJS({
  "node_modules/lodash/_Stack.js"(exports, module) {
    init_preact_shim();
    var ListCache = require_ListCache();
    var stackClear = require_stackClear();
    var stackDelete = require_stackDelete();
    var stackGet = require_stackGet();
    var stackHas = require_stackHas();
    var stackSet = require_stackSet();
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    module.exports = Stack;
  }
});
var require_arrayEach = __commonJS({
  "node_modules/lodash/_arrayEach.js"(exports, module) {
    init_preact_shim();
    function arrayEach(array, iteratee) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
          break;
        }
      }
      return array;
    }
    module.exports = arrayEach;
  }
});
var require_copyObject = __commonJS({
  "node_modules/lodash/_copyObject.js"(exports, module) {
    init_preact_shim();
    var assignValue = require_assignValue();
    var baseAssignValue = require_baseAssignValue();
    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});
      var index = -1, length = props.length;
      while (++index < length) {
        var key = props[index];
        var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
        if (newValue === void 0) {
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
    module.exports = copyObject;
  }
});
var require_baseTimes = __commonJS({
  "node_modules/lodash/_baseTimes.js"(exports, module) {
    init_preact_shim();
    function baseTimes(n22, iteratee) {
      var index = -1, result = Array(n22);
      while (++index < n22) {
        result[index] = iteratee(index);
      }
      return result;
    }
    module.exports = baseTimes;
  }
});
var require_baseIsArguments = __commonJS({
  "node_modules/lodash/_baseIsArguments.js"(exports, module) {
    init_preact_shim();
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }
    module.exports = baseIsArguments;
  }
});
var require_isArguments = __commonJS({
  "node_modules/lodash/isArguments.js"(exports, module) {
    init_preact_shim();
    var baseIsArguments = require_baseIsArguments();
    var isObjectLike = require_isObjectLike();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var isArguments = baseIsArguments(function() {
      return arguments;
    }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    module.exports = isArguments;
  }
});
var require_stubFalse = __commonJS({
  "node_modules/lodash/stubFalse.js"(exports, module) {
    init_preact_shim();
    function stubFalse() {
      return false;
    }
    module.exports = stubFalse;
  }
});
var require_isBuffer = __commonJS({
  "node_modules/lodash/isBuffer.js"(exports, module) {
    init_preact_shim();
    var root = require_root();
    var stubFalse = require_stubFalse();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer2 = moduleExports ? root.Buffer : void 0;
    var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
    var isBuffer = nativeIsBuffer || stubFalse;
    module.exports = isBuffer;
  }
});
var require_isLength = __commonJS({
  "node_modules/lodash/isLength.js"(exports, module) {
    init_preact_shim();
    var MAX_SAFE_INTEGER = 9007199254740991;
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    module.exports = isLength;
  }
});
var require_baseIsTypedArray = __commonJS({
  "node_modules/lodash/_baseIsTypedArray.js"(exports, module) {
    init_preact_shim();
    var baseGetTag = require_baseGetTag();
    var isLength = require_isLength();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    module.exports = baseIsTypedArray;
  }
});
var require_baseUnary = __commonJS({
  "node_modules/lodash/_baseUnary.js"(exports, module) {
    init_preact_shim();
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    module.exports = baseUnary;
  }
});
var require_nodeUtil = __commonJS({
  "node_modules/lodash/_nodeUtil.js"(exports, module) {
    init_preact_shim();
    var freeGlobal = require_freeGlobal();
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
      } catch (e22) {
      }
    }();
    module.exports = nodeUtil;
  }
});
var require_isTypedArray = __commonJS({
  "node_modules/lodash/isTypedArray.js"(exports, module) {
    init_preact_shim();
    var baseIsTypedArray = require_baseIsTypedArray();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    module.exports = isTypedArray;
  }
});
var require_arrayLikeKeys = __commonJS({
  "node_modules/lodash/_arrayLikeKeys.js"(exports, module) {
    init_preact_shim();
    var baseTimes = require_baseTimes();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isIndex = require_isIndex();
    var isTypedArray = require_isTypedArray();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = arrayLikeKeys;
  }
});
var require_isPrototype = __commonJS({
  "node_modules/lodash/_isPrototype.js"(exports, module) {
    init_preact_shim();
    var objectProto = Object.prototype;
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    module.exports = isPrototype;
  }
});
var require_overArg = __commonJS({
  "node_modules/lodash/_overArg.js"(exports, module) {
    init_preact_shim();
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    module.exports = overArg;
  }
});
var require_nativeKeys = __commonJS({
  "node_modules/lodash/_nativeKeys.js"(exports, module) {
    init_preact_shim();
    var overArg = require_overArg();
    var nativeKeys = overArg(Object.keys, Object);
    module.exports = nativeKeys;
  }
});
var require_baseKeys = __commonJS({
  "node_modules/lodash/_baseKeys.js"(exports, module) {
    init_preact_shim();
    var isPrototype = require_isPrototype();
    var nativeKeys = require_nativeKeys();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = baseKeys;
  }
});
var require_isArrayLike = __commonJS({
  "node_modules/lodash/isArrayLike.js"(exports, module) {
    init_preact_shim();
    var isFunction = require_isFunction();
    var isLength = require_isLength();
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    module.exports = isArrayLike;
  }
});
var require_keys = __commonJS({
  "node_modules/lodash/keys.js"(exports, module) {
    init_preact_shim();
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeys = require_baseKeys();
    var isArrayLike = require_isArrayLike();
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    module.exports = keys;
  }
});
var require_baseAssign = __commonJS({
  "node_modules/lodash/_baseAssign.js"(exports, module) {
    init_preact_shim();
    var copyObject = require_copyObject();
    var keys = require_keys();
    function baseAssign(object, source) {
      return object && copyObject(source, keys(source), object);
    }
    module.exports = baseAssign;
  }
});
var require_nativeKeysIn = __commonJS({
  "node_modules/lodash/_nativeKeysIn.js"(exports, module) {
    init_preact_shim();
    function nativeKeysIn(object) {
      var result = [];
      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = nativeKeysIn;
  }
});
var require_baseKeysIn = __commonJS({
  "node_modules/lodash/_baseKeysIn.js"(exports, module) {
    init_preact_shim();
    var isObject2 = require_isObject();
    var isPrototype = require_isPrototype();
    var nativeKeysIn = require_nativeKeysIn();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseKeysIn(object) {
      if (!isObject2(object)) {
        return nativeKeysIn(object);
      }
      var isProto = isPrototype(object), result = [];
      for (var key in object) {
        if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = baseKeysIn;
  }
});
var require_keysIn = __commonJS({
  "node_modules/lodash/keysIn.js"(exports, module) {
    init_preact_shim();
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeysIn = require_baseKeysIn();
    var isArrayLike = require_isArrayLike();
    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }
    module.exports = keysIn;
  }
});
var require_baseAssignIn = __commonJS({
  "node_modules/lodash/_baseAssignIn.js"(exports, module) {
    init_preact_shim();
    var copyObject = require_copyObject();
    var keysIn = require_keysIn();
    function baseAssignIn(object, source) {
      return object && copyObject(source, keysIn(source), object);
    }
    module.exports = baseAssignIn;
  }
});
var require_cloneBuffer = __commonJS({
  "node_modules/lodash/_cloneBuffer.js"(exports, module) {
    init_preact_shim();
    var root = require_root();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer2 = moduleExports ? root.Buffer : void 0;
    var allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
      buffer.copy(result);
      return result;
    }
    module.exports = cloneBuffer;
  }
});
var require_copyArray = __commonJS({
  "node_modules/lodash/_copyArray.js"(exports, module) {
    init_preact_shim();
    function copyArray(source, array) {
      var index = -1, length = source.length;
      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }
    module.exports = copyArray;
  }
});
var require_arrayFilter = __commonJS({
  "node_modules/lodash/_arrayFilter.js"(exports, module) {
    init_preact_shim();
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
    module.exports = arrayFilter;
  }
});
var require_stubArray = __commonJS({
  "node_modules/lodash/stubArray.js"(exports, module) {
    init_preact_shim();
    function stubArray() {
      return [];
    }
    module.exports = stubArray;
  }
});
var require_getSymbols = __commonJS({
  "node_modules/lodash/_getSymbols.js"(exports, module) {
    init_preact_shim();
    var arrayFilter = require_arrayFilter();
    var stubArray = require_stubArray();
    var objectProto = Object.prototype;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };
    module.exports = getSymbols;
  }
});
var require_copySymbols = __commonJS({
  "node_modules/lodash/_copySymbols.js"(exports, module) {
    init_preact_shim();
    var copyObject = require_copyObject();
    var getSymbols = require_getSymbols();
    function copySymbols(source, object) {
      return copyObject(source, getSymbols(source), object);
    }
    module.exports = copySymbols;
  }
});
var require_arrayPush = __commonJS({
  "node_modules/lodash/_arrayPush.js"(exports, module) {
    init_preact_shim();
    function arrayPush(array, values) {
      var index = -1, length = values.length, offset = array.length;
      while (++index < length) {
        array[offset + index] = values[index];
      }
      return array;
    }
    module.exports = arrayPush;
  }
});
var require_getPrototype = __commonJS({
  "node_modules/lodash/_getPrototype.js"(exports, module) {
    init_preact_shim();
    var overArg = require_overArg();
    var getPrototype = overArg(Object.getPrototypeOf, Object);
    module.exports = getPrototype;
  }
});
var require_getSymbolsIn = __commonJS({
  "node_modules/lodash/_getSymbolsIn.js"(exports, module) {
    init_preact_shim();
    var arrayPush = require_arrayPush();
    var getPrototype = require_getPrototype();
    var getSymbols = require_getSymbols();
    var stubArray = require_stubArray();
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
      var result = [];
      while (object) {
        arrayPush(result, getSymbols(object));
        object = getPrototype(object);
      }
      return result;
    };
    module.exports = getSymbolsIn;
  }
});
var require_copySymbolsIn = __commonJS({
  "node_modules/lodash/_copySymbolsIn.js"(exports, module) {
    init_preact_shim();
    var copyObject = require_copyObject();
    var getSymbolsIn = require_getSymbolsIn();
    function copySymbolsIn(source, object) {
      return copyObject(source, getSymbolsIn(source), object);
    }
    module.exports = copySymbolsIn;
  }
});
var require_baseGetAllKeys = __commonJS({
  "node_modules/lodash/_baseGetAllKeys.js"(exports, module) {
    init_preact_shim();
    var arrayPush = require_arrayPush();
    var isArray = require_isArray();
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }
    module.exports = baseGetAllKeys;
  }
});
var require_getAllKeys = __commonJS({
  "node_modules/lodash/_getAllKeys.js"(exports, module) {
    init_preact_shim();
    var baseGetAllKeys = require_baseGetAllKeys();
    var getSymbols = require_getSymbols();
    var keys = require_keys();
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }
    module.exports = getAllKeys;
  }
});
var require_getAllKeysIn = __commonJS({
  "node_modules/lodash/_getAllKeysIn.js"(exports, module) {
    init_preact_shim();
    var baseGetAllKeys = require_baseGetAllKeys();
    var getSymbolsIn = require_getSymbolsIn();
    var keysIn = require_keysIn();
    function getAllKeysIn(object) {
      return baseGetAllKeys(object, keysIn, getSymbolsIn);
    }
    module.exports = getAllKeysIn;
  }
});
var require_DataView = __commonJS({
  "node_modules/lodash/_DataView.js"(exports, module) {
    init_preact_shim();
    var getNative = require_getNative();
    var root = require_root();
    var DataView = getNative(root, "DataView");
    module.exports = DataView;
  }
});
var require_Promise = __commonJS({
  "node_modules/lodash/_Promise.js"(exports, module) {
    init_preact_shim();
    var getNative = require_getNative();
    var root = require_root();
    var Promise2 = getNative(root, "Promise");
    module.exports = Promise2;
  }
});
var require_WeakMap = __commonJS({
  "node_modules/lodash/_WeakMap.js"(exports, module) {
    init_preact_shim();
    var getNative = require_getNative();
    var root = require_root();
    var WeakMap = getNative(root, "WeakMap");
    module.exports = WeakMap;
  }
});
var require_getTag = __commonJS({
  "node_modules/lodash/_getTag.js"(exports, module) {
    init_preact_shim();
    var DataView = require_DataView();
    var Map2 = require_Map();
    var Promise2 = require_Promise();
    var Set2 = require_Set();
    var WeakMap = require_WeakMap();
    var baseGetTag = require_baseGetTag();
    var toSource = require_toSource();
    var mapTag = "[object Map]";
    var objectTag = "[object Object]";
    var promiseTag = "[object Promise]";
    var setTag = "[object Set]";
    var weakMapTag = "[object WeakMap]";
    var dataViewTag = "[object DataView]";
    var dataViewCtorString = toSource(DataView);
    var mapCtorString = toSource(Map2);
    var promiseCtorString = toSource(Promise2);
    var setCtorString = toSource(Set2);
    var weakMapCtorString = toSource(WeakMap);
    var getTag = baseGetTag;
    if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
      getTag = function(value) {
        var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
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
        return result;
      };
    }
    module.exports = getTag;
  }
});
var require_initCloneArray = __commonJS({
  "node_modules/lodash/_initCloneArray.js"(exports, module) {
    init_preact_shim();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function initCloneArray(array) {
      var length = array.length, result = new array.constructor(length);
      if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }
    module.exports = initCloneArray;
  }
});
var require_Uint8Array = __commonJS({
  "node_modules/lodash/_Uint8Array.js"(exports, module) {
    init_preact_shim();
    var root = require_root();
    var Uint8Array2 = root.Uint8Array;
    module.exports = Uint8Array2;
  }
});
var require_cloneArrayBuffer = __commonJS({
  "node_modules/lodash/_cloneArrayBuffer.js"(exports, module) {
    init_preact_shim();
    var Uint8Array2 = require_Uint8Array();
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array2(result).set(new Uint8Array2(arrayBuffer));
      return result;
    }
    module.exports = cloneArrayBuffer;
  }
});
var require_cloneDataView = __commonJS({
  "node_modules/lodash/_cloneDataView.js"(exports, module) {
    init_preact_shim();
    var cloneArrayBuffer = require_cloneArrayBuffer();
    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }
    module.exports = cloneDataView;
  }
});
var require_cloneRegExp = __commonJS({
  "node_modules/lodash/_cloneRegExp.js"(exports, module) {
    init_preact_shim();
    var reFlags = /\w*$/;
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }
    module.exports = cloneRegExp;
  }
});
var require_cloneSymbol = __commonJS({
  "node_modules/lodash/_cloneSymbol.js"(exports, module) {
    init_preact_shim();
    var Symbol2 = require_Symbol();
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }
    module.exports = cloneSymbol;
  }
});
var require_cloneTypedArray = __commonJS({
  "node_modules/lodash/_cloneTypedArray.js"(exports, module) {
    init_preact_shim();
    var cloneArrayBuffer = require_cloneArrayBuffer();
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }
    module.exports = cloneTypedArray;
  }
});
var require_initCloneByTag = __commonJS({
  "node_modules/lodash/_initCloneByTag.js"(exports, module) {
    init_preact_shim();
    var cloneArrayBuffer = require_cloneArrayBuffer();
    var cloneDataView = require_cloneDataView();
    var cloneRegExp = require_cloneRegExp();
    var cloneSymbol = require_cloneSymbol();
    var cloneTypedArray = require_cloneTypedArray();
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
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
    module.exports = initCloneByTag;
  }
});
var require_baseCreate = __commonJS({
  "node_modules/lodash/_baseCreate.js"(exports, module) {
    init_preact_shim();
    var isObject2 = require_isObject();
    var objectCreate = Object.create;
    var baseCreate = function() {
      function object() {
      }
      return function(proto) {
        if (!isObject2(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object();
        object.prototype = void 0;
        return result;
      };
    }();
    module.exports = baseCreate;
  }
});
var require_initCloneObject = __commonJS({
  "node_modules/lodash/_initCloneObject.js"(exports, module) {
    init_preact_shim();
    var baseCreate = require_baseCreate();
    var getPrototype = require_getPrototype();
    var isPrototype = require_isPrototype();
    function initCloneObject(object) {
      return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
    }
    module.exports = initCloneObject;
  }
});
var require_baseIsMap = __commonJS({
  "node_modules/lodash/_baseIsMap.js"(exports, module) {
    init_preact_shim();
    var getTag = require_getTag();
    var isObjectLike = require_isObjectLike();
    var mapTag = "[object Map]";
    function baseIsMap(value) {
      return isObjectLike(value) && getTag(value) == mapTag;
    }
    module.exports = baseIsMap;
  }
});
var require_isMap = __commonJS({
  "node_modules/lodash/isMap.js"(exports, module) {
    init_preact_shim();
    var baseIsMap = require_baseIsMap();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsMap = nodeUtil && nodeUtil.isMap;
    var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
    module.exports = isMap;
  }
});
var require_baseIsSet = __commonJS({
  "node_modules/lodash/_baseIsSet.js"(exports, module) {
    init_preact_shim();
    var getTag = require_getTag();
    var isObjectLike = require_isObjectLike();
    var setTag = "[object Set]";
    function baseIsSet(value) {
      return isObjectLike(value) && getTag(value) == setTag;
    }
    module.exports = baseIsSet;
  }
});
var require_isSet = __commonJS({
  "node_modules/lodash/isSet.js"(exports, module) {
    init_preact_shim();
    var baseIsSet = require_baseIsSet();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsSet = nodeUtil && nodeUtil.isSet;
    var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
    module.exports = isSet;
  }
});
var require_baseClone = __commonJS({
  "node_modules/lodash/_baseClone.js"(exports, module) {
    init_preact_shim();
    var Stack = require_Stack();
    var arrayEach = require_arrayEach();
    var assignValue = require_assignValue();
    var baseAssign = require_baseAssign();
    var baseAssignIn = require_baseAssignIn();
    var cloneBuffer = require_cloneBuffer();
    var copyArray = require_copyArray();
    var copySymbols = require_copySymbols();
    var copySymbolsIn = require_copySymbolsIn();
    var getAllKeys = require_getAllKeys();
    var getAllKeysIn = require_getAllKeysIn();
    var getTag = require_getTag();
    var initCloneArray = require_initCloneArray();
    var initCloneByTag = require_initCloneByTag();
    var initCloneObject = require_initCloneObject();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isMap = require_isMap();
    var isObject2 = require_isObject();
    var isSet = require_isSet();
    var keys = require_keys();
    var keysIn = require_keysIn();
    var CLONE_DEEP_FLAG = 1;
    var CLONE_FLAT_FLAG = 2;
    var CLONE_SYMBOLS_FLAG = 4;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
    cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
    function baseClone(value, bitmask, customizer, key, object, stack) {
      var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }
      if (result !== void 0) {
        return result;
      }
      if (!isObject2(value)) {
        return value;
      }
      var isArr = isArray(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || isFunc && !object) {
          result = isFlat || isFunc ? {} : initCloneObject(value);
          if (!isDeep) {
            return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }
          result = initCloneByTag(value, tag, isDeep);
        }
      }
      stack || (stack = new Stack());
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);
      if (isSet(value)) {
        value.forEach(function(subValue) {
          result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
        });
      } else if (isMap(value)) {
        value.forEach(function(subValue, key2) {
          result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
        });
      }
      var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
      var props = isArr ? void 0 : keysFunc(value);
      arrayEach(props || value, function(subValue, key2) {
        if (props) {
          key2 = subValue;
          subValue = value[key2];
        }
        assignValue(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
      });
      return result;
    }
    module.exports = baseClone;
  }
});
var require_cloneDeep = __commonJS({
  "node_modules/lodash/cloneDeep.js"(exports, module) {
    init_preact_shim();
    var baseClone = require_baseClone();
    var CLONE_DEEP_FLAG = 1;
    var CLONE_SYMBOLS_FLAG = 4;
    function cloneDeep2(value) {
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
    }
    module.exports = cloneDeep2;
  }
});
var require_arraySome = __commonJS({
  "node_modules/lodash/_arraySome.js"(exports, module) {
    init_preact_shim();
    function arraySome(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (predicate(array[index], index, array)) {
          return true;
        }
      }
      return false;
    }
    module.exports = arraySome;
  }
});
var require_equalArrays = __commonJS({
  "node_modules/lodash/_equalArrays.js"(exports, module) {
    init_preact_shim();
    var SetCache = require_SetCache();
    var arraySome = require_arraySome();
    var cacheHas = require_cacheHas();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
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
      var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
      stack.set(array, other);
      stack.set(other, array);
      while (++index < arrLength) {
        var arrValue = array[index], othValue = other[index];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== void 0) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        if (seen) {
          if (!arraySome(other, function(othValue2, othIndex) {
            if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
            result = false;
            break;
          }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          result = false;
          break;
        }
      }
      stack["delete"](array);
      stack["delete"](other);
      return result;
    }
    module.exports = equalArrays;
  }
});
var require_mapToArray = __commonJS({
  "node_modules/lodash/_mapToArray.js"(exports, module) {
    init_preact_shim();
    function mapToArray(map) {
      var index = -1, result = Array(map.size);
      map.forEach(function(value, key) {
        result[++index] = [key, value];
      });
      return result;
    }
    module.exports = mapToArray;
  }
});
var require_equalByTag = __commonJS({
  "node_modules/lodash/_equalByTag.js"(exports, module) {
    init_preact_shim();
    var Symbol2 = require_Symbol();
    var Uint8Array2 = require_Uint8Array();
    var eq = require_eq();
    var equalArrays = require_equalArrays();
    var mapToArray = require_mapToArray();
    var setToArray = require_setToArray();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
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
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack["delete"](object);
          return result;
        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }
    module.exports = equalByTag;
  }
});
var require_equalObjects = __commonJS({
  "node_modules/lodash/_equalObjects.js"(exports, module) {
    init_preact_shim();
    var getAllKeys = require_getAllKeys();
    var COMPARE_PARTIAL_FLAG = 1;
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
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
      var result = true;
      stack.set(object, other);
      stack.set(other, object);
      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key], othValue = other[key];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        }
        if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == "constructor");
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack["delete"](object);
      stack["delete"](other);
      return result;
    }
    module.exports = equalObjects;
  }
});
var require_baseIsEqualDeep = __commonJS({
  "node_modules/lodash/_baseIsEqualDeep.js"(exports, module) {
    init_preact_shim();
    var Stack = require_Stack();
    var equalArrays = require_equalArrays();
    var equalByTag = require_equalByTag();
    var equalObjects = require_equalObjects();
    var getTag = require_getTag();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isTypedArray = require_isTypedArray();
    var COMPARE_PARTIAL_FLAG = 1;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var objectTag = "[object Object]";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
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
    module.exports = baseIsEqualDeep;
  }
});
var require_baseIsEqual = __commonJS({
  "node_modules/lodash/_baseIsEqual.js"(exports, module) {
    init_preact_shim();
    var baseIsEqualDeep = require_baseIsEqualDeep();
    var isObjectLike = require_isObjectLike();
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }
    module.exports = baseIsEqual;
  }
});
var require_isEqual = __commonJS({
  "node_modules/lodash/isEqual.js"(exports, module) {
    init_preact_shim();
    var baseIsEqual = require_baseIsEqual();
    function isEqual2(value, other) {
      return baseIsEqual(value, other);
    }
    module.exports = isEqual2;
  }
});
var require_symbols = __commonJS({
  "node_modules/ts-pattern/lib/symbols.js"(exports) {
    "use strict";
    init_preact_shim();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AnonymousSelectKey = exports.Select = exports.Not = exports.Guard = exports.PatternKind = void 0;
    exports.PatternKind = Symbol("@ts-pattern/pattern-kind");
    exports.Guard = Symbol("@ts-pattern/guard");
    exports.Not = Symbol("@ts-pattern/not");
    exports.Select = Symbol("@ts-pattern/select");
    exports.AnonymousSelectKey = "@ts-pattern/__anonymous-select-key";
  }
});
var require_guards = __commonJS({
  "node_modules/ts-pattern/lib/guards.js"(exports) {
    "use strict";
    init_preact_shim();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.instanceOf = exports.select = exports.not = exports.when = void 0;
    var symbols = require_symbols();
    var when = (predicate) => ({
      [symbols.PatternKind]: symbols.Guard,
      [symbols.Guard]: predicate
    });
    exports.when = when;
    var not2 = (pattern) => ({
      [symbols.PatternKind]: symbols.Not,
      [symbols.Not]: pattern
    });
    exports.not = not2;
    function select8(key) {
      return key === void 0 ? {
        [symbols.PatternKind]: symbols.Select,
        [symbols.Select]: symbols.AnonymousSelectKey
      } : {
        [symbols.PatternKind]: symbols.Select,
        [symbols.Select]: key
      };
    }
    exports.select = select8;
    function isInstanceOf(classConstructor) {
      return (val) => val instanceof classConstructor;
    }
    var instanceOf = (classConstructor) => (0, exports.when)(isInstanceOf(classConstructor));
    exports.instanceOf = instanceOf;
  }
});
var require_wildcards = __commonJS({
  "node_modules/ts-pattern/lib/wildcards.js"(exports) {
    "use strict";
    init_preact_shim();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.__ = void 0;
    var guards_1 = require_guards();
    function isUnknown(x22) {
      return true;
    }
    function isNumber(x22) {
      return typeof x22 === "number";
    }
    function numberIsNaN(x22) {
      return Number.isNaN(x22);
    }
    function isString(x22) {
      return typeof x22 === "string";
    }
    function isBoolean(x22) {
      return typeof x22 === "boolean";
    }
    function isNullish(x22) {
      return x22 === null || x22 === void 0;
    }
    var unknownGuard = (0, guards_1.when)(isUnknown);
    var stringGuard = (0, guards_1.when)(isString);
    var numberGuard = (0, guards_1.when)(isNumber);
    var NaNGuard = (0, guards_1.when)(numberIsNaN);
    var booleanGuard = (0, guards_1.when)(isBoolean);
    var nullishGuard = (0, guards_1.when)(isNullish);
    exports.__ = Object.assign(unknownGuard, {
      string: stringGuard,
      number: numberGuard,
      NaN: NaNGuard,
      boolean: booleanGuard,
      nullish: nullishGuard
    });
  }
});
var require_lib = __commonJS({
  "node_modules/ts-pattern/lib/index.js"(exports) {
    "use strict";
    init_preact_shim();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isMatching = exports.match = exports.instanceOf = exports.select = exports.not = exports.when = exports.__ = void 0;
    var symbols = require_symbols();
    var guards_1 = require_guards();
    Object.defineProperty(exports, "when", { enumerable: true, get: function() {
      return guards_1.when;
    } });
    Object.defineProperty(exports, "not", { enumerable: true, get: function() {
      return guards_1.not;
    } });
    Object.defineProperty(exports, "select", { enumerable: true, get: function() {
      return guards_1.select;
    } });
    Object.defineProperty(exports, "instanceOf", { enumerable: true, get: function() {
      return guards_1.instanceOf;
    } });
    var wildcards_1 = require_wildcards();
    Object.defineProperty(exports, "__", { enumerable: true, get: function() {
      return wildcards_1.__;
    } });
    var match8 = (value) => builder(value, []);
    exports.match = match8;
    var builder = (value, cases) => {
      const run = () => {
        const entry = cases.find(({ test }) => test(value));
        if (!entry) {
          let displayedValue;
          try {
            displayedValue = JSON.stringify(value);
          } catch (e22) {
            displayedValue = value;
          }
          throw new Error(`Pattern matching error: no pattern matches value ${displayedValue}`);
        }
        return entry.handler(entry.select(value), value);
      };
      return {
        with(...args) {
          const handler = args[args.length - 1];
          const patterns = [];
          const predicates = [];
          for (let i3 = 0; i3 < args.length - 1; i3++) {
            const arg = args[i3];
            if (typeof arg === "function") {
              predicates.push(arg);
            } else {
              patterns.push(arg);
            }
          }
          let selected = {};
          const doesMatch = (value2) => Boolean(patterns.some((pattern) => matchPattern(pattern, value2, (key, value3) => {
            selected[key] = value3;
          })) && predicates.every((predicate) => predicate(value2)));
          return builder(value, cases.concat([
            {
              test: doesMatch,
              handler,
              select: (value2) => Object.keys(selected).length ? symbols.AnonymousSelectKey in selected ? selected[symbols.AnonymousSelectKey] : selected : value2
            }
          ]));
        },
        when: (predicate, handler) => builder(value, cases.concat([
          {
            test: predicate,
            handler,
            select: (value2) => value2
          }
        ])),
        otherwise: (handler) => builder(value, cases.concat([
          {
            test: () => true,
            handler,
            select: (value2) => value2
          }
        ])).run(),
        exhaustive: () => run(),
        run
      };
    };
    var isObject2 = (value) => Boolean(value && typeof value === "object");
    var isGuardPattern = (x22) => {
      const pattern = x22;
      return pattern && pattern[symbols.PatternKind] === symbols.Guard;
    };
    var isNotPattern = (x22) => {
      const pattern = x22;
      return pattern && pattern[symbols.PatternKind] === symbols.Not;
    };
    var isSelectPattern = (x22) => {
      const pattern = x22;
      return pattern && pattern[symbols.PatternKind] === symbols.Select;
    };
    var matchPattern = (pattern, value, select8) => {
      if (isObject2(pattern)) {
        if (isGuardPattern(pattern))
          return Boolean(pattern[symbols.Guard](value));
        if (isSelectPattern(pattern)) {
          select8(pattern[symbols.Select], value);
          return true;
        }
        if (isNotPattern(pattern))
          return !matchPattern(pattern[symbols.Not], value, select8);
        if (!isObject2(value))
          return false;
        if (Array.isArray(pattern)) {
          if (!Array.isArray(value))
            return false;
          if (pattern.length === 1) {
            const selected = {};
            const listSelect = (key, value2) => {
              selected[key] = (selected[key] || []).concat([value2]);
            };
            const doesMatch = value.every((v3) => matchPattern(pattern[0], v3, listSelect));
            if (doesMatch) {
              Object.keys(selected).forEach((key) => select8(key, selected[key]));
            }
            return doesMatch;
          }
          return pattern.length === value.length ? pattern.every((subPattern, i3) => matchPattern(subPattern, value[i3], select8)) : false;
        }
        if (pattern instanceof Map) {
          if (!(value instanceof Map))
            return false;
          return [...pattern.keys()].every((key) => matchPattern(pattern.get(key), value.get(key), select8));
        }
        if (pattern instanceof Set) {
          if (!(value instanceof Set))
            return false;
          if (pattern.size === 0)
            return value.size === 0;
          if (pattern.size === 1) {
            const [subPattern] = [...pattern.values()];
            return Object.values(wildcards_1.__).includes(subPattern) ? matchPattern([subPattern], [...value.values()], select8) : value.has(subPattern);
          }
          return [...pattern.values()].every((subPattern) => value.has(subPattern));
        }
        return Object.keys(pattern).every((k22) => k22 in value && matchPattern(pattern[k22], value[k22], select8));
      }
      return value === pattern;
    };
    function isMatching(...args) {
      if (args.length === 1) {
        const [pattern] = args;
        return (value) => matchPattern(pattern, value, () => {
        });
      }
      if (args.length === 2) {
        const [pattern, value] = args;
        return matchPattern(pattern, value, () => {
        });
      }
      throw new Error(`isMatching wasn't given enough arguments: expected 1 or 2, received ${args.length}.`);
    }
    exports.isMatching = isMatching;
  }
});
var require_basePropertyOf = __commonJS({
  "node_modules/lodash/_basePropertyOf.js"(exports, module) {
    init_preact_shim();
    function basePropertyOf(object) {
      return function(key) {
        return object == null ? void 0 : object[key];
      };
    }
    module.exports = basePropertyOf;
  }
});
var require_escapeHtmlChar = __commonJS({
  "node_modules/lodash/_escapeHtmlChar.js"(exports, module) {
    init_preact_shim();
    var basePropertyOf = require_basePropertyOf();
    var htmlEscapes = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };
    var escapeHtmlChar = basePropertyOf(htmlEscapes);
    module.exports = escapeHtmlChar;
  }
});
var require_escape = __commonJS({
  "node_modules/lodash/escape.js"(exports, module) {
    init_preact_shim();
    var escapeHtmlChar = require_escapeHtmlChar();
    var toString = require_toString();
    var reUnescapedHtml = /[&<>"']/g;
    var reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
    function escape2(string) {
      string = toString(string);
      return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
    }
    module.exports = escape2;
  }
});
init_preact_shim();
init_preact_shim();
init_preact_module();
function r22() {
  return (r22 = Object.assign || function(t22) {
    for (var e22 = 1; e22 < arguments.length; e22++) {
      var n22 = arguments[e22];
      for (var o22 in n22)
        Object.prototype.hasOwnProperty.call(n22, o22) && (t22[o22] = n22[o22]);
    }
    return t22;
  }).apply(this, arguments);
}
function i22(t22) {
  this.getChildContext = function() {
    return t22.context;
  };
  var e22 = t22.children, n22 = function(t3, e3) {
    if (t3 == null)
      return {};
    var n3, o22, r3 = {}, i3 = Object.keys(t3);
    for (o22 = 0; o22 < i3.length; o22++)
      e3.indexOf(n3 = i3[o22]) >= 0 || (r3[n3] = t3[n3]);
    return r3;
  }(t22, ["context", "children"]);
  return B(e22, n22);
}
function a22() {
  var o22 = new CustomEvent("_preact", { detail: {}, bubbles: true, cancelable: true });
  this.dispatchEvent(o22), this._vdom = v2(i22, r22({}, this._props, { context: o22.detail.context }), function e22(n22, o3) {
    if (n22.nodeType === 3)
      return n22.data;
    if (n22.nodeType !== 1)
      return null;
    var r3 = [], i3 = {}, a3 = 0, c3 = n22.attributes, l3 = n22.childNodes;
    for (a3 = c3.length; a3--; )
      c3[a3].name !== "slot" && (i3[c3[a3].name] = c3[a3].value, i3[s22(c3[a3].name)] = c3[a3].value);
    for (a3 = l3.length; a3--; ) {
      var p = e22(l3[a3], null), d22 = l3[a3].slot;
      d22 ? i3[d22] = v2(u22, { name: d22 }, p) : r3[a3] = p;
    }
    var h22 = o3 ? v2(u22, null, r3) : r3;
    return v2(o3 || n22.nodeName.toLowerCase(), i3, h22);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? q : S)(this._vdom, this._root);
}
function s22(t22) {
  return t22.replace(/-(\w)/g, function(t3, e22) {
    return e22 ? e22.toUpperCase() : "";
  });
}
function c22(t22, e22, r3) {
  if (this._vdom) {
    var i3 = {};
    i3[t22] = r3 = r3 == null ? void 0 : r3, i3[s22(t22)] = r3, this._vdom = B(this._vdom, i3), S(this._vdom, this._root);
  }
}
function l22() {
  S(this._vdom = null, this._root);
}
function u22(e22, n22) {
  var o22 = this;
  return v2("slot", r22({}, e22, { ref: function(t22) {
    t22 ? (o22.ref = t22, o22._listener || (o22._listener = function(t3) {
      t3.stopPropagation(), t3.detail.context = n22;
    }, t22.addEventListener("_preact", o22._listener))) : o22.ref.removeEventListener("_preact", o22._listener);
  } }));
}
function preact_custom_element_esm_default(t22, e22, n22, o22) {
  function r3() {
    var e3 = Reflect.construct(HTMLElement, [], r3);
    return e3._vdomComponent = t22, e3._root = o22 && o22.shadow ? e3.attachShadow({ mode: "open" }) : e3, e3;
  }
  return (r3.prototype = Object.create(HTMLElement.prototype)).constructor = r3, r3.prototype.connectedCallback = a22, r3.prototype.attributeChangedCallback = c22, r3.prototype.disconnectedCallback = l22, n22 = n22 || t22.observedAttributes || Object.keys(t22.propTypes || {}), r3.observedAttributes = n22, n22.forEach(function(t3) {
    Object.defineProperty(r3.prototype, t3, { get: function() {
      return this._vdom.props[t3];
    }, set: function(e3) {
      this._vdom ? this.attributeChangedCallback(t3, null, e3) : (this._props || (this._props = {}), this._props[t3] = e3, this.connectedCallback());
      var n3 = typeof e3;
      e3 != null && n3 !== "string" && n3 !== "boolean" && n3 !== "number" || this.setAttribute(t3, e3);
    } });
  }), customElements.define(e22 || t22.tagName || t22.displayName || t22.name, r3);
}
init_preact_shim();
init_preact_module();
var sw_input_style_default = "*, ::before, ::after {\n    box-sizing: border-box;\n    font: inherit;\n    color: inherit;\n}\n\n:host {\n    --enable-transition: var(--on);\n}\n\n.error {\n    color: var(--error-color);\n}\n\np.error {\n    margin: .3em 0 0 0;\n}\n\n.input-wrapper {\n    display: flex;\n    flex-direction: column-reverse;\n}\n\ninput {\n    padding: var(--padding, .4em 0);\n    border-style: solid;\n    border-width: var(--border-width, 0 0 0.0625em 0);\n    border-radius: var(--border-radius);\n    border-color: var(--border-color, lightgray);\n    width: 100%;\n    background: var(--input-bg-color, none);\n    box-sizing: border-box;\n}\n\nlabel {\n    position: var(--enable-transition, relative);\n    margin-bottom: var(--label-distance);\n    font-weight: var(--label-font-weight);\n    top: 1.8em;\n    cursor: text;\n    transition: .2s ease-out top, .2s ease-out font-size;\n    pointer-events: var(--enable-transition, none);\n    line-height: 1.2em;\n}\n\ninput:focus + label,\ninput:not(:placeholder-shown) + label {\n    top: 0;\n    font-size: var(--enable-transition, .8em);\n    line-height: 1.2em;\n    display: var(--enable-transition, block);\n    height: var(--enable-transition, 1.6em);\n}\n\ninput:-webkit-autofill:not(:focus),\ntextarea:-webkit-autofill:not(:focus) {\n    border-bottom-color: lightgray;\n    -webkit-box-shadow: none;\n}\n\ninput:-webkit-autofill,\ninput:-webkit-autofill:hover,\ninput:-webkit-autofill:focus,\ntextarea:-webkit-autofill,\ntextarea:-webkit-autofill:hover,\ntextarea:-webkit-autofill:focus {\n    border-bottom-color: var(--border-hover-color);\n    -webkit-box-shadow: var(--enable-focus-shadow, 0 0.0625em 0 0 var(--border-hover-color));\n    transition: background-color 5000s ease-in-out 0s;\n}\n\ntextarea {\n    min-height: 8.2em;\n}\n\ninput:hover,\ninput:focus-visible {\n    outline: 0;\n    border-color: var(--border-hover-color);\n    box-shadow: var(--enable-focus-shadow, 0 0.0625em 0 0 var(--border-hover-color));\n}\n\n.datetime-wrapper {\n    display: flex;\n}\n";
init_preact_shim();
var import_get = __toESM(require_get());
var import_set = __toESM(require_set());
init_preact_shim();
function addEventDispatcherTrait(target) {
  const eventListeners = {};
  function addEventListener(eventType, listener) {
    var _a2;
    eventListeners[eventType] = (_a2 = eventListeners[eventType]) != null ? _a2 : [];
    eventListeners[eventType].push(listener);
  }
  function removeEventListener(eventType, listener) {
    var _a2, _b;
    eventListeners[eventType] = (_a2 = eventListeners[eventType]) != null ? _a2 : [];
    eventListeners[eventType] = ((_b = eventListeners[eventType]) != null ? _b : []).filter((l3) => l3 !== listener);
  }
  function dispatchEvent(event) {
    var _a2;
    ((_a2 = eventListeners[event.type]) != null ? _a2 : []).forEach((listener) => listener(event));
  }
  return Object.assign(target, {
    addEventListener,
    removeEventListener,
    dispatchEvent,
    on: addEventListener,
    off: removeEventListener,
    trigger: dispatchEvent
  });
}
var tr = window.tr || function(phrase, arg2, arg3) {
  var _a2;
  let locals;
  let lang;
  if (arg3) {
    lang = arg3;
    locals = arg2 || {};
  } else if (arg2 && typeof arg2 === "string") {
    lang = arg2;
    locals = {};
  } else if (arg2 && (arg2 instanceof Object || Array.isArray(arg2))) {
    lang = tr.getLang();
    locals = arg2;
  } else {
    lang = tr.getLang();
    locals = {};
  }
  if (phrase instanceof Object) {
    return (_a2 = phrase[lang]) != null ? _a2 : phrase["en"];
  }
  return parse((0, import_get.default)(window, ["tr", "translations", phrase, lang], (0, import_get.default)(window, ["tr", "translations", phrase, "en"], phrase)), locals);
};
tr = addEventDispatcherTrait(tr);
function parse(text, locals) {
  if (Array.isArray(locals)) {
    const split = text.split(/\$\{[a-zA-Z0-9]+\}/);
    if (split.length === 1) {
      return split[0];
    }
    return split.map((item, index) => {
      var _a2;
      return item + ((_a2 = locals[index]) != null ? _a2 : "");
    }).join("");
  }
  return Object.keys(locals).reduce((text2, varName) => {
    return text2.replaceAll("${" + varName + "}", locals[varName]);
  }, text);
}
tr.getBrowserLang = function getBrowserLang() {
  var _a2;
  const userLang = navigator.language || navigator.userLanguage;
  return (_a2 = userLang.split(/[\-_]/)[0]) != null ? _a2 : "en";
};
tr.getBrowserLocale = function getBrowserLocale() {
  return tr.getBrowserLang().toUpperCase();
};
tr.setLang = function setLang(lang) {
  localStorage.setItem("tr.lang", lang);
  tr.dispatchEvent(new CustomEvent("setlang"));
};
tr.getLang = function getLang() {
  var _a2;
  return (_a2 = localStorage.getItem("tr.lang")) != null ? _a2 : tr.getBrowserLang();
};
tr.setLocale = function setLocale(locale) {
  localStorage.setItem("tr.locale", locale);
};
tr.getLocale = function getLocale() {
  return localStorage.getItem("tr.locale") || tr.getBrowserLocale();
};
tr.addTranslation = function(phrase, translation) {
  (0, import_set.default)(window, ["tr", "translations", phrase], __spreadValues(__spreadValues({}, (0, import_get.default)(window, ["tr", "translations", phrase], {})), translation));
};
window.tr = window.tr || tr;
var SwDatetimeInput = class extends _2 {
  dispatchEvent(name) {
    var _a2, _b, _c;
    this.ref.getRootNode().host.dispatchEvent(new CustomEvent("update", {
      detail: {
        name,
        value: this.state.value,
        error: ((_a2 = this.state) == null ? void 0 : _a2.timeErr) || ((_b = this.state) == null ? void 0 : _b.dateErr) || ((_c = this.state) == null ? void 0 : _c.datetimeErr)
      },
      bubbles: true
    }));
  }
  render({ name, required, placeholder, disabled, value, date, time, step, showLabel }) {
    var _a2, _b;
    const dateVal = dateStringify(value);
    const timeVal = timeStringify(value, date);
    return /* @__PURE__ */ v2("div", {
      className: "sw-input sw-datetime-input"
    }, /* @__PURE__ */ v2("style", null, sw_input_style_default), /* @__PURE__ */ v2("div", {
      className: "input-wrapper",
      ref: (node) => this.ref = node
    }, /* @__PURE__ */ v2("div", {
      className: "datetime-wrapper"
    }, date && /* @__PURE__ */ v2("input", {
      id: date ? name + "-date" : name + "-time",
      type: "date",
      required: required === "true",
      placeholder: " ",
      disabled: disabled !== "false" && !!disabled,
      value: (_a2 = this.state.dateVal) != null ? _a2 : dateVal,
      "aria-labelledby": placeholder,
      onBlur: async (e22) => {
        var _a3, _b2;
        const {
          newVal,
          datetimeErr
        } = datetimeToInteger(e22.target.value, time, (_a3 = this.state.timeVal) != null ? _a3 : timeVal, this);
        await this.setState({
          dateVal: e22.target.value,
          timeVal: (_b2 = this.state.timeVal) != null ? _b2 : timeVal,
          dateErr: e22.target.validationMessage !== e22.target.value && e22.target.validationMessage,
          value: newVal,
          datetimeErr
        });
        this.dispatchEvent(name);
      }
    }), time && /* @__PURE__ */ v2("input", {
      id: name + "-time",
      type: "time",
      required: required === "true",
      placeholder: " ",
      disabled: disabled !== "false" && !!disabled,
      value: (_b = this.state.timeVal) != null ? _b : timeVal,
      step,
      "aria-labelledby": placeholder,
      onBlur: async (e22) => {
        var _a3, _b2;
        const { newVal, datetimeErr } = date ? datetimeToInteger((_a3 = this.state.dateVal) != null ? _a3 : dateVal, time, e22.target.value, this) : timeToInteger(e22.target.value);
        await this.setState({
          timeVal: e22.target.value,
          dateVal: (_b2 = this.state.dateVal) != null ? _b2 : dateVal,
          timeErr: e22.target.validationMessage !== e22.target.value && e22.target.validationMessage,
          value: newVal,
          datetimeErr
        });
        this.dispatchEvent(name);
      }
    })), showLabel && /* @__PURE__ */ v2("label", {
      htmlFor: name + "-date"
    }, placeholder)));
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
    return { newVal: null, datetimeErr: tr("datetime.invalidDateOrHour") };
  }
  const newString = dateString + (timeString ? "T" + timeString : "");
  return { datetimeErr: "", newVal: new Date(newString).valueOf() };
}
init_preact_shim();
init_preact_shim();
function makeLog(ns, forceDebugMode = false) {
  return function(msg2, ...args) {
    if (window.debug || forceDebugMode) {
      console.log(ns + ": " + msg2, ...args);
    }
  };
}
var log = makeLog("sw-map");
function createNode(text) {
  const node = document.createElement("div");
  node.innerHTML = text;
  return node.children[0];
}
var makeIcon = (color) => `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
    <path fill="${color}" d="M256 0c-88.366 0-160 71.634-160 160 0 160 160 352 160 352s160-192 160-352c0-88.366-71.635-160-160-160zM256 256c-53.020 0-96-42.98-96-96s42.98-96 96-96 96 42.98 96 96-42.98 96-96 96z"></path>
</svg>`;
async function ensureJsIsLoaded() {
  if (!window["H"]) {
    await import("https://js.api.here.com/v3/3.1/mapsjs-core.js");
    await import("https://js.api.here.com/v3/3.1/mapsjs-service.js");
    await import("https://js.api.here.com/v3/3.1/mapsjs-mapevents.js");
    await import("https://js.api.here.com/v3/3.1/mapsjs-ui.js");
  }
}
var SwMap = class extends HTMLElement {
  static get observedAttributes() {
    return ["api-key", "apiKey", "apikey", "selectable", "zoom", "center-lat", "center-lng", "centerLat", "centerlat", "centerLng", "centerlng"];
  }
  constructor() {
    super();
    this.myAttrs = {};
    this.attachShadow({ mode: "open" });
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
    this.observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === "childList" && this.map) {
          this.syncMarkers();
        }
      }
    });
    this.addedMarkers = [];
  }
  onMarkerClick(event) {
    const selectedEvent = new CustomEvent("select", {
      bubbles: true,
      detail: event.target.getData().mid
    });
    log("dispatching event", selectedEvent);
    this.dispatchEvent(selectedEvent);
  }
  async attributeChangedCallback(attrName, _previous, current) {
    var _a2, _b, _c;
    this.myAttrs[attrName] = current;
    log("got attribute", attrName);
    if (attrName === "selectable") {
      const coords = (current || "").split("x");
      if (this.selectedCoords && coords[0] && coords[1]) {
        log("change location");
        this.setLocation({ lat: coords[0], lng: coords[1] });
      }
      return;
    }
    const apiKey = this.myAttrs["api-key"] || this.myAttrs["apiKey"] || this.myAttrs["apikey"];
    if (!apiKey) {
      return;
    }
    log("establishing new here connection for key:" + current);
    await ensureJsIsLoaded();
    if (this.addedMarkers && this.addedMarkers.length > 0) {
      this.removeMarkers(this.addedMarkers);
      this.addedMarkers = [];
    }
    this.markersGroup = new H.map.Group();
    if (this.mainNode) {
      this.mainNode.remove();
      if (this.map) {
        this.map.removeEventListener("tap", this.onMapClick);
        this.markersGroup.removeEventListener("tap", this.onMarkerClick);
      }
    }
    this.mainNode = createNode('<div class="map-container"></div>');
    this.mainNode.style.width = this.clientWidth + "px";
    this.mainNode.style.height = this.clientHeight + "px";
    this.shadowRoot.appendChild(this.mainNode);
    this.platform = new H.service.Platform({
      apikey: apiKey
    });
    log("drawing a map");
    const defaultLayers = this.platform.createDefaultLayers();
    this.map = new H.Map(this.mainNode, defaultLayers.vector.normal.map, {
      zoom: (_a2 = this.myAttrs["zoom"]) != null ? _a2 : 6,
      center: { lat: (_b = this.myAttrs["center-lat"]) != null ? _b : 52, lng: (_c = this.myAttrs["center-lng"]) != null ? _c : 19 }
    });
    this.map.addObject(this.markersGroup);
    this.ui = H.ui.UI.createDefault(this.map, defaultLayers, "pl-PL");
    this.ui.removeControl("mapsettings");
    this.syncMarkers();
    var mapEvents = new H.mapevents.MapEvents(this.map);
    new H.mapevents.Behavior(mapEvents);
    this.map.addEventListener("tap", this.onMapClick);
    this.markersGroup.addEventListener("tap", this.onMarkerClick);
    if (this.getAttribute("selectable") !== null) {
      const split = (this.getAttribute("selectable") || "").split("x");
      if (split[0] && split[1]) {
        const coords = { lat: split[0], lng: split[1] };
        this.setLocation(coords);
        this.map.setCenter(coords);
      }
    }
  }
  onMapClick(event) {
    if (this.getAttribute("selectable") !== null) {
      const coords = this.map.screenToGeo(event.currentPointer.viewportX, event.currentPointer.viewportY);
      this.setLocation(coords);
      this.triggerUpdateEvent(coords);
    }
  }
  triggerUpdateEvent(coords) {
    const updateEvent = new CustomEvent("update", {
      bubbles: true,
      detail: { value: coords }
    });
    log("Dispatching update event", updateEvent);
    this.dispatchEvent(updateEvent);
  }
  setLocation(coords) {
    if (!this.map) {
      log("Map is not initialized");
      return;
    }
    log("setting location", coords);
    this.selectedCoords = coords;
    if (!this.marker) {
      const icon = new H.map.Icon(makeIcon("#000"));
      this.marker = new H.map.Marker(coords, { icon });
      this.map.addObject(this.marker);
    } else {
      this.marker.setGeometry(coords);
    }
  }
  connectedCallback() {
    this.observer.observe(this, { childList: true });
    window.addEventListener("resize", this.onResize);
  }
  disconnectedCallback() {
    this.observer.disconnect();
    window.removeEventListener("resize", this.onResize);
  }
  onResize() {
    if (this.map) {
      this.map.getViewPort().resize();
    }
  }
  syncMarkers() {
    let markersToRemove = [...this.addedMarkers];
    Array.from(this.children).forEach((child) => {
      const lat = child.getAttribute("lat");
      const lng = child.getAttribute("lng");
      const color = child.getAttribute("color");
      const mid = child.getAttribute("mid");
      if (child instanceof SwMapMarker) {
        let marker = this.addedMarkers.find((marker2) => marker2.lat === lat && marker2.lng === lng && marker2.color === color && marker2.mid === mid);
        if (!marker) {
          const icon = new H.map.Icon(makeIcon(color));
          marker = new H.map.Marker({ lat, lng }, {
            icon,
            data: { mid }
          });
          this.markersGroup.addObject(marker);
          marker.addEventListener("click", this.onMarkerClick);
          const m22 = { lat, lng, marker, color, mid };
          log("adding marker", m22);
          this.addedMarkers.push(m22);
        }
        markersToRemove = markersToRemove.filter((m22) => m22.lat !== lat && m22.lng !== lng && m22.color !== color && m22.mid === mid);
      }
    });
    this.removeMarkers(markersToRemove);
  }
  removeMarkers(markers) {
    markers.forEach((m22) => {
      const marker = m22.marker;
      log("removing marker", m22);
      marker.removeEventListener("click", this.onMarkerClick);
      if (this.markersGroup.getObjects().includes(marker)) {
        this.markersGroup.removeObject(marker);
      }
    });
  }
};
var SwMapMarker = class extends HTMLElement {
};
var isElementDefined = customElements.get("sw-map");
if (!isElementDefined) {
  customElements.define("sw-map", SwMap);
  customElements.define("sw-map-marker", SwMapMarker);
}
init_preact_shim();
init_preact_shim();
var import_isObject = __toESM(require_isObject());
var strings_exports = {};
__export(strings_exports, {
  capitalizeFirstLetter: () => capitalizeFirstLetter,
  lowercaseFirstLetter: () => lowercaseFirstLetter,
  prefixForConstSize: () => prefixForConstSize,
  toCamelCase: () => toCamelCase,
  toKebabCase: () => toKebabCase,
  toSpaceCase: () => toSpaceCase,
  truncateToWord: () => truncateToWord
});
init_preact_shim();
var import_to_no_case = __toESM(require_to_no_case());
function prefixForConstSize(text, size, prefixChar) {
  if (text.length >= size) {
    return text;
  }
  while (text.length < size) {
    text = prefixChar + text;
  }
  return text;
}
function toSpaceCase(str) {
  return (0, import_to_no_case.default)(str).replace(/[\W_]+(.|$)/g, function(_matches, match8) {
    return match8 ? " " + match8 : "";
  }).trim();
}
function toKebabCase(str) {
  return toSpaceCase(str).replace(/\s/g, "-");
}
function toCamelCase(str) {
  return lowercaseFirstLetter(toSpaceCase(str).split(/\s/).map(capitalizeFirstLetter).join(""));
}
function lowercaseFirstLetter(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function truncateToWord(countChars, text) {
  if (!text) {
    return "";
  }
  if (text.length < countChars) {
    return text;
  }
  const words = text.split(/\s/);
  let truncated = "";
  for (const word of words) {
    if (truncated.length + word.length > countChars) {
      break;
    }
    truncated += " " + word;
  }
  return truncated.length > 0 ? truncated + "..." : "";
}
init_preact_module();
function isContentChild(child) {
  return typeof child === "string" || i2(child);
}
function view(tagName, initialOpts, ...content) {
  var _a2;
  const { nodeName, id, classes } = parseElement(tagName);
  let opts = {};
  if (isContentChild(initialOpts)) {
    content = [initialOpts, ...content];
    opts = {};
  } else if ((0, import_isObject.default)(initialOpts)) {
    opts = initialOpts;
  }
  if (id) {
    opts.id = (_a2 = opts.id) != null ? _a2 : id;
  }
  if (classes && classes.length > 0) {
    const initial = typeof opts.className === "string" ? opts.className : "";
    const allClasses = classes.concat(initial.split(" ").filter((x22) => x22));
    opts.className = allClasses.join(" ");
  }
  return v2(toKebabCase(nodeName), opts, ...content);
}
var v22 = new Proxy(view, {
  get(target, prop) {
    return function(opts, ...content) {
      return target(prop.toString(), opts, ...content);
    };
  }
});
function parseElement(tagName) {
  const nodeName = tagName.split(".")[0] || "div";
  const { classes, id } = tagName.split(/(#[a-zA-Z0-9\-_]+)|(\.[a-zA-Z0-9\-_]*)/g).filter((x22) => x22).reduce((acc, item) => {
    if (item[0] === "#") {
      acc.id = item.slice(1);
    } else if (item[0] === ".") {
      acc.classes.push(item.slice(1));
    }
    return acc;
  }, { classes: [], id: "" });
  return {
    nodeName,
    id,
    classes
  };
}
var state_mgr_exports = {};
__export(state_mgr_exports, {
  CombinedCmds: () => CombinedCmds,
  InitializationState: () => InitializationState,
  component: () => component,
  focus: () => focus
});
init_preact_shim();
init_preact_module();
var import_uniq = __toESM(require_uniq());
var import_cloneDeep = __toESM(require_cloneDeep());
var import_isEqual = __toESM(require_isEqual());
init_preact_shim();
var InitializationState = class {
  constructor(props) {
    this.values = {};
    this.props = props;
  }
  isInitialized() {
    return this.props.every((prop) => this.values[prop] !== void 0);
  }
  setValue(propName, propValue) {
    this.values[propName] = propValue;
  }
  getValue(propName) {
    return this.values[propName];
  }
  getValues() {
    return __spreadValues({}, this.values);
  }
};
function focus(selector) {
  return ["Focus", selector];
}
function component({
  init: init2,
  update: update22,
  view: view92,
  attributeChangeFactory,
  debug = window.debug,
  tagName,
  propTypes: propTypes7 = {},
  shadow = false,
  willMount,
  willUnmount
}) {
  const alreadyRegistered = !!customElements.get(tagName);
  const log2 = debug ? (msg2, ...args) => {
    console.log("stm:" + tagName + ": " + msg2, ...args);
  } : () => {
  };
  if (alreadyRegistered) {
    log2(`custom element "${tagName}" is already registered`);
    return;
  }
  function setState(cmp, s3) {
    cmp.swState = s3;
    cmp.setState({ states: [s3] });
  }
  function getState(cmp) {
    return cmp.swState;
  }
  function runUpdate(cmp, msg2) {
    requestAnimationFrame(() => {
      log2("-------NEW MSG", msg2);
      log2("before update", getState(cmp));
      const updateResult = update22((0, import_cloneDeep.default)(getState(cmp)), msg2);
      if (updateResult === void 0) {
        throw new Error("update should cover all cases");
      }
      const [newState, next] = updateResult;
      log2("after update", newState);
      setState(cmp, newState);
      if (next !== null) {
        runNext(cmp, next);
      }
    });
  }
  function runNext(cmp, next) {
    if (next instanceof CombinedCmds) {
      next.cmds.forEach((cmd) => runNext(cmp, cmd));
      return;
    }
    if (next && next[0] === "Focus") {
      let tryFocus = function(tries) {
        requestAnimationFrame(() => {
          const node = cmp.ref.querySelector(next[1]);
          if (node) {
            node.focus();
          } else if (tries > 0) {
            tryFocus(tries - 1);
          }
        });
      };
      tryFocus(100);
      return;
    }
    if (next instanceof Event) {
      log2("DISPATCH", next);
      if (shadow) {
        cmp.ref.getRootNode().host.dispatchEvent(next);
      } else {
        cmp.ref.dispatchEvent(next);
      }
      return;
    }
    Promise.resolve(next).then((maybeMsg) => {
      if (maybeMsg !== null) {
        runUpdate(cmp, maybeMsg);
      }
    }).catch((err) => {
      console.error(err);
      throw new Error("update promise should never throw");
    });
  }
  const dispatcher = (cmp, msgFactory) => {
    return async function(event) {
      const msg2 = getOrCall(msgFactory, event);
      if (msg2) {
        runUpdate(cmp, msg2);
      }
    };
  };
  class Cmp extends _2 {
    constructor() {
      super();
      this.redraw = this.redraw.bind(this);
      this.setRef = this.setRef.bind(this);
      const [state, next] = init2((msg2) => runUpdate(this, msg2), (func) => this.onRefChange = func);
      log2("INIT complete", state);
      setState(this, state);
      runNext(this, next);
      this.initialRenderComplete = false;
      this.realProps = {};
    }
    shouldComponentUpdate(nextProps) {
      if (!attributeChangeFactory) {
        return true;
      }
      const allPropNames = (0, import_uniq.default)(Object.keys(this.realProps).concat(Object.keys(nextProps)).map(toCamelCase));
      allPropNames.forEach((propName) => {
        if (propName === "children") {
          if (this.realProps["children"] !== nextProps["children"]) {
            this.realProps[propName] = nextProps[propName];
            runUpdate(this, attributeChangeFactory(propName, nextProps[propName]));
          }
          return;
        }
        if (!myIsEqual(this.realProps[propName], nextProps[propName]) && nextProps[propName] !== void 0) {
          this.realProps[propName] = nextProps[propName];
          runUpdate(this, attributeChangeFactory(propName, nextProps[propName]));
        }
      });
    }
    render(props) {
      if (!this.initialRenderComplete && attributeChangeFactory) {
        this.initialRenderComplete = true;
        Object.keys(props).forEach((propName) => {
          this.realProps[toCamelCase(propName)] = props[propName];
          runUpdate(this, attributeChangeFactory(toCamelCase(propName), props[propName]));
        });
      }
      const state = getState(this);
      let vnode = view92(state, props.children);
      if (!i2(vnode)) {
        vnode = toVNode(vnode, dispatcher);
      }
      const rendered = initVNode(vnode, dispatcher.bind(null, this));
      if (typeof rendered !== "string" && (typeof rendered.type === "string" || !shadow)) {
        rendered.ref = this.setRef;
      } else if (typeof rendered.type !== "string" && rendered.props.children.length > 0) {
        rendered.props.children[0].ref = this.setRef;
      }
      return rendered;
    }
    setRef(ref) {
      const old = this.ref;
      if (shadow || !ref) {
        this.ref = ref;
      } else {
        this.ref = ref.parentNode;
      }
      if (this.onRefChange) {
        this.onRefChange(this.ref, old);
      }
    }
    redraw() {
      this.forceUpdate();
    }
    componentWillMount() {
      tr.addEventListener("setlang", this.redraw);
      if (willMount) {
        willMount.call(this, this, (msg2) => runUpdate(this, msg2));
      }
    }
    componentWillUnmount() {
      tr.removeEventListener("setlang", this.redraw);
      if (willUnmount) {
        willUnmount.call(this, this, (msg2) => runUpdate(this, msg2));
      }
    }
  }
  const attrs = (0, import_uniq.default)(Object.keys(propTypes7).map(toKebabCase).concat(Object.keys(propTypes7)));
  preact_custom_element_esm_default(Cmp, tagName, attrs, { shadow });
}
function getOrCall(item, ...args) {
  if (typeof item === "function") {
    return item(...args);
  } else {
    return item;
  }
}
function initVNode(vnode, dispatcher) {
  var _a2, _b;
  if (typeof vnode === "string" || typeof vnode === "boolean") {
    return vnode;
  }
  Object.keys(vnode.props || {}).forEach((key) => {
    if (key.slice(0, 2) === "on") {
      vnode.props[key] = dispatcher(vnode.props[key]);
    }
  });
  if (Array.isArray((_a2 = vnode == null ? void 0 : vnode.props) == null ? void 0 : _a2.children)) {
    vnode.props.children.forEach((child) => {
      initVNode(child, dispatcher);
    });
  } else if ((_b = vnode == null ? void 0 : vnode.props) == null ? void 0 : _b.children) {
    initVNode(vnode.props.children, dispatcher);
  }
  return vnode;
}
function toVNode(item, dispatcher) {
  var _a2, _b;
  const el = item[0];
  let opts = item[1];
  let content = item[2];
  if (!content) {
    if (Array.isArray(opts)) {
      content = opts;
      opts = {};
    } else if (opts instanceof Object) {
      content = [];
    } else {
      content = opts;
      opts = {};
    }
  }
  const { nodeName, id, classes } = parseElement2(el);
  if (id) {
    opts.id = (_a2 = opts.id) != null ? _a2 : id;
  }
  if (classes && classes.length > 0) {
    const allClasses = classes.concat(((_b = opts.className) != null ? _b : "").split(" ").filter((x22) => x22));
    opts.className = allClasses.join(" ");
  }
  if (Array.isArray(content)) {
    content = content.filter((item2) => item2).map((child) => {
      if (Array.isArray(child)) {
        return toVNode(child, dispatcher);
      }
      return initVNode(child, dispatcher);
    });
  }
  return v2(nodeName, opts, content);
}
function parseElement2(el) {
  const nodeName = el.split(".")[0] || "div";
  const { classes, id } = el.split(/(#[a-zA-Z0-9\-_]+)|(\.[a-zA-Z0-9\-_]*)/g).filter((x22) => x22).reduce((acc, item) => {
    if (item[0] === "#") {
      acc.id = item.slice(1);
    } else if (item[0] === ".") {
      acc.classes.push(item.slice(1));
    }
    return acc;
  }, { classes: [], id: "" });
  return {
    nodeName,
    id,
    classes
  };
}
function myIsEqual(a3, b22) {
  const aType = getType(a3);
  const bType = getType(b22);
  if (aType !== bType) {
    return false;
  }
  if (aType === "object") {
    const sameKeys = (0, import_isEqual.default)(Object.keys(a3), Object.keys(b22));
    if (!sameKeys) {
      return false;
    }
    return Object.keys(a3).every((key) => myIsEqual(a3[key], b22[key]));
  }
  if (aType === "function") {
    return (aType == null ? void 0 : aType.toString()) === (bType == null ? void 0 : bType.toString());
  }
  return (0, import_isEqual.default)(a3, b22);
}
function getType(x22) {
  if (["string", "number", "boolean", "undefined", "function"].includes(typeof x22)) {
    return typeof x22;
  }
  if (Array.isArray(x22)) {
    return "array";
  }
  if (x22 === null) {
    return "null";
  }
  if (x22 instanceof Object) {
    return "object";
  }
}
var CombinedCmds = class {
  constructor(cmds) {
    this.cmds = cmds;
  }
};
var sw_loader_default = "@keyframes loader-1 {\n    0% {\n        top: 17px;\n        height: 115px\n    }\n    50% {\n        top: 39px;\n        height: 72px\n    }\n    100% {\n        top: 39px;\n        height: 72px\n    }\n}\n\n@keyframes loader-2 {\n    0% {\n        top: 23px;\n        height: 104px\n    }\n    50% {\n        top: 39px;\n        height: 72px\n    }\n    100% {\n        top: 39px;\n        height: 72px\n    }\n}\n\n@keyframes loader-3 {\n    0% {\n        top: 28px;\n        height: 94px\n    }\n    50% {\n        top: 39px;\n        height: 72px\n    }\n    100% {\n        top: 39px;\n        height: 72px\n    }\n}\n\n.loader div {\n    position: absolute;\n    width: 18px\n}\n\n.loader div:nth-child(1) {\n    left: 28.5px;\n    background: var(--color, #ccc);\n    animation: loader-1 1s cubic-bezier(0, .5, .5, 1) infinite;\n    animation-delay: -0.2s\n}\n\n.loader div:nth-child(2) {\n    left: 66px;\n    background: var(--color, var(--second-color, #ccc));\n    animation: loader-2 1s cubic-bezier(0, .5, .5, 1) infinite;\n    animation-delay: -0.1s\n}\n\n.loader div:nth-child(3) {\n    left: 103.5px;\n    background: var(--color, var(--third-color, #ccc));\n    animation: loader-3 1s cubic-bezier(0, .5, .5, 1) infinite;\n}\n\n.loader-box {\n    width: 150px;\n    height: 150px;\n    display: inline-block;\n    overflow: hidden;\n    background: none;\n}\n\n.loader {\n    width: 100%;\n    height: 100%;\n    position: relative;\n    transform: translateZ(0) scale(1);\n    backface-visibility: hidden;\n    transform-origin: 0 0;\n}\n\n.loader div {\n    box-sizing: content-box;\n}\n";
component({
  tagName: "sw-loader",
  shadow: true,
  init: () => [{}, null],
  update: () => [{}, null],
  view: () => v22(".sw-loader", v22.style(sw_loader_default), v22(".loader-box", v22(".loader", v22.div(), v22.div(), v22.div())))
});
init_preact_shim();
component({
  tagName: "sw-mini-loader",
  shadow: true,
  init: () => [{}, null],
  update: (state) => [state, null],
  view: () => /* @__PURE__ */ v2("svg", {
    version: "1.1",
    id: "L9",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 30",
    "enable-background": "new 0 0 0 0",
    "xml:space": "preserve"
  }, /* @__PURE__ */ v2("style", null, `
             rect { fill: var(--color); }
             :host { display: inline-block; width: 24px; height: 30px; }
            `), /* @__PURE__ */ v2("rect", {
    x: "0",
    y: "0",
    width: "4",
    height: "10",
    fill: "red"
  }, /* @__PURE__ */ v2("animateTransform", {
    attributeType: "xml",
    attributeName: "transform",
    type: "translate",
    values: "0 0; 0 20; 0 0",
    begin: "0",
    dur: "0.6s",
    repeatCount: "indefinite"
  })), /* @__PURE__ */ v2("rect", {
    x: "10",
    y: "0",
    width: "4",
    height: "10",
    fill: "red"
  }, /* @__PURE__ */ v2("animateTransform", {
    attributeType: "xml",
    attributeName: "transform",
    type: "translate",
    values: "0 0; 0 20; 0 0",
    begin: "0.2s",
    dur: "0.6s",
    repeatCount: "indefinite"
  })), /* @__PURE__ */ v2("rect", {
    x: "20",
    y: "0",
    width: "4",
    height: "10",
    fill: "red"
  }, /* @__PURE__ */ v2("animateTransform", {
    attributeType: "xml",
    attributeName: "transform",
    type: "translate",
    values: "0 0; 0 20; 0 0",
    begin: "0.4s",
    dur: "0.6s",
    repeatCount: "indefinite"
  })))
});
init_preact_shim();
init_preact_shim();
var _a;
var routes = window.routes = (_a = window.routes) != null ? _a : [];
function routeMatchUrl(route, url) {
  const testParts = url.split("/").filter((x22) => x22);
  if (testParts.length !== route.parts.length) {
    return false;
  }
  for (let i3 = 0; i3 < testParts.length; i3 += 1) {
    const obj = route.parts[i3].paramsObjectFromUrlPart(testParts[i3]);
    const routePart = route.parts[i3].paramsObjectToUrlPart(obj).toString();
    if (testParts[i3] !== routePart && routePart !== void 0) {
      return false;
    }
  }
  return true;
}
function findDefaultRoute() {
  const defaultRoute = routes.find((r3) => r3.isDefault);
  if (!defaultRoute) {
    throw new Error("no default route specified ");
  }
  defaultRoute.params = getRouteParams(defaultRoute);
  return defaultRoute;
}
function findRouteByName(routeName) {
  var _a2;
  const route = (_a2 = routes.find((r3) => r3.name === routeName)) != null ? _a2 : findDefaultRoute();
  route.params = getRouteParams(route);
  return route;
}
function findRouteByUrl(url) {
  var _a2, _b;
  url = (_a2 = (url != null ? url : "").split("#")[1]) != null ? _a2 : "";
  const route = (_b = routes.find((route2) => routeMatchUrl(route2, url))) != null ? _b : findDefaultRoute();
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
function navigate(routeName, params) {
  window.location.href = getRouteUrl(routeName, params);
}
function getRouteParams(route) {
  const pathSplit = window.location.hash.slice(1).split("/");
  let params = {};
  for (let i3 = 0; i3 < route.parts.length; i3 += 1) {
    const part = route.parts[i3];
    params = __spreadValues(__spreadValues({}, params), part.paramsObjectFromUrlPart(pathSplit[i3]));
  }
  return params;
}
function getRoutePath(route, params = {}) {
  return route.parts.map((part) => part.paramsObjectToUrlPart(params)).join("/");
}
function addRoute(routeDef) {
  const { path, defaultParams } = routeDef;
  const parts = path.split("/").filter((x22) => x22).map((partString) => {
    return {
      paramsObjectToUrlPart: (params = {}) => {
        var _a2;
        if (partString[0] === ":") {
          const varName = partString.substring(1);
          return params[varName] !== void 0 ? encodeURIComponent(params[varName]) : (_a2 = defaultParams == null ? void 0 : defaultParams[varName]) != null ? _a2 : "";
        }
        return partString;
      },
      paramsObjectFromUrlPart: (val) => {
        if (partString[0] === ":") {
          const varName = partString.substring(1);
          return {
            [varName]: val !== void 0 ? decodeURIComponent(val) : defaultParams == null ? void 0 : defaultParams[varName]
          };
        }
        return {};
      }
    };
  });
  routes.push(__spreadProps(__spreadValues({}, routeDef), { parts }));
}
var router = window.router || addEventDispatcherTrait({
  findDefaultRoute,
  findRouteByName,
  findRouteByUrl,
  getCurrentRoute,
  getRouteUrl,
  navigate,
  addRoute
});
if (!window.router) {
  window.addEventListener("hashchange", function() {
    const route = getCurrentRoute();
    const event = new CustomEvent("routeChange", { detail: route });
    router.trigger(event);
  });
  window.router = router;
}
var sw_pagination_style_default = "*, ::before, ::after {\n    box-sizing: border-box;\n    font: inherit;\n    color: inherit;\n}\n\n.wrapper {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n}\n\ndiv.wrapper a,\ndiv.wrapper .current-page {\n    text-align: center;\n    box-sizing: border-box;\n    display: inline-block;\n    width: var(--page-width);\n    text-decoration: none;\n    margin: var(--page-margin);\n    padding: var(--page-padding);\n    background-color: var(--page-bg-color);\n    border-radius: var(--border-radius);\n}\n\ndiv.wrapper a:hover {\n    background-color: var(--page-hover-bg-color, var(--page-bg-color));\n}\n\n.next-page-link-text,\n.previous-page-link-text {\n    display: var(--enable-short-style, none);\n}\n\n.pages-list {\n    margin: 0 var(--next-prev-distance);\n}\n\n.pages-list:last-child {\n    margin-right: 0;\n}\n\ndiv.wrapper .current-page {\n    color: var(--current-page-fg-color);\n    background-color: var(--current-page-bg-color);\n}\n\nspan:not(span.currentPage, span.caption) {\n    cursor: pointer;\n}\n";
var AttributeChange = class {
  constructor(name, value) {
    this.name = name;
    this.value = value;
  }
};
var propTypes = {
  currentPage: Number,
  numberOfPages: Number,
  routeName: String,
  routeParams: Object
};
component({
  tagName: "sw-pagination",
  init,
  update,
  view: view2,
  attributeChangeFactory: (name, value) => new AttributeChange(name, value),
  propTypes
});
function init() {
  return [new InitializationState(["currentPage", "numberOfPages"]), null];
}
function update(state, msg2) {
  var _a2;
  if (state instanceof InitializationState) {
    state.setValue(msg2.name, msg2.value);
    if (state.isInitialized()) {
      let numberOfPagesValue = parseInt(state == null ? void 0 : state.getValue("numberOfPages"));
      numberOfPagesValue = isNaN(numberOfPagesValue) ? 1 : numberOfPagesValue;
      const newState = {
        currentPage: parseInt(state == null ? void 0 : state.getValue("currentPage")),
        numberOfPages: numberOfPagesValue,
        routeName: state.getValue("routeName"),
        routeParams: (_a2 = state.getValue("routeParams")) != null ? _a2 : {}
      };
      return [newState, null];
    } else {
      return [state, null];
    }
  } else {
    let newState = __spreadValues({}, state);
    switch (msg2.name) {
      case "numberOfPages":
        newState.numberOfPages = isNaN(msg2 == null ? void 0 : msg2.value) ? 1 : msg2 == null ? void 0 : msg2.value;
        break;
      case "currentPage":
        newState.currentPage = isNaN(msg2 == null ? void 0 : msg2.value) ? 1 : msg2 == null ? void 0 : msg2.value;
        break;
      case "routeName":
        newState.routeName = msg2 == null ? void 0 : msg2.value;
        break;
      case "routeParams":
        newState.routeParams = msg2 == null ? void 0 : msg2.value;
        break;
    }
    return [newState, null];
  }
}
function view2(state) {
  if (state instanceof InitializationState) {
    return ["sw-loader"];
  }
  return [".wrapper", [
    ["style", sw_pagination_style_default],
    state.currentPage > 1 && pageView(state, state.currentPage - 1, [
      ["i.icon.icon-chevron-left"],
      ["span.previous-page-link-text", tr("pagination.previousPage")]
    ], "previous"),
    [".pages-list", [
      state.numberOfPages > 1 && state.currentPage !== 1 && pageView(state, 1, "1"),
      (state.numberOfPages >= 7 && state.currentPage > 4 || state.numberOfPages === 7 && state.currentPage > 5) && ["span.caption", "..."],
      state.currentPage - 4 > 0 && state.currentPage + 1 > state.numberOfPages && state.currentPage !== 5 && pageView(state, state.currentPage - 4, (state.currentPage - 4).toString()),
      state.currentPage - 3 > 0 && state.currentPage + 2 > state.numberOfPages && state.currentPage !== 4 && pageView(state, state.currentPage - 3, (state.currentPage - 3).toString()),
      state.currentPage - 2 > 0 && state.currentPage !== 3 && pageView(state, state.currentPage - 2, (state.currentPage - 2).toString()),
      state.currentPage - 1 > 0 && state.currentPage !== 2 && pageView(state, state.currentPage - 1, (state.currentPage - 1).toString()),
      ["span.current-page", state.currentPage.toString()],
      state.currentPage + 1 <= state.numberOfPages && pageView(state, state.currentPage + 1, (state.currentPage + 1).toString()),
      state.currentPage + 2 <= state.numberOfPages && pageView(state, state.currentPage + 2, (state.currentPage + 2).toString()),
      state.currentPage + 3 <= state.numberOfPages && state.currentPage - 4 < 4 && state.currentPage < 4 && pageView(state, state.currentPage + 3, (state.currentPage + 3).toString()),
      state.currentPage + 4 <= state.numberOfPages && state.currentPage - 4 < 4 && state.currentPage < 3 && pageView(state, state.currentPage + 4, (state.currentPage + 4).toString()),
      ["span.caption", tr("pagination.of", { total: state.numberOfPages })]
    ]],
    state.numberOfPages > 1 && state.numberOfPages - state.currentPage !== 0 && pageView(state, state.currentPage + 1, [
      ["span.next-page-link-text", tr("pagination.nextPage")],
      ["i.icon.icon-chevron-right"]
    ], "next-page-link")
  ]];
}
function pageView(state, page, inner, className = "") {
  return ["a", {
    href: router.getRouteUrl(state.routeName, __spreadProps(__spreadValues({}, state.routeParams), { page })),
    className: className && className
  }, inner];
}
init_preact_shim();
init_preact_shim();
var flash_message_default = ".flash-message-container {\n    position: fixed;\n    top: 2em;\n    right: 2em;\n    display: flex;\n    flex-direction: column;\n    z-index: 2147483647;\n}\n\n.flash-message {\n    display: flex;\n    backdrop-filter: blur(3px);\n    margin-bottom: 1em;\n    cursor: pointer;\n    min-height: 3.5em;\n    box-shadow: rgba(0, 0, 0, 0.04) 0 3px 5px;\n    border-radius: var(--radius);\n}\n\n.flash-message-container .content {\n    display: flex;\n    text-shadow: 0 0 0.125em rgba(255, 255, 255, 0.5);\n    width: 20em;\n    justify-content: center;\n    align-items: center;\n    padding: 1em;\n    border-radius: 0 var(--flash-radius) var(--flash-radius) 0;\n    color: #333841;\n}\n\n.flash-message-container .icon {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 4em;\n    border-radius: var(--flash-radius) 0 0 var(--flash-radius);\n}\n\n.flash-message-container .info-icon {\n    background: rgba(84, 178, 255, 0.3);\n}\n\n.flash-message-container .info-message {\n    border: 1px solid rgba(0, 146, 255, 0.4);\n}\n\n.flash-message-container .success-icon {\n    background: rgba(0, 248, 65, 0.3);\n}\n\n.flash-message-container .success-message {\n    border: 1px solid rgba(74, 194, 107, 0.4);\n}\n\n.flash-message-container .warning-icon {\n    background: rgba(255, 233, 30, 0.3);\n}\n\n.flash-message-container .warning-message {\n    border: 1px solid rgba(212, 167, 44, 0.4)\n}\n\n.flash-message-container .error-icon {\n    background: rgba(255, 94, 64, 0.3);\n}\n\n.flash-message-container .error-message {\n    border: 1px solid rgba(255, 129, 130, 0.4);\n}\n\n/* ----------------------------------------------\n * Generated by Animista on 2021-10-1 11:48:55\n * Licensed under FreeBSD License.\n * See http://animista.net/license for more info.\n * w: http://animista.net, t: @cssanimista\n * ---------------------------------------------- */\n\n/**\n * ----------------------------------------\n * animation bounce-right\n * ----------------------------------------\n */\n.flash-message-container .flash-message-show {\n    -webkit-animation: bounce-right 0.8s both;\n    animation: bounce-right 0.8s both;\n}\n\n@-webkit-keyframes bounce-right {\n    0% {\n        -webkit-transform: translateX(48px);\n        transform: translateX(48px);\n        -webkit-animation-timing-function: ease-in;\n        animation-timing-function: ease-in;\n        opacity: 1;\n    }\n    24% {\n        opacity: 1;\n    }\n    40% {\n        -webkit-transform: translateX(26px);\n        transform: translateX(26px);\n        -webkit-animation-timing-function: ease-in;\n        animation-timing-function: ease-in;\n    }\n    65% {\n        -webkit-transform: translateX(13px);\n        transform: translateX(13px);\n        -webkit-animation-timing-function: ease-in;\n        animation-timing-function: ease-in;\n    }\n    82% {\n        -webkit-transform: translateX(6.5px);\n        transform: translateX(6.5px);\n        -webkit-animation-timing-function: ease-in;\n        animation-timing-function: ease-in;\n    }\n    93% {\n        -webkit-transform: translateX(4px);\n        transform: translateX(4px);\n        -webkit-animation-timing-function: ease-in;\n        animation-timing-function: ease-in;\n    }\n    25%,\n    55%,\n    75%,\n    87%,\n    98% {\n        -webkit-transform: translateX(0px);\n        transform: translateX(0px);\n        -webkit-animation-timing-function: ease-out;\n        animation-timing-function: ease-out;\n    }\n    100% {\n        -webkit-transform: translateX(0px);\n        transform: translateX(0px);\n        -webkit-animation-timing-function: ease-out;\n        animation-timing-function: ease-out;\n        opacity: 1;\n    }\n}\n\n@keyframes bounce-right {\n    0% {\n        -webkit-transform: translateX(48px);\n        transform: translateX(48px);\n        -webkit-animation-timing-function: ease-in;\n        animation-timing-function: ease-in;\n        opacity: 1;\n    }\n    24% {\n        opacity: 1;\n    }\n    40% {\n        -webkit-transform: translateX(26px);\n        transform: translateX(26px);\n        -webkit-animation-timing-function: ease-in;\n        animation-timing-function: ease-in;\n    }\n    65% {\n        -webkit-transform: translateX(13px);\n        transform: translateX(13px);\n        -webkit-animation-timing-function: ease-in;\n        animation-timing-function: ease-in;\n    }\n    82% {\n        -webkit-transform: translateX(6.5px);\n        transform: translateX(6.5px);\n        -webkit-animation-timing-function: ease-in;\n        animation-timing-function: ease-in;\n    }\n    93% {\n        -webkit-transform: translateX(4px);\n        transform: translateX(4px);\n        -webkit-animation-timing-function: ease-in;\n        animation-timing-function: ease-in;\n    }\n    25%,\n    55%,\n    75%,\n    87%,\n    98% {\n        -webkit-transform: translateX(0px);\n        transform: translateX(0px);\n        -webkit-animation-timing-function: ease-out;\n        animation-timing-function: ease-out;\n    }\n    100% {\n        -webkit-transform: translateX(0px);\n        transform: translateX(0px);\n        -webkit-animation-timing-function: ease-out;\n        animation-timing-function: ease-out;\n        opacity: 1;\n    }\n}\n\n/**\n * ----------------------------------------\n * animation slide-out-blurred-right\n * ----------------------------------------\n */\n.flash-message-container .flash-message-hide {\n    -webkit-animation: slide-out-blurred-right 0.45s cubic-bezier(0.755, 0.050, 0.855, 0.060) both;\n    animation: slide-out-blurred-right 0.45s cubic-bezier(0.755, 0.050, 0.855, 0.060) both;\n}\n\n@-webkit-keyframes slide-out-blurred-right {\n    0% {\n        -webkit-transform: translateX(0) scaleY(1) scaleX(1);\n        transform: translateX(0) scaleY(1) scaleX(1);\n        -webkit-transform-origin: 50% 50%;\n        transform-origin: 50% 50%;\n        -webkit-filter: blur(0);\n        filter: blur(0);\n        opacity: 1;\n    }\n    100% {\n        -webkit-transform: translateX(1000px) scaleX(2) scaleY(0.2);\n        transform: translateX(1000px) scaleX(2) scaleY(0.2);\n        -webkit-transform-origin: 0 50%;\n        transform-origin: 0 50%;\n        -webkit-filter: blur(40px);\n        filter: blur(40px);\n        opacity: 0;\n    }\n}\n\n@keyframes slide-out-blurred-right {\n    0% {\n        -webkit-transform: translateX(0) scaleY(1) scaleX(1);\n        transform: translateX(0) scaleY(1) scaleX(1);\n        -webkit-transform-origin: 50% 50%;\n        transform-origin: 50% 50%;\n        -webkit-filter: blur(0);\n        filter: blur(0);\n        opacity: 1;\n    }\n    100% {\n        -webkit-transform: translateX(1000px) scaleX(2) scaleY(0.2);\n        transform: translateX(1000px) scaleX(2) scaleY(0.2);\n        -webkit-transform-origin: 0 50%;\n        transform-origin: 0 50%;\n        -webkit-filter: blur(40px);\n        filter: blur(40px);\n        opacity: 0;\n    }\n}\n";
var icons = {
  info: `<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" fill="var(--flash-info-color)" /><path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" fill="var(--flash-info-color)" />`,
  success: `<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" fill="var(--flash-success-color)" /><path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" fill="var(--flash-success-color)" />`,
  warning: `<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" fill="var(--flash-warning-color)" /><path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" fill="var(--flash-warning-color)" />`,
  error: `<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" fill="var(--flash-warning-color)" /><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" fill="var(--flash-warning-color)" />`
};
var isStyleFileAdded = false;
function addStyleFile() {
  const styleElement = document.createElement("style");
  styleElement.innerHTML = flash_message_default;
  document.head.appendChild(styleElement);
  isStyleFileAdded = true;
}
function manageMessageContainer(withAction) {
  if (!document.querySelector(".flash-message-container") && !withAction) {
    const messageContainer2 = document.createElement("div");
    messageContainer2.classList.add("flash-message-container");
    document.body.appendChild(messageContainer2);
    return;
  }
  const messageContainer = document.querySelector(".flash-message-container");
  if (messageContainer && !messageContainer.hasChildNodes()) {
    messageContainer.remove();
  }
}
function displayFlashMessage(flashMessage2) {
  manageMessageContainer();
  const messageContainer = document.querySelector(".flash-message-container");
  messageContainer == null ? void 0 : messageContainer.appendChild(flashMessage2);
}
function flashMessage(message, level) {
  var _a2, _b;
  if (typeof message !== "string" || level && typeof level !== "string") {
    throw new Error("The passed parameters are not strings");
  }
  if (!isStyleFileAdded && ((_a2 = window.flashMessage) == null ? void 0 : _a2.defaultStyles) !== false) {
    addStyleFile();
  }
  const item = document.createElement("div");
  const levelIcon = ((_b = window.flashMessage) == null ? void 0 : _b.levelIcon) === false ? "" : `  <div class="icon ${level}-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width = "1.5rem" height="1.5rem" viewBox="0 0 16 16">
                    ${icons[level]}
                </svg>
            </div>`;
  item.innerHTML = `<div class= "flash-message flash-message-show ${level}-message">
        ${levelIcon}
        <div class="content">${message}</div>
    </div>`;
  const flashMessage2 = item.firstChild;
  flashMessage2.onclick = () => {
    flashMessage2.classList.add("flash-message-hide");
    setTimeout(() => {
      flashMessage2.remove();
      manageMessageContainer(true);
    }, 300);
  };
  setTimeout(() => {
    flashMessage2.classList.add("flash-message-hide");
    setTimeout(() => {
      flashMessage2.remove();
      manageMessageContainer(true);
    }, 300);
  }, 1e4);
  displayFlashMessage(flashMessage2);
}
((flashMessage2) => {
  function info(message) {
    return flashMessage2(message, "info");
  }
  flashMessage2.info = info;
  function success(message) {
    return flashMessage2(message, "success");
  }
  flashMessage2.success = success;
  function warning(message) {
    return flashMessage2(message, "warning");
  }
  flashMessage2.warning = warning;
  function error(message) {
    return flashMessage2(message, "error");
  }
  flashMessage2.error = error;
  function disableDefaultStyles() {
    window.flashMessage = __spreadProps(__spreadValues({}, window.flashMessage || {}), {
      defaultStyles: false
    });
  }
  flashMessage2.disableDefaultStyles = disableDefaultStyles;
  function disableLevelIcon() {
    window.flashMessage = __spreadProps(__spreadValues({}, window.flashMessage || {}), {
      levelIcon: false
    });
  }
  flashMessage2.disableLevelIcon = disableLevelIcon;
})(flashMessage || (flashMessage = {}));
var import_ts_pattern = __toESM(require_lib());
var sw_select_default = "* {\n    font: inherit;\n    color: inherit;\n}\n\n.sw-select {\n    position: relative;\n    box-sizing: border-box;\n}\n\n.sw-select.disabled {\n    cursor: not-allowed;\n}\n\n.sw-select label {\n    font-weight: var(--label-font-weight);\n    position: absolute;\n    top: calc(-1.4em - var(--label-distance));\n    font-size: var(--label-font-size);\n    left: 0;\n    cursor: text;\n}\n\n.sw-select .button {\n    display: block;\n    box-sizing: border-box;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    background-color: var(--bg-color);\n    border: none;\n    text-align: left;\n    font-size: 1em;\n    width: 100%;\n    cursor: pointer;\n    padding: var(--padding);\n    border-color: var(--border-color);\n    border-width: var(--border-width, 0 0 0.0625em 0);\n    border-radius: var(--border-radius, 0.25em);\n    border-style: solid;\n    line-height: 1em;\n}\n\n.sw-select.disabled .button {\n    cursor: not-allowed;\n}\n\n.sw-select button:hover,\n.sw-select button:focus,\n.sw-select button:focus-visible {\n    outline: none;\n    border-bottom-color: var(--border-color);\n    box-shadow: 0 0.0625em 0 0 var(--border-color);\n}\n\n.sw-select .dropdown {\n    display: none;\n    margin-top: .4em;\n    width: var(--dropdown-width, 19.5em);\n    position: absolute;\n    border: 1px solid var(--border-color);\n    z-index: 1;\n    background: var(--dropdown-bg-color, var(--bg-color));\n    border-radius: var(--border-radius, 0.25em);\n}\n\n.sw-select .dropdown input {\n    padding: .4em;\n    margin: .4em;\n}\n\n.sw-select .results {\n    display: flex;\n    flex-direction: column;\n    max-height: 12.5em;\n    overflow: auto;\n    padding: 0.6em 0;\n    gap: var(--results-gap);\n}\n\n.sw-select .results > * {\n    padding: 0 .4em;\n    margin: 0 .4em;\n}\n\n.sw-select .option-hover,\n.sw-select .option:hover {\n    cursor: pointer;\n    background-color: var(--hover-bg-color);\n    color: var(--hover-fg-color);\n}\n\n.sw-select .show {\n    display: flex;\n    flex-direction: column;\n}\n\n.sw-select .show-above {\n    bottom: 3.5em;\n}\n\n\n.sw-select .input {\n    font-size: 1em;\n    outline: 0;\n    border: 0;\n    border-bottom: 0.0625em solid var(--border-color);\n    background: var(--input-bg-color, var(--bg-color));\n}\n\n.sw-select input:hover,\n.sw-select input:focus,\n.sw-select input:focus-visible {\n    outline: none;\n    border-bottom-color: var(--border-color);\n    box-shadow: 0 0.0625em 0 0 var(--border-color);\n}\n";
component({
  tagName: "sw-select",
  propTypes: {
    config: Object
  },
  shadow: true,
  debug: false,
  view: view3,
  attributeChangeFactory: (name, value) => ["AttributeChange", name, value],
  willMount(cmp, dispatch) {
    cmp.closeSelect = (event) => {
      if (event.target !== cmp.ref.getRootNode().host) {
        dispatch("CloseSelect");
      }
    };
    document.addEventListener("mousedown", cmp.closeSelect);
  },
  willUnmount(cmp) {
    document.removeEventListener("mousedown", cmp.closeSelect);
  },
  init() {
    return [{
      minimumCharLengthTrigger: 2,
      isLoading: false,
      displayedOptions: [],
      phrase: "",
      placeholder: ""
    }, null];
  },
  update(state, msg2) {
    return (0, import_ts_pattern.match)([state, msg2]).with([import_ts_pattern.__, ["AttributeChange", "config", (0, import_ts_pattern.select)()]], (config) => {
      var _a2;
      return [
        __spreadProps(__spreadValues({}, config), {
          label: config.label || config.name,
          isDropdownVisible: false,
          shouldDisplayAbove: false,
          displayedOptions: (_a2 = config.options) != null ? _a2 : [],
          showLabel: config.showLabel && config.showLabel !== "false",
          disabled: config.disabled && config.disabled !== "false",
          placeholder: config.placeholder
        }),
        null
      ];
    }).with([import_ts_pattern.__, ["AttributeChange", import_ts_pattern.__, import_ts_pattern.__]], () => [state, null]).with([import_ts_pattern.__, "OpenSelect"], () => [
      __spreadProps(__spreadValues({}, state), { isDropdownVisible: true, isLoading: false }),
      focus(".input")
    ]).with([import_ts_pattern.__, ["KeyboardMove", "Escape"]], () => [__spreadProps(__spreadValues({}, state), { isDropdownVisible: false }), null]).with([import_ts_pattern.__, ["KeyboardMove", import_ts_pattern.__]], () => [state, null]).with([import_ts_pattern.__, "CloseSelect"], () => [
      __spreadProps(__spreadValues({}, state), { isDropdownVisible: false, isLoading: false }),
      null
    ]).with([import_ts_pattern.__, "ToggleSelect"], () => [
      __spreadProps(__spreadValues({}, state), { isDropdownVisible: !state.isDropdownVisible, isLoading: false }),
      focus(".input")
    ]).with([import_ts_pattern.__, ["Pick", (0, import_ts_pattern.select)()]], (option) => [
      __spreadProps(__spreadValues({}, state), { isLoading: false, isDropdownVisible: false, selected: option }),
      new CustomEvent("update", {
        detail: {
          name: state.name,
          value: option
        },
        bubbles: true
      })
    ]).with([import_ts_pattern.__, ["SearchSuccess", (0, import_ts_pattern.select)()]], (options) => [
      __spreadProps(__spreadValues({}, state), { isLoading: true, displayedOptions: options }),
      null
    ]).with([import_ts_pattern.__, "SearchFailure"], () => {
      flashMessage(tr("select.searchFailed"), "error");
      return [__spreadProps(__spreadValues({}, state), { isLoading: false }), null];
    }).with([{ sourceFn: (0, import_ts_pattern.not)(import_ts_pattern.__.nullish) }, ["SearchRequest", (0, import_ts_pattern.select)()]], (phrase) => {
      if (state.minimumCharLengthTrigger > phrase.length) {
        return [__spreadProps(__spreadValues({}, state), { phrase }), null];
      }
      return [__spreadProps(__spreadValues({}, state), { phrase }), delaySearch(phrase)];
    }).with([import_ts_pattern.__, ["SearchRequest", (0, import_ts_pattern.select)()]], (phrase) => {
      var _a2, _b;
      if (state.minimumCharLengthTrigger > phrase.length) {
        return [__spreadProps(__spreadValues({}, state), { phrase }), null];
      }
      return [
        __spreadProps(__spreadValues({}, state), {
          phrase,
          displayedOptions: (_b = (_a2 = state.options) == null ? void 0 : _a2.filter((o22) => o22.label.includes(phrase))) != null ? _b : []
        }),
        null
      ];
    }).with([import_ts_pattern.__, ["DelaySearch", (0, import_ts_pattern.select)()]], (phrase) => {
      if (state.phrase === phrase) {
        return [__spreadProps(__spreadValues({}, state), { isLoading: true }), search(state)];
      } else {
        return [state, null];
      }
    }).run();
  }
});
function delaySearch(phrase) {
  return new Promise((r3) => setTimeout(() => r3(["DelaySearch", phrase])));
}
async function search(state) {
  const sourceFn = state.sourceFn;
  try {
    const options = await sourceFn(state.phrase);
    return ["SearchSuccess", options];
  } catch (err) {
    console.error("search failed", err);
    return "SearchFailure";
  }
}
function view3(state) {
  var _a2, _b, _c;
  const title = ((_a2 = state.selected) == null ? void 0 : _a2.label) ? trMaybe((_b = state.selected) == null ? void 0 : _b.label, state.selected) : state.placeholder || tr("select.prompt");
  return [".sw-select", { className: state.disabled ? "disabled" : "" }, [
    ["style", sw_select_default],
    ["span.button", {
      onclick: "ToggleSelect",
      title
    }, title],
    !state.disabled && [
      ".dropdown",
      {
        className: [
          state.isDropdownVisible ? "show" : "",
          state.shouldDisplayAbove ? "show-above" : ""
        ].join(" ")
      },
      [
        ["input.input", {
          type: "text",
          value: state.phrase,
          placeholder: state.minimumCharLengthTrigger > 0 ? tr("select.placeholder", { minimum: state.minimumCharLengthTrigger }) : void 0,
          onkeyup: (event) => ["KeyboardMove", event.code],
          oninput: (event) => {
            var _a3;
            return ["SearchRequest", (_a3 = event == null ? void 0 : event.target) == null ? void 0 : _a3.value];
          }
        }],
        [
          ".results",
          ((_c = state.displayedOptions) != null ? _c : []).map((option) => ["span.option", {
            onclick: ["Pick", option]
          }, trMaybe(option.label, option)])
        ]
      ]
    ],
    state.showLabel && ["label", { htmlFor: state.name }, state.label]
  ]];
}
function trMaybe(item, translationOptions) {
  if (typeof item === "string") {
    return item;
  }
  return tr(item, translationOptions);
}
init_preact_shim();
var import_ts_pattern2 = __toESM(require_lib());
var sw_switcher_default = "*, :before, :after {\n    box-sizing: border-box;\n    font: inherit;\n    color: inherit;\n    --switcher-hover-box-shadow: var(--switcher-hover-color) 0 0 0 1px;\n}\n\n[data-label-on] {\n    --data-label-on: attr(data-label-on);\n}\n\n[data-label-off] {\n    --data-label-off: attr(data-label-off);\n}\n\ninput:disabled {\n    cursor: not-allowed;\n}\n\n.input-wrapper {\n    position: relative;\n    display: flex;\n    flex-direction: column-reverse;\n}\n\n.switcher, .bullet-wrapper {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: var(--on-off-gap, 0);\n    appearance: none;\n    width: fit-content;\n    min-width: 3.5em;\n    min-height: 1.8em;\n    margin: 0;\n    border-radius: 100px;\n    border: none;\n    cursor: pointer;\n    background-color: var(--switcher-off-bg-color, lightgray);\n    transition: background-color ease 0.3s;\n}\n\n.switcher:hover {\n    box-shadow: var(--switcher-hover-color, transparent 0 0 0 0);\n}\n\n.bullet-wrapper {\n    position: absolute;\n    background: none;\n    pointer-events: none;\n}\n\n.switcher:before, .bullet-wrapper:before {\n    padding: 0 0 0 1em;\n    content: var(--data-label-on, var(--on-value));\n    color: var(--on-color, whitesmoke);\n    font-size: var(--on-off-font-size, .5em);\n    font-weight: var(--on-off-font-weight, 600);\n    visibility: hidden;\n}\n\n.bullet {\n    position: absolute;\n    left: 2px;\n    bottom: 2px;\n    width: calc(1.8em - 4px);\n    height: calc(1.8em - 4px);\n    border: var(--bullet-border, 1px solid #fbfbfb);\n    border-radius: 50%;\n    pointer-events: none;\n    z-index: 2;\n    background-color: var(--bullet-off-bg-color, #f3f3f3);\n    transition: all cubic-bezier(0.3, 1.5, 0.7, 1) 0.3s;\n}\n\n.switcher:after, .bullet-wrapper:after {\n    padding: 0 1em 0 0;\n    content: var(--data-label-off, var(--off-value));\n    color: var(--off-color, dimgray);\n    font-size: var(--on-off-font-size, .5em);\n    font-weight: var(--on-off-font-weight, 600);\n    visibility: visible;\n}\n\n.bullet-wrapper:before, .bullet-wrapper:after {\n    visibility: hidden;\n}\n\n.switcher:checked {\n    background-color: var(--switcher-on-bg-color, #02ce54);\n}\n\n.switcher:checked:before {\n    visibility: visible;\n}\n\n.switcher:checked:after {\n    visibility: hidden;\n}\n\n.switcher:checked ~ .bullet-wrapper .bullet {\n    background-color: var(--bullet-on-bg-color, #f3f3f3);\n    left: calc(100% - calc(1.8em - 4px) - 2px);\n}\n\nlabel {\n    margin-bottom: var(--label-distance);\n    font-weight: var(--label-font-weight);\n    font-size: .8em;\n    line-height: 1.2em;\n}\n";
var propTypes2 = {
  name: String,
  required: Boolean,
  label: String,
  disabled: Boolean,
  showLabel: Boolean,
  checked: Boolean,
  dataLabelOn: String,
  dataLabelOff: String
};
component({
  tagName: "sw-switcher",
  shadow: true,
  attributeChangeFactory: (name, value) => ["AttributeChange", name, value],
  propTypes: propTypes2,
  init() {
    return [{
      disabled: false,
      showLabel: true,
      required: false,
      name: "",
      label: "",
      checked: false,
      dataLabelOn: "",
      dataLabelOff: ""
    }, null];
  },
  update(state, msg2) {
    return (0, import_ts_pattern2.match)(msg2).with(["AttributeChange", (0, import_ts_pattern2.select)("name"), (0, import_ts_pattern2.select)("value")], ({ name, value }) => {
      if (propTypes2[name] === Boolean) {
        state[name] = value && value !== "false";
      } else if (propTypes2[name]) {
        state[name] = value.toString();
      }
      return [state, null];
    }).with(["Input", import_ts_pattern2.__, import_ts_pattern2.__], () => {
      state.checked = !state.checked;
      return [
        __spreadValues({}, state),
        new CustomEvent("update", {
          bubbles: true,
          detail: {
            name: state.name,
            value: state.checked,
            error: state.required && !state.checked ? "Field required" : ""
          }
        })
      ];
    }).exhaustive();
  },
  view: view4
});
function view4(state) {
  return [".sw-input.sw-switcher", [
    ["style", sw_switcher_default],
    [".input-wrapper", [
      ["input.switcher", {
        "data-label-on": state.dataLabelOn,
        "data-label-off": state.dataLabelOff,
        type: "checkbox",
        required: state.required,
        disabled: state.disabled,
        ariaLabelledby: state.label,
        checked: state.checked && state.checked,
        oninput: () => ["Input", import_ts_pattern2.__, import_ts_pattern2.__]
      }],
      [".bullet-wrapper", {
        "data-label-on": state.dataLabelOn,
        "data-label-off": state.dataLabelOff
      }, [
        [".bullet", ""]
      ]],
      state.showLabel && ["label", { htmlFor: state.name }, state.label]
    ]]
  ]];
}
init_preact_shim();
var import_ts_pattern3 = __toESM(require_lib());
var propTypes3 = {
  name: String,
  required: Boolean,
  label: String,
  disabled: Boolean,
  value: String,
  showLabel: Boolean,
  type: String
};
component({
  tagName: "sw-text-input",
  shadow: true,
  attributeChangeFactory: (name, value) => ["AttributeChange", name, value],
  propTypes: propTypes3,
  init() {
    return [{
      disabled: false,
      showLabel: true,
      required: false,
      value: "",
      name: "",
      label: "",
      type: "text"
    }, null];
  },
  update(state, msg2) {
    return (0, import_ts_pattern3.match)(msg2).with(["AttributeChange", "type", (0, import_ts_pattern3.select)()], (inputValue) => {
      state.type = ["text", "password", "email", "color", "search", "url", "tel"].includes(inputValue) ? inputValue : "text";
      return [state, msg2];
    }).with(["AttributeChange", (0, import_ts_pattern3.select)("name"), (0, import_ts_pattern3.select)("value")], ({ name, value }) => {
      if (propTypes3[name] === Boolean) {
        state[name] = value && value !== "false";
      } else if (propTypes3[name]) {
        state[name] = value.toString();
      }
      return [state, null];
    }).with(["Input", (0, import_ts_pattern3.select)("value"), (0, import_ts_pattern3.select)("validationMessage")], ({ value, validationMessage }) => [
      __spreadProps(__spreadValues({}, state), { value }),
      new CustomEvent("update", {
        bubbles: true,
        detail: {
          name: state.name,
          value,
          error: validationMessage
        }
      })
    ]).exhaustive();
  },
  view: view5
});
function view5(state) {
  return v22(".sw-input.sw-text-input", v22.style(sw_input_style_default), v22(".input-wrapper", v22.input({
    type: state.type,
    required: state.required,
    placeholder: " ",
    disabled: state.disabled,
    name: state.name,
    value: state.value,
    ariaLabelledby: state.label,
    oninput: (event) => ["Input", event.target.value, event.target.validationMessage]
  }), state.showLabel && v22.label({ htmlFor: state.name }, state.label)));
}
init_preact_shim();
var import_ts_pattern4 = __toESM(require_lib());
var propTypes4 = {
  name: String,
  required: Boolean,
  label: String,
  disabled: Boolean,
  value: String,
  showLabel: Boolean,
  min: Number,
  max: Number,
  step: Number
};
component({
  tagName: "sw-number-input",
  shadow: true,
  attributeChangeFactory: (name, value) => ["AttributeChange", name, value],
  propTypes: propTypes4,
  init() {
    return [{
      disabled: false,
      showLabel: true,
      required: false,
      value: "",
      name: "",
      label: ""
    }, null];
  },
  update(state, msg2) {
    return (0, import_ts_pattern4.match)(msg2).with(["AttributeChange", (0, import_ts_pattern4.select)("name"), (0, import_ts_pattern4.select)("value")], ({ name, value }) => {
      if (propTypes4[name] === Boolean) {
        state[name] = value && value !== "false";
      } else if (propTypes4[name] === Number) {
        state[name] = 0 + value;
      } else if (propTypes4[name]) {
        state[name] = value.toString();
      }
      return [state, null];
    }).with(["Input", (0, import_ts_pattern4.select)("value"), (0, import_ts_pattern4.select)("validationMessage")], ({ value, validationMessage }) => [
      __spreadProps(__spreadValues({}, state), { value }),
      new CustomEvent("update", {
        bubbles: true,
        detail: {
          name: state.name,
          value,
          error: validationMessage
        }
      })
    ]).exhaustive();
  },
  view: view6
});
function view6(state) {
  var _a2, _b, _c;
  return [".sw-input.sw-text-input", [
    ["style", sw_input_style_default],
    [".input-wrapper", [
      ["input", {
        type: "number",
        required: state.required,
        placeholder: " ",
        disabled: state.disabled,
        value: state.value,
        min: (_a2 = state.min) != null ? _a2 : "",
        max: (_b = state.max) != null ? _b : "",
        step: (_c = state.step) != null ? _c : "",
        ariaLabelledby: state.label,
        oninput: (event) => ["Input", event.target.value, event.target.validationMessage]
      }],
      state.showLabel && ["label", { htmlFor: state.name }, state.label]
    ]]
  ]];
}
init_preact_shim();
var import_ts_pattern5 = __toESM(require_lib());
var sw_button_style_default = "*, ::before, ::after {\n    box-sizing: border-box;\n    font: inherit;\n    color: inherit;\n}\n\n:host {\n    cursor: pointer;\n}\n\n.button {\n    width: var(--button-width);\n    color: var(--fg-color);\n    background: var(--bg-color);\n    cursor: pointer;\n    font-size: var(--font-size, 1em);\n    border: var(--border, none);\n    border-radius: var(--border-radius, 0);\n    white-space: nowrap;\n    padding: var(--padding, 0);\n    text-decoration: none; \n    display: inline-block;\n    font-weight: var(--font-weight);\n}\n\n.button:hover {\n    background: var(--bg-hover-color, var(--bg-color));\n    color: var(--fg-hover-color, var(--fg-color));\n}\n\n.button:disabled,\n.button:disabled:hover {\n    background: var(--bd-disabled-color, var(--bg-color));\n    color: var(--fg-disabled-color, var(--fg-color));\n    cursor: not-allowed;\n    pointer-events: none;\n}\n\n.button:active {\n    background: var(--bg-active-color, var(--bg-color));\n    color: var(--fg-active-color, var(--fg-color));\n    box-shadow: 0 0 0.125em 0.0625em var(--bg-active-color);\n}\n";
component({
  tagName: "sw-button",
  shadow: true,
  debug: false,
  propTypes: {
    isDisabled: Boolean,
    href: String
  },
  attributeChangeFactory: (name, value) => ["AttributeChange", name, value],
  init() {
    return [{ isDisabled: false, children: "", href: "", msg: "" }, null];
  },
  update(state, msg2) {
    return (0, import_ts_pattern5.match)(msg2).with(["AttributeChange", "isDisabled", (0, import_ts_pattern5.select)()], (isDisabled) => [__spreadProps(__spreadValues({}, state), { isDisabled: !!isDisabled }), null]).with(["AttributeChange", "href", (0, import_ts_pattern5.select)()], (href) => [__spreadProps(__spreadValues({}, state), { href }), null]).with(["AttributeChange", "children", (0, import_ts_pattern5.select)()], (children) => [__spreadProps(__spreadValues({}, state), { children }), null]).with(["AttributeChange", import_ts_pattern5.__, import_ts_pattern5.__], () => [state, null]).exhaustive();
  },
  view(state) {
    return /* @__PURE__ */ v2(d2, null, /* @__PURE__ */ v2("style", null, " ", sw_button_style_default), !state.isDisabled && state.href ? /* @__PURE__ */ v2("a", {
      className: "button",
      href: state.href
    }, state.children) : /* @__PURE__ */ v2("button", {
      className: "button",
      type: "button",
      role: "button",
      disabled: state.isDisabled
    }, state.children));
  }
});
init_preact_shim();
var import_ts_pattern6 = __toESM(require_lib());
var propTypes5 = {
  value: String,
  disabled: Boolean,
  showLabel: Boolean
};
function attrToBool(attr) {
  return !!attr && attr !== "false";
}
component({
  tagName: "sw-markdown-input",
  shadow: true,
  attributeChangeFactory: (name, value) => ["AttributeChange", name, value],
  propTypes: propTypes5,
  init() {
    return [{
      disabled: false,
      value: "",
      placeholder: "",
      showLabel: true,
      name: Math.random().toString(36).slice(2)
    }, null];
  },
  update(state, msg2) {
    return (0, import_ts_pattern6.match)(msg2).with(["AttributeChange", "disabled", (0, import_ts_pattern6.select)()], (disabled) => [
      __spreadProps(__spreadValues({}, state), { disabled: attrToBool(disabled) }),
      null
    ]).with(["AttributeChange", "value", (0, import_ts_pattern6.select)()], (value) => [
      __spreadProps(__spreadValues({}, state), { value }),
      null
    ]).with(["AttributeChange", "placeholder", (0, import_ts_pattern6.select)()], (placeholder) => [
      __spreadProps(__spreadValues({}, state), { placeholder }),
      null
    ]).with(["AttributeChange", "showLabel", (0, import_ts_pattern6.select)()], (showLabel) => [
      __spreadProps(__spreadValues({}, state), { showLabel: attrToBool(showLabel) }),
      null
    ]).with(["AttributeChange", "name", (0, import_ts_pattern6.select)()], (name) => [
      __spreadProps(__spreadValues({}, state), { name }),
      null
    ]).with(["AttributeChange", import_ts_pattern6.__, import_ts_pattern6.__], () => [
      state,
      null
    ]).with(["Input", (0, import_ts_pattern6.select)()], (value) => [
      __spreadProps(__spreadValues({}, state), { value }),
      null
    ]).exhaustive();
  },
  view: view7
});
function view7(state) {
  return v22(".sw-markdown-editor.sw-input", v22.style(sw_input_style_default), v22(".input-wrapper", v22.textarea({
    type: "number",
    placeholder: " ",
    disabled: state.disabled,
    name: state.name,
    value: state.value,
    ariaLabelledby: state.placeholder,
    oninput: (event) => ["Input", event.target.value]
  }), state.showLabel && v22.label({ htmlFor: state.name }, state.placeholder)));
}
init_preact_shim();
var import_ts_pattern7 = __toESM(require_lib());
function msg(...args) {
  return args;
}
var propTypes6 = {
  id: String,
  disabled: Boolean,
  value: String,
  placeholder: String,
  suggestions: Array,
  class: String
};
component({
  tagName: "sw-type-ahead",
  shadow: false,
  debug: false,
  attributeChangeFactory: (name, value) => ["AttributeChange", name, value],
  propTypes: propTypes6,
  init() {
    return [{
      disabled: false,
      value: "",
      name: "",
      placeholder: "",
      suggestions: [],
      className: ""
    }, null];
  },
  update(state, incomingMsg) {
    return (0, import_ts_pattern7.match)(incomingMsg).with(["AttributeChange", "disabled", (0, import_ts_pattern7.select)()], (disabled) => {
      return [__spreadProps(__spreadValues({}, state), { disabled: !!disabled && disabled !== "false" }), null];
    }).with(["AttributeChange", "name", (0, import_ts_pattern7.select)()], (name) => {
      return [__spreadProps(__spreadValues({}, state), { name: name.toString() }), null];
    }).with(["AttributeChange", "value", (0, import_ts_pattern7.select)()], (value) => {
      return [__spreadProps(__spreadValues({}, state), { value: value.toString() }), null];
    }).with(["AttributeChange", "class", (0, import_ts_pattern7.select)()], (className) => {
      return [__spreadProps(__spreadValues({}, state), { className: className.toString() }), null];
    }).with(["AttributeChange", "placeholder", (0, import_ts_pattern7.select)()], (placeholder) => {
      return [__spreadProps(__spreadValues({}, state), { placeholder: placeholder.toString() }), null];
    }).with(["AttributeChange", "suggestions", (0, import_ts_pattern7.select)()], (suggestions) => {
      return [__spreadProps(__spreadValues({}, state), { suggestions }), null];
    }).with(["AttributeChange", import_ts_pattern7.__, import_ts_pattern7.__], () => [state, null]).with(["Input", (0, import_ts_pattern7.select)()], (value) => [
      __spreadProps(__spreadValues({}, state), { value }),
      new CustomEvent("update", {
        bubbles: true,
        detail: value
      })
    ]).with(["HideSuggestionsDeleyed"], () => [
      __spreadProps(__spreadValues({}, state), { suggestions: [] }),
      null
    ]).with(["HideSuggestions"], () => [
      state,
      waitAndDispatch(msg("HideSuggestionsDeleyed"), 500)
    ]).with(["SuggestionChosen", (0, import_ts_pattern7.select)()], (suggestion) => chooseSuggestion(state, suggestion)).with(["KeyDown", (0, import_ts_pattern7.select)()], (event) => {
      if (event.key === "ArrowDown") {
        if (!state.selectedSuggestion) {
          state.selectedSuggestion = state.suggestions[0];
        } else {
          const index = state.suggestions.findIndex((s3) => s3 === state.selectedSuggestion);
          const next = state.suggestions[index + 1];
          state.selectedSuggestion = next || state.selectedSuggestion;
        }
        return [state, null];
      }
      if (event.key === "ArrowUp") {
        if (!state.selectedSuggestion) {
          state.selectedSuggestion = state.suggestions[state.suggestions.length - 1];
        } else {
          const index = state.suggestions.findIndex((s3) => s3 === state.selectedSuggestion);
          const next = state.suggestions[index - 1];
          state.selectedSuggestion = next || state.selectedSuggestion;
        }
        return [state, null];
      }
      if (event.key === "Enter" && state.selectedSuggestion && state.suggestions.length > 0) {
        return chooseSuggestion(state, state.selectedSuggestion);
      }
      return [state, null];
    }).exhaustive();
  },
  view: view8
});
async function waitAndDispatch(msg2, delay) {
  await new Promise((resolve) => setTimeout(resolve, delay));
  return msg2;
}
function chooseSuggestion(state, suggestion) {
  return [
    __spreadProps(__spreadValues({}, state), {
      value: suggestion.value,
      suggestions: [],
      selectedSuggestion: void 0
    }),
    new CustomEvent("update", {
      bubbles: true,
      detail: suggestion.value
    })
  ];
}
function view8(state) {
  return v22.div({
    className: "sw-type-ahead " + state.className
  }, v22.input({
    type: "text",
    className: state.className,
    placeholder: state.placeholder,
    disabled: state.disabled,
    name: state.name,
    id: state.name,
    autocomplete: "off",
    value: state.value,
    oninput: (event) => msg("Input", event.target.value),
    onkeydown: (event) => {
      if (event.key === "Enter" && state.suggestions.length > 0) {
        event.preventDefault();
        event.stopPropagation();
      }
      return msg("KeyDown", event);
    },
    onblur: msg("HideSuggestions")
  }), !!state.suggestions && state.suggestions.length > 0 && v22("ul.suggestions", ...state.suggestions.map((suggestion) => v22.li({
    onClick: msg("SuggestionChosen", suggestion),
    className: state.selectedSuggestion === suggestion ? "active" : ""
  }, suggestion.suggestion))));
}
init_preact_shim();
var modal_style_default = ".modal-backdrop {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1;\n    background-color: black;\n    opacity: 0.5;\n}\n\n.modal-wrapper {\n    position: fixed;\n    top: 12%;\n    left: 50%;\n    transform: translate(-50%);\n    z-index: 10;\n}\n\n.modal-content {\n    background: var(--background-color);\n    border-radius: var(--radius);\n    box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;\n}\n\n.modal-content > :not(:last-child) {\n    border-bottom: 1px dotted lightgray;\n}\n\n.modal-large {\n    width: 62em;\n}\n\n.modal-small {\n    width: 30em;\n}\n\n.modal-body,\n.modal-footer {\n    padding: 2em;\n}\n\n.modal-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.modal-header-content {\n    padding: 2em;\n}\n\n.modal-header-icon {\n    padding: 2em;\n    cursor: pointer;\n}\n\n.modal-body-content {\n    max-height: 20em;\n    overflow-y: auto;\n    padding: 1em;\n}\n\n.modal-footer {\n    display: flex;\n    justify-content: flex-end;\n}\n\n.modal-footer-content > :not(:last-child) {\n    margin-right: 1em;\n}\n\n.modal-prevent {\n    pointer-events: none;\n    filter: blur(1px) brightness(95%);\n}\n\nbody > :not(.modal-wrapper, .modal-backdrop) {\n    filter: blur(1px);\n}\n\n/* ----------------------------------------------\n * Generated by Animista on 2021-10-8 15:29:47\n * Licensed under FreeBSD License.\n * See http://animista.net/license for more info.\n * w: http://animista.net, t: @cssanimista\n * ---------------------------------------------- */\n\n/**\n * ----------------------------------------\n * animation swing-in-top-fwd\n * ----------------------------------------\n */\n.swing-in-top-fwd {\n    -webkit-animation: swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;\n    animation: swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;\n}\n\n@-webkit-keyframes swing-in-top-fwd {\n    0% {\n        -webkit-transform: rotateX(-100deg);\n        transform: rotateX(-100deg);\n        -webkit-transform-origin: top;\n        transform-origin: top;\n        opacity: 0;\n    }\n    100% {\n        -webkit-transform: rotateX(0deg);\n        transform: rotateX(0deg);\n        -webkit-transform-origin: top;\n        transform-origin: top;\n        opacity: 1;\n    }\n}\n\n@keyframes swing-in-top-fwd {\n    0% {\n        -webkit-transform: rotateX(-100deg);\n        transform: rotateX(-100deg);\n        -webkit-transform-origin: top;\n        transform-origin: top;\n        opacity: 0;\n    }\n    100% {\n        -webkit-transform: rotateX(0deg);\n        transform: rotateX(0deg);\n        -webkit-transform-origin: top;\n        transform-origin: top;\n        opacity: 1;\n    }\n}\n\n/* ----------------------------------------------\n * Generated by Animista on 2021-10-11 12:56:33\n * Licensed under FreeBSD License.\n * See http://animista.net/license for more info.\n * w: http://animista.net, t: @cssanimista\n * ---------------------------------------------- */\n\n/**\n * ----------------------------------------\n * animation slide-out-top\n * ----------------------------------------\n */\n.slide-out-top {\n    -webkit-animation: slide-out-top 0.1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;\n    animation: slide-out-top 0.1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;\n}\n\n@-webkit-keyframes slide-out-top {\n    0% {\n        -webkit-transform: translateY(0);\n        transform: translateY(0);\n        opacity: 1;\n    }\n    100% {\n        -webkit-transform: translateY(-1000px);\n        transform: translateY(-1000px);\n        opacity: 0;\n    }\n}\n\n@keyframes slide-out-top {\n    0% {\n        -webkit-transform: translateY(0);\n        transform: translateY(0);\n        opacity: 1;\n    }\n    100% {\n        -webkit-transform: translateY(-1000px);\n        transform: translateY(-1000px);\n        opacity: 0;\n    }\n}\n";
init_preact_module();
var import_escape = __toESM(require_escape());
var counter = 0;
function modal({ header, body, footer, large }) {
  return new Promise((resolve, reject) => {
    if (!header && !body && !footer && !large) {
      const message = "Missing modal parameters";
      reject(message);
      throw new Error(message);
    }
    const id = counter++;
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
          modalContent == null ? void 0 : modalContent.classList.add("slide-out-top");
          setTimeout(() => {
            modal3.remove();
            counter--;
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
((modal2) => {
  function alert({ title, text, buttonLabel }) {
    return modal2({
      header: title,
      body: text,
      footer: (close) => /* @__PURE__ */ v2("button", {
        class: "button button-primary",
        onClick: () => close(true)
      }, buttonLabel || tr("general.ok")),
      large: false
    });
  }
  modal2.alert = alert;
  function prompt({ title, text, placeholder, initialValue }) {
    let content;
    return modal2({
      header: title,
      body: () => /* @__PURE__ */ v2(d2, null, /* @__PURE__ */ v2("p", null, text), /* @__PURE__ */ v2("input", {
        type: "text",
        required: true,
        value: initialValue,
        placeholder,
        onInput: (event) => content = event.target.value
      })),
      footer: (close) => /* @__PURE__ */ v2("button", {
        class: "button button-primary",
        onClick: () => close(content)
      }, tr("general.submit")),
      large: false
    });
  }
  modal2.prompt = prompt;
  function confirm({ title, text, okLabel, cancelLabel }) {
    return modal2({
      header: title,
      body: text,
      footer: (close) => /* @__PURE__ */ v2(d2, null, /* @__PURE__ */ v2("button", {
        class: "button button-tertiary",
        onClick: () => close(false)
      }, cancelLabel || tr("general.cancel")), /* @__PURE__ */ v2("button", {
        class: "button button-primary",
        onClick: () => close(true)
      }, okLabel || tr("general.ok"))),
      large: false
    });
  }
  modal2.confirm = confirm;
  function disableDefaultStyles() {
    window.modal = {
      defaultStyles: false
    };
  }
  modal2.disableDefaultStyles = disableDefaultStyles;
})(modal || (modal = {}));
function manageStyle() {
  var _a2;
  if (((_a2 = window.modal) == null ? void 0 : _a2.defaultStyles) === false) {
    return;
  }
  const style = document.querySelector("#style-modal");
  if (!style) {
    const style2 = document.createElement("style");
    style2.innerHTML = modal_style_default;
    style2.id = "style-modal";
    document.head.appendChild(style2);
    return;
  }
  const modalContainer = document.querySelector(".modal-backdrop");
  if (!modalContainer)
    document.head.removeChild(style);
}
function managePrevent() {
  const modals = document.querySelectorAll(".modal-wrapper");
  modals == null ? void 0 : modals.forEach((modal2) => {
    if (modal2.id === `modal-${counter - 1}`)
      modal2.classList.remove("modal-prevent");
    else
      modal2.classList.add("modal-prevent");
  });
}
function manageModalContainer() {
  const modalContainer = document.querySelector(".modal-backdrop");
  if (!modalContainer) {
    const modalContainer2 = document.createElement("div");
    modalContainer2.classList.add("modal-backdrop");
    document.body.appendChild(modalContainer2);
    managePrevent();
    return;
  }
  if (counter === 0)
    modalContainer.remove();
  managePrevent();
  manageStyle();
}
function convertToElement(toConvert, modal2, close, selector) {
  let item;
  if (typeof toConvert === "string") {
    item = toConvert;
  } else if (typeof toConvert === "function") {
    item = toConvert(close, 0);
  }
  const element = modal2.querySelector(`.${selector}-content`);
  if (!element) {
    return null;
  }
  if (typeof item === "string") {
    element.innerHTML = (0, import_escape.default)(item);
    return null;
  }
  if (item instanceof HTMLElement) {
    element.appendChild(item);
    return null;
  }
  S(item ? item : toConvert, element);
}
var dates_exports = {};
__export(dates_exports, {
  formatDate: () => formatDate,
  formatDateTime: () => formatDateTime
});
init_preact_shim();
function formatDate(timestamp) {
  const date = new Date(timestamp);
  const day = prefixForConstSize(date.getDate().toString(), 2, "0");
  const month = prefixForConstSize((date.getMonth() + 1).toString(), 2, "0");
  const year = date.getFullYear().toString();
  return `${day}.${month}.${year}`;
}
function formatDateTime(timestamp) {
  const date = new Date(timestamp);
  const day = date.getDate();
  const month = tr("month." + (date.getMonth() + 1));
  const year = date.getFullYear();
  const hours = prefixForConstSize(date.getHours().toString(), 2, "0");
  const minutes = prefixForConstSize(date.getMinutes().toString(), 2, "0");
  const seconds = prefixForConstSize(date.getSeconds().toString(), 2, "0");
  return `${day} ${month} ${year}, ${hours}:${minutes}:${seconds}`;
}
var areElementsRegistered = !!customElements.get("sw-datetime-input");
if (!areElementsRegistered) {
  preact_custom_element_esm_default(SwDatetimeInput, "sw-datetime-input", ["name", "required", "placeholder", "disabled", "value", "step", "showLabel"], { shadow: true });
}

// index.tsx
state_mgr_exports.component({
  tagName: "my-resizer",
  willMount(cmp, dispatch) {
    cmp.onResize = function() {
      dispatch({
        type: "resize",
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    window.addEventListener("resize", cmp.onResize);
  },
  willUnmount(cmp) {
    window.removeEventListener("resize", cmp.onResize);
  },
  init() {
    return [
      { width: 100, height: 100 },
      null
    ];
  },
  update: update2,
  view: view9
});
function update2(state, msg2) {
  if (msg2.type === "resize") {
    state.width = msg2.width / 2;
    state.height = msg2.height / 2;
    return [state, null];
  }
  return [state, null];
}
function view9(state) {
  return /* @__PURE__ */ v("div", {
    style: getStyles(state)
  });
}
function getStyles(state) {
  return `
background-color: red;
width: ${state.width}px;
height: ${state.height}px;
    `;
}
//# sourceMappingURL=index.compiled.js.map
