! function (t, e) {
  "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e(require, exports, module) : t.Tether = e()
}(this, function (t, e, o) {
  "use strict";

  function i(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function n(t) {
    var e = t.getBoundingClientRect(),
      o = {};
    for (var i in e) o[i] = e[i];
    if (t.ownerDocument !== document) {
      var r = t.ownerDocument.defaultView.frameElement;
      if (r) {
        var s = n(r);
        o.top += s.top, o.bottom += s.top, o.left += s.left, o.right += s.left
      }
    }
    return o
  }

  function r(t) {
    var e = getComputedStyle(t) || {},
      o = e.position,
      i = [];
    if ("fixed" === o) return [t];
    for (var n = t;
      (n = n.parentNode) && n && 1 === n.nodeType;) {
      var r = void 0;
      try {
        r = getComputedStyle(n)
      } catch (s) {}
      if ("undefined" == typeof r || null === r) return i.push(n), i;
      var a = r,
        f = a.overflow,
        l = a.overflowX,
        h = a.overflowY;
      /(auto|scroll)/.test(f + h + l) && ("absolute" !== o || ["relative", "absolute", "fixed"].indexOf(r.position) >= 0) && i.push(n)
    }
    return i.push(t.ownerDocument.body), t.ownerDocument !== document && i.push(t.ownerDocument.defaultView), i
  }

  function s() {
    A && document.body.removeChild(A), A = null
  }

  function a(t) {
    var e = void 0;
    t === document ? (e = document, t = document.documentElement) : e = t.ownerDocument;
    var o = e.documentElement,
      i = n(t),
      r = P();
    return i.top -= r.top, i.left -= r.left, "undefined" == typeof i.width && (i.width = document.body.scrollWidth - i.left - i.right), "undefined" == typeof i.height && (i.height = document.body.scrollHeight - i.top - i.bottom), i.top = i.top - o.clientTop, i.left = i.left - o.clientLeft, i.right = e.body.clientWidth - i.width - i.left, i.bottom = e.body.clientHeight - i.height - i.top, i
  }

  function f(t) {
    return t.offsetParent || document.documentElement
  }

  function l() {
    if (M) return M;
    var t = document.createElement("div");
    t.style.width = "100%", t.style.height = "200px";
    var e = document.createElement("div");
    h(e.style, {
      position: "absolute",
      top: 0,
      left: 0,
      pointerEvents: "none",
      visibility: "hidden",
      width: "200px",
      height: "150px",
      overflow: "hidden"
    }), e.appendChild(t), document.body.appendChild(e);
    var o = t.offsetWidth;
    e.style.overflow = "scroll";
    var i = t.offsetWidth;
    o === i && (i = e.clientWidth), document.body.removeChild(e);
    var n = o - i;
    return M = {
      width: n,
      height: n
    }
  }

  function h() {
    var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
      e = [];
    return Array.prototype.push.apply(e, arguments), e.slice(1).forEach(function (e) {
      if (e)
        for (var o in e)({}).hasOwnProperty.call(e, o) && (t[o] = e[o])
    }), t
  }

  function d(t, e) {
    if ("undefined" != typeof t.classList) e.split(" ").forEach(function (e) {
      e.trim() && t.classList.remove(e)
    });
    else {
      var o = new RegExp("(^| )" + e.split(" ").join("|") + "( |$)", "gi"),
        i = c(t).replace(o, " ");
      g(t, i)
    }
  }

  function p(t, e) {
    if ("undefined" != typeof t.classList) e.split(" ").forEach(function (e) {
      e.trim() && t.classList.add(e)
    });
    else {
      d(t, e);
      var o = c(t) + (" " + e);
      g(t, o)
    }
  }

  function u(t, e) {
    if ("undefined" != typeof t.classList) return t.classList.contains(e);
    var o = c(t);
    return new RegExp("(^| )" + e + "( |$)", "gi").test(o)
  }

  function c(t) {
    return t.className instanceof t.ownerDocument.defaultView.SVGAnimatedString ? t.className.baseVal : t.className
  }

  function g(t, e) {
    t.setAttribute("class", e)
  }

  function m(t, e, o) {
    o.forEach(function (o) {
      e.indexOf(o) === -1 && u(t, o) && d(t, o)
    }), e.forEach(function (e) {
      u(t, e) || p(t, e)
    })
  }

  function i(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function v(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }

  function y(t, e) {
    var o = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
    return t + o >= e && e >= t - o
  }

  function b() {
    return "undefined" != typeof performance && "undefined" != typeof performance.now ? performance.now() : +new Date
  }

  function w() {
    for (var t = {
        top: 0,
        left: 0
      }, e = arguments.length, o = Array(e), i = 0; i < e; i++) o[i] = arguments[i];
    return o.forEach(function (e) {
      var o = e.top,
        i = e.left;
      "string" == typeof o && (o = parseFloat(o, 10)), "string" == typeof i && (i = parseFloat(i, 10)), t.top += o, t.left += i
    }), t
  }

  function C(t, e) {
    return "string" == typeof t.left && t.left.indexOf("%") !== -1 && (t.left = parseFloat(t.left, 10) / 100 * e.width), "string" == typeof t.top && t.top.indexOf("%") !== -1 && (t.top = parseFloat(t.top, 10) / 100 * e.height), t
  }

  function O(t, e) {
    return "scrollParent" === e ? e = t.scrollParents[0] : "window" === e && (e = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset]), e === document && (e = e.documentElement), "undefined" != typeof e.nodeType && ! function () {
      var t = e,
        o = a(e),
        i = o,
        n = getComputedStyle(e);
      if (e = [i.left, i.top, o.width + i.left, o.height + i.top], t.ownerDocument !== document) {
        var r = t.ownerDocument.defaultView;
        e[0] += r.pageXOffset, e[1] += r.pageYOffset, e[2] += r.pageXOffset, e[3] += r.pageYOffset
      }
      G.forEach(function (t, o) {
        t = t[0].toUpperCase() + t.substr(1), "Top" === t || "Left" === t ? e[o] += parseFloat(n["border" + t + "Width"]) : e[o] -= parseFloat(n["border" + t + "Width"])
      })
    }(), e
  }
  var E = function () {
      function t(t, e) {
        for (var o = 0; o < e.length; o++) {
          var i = e[o];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
      }
      return function (e, o, i) {
        return o && t(e.prototype, o), i && t(e, i), e
      }
    }(),
    x = void 0;
  "undefined" == typeof x && (x = {
    modules: []
  });
  var A = null,
    T = function () {
      var t = 0;
      return function () {
        return ++t
      }
    }(),
    S = {},
    P = function () {
      var t = A;
      t && document.body.contains(t) || (t = document.createElement("div"), t.setAttribute("data-tether-id", T()), h(t.style, {
        top: 0,
        left: 0,
        position: "absolute"
      }), document.body.appendChild(t), A = t);
      var e = t.getAttribute("data-tether-id");
      return "undefined" == typeof S[e] && (S[e] = n(t), k(function () {
        delete S[e]
      })), S[e]
    },
    M = null,
    W = [],
    k = function (t) {
      W.push(t)
    },
    _ = function () {
      for (var t = void 0; t = W.pop();) t()
    },
    B = function () {
      function t() {
        i(this, t)
      }
      return E(t, [{
        key: "on",
        value: function (t, e, o) {
          var i = !(arguments.length <= 3 || void 0 === arguments[3]) && arguments[3];
          "undefined" == typeof this.bindings && (this.bindings = {}), "undefined" == typeof this.bindings[t] && (this.bindings[t] = []), this.bindings[t].push({
            handler: e,
            ctx: o,
            once: i
          })
        }
      }, {
        key: "once",
        value: function (t, e, o) {
          this.on(t, e, o, !0)
        }
      }, {
        key: "off",
        value: function (t, e) {
          if ("undefined" != typeof this.bindings && "undefined" != typeof this.bindings[t])
            if ("undefined" == typeof e) delete this.bindings[t];
            else
              for (var o = 0; o < this.bindings[t].length;) this.bindings[t][o].handler === e ? this.bindings[t].splice(o, 1) : ++o
        }
      }, {
        key: "trigger",
        value: function (t) {
          if ("undefined" != typeof this.bindings && this.bindings[t]) {
            for (var e = 0, o = arguments.length, i = Array(o > 1 ? o - 1 : 0), n = 1; n < o; n++) i[n - 1] = arguments[n];
            for (; e < this.bindings[t].length;) {
              var r = this.bindings[t][e],
                s = r.handler,
                a = r.ctx,
                f = r.once,
                l = a;
              "undefined" == typeof l && (l = this), s.apply(l, i), f ? this.bindings[t].splice(e, 1) : ++e
            }
          }
        }
      }]), t
    }();
  x.Utils = {
    getActualBoundingClientRect: n,
    getScrollParents: r,
    getBounds: a,
    getOffsetParent: f,
    extend: h,
    addClass: p,
    removeClass: d,
    hasClass: u,
    updateClasses: m,
    defer: k,
    flush: _,
    uniqueId: T,
    Evented: B,
    getScrollBarSize: l,
    removeUtilElements: s
  };
  var z = function () {
      function t(t, e) {
        var o = [],
          i = !0,
          n = !1,
          r = void 0;
        try {
          for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (o.push(s.value), !e || o.length !== e); i = !0);
        } catch (f) {
          n = !0, r = f
        } finally {
          try {
            !i && a["return"] && a["return"]()
          } finally {
            if (n) throw r
          }
        }
        return o
      }
      return function (e, o) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return t(e, o);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
      }
    }(),
    E = function () {
      function t(t, e) {
        for (var o = 0; o < e.length; o++) {
          var i = e[o];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
      }
      return function (e, o, i) {
        return o && t(e.prototype, o), i && t(e, i), e
      }
    }(),
    j = function (t, e, o) {
      for (var i = !0; i;) {
        var n = t,
          r = e,
          s = o;
        i = !1, null === n && (n = Function.prototype);
        var a = Object.getOwnPropertyDescriptor(n, r);
        if (void 0 !== a) {
          if ("value" in a) return a.value;
          var f = a.get;
          if (void 0 === f) return;
          return f.call(s)
        }
        var l = Object.getPrototypeOf(n);
        if (null === l) return;
        t = l, e = r, o = s, i = !0, a = l = void 0
      }
    };
  if ("undefined" == typeof x) throw new Error("You must include the utils.js file before tether.js");
  var Y = x.Utils,
    r = Y.getScrollParents,
    a = Y.getBounds,
    f = Y.getOffsetParent,
    h = Y.extend,
    p = Y.addClass,
    d = Y.removeClass,
    m = Y.updateClasses,
    k = Y.defer,
    _ = Y.flush,
    l = Y.getScrollBarSize,
    s = Y.removeUtilElements,
    L = function () {
      if ("undefined" == typeof document) return "";
      for (var t = document.createElement("div"), e = ["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"], o = 0; o < e.length; ++o) {
        var i = e[o];
        if (void 0 !== t.style[i]) return i
      }
    }(),
    D = [],
    X = function () {
      D.forEach(function (t) {
        t.position(!1)
      }), _()
    };
  ! function () {
    var t = null,
      e = null,
      o = null,
      i = function n() {
        return "undefined" != typeof e && e > 16 ? (e = Math.min(e - 16, 250), void(o = setTimeout(n, 250))) : void("undefined" != typeof t && b() - t < 10 || (null != o && (clearTimeout(o), o = null), t = b(), X(), e = b() - t))
      };
    "undefined" != typeof window && "undefined" != typeof window.addEventListener && ["resize", "scroll", "touchmove"].forEach(function (t) {
      window.addEventListener(t, i)
    })
  }();
  var F = {
      center: "center",
      left: "right",
      right: "left"
    },
    H = {
      middle: "middle",
      top: "bottom",
      bottom: "top"
    },
    N = {
      top: 0,
      left: 0,
      middle: "50%",
      center: "50%",
      bottom: "100%",
      right: "100%"
    },
    U = function (t, e) {
      var o = t.left,
        i = t.top;
      return "auto" === o && (o = F[e.left]), "auto" === i && (i = H[e.top]), {
        left: o,
        top: i
      }
    },
    V = function (t) {
      var e = t.left,
        o = t.top;
      return "undefined" != typeof N[t.left] && (e = N[t.left]), "undefined" != typeof N[t.top] && (o = N[t.top]), {
        left: e,
        top: o
      }
    },
    R = function (t) {
      var e = t.split(" "),
        o = z(e, 2),
        i = o[0],
        n = o[1];
      return {
        top: i,
        left: n
      }
    },
    q = R,
    I = function (t) {
      function e(t) {
        var o = this;
        i(this, e), j(Object.getPrototypeOf(e.prototype), "constructor", this).call(this), this.position = this.position.bind(this), D.push(this), this.history = [], this.setOptions(t, !1), x.modules.forEach(function (t) {
          "undefined" != typeof t.initialize && t.initialize.call(o)
        }), this.position()
      }
      return v(e, t), E(e, [{
        key: "getClass",
        value: function () {
          var t = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0],
            e = this.options.classes;
          return "undefined" != typeof e && e[t] ? this.options.classes[t] : this.options.classPrefix ? this.options.classPrefix + "-" + t : t
        }
      }, {
        key: "setOptions",
        value: function (t) {
          var e = this,
            o = arguments.length <= 1 || void 0 === arguments[1] || arguments[1],
            i = {
              offset: "0 0",
              targetOffset: "0 0",
              targetAttachment: "auto auto",
              classPrefix: "tether"
            };
          this.options = h(i, t);
          var n = this.options,
            s = n.element,
            a = n.target,
            f = n.targetModifier;
          if (this.element = s, this.target = a, this.targetModifier = f, "viewport" === this.target ? (this.target = document.body, this.targetModifier = "visible") : "scroll-handle" === this.target && (this.target = document.body, this.targetModifier = "scroll-handle"), ["element", "target"].forEach(function (t) {
              if ("undefined" == typeof e[t]) throw new Error("Tether Error: Both element and target must be defined");
              "undefined" != typeof e[t].jquery ? e[t] = e[t][0] : "string" == typeof e[t] && (e[t] = document.querySelector(e[t]))
            }), p(this.element, this.getClass("element")), this.options.addTargetClasses !== !1 && p(this.target, this.getClass("target")), !this.options.attachment) throw new Error("Tether Error: You must provide an attachment");
          this.targetAttachment = q(this.options.targetAttachment), this.attachment = q(this.options.attachment), this.offset = R(this.options.offset), this.targetOffset = R(this.options.targetOffset), "undefined" != typeof this.scrollParents && this.disable(), "scroll-handle" === this.targetModifier ? this.scrollParents = [this.target] : this.scrollParents = r(this.target), this.options.enabled !== !1 && this.enable(o)
        }
      }, {
        key: "getTargetBounds",
        value: function () {
          if ("undefined" == typeof this.targetModifier) return a(this.target);
          if ("visible" === this.targetModifier) {
            if (this.target === document.body) return {
              top: pageYOffset,
              left: pageXOffset,
              height: innerHeight,
              width: innerWidth
            };
            var t = a(this.target),
              e = {
                height: t.height,
                width: t.width,
                top: t.top,
                left: t.left
              };
            return e.height = Math.min(e.height, t.height - (pageYOffset - t.top)), e.height = Math.min(e.height, t.height - (t.top + t.height - (pageYOffset + innerHeight))), e.height = Math.min(innerHeight, e.height), e.height -= 2, e.width = Math.min(e.width, t.width - (pageXOffset - t.left)), e.width = Math.min(e.width, t.width - (t.left + t.width - (pageXOffset + innerWidth))), e.width = Math.min(innerWidth, e.width), e.width -= 2, e.top < pageYOffset && (e.top = pageYOffset), e.left < pageXOffset && (e.left = pageXOffset), e
          }
          if ("scroll-handle" === this.targetModifier) {
            var t = void 0,
              o = this.target;
            o === document.body ? (o = document.documentElement, t = {
              left: pageXOffset,
              top: pageYOffset,
              height: innerHeight,
              width: innerWidth
            }) : t = a(o);
            var i = getComputedStyle(o),
              n = o.scrollWidth > o.clientWidth || [i.overflow, i.overflowX].indexOf("scroll") >= 0 || this.target !== document.body,
              r = 0;
            n && (r = 15);
            var s = t.height - parseFloat(i.borderTopWidth) - parseFloat(i.borderBottomWidth) - r,
              e = {
                width: 15,
                height: .975 * s * (s / o.scrollHeight),
                left: t.left + t.width - parseFloat(i.borderLeftWidth) - 15
              },
              f = 0;
            s < 408 && this.target === document.body && (f = -11e-5 * Math.pow(s, 2) - .00727 * s + 22.58), this.target !== document.body && (e.height = Math.max(e.height, 24));
            var l = this.target.scrollTop / (o.scrollHeight - s);
            return e.top = l * (s - e.height - f) + t.top + parseFloat(i.borderTopWidth), this.target === document.body && (e.height = Math.max(e.height, 24)), e
          }
        }
      }, {
        key: "clearCache",
        value: function () {
          this._cache = {}
        }
      }, {
        key: "cache",
        value: function (t, e) {
          return "undefined" == typeof this._cache && (this._cache = {}), "undefined" == typeof this._cache[t] && (this._cache[t] = e.call(this)), this._cache[t]
        }
      }, {
        key: "enable",
        value: function () {
          var t = this,
            e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
          this.options.addTargetClasses !== !1 && p(this.target, this.getClass("enabled")), p(this.element, this.getClass("enabled")), this.enabled = !0, this.scrollParents.forEach(function (e) {
            e !== t.target.ownerDocument && e.addEventListener("scroll", t.position)
          }), e && this.position()
        }
      }, {
        key: "disable",
        value: function () {
          var t = this;
          d(this.target, this.getClass("enabled")), d(this.element, this.getClass("enabled")), this.enabled = !1, "undefined" != typeof this.scrollParents && this.scrollParents.forEach(function (e) {
            e.removeEventListener("scroll", t.position)
          })
        }
      }, {
        key: "destroy",
        value: function () {
          var t = this;
          this.disable(), D.forEach(function (e, o) {
            e === t && D.splice(o, 1)
          }), 0 === D.length && s()
        }
      }, {
        key: "updateAttachClasses",
        value: function (t, e) {
          var o = this;
          t = t || this.attachment, e = e || this.targetAttachment;
          var i = ["left", "top", "bottom", "right", "middle", "center"];
          "undefined" != typeof this._addAttachClasses && this._addAttachClasses.length && this._addAttachClasses.splice(0, this._addAttachClasses.length), "undefined" == typeof this._addAttachClasses && (this._addAttachClasses = []);
          var n = this._addAttachClasses;
          t.top && n.push(this.getClass("element-attached") + "-" + t.top), t.left && n.push(this.getClass("element-attached") + "-" + t.left), e.top && n.push(this.getClass("target-attached") + "-" + e.top), e.left && n.push(this.getClass("target-attached") + "-" + e.left);
          var r = [];
          i.forEach(function (t) {
            r.push(o.getClass("element-attached") + "-" + t), r.push(o.getClass("target-attached") + "-" + t)
          }), k(function () {
            "undefined" != typeof o._addAttachClasses && (m(o.element, o._addAttachClasses, r), o.options.addTargetClasses !== !1 && m(o.target, o._addAttachClasses, r), delete o._addAttachClasses)
          })
        }
      }, {
        key: "position",
        value: function () {
          var t = this,
            e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
          if (this.enabled) {
            this.clearCache();
            var o = U(this.targetAttachment, this.attachment);
            this.updateAttachClasses(this.attachment, o);
            var i = this.cache("element-bounds", function () {
                return a(t.element)
              }),
              n = i.width,
              r = i.height;
            if (0 === n && 0 === r && "undefined" != typeof this.lastSize) {
              var s = this.lastSize;
              n = s.width, r = s.height
            } else this.lastSize = {
              width: n,
              height: r
            };
            var h = this.cache("target-bounds", function () {
                return t.getTargetBounds()
              }),
              d = h,
              p = C(V(this.attachment), {
                width: n,
                height: r
              }),
              u = C(V(o), d),
              c = C(this.offset, {
                width: n,
                height: r
              }),
              g = C(this.targetOffset, d);
            p = w(p, c), u = w(u, g);
            for (var m = h.left + u.left - p.left, v = h.top + u.top - p.top, y = 0; y < x.modules.length; ++y) {
              var b = x.modules[y],
                O = b.position.call(this, {
                  left: m,
                  top: v,
                  targetAttachment: o,
                  targetPos: h,
                  elementPos: i,
                  offset: p,
                  targetOffset: u,
                  manualOffset: c,
                  manualTargetOffset: g,
                  scrollbarSize: S,
                  attachment: this.attachment
                });
              if (O === !1) return !1;
              "undefined" != typeof O && "object" == typeof O && (v = O.top, m = O.left)
            }
            var E = {
                page: {
                  top: v,
                  left: m
                },
                viewport: {
                  top: v - pageYOffset,
                  bottom: pageYOffset - v - r + innerHeight,
                  left: m - pageXOffset,
                  right: pageXOffset - m - n + innerWidth
                }
              },
              A = this.target.ownerDocument,
              T = A.defaultView,
              S = void 0;
            return T.innerHeight > A.documentElement.clientHeight && (S = this.cache("scrollbar-size", l), E.viewport.bottom -= S.height), T.innerWidth > A.documentElement.clientWidth && (S = this.cache("scrollbar-size", l), E.viewport.right -= S.width), ["", "static"].indexOf(A.body.style.position) !== -1 && ["", "static"].indexOf(A.body.parentElement.style.position) !== -1 || (E.page.bottom = A.body.scrollHeight - v - r, E.page.right = A.body.scrollWidth - m - n), "undefined" != typeof this.options.optimizations && this.options.optimizations.moveElement !== !1 && "undefined" == typeof this.targetModifier && ! function () {
              var e = t.cache("target-offsetparent", function () {
                  return f(t.target)
                }),
                o = t.cache("target-offsetparent-bounds", function () {
                  return a(e)
                }),
                i = getComputedStyle(e),
                n = o,
                r = {};
              if (["Top", "Left", "Bottom", "Right"].forEach(function (t) {
                  r[t.toLowerCase()] = parseFloat(i["border" + t + "Width"])
                }), o.right = A.body.scrollWidth - o.left - n.width + r.right, o.bottom = A.body.scrollHeight - o.top - n.height + r.bottom, E.page.top >= o.top + r.top && E.page.bottom >= o.bottom && E.page.left >= o.left + r.left && E.page.right >= o.right) {
                var s = e.scrollTop,
                  l = e.scrollLeft;
                E.offset = {
                  top: E.page.top - o.top + s - r.top,
                  left: E.page.left - o.left + l - r.left
                }
              }
            }(), this.move(E), this.history.unshift(E), this.history.length > 3 && this.history.pop(), e && _(), !0
          }
        }
      }, {
        key: "move",
        value: function (t) {
          var e = this;
          if ("undefined" != typeof this.element.parentNode) {
            var o = {};
            for (var i in t) {
              o[i] = {};
              for (var n in t[i]) {
                for (var r = !1, s = 0; s < this.history.length; ++s) {
                  var a = this.history[s];
                  if ("undefined" != typeof a[i] && !y(a[i][n], t[i][n])) {
                    r = !0;
                    break
                  }
                }
                r || (o[i][n] = !0)
              }
            }
            var l = {
                top: "",
                left: "",
                right: "",
                bottom: ""
              },
              d = function (t, o) {
                var i = "undefined" != typeof e.options.optimizations,
                  n = i ? e.options.optimizations.gpu : null;
                if (n !== !1) {
                  var r = void 0,
                    s = void 0;
                  if (t.top ? (l.top = 0, r = o.top) : (l.bottom = 0, r = -o.bottom), t.left ? (l.left = 0, s = o.left) : (l.right = 0, s = -o.right), window.matchMedia) {
                    var a = window.matchMedia("only screen and (min-resolution: 1.3dppx)").matches || window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.3)").matches;
                    a || (s = Math.round(s), r = Math.round(r))
                  }
                  l[L] = "translateX(" + s + "px) translateY(" + r + "px)", "msTransform" !== L && (l[L] += " translateZ(0)")
                } else t.top ? l.top = o.top + "px" : l.bottom = o.bottom + "px", t.left ? l.left = o.left + "px" : l.right = o.right + "px"
              },
              p = !1;
            if ((o.page.top || o.page.bottom) && (o.page.left || o.page.right) ? (l.position = "absolute", d(o.page, t.page)) : (o.viewport.top || o.viewport.bottom) && (o.viewport.left || o.viewport.right) ? (l.position = "fixed", d(o.viewport, t.viewport)) : "undefined" != typeof o.offset && o.offset.top && o.offset.left ? ! function () {
                l.position = "absolute";
                var i = e.cache("target-offsetparent", function () {
                  return f(e.target)
                });
                f(e.element) !== i && k(function () {
                  e.element.parentNode.removeChild(e.element), i.appendChild(e.element)
                }), d(o.offset, t.offset), p = !0
              }() : (l.position = "absolute", d({
                top: !0,
                left: !0
              }, t.page)), !p)
              if (this.options.bodyElement) this.options.bodyElement.appendChild(this.element);
              else {
                for (var u = !0, c = this.element.parentNode; c && 1 === c.nodeType && "BODY" !== c.tagName;) {
                  if ("static" !== getComputedStyle(c).position) {
                    u = !1;
                    break
                  }
                  c = c.parentNode
                }
                u || (this.element.parentNode.removeChild(this.element), this.element.ownerDocument.body.appendChild(this.element))
              }
            var g = {},
              m = !1;
            for (var n in l) {
              var v = l[n],
                b = this.element.style[n];
              b !== v && (m = !0, g[n] = v)
            }
            m && k(function () {
              h(e.element.style, g), e.trigger("repositioned")
            })
          }
        }
      }]), e
    }(B);
  I.modules = [], x.position = X;
  var $ = h(I, x),
    z = function () {
      function t(t, e) {
        var o = [],
          i = !0,
          n = !1,
          r = void 0;
        try {
          for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (o.push(s.value), !e || o.length !== e); i = !0);
        } catch (f) {
          n = !0, r = f
        } finally {
          try {
            !i && a["return"] && a["return"]()
          } finally {
            if (n) throw r
          }
        }
        return o
      }
      return function (e, o) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return t(e, o);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
      }
    }(),
    Y = x.Utils,
    a = Y.getBounds,
    h = Y.extend,
    m = Y.updateClasses,
    k = Y.defer,
    G = ["left", "top", "right", "bottom"];
  x.modules.push({
    position: function (t) {
      var e = this,
        o = t.top,
        i = t.left,
        n = t.targetAttachment;
      if (!this.options.constraints) return !0;
      var r = this.cache("element-bounds", function () {
          return a(e.element)
        }),
        s = r.height,
        f = r.width;
      if (0 === f && 0 === s && "undefined" != typeof this.lastSize) {
        var l = this.lastSize;
        f = l.width, s = l.height
      }
      var d = this.cache("target-bounds", function () {
          return e.getTargetBounds()
        }),
        p = d.height,
        u = d.width,
        c = [this.getClass("pinned"), this.getClass("out-of-bounds")];
      this.options.constraints.forEach(function (t) {
        var e = t.outOfBoundsClass,
          o = t.pinnedClass;
        e && c.push(e), o && c.push(o)
      }), c.forEach(function (t) {
        ["left", "top", "right", "bottom"].forEach(function (e) {
          c.push(t + "-" + e)
        })
      });
      var g = [],
        v = h({}, n),
        y = h({}, this.attachment);
      return this.options.constraints.forEach(function (t) {
        var r = t.to,
          a = t.attachment,
          l = t.pin;
        "undefined" == typeof a && (a = "");
        var h = void 0,
          d = void 0;
        if (a.indexOf(" ") >= 0) {
          var c = a.split(" "),
            m = z(c, 2);
          d = m[0], h = m[1]
        } else h = d = a;
        var b = O(e, r);
        "target" !== d && "both" !== d || (o < b[1] && "top" === v.top && (o += p, v.top = "bottom"), o + s > b[3] && "bottom" === v.top && (o -= p, v.top = "top")), "together" === d && ("top" === v.top && ("bottom" === y.top && o < b[1] ? (o += p, v.top = "bottom", o += s, y.top = "top") : "top" === y.top && o + s > b[3] && o - (s - p) >= b[1] && (o -= s - p, v.top = "bottom", y.top = "bottom")), "bottom" === v.top && ("top" === y.top && o + s > b[3] ? (o -= p, v.top = "top", o -= s, y.top = "bottom") : "bottom" === y.top && o < b[1] && o + (2 * s - p) <= b[3] && (o += s - p, v.top = "top", y.top = "top")), "middle" === v.top && (o + s > b[3] && "top" === y.top ? (o -= s, y.top = "bottom") : o < b[1] && "bottom" === y.top && (o += s, y.top = "top"))), "target" !== h && "both" !== h || (i < b[0] && "left" === v.left && (i += u, v.left = "right"), i + f > b[2] && "right" === v.left && (i -= u, v.left = "left")), "together" === h && (i < b[0] && "left" === v.left ? "right" === y.left ? (i += u, v.left = "right", i += f, y.left = "left") : "left" === y.left && (i += u, v.left = "right", i -= f, y.left = "right") : i + f > b[2] && "right" === v.left ? "left" === y.left ? (i -= u, v.left = "left", i -= f, y.left = "right") : "right" === y.left && (i -= u, v.left = "left", i += f, y.left = "left") : "center" === v.left && (i + f > b[2] && "left" === y.left ? (i -= f, y.left = "right") : i < b[0] && "right" === y.left && (i += f, y.left = "left"))), "element" !== d && "both" !== d || (o < b[1] && "bottom" === y.top && (o += s, y.top = "top"), o + s > b[3] && "top" === y.top && (o -= s, y.top = "bottom")), "element" !== h && "both" !== h || (i < b[0] && ("right" === y.left ? (i += f, y.left = "left") : "center" === y.left && (i += f / 2, y.left = "left")), i + f > b[2] && ("left" === y.left ? (i -= f, y.left = "right") : "center" === y.left && (i -= f / 2, y.left = "right"))), "string" == typeof l ? l = l.split(",").map(function (t) {
          return t.trim()
        }) : l === !0 && (l = ["top", "left", "right", "bottom"]), l = l || [];
        var w = [],
          C = [];
        o < b[1] && (l.indexOf("top") >= 0 ? (o = b[1], w.push("top")) : C.push("top")), o + s > b[3] && (l.indexOf("bottom") >= 0 ? (o = b[3] - s, w.push("bottom")) : C.push("bottom")), i < b[0] && (l.indexOf("left") >= 0 ? (i = b[0], w.push("left")) : C.push("left")), i + f > b[2] && (l.indexOf("right") >= 0 ? (i = b[2] - f, w.push("right")) : C.push("right")), w.length && ! function () {
          var t = void 0;
          t = "undefined" != typeof e.options.pinnedClass ? e.options.pinnedClass : e.getClass("pinned"), g.push(t), w.forEach(function (e) {
            g.push(t + "-" + e)
          })
        }(), C.length && ! function () {
          var t = void 0;
          t = "undefined" != typeof e.options.outOfBoundsClass ? e.options.outOfBoundsClass : e.getClass("out-of-bounds"), g.push(t), C.forEach(function (e) {
            g.push(t + "-" + e)
          })
        }(), (w.indexOf("left") >= 0 || w.indexOf("right") >= 0) && (y.left = v.left = !1), (w.indexOf("top") >= 0 || w.indexOf("bottom") >= 0) && (y.top = v.top = !1), v.top === n.top && v.left === n.left && y.top === e.attachment.top && y.left === e.attachment.left || (e.updateAttachClasses(y, v), e.trigger("update", {
          attachment: y,
          targetAttachment: v
        }))
      }), k(function () {
        e.options.addTargetClasses !== !1 && m(e.target, g, c), m(e.element, g, c)
      }), {
        top: o,
        left: i
      }
    }
  });
  var Y = x.Utils,
    a = Y.getBounds,
    m = Y.updateClasses,
    k = Y.defer;
  x.modules.push({
    position: function (t) {
      var e = this,
        o = t.top,
        i = t.left,
        n = this.cache("element-bounds", function () {
          return a(e.element)
        }),
        r = n.height,
        s = n.width,
        f = this.getTargetBounds(),
        l = o + r,
        h = i + s,
        d = [];
      o <= f.bottom && l >= f.top && ["left", "right"].forEach(function (t) {
        var e = f[t];
        e !== i && e !== h || d.push(t)
      }), i <= f.right && h >= f.left && ["top", "bottom"].forEach(function (t) {
        var e = f[t];
        e !== o && e !== l || d.push(t)
      });
      var p = [],
        u = [],
        c = ["left", "top", "right", "bottom"];
      return p.push(this.getClass("abutted")), c.forEach(function (t) {
        p.push(e.getClass("abutted") + "-" + t)
      }), d.length && u.push(this.getClass("abutted")), d.forEach(function (t) {
        u.push(e.getClass("abutted") + "-" + t)
      }), k(function () {
        e.options.addTargetClasses !== !1 && m(e.target, u, p), m(e.element, u, p)
      }), !0
    }
  });
  var z = function () {
    function t(t, e) {
      var o = [],
        i = !0,
        n = !1,
        r = void 0;
      try {
        for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (o.push(s.value), !e || o.length !== e); i = !0);
      } catch (f) {
        n = !0, r = f
      } finally {
        try {
          !i && a["return"] && a["return"]()
        } finally {
          if (n) throw r
        }
      }
      return o
    }
    return function (e, o) {
      if (Array.isArray(e)) return e;
      if (Symbol.iterator in Object(e)) return t(e, o);
      throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
  }();
  return x.modules.push({
    position: function (t) {
      var e = t.top,
        o = t.left;
      if (this.options.shift) {
        var i = this.options.shift;
        "function" == typeof this.options.shift && (i = this.options.shift.call(this, {
          top: e,
          left: o
        }));
        var n = void 0,
          r = void 0;
        if ("string" == typeof i) {
          i = i.split(" "), i[1] = i[1] || i[0];
          var s = i,
            a = z(s, 2);
          n = a[0], r = a[1], n = parseFloat(n, 10), r = parseFloat(r, 10)
        } else n = i.top, r = i.left;
        return e += n, o += r, {
          top: e,
          left: o
        }
      }
    }
  }), $
});

// Bootstrap
/*!
 * Bootstrap v4.0.0-alpha.6 (https://getbootstrap.com)
 * Copyright 2011-2017 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."); + function (t) {
  var e = t.fn.jquery.split(" ")[0].split(".");
  if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
}(jQuery), + function () {
  function t(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function e(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    },
    o = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
      }
      return function (e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e
      }
    }(),
    r = function (t) {
      function e(t) {
        return {}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
      }

      function n(t) {
        return (t[0] || t).nodeType
      }

      function i() {
        return {
          bindType: a.end,
          delegateType: a.end,
          handle: function (e) {
            if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
          }
        }
      }

      function o() {
        if (window.QUnit) return !1;
        var t = document.createElement("bootstrap");
        for (var e in h)
          if (void 0 !== t.style[e]) return {
            end: h[e]
          };
        return !1
      }

      function r(e) {
        var n = this,
          i = !1;
        return t(this).one(c.TRANSITION_END, function () {
          i = !0
        }), setTimeout(function () {
          i || c.triggerTransitionEnd(n)
        }, e), this
      }

      function s() {
        a = o(), t.fn.emulateTransitionEnd = r, c.supportsTransitionEnd() && (t.event.special[c.TRANSITION_END] = i())
      }
      var a = !1,
        l = 1e6,
        h = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend"
        },
        c = {
          TRANSITION_END: "bsTransitionEnd",
          getUID: function (t) {
            do t += ~~(Math.random() * l); while (document.getElementById(t));
            return t
          },
          getSelectorFromElement: function (t) {
            var e = t.getAttribute("data-target");
            return e || (e = t.getAttribute("href") || "", e = /^#[a-z]/i.test(e) ? e : null), e
          },
          reflow: function (t) {
            return t.offsetHeight
          },
          triggerTransitionEnd: function (e) {
            t(e).trigger(a.end)
          },
          supportsTransitionEnd: function () {
            return Boolean(a)
          },
          typeCheckConfig: function (t, i, o) {
            for (var r in o)
              if (o.hasOwnProperty(r)) {
                var s = o[r],
                  a = i[r],
                  l = a && n(a) ? "element" : e(a);
                if (!new RegExp(s).test(l)) throw new Error(t.toUpperCase() + ": " + ('Option "' + r + '" provided type "' + l + '" ') + ('but expected type "' + s + '".'))
              }
          }
        };
      return s(), c
    }(jQuery),
    s = (function (t) {
      var e = "alert",
        i = "4.0.0-alpha.6",
        s = "bs.alert",
        a = "." + s,
        l = ".data-api",
        h = t.fn[e],
        c = 150,
        u = {
          DISMISS: '[data-dismiss="alert"]'
        },
        d = {
          CLOSE: "close" + a,
          CLOSED: "closed" + a,
          CLICK_DATA_API: "click" + a + l
        },
        f = {
          ALERT: "alert",
          FADE: "fade",
          SHOW: "show"
        },
        _ = function () {
          function e(t) {
            n(this, e), this._element = t
          }
          return e.prototype.close = function (t) {
            t = t || this._element;
            var e = this._getRootElement(t),
              n = this._triggerCloseEvent(e);
            n.isDefaultPrevented() || this._removeElement(e)
          }, e.prototype.dispose = function () {
            t.removeData(this._element, s), this._element = null
          }, e.prototype._getRootElement = function (e) {
            var n = r.getSelectorFromElement(e),
              i = !1;
            return n && (i = t(n)[0]), i || (i = t(e).closest("." + f.ALERT)[0]), i
          }, e.prototype._triggerCloseEvent = function (e) {
            var n = t.Event(d.CLOSE);
            return t(e).trigger(n), n
          }, e.prototype._removeElement = function (e) {
            var n = this;
            return t(e).removeClass(f.SHOW), r.supportsTransitionEnd() && t(e).hasClass(f.FADE) ? void t(e).one(r.TRANSITION_END, function (t) {
              return n._destroyElement(e, t)
            }).emulateTransitionEnd(c) : void this._destroyElement(e)
          }, e.prototype._destroyElement = function (e) {
            t(e).detach().trigger(d.CLOSED).remove()
          }, e._jQueryInterface = function (n) {
            return this.each(function () {
              var i = t(this),
                o = i.data(s);
              o || (o = new e(this), i.data(s, o)), "close" === n && o[n](this)
            })
          }, e._handleDismiss = function (t) {
            return function (e) {
              e && e.preventDefault(), t.close(this)
            }
          }, o(e, null, [{
            key: "VERSION",
            get: function () {
              return i
            }
          }]), e
        }();
      return t(document).on(d.CLICK_DATA_API, u.DISMISS, _._handleDismiss(new _)), t.fn[e] = _._jQueryInterface, t.fn[e].Constructor = _, t.fn[e].noConflict = function () {
        return t.fn[e] = h, _._jQueryInterface
      }, _
    }(jQuery), function (t) {
      var e = "button",
        i = "4.0.0-alpha.6",
        r = "bs.button",
        s = "." + r,
        a = ".data-api",
        l = t.fn[e],
        h = {
          ACTIVE: "active",
          BUTTON: "btn",
          FOCUS: "focus"
        },
        c = {
          DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
          DATA_TOGGLE: '[data-toggle="buttons"]',
          INPUT: "input",
          ACTIVE: ".active",
          BUTTON: ".btn"
        },
        u = {
          CLICK_DATA_API: "click" + s + a,
          FOCUS_BLUR_DATA_API: "focus" + s + a + " " + ("blur" + s + a)
        },
        d = function () {
          function e(t) {
            n(this, e), this._element = t
          }
          return e.prototype.toggle = function () {
            var e = !0,
              n = t(this._element).closest(c.DATA_TOGGLE)[0];
            if (n) {
              var i = t(this._element).find(c.INPUT)[0];
              if (i) {
                if ("radio" === i.type)
                  if (i.checked && t(this._element).hasClass(h.ACTIVE)) e = !1;
                  else {
                    var o = t(n).find(c.ACTIVE)[0];
                    o && t(o).removeClass(h.ACTIVE)
                  }
                e && (i.checked = !t(this._element).hasClass(h.ACTIVE), t(i).trigger("change")), i.focus()
              }
            }
            this._element.setAttribute("aria-pressed", !t(this._element).hasClass(h.ACTIVE)), e && t(this._element).toggleClass(h.ACTIVE)
          }, e.prototype.dispose = function () {
            t.removeData(this._element, r), this._element = null
          }, e._jQueryInterface = function (n) {
            return this.each(function () {
              var i = t(this).data(r);
              i || (i = new e(this), t(this).data(r, i)), "toggle" === n && i[n]()
            })
          }, o(e, null, [{
            key: "VERSION",
            get: function () {
              return i
            }
          }]), e
        }();
      return t(document).on(u.CLICK_DATA_API, c.DATA_TOGGLE_CARROT, function (e) {
        e.preventDefault();
        var n = e.target;
        t(n).hasClass(h.BUTTON) || (n = t(n).closest(c.BUTTON)), d._jQueryInterface.call(t(n), "toggle")
      }).on(u.FOCUS_BLUR_DATA_API, c.DATA_TOGGLE_CARROT, function (e) {
        var n = t(e.target).closest(c.BUTTON)[0];
        t(n).toggleClass(h.FOCUS, /^focus(in)?$/.test(e.type))
      }), t.fn[e] = d._jQueryInterface, t.fn[e].Constructor = d, t.fn[e].noConflict = function () {
        return t.fn[e] = l, d._jQueryInterface
      }, d
    }(jQuery), function (t) {
      var e = "carousel",
        s = "4.0.0-alpha.6",
        a = "bs.carousel",
        l = "." + a,
        h = ".data-api",
        c = t.fn[e],
        u = 600,
        d = 37,
        f = 39,
        _ = {
          interval: 5e3,
          keyboard: !0,
          slide: !1,
          pause: "hover",
          wrap: !0
        },
        g = {
          interval: "(number|boolean)",
          keyboard: "boolean",
          slide: "(boolean|string)",
          pause: "(string|boolean)",
          wrap: "boolean"
        },
        p = {
          NEXT: "next",
          PREV: "prev",
          LEFT: "left",
          RIGHT: "right"
        },
        m = {
          SLIDE: "slide" + l,
          SLID: "slid" + l,
          KEYDOWN: "keydown" + l,
          MOUSEENTER: "mouseenter" + l,
          MOUSELEAVE: "mouseleave" + l,
          LOAD_DATA_API: "load" + l + h,
          CLICK_DATA_API: "click" + l + h
        },
        E = {
          CAROUSEL: "carousel",
          ACTIVE: "active",
          SLIDE: "slide",
          RIGHT: "carousel-item-right",
          LEFT: "carousel-item-left",
          NEXT: "carousel-item-next",
          PREV: "carousel-item-prev",
          ITEM: "carousel-item"
        },
        v = {
          ACTIVE: ".active",
          ACTIVE_ITEM: ".active.carousel-item",
          ITEM: ".carousel-item",
          NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
          INDICATORS: ".carousel-indicators",
          DATA_SLIDE: "[data-slide], [data-slide-to]",
          DATA_RIDE: '[data-ride="carousel"]'
        },
        T = function () {
          function h(e, i) {
            n(this, h), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this._config = this._getConfig(i), this._element = t(e)[0], this._indicatorsElement = t(this._element).find(v.INDICATORS)[0], this._addEventListeners()
          }
          return h.prototype.next = function () {
            if (this._isSliding) throw new Error("Carousel is sliding");
            this._slide(p.NEXT)
          }, h.prototype.nextWhenVisible = function () {
            document.hidden || this.next()
          }, h.prototype.prev = function () {
            if (this._isSliding) throw new Error("Carousel is sliding");
            this._slide(p.PREVIOUS)
          }, h.prototype.pause = function (e) {
            e || (this._isPaused = !0), t(this._element).find(v.NEXT_PREV)[0] && r.supportsTransitionEnd() && (r.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
          }, h.prototype.cycle = function (t) {
            t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
          }, h.prototype.to = function (e) {
            var n = this;
            this._activeElement = t(this._element).find(v.ACTIVE_ITEM)[0];
            var i = this._getItemIndex(this._activeElement);
            if (!(e > this._items.length - 1 || e < 0)) {
              if (this._isSliding) return void t(this._element).one(m.SLID, function () {
                return n.to(e)
              });
              if (i === e) return this.pause(), void this.cycle();
              var o = e > i ? p.NEXT : p.PREVIOUS;
              this._slide(o, this._items[e])
            }
          }, h.prototype.dispose = function () {
            t(this._element).off(l), t.removeData(this._element, a), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
          }, h.prototype._getConfig = function (n) {
            return n = t.extend({}, _, n), r.typeCheckConfig(e, n, g), n
          }, h.prototype._addEventListeners = function () {
            var e = this;
            this._config.keyboard && t(this._element).on(m.KEYDOWN, function (t) {
              return e._keydown(t)
            }), "hover" !== this._config.pause || "ontouchstart" in document.documentElement || t(this._element).on(m.MOUSEENTER, function (t) {
              return e.pause(t)
            }).on(m.MOUSELEAVE, function (t) {
              return e.cycle(t)
            })
          }, h.prototype._keydown = function (t) {
            if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
              case d:
                t.preventDefault(), this.prev();
                break;
              case f:
                t.preventDefault(), this.next();
                break;
              default:
                return
            }
          }, h.prototype._getItemIndex = function (e) {
            return this._items = t.makeArray(t(e).parent().find(v.ITEM)), this._items.indexOf(e)
          }, h.prototype._getItemByDirection = function (t, e) {
            var n = t === p.NEXT,
              i = t === p.PREVIOUS,
              o = this._getItemIndex(e),
              r = this._items.length - 1,
              s = i && 0 === o || n && o === r;
            if (s && !this._config.wrap) return e;
            var a = t === p.PREVIOUS ? -1 : 1,
              l = (o + a) % this._items.length;
            return l === -1 ? this._items[this._items.length - 1] : this._items[l]
          }, h.prototype._triggerSlideEvent = function (e, n) {
            var i = t.Event(m.SLIDE, {
              relatedTarget: e,
              direction: n
            });
            return t(this._element).trigger(i), i
          }, h.prototype._setActiveIndicatorElement = function (e) {
            if (this._indicatorsElement) {
              t(this._indicatorsElement).find(v.ACTIVE).removeClass(E.ACTIVE);
              var n = this._indicatorsElement.children[this._getItemIndex(e)];
              n && t(n).addClass(E.ACTIVE)
            }
          }, h.prototype._slide = function (e, n) {
            var i = this,
              o = t(this._element).find(v.ACTIVE_ITEM)[0],
              s = n || o && this._getItemByDirection(e, o),
              a = Boolean(this._interval),
              l = void 0,
              h = void 0,
              c = void 0;
            if (e === p.NEXT ? (l = E.LEFT, h = E.NEXT, c = p.LEFT) : (l = E.RIGHT, h = E.PREV, c = p.RIGHT), s && t(s).hasClass(E.ACTIVE)) return void(this._isSliding = !1);
            var d = this._triggerSlideEvent(s, c);
            if (!d.isDefaultPrevented() && o && s) {
              this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(s);
              var f = t.Event(m.SLID, {
                relatedTarget: s,
                direction: c
              });
              r.supportsTransitionEnd() && t(this._element).hasClass(E.SLIDE) ? (t(s).addClass(h), r.reflow(s), t(o).addClass(l), t(s).addClass(l), t(o).one(r.TRANSITION_END, function () {
                t(s).removeClass(l + " " + h).addClass(E.ACTIVE), t(o).removeClass(E.ACTIVE + " " + h + " " + l), i._isSliding = !1, setTimeout(function () {
                  return t(i._element).trigger(f)
                }, 0)
              }).emulateTransitionEnd(u)) : (t(o).removeClass(E.ACTIVE), t(s).addClass(E.ACTIVE), this._isSliding = !1, t(this._element).trigger(f)), a && this.cycle()
            }
          }, h._jQueryInterface = function (e) {
            return this.each(function () {
              var n = t(this).data(a),
                o = t.extend({}, _, t(this).data());
              "object" === ("undefined" == typeof e ? "undefined" : i(e)) && t.extend(o, e);
              var r = "string" == typeof e ? e : o.slide;
              if (n || (n = new h(this, o), t(this).data(a, n)), "number" == typeof e) n.to(e);
              else if ("string" == typeof r) {
                if (void 0 === n[r]) throw new Error('No method named "' + r + '"');
                n[r]()
              } else o.interval && (n.pause(), n.cycle())
            })
          }, h._dataApiClickHandler = function (e) {
            var n = r.getSelectorFromElement(this);
            if (n) {
              var i = t(n)[0];
              if (i && t(i).hasClass(E.CAROUSEL)) {
                var o = t.extend({}, t(i).data(), t(this).data()),
                  s = this.getAttribute("data-slide-to");
                s && (o.interval = !1), h._jQueryInterface.call(t(i), o), s && t(i).data(a).to(s), e.preventDefault()
              }
            }
          }, o(h, null, [{
            key: "VERSION",
            get: function () {
              return s
            }
          }, {
            key: "Default",
            get: function () {
              return _
            }
          }]), h
        }();
      return t(document).on(m.CLICK_DATA_API, v.DATA_SLIDE, T._dataApiClickHandler), t(window).on(m.LOAD_DATA_API, function () {
        t(v.DATA_RIDE).each(function () {
          var e = t(this);
          T._jQueryInterface.call(e, e.data())
        })
      }), t.fn[e] = T._jQueryInterface, t.fn[e].Constructor = T, t.fn[e].noConflict = function () {
        return t.fn[e] = c, T._jQueryInterface
      }, T
    }(jQuery), function (t) {
      var e = "collapse",
        s = "4.0.0-alpha.6",
        a = "bs.collapse",
        l = "." + a,
        h = ".data-api",
        c = t.fn[e],
        u = 600,
        d = {
          toggle: !0,
          parent: ""
        },
        f = {
          toggle: "boolean",
          parent: "string"
        },
        _ = {
          SHOW: "show" + l,
          SHOWN: "shown" + l,
          HIDE: "hide" + l,
          HIDDEN: "hidden" + l,
          CLICK_DATA_API: "click" + l + h
        },
        g = {
          SHOW: "show",
          COLLAPSE: "collapse",
          COLLAPSING: "collapsing",
          COLLAPSED: "collapsed"
        },
        p = {
          WIDTH: "width",
          HEIGHT: "height"
        },
        m = {
          ACTIVES: ".card > .show, .card > .collapsing",
          DATA_TOGGLE: '[data-toggle="collapse"]'
        },
        E = function () {
          function l(e, i) {
            n(this, l), this._isTransitioning = !1, this._element = e, this._config = this._getConfig(i), this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],' + ('[data-toggle="collapse"][data-target="#' + e.id + '"]'))), this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
          }
          return l.prototype.toggle = function () {
            t(this._element).hasClass(g.SHOW) ? this.hide() : this.show()
          }, l.prototype.show = function () {
            var e = this;
            if (this._isTransitioning) throw new Error("Collapse is transitioning");
            if (!t(this._element).hasClass(g.SHOW)) {
              var n = void 0,
                i = void 0;
              if (this._parent && (n = t.makeArray(t(this._parent).find(m.ACTIVES)), n.length || (n = null)), !(n && (i = t(n).data(a), i && i._isTransitioning))) {
                var o = t.Event(_.SHOW);
                if (t(this._element).trigger(o), !o.isDefaultPrevented()) {
                  n && (l._jQueryInterface.call(t(n), "hide"), i || t(n).data(a, null));
                  var s = this._getDimension();
                  t(this._element).removeClass(g.COLLAPSE).addClass(g.COLLAPSING), this._element.style[s] = 0, this._element.setAttribute("aria-expanded", !0), this._triggerArray.length && t(this._triggerArray).removeClass(g.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);
                  var h = function () {
                    t(e._element).removeClass(g.COLLAPSING).addClass(g.COLLAPSE).addClass(g.SHOW), e._element.style[s] = "", e.setTransitioning(!1), t(e._element).trigger(_.SHOWN)
                  };
                  if (!r.supportsTransitionEnd()) return void h();
                  var c = s[0].toUpperCase() + s.slice(1),
                    d = "scroll" + c;
                  t(this._element).one(r.TRANSITION_END, h).emulateTransitionEnd(u), this._element.style[s] = this._element[d] + "px"
                }
              }
            }
          }, l.prototype.hide = function () {
            var e = this;
            if (this._isTransitioning) throw new Error("Collapse is transitioning");
            if (t(this._element).hasClass(g.SHOW)) {
              var n = t.Event(_.HIDE);
              if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                var i = this._getDimension(),
                  o = i === p.WIDTH ? "offsetWidth" : "offsetHeight";
                this._element.style[i] = this._element[o] + "px", r.reflow(this._element), t(this._element).addClass(g.COLLAPSING).removeClass(g.COLLAPSE).removeClass(g.SHOW), this._element.setAttribute("aria-expanded", !1), this._triggerArray.length && t(this._triggerArray).addClass(g.COLLAPSED).attr("aria-expanded", !1), this.setTransitioning(!0);
                var s = function () {
                  e.setTransitioning(!1), t(e._element).removeClass(g.COLLAPSING).addClass(g.COLLAPSE).trigger(_.HIDDEN)
                };
                return this._element.style[i] = "", r.supportsTransitionEnd() ? void t(this._element).one(r.TRANSITION_END, s).emulateTransitionEnd(u) : void s()
              }
            }
          }, l.prototype.setTransitioning = function (t) {
            this._isTransitioning = t
          }, l.prototype.dispose = function () {
            t.removeData(this._element, a), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
          }, l.prototype._getConfig = function (n) {
            return n = t.extend({}, d, n), n.toggle = Boolean(n.toggle), r.typeCheckConfig(e, n, f), n
          }, l.prototype._getDimension = function () {
            var e = t(this._element).hasClass(p.WIDTH);
            return e ? p.WIDTH : p.HEIGHT
          }, l.prototype._getParent = function () {
            var e = this,
              n = t(this._config.parent)[0],
              i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
            return t(n).find(i).each(function (t, n) {
              e._addAriaAndCollapsedClass(l._getTargetFromElement(n), [n])
            }), n
          }, l.prototype._addAriaAndCollapsedClass = function (e, n) {
            if (e) {
              var i = t(e).hasClass(g.SHOW);
              e.setAttribute("aria-expanded", i), n.length && t(n).toggleClass(g.COLLAPSED, !i).attr("aria-expanded", i)
            }
          }, l._getTargetFromElement = function (e) {
            var n = r.getSelectorFromElement(e);
            return n ? t(n)[0] : null
          }, l._jQueryInterface = function (e) {
            return this.each(function () {
              var n = t(this),
                o = n.data(a),
                r = t.extend({}, d, n.data(), "object" === ("undefined" == typeof e ? "undefined" : i(e)) && e);
              if (!o && r.toggle && /show|hide/.test(e) && (r.toggle = !1), o || (o = new l(this, r), n.data(a, o)), "string" == typeof e) {
                if (void 0 === o[e]) throw new Error('No method named "' + e + '"');
                o[e]()
              }
            })
          }, o(l, null, [{
            key: "VERSION",
            get: function () {
              return s
            }
          }, {
            key: "Default",
            get: function () {
              return d
            }
          }]), l
        }();
      return t(document).on(_.CLICK_DATA_API, m.DATA_TOGGLE, function (e) {
        e.preventDefault();
        var n = E._getTargetFromElement(this),
          i = t(n).data(a),
          o = i ? "toggle" : t(this).data();
        E._jQueryInterface.call(t(n), o)
      }), t.fn[e] = E._jQueryInterface, t.fn[e].Constructor = E, t.fn[e].noConflict = function () {
        return t.fn[e] = c, E._jQueryInterface
      }, E
    }(jQuery), function (t) {
      var e = "dropdown",
        i = "4.0.0-alpha.6",
        s = "bs.dropdown",
        a = "." + s,
        l = ".data-api",
        h = t.fn[e],
        c = 27,
        u = 38,
        d = 40,
        f = 3,
        _ = {
          HIDE: "hide" + a,
          HIDDEN: "hidden" + a,
          SHOW: "show" + a,
          SHOWN: "shown" + a,
          CLICK: "click" + a,
          CLICK_DATA_API: "click" + a + l,
          FOCUSIN_DATA_API: "focusin" + a + l,
          KEYDOWN_DATA_API: "keydown" + a + l
        },
        g = {
          BACKDROP: "dropdown-backdrop",
          DISABLED: "disabled",
          SHOW: "show"
        },
        p = {
          BACKDROP: ".dropdown-backdrop",
          DATA_TOGGLE: '[data-toggle="dropdown"]',
          FORM_CHILD: ".dropdown form",
          ROLE_MENU: '[role="menu"]',
          ROLE_LISTBOX: '[role="listbox"]',
          NAVBAR_NAV: ".navbar-nav",
          VISIBLE_ITEMS: '[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a'
        },
        m = function () {
          function e(t) {
            n(this, e), this._element = t, this._addEventListeners()
          }
          return e.prototype.toggle = function () {
            if (this.disabled || t(this).hasClass(g.DISABLED)) return !1;
            var n = e._getParentFromElement(this),
              i = t(n).hasClass(g.SHOW);
            if (e._clearMenus(), i) return !1;
            if ("ontouchstart" in document.documentElement && !t(n).closest(p.NAVBAR_NAV).length) {
              var o = document.createElement("div");
              o.className = g.BACKDROP, t(o).insertBefore(this), t(o).on("click", e._clearMenus)
            }
            var r = {
                relatedTarget: this
              },
              s = t.Event(_.SHOW, r);
            return t(n).trigger(s), !s.isDefaultPrevented() && (this.focus(), this.setAttribute("aria-expanded", !0), t(n).toggleClass(g.SHOW), t(n).trigger(t.Event(_.SHOWN, r)), !1)
          }, e.prototype.dispose = function () {
            t.removeData(this._element, s), t(this._element).off(a), this._element = null
          }, e.prototype._addEventListeners = function () {
            t(this._element).on(_.CLICK, this.toggle)
          }, e._jQueryInterface = function (n) {
            return this.each(function () {
              var i = t(this).data(s);
              if (i || (i = new e(this), t(this).data(s, i)), "string" == typeof n) {
                if (void 0 === i[n]) throw new Error('No method named "' + n + '"');
                i[n].call(this)
              }
            })
          }, e._clearMenus = function (n) {
            if (!n || n.which !== f) {
              var i = t(p.BACKDROP)[0];
              i && i.parentNode.removeChild(i);
              for (var o = t.makeArray(t(p.DATA_TOGGLE)), r = 0; r < o.length; r++) {
                var s = e._getParentFromElement(o[r]),
                  a = {
                    relatedTarget: o[r]
                  };
                if (t(s).hasClass(g.SHOW) && !(n && ("click" === n.type && /input|textarea/i.test(n.target.tagName) || "focusin" === n.type) && t.contains(s, n.target))) {
                  var l = t.Event(_.HIDE, a);
                  t(s).trigger(l), l.isDefaultPrevented() || (o[r].setAttribute("aria-expanded", "false"), t(s).removeClass(g.SHOW).trigger(t.Event(_.HIDDEN, a)))
                }
              }
            }
          }, e._getParentFromElement = function (e) {
            var n = void 0,
              i = r.getSelectorFromElement(e);
            return i && (n = t(i)[0]), n || e.parentNode
          }, e._dataApiKeydownHandler = function (n) {
            if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName) && (n.preventDefault(), n.stopPropagation(), !this.disabled && !t(this).hasClass(g.DISABLED))) {
              var i = e._getParentFromElement(this),
                o = t(i).hasClass(g.SHOW);
              if (!o && n.which !== c || o && n.which === c) {
                if (n.which === c) {
                  var r = t(i).find(p.DATA_TOGGLE)[0];
                  t(r).trigger("focus")
                }
                return void t(this).trigger("click")
              }
              var s = t(i).find(p.VISIBLE_ITEMS).get();
              if (s.length) {
                var a = s.indexOf(n.target);
                n.which === u && a > 0 && a--, n.which === d && a < s.length - 1 && a++, a < 0 && (a = 0), s[a].focus()
              }
            }
          }, o(e, null, [{
            key: "VERSION",
            get: function () {
              return i
            }
          }]), e
        }();
      return t(document).on(_.KEYDOWN_DATA_API, p.DATA_TOGGLE, m._dataApiKeydownHandler).on(_.KEYDOWN_DATA_API, p.ROLE_MENU, m._dataApiKeydownHandler).on(_.KEYDOWN_DATA_API, p.ROLE_LISTBOX, m._dataApiKeydownHandler).on(_.CLICK_DATA_API + " " + _.FOCUSIN_DATA_API, m._clearMenus).on(_.CLICK_DATA_API, p.DATA_TOGGLE, m.prototype.toggle).on(_.CLICK_DATA_API, p.FORM_CHILD, function (t) {
        t.stopPropagation()
      }), t.fn[e] = m._jQueryInterface, t.fn[e].Constructor = m, t.fn[e].noConflict = function () {
        return t.fn[e] = h, m._jQueryInterface
      }, m
    }(jQuery), function (t) {
      var e = "modal",
        s = "4.0.0-alpha.6",
        a = "bs.modal",
        l = "." + a,
        h = ".data-api",
        c = t.fn[e],
        u = 300,
        d = 150,
        f = 27,
        _ = {
          backdrop: !0,
          keyboard: !0,
          focus: !0,
          show: !0
        },
        g = {
          backdrop: "(boolean|string)",
          keyboard: "boolean",
          focus: "boolean",
          show: "boolean"
        },
        p = {
          HIDE: "hide" + l,
          HIDDEN: "hidden" + l,
          SHOW: "show" + l,
          SHOWN: "shown" + l,
          FOCUSIN: "focusin" + l,
          RESIZE: "resize" + l,
          CLICK_DISMISS: "click.dismiss" + l,
          KEYDOWN_DISMISS: "keydown.dismiss" + l,
          MOUSEUP_DISMISS: "mouseup.dismiss" + l,
          MOUSEDOWN_DISMISS: "mousedown.dismiss" + l,
          CLICK_DATA_API: "click" + l + h
        },
        m = {
          SCROLLBAR_MEASURER: "modal-scrollbar-measure",
          BACKDROP: "modal-backdrop",
          OPEN: "modal-open",
          FADE: "fade",
          SHOW: "show"
        },
        E = {
          DIALOG: ".modal-dialog",
          DATA_TOGGLE: '[data-toggle="modal"]',
          DATA_DISMISS: '[data-dismiss="modal"]',
          FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
        },
        v = function () {
          function h(e, i) {
            n(this, h), this._config = this._getConfig(i), this._element = e, this._dialog = t(e).find(E.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
          }
          return h.prototype.toggle = function (t) {
            return this._isShown ? this.hide() : this.show(t)
          }, h.prototype.show = function (e) {
            var n = this;
            if (this._isTransitioning) throw new Error("Modal is transitioning");
            r.supportsTransitionEnd() && t(this._element).hasClass(m.FADE) && (this._isTransitioning = !0);
            var i = t.Event(p.SHOW, {
              relatedTarget: e
            });
            t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), t(document.body).addClass(m.OPEN), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(p.CLICK_DISMISS, E.DATA_DISMISS, function (t) {
              return n.hide(t)
            }), t(this._dialog).on(p.MOUSEDOWN_DISMISS, function () {
              t(n._element).one(p.MOUSEUP_DISMISS, function (e) {
                t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
              })
            }), this._showBackdrop(function () {
              return n._showElement(e)
            }))
          }, h.prototype.hide = function (e) {
            var n = this;
            if (e && e.preventDefault(), this._isTransitioning) throw new Error("Modal is transitioning");
            var i = r.supportsTransitionEnd() && t(this._element).hasClass(m.FADE);
            i && (this._isTransitioning = !0);
            var o = t.Event(p.HIDE);
            t(this._element).trigger(o), this._isShown && !o.isDefaultPrevented() && (this._isShown = !1, this._setEscapeEvent(), this._setResizeEvent(), t(document).off(p.FOCUSIN), t(this._element).removeClass(m.SHOW), t(this._element).off(p.CLICK_DISMISS), t(this._dialog).off(p.MOUSEDOWN_DISMISS), i ? t(this._element).one(r.TRANSITION_END, function (t) {
              return n._hideModal(t)
            }).emulateTransitionEnd(u) : this._hideModal())
          }, h.prototype.dispose = function () {
            t.removeData(this._element, a), t(window, document, this._element, this._backdrop).off(l), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._originalBodyPadding = null, this._scrollbarWidth = null
          }, h.prototype._getConfig = function (n) {
            return n = t.extend({}, _, n), r.typeCheckConfig(e, n, g), n
          }, h.prototype._showElement = function (e) {
            var n = this,
              i = r.supportsTransitionEnd() && t(this._element).hasClass(m.FADE);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && r.reflow(this._element), t(this._element).addClass(m.SHOW), this._config.focus && this._enforceFocus();
            var o = t.Event(p.SHOWN, {
                relatedTarget: e
              }),
              s = function () {
                n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(o)
              };
            i ? t(this._dialog).one(r.TRANSITION_END, s).emulateTransitionEnd(u) : s()
          }, h.prototype._enforceFocus = function () {
            var e = this;
            t(document).off(p.FOCUSIN).on(p.FOCUSIN, function (n) {
              document === n.target || e._element === n.target || t(e._element).has(n.target).length || e._element.focus()
            })
          }, h.prototype._setEscapeEvent = function () {
            var e = this;
            this._isShown && this._config.keyboard ? t(this._element).on(p.KEYDOWN_DISMISS, function (t) {
              t.which === f && e.hide()
            }) : this._isShown || t(this._element).off(p.KEYDOWN_DISMISS)
          }, h.prototype._setResizeEvent = function () {
            var e = this;
            this._isShown ? t(window).on(p.RESIZE, function (t) {
              return e._handleUpdate(t)
            }) : t(window).off(p.RESIZE)
          }, h.prototype._hideModal = function () {
            var e = this;
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", "true"), this._isTransitioning = !1, this._showBackdrop(function () {
              t(document.body).removeClass(m.OPEN), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(p.HIDDEN)
            })
          }, h.prototype._removeBackdrop = function () {
            this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
          }, h.prototype._showBackdrop = function (e) {
            var n = this,
              i = t(this._element).hasClass(m.FADE) ? m.FADE : "";
            if (this._isShown && this._config.backdrop) {
              var o = r.supportsTransitionEnd() && i;
              if (this._backdrop = document.createElement("div"), this._backdrop.className = m.BACKDROP, i && t(this._backdrop).addClass(i), t(this._backdrop).appendTo(document.body), t(this._element).on(p.CLICK_DISMISS, function (t) {
                  return n._ignoreBackdropClick ? void(n._ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide()))
                }), o && r.reflow(this._backdrop), t(this._backdrop).addClass(m.SHOW), !e) return;
              if (!o) return void e();
              t(this._backdrop).one(r.TRANSITION_END, e).emulateTransitionEnd(d)
            } else if (!this._isShown && this._backdrop) {
              t(this._backdrop).removeClass(m.SHOW);
              var s = function () {
                n._removeBackdrop(), e && e()
              };
              r.supportsTransitionEnd() && t(this._element).hasClass(m.FADE) ? t(this._backdrop).one(r.TRANSITION_END, s).emulateTransitionEnd(d) : s()
            } else e && e()
          }, h.prototype._handleUpdate = function () {
            this._adjustDialog()
          }, h.prototype._adjustDialog = function () {
            var t = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
          }, h.prototype._resetAdjustments = function () {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
          }, h.prototype._checkScrollbar = function () {
            this._isBodyOverflowing = document.body.clientWidth < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
          }, h.prototype._setScrollbar = function () {
            var e = parseInt(t(E.FIXED_CONTENT).css("padding-right") || 0, 10);
            this._originalBodyPadding = document.body.style.paddingRight || "", this._isBodyOverflowing && (document.body.style.paddingRight = e + this._scrollbarWidth + "px")
          }, h.prototype._resetScrollbar = function () {
            document.body.style.paddingRight = this._originalBodyPadding
          }, h.prototype._getScrollbarWidth = function () {
            var t = document.createElement("div");
            t.className = m.SCROLLBAR_MEASURER, document.body.appendChild(t);
            var e = t.offsetWidth - t.clientWidth;
            return document.body.removeChild(t), e
          }, h._jQueryInterface = function (e, n) {
            return this.each(function () {
              var o = t(this).data(a),
                r = t.extend({}, h.Default, t(this).data(), "object" === ("undefined" == typeof e ? "undefined" : i(e)) && e);
              if (o || (o = new h(this, r), t(this).data(a, o)), "string" == typeof e) {
                if (void 0 === o[e]) throw new Error('No method named "' + e + '"');
                o[e](n)
              } else r.show && o.show(n)
            })
          }, o(h, null, [{
            key: "VERSION",
            get: function () {
              return s
            }
          }, {
            key: "Default",
            get: function () {
              return _
            }
          }]), h
        }();
      return t(document).on(p.CLICK_DATA_API, E.DATA_TOGGLE, function (e) {
        var n = this,
          i = void 0,
          o = r.getSelectorFromElement(this);
        o && (i = t(o)[0]);
        var s = t(i).data(a) ? "toggle" : t.extend({}, t(i).data(), t(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
        var l = t(i).one(p.SHOW, function (e) {
          e.isDefaultPrevented() || l.one(p.HIDDEN, function () {
            t(n).is(":visible") && n.focus()
          })
        });
        v._jQueryInterface.call(t(i), s, this)
      }), t.fn[e] = v._jQueryInterface, t.fn[e].Constructor = v, t.fn[e].noConflict = function () {
        return t.fn[e] = c, v._jQueryInterface
      }, v
    }(jQuery), function (t) {
      var e = "scrollspy",
        s = "4.0.0-alpha.6",
        a = "bs.scrollspy",
        l = "." + a,
        h = ".data-api",
        c = t.fn[e],
        u = {
          offset: 10,
          method: "auto",
          target: ""
        },
        d = {
          offset: "number",
          method: "string",
          target: "(string|element)"
        },
        f = {
          ACTIVATE: "activate" + l,
          SCROLL: "scroll" + l,
          LOAD_DATA_API: "load" + l + h
        },
        _ = {
          DROPDOWN_ITEM: "dropdown-item",
          DROPDOWN_MENU: "dropdown-menu",
          NAV_LINK: "nav-link",
          NAV: "nav",
          ACTIVE: "active"
        },
        g = {
          DATA_SPY: '[data-spy="scroll"]',
          ACTIVE: ".active",
          LIST_ITEM: ".list-item",
          LI: "li",
          LI_DROPDOWN: "li.dropdown",
          NAV_LINKS: ".nav-link",
          DROPDOWN: ".dropdown",
          DROPDOWN_ITEMS: ".dropdown-item",
          DROPDOWN_TOGGLE: ".dropdown-toggle"
        },
        p = {
          OFFSET: "offset",
          POSITION: "position"
        },
        m = function () {
          function h(e, i) {
            var o = this;
            n(this, h), this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(i), this._selector = this._config.target + " " + g.NAV_LINKS + "," + (this._config.target + " " + g.DROPDOWN_ITEMS), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(f.SCROLL, function (t) {
              return o._process(t)
            }), this.refresh(), this._process()
          }
          return h.prototype.refresh = function () {
            var e = this,
              n = this._scrollElement !== this._scrollElement.window ? p.POSITION : p.OFFSET,
              i = "auto" === this._config.method ? n : this._config.method,
              o = i === p.POSITION ? this._getScrollTop() : 0;
            this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight();
            var s = t.makeArray(t(this._selector));
            s.map(function (e) {
              var n = void 0,
                s = r.getSelectorFromElement(e);
              return s && (n = t(s)[0]), n && (n.offsetWidth || n.offsetHeight) ? [t(n)[i]().top + o, s] : null
            }).filter(function (t) {
              return t
            }).sort(function (t, e) {
              return t[0] - e[0]
            }).forEach(function (t) {
              e._offsets.push(t[0]), e._targets.push(t[1])
            })
          }, h.prototype.dispose = function () {
            t.removeData(this._element, a), t(this._scrollElement).off(l), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
          }, h.prototype._getConfig = function (n) {
            if (n = t.extend({}, u, n), "string" != typeof n.target) {
              var i = t(n.target).attr("id");
              i || (i = r.getUID(e), t(n.target).attr("id", i)), n.target = "#" + i
            }
            return r.typeCheckConfig(e, n, d), n
          }, h.prototype._getScrollTop = function () {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
          }, h.prototype._getScrollHeight = function () {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
          }, h.prototype._getOffsetHeight = function () {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.offsetHeight
          }, h.prototype._process = function () {
            var t = this._getScrollTop() + this._config.offset,
              e = this._getScrollHeight(),
              n = this._config.offset + e - this._getOffsetHeight();
            if (this._scrollHeight !== e && this.refresh(), t >= n) {
              var i = this._targets[this._targets.length - 1];
              return void(this._activeTarget !== i && this._activate(i))
            }
            if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
            for (var o = this._offsets.length; o--;) {
              var r = this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]);
              r && this._activate(this._targets[o])
            }
          }, h.prototype._activate = function (e) {
            this._activeTarget = e, this._clear();
            var n = this._selector.split(",");
            n = n.map(function (t) {
              return t + '[data-target="' + e + '"],' + (t + '[href="' + e + '"]')
            });
            var i = t(n.join(","));
            i.hasClass(_.DROPDOWN_ITEM) ? (i.closest(g.DROPDOWN).find(g.DROPDOWN_TOGGLE).addClass(_.ACTIVE), i.addClass(_.ACTIVE)) : i.parents(g.LI).find("> " + g.NAV_LINKS).addClass(_.ACTIVE), t(this._scrollElement).trigger(f.ACTIVATE, {
              relatedTarget: e
            })
          }, h.prototype._clear = function () {
            t(this._selector).filter(g.ACTIVE).removeClass(_.ACTIVE)
          }, h._jQueryInterface = function (e) {
            return this.each(function () {
              var n = t(this).data(a),
                o = "object" === ("undefined" == typeof e ? "undefined" : i(e)) && e;
              if (n || (n = new h(this, o), t(this).data(a, n)), "string" == typeof e) {
                if (void 0 === n[e]) throw new Error('No method named "' + e + '"');
                n[e]()
              }
            })
          }, o(h, null, [{
            key: "VERSION",
            get: function () {
              return s
            }
          }, {
            key: "Default",
            get: function () {
              return u
            }
          }]), h
        }();
      return t(window).on(f.LOAD_DATA_API, function () {
        for (var e = t.makeArray(t(g.DATA_SPY)), n = e.length; n--;) {
          var i = t(e[n]);
          m._jQueryInterface.call(i, i.data())
        }
      }), t.fn[e] = m._jQueryInterface, t.fn[e].Constructor = m, t.fn[e].noConflict = function () {
        return t.fn[e] = c, m._jQueryInterface
      }, m
    }(jQuery), function (t) {
      var e = "tab",
        i = "4.0.0-alpha.6",
        s = "bs.tab",
        a = "." + s,
        l = ".data-api",
        h = t.fn[e],
        c = 150,
        u = {
          HIDE: "hide" + a,
          HIDDEN: "hidden" + a,
          SHOW: "show" + a,
          SHOWN: "shown" + a,
          CLICK_DATA_API: "click" + a + l
        },
        d = {
          DROPDOWN_MENU: "dropdown-menu",
          ACTIVE: "active",
          DISABLED: "disabled",
          FADE: "fade",
          SHOW: "show"
        },
        f = {
          A: "a",
          LI: "li",
          DROPDOWN: ".dropdown",
          LIST: "ul:not(.dropdown-menu), ol:not(.dropdown-menu), nav:not(.dropdown-menu)",
          FADE_CHILD: "> .nav-item .fade, > .fade",
          ACTIVE: ".active",
          ACTIVE_CHILD: "> .nav-item > .active, > .active",
          DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"]',
          DROPDOWN_TOGGLE: ".dropdown-toggle",
          DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
        },
        _ = function () {
          function e(t) {
            n(this, e), this._element = t
          }
          return e.prototype.show = function () {
            var e = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(d.ACTIVE) || t(this._element).hasClass(d.DISABLED))) {
              var n = void 0,
                i = void 0,
                o = t(this._element).closest(f.LIST)[0],
                s = r.getSelectorFromElement(this._element);
              o && (i = t.makeArray(t(o).find(f.ACTIVE)), i = i[i.length - 1]);
              var a = t.Event(u.HIDE, {
                  relatedTarget: this._element
                }),
                l = t.Event(u.SHOW, {
                  relatedTarget: i
                });
              if (i && t(i).trigger(a), t(this._element).trigger(l), !l.isDefaultPrevented() && !a.isDefaultPrevented()) {
                s && (n = t(s)[0]), this._activate(this._element, o);
                var h = function () {
                  var n = t.Event(u.HIDDEN, {
                      relatedTarget: e._element
                    }),
                    o = t.Event(u.SHOWN, {
                      relatedTarget: i
                    });
                  t(i).trigger(n), t(e._element).trigger(o)
                };
                n ? this._activate(n, n.parentNode, h) : h()
              }
            }
          }, e.prototype.dispose = function () {
            t.removeClass(this._element, s), this._element = null
          }, e.prototype._activate = function (e, n, i) {
            var o = this,
              s = t(n).find(f.ACTIVE_CHILD)[0],
              a = i && r.supportsTransitionEnd() && (s && t(s).hasClass(d.FADE) || Boolean(t(n).find(f.FADE_CHILD)[0])),
              l = function () {
                return o._transitionComplete(e, s, a, i)
              };
            s && a ? t(s).one(r.TRANSITION_END, l).emulateTransitionEnd(c) : l(), s && t(s).removeClass(d.SHOW)
          }, e.prototype._transitionComplete = function (e, n, i, o) {
            if (n) {
              t(n).removeClass(d.ACTIVE);
              var s = t(n.parentNode).find(f.DROPDOWN_ACTIVE_CHILD)[0];
              s && t(s).removeClass(d.ACTIVE), n.setAttribute("aria-expanded", !1)
            }
            if (t(e).addClass(d.ACTIVE), e.setAttribute("aria-expanded", !0), i ? (r.reflow(e), t(e).addClass(d.SHOW)) : t(e).removeClass(d.FADE), e.parentNode && t(e.parentNode).hasClass(d.DROPDOWN_MENU)) {
              var a = t(e).closest(f.DROPDOWN)[0];
              a && t(a).find(f.DROPDOWN_TOGGLE).addClass(d.ACTIVE), e.setAttribute("aria-expanded", !0)
            }
            o && o()
          }, e._jQueryInterface = function (n) {
            return this.each(function () {
              var i = t(this),
                o = i.data(s);
              if (o || (o = new e(this), i.data(s, o)), "string" == typeof n) {
                if (void 0 === o[n]) throw new Error('No method named "' + n + '"');
                o[n]()
              }
            })
          }, o(e, null, [{
            key: "VERSION",
            get: function () {
              return i
            }
          }]), e
        }();
      return t(document).on(u.CLICK_DATA_API, f.DATA_TOGGLE, function (e) {
        e.preventDefault(), _._jQueryInterface.call(t(this), "show")
      }), t.fn[e] = _._jQueryInterface, t.fn[e].Constructor = _, t.fn[e].noConflict = function () {
        return t.fn[e] = h, _._jQueryInterface
      }, _
    }(jQuery), function (t) {
      if ("undefined" == typeof Tether) throw new Error("Bootstrap tooltips require Tether (http://tether.io/)");
      var e = "tooltip",
        s = "4.0.0-alpha.6",
        a = "bs.tooltip",
        l = "." + a,
        h = t.fn[e],
        c = 150,
        u = "bs-tether",
        d = {
          animation: !0,
          template: '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>',
          trigger: "hover focus",
          title: "",
          delay: 0,
          html: !1,
          selector: !1,
          placement: "top",
          offset: "0 0",
          constraints: [],
          container: !1
        },
        f = {
          animation: "boolean",
          template: "string",
          title: "(string|element|function)",
          trigger: "string",
          delay: "(number|object)",
          html: "boolean",
          selector: "(string|boolean)",
          placement: "(string|function)",
          offset: "string",
          constraints: "array",
          container: "(string|element|boolean)"
        },
        _ = {
          TOP: "bottom center",
          RIGHT: "middle left",
          BOTTOM: "top center",
          LEFT: "middle right"
        },
        g = {
          SHOW: "show",
          OUT: "out"
        },
        p = {
          HIDE: "hide" + l,
          HIDDEN: "hidden" + l,
          SHOW: "show" + l,
          SHOWN: "shown" + l,
          INSERTED: "inserted" + l,
          CLICK: "click" + l,
          FOCUSIN: "focusin" + l,
          FOCUSOUT: "focusout" + l,
          MOUSEENTER: "mouseenter" + l,
          MOUSELEAVE: "mouseleave" + l
        },
        m = {
          FADE: "fade",
          SHOW: "show"
        },
        E = {
          TOOLTIP: ".tooltip",
          TOOLTIP_INNER: ".tooltip-inner"
        },
        v = {
          element: !1,
          enabled: !1
        },
        T = {
          HOVER: "hover",
          FOCUS: "focus",
          CLICK: "click",
          MANUAL: "manual"
        },
        I = function () {
          function h(t, e) {
            n(this, h), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._isTransitioning = !1, this._tether = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
          }
          return h.prototype.enable = function () {
            this._isEnabled = !0
          }, h.prototype.disable = function () {
            this._isEnabled = !1
          }, h.prototype.toggleEnabled = function () {
            this._isEnabled = !this._isEnabled
          }, h.prototype.toggle = function (e) {
            if (e) {
              var n = this.constructor.DATA_KEY,
                i = t(e.currentTarget).data(n);
              i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
            } else {
              if (t(this.getTipElement()).hasClass(m.SHOW)) return void this._leave(null, this);
              this._enter(null, this)
            }
          }, h.prototype.dispose = function () {
            clearTimeout(this._timeout), this.cleanupTether(), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._tether = null, this.element = null, this.config = null, this.tip = null
          }, h.prototype.show = function () {
            var e = this;
            if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
            var n = t.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
              if (this._isTransitioning) throw new Error("Tooltip is transitioning");
              t(this.element).trigger(n);
              var i = t.contains(this.element.ownerDocument.documentElement, this.element);
              if (n.isDefaultPrevented() || !i) return;
              var o = this.getTipElement(),
                s = r.getUID(this.constructor.NAME);
              o.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && t(o).addClass(m.FADE);
              var a = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                l = this._getAttachment(a),
                c = this.config.container === !1 ? document.body : t(this.config.container);
              t(o).data(this.constructor.DATA_KEY, this).appendTo(c), t(this.element).trigger(this.constructor.Event.INSERTED), this._tether = new Tether({
                attachment: l,
                element: o,
                target: this.element,
                classes: v,
                classPrefix: u,
                offset: this.config.offset,
                constraints: this.config.constraints,
                addTargetClasses: !1
              }), r.reflow(o), this._tether.position(), t(o).addClass(m.SHOW);
              var d = function () {
                var n = e._hoverState;
                e._hoverState = null, e._isTransitioning = !1, t(e.element).trigger(e.constructor.Event.SHOWN), n === g.OUT && e._leave(null, e)
              };
              if (r.supportsTransitionEnd() && t(this.tip).hasClass(m.FADE)) return this._isTransitioning = !0, void t(this.tip).one(r.TRANSITION_END, d).emulateTransitionEnd(h._TRANSITION_DURATION);
              d()
            }
          }, h.prototype.hide = function (e) {
            var n = this,
              i = this.getTipElement(),
              o = t.Event(this.constructor.Event.HIDE);
            if (this._isTransitioning) throw new Error("Tooltip is transitioning");
            var s = function () {
              n._hoverState !== g.SHOW && i.parentNode && i.parentNode.removeChild(i), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), n._isTransitioning = !1, n.cleanupTether(), e && e()
            };
            t(this.element).trigger(o), o.isDefaultPrevented() || (t(i).removeClass(m.SHOW), this._activeTrigger[T.CLICK] = !1, this._activeTrigger[T.FOCUS] = !1, this._activeTrigger[T.HOVER] = !1, r.supportsTransitionEnd() && t(this.tip).hasClass(m.FADE) ? (this._isTransitioning = !0, t(i).one(r.TRANSITION_END, s).emulateTransitionEnd(c)) : s(), this._hoverState = "")
          }, h.prototype.isWithContent = function () {
            return Boolean(this.getTitle())
          }, h.prototype.getTipElement = function () {
            return this.tip = this.tip || t(this.config.template)[0]
          }, h.prototype.setContent = function () {
            var e = t(this.getTipElement());
            this.setElementContent(e.find(E.TOOLTIP_INNER), this.getTitle()), e.removeClass(m.FADE + " " + m.SHOW), this.cleanupTether()
          }, h.prototype.setElementContent = function (e, n) {
            var o = this.config.html;
            "object" === ("undefined" == typeof n ? "undefined" : i(n)) && (n.nodeType || n.jquery) ? o ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text()): e[o ? "html" : "text"](n)
          }, h.prototype.getTitle = function () {
            var t = this.element.getAttribute("data-original-title");
            return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
          }, h.prototype.cleanupTether = function () {
            this._tether && this._tether.destroy()
          }, h.prototype._getAttachment = function (t) {
            return _[t.toUpperCase()]
          }, h.prototype._setListeners = function () {
            var e = this,
              n = this.config.trigger.split(" ");
            n.forEach(function (n) {
              if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function (t) {
                return e.toggle(t)
              });
              else if (n !== T.MANUAL) {
                var i = n === T.HOVER ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                  o = n === T.HOVER ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                t(e.element).on(i, e.config.selector, function (t) {
                  return e._enter(t)
                }).on(o, e.config.selector, function (t) {
                  return e._leave(t)
                })
              }
              t(e.element).closest(".modal").on("hide.bs.modal", function () {
                return e.hide()
              })
            }), this.config.selector ? this.config = t.extend({}, this.config, {
              trigger: "manual",
              selector: ""
            }) : this._fixTitle()
          }, h.prototype._fixTitle = function () {
            var t = i(this.element.getAttribute("data-original-title"));
            (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
          }, h.prototype._enter = function (e, n) {
            var i = this.constructor.DATA_KEY;
            return n = n || t(e.currentTarget).data(i), n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? T.FOCUS : T.HOVER] = !0), t(n.getTipElement()).hasClass(m.SHOW) || n._hoverState === g.SHOW ? void(n._hoverState = g.SHOW) : (clearTimeout(n._timeout), n._hoverState = g.SHOW, n.config.delay && n.config.delay.show ? void(n._timeout = setTimeout(function () {
              n._hoverState === g.SHOW && n.show()
            }, n.config.delay.show)) : void n.show())
          }, h.prototype._leave = function (e, n) {
            var i = this.constructor.DATA_KEY;
            if (n = n || t(e.currentTarget).data(i), n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? T.FOCUS : T.HOVER] = !1), !n._isWithActiveTrigger()) return clearTimeout(n._timeout), n._hoverState = g.OUT, n.config.delay && n.config.delay.hide ? void(n._timeout = setTimeout(function () {
              n._hoverState === g.OUT && n.hide()
            }, n.config.delay.hide)) : void n.hide()
          }, h.prototype._isWithActiveTrigger = function () {
            for (var t in this._activeTrigger)
              if (this._activeTrigger[t]) return !0;
            return !1
          }, h.prototype._getConfig = function (n) {
            return n = t.extend({}, this.constructor.Default, t(this.element).data(), n), n.delay && "number" == typeof n.delay && (n.delay = {
              show: n.delay,
              hide: n.delay
            }), r.typeCheckConfig(e, n, this.constructor.DefaultType), n
          }, h.prototype._getDelegateConfig = function () {
            var t = {};
            if (this.config)
              for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
            return t
          }, h._jQueryInterface = function (e) {
            return this.each(function () {
              var n = t(this).data(a),
                o = "object" === ("undefined" == typeof e ? "undefined" : i(e)) && e;
              if ((n || !/dispose|hide/.test(e)) && (n || (n = new h(this, o), t(this).data(a, n)), "string" == typeof e)) {
                if (void 0 === n[e]) throw new Error('No method named "' + e + '"');
                n[e]()
              }
            })
          }, o(h, null, [{
            key: "VERSION",
            get: function () {
              return s
            }
          }, {
            key: "Default",
            get: function () {
              return d
            }
          }, {
            key: "NAME",
            get: function () {
              return e
            }
          }, {
            key: "DATA_KEY",
            get: function () {
              return a
            }
          }, {
            key: "Event",
            get: function () {
              return p
            }
          }, {
            key: "EVENT_KEY",
            get: function () {
              return l
            }
          }, {
            key: "DefaultType",
            get: function () {
              return f
            }
          }]), h
        }();
      return t.fn[e] = I._jQueryInterface, t.fn[e].Constructor = I, t.fn[e].noConflict = function () {
        return t.fn[e] = h, I._jQueryInterface
      }, I
    }(jQuery));
  (function (r) {
    var a = "popover",
      l = "4.0.0-alpha.6",
      h = "bs.popover",
      c = "." + h,
      u = r.fn[a],
      d = r.extend({}, s.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
      }),
      f = r.extend({}, s.DefaultType, {
        content: "(string|element|function)"
      }),
      _ = {
        FADE: "fade",
        SHOW: "show"
      },
      g = {
        TITLE: ".popover-title",
        CONTENT: ".popover-content"
      },
      p = {
        HIDE: "hide" + c,
        HIDDEN: "hidden" + c,
        SHOW: "show" + c,
        SHOWN: "shown" + c,
        INSERTED: "inserted" + c,
        CLICK: "click" + c,
        FOCUSIN: "focusin" + c,
        FOCUSOUT: "focusout" + c,
        MOUSEENTER: "mouseenter" + c,
        MOUSELEAVE: "mouseleave" + c
      },
      m = function (s) {
        function u() {
          return n(this, u), t(this, s.apply(this, arguments))
        }
        return e(u, s), u.prototype.isWithContent = function () {
          return this.getTitle() || this._getContent()
        }, u.prototype.getTipElement = function () {
          return this.tip = this.tip || r(this.config.template)[0]
        }, u.prototype.setContent = function () {
          var t = r(this.getTipElement());
          this.setElementContent(t.find(g.TITLE), this.getTitle()), this.setElementContent(t.find(g.CONTENT), this._getContent()), t.removeClass(_.FADE + " " + _.SHOW), this.cleanupTether()
        }, u.prototype._getContent = function () {
          return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content)
        }, u._jQueryInterface = function (t) {
          return this.each(function () {
            var e = r(this).data(h),
              n = "object" === ("undefined" == typeof t ? "undefined" : i(t)) ? t : null;
            if ((e || !/destroy|hide/.test(t)) && (e || (e = new u(this, n), r(this).data(h, e)), "string" == typeof t)) {
              if (void 0 === e[t]) throw new Error('No method named "' + t + '"');
              e[t]()
            }
          })
        }, o(u, null, [{
          key: "VERSION",
          get: function () {
            return l
          }
        }, {
          key: "Default",
          get: function () {
            return d
          }
        }, {
          key: "NAME",
          get: function () {
            return a
          }
        }, {
          key: "DATA_KEY",
          get: function () {
            return h
          }
        }, {
          key: "Event",
          get: function () {
            return p
          }
        }, {
          key: "EVENT_KEY",
          get: function () {
            return c
          }
        }, {
          key: "DefaultType",
          get: function () {
            return f
          }
        }]), u
      }(s);
    return r.fn[a] = m._jQueryInterface, r.fn[a].Constructor = m, r.fn[a].noConflict = function () {
      return r.fn[a] = u, m._jQueryInterface
    }, m
  })(jQuery)
}();

// FIX IE
/*!
 * IE10 viewport hack for Surface/desktop Windows 8 bug
 * Copyright 2014-2017 The Bootstrap Authors
 * Copyright 2014-2017 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

// See the Getting Started docs for more information:
// https://getbootstrap.com/getting-started/#support-ie10-width

(function () {
  'use strict'

  if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style')
    msViewportStyle.appendChild(
      document.createTextNode(
        '@-ms-viewport{width:auto!important}'
      )
    )
    document.head.appendChild(msViewportStyle)
  }

}());

// Masonry
/*!
 * imagesLoaded PACKAGED v4.1.3
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

! function (e, t) {
  "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function () {
  function e() {}
  var t = e.prototype;
  return t.on = function (e, t) {
    if (e && t) {
      var i = this._events = this._events || {},
        n = i[e] = i[e] || [];
      return -1 == n.indexOf(t) && n.push(t), this
    }
  }, t.once = function (e, t) {
    if (e && t) {
      this.on(e, t);
      var i = this._onceEvents = this._onceEvents || {},
        n = i[e] = i[e] || {};
      return n[t] = !0, this
    }
  }, t.off = function (e, t) {
    var i = this._events && this._events[e];
    if (i && i.length) {
      var n = i.indexOf(t);
      return -1 != n && i.splice(n, 1), this
    }
  }, t.emitEvent = function (e, t) {
    var i = this._events && this._events[e];
    if (i && i.length) {
      var n = 0,
        o = i[n];
      t = t || [];
      for (var r = this._onceEvents && this._onceEvents[e]; o;) {
        var s = r && r[o];
        s && (this.off(e, o), delete r[o]), o.apply(this, t), n += s ? 0 : 1, o = i[n]
      }
      return this
    }
  }, t.allOff = t.removeAllListeners = function () {
    delete this._events, delete this._onceEvents
  }, e
}),
function (e, t) {
  "use strict";
  "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function (i) {
    return t(e, i)
  }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter)
}("undefined" != typeof window ? window : this, function (e, t) {
  function i(e, t) {
    for (var i in t) e[i] = t[i];
    return e
  }

  function n(e) {
    var t = [];
    if (Array.isArray(e)) t = e;
    else if ("number" == typeof e.length)
      for (var i = 0; i < e.length; i++) t.push(e[i]);
    else t.push(e);
    return t
  }

  function o(e, t, r) {
    return this instanceof o ? ("string" == typeof e && (e = document.querySelectorAll(e)), this.elements = n(e), this.options = i({}, this.options), "function" == typeof t ? r = t : i(this.options, t), r && this.on("always", r), this.getImages(), h && (this.jqDeferred = new h.Deferred), void setTimeout(function () {
      this.check()
    }.bind(this))) : new o(e, t, r)
  }

  function r(e) {
    this.img = e
  }

  function s(e, t) {
    this.url = e, this.element = t, this.img = new Image
  }
  var h = e.jQuery,
    a = e.console;
  o.prototype = Object.create(t.prototype), o.prototype.options = {}, o.prototype.getImages = function () {
    this.images = [], this.elements.forEach(this.addElementImages, this)
  }, o.prototype.addElementImages = function (e) {
    "IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);
    var t = e.nodeType;
    if (t && d[t]) {
      for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
        var o = i[n];
        this.addImage(o)
      }
      if ("string" == typeof this.options.background) {
        var r = e.querySelectorAll(this.options.background);
        for (n = 0; n < r.length; n++) {
          var s = r[n];
          this.addElementBackgroundImages(s)
        }
      }
    }
  };
  var d = {
    1: !0,
    9: !0,
    11: !0
  };
  return o.prototype.addElementBackgroundImages = function (e) {
    var t = getComputedStyle(e);
    if (t)
      for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n;) {
        var o = n && n[2];
        o && this.addBackground(o, e), n = i.exec(t.backgroundImage)
      }
  }, o.prototype.addImage = function (e) {
    var t = new r(e);
    this.images.push(t)
  }, o.prototype.addBackground = function (e, t) {
    var i = new s(e, t);
    this.images.push(i)
  }, o.prototype.check = function () {
    function e(e, i, n) {
      setTimeout(function () {
        t.progress(e, i, n)
      })
    }
    var t = this;
    return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function (t) {
      t.once("progress", e), t.check()
    }) : void this.complete()
  }, o.prototype.progress = function (e, t, i) {
    this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, e, t)
  }, o.prototype.complete = function () {
    var e = this.hasAnyBroken ? "fail" : "done";
    if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
      var t = this.hasAnyBroken ? "reject" : "resolve";
      this.jqDeferred[t](this)
    }
  }, r.prototype = Object.create(t.prototype), r.prototype.check = function () {
    var e = this.getIsImageComplete();
    return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
  }, r.prototype.getIsImageComplete = function () {
    return this.img.complete && void 0 !== this.img.naturalWidth
  }, r.prototype.confirm = function (e, t) {
    this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
  }, r.prototype.handleEvent = function (e) {
    var t = "on" + e.type;
    this[t] && this[t](e)
  }, r.prototype.onload = function () {
    this.confirm(!0, "onload"), this.unbindEvents()
  }, r.prototype.onerror = function () {
    this.confirm(!1, "onerror"), this.unbindEvents()
  }, r.prototype.unbindEvents = function () {
    this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
  }, s.prototype = Object.create(r.prototype), s.prototype.check = function () {
    this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
    var e = this.getIsImageComplete();
    e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
  }, s.prototype.unbindEvents = function () {
    this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
  }, s.prototype.confirm = function (e, t) {
    this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
  }, o.makeJQueryPlugin = function (t) {
    t = t || e.jQuery, t && (h = t, h.fn.imagesLoaded = function (e, t) {
      var i = new o(this, e, t);
      return i.jqDeferred.promise(h(this))
    })
  }, o.makeJQueryPlugin(), o
});


/*!
 * Masonry PACKAGED v4.2.0
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

! function (t, e) {
  "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
    return e(t, i)
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function (t, e) {
  "use strict";

  function i(i, r, a) {
    function h(t, e, n) {
      var o, r = "$()." + i + '("' + e + '")';
      return t.each(function (t, h) {
        var u = a.data(h, i);
        if (!u) return void s(i + " not initialized. Cannot call methods, i.e. " + r);
        var d = u[e];
        if (!d || "_" == e.charAt(0)) return void s(r + " is not a valid method");
        var l = d.apply(u, n);
        o = void 0 === o ? l : o
      }), void 0 !== o ? o : t
    }

    function u(t, e) {
      t.each(function (t, n) {
        var o = a.data(n, i);
        o ? (o.option(e), o._init()) : (o = new r(n, e), a.data(n, i, o))
      })
    }
    a = a || e || t.jQuery, a && (r.prototype.option || (r.prototype.option = function (t) {
      a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
    }), a.fn[i] = function (t) {
      if ("string" == typeof t) {
        var e = o.call(arguments, 1);
        return h(this, t, e)
      }
      return u(this, t), this
    }, n(a))
  }

  function n(t) {
    !t || t && t.bridget || (t.bridget = i)
  }
  var o = Array.prototype.slice,
    r = t.console,
    s = "undefined" == typeof r ? function () {} : function (t) {
      r.error(t)
    };
  return n(e || t.jQuery), i
}),
function (t, e) {
  "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function () {
  function t() {}
  var e = t.prototype;
  return e.on = function (t, e) {
    if (t && e) {
      var i = this._events = this._events || {},
        n = i[t] = i[t] || [];
      return -1 == n.indexOf(e) && n.push(e), this
    }
  }, e.once = function (t, e) {
    if (t && e) {
      this.on(t, e);
      var i = this._onceEvents = this._onceEvents || {},
        n = i[t] = i[t] || {};
      return n[e] = !0, this
    }
  }, e.off = function (t, e) {
    var i = this._events && this._events[t];
    if (i && i.length) {
      var n = i.indexOf(e);
      return -1 != n && i.splice(n, 1), this
    }
  }, e.emitEvent = function (t, e) {
    var i = this._events && this._events[t];
    if (i && i.length) {
      var n = 0,
        o = i[n];
      e = e || [];
      for (var r = this._onceEvents && this._onceEvents[t]; o;) {
        var s = r && r[o];
        s && (this.off(t, o), delete r[o]), o.apply(this, e), n += s ? 0 : 1, o = i[n]
      }
      return this
    }
  }, t
}),
function (t, e) {
  "use strict";
  "function" == typeof define && define.amd ? define("get-size/get-size", [], function () {
    return e()
  }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function () {
  "use strict";

  function t(t) {
    var e = parseFloat(t),
      i = -1 == t.indexOf("%") && !isNaN(e);
    return i && e
  }

  function e() {}

  function i() {
    for (var t = {
        width: 0,
        height: 0,
        innerWidth: 0,
        innerHeight: 0,
        outerWidth: 0,
        outerHeight: 0
      }, e = 0; u > e; e++) {
      var i = h[e];
      t[i] = 0
    }
    return t
  }

  function n(t) {
    var e = getComputedStyle(t);
    return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
  }

  function o() {
    if (!d) {
      d = !0;
      var e = document.createElement("div");
      e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
      var i = document.body || document.documentElement;
      i.appendChild(e);
      var o = n(e);
      r.isBoxSizeOuter = s = 200 == t(o.width), i.removeChild(e)
    }
  }

  function r(e) {
    if (o(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
      var r = n(e);
      if ("none" == r.display) return i();
      var a = {};
      a.width = e.offsetWidth, a.height = e.offsetHeight;
      for (var d = a.isBorderBox = "border-box" == r.boxSizing, l = 0; u > l; l++) {
        var c = h[l],
          f = r[c],
          m = parseFloat(f);
        a[c] = isNaN(m) ? 0 : m
      }
      var p = a.paddingLeft + a.paddingRight,
        g = a.paddingTop + a.paddingBottom,
        y = a.marginLeft + a.marginRight,
        v = a.marginTop + a.marginBottom,
        _ = a.borderLeftWidth + a.borderRightWidth,
        z = a.borderTopWidth + a.borderBottomWidth,
        E = d && s,
        b = t(r.width);
      b !== !1 && (a.width = b + (E ? 0 : p + _));
      var x = t(r.height);
      return x !== !1 && (a.height = x + (E ? 0 : g + z)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (g + z), a.outerWidth = a.width + y, a.outerHeight = a.height + v, a
    }
  }
  var s, a = "undefined" == typeof console ? e : function (t) {
      console.error(t)
    },
    h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
    u = h.length,
    d = !1;
  return r
}),
function (t, e) {
  "use strict";
  "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function () {
  "use strict";
  var t = function () {
    var t = window.Element.prototype;
    if (t.matches) return "matches";
    if (t.matchesSelector) return "matchesSelector";
    for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
      var n = e[i],
        o = n + "MatchesSelector";
      if (t[o]) return o
    }
  }();
  return function (e, i) {
    return e[t](i)
  }
}),
function (t, e) {
  "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
    return e(t, i)
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function (t, e) {
  var i = {};
  i.extend = function (t, e) {
    for (var i in e) t[i] = e[i];
    return t
  }, i.modulo = function (t, e) {
    return (t % e + e) % e
  }, i.makeArray = function (t) {
    var e = [];
    if (Array.isArray(t)) e = t;
    else if (t && "object" == typeof t && "number" == typeof t.length)
      for (var i = 0; i < t.length; i++) e.push(t[i]);
    else e.push(t);
    return e
  }, i.removeFrom = function (t, e) {
    var i = t.indexOf(e); - 1 != i && t.splice(i, 1)
  }, i.getParent = function (t, i) {
    for (; t != document.body;)
      if (t = t.parentNode, e(t, i)) return t
  }, i.getQueryElement = function (t) {
    return "string" == typeof t ? document.querySelector(t) : t
  }, i.handleEvent = function (t) {
    var e = "on" + t.type;
    this[e] && this[e](t)
  }, i.filterFindElements = function (t, n) {
    t = i.makeArray(t);
    var o = [];
    return t.forEach(function (t) {
      if (t instanceof HTMLElement) {
        if (!n) return void o.push(t);
        e(t, n) && o.push(t);
        for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++) o.push(i[r])
      }
    }), o
  }, i.debounceMethod = function (t, e, i) {
    var n = t.prototype[e],
      o = e + "Timeout";
    t.prototype[e] = function () {
      var t = this[o];
      t && clearTimeout(t);
      var e = arguments,
        r = this;
      this[o] = setTimeout(function () {
        n.apply(r, e), delete r[o]
      }, i || 100)
    }
  }, i.docReady = function (t) {
    var e = document.readyState;
    "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
  }, i.toDashed = function (t) {
    return t.replace(/(.)([A-Z])/g, function (t, e, i) {
      return e + "-" + i
    }).toLowerCase()
  };
  var n = t.console;
  return i.htmlInit = function (e, o) {
    i.docReady(function () {
      var r = i.toDashed(o),
        s = "data-" + r,
        a = document.querySelectorAll("[" + s + "]"),
        h = document.querySelectorAll(".js-" + r),
        u = i.makeArray(a).concat(i.makeArray(h)),
        d = s + "-options",
        l = t.jQuery;
      u.forEach(function (t) {
        var i, r = t.getAttribute(s) || t.getAttribute(d);
        try {
          i = r && JSON.parse(r)
        } catch (a) {
          return void(n && n.error("Error parsing " + s + " on " + t.className + ": " + a))
        }
        var h = new e(t, i);
        l && l.data(t, o, h)
      })
    })
  }, i
}),
function (t, e) {
  "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function (t, e) {
  "use strict";

  function i(t) {
    for (var e in t) return !1;
    return e = null, !0
  }

  function n(t, e) {
    t && (this.element = t, this.layout = e, this.position = {
      x: 0,
      y: 0
    }, this._create())
  }

  function o(t) {
    return t.replace(/([A-Z])/g, function (t) {
      return "-" + t.toLowerCase()
    })
  }
  var r = document.documentElement.style,
    s = "string" == typeof r.transition ? "transition" : "WebkitTransition",
    a = "string" == typeof r.transform ? "transform" : "WebkitTransform",
    h = {
      WebkitTransition: "webkitTransitionEnd",
      transition: "transitionend"
    }[s],
    u = {
      transform: a,
      transition: s,
      transitionDuration: s + "Duration",
      transitionProperty: s + "Property",
      transitionDelay: s + "Delay"
    },
    d = n.prototype = Object.create(t.prototype);
  d.constructor = n, d._create = function () {
    this._transn = {
      ingProperties: {},
      clean: {},
      onEnd: {}
    }, this.css({
      position: "absolute"
    })
  }, d.handleEvent = function (t) {
    var e = "on" + t.type;
    this[e] && this[e](t)
  }, d.getSize = function () {
    this.size = e(this.element)
  }, d.css = function (t) {
    var e = this.element.style;
    for (var i in t) {
      var n = u[i] || i;
      e[n] = t[i]
    }
  }, d.getPosition = function () {
    var t = getComputedStyle(this.element),
      e = this.layout._getOption("originLeft"),
      i = this.layout._getOption("originTop"),
      n = t[e ? "left" : "right"],
      o = t[i ? "top" : "bottom"],
      r = this.layout.size,
      s = -1 != n.indexOf("%") ? parseFloat(n) / 100 * r.width : parseInt(n, 10),
      a = -1 != o.indexOf("%") ? parseFloat(o) / 100 * r.height : parseInt(o, 10);
    s = isNaN(s) ? 0 : s, a = isNaN(a) ? 0 : a, s -= e ? r.paddingLeft : r.paddingRight, a -= i ? r.paddingTop : r.paddingBottom, this.position.x = s, this.position.y = a
  }, d.layoutPosition = function () {
    var t = this.layout.size,
      e = {},
      i = this.layout._getOption("originLeft"),
      n = this.layout._getOption("originTop"),
      o = i ? "paddingLeft" : "paddingRight",
      r = i ? "left" : "right",
      s = i ? "right" : "left",
      a = this.position.x + t[o];
    e[r] = this.getXValue(a), e[s] = "";
    var h = n ? "paddingTop" : "paddingBottom",
      u = n ? "top" : "bottom",
      d = n ? "bottom" : "top",
      l = this.position.y + t[h];
    e[u] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this])
  }, d.getXValue = function (t) {
    var e = this.layout._getOption("horizontal");
    return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
  }, d.getYValue = function (t) {
    var e = this.layout._getOption("horizontal");
    return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
  }, d._transitionTo = function (t, e) {
    this.getPosition();
    var i = this.position.x,
      n = this.position.y,
      o = parseInt(t, 10),
      r = parseInt(e, 10),
      s = o === this.position.x && r === this.position.y;
    if (this.setPosition(t, e), s && !this.isTransitioning) return void this.layoutPosition();
    var a = t - i,
      h = e - n,
      u = {};
    u.transform = this.getTranslate(a, h), this.transition({
      to: u,
      onTransitionEnd: {
        transform: this.layoutPosition
      },
      isCleaning: !0
    })
  }, d.getTranslate = function (t, e) {
    var i = this.layout._getOption("originLeft"),
      n = this.layout._getOption("originTop");
    return t = i ? t : -t, e = n ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
  }, d.goTo = function (t, e) {
    this.setPosition(t, e), this.layoutPosition()
  }, d.moveTo = d._transitionTo, d.setPosition = function (t, e) {
    this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
  }, d._nonTransition = function (t) {
    this.css(t.to), t.isCleaning && this._removeStyles(t.to);
    for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
  }, d.transition = function (t) {
    if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
    var e = this._transn;
    for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
    for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
    if (t.from) {
      this.css(t.from);
      var n = this.element.offsetHeight;
      n = null
    }
    this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
  };
  var l = "opacity," + o(a);
  d.enableTransition = function () {
    if (!this.isTransitioning) {
      var t = this.layout.options.transitionDuration;
      t = "number" == typeof t ? t + "ms" : t, this.css({
        transitionProperty: l,
        transitionDuration: t,
        transitionDelay: this.staggerDelay || 0
      }), this.element.addEventListener(h, this, !1)
    }
  }, d.onwebkitTransitionEnd = function (t) {
    this.ontransitionend(t)
  }, d.onotransitionend = function (t) {
    this.ontransitionend(t)
  };
  var c = {
    "-webkit-transform": "transform"
  };
  d.ontransitionend = function (t) {
    if (t.target === this.element) {
      var e = this._transn,
        n = c[t.propertyName] || t.propertyName;
      if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) {
        var o = e.onEnd[n];
        o.call(this), delete e.onEnd[n]
      }
      this.emitEvent("transitionEnd", [this])
    }
  }, d.disableTransition = function () {
    this.removeTransitionStyles(), this.element.removeEventListener(h, this, !1), this.isTransitioning = !1
  }, d._removeStyles = function (t) {
    var e = {};
    for (var i in t) e[i] = "";
    this.css(e)
  };
  var f = {
    transitionProperty: "",
    transitionDuration: "",
    transitionDelay: ""
  };
  return d.removeTransitionStyles = function () {
    this.css(f)
  }, d.stagger = function (t) {
    t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
  }, d.removeElem = function () {
    this.element.parentNode.removeChild(this.element), this.css({
      display: ""
    }), this.emitEvent("remove", [this])
  }, d.remove = function () {
    return s && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
      this.removeElem()
    }), void this.hide()) : void this.removeElem()
  }, d.reveal = function () {
    delete this.isHidden, this.css({
      display: ""
    });
    var t = this.layout.options,
      e = {},
      i = this.getHideRevealTransitionEndProperty("visibleStyle");
    e[i] = this.onRevealTransitionEnd, this.transition({
      from: t.hiddenStyle,
      to: t.visibleStyle,
      isCleaning: !0,
      onTransitionEnd: e
    })
  }, d.onRevealTransitionEnd = function () {
    this.isHidden || this.emitEvent("reveal")
  }, d.getHideRevealTransitionEndProperty = function (t) {
    var e = this.layout.options[t];
    if (e.opacity) return "opacity";
    for (var i in e) return i
  }, d.hide = function () {
    this.isHidden = !0, this.css({
      display: ""
    });
    var t = this.layout.options,
      e = {},
      i = this.getHideRevealTransitionEndProperty("hiddenStyle");
    e[i] = this.onHideTransitionEnd, this.transition({
      from: t.visibleStyle,
      to: t.hiddenStyle,
      isCleaning: !0,
      onTransitionEnd: e
    })
  }, d.onHideTransitionEnd = function () {
    this.isHidden && (this.css({
      display: "none"
    }), this.emitEvent("hide"))
  }, d.destroy = function () {
    this.css({
      position: "",
      left: "",
      right: "",
      top: "",
      bottom: "",
      transition: "",
      transform: ""
    })
  }, n
}),
function (t, e) {
  "use strict";
  "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, n, o, r) {
    return e(t, i, n, o, r)
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function (t, e, i, n, o) {
  "use strict";

  function r(t, e) {
    var i = n.getQueryElement(t);
    if (!i) return void(h && h.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
    this.element = i, u && (this.$element = u(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e);
    var o = ++l;
    this.element.outlayerGUID = o, c[o] = this, this._create();
    var r = this._getOption("initLayout");
    r && this.layout()
  }

  function s(t) {
    function e() {
      t.apply(this, arguments)
    }
    return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
  }

  function a(t) {
    if ("number" == typeof t) return t;
    var e = t.match(/(^\d*\.?\d*)(\w*)/),
      i = e && e[1],
      n = e && e[2];
    if (!i.length) return 0;
    i = parseFloat(i);
    var o = m[n] || 1;
    return i * o
  }
  var h = t.console,
    u = t.jQuery,
    d = function () {},
    l = 0,
    c = {};
  r.namespace = "outlayer", r.Item = o, r.defaults = {
    containerStyle: {
      position: "relative"
    },
    initLayout: !0,
    originLeft: !0,
    originTop: !0,
    resize: !0,
    resizeContainer: !0,
    transitionDuration: "0.4s",
    hiddenStyle: {
      opacity: 0,
      transform: "scale(0.001)"
    },
    visibleStyle: {
      opacity: 1,
      transform: "scale(1)"
    }
  };
  var f = r.prototype;
  n.extend(f, e.prototype), f.option = function (t) {
    n.extend(this.options, t)
  }, f._getOption = function (t) {
    var e = this.constructor.compatOptions[t];
    return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
  }, r.compatOptions = {
    initLayout: "isInitLayout",
    horizontal: "isHorizontal",
    layoutInstant: "isLayoutInstant",
    originLeft: "isOriginLeft",
    originTop: "isOriginTop",
    resize: "isResizeBound",
    resizeContainer: "isResizingContainer"
  }, f._create = function () {
    this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle);
    var t = this._getOption("resize");
    t && this.bindResize()
  }, f.reloadItems = function () {
    this.items = this._itemize(this.element.children)
  }, f._itemize = function (t) {
    for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
      var r = e[o],
        s = new i(r, this);
      n.push(s)
    }
    return n
  }, f._filterFindItemElements = function (t) {
    return n.filterFindElements(t, this.options.itemSelector)
  }, f.getItemElements = function () {
    return this.items.map(function (t) {
      return t.element
    })
  }, f.layout = function () {
    this._resetLayout(), this._manageStamps();
    var t = this._getOption("layoutInstant"),
      e = void 0 !== t ? t : !this._isLayoutInited;
    this.layoutItems(this.items, e), this._isLayoutInited = !0
  }, f._init = f.layout, f._resetLayout = function () {
    this.getSize()
  }, f.getSize = function () {
    this.size = i(this.element)
  }, f._getMeasurement = function (t, e) {
    var n, o = this.options[t];
    o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), this[t] = n ? i(n)[e] : o) : this[t] = 0
  }, f.layoutItems = function (t, e) {
    t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
  }, f._getItemsForLayout = function (t) {
    return t.filter(function (t) {
      return !t.isIgnored
    })
  }, f._layoutItems = function (t, e) {
    if (this._emitCompleteOnItems("layout", t), t && t.length) {
      var i = [];
      t.forEach(function (t) {
        var n = this._getItemLayoutPosition(t);
        n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n)
      }, this), this._processLayoutQueue(i)
    }
  }, f._getItemLayoutPosition = function () {
    return {
      x: 0,
      y: 0
    }
  }, f._processLayoutQueue = function (t) {
    this.updateStagger(), t.forEach(function (t, e) {
      this._positionItem(t.item, t.x, t.y, t.isInstant, e)
    }, this)
  }, f.updateStagger = function () {
    var t = this.options.stagger;
    return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = a(t), this.stagger)
  }, f._positionItem = function (t, e, i, n, o) {
    n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i))
  }, f._postLayout = function () {
    this.resizeContainer()
  }, f.resizeContainer = function () {
    var t = this._getOption("resizeContainer");
    if (t) {
      var e = this._getContainerSize();
      e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
    }
  }, f._getContainerSize = d, f._setContainerMeasure = function (t, e) {
    if (void 0 !== t) {
      var i = this.size;
      i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
    }
  }, f._emitCompleteOnItems = function (t, e) {
    function i() {
      o.dispatchEvent(t + "Complete", null, [e])
    }

    function n() {
      s++, s == r && i()
    }
    var o = this,
      r = e.length;
    if (!e || !r) return void i();
    var s = 0;
    e.forEach(function (e) {
      e.once(t, n)
    })
  }, f.dispatchEvent = function (t, e, i) {
    var n = e ? [e].concat(i) : i;
    if (this.emitEvent(t, n), u)
      if (this.$element = this.$element || u(this.element), e) {
        var o = u.Event(e);
        o.type = t, this.$element.trigger(o, i)
      } else this.$element.trigger(t, i)
  }, f.ignore = function (t) {
    var e = this.getItem(t);
    e && (e.isIgnored = !0)
  }, f.unignore = function (t) {
    var e = this.getItem(t);
    e && delete e.isIgnored
  }, f.stamp = function (t) {
    t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
  }, f.unstamp = function (t) {
    t = this._find(t), t && t.forEach(function (t) {
      n.removeFrom(this.stamps, t), this.unignore(t)
    }, this)
  }, f._find = function (t) {
    return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t)) : void 0
  }, f._manageStamps = function () {
    this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
  }, f._getBoundingRect = function () {
    var t = this.element.getBoundingClientRect(),
      e = this.size;
    this._boundingRect = {
      left: t.left + e.paddingLeft + e.borderLeftWidth,
      top: t.top + e.paddingTop + e.borderTopWidth,
      right: t.right - (e.paddingRight + e.borderRightWidth),
      bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
    }
  }, f._manageStamp = d, f._getElementOffset = function (t) {
    var e = t.getBoundingClientRect(),
      n = this._boundingRect,
      o = i(t),
      r = {
        left: e.left - n.left - o.marginLeft,
        top: e.top - n.top - o.marginTop,
        right: n.right - e.right - o.marginRight,
        bottom: n.bottom - e.bottom - o.marginBottom
      };
    return r
  }, f.handleEvent = n.handleEvent, f.bindResize = function () {
    t.addEventListener("resize", this), this.isResizeBound = !0
  }, f.unbindResize = function () {
    t.removeEventListener("resize", this), this.isResizeBound = !1
  }, f.onresize = function () {
    this.resize()
  }, n.debounceMethod(r, "onresize", 100), f.resize = function () {
    this.isResizeBound && this.needsResizeLayout() && this.layout()
  }, f.needsResizeLayout = function () {
    var t = i(this.element),
      e = this.size && t;
    return e && t.innerWidth !== this.size.innerWidth
  }, f.addItems = function (t) {
    var e = this._itemize(t);
    return e.length && (this.items = this.items.concat(e)), e
  }, f.appended = function (t) {
    var e = this.addItems(t);
    e.length && (this.layoutItems(e, !0), this.reveal(e))
  }, f.prepended = function (t) {
    var e = this._itemize(t);
    if (e.length) {
      var i = this.items.slice(0);
      this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
    }
  }, f.reveal = function (t) {
    if (this._emitCompleteOnItems("reveal", t), t && t.length) {
      var e = this.updateStagger();
      t.forEach(function (t, i) {
        t.stagger(i * e), t.reveal()
      })
    }
  }, f.hide = function (t) {
    if (this._emitCompleteOnItems("hide", t), t && t.length) {
      var e = this.updateStagger();
      t.forEach(function (t, i) {
        t.stagger(i * e), t.hide()
      })
    }
  }, f.revealItemElements = function (t) {
    var e = this.getItems(t);
    this.reveal(e)
  }, f.hideItemElements = function (t) {
    var e = this.getItems(t);
    this.hide(e)
  }, f.getItem = function (t) {
    for (var e = 0; e < this.items.length; e++) {
      var i = this.items[e];
      if (i.element == t) return i
    }
  }, f.getItems = function (t) {
    t = n.makeArray(t);
    var e = [];
    return t.forEach(function (t) {
      var i = this.getItem(t);
      i && e.push(i)
    }, this), e
  }, f.remove = function (t) {
    var e = this.getItems(t);
    this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function (t) {
      t.remove(), n.removeFrom(this.items, t)
    }, this)
  }, f.destroy = function () {
    var t = this.element.style;
    t.height = "", t.position = "", t.width = "", this.items.forEach(function (t) {
      t.destroy()
    }), this.unbindResize();
    var e = this.element.outlayerGUID;
    delete c[e], delete this.element.outlayerGUID, u && u.removeData(this.element, this.constructor.namespace)
  }, r.data = function (t) {
    t = n.getQueryElement(t);
    var e = t && t.outlayerGUID;
    return e && c[e]
  }, r.create = function (t, e) {
    var i = s(r);
    return i.defaults = n.extend({}, r.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, r.compatOptions), i.namespace = t, i.data = r.data, i.Item = s(o), n.htmlInit(i, t), u && u.bridget && u.bridget(t, i), i
  };
  var m = {
    ms: 1,
    s: 1e3
  };
  return r.Item = o, r
}),
function (t, e) {
  "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function (t, e) {
  var i = t.create("masonry");
  i.compatOptions.fitWidth = "isFitWidth";
  var n = i.prototype;
  return n._resetLayout = function () {
    this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
    for (var t = 0; t < this.cols; t++) this.colYs.push(0);
    this.maxY = 0, this.horizontalColIndex = 0
  }, n.measureColumns = function () {
    if (this.getContainerWidth(), !this.columnWidth) {
      var t = this.items[0],
        i = t && t.element;
      this.columnWidth = i && e(i).outerWidth || this.containerWidth
    }
    var n = this.columnWidth += this.gutter,
      o = this.containerWidth + this.gutter,
      r = o / n,
      s = n - o % n,
      a = s && 1 > s ? "round" : "floor";
    r = Math[a](r), this.cols = Math.max(r, 1)
  }, n.getContainerWidth = function () {
    var t = this._getOption("fitWidth"),
      i = t ? this.element.parentNode : this.element,
      n = e(i);
    this.containerWidth = n && n.innerWidth
  }, n._getItemLayoutPosition = function (t) {
    t.getSize();
    var e = t.size.outerWidth % this.columnWidth,
      i = e && 1 > e ? "round" : "ceil",
      n = Math[i](t.size.outerWidth / this.columnWidth);
    n = Math.min(n, this.cols);
    for (var o = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", r = this[o](n, t), s = {
        x: this.columnWidth * r.col,
        y: r.y
      }, a = r.y + t.size.outerHeight, h = n + r.col, u = r.col; h > u; u++) this.colYs[u] = a;
    return s
  }, n._getTopColPosition = function (t) {
    var e = this._getTopColGroup(t),
      i = Math.min.apply(Math, e);
    return {
      col: e.indexOf(i),
      y: i
    }
  }, n._getTopColGroup = function (t) {
    if (2 > t) return this.colYs;
    for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) e[n] = this._getColGroupY(n, t);
    return e
  }, n._getColGroupY = function (t, e) {
    if (2 > e) return this.colYs[t];
    var i = this.colYs.slice(t, t + e);
    return Math.max.apply(Math, i)
  }, n._getHorizontalColPosition = function (t, e) {
    var i = this.horizontalColIndex % this.cols,
      n = t > 1 && i + t > this.cols;
    i = n ? 0 : i;
    var o = e.size.outerWidth && e.size.outerHeight;
    return this.horizontalColIndex = o ? i + t : this.horizontalColIndex, {
      col: i,
      y: this._getColGroupY(i, t)
    }
  }, n._manageStamp = function (t) {
    var i = e(t),
      n = this._getElementOffset(t),
      o = this._getOption("originLeft"),
      r = o ? n.left : n.right,
      s = r + i.outerWidth,
      a = Math.floor(r / this.columnWidth);
    a = Math.max(0, a);
    var h = Math.floor(s / this.columnWidth);
    h -= s % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);
    for (var u = this._getOption("originTop"), d = (u ? n.top : n.bottom) + i.outerHeight, l = a; h >= l; l++) this.colYs[l] = Math.max(d, this.colYs[l])
  }, n._getContainerSize = function () {
    this.maxY = Math.max.apply(Math, this.colYs);
    var t = {
      height: this.maxY
    };
    return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
  }, n._getContainerFitWidth = function () {
    for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
    return (this.cols - t) * this.columnWidth - this.gutter
  }, n.needsResizeLayout = function () {
    var t = this.containerWidth;
    return this.getContainerWidth(), t != this.containerWidth
  }, i
});

jQuery(document).ready(function ($) {


  if ($(".hideshare")[0]) {
    var topOfOthDiv = $(".hideshare").offset().top;
    $(window).scroll(function () {
      if ($(window).scrollTop() > topOfOthDiv) { //scrolled past the other div?
        $(".share").hide(); //reached the desired point -- show div
      } else {
        $(".share").show();
      }
    });
  }

  var offset = 1250;
  var duration = 800;
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > offset) {
      jQuery('.back-to-top').fadeIn(duration);
    } else {
      jQuery('.back-to-top').fadeOut(duration);
    }
  });
  jQuery('.back-to-top').click(function (event) {
    event.preventDefault();
    jQuery('html, body').animate({
      scrollTop: 0
    }, duration);
    return false;
  })


  // alertbar later
  $(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 280) {
      $('.alertbar').fadeIn();
    } else {
      $('.alertbar').fadeOut();
    }
  });

  // masonry
  if ($('.masonrygrid').length) {
    var $grid = $('.masonrygrid').masonry({
      itemSelector: '.grid-item'
    });
    $grid.imagesLoaded().progress(function () {
      $grid.masonry();
    });
  }

  // minutes to read
  if ($('.post-read').length) {
    var txt = $('.article-post')[0].textContent,
      wordCount = txt.replace(/[^\w ]/g, "").split(/\s+/).length;

    var readingTimeInMinutes = Math.floor(wordCount / 250) + 1;
    var readingTimeAsString = readingTimeInMinutes + " min";
    $('.post-read').html(readingTimeAsString);
  }


  // Smooth scroll to an anchor
  $('a.smoothscroll[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });


  // Hide Header on on scroll down
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('header').outerHeight();

  $(window).scroll(function (event) {
    didScroll = true;
  });

  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    var st = $(this).scrollTop();
    var brandrow = $('.brandrow').css("height");

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
      return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
      // Scroll Down            
      $('header').removeClass('nav-down').addClass('nav-up');
      $('.nav-up').css('top', '-' + brandrow);

    } else {
      // Scroll Up
      if (st + $(window).height() < $(document).height()) {
        $('header').removeClass('nav-up').addClass('nav-down');
        $('.nav-up, .nav-down').css('top', '0px');
      }
    }

    lastScrollTop = st;
  }


  $('.site-content').css('margin-top', $('header').outerHeight() + 'px');


});
(function ($) {
  var newerLink = $('.newpo');
  var olderLink = $('.oldpo');
  $.get(newerLink.attr('href'), function (data) {
    newerLink.html($(data).find('.post h1.posttitle').text());
  }, "html");
  $.get(olderLink.attr('href'), function (data2) {
    olderLink.html($(data2).find('.post h1.posttitle').text());
  }, "html");
})(jQuery);
var randomRelatedIndex, showRelatedPost;
! function (e, a, l) {
  var g = {
    homePage: "https://www.masihterjaga.id",
    numPosts: 10,
    summaryLength: 0,
    titleLength: "auto",
    thumbnailWidth: 255,
    thumbnailHeight: 170,
    noImage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAA3NCSVQICAjb4U/gAAAADElEQVQImWOor68HAAL+AX7vOF2TAAAAAElFTkSuQmCC",
    containerId: "related-post",
    newTabLink: !1,
    moreText: "Baca Selengkapnya",
    callBack: function () {}
  };
  for (var t in relatedPostConfig) g[t] = "undefined" == relatedPostConfig[t] ? g[t] : relatedPostConfig[t];
  var r = function (e) {
      var t = a.createElement("script");
      t.type = "text/javascript", t.src = e, l.appendChild(t)
    },
    A = function (e) {
      var t, a, l = e.length;
      if (0 === l) return !1;
      for (; --l;) t = Math.floor(Math.random() * (l + 1)), a = e[l], e[l] = e[t], e[t] = a;
      return e
    },
    i = "object" == typeof labelArray && 0 < labelArray.length ? "/-/" + A(labelArray)[0] : "";
  randomRelatedIndex = function (e) {
    var t, a, l = e.feed.openSearch$totalResults.$t - g.numPosts,
      n = (t = 1, a = 0 < l ? l : 1, Math.floor(Math.random() * (a - t + 1)) + t);
    r(g.homePage.replace(/\/$/, "") + "/feeds/posts/summary" + i + "?alt=json-in-script&orderby=updated&start-index=" + n + "&max-results=" + g.numPosts + "&callback=showRelatedPost")
  }, showRelatedPost = function (e) {
    var t, a, l, n, r = document.getElementById(g.containerId),
      i = A(e.feed.entry),
      o = '<div class="row justify-content-center listrecent listrelated">',
      d = g.newTabLink ? ' target="_blank"' : "";
    if (r) {
      for (var h = 0; h < g.numPosts && h != i.length; h++) {
        a = i[h].title.$t, l = "auto" !== g.titleLength && g.titleLength < a.length ? a.substring(0, g.titleLength) + "&hellip;" : a, n = "media$thumbnail" in i[h] && !1 !== g.thumbnailWidth ? i[h].media$thumbnail.url.replace(/.*?:\/\//g, "//").replace(/\/s[0-9]+(\-c)?/, "/w" + g.thumbnailWidth + "-h" + g.thumbnailHeight + "-c") : g.noImage, "summary" in i[h] && 0 < g.summaryLength && i[h].summary.$t.replace(/<br ?\/?>/g, " ").replace(/<.*?>/g, "").replace(/[<>]/g, "").substring(0, g.summaryLength);
        for (var c = 0, u = i[h].link.length; c < u; c++) t = "alternate" == i[h].link[c].rel ? i[h].link[c].href : "#";
        (o += '<div class="col-lg-4 col-md-4 col-sm-4"><div class="card post height262"><a style="background-image:url(' + n + ');" class="thumbimage" href="' + t + '"' + d + '></a><div class="card-block"><h2 class="card-title"><a title="' + a + '" href="' + t + '"' + d + ">" + l + "</a></h2></div></div></div>")
      }
      r.innerHTML = o += "</div>", g.callBack()
    }
  }, r(g.homePage.replace(/\/$/, "") + "/feeds/posts/summary" + i + "?alt=json-in-script&orderby=updated&max-results=0&callback=randomRelatedIndex")
}(window, document, document.getElementsByTagName("head")[0]);
var perPage = 6;
var numPages = 3;
var firstText = 'First';
var lastText = 'Last';
var urlactivepage = location.href;
var home_page = "/";

if (typeof firstText == "undefined") firstText = "First";
if (typeof lastText == "undefined") lastText = "Last";
var noPage;
var currentPage;
var currentPageNo;
var postLabel;
pagecurrentg();

function looppagecurrentg(pageInfo) {
  var html = '';
  pageNumber = parseInt(numPages / 2);
  if (pageNumber == numPages - pageNumber) {
    numPages = pageNumber * 2 + 1
  }
  pageStart = currentPageNo - pageNumber;
  if (pageStart < 1) pageStart = 1;
  lastPageNo = parseInt(pageInfo / perPage) + 1;
  if (lastPageNo - 1 == pageInfo / perPage) lastPageNo = lastPageNo - 1;
  pageEnd = pageStart + numPages - 1;
  if (pageEnd > lastPageNo) pageEnd = lastPageNo;
  var prevNumber = parseInt(currentPageNo) - 1;
  if (currentPage == "page") {
    html += '<li class="showpage firstpage"><a href="' + home_page + '">' + firstText + '</a></li>'
  } else {
    html += '<li><a href="/search/label/' + postLabel + '?&max-results=' + perPage + '">' + firstText + '</a></li>'
  }
  if (currentPageNo == 3) {
    if (currentPage == "page") {
      html += '<li><a href="' + home_page + '"><i class="fa fa-angle-double-left"></i></a></li>'
    } else {
      html += '<li><a href="/search/label/' + postLabel + '?&max-results=' + perPage + '"><i class="fa fa-angle-double-left"></i></a></li>'
    }
  } else {
    if (currentPage == "page") {
      html += '<li><a href="#" onclick="redirectpage(' + prevNumber + ');return false"><i class="fa fa-angle-double-left"></i></a></li>'
    } else {
      html += '<li><a href="#" onclick="redirectlabel(' + prevNumber + ');return false"><i class="fa fa-angle-double-left"></i></a></li>'
    }
  }
  if (pageStart > 1) {
    if (currentPage == "page") {
      html += '<li><a href="' + home_page + '">1</a></li>'
    } else {
      html += '<li><a href="/search/label/' + postLabel + '?&max-results=' + perPage + '">1</a></li>'
    }
  }
  if (pageStart > 2) {
    html += ' ... '
  }
  for (var jj = pageStart; jj <= pageEnd; jj++) {
    if (currentPageNo == jj) {
      html += '<li class="active">' + jj + '</li>'
    } else if (jj == 1) {
      if (currentPage == "page") {
        html += '<li><a href="' + home_page + '">1</a></li>'
      } else {
        html += '<li><a href="/search/label/' + postLabel + '?&max-results=' + perPage + '">1</a></li>'
      }
    } else {
      if (currentPage == "page") {
        html += '<li><a href="#" onclick="redirectpage(' + jj + ');return false">' + jj + '</a></li>'
      } else {
        html += '<li><a href="#" onclick="redirectlabel(' + jj + ');return false">' + jj + '</a></li>'
      }
    }
  }
  if (pageEnd < lastPageNo - 1) {
    html += '...'
  }
  if (pageEnd < lastPageNo) {
    if (currentPage == "page") {
      html += '<li><a href="#" onclick="redirectpage(' + lastPageNo + ');return false">' + lastPageNo + '</a></li>'
    } else {
      html += '<li><a href="#" onclick="redirectlabel(' + lastPageNo + ');return false">' + lastPageNo + '</a></li>'
    }
  }
  var nextnumber = parseInt(currentPageNo) + 1;
  if (currentPage == "page") {
    html += '<li><a href="#" onclick="redirectpage(' + nextnumber + ');return false"><i class="fa fa-angle-double-right"></i></a></li>'
  } else {
    html += '<li><a href="#" onclick="redirectlabel(' + nextnumber + ');return false"><i class="fa fa-angle-double-right"></i></a></li>'
  }
  if (currentPage == "page") {
    html += '<li class="displaypageNum lastpage"><a href="#" onclick="redirectpage(' + lastPageNo + ');return false">' + lastText + '</a></li>'
  } else {
    html += '<li class="displaypageNum lastpage"><a href="#" onclick="redirectlabel(' + lastPageNo + ');return false">' + lastText + '</a></li>'
  }
  var pageArea = document.getElementsByName("pageArea");
  var blogPager = document.getElementById("blog-pager");
  for (var p = 0; p < pageArea.length; p++) {
    pageArea[p].innerHTML = html
  }
  if (pageArea && pageArea.length > 0) {
    html = ''
  }
  if (blogPager) {
    blogPager.innerHTML = html
  }
}

function totalcountdata(root) {
  var feed = root.feed;
  var totaldata = parseInt(feed.openSearch$totalResults.$t, 10);
  looppagecurrentg(totaldata)
}

function pagecurrentg() {
  var thisUrl = urlactivepage;
  if (thisUrl.indexOf("/search/label/") != -1) {
    if (thisUrl.indexOf("?updated-max") != -1) {
      postLabel = thisUrl.substring(thisUrl.indexOf("/search/label/") + 14, thisUrl.indexOf("?updated-max"))
    } else {
      postLabel = thisUrl.substring(thisUrl.indexOf("/search/label/") + 14, thisUrl.indexOf("?&max"))
    }
  }
  if (thisUrl.indexOf("?q=") == -1 && thisUrl.indexOf(".html") == -1) {
    if (thisUrl.indexOf("/search/label/") == -1) {
      currentPage = "page";
      if (urlactivepage.indexOf("#PageNo=") != -1) {
        currentPageNo = urlactivepage.substring(urlactivepage.indexOf("#PageNo=") + 8, urlactivepage.length)
      } else {
        currentPageNo = 1
      }
      document.write("<script src=\"" + home_page + "feeds/posts/summary?max-results=1&alt=json-in-script&callback=totalcountdata\"><\/script>")
    } else {
      currentPage = "label";
      if (thisUrl.indexOf("&max-results=") == -1) {
        perPage = 20
      }
      if (urlactivepage.indexOf("#PageNo=") != -1) {
        currentPageNo = urlactivepage.substring(urlactivepage.indexOf("#PageNo=") + 8, urlactivepage.length)
      } else {
        currentPageNo = 1
      }
      document.write('<script src="' + home_page + 'feeds/posts/summary/-/' + postLabel + '?alt=json-in-script&callback=totalcountdata&max-results=1" ><\/script>')
    }
  }
}

function redirectpage(numberpage) {
  jsonstart = (numberpage - 1) * perPage;
  noPage = numberpage;
  var nameBody = document.getElementsByTagName('head')[0];
  var newInclude = document.createElement('script');
  newInclude.type = 'text/javascript';
  newInclude.setAttribute("src", home_page + "feeds/posts/summary?start-index=" + jsonstart + "&max-results=1&alt=json-in-script&callback=finddatepost");
  nameBody.appendChild(newInclude)
}

function redirectlabel(numberpage) {
  jsonstart = (numberpage - 1) * perPage;
  noPage = numberpage;
  var nameBody = document.getElementsByTagName('head')[0];
  var newInclude = document.createElement('script');
  newInclude.type = 'text/javascript';
  newInclude.setAttribute("src", home_page + "feeds/posts/summary/-/" + postLabel + "?start-index=" + jsonstart + "&max-results=1&alt=json-in-script&callback=finddatepost");
  nameBody.appendChild(newInclude)
}

function finddatepost(root) {
  post = root.feed.entry[0];
  var timestamp1 = post.published.$t.substring(0, 19) + post.published.$t.substring(23, 29);
  var timestamp = encodeURIComponent(timestamp1);
  if (currentPage == "page") {
    var pAddress = "/search?updated-max=" + timestamp + "&max-results=" + perPage + "#PageNo=" + noPage
  } else {
    var pAddress = "/search/label/" + postLabel + "?updated-max=" + timestamp + "&max-results=" + perPage + "#PageNo=" + noPage
  }
  location.href = pAddress
};
