/** v2.9.2 | MIT Licensed */
;!function (d) {
    "use strict";
    var t, h = d.document, m = {modules: {}, status: {}, timeout: 10, event: {}}, n = function () {
        this.v = "2.9.2"
    }, e = d.LAYUI_GLOBAL || {}, v = (t = h.currentScript ? h.currentScript.src : function () {
        for (var t, e = h.scripts, o = e.length - 1, n = o; 0 < n; n--) if ("interactive" === e[n].readyState) {
            t = e[n].src;
            break
        }
        return t || e[o].src
    }(), m.dir = e.dir || t.substring(0, t.lastIndexOf("/") + 1)), g = function (t, e) {
        e = e || "log", d.console && console[e] && console[e]("layui error hint: " + t)
    }, b = "undefined" != typeof opera && "[object Opera]" === opera.toString(), N = m.builtin = {
        lay: "lay",
        layer: "layer",
        laydate: "laydate",
        laypage: "laypage",
        laytpl: "laytpl",
        form: "form",
        upload: "upload",
        dropdown: "dropdown",
        transfer: "transfer",
        tree: "tree",
        table: "table",
        treeTable: "treeTable",
        element: "element",
        rate: "rate",
        colorpicker: "colorpicker",
        slider: "slider",
        carousel: "carousel",
        flow: "flow",
        util: "util",
        code: "code",
        jquery: "jquery",
        all: "all",
        "layui.all": "layui.all"
    }, s = (n.prototype.cache = m, n.prototype.define = function (t, n) {
        return "function" == typeof t && (n = t, t = []), this.use(t, function () {
            var o = function (t, e) {
                layui[t] = e, m.status[t] = !0
            };
            return "function" == typeof n && n(function (t, e) {
                o(t, e), m.callback[t] = function () {
                    n(o)
                }
            }), this
        }, null, "define"), this
    }, n.prototype.use = function (o, t, e, n) {
        var r, i, a = this, u = m.dir = m.dir || v, l = h.getElementsByTagName("head")[0],
            s = (o = "string" == typeof o ? [o] : "function" == typeof o ? (t = o, ["all"]) : o, d.jQuery && jQuery.fn.on && (a.each(o, function (t, e) {
                "jquery" === e && o.splice(t, 1)
            }), layui.jquery = layui.$ = jQuery), o[0]), c = 0;

        function p(t, e) {
            var o = "PLaySTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/;
            "load" !== t.type && !o.test((t.currentTarget || t.srcElement).readyState) || (m.modules[s] = e, l.removeChild(r), function n() {
                return ++c > 1e3 * m.timeout / 4 ? g(s + " is not a valid module", "error") : void (m.status[s] ? y() : setTimeout(n, 4))
            }())
        }

        function y() {
            e.push(layui[s]), 1 < o.length ? a.use(o.slice(1), t, e, n) : "function" == typeof t && (layui.jquery && "function" == typeof layui.jquery && "define" !== n ? layui.jquery(function () {
                t.apply(layui, e)
            }) : t.apply(layui, e))
        }

        return e = e || [], m.host = m.host || (u.match(/\/\/([\s\S]+?)\//) || ["//" + location.host + "/"])[0], 0 === o.length || layui["layui.all"] && N[s] ? y() : (i = (i = (N[s] ? u + "modules/" : !/^\{\/\}/.test(a.modules[s]) && m.base || "") + (a.modules[s] || s) + ".js").replace(/^\{\/\}/, ""), !m.modules[s] && layui[s] && (m.modules[s] = i), m.modules[s] ? function f() {
            return ++c > 1e3 * m.timeout / 4 ? g(s + " is not a valid module", "error") : void ("string" == typeof m.modules[s] && m.status[s] ? y() : setTimeout(f, 4))
        }() : ((r = h.createElement("script"))["async"] = !0, r.charset = "utf-8", r.src = i + ((u = !0 === m.version ? m.v || (new Date).getTime() : m.version || "") ? "?v=" + u : ""), l.appendChild(r), !r.attachEvent || r.attachEvent.toString && r.attachEvent.toString().indexOf("[native code") < 0 || b ? r.addEventListener("load", function (t) {
            p(t, i)
        }, !1) : r.attachEvent("onreadystatechange", function (t) {
            p(t, i)
        }), m.modules[s] = i)), a
    }, n.prototype.disuse = function (t) {
        var o = this;
        return t = o.isArray(t) ? t : [t], o.each(t, function (t, e) {
            m.status[e], delete o[e], delete N[e], delete o.modules[e], delete m.status[e], delete m.modules[e]
        }), o
    }, n.prototype.getStyle = function (t, e) {
        t = t.currentStyle || d.getComputedStyle(t, null);
        return t[t.getPropertyValue ? "getPropertyValue" : "getAttribute"](e)
    }, n.prototype.link = function (o, n, t) {
        var r = this, e = h.getElementsByTagName("head")[0], i = h.createElement("link"),
            a = "layuicss-" + ((t = "string" == typeof n ? n : t) || o).replace(/\.|\//g, ""), u = "creating", l = 0;
        return i.href = o + (m.debug ? "?v=" + (new Date).getTime() : ""), i.rel = "stylesheet", i.id = a, i.media = "all", h.getElementById(a) || e.appendChild(i), "function" == typeof n && function s(t) {
            var e = h.getElementById(a);
            return ++l > 1e3 * m.timeout / 100 ? g(o + " timeout") : void (1989 === parseInt(r.getStyle(e, "width")) ? (t === u && e.removeAttribute("lay-status"), e.getAttribute("lay-status") === u ? setTimeout(s, 100) : n()) : (e.setAttribute("lay-status", u), setTimeout(function () {
                s(u)
            }, 100)))
        }(), r
    }, n.prototype.addcss = function (t, e, o) {
        return layui.link(m.dir + "css/" + t, e, o)
    }, m.callback = {}, n.prototype.factory = function (t) {
        if (layui[t]) return "function" == typeof m.callback[t] ? m.callback[t] : null
    }, n.prototype.img = function (t, e, o) {
        var n = new Image;
        if (n.src = t, n.complete) return e(n);
        n.onload = function () {
            n.onload = null, "function" == typeof e && e(n)
        }, n.onerror = function (t) {
            n.onerror = null, "function" == typeof o && o(t)
        }
    }, n.prototype.config = function (t) {
        for (var e in t = t || {}) m[e] = t[e];
        return this
    }, n.prototype.modules = function () {
        var t, e = {};
        for (t in N) e[t] = N[t];
        return e
    }(), n.prototype.extend = function (t) {
        for (var e in t = t || {}) this[e] || this.modules[e] ? g(e + " Module already exists", "error") : this.modules[e] = t[e];
        return this
    }, n.prototype.router = n.prototype.hash = function (t) {
        var o = {path: [], search: {}, hash: ((t = t || location.hash).match(/[^#](#.*$)/) || [])[1] || ""};
        return /^#\//.test(t) && (t = t.replace(/^#\//, ""), o.href = "/" + t, t = t.replace(/([^#])(#.*$)/, "$1").split("/") || [], this.each(t, function (t, e) {
            /^\w+=/.test(e) ? (e = e.split("="), o.search[e[0]] = e[1]) : o.path.push(e)
        })), o
    }, n.prototype.url = function (t) {
        var r, e, o = this;
        return {
            pathname: (t ? ((t.match(/\.[^.]+?\/.+/) || [])[0] || "").replace(/^[^\/]+/, "").replace(/\?.+/, "") : location.pathname).replace(/^\//, "").split("/"),
            search: (r = {}, e = (t ? ((t.match(/\?.+/) || [])[0] || "").replace(/\#.+/, "") : location.search).replace(/^\?+/, "").split("&"), o.each(e, function (t, e) {
                var o = e.indexOf("="), n = o < 0 ? e.substr(0, e.length) : 0 !== o && e.substr(0, o);
                n && (r[n] = 0 < o ? e.substr(o + 1) : null)
            }), r),
            hash: o.router(t ? (t.match(/#.+/) || [])[0] || "/" : location.hash)
        }
    }, n.prototype.data = function (t, e, o) {
        if (t = t || "layui", o = o || localStorage, d.JSON && d.JSON.parse) {
            if (null === e) return delete o[t];
            e = "object" == typeof e ? e : {key: e};
            try {
                var n = JSON.parse(o[t])
            } catch (r) {
                n = {}
            }
            return "value" in e && (n[e.key] = e.value), e.remove && delete n[e.key], o[t] = JSON.stringify(n), e.key ? n[e.key] : n
        }
    }, n.prototype.sessionData = function (t, e) {
        return this.data(t, e, sessionStorage)
    }, n.prototype.device = function (t) {
        var o = navigator.userAgent.toLowerCase(), e = function (t) {
            var e = new RegExp(t + "/([^\\s\\_\\-]+)");
            return (t = (o.match(e) || [])[1]) || !1
        }, n = {
            os: /windows/.test(o) ? "windows" : /linux/.test(o) ? "linux" : /iphone|ipod|ipad|ios/.test(o) ? "ios" : /mac/.test(o) ? "mac" : void 0,
            ie: !!(d.ActiveXObject || "ActiveXObject" in d) && ((o.match(/msie\s(\d+)/) || [])[1] || "11"),
            weixin: e("micromessenger")
        };
        return t && !n[t] && (n[t] = e(t)), n.android = /android/.test(o), n.ios = "ios" === n.os, n.mobile = n.android || n.ios, n
    }, n.prototype.hint = function () {
        return {error: g}
    }, n.prototype._typeof = n.prototype.type = function (t) {
        return null === t ? String(t) : "object" == typeof t || "function" == typeof t ? (e = (e = Object.prototype.toString.call(t).match(/\s(.+)\]$/) || [])[1] || "Object", new RegExp("\\b(Function|Array|Date|RegExp|Object|Error|Symbol)\\b").test(e) ? e.toLowerCase() : "object") : typeof t;
        var e
    }, n.prototype._isArray = n.prototype.isArray = function (t) {
        var e, o = this.type(t);
        return !(!t || "object" != typeof t || t === d) && (e = "length" in t && t.length, "array" === o || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
    }, n.prototype.each = function (t, o) {
        var e, n = function (t, e) {
            return o.call(e[t], t, e[t])
        };
        if ("function" == typeof o) if (this.isArray(t = t || [])) for (e = 0; e < t.length && !n(e, t); e++) ; else for (e in t) if (n(e, t)) break;
        return this
    }, n.prototype.sort = function (t, r, e, o) {
        o = o ? t || [] : JSON.parse(JSON.stringify(t || []));
        if ("object" !== this.type(t) || r) {
            if ("object" != typeof t) return [o];
            o.sort(function (t, e) {
                var o = t[r], n = e[r];
                if (!isNaN(t) && !isNaN(e)) return t - e;
                if (!isNaN(t) && isNaN(e)) {
                    if (!r || "object" != typeof e) return -1;
                    o = t
                } else if (isNaN(t) && !isNaN(e)) {
                    if (!r || "object" != typeof t) return 1;
                    n = e
                }
                t = [!isNaN(o), !isNaN(n)];
                return t[0] && t[1] ? o && !n && 0 !== n ? 1 : !o && 0 !== o && n ? -1 : o - n : t[0] || t[1] ? t[0] || !t[1] ? -1 : !t[0] || t[1] ? 1 : void 0 : n < o ? 1 : o < n ? -1 : 0
            }), e && o.reverse()
        }
        return o
    }, n.prototype.stope = function (t) {
        t = t || d.event;
        try {
            t.stopPropagation()
        } catch (e) {
            t.cancelBubble = !0
        }
    }, "LAYUI-EVENT-REMOVE");
    n.prototype.onevent = function (t, e, o) {
        return "string" != typeof t || "function" != typeof o ? this : n.event(t, e, null, o)
    }, n.prototype.event = n.event = function (t, e, o, n) {
        var r = this, i = null, a = (e || "").match(/\((.*)\)$/) || [], t = (t + "." + e).replace(a[0], ""),
            u = a[1] || "", l = function (t, e) {
                !1 === (e && e.call(r, o)) && null === i && (i = !1)
            };
        return o === s ? (delete (r.cache.event[t] || {})[u], r) : n ? (m.event[t] = m.event[t] || {}, u ? m.event[t][u] = [n] : (m.event[t][u] = m.event[t][u] || [], m.event[t][u].push(n)), this) : (layui.each(m.event[t], function (t, e) {
            ("{*}" === u || ("" === t && layui.each(e, l), u && t === u)) && layui.each(e, l)
        }), i)
    }, n.prototype.on = function (t, e, o) {
        return this.onevent.call(this, e, t, o)
    }, n.prototype.off = function (t, e) {
        return this.event.call(this, e, t, s)
    }, n.prototype.debounce = function (o, n) {
        var r;
        return function () {
            var t = this, e = arguments;
            clearTimeout(r), r = setTimeout(function () {
                o.apply(t, e)
            }, n)
        }
    }, n.prototype.throttle = function (t, e) {
        var o = !1;
        return function () {
            o || (t.apply(this, arguments), o = !0, setTimeout(function () {
                o = !1
            }, e))
        }
    }, d.layui = new n
}(window);
layui.define(function (a) {
    var i = layui.cache;
    layui.config({dir: i.dir.replace(/lay\/dest\/$/, "")}), a("layui.all", layui.v)
});
!function (l) {
    "use strict";
    var t, h = l.document, d = function (t) {
        return new o(t)
    }, o = function (t) {
        var n = this,
            i = "object" == typeof t ? layui.isArray(t) ? t : [t] : (this.selector = t, h.querySelectorAll(t || null));
        d.each(i, function (t, e) {
            n.push(i[t])
        })
    };
    Array.prototype.indexOf = Array.prototype.indexOf || function (n, i) {
        var o = -1;
        return i = i || 0, layui.each(this, function (t, e) {
            if (n === e && i <= t) return o = t, !0
        }), o
    }, o.fn = o.prototype = [], o.fn.constructor = o, d.extend = function () {
        var t, e = 1, n = arguments, i = function (t, e) {
            for (var n in t = t || ("array" === layui.type(e) ? [] : {}), e) t[n] = e[n] && e[n].constructor === Object ? i(t[n], e[n]) : e[n];
            return t
        };
        for (n[0] = "object" == typeof n[0] ? n[0] : {}, t = n.length; e < t; e++) "object" == typeof n[e] && i(n[0], n[e]);
        return n[0]
    }, d.ie = (t = navigator.userAgent.toLowerCase(), !!(l.ActiveXObject || "ActiveXObject" in l) && ((t.match(/msie\s(\d+)/) || [])[1] || "11")), d.layui = layui || {}, d.getPath = layui.cache.dir, d.stope = layui.stope, d.each = function () {
        return layui.each.apply(layui, arguments), this
    }, d.digit = function (t, e) {
        if ("string" != typeof t && "number" != typeof t) return "";
        var n = "";
        e = e || 2;
        for (var i = (t = String(t)).length; i < e; i++) n += "0";
        return t < Math.pow(10, e) ? n + t : t
    }, d.elem = function (t, e) {
        var n = h.createElement(t);
        return d.each(e || {}, function (t, e) {
            n.setAttribute(t, e)
        }), n
    }, d.hasScrollbar = function () {
        return h.body.scrollHeight > (l.innerHeight || h.documentElement.clientHeight)
    }, d.getStyleRules = function (t, n) {
        if (t) return t = (t = t.sheet || t.styleSheet || {}).cssRules || t.rules, "function" == typeof n && layui.each(t, function (t, e) {
            if (n(e, t)) return !0
        }), t
    }, d.style = function (t) {
        t = t || {};
        var e = d.elem("style"), n = t.text || "", i = t.target;
        if (n) return "styleSheet" in e ? (e.setAttribute("type", "text/css"), e.styleSheet.cssText = n) : e.innerHTML = n, e.id = "LAY-STYLE-" + (t.id || (n = d.style.index || 0, d.style.index++, "DF-" + n)), i && ((t = d(i).find("#" + e.id))[0] && t.remove(), d(i).append(e)), e
    }, d.position = function (t, e, n) {
        var i, o, r, c, u, a, s, f;
        e && (n = n || {}, t !== h && t !== d("body")[0] || (n.clickType = "right"), i = "right" === n.clickType ? {
            left: (i = n.e || l.event || {}).clientX,
            top: i.clientY,
            right: i.clientX,
            bottom: i.clientY
        } : t.getBoundingClientRect(), s = e.offsetWidth, f = e.offsetHeight, o = function (t) {
            return h.body[t = t ? "scrollLeft" : "scrollTop"] | h.documentElement[t]
        }, r = function (t) {
            return h.documentElement[t ? "clientWidth" : "clientHeight"]
        }, c = "margin" in n ? n.margin : 5, u = i.left, a = i.bottom, "center" === n.align ? u -= (s - t.offsetWidth) / 2 : "right" === n.align && (u = u - s + t.offsetWidth), (u = u + s + c > r("width") ? r("width") - s - c : u) < c && (u = c), i.bottom + f + c > r() && (i.top > f + c && i.top <= r() ? a = i.top - f - 2 * c : n.allowBottomOut || (a = r() - f - 2 * c) < 0 && (a = 0)), (s = n.position) && (e.style.position = s), e.style.left = u + ("fixed" === s ? 0 : o(1)) + "px", e.style.top = a + ("fixed" === s ? 0 : o()) + "px", d.hasScrollbar() || (f = e.getBoundingClientRect(), !n.SYSTEM_RELOAD && f.bottom + c > r() && (n.SYSTEM_RELOAD = !0, setTimeout(function () {
            d.position(t, e, n)
        }, 50))))
    }, d.options = function (t, e) {
        if (e = "object" == typeof e ? e : {attr: e}, t === h) return {};
        var t = d(t), n = e.attr || "lay-options", t = t.attr(n);
        try {
            return new Function("return " + (t || "{}"))()
        } catch (i) {
            return layui.hint().error(e.errorText || [n + '="' + t + '"', "\n parseerror: " + i].join("\n"), "error"), {}
        }
    }, d.isTopElem = function (n) {
        var t = [h, d("body")[0]], i = !1;
        return d.each(t, function (t, e) {
            if (e === n) return i = !0
        }), i
    }, d.clipboard = {
        writeText: function (n) {
            var i = String(n.text);

            function t() {
                var t = h.createElement("textarea");
                t.value = i, t.style.position = "fixed", t.style.opacity = "0", t.style.top = "0px", t.style.left = "0px", h.body.appendChild(t), t.select();
                try {
                    h.execCommand("copy"), "function" == typeof n.done && n.done()
                } catch (e) {
                    "function" == typeof n.error && n.error(e)
                } finally {
                    t.remove ? t.remove() : h.body.removeChild(t)
                }
            }

            navigator && "clipboard" in navigator ? navigator.clipboard.writeText(i).then(n.done, function () {
                t()
            }) : t()
        }
    }, d.passiveSupported = function () {
        var t = !1;
        try {
            var e = Object.defineProperty({}, "passive", {
                get: function () {
                    t = !0
                }
            });
            l.addEventListener("test", null, e), l.removeEventListener("test", null, e)
        } catch (n) {
        }
        return t
    }(), d.touchEventsSupported = function () {
        return "ontouchstart" in l
    }, d.touchSwipe = function (t, e) {
        var n, i, o, r = e, c = d(t)[0];
        c && d.touchEventsSupported() && (n = {
            pointerStart: {x: 0, y: 0},
            pointerEnd: {x: 0, y: 0},
            distanceX: 0,
            distanceY: 0,
            direction: "none",
            timeStart: null
        }, e = function (t) {
            1 === t.touches.length && (c.addEventListener("touchmove", i, !!d.passiveSupported && {passive: !1}), c.addEventListener("touchend", o), c.addEventListener("touchcancel", o), n.timeStart = Date.now(), n.pointerStart.x = n.pointerEnd.x = t.touches[0].clientX, n.pointerStart.y = n.pointerEnd.y = t.touches[0].clientY, r.onTouchStart) && r.onTouchStart(t, n)
        }, i = function (t) {
            t.preventDefault(), n.pointerEnd.x = t.touches[0].clientX, n.pointerEnd.y = t.touches[0].clientY, n.distanceX = n.pointerStart.x - n.pointerEnd.x, n.distanceY = n.pointerStart.y - n.pointerEnd.y, Math.abs(n.distanceX) > Math.abs(n.distanceY) ? n.direction = 0 < n.distanceX ? "left" : "right" : n.direction = 0 < n.distanceY ? "up" : "down", r.onTouchMove && r.onTouchMove(t, n)
        }, o = function (t) {
            r.onTouchEnd && r.onTouchEnd(t, n), c.removeEventListener("touchmove", i), c.removeEventListener("touchend", o, !!d.passiveSupported && {passive: !1}), c.removeEventListener("touchcancel", o)
        }, c.__lay_touchswipe_cb_ && c.removeEventListener("touchstart", c.__lay_touchswipe_cb_), c.__lay_touchswipe_cb_ = e, c.addEventListener("touchstart", e))
    }, o.addStr = function (n, t) {
        return n = n.replace(/\s+/, " "), t = t.replace(/\s+/, " ").split(" "), d.each(t, function (t, e) {
            new RegExp("\\b" + e + "\\b").test(n) || (n = n + " " + e)
        }), n.replace(/^\s|\s$/, "")
    }, o.removeStr = function (n, t) {
        return n = n.replace(/\s+/, " "), t = t.replace(/\s+/, " ").split(" "), d.each(t, function (t, e) {
            e = new RegExp("\\b" + e + "\\b");
            e.test(n) && (n = n.replace(e, ""))
        }), n.replace(/\s+/, " ").replace(/^\s|\s$/, "")
    }, o.fn.find = function (n) {
        var i = [], o = "object" == typeof n;
        return this.each(function (t, e) {
            e = o && e.contains(n) ? n : e.querySelectorAll(n || null);
            d.each(e, function (t, e) {
                i.push(e)
            })
        }), d(i)
    }, o.fn.each = function (t) {
        return d.each.call(this, this, t)
    }, o.fn.addClass = function (n, i) {
        return this.each(function (t, e) {
            e.className = o[i ? "removeStr" : "addStr"](e.className, n)
        })
    }, o.fn.removeClass = function (t) {
        return this.addClass(t, !0)
    }, o.fn.hasClass = function (n) {
        var i = !1;
        return this.each(function (t, e) {
            new RegExp("\\b" + n + "\\b").test(e.className) && (i = !0)
        }), i
    }, o.fn.css = function (e, i) {
        var t = this, o = function (t) {
            return isNaN(t) ? t : t + "px"
        };
        return "string" != typeof e || i !== undefined ? t.each(function (t, n) {
            "object" == typeof e ? d.each(e, function (t, e) {
                n.style[t] = o(e)
            }) : n.style[e] = o(i)
        }) : 0 < t.length ? t[0].style[e] : void 0
    }, o.fn.width = function (n) {
        var i = this;
        return n !== undefined ? i.each(function (t, e) {
            i.css("width", n)
        }) : 0 < i.length ? i[0].offsetWidth : void 0
    }, o.fn.height = function (n) {
        var i = this;
        return n !== undefined ? i.each(function (t, e) {
            i.css("height", n)
        }) : 0 < i.length ? i[0].offsetHeight : void 0
    }, o.fn.attr = function (n, i) {
        var t = this;
        return i !== undefined ? t.each(function (t, e) {
            e.setAttribute(n, i)
        }) : 0 < t.length ? t[0].getAttribute(n) : void 0
    }, o.fn.removeAttr = function (n) {
        return this.each(function (t, e) {
            e.removeAttribute(n)
        })
    }, o.fn.html = function (n) {
        var t = this;
        return n !== undefined ? this.each(function (t, e) {
            e.innerHTML = n
        }) : 0 < t.length ? t[0].innerHTML : void 0
    }, o.fn.val = function (n) {
        var t = this;
        return n !== undefined ? this.each(function (t, e) {
            e.value = n
        }) : 0 < t.length ? t[0].value : void 0
    }, o.fn.append = function (n) {
        return this.each(function (t, e) {
            "object" == typeof n ? e.appendChild(n) : e.innerHTML = e.innerHTML + n
        })
    }, o.fn.remove = function (n) {
        return this.each(function (t, e) {
            n ? e.removeChild(n) : e.parentNode.removeChild(e)
        })
    }, o.fn.on = function (n, i) {
        return this.each(function (t, e) {
            e.attachEvent ? e.attachEvent("on" + n, function (t) {
                t.target = t.srcElement, i.call(e, t)
            }) : e.addEventListener(n, i, !1)
        })
    }, o.fn.off = function (n, i) {
        return this.each(function (t, e) {
            e.detachEvent ? e.detachEvent("on" + n, i) : e.removeEventListener(n, i, !1)
        })
    }, l.lay = d, l.layui && layui.define && layui.define(function (t) {
        t("lay", d)
    })
}(window, window.document);
layui.define(function (e) {
    "use strict";
    var c = {open: "{{", close: "}}"}, l = {
        escape: function (e) {
            return e === undefined || null === e ? "" : /[<"'>]|&(?=#[a-zA-Z0-9]+)/g.test(e += "") ? e.replace(/&(?!#?[a-zA-Z0-9]+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;") : e
        }
    }, i = function (e) {
        return new RegExp(e, "g")
    }, u = function (e, r) {
        var n = "Laytpl Error: ";
        return "object" == typeof console && console.error(n + e + "\n" + (r || "")), n + e
    }, n = function (e, r) {
        var n = this, e = (n.config = n.config || {}, n.template = e, function (e) {
            for (var r in e) n.config[r] = e[r]
        });
        e(c), e(r)
    }, r = (n.prototype.tagExp = function (e, r, n) {
        var c = this.config;
        return i((r || "") + c.open + ["#([\\s\\S])+?", "([^{#}])*?"][e || 0] + c.close + (n || ""))
    }, n.prototype.parse = function (e, r) {
        var n = this, c = n.config, t = e, o = i("^" + c.open + "#", ""), p = i(c.close + "$", "");
        if ("string" != typeof e) return e;
        e = '"use strict";var view = "' + (e = e.replace(/\s+|\r|\t|\n/g, " ").replace(i(c.open + "#"), c.open + "# ").replace(i(c.close + "}"), "} " + c.close).replace(/\\/g, "\\\\").replace(i(c.open + "!(.+?)!" + c.close), function (e) {
            return e = e.replace(i("^" + c.open + "!"), "").replace(i("!" + c.close), "").replace(i(c.open + "|" + c.close), function (e) {
                return e.replace(/(.)/g, "\\$1")
            })
        }).replace(/(?="|')/g, "\\").replace(n.tagExp(), function (e) {
            return '";' + (e = e.replace(o, "").replace(p, "")).replace(/\\(.)/g, "$1") + ';view+="'
        }).replace(n.tagExp(1), function (e) {
            var r = '"+laytpl.escape(';
            return e.replace(/\s/g, "") === c.open + c.close ? "" : (e = e.replace(i(c.open + "|" + c.close), ""), /^=/.test(e) ? e = e.replace(/^=/, "") : /^-/.test(e) && (e = e.replace(/^-/, ""), r = '"+('), r + e.replace(/\\(.)/g, "$1") + ')+"')
        })) + '";return view;';
        try {
            return n.cache = e = new Function("d, laytpl", e), e(r, l)
        } catch (a) {
            return delete n.cache, u(a, t)
        }
    }, n.prototype.render = function (e, r) {
        e = e || {};
        var n = this, e = n.cache ? n.cache(e, l) : n.parse(n.template, e);
        return "function" == typeof r && r(e), e
    }, function (e, r) {
        return new n(e, r)
    });
    r.config = function (e) {
        for (var r in e = e || {}) c[r] = e[r]
    }, r.v = "2.0.0", e("laytpl", r)
});
layui.define(function (e) {
    "use strict";
    var r = document, u = "getElementById", c = "getElementsByTagName", a = "layui-disabled", t = function (e) {
        var a = this;
        a.config = e || {}, a.config.index = ++o.index, a.render(!0)
    }, o = (t.prototype.type = function () {
        var e = this.config;
        if ("object" == typeof e.elem) return e.elem.length === undefined ? 2 : 3
    }, t.prototype.view = function () {
        var i, e, t, n = this.config, r = n.groups = "groups" in n ? Number(n.groups) || 0 : 5,
            u = (n.layout = "object" == typeof n.layout ? n.layout : ["prev", "page", "next"], n.count = Number(n.count) || 0, n.curr = Number(n.curr) || 1, n.limits = "object" == typeof n.limits ? n.limits : [10, 20, 30, 40, 50], n.limit = Number(n.limit) || 10, n.pages = Math.ceil(n.count / n.limit) || 1, n.curr > n.pages ? n.curr = n.pages : n.curr < 1 && (n.curr = 1), r < 0 ? r = 1 : r > n.pages && (r = n.pages), n.prev = "prev" in n ? n.prev : "&#x4E0A;&#x4E00;&#x9875;", n.next = "next" in n ? n.next : "&#x4E0B;&#x4E00;&#x9875;", n.pages > r ? Math.ceil((n.curr + (1 < r ? 1 : 0)) / (0 < r ? r : 1)) : 1),
            l = {
                prev: n.prev ? '<a class="layui-laypage-prev' + (1 == n.curr ? " " + a : "") + '" data-page="' + (n.curr - 1) + '">' + n.prev + "</a>" : "",
                page: function () {
                    var e = [];
                    if (n.count < 1) return "";
                    1 < u && !1 !== n.first && 0 !== r && e.push('<a class="layui-laypage-first" data-page="1"  title="&#x9996;&#x9875;">' + (n.first || 1) + "</a>");
                    var a = Math.floor((r - 1) / 2), t = 1 < u ? n.curr - a : 1,
                        i = 1 < u ? (a = n.curr + (r - a - 1)) > n.pages ? n.pages : a : r;
                    for (i - t < r - 1 && (t = i - r + 1), !1 !== n.first && 2 < t && e.push('<span class="layui-laypage-spr">&#x2026;</span>'); t <= i; t++) t === n.curr ? e.push('<span class="layui-laypage-curr"><em class="layui-laypage-em" ' + (/^#/.test(n.theme) ? 'style="background-color:' + n.theme + ';"' : "") + "></em><em>" + t + "</em></span>") : e.push('<a data-page="' + t + '">' + t + "</a>");
                    return n.pages > r && n.pages > i && !1 !== n.last && (i + 1 < n.pages && e.push('<span class="layui-laypage-spr">&#x2026;</span>'), 0 !== r) && e.push('<a class="layui-laypage-last" title="&#x5C3E;&#x9875;"  data-page="' + n.pages + '">' + (n.last || n.pages) + "</a>"), e.join("")
                }(),
                next: n.next ? '<a class="layui-laypage-next' + (n.curr == n.pages ? " " + a : "") + '" data-page="' + (n.curr + 1) + '">' + n.next + "</a>" : "",
                count: '<span class="layui-laypage-count">' + (e = "object" == typeof n.countText ? n.countText : ["\u5171 ", " \u6761"])[0] + n.count + e[1] + "</span>",
                limit: (i = ['<span class="layui-laypage-limits"><select lay-ignore>'], layui.each(n.limits, function (e, a) {
                    var t;
                    i.push('<option value="' + a + '"' + (a === n.limit ? " selected" : "") + ">" + (t = (a = a) + " \u6761/\u9875", "function" == typeof n.limitTemplet && n.limitTemplet(a) || t) + "</option>")
                }), i.join("") + "</select></span>"),
                refresh: ['<a data-page="' + n.curr + '" class="layui-laypage-refresh">', '<i class="layui-icon layui-icon-refresh"></i>', "</a>"].join(""),
                skip: ['<span class="layui-laypage-skip">' + (e = "object" == typeof n.skipText ? n.skipText : ["&#x5230;&#x7B2C;", "&#x9875;", "&#x786e;&#x5b9a;"])[0], '<input type="text" min="1" value="' + n.curr + '" class="layui-input">', e[1] + '<button type="button" class="layui-laypage-btn">' + e[2] + "</button>", "</span>"].join("")
            };
        return ['<div class="layui-box layui-laypage layui-laypage-' + (n.theme ? /^#/.test(n.theme) ? "molv" : n.theme : "default") + '" id="layui-laypage-' + n.index + '">', (t = [], layui.each(n.layout, function (e, a) {
            l[a] && t.push(l[a])
        }), t.join("")), "</div>"].join("")
    }, t.prototype.jump = function (e, a) {
        if (e) {
            var t = this, i = t.config, n = e.children, r = e[c]("button")[0], u = e[c]("input")[0],
                e = e[c]("select")[0], l = function () {
                    var e = Number(u.value.replace(/\s|\D/g, ""));
                    e && (i.curr = e, t.render())
                };
            if (a) return l();
            for (var s = 0, p = n.length; s < p; s++) "a" === n[s].nodeName.toLowerCase() && o.on(n[s], "click", function () {
                var e = Number(this.getAttribute("data-page"));
                e < 1 || e > i.pages || (i.curr = e, t.render())
            });
            e && o.on(e, "change", function () {
                var e = this.value;
                i.curr * e > i.count && (i.curr = Math.ceil(i.count / e)), i.limit = e, t.render()
            }), r && o.on(r, "click", function () {
                l()
            })
        }
    }, t.prototype.skip = function (t) {
        var i, e;
        t && (i = this, e = t[c]("input")[0]) && o.on(e, "keyup", function (e) {
            var a = this.value, e = e.keyCode;
            /^(37|38|39|40)$/.test(e) || (/\D/.test(a) && (this.value = a.replace(/\D/, "")), 13 === e && i.jump(t, !0))
        })
    }, t.prototype.render = function (e) {
        var a = this, t = a.config, i = a.type(), n = a.view(),
            i = (2 === i ? t.elem && (t.elem.innerHTML = n) : 3 === i ? t.elem.html(n) : r[u](t.elem) && (r[u](t.elem).innerHTML = n), t.jump && t.jump(t, e), r[u]("layui-laypage-" + t.index));
        a.jump(i), t.hash && !e && (location.hash = "!" + t.hash + "=" + t.curr), a.skip(i)
    }, {
        render: function (e) {
            return new t(e).index
        }, index: layui.laypage ? layui.laypage.index + 1e4 : 0, on: function (a, e, t) {
            return a.attachEvent ? a.attachEvent("on" + e, function (e) {
                e.target = e.srcElement, t.call(a, e)
            }) : a.addEventListener(e, t, !1), this
        }
    });
    e("laypage", o)
});
!function (i, v) {
    "use strict";
    var n = i.layui && layui.define, l = {
            getPath: i.lay && lay.getPath ? lay.getPath : "", link: function (e, t, a) {
                D.path && i.lay && lay.layui && lay.layui.link(D.path + e, t, a)
            }
        }, e = i.LAYUI_GLOBAL || {}, a = "laydate", d = "layui-" + a + "-id", D = {
            v: "5.5.0",
            config: {weekStart: 0},
            index: i.laydate && i.laydate.v ? 1e5 : 0,
            path: e.laydate_dir || l.getPath,
            set: function (e) {
                var t = this;
                return t.config = lay.extend({}, t.config, e), t
            },
            ready: function (e) {
                var t = "laydate", a = (n ? "modules/" : "") + "laydate.css?v=" + D.v;
                return n ? layui["layui.all"] ? "function" == typeof e && e() : layui.addcss(a, e, t) : l.link(a, e, t), this
            }
        }, s = function () {
            var t = this, e = t.config.id;
            return (s.that[e] = t).inst = {
                hint: function (e) {
                    t.hint.call(t, e)
                }, reload: function (e) {
                    t.reload.call(t, e)
                }, config: t.config
            }
        }, x = "layui-this", k = "laydate-disabled", h = [100, 2e5], T = "layui-laydate-static", w = "layui-laydate-list",
        o = "laydate-selected", r = "layui-laydate-hint", y = "laydate-day-prev", m = "laydate-day-next",
        C = ".laydate-btns-confirm", M = "laydate-time-text", L = "laydate-btns-time", E = "layui-laydate-preview",
        S = "layui-laydate-shade", I = function (e) {
            var t, a = this,
                n = (a.index = ++D.index, a.config = lay.extend({}, a.config, D.config, e), lay(e.elem || a.config.elem));
            return 1 < n.length ? (lay.each(n, function () {
                D.render(lay.extend({}, a.config, {elem: this}))
            }), a) : (e = lay.extend(a.config, lay.options(n[0])), n[0] && n.attr(d) ? (t = s.getThis(n.attr(d))) ? t.reload(e) : void 0 : (e.id = "id" in e ? e.id : n.attr("id") || a.index, e.index = a.index, void D.ready(function () {
                a.init()
            })))
        }, c = "yyyy|y|MM|M|dd|d|HH|H|mm|m|ss|s";
    s.formatArr = function (e) {
        return (e || "").match(new RegExp(c + "|.", "g")) || []
    }, I.isLeapYear = function (e) {
        return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
    }, I.prototype.config = {
        type: "date",
        range: !1,
        format: "yyyy-MM-dd",
        value: null,
        isInitValue: !0,
        min: "1900-1-1",
        max: "2099-12-31",
        trigger: "click",
        show: !1,
        showBottom: !0,
        isPreview: !0,
        btns: ["clear", "now", "confirm"],
        lang: "cn",
        theme: "default",
        position: null,
        calendar: !1,
        mark: {},
        holidays: null,
        zIndex: null,
        done: null,
        change: null,
        autoConfirm: !0,
        shade: 0
    }, I.prototype.lang = function () {
        var e = {
            cn: {
                weeks: ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d"],
                time: ["\u65f6", "\u5206", "\u79d2"],
                timeTips: "\u9009\u62e9\u65f6\u95f4",
                startTime: "\u5f00\u59cb\u65f6\u95f4",
                endTime: "\u7ed3\u675f\u65f6\u95f4",
                dateTips: "\u8fd4\u56de\u65e5\u671f",
                month: ["\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d", "\u4e03", "\u516b", "\u4e5d", "\u5341", "\u5341\u4e00", "\u5341\u4e8c"],
                tools: {confirm: "\u786e\u5b9a", clear: "\u6e05\u7a7a", now: "\u73b0\u5728"},
                timeout: "\u7ed3\u675f\u65f6\u95f4\u4e0d\u80fd\u65e9\u4e8e\u5f00\u59cb\u65f6\u95f4<br>\u8bf7\u91cd\u65b0\u9009\u62e9",
                invalidDate: "\u4e0d\u5728\u6709\u6548\u65e5\u671f\u6216\u65f6\u95f4\u8303\u56f4\u5185",
                formatError: ["\u65e5\u671f\u683c\u5f0f\u4e0d\u5408\u6cd5<br>\u5fc5\u987b\u9075\u5faa\u4e0b\u8ff0\u683c\u5f0f\uff1a<br>", "<br>\u5df2\u4e3a\u4f60\u91cd\u7f6e"],
                preview: "\u5f53\u524d\u9009\u4e2d\u7684\u7ed3\u679c"
            },
            en: {
                weeks: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                time: ["Hours", "Minutes", "Seconds"],
                timeTips: "Select Time",
                startTime: "Start Time",
                endTime: "End Time",
                dateTips: "Select Date",
                month: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                tools: {confirm: "Confirm", clear: "Clear", now: "Now"},
                timeout: "End time cannot be less than start Time<br>Please re-select",
                invalidDate: "Invalid date",
                formatError: ["The date format error<br>Must be followed\uff1a<br>", "<br>It has been reset"],
                preview: "The selected result"
            }
        };
        return e[this.config.lang] || e.cn
    }, I.prototype.reload = function (e) {
        this.config = lay.extend({}, this.config, e), this.init()
    }, I.prototype.init = function () {
        var r = this, o = r.config, e = "static" === o.position,
            t = {year: "yyyy", month: "yyyy-MM", date: "yyyy-MM-dd", time: "HH:mm:ss", datetime: "yyyy-MM-dd HH:mm:ss"};
        o.elem = lay(o.elem), o.eventElem = lay(o.eventElem), o.elem[0] && ("array" !== layui.type(o.theme) && (o.theme = [o.theme]), o.fullPanel && ("datetime" !== o.type || o.range) && delete o.fullPanel, r.rangeStr = o.range ? "string" == typeof o.range ? o.range : "-" : "", r.rangeLinked = !(!o.range || !o.rangeLinked || "date" !== o.type && "datetime" !== o.type), r.autoCalendarModel = function () {
            var e = r.rangeLinked;
            return r.rangeLinked = o.range && ("date" === o.type || "datetime" === o.type) && (!r.startDate || !r.endDate || r.startDate && r.endDate && r.startDate.year === r.endDate.year && r.startDate.month === r.endDate.month), lay(r.elem)[r.rangeLinked ? "addClass" : "removeClass"]("layui-laydate-linkage"), r.rangeLinked != e
        }, r.autoCalendarModel.auto = r.rangeLinked && "auto" === o.rangeLinked, "array" === layui.type(o.range) && (r.rangeElem = [lay(o.range[0]), lay(o.range[1])]), t[o.type] || (i.console && console.error && console.error("laydate type error:'" + o.type + "' is not supported"), o.type = "date"), o.format === t.date && (o.format = t[o.type] || t.date), r.format = s.formatArr(o.format), o.weekStart && !/^[0-6]$/.test(o.weekStart) && (t = r.lang(), o.weekStart = t.weeks.indexOf(o.weekStart), -1 === o.weekStart) && (o.weekStart = 0), r.EXP_IF = "", r.EXP_SPLIT = "", lay.each(r.format, function (e, t) {
            e = new RegExp(c).test(t) ? "\\d{" + (new RegExp(c).test(r.format[0 === e ? e + 1 : e - 1] || "") ? /^yyyy|y$/.test(t) ? 4 : t.length : /^yyyy$/.test(t) ? "1,4" : /^y$/.test(t) ? "1,308" : "1,2") + "}" : "\\" + t;
            r.EXP_IF = r.EXP_IF + e, r.EXP_SPLIT = r.EXP_SPLIT + "(" + e + ")"
        }), r.EXP_IF_ONE = new RegExp("^" + r.EXP_IF + "$"), r.EXP_IF = new RegExp("^" + (o.range ? r.EXP_IF + "\\s\\" + r.rangeStr + "\\s" + r.EXP_IF : r.EXP_IF) + "$"), r.EXP_SPLIT = new RegExp("^" + r.EXP_SPLIT + "$", ""), r.isInput(o.elem[0]) || "focus" === o.trigger && (o.trigger = "click"), o.elem.attr("lay-key", r.index), o.eventElem.attr("lay-key", r.index), o.elem.attr(d, o.id), o.mark = lay.extend({}, o.calendar && "cn" === o.lang ? {
            "0-1-1": "\u5143\u65e6",
            "0-2-14": "\u60c5\u4eba",
            "0-3-8": "\u5987\u5973",
            "0-3-12": "\u690d\u6811",
            "0-4-1": "\u611a\u4eba",
            "0-5-1": "\u52b3\u52a8",
            "0-5-4": "\u9752\u5e74",
            "0-6-1": "\u513f\u7ae5",
            "0-9-10": "\u6559\u5e08",
            "0-10-1": "\u56fd\u5e86",
            "0-12-25": "\u5723\u8bde"
        } : {}, o.mark), lay.each(["min", "max"], function (e, t) {
            var a = [], n = [];
            if ("number" == typeof o[t]) var i = o[t], l = new Date, l = r.newDate({
                    year: l.getFullYear(),
                    month: l.getMonth(),
                    date: l.getDate(),
                    hours: e ? 23 : 0,
                    minutes: e ? 59 : 0,
                    seconds: e ? 59 : 0
                }).getTime(), e = new Date(i ? i < 864e5 ? l + 864e5 * i : i : l),
                a = [e.getFullYear(), e.getMonth() + 1, e.getDate()],
                n = [e.getHours(), e.getMinutes(), e.getSeconds()]; else if ("string" == typeof o[t]) a = (o[t].match(/\d+-\d+-\d+/) || [""])[0].split("-"), n = (o[t].match(/\d+:\d+:\d+/) || [""])[0].split(":"); else if ("object" == typeof o[t]) return o[t];
            o[t] = {
                year: 0 | a[0] || (new Date).getFullYear(),
                month: a[1] ? (0 | a[1]) - 1 : (new Date).getMonth(),
                date: 0 | a[2] || (new Date).getDate(),
                hours: 0 | n[0],
                minutes: 0 | n[1],
                seconds: 0 | n[2]
            }
        }), r.elemID = "layui-laydate" + o.elem.attr("lay-key"), (o.show || e) && r.render(), e || r.events(), o.value) && o.isInitValue && ("date" === layui.type(o.value) ? r.setValue(r.parse(0, r.systemDate(o.value))) : r.setValue(o.value))
    }, I.prototype.render = function () {
        var a, n, i, l, r = this, o = r.config, d = r.lang(), s = "static" === o.position,
            y = r.elem = lay.elem("div", {
                id: r.elemID,
                "class": ["layui-laydate", o.range ? " layui-laydate-range" : "", r.rangeLinked ? " layui-laydate-linkage" : "", s ? " " + T : "", o.fullPanel ? " laydate-theme-fullpanel" : "", (a = "", lay.each(o.theme, function (e, t) {
                    "default" === t || /^#/.test(t) || (a += " laydate-theme-" + t)
                }), a)].join("")
            }), m = r.elemMain = [], c = r.elemHeader = [], u = r.elemCont = [], h = r.table = [],
            e = r.footer = lay.elem("div", {"class": "layui-laydate-footer"}),
            t = r.shortcut = lay.elem("ul", {"class": "layui-laydate-shortcut"}),
            f = (o.zIndex && (y.style.zIndex = o.zIndex), lay.each(new Array(2), function (e) {
                if (!o.range && 0 < e) return !0;
                var a = lay.elem("div", {"class": "layui-laydate-header"}),
                    t = [((t = lay.elem("i", {"class": "layui-icon laydate-icon laydate-prev-y"})).innerHTML = "&#xe65a;", t), ((t = lay.elem("i", {"class": "layui-icon laydate-icon laydate-prev-m"})).innerHTML = "&#xe603;", t), (t = lay.elem("div", {"class": "laydate-set-ym"}), n = lay.elem("span"), l = lay.elem("span"), t.appendChild(n), t.appendChild(l), t), ((n = lay.elem("i", {"class": "layui-icon laydate-icon laydate-next-m"})).innerHTML = "&#xe602;", n), ((l = lay.elem("i", {"class": "layui-icon laydate-icon laydate-next-y"})).innerHTML = "&#xe65b;", l)],
                    n = lay.elem("div", {"class": "layui-laydate-content"}), i = lay.elem("table"),
                    l = lay.elem("thead"), r = lay.elem("tr");
                lay.each(t, function (e, t) {
                    a.appendChild(t)
                }), l.appendChild(r), lay.each(new Array(6), function (a) {
                    var n = i.insertRow(0);
                    lay.each(new Array(7), function (e) {
                        var t;
                        0 === a && ((t = lay.elem("th")).innerHTML = d.weeks[(e + o.weekStart) % 7], r.appendChild(t)), n.insertCell(e)
                    })
                }), i.insertBefore(l, i.children[0]), n.appendChild(i), m[e] = lay.elem("div", {"class": "layui-laydate-main laydate-main-list-" + e}), m[e].appendChild(a), m[e].appendChild(n), c.push(t), u.push(n), h.push(i)
            }), lay(e).html((f = [], n = [], "datetime" === o.type && f.push('<span lay-type="datetime" class="' + L + '">' + d.timeTips + "</span>"), (o.range || "datetime" !== o.type || o.fullPanel) && f.push('<span class="' + E + '" title="' + d.preview + '"></span>'), lay.each(o.btns, function (e, t) {
                var a = d.tools[t] || "btn";
                o.range && "now" === t || (s && "clear" === t && (a = "cn" === o.lang ? "\u91cd\u7f6e" : "Reset"), n.push('<span lay-type="' + t + '" class="laydate-btns-' + t + '">' + a + "</span>"))
            }), f.push('<div class="laydate-footer-btns">' + n.join("") + "</div>"), f.join(""))), o.shortcuts && (y.appendChild(t), lay(t).html((i = [], lay.each(o.shortcuts, function (e, t) {
                i.push('<li data-index="' + e + '">' + t.text + "</li>")
            }), i.join(""))).find("li").on("click", function (e) {
                var t = o.shortcuts[this.dataset.index] || {},
                    t = ("function" == typeof t.value ? t.value() : t.value) || [],
                    n = (layui.isArray(t) || (t = [t]), o.type), t = (lay.each(t, function (e, t) {
                        var a = [o.dateTime, r.endDate][e];
                        "time" === n && "date" !== layui.type(t) ? r.EXP_IF.test(t) && (t = (t.match(r.EXP_SPLIT) || []).slice(1), lay.extend(a, {
                            hours: 0 | t[0],
                            minutes: 0 | t[2],
                            seconds: 0 | t[4]
                        })) : lay.extend(a, r.systemDate("date" === layui.type(t) ? t : new Date(t))), "time" !== n && "datetime" !== n || (r[["startTime", "endTime"][e]] = {
                            hours: a.hours,
                            minutes: a.minutes,
                            seconds: a.seconds
                        }), 0 === e ? r.startDate = lay.extend({}, a) : r.endState = !0, "year" === n || "month" === n || "time" === n ? r.listYM[e] = [a.year, a.month + 1] : e && r.autoCalendarModel.auto && r.autoCalendarModel()
                    }), r.checkDate("limit").calendar(null, null, "init"), lay(r.footer).find("." + L).removeClass(k));
                t && "date" === t.attr("lay-type") && t[0].click(), r.done(null, "change"), lay(this).addClass(x), "static" !== o.position && r.setValue(r.parse()).done().remove()
            })), lay.each(m, function (e, t) {
                y.appendChild(t)
            }), o.showBottom && y.appendChild(e), lay.elem("style")), p = [], g = !0,
            t = (lay.each(o.theme, function (e, t) {
                g && /^#/.test(t) ? (g = !(l = !0), p.push(["#{{id}} .layui-laydate-header{background-color:{{theme}};}", "#{{id}} li.layui-this,#{{id}} td.layui-this>div{background-color:{{theme}} !important;}", -1 !== o.theme.indexOf("circle") ? "" : "#{{id}} .layui-this{background-color:{{theme}} !important;}", "#{{id}} .laydate-day-now{color:{{theme}} !important;}", "#{{id}} .laydate-day-now:after{border-color:{{theme}} !important;}"].join("").replace(/{{id}}/g, r.elemID).replace(/{{theme}}/g, t))) : !g && /^#/.test(t) && p.push(["#{{id}} .laydate-selected>div{background-color:{{theme}} !important;}", "#{{id}} .laydate-selected:hover>div{background-color:{{theme}} !important;}"].join("").replace(/{{id}}/g, r.elemID).replace(/{{theme}}/g, t))
            }), o.shortcuts && o.range && p.push("#{{id}}.layui-laydate-range{width: 628px;}".replace(/{{id}}/g, r.elemID)), p.length && (p = p.join(""), "styleSheet" in f ? (f.setAttribute("type", "text/css"), f.styleSheet.cssText = p) : f.innerHTML = p, l && lay(y).addClass("laydate-theme-molv"), y.appendChild(f)), r.remove(I.thisElemDate), D.thisId = o.id, s ? o.elem.append(y) : (v.body.appendChild(y), r.position()), o.shade ? '<div class="' + S + '" style="z-index:' + (parseInt(layui.getStyle(y, "z-index")) - 1) + "; background-color: " + (o.shade[1] || "#000") + "; opacity: " + (o.shade[0] || o.shade) + '"></div>' : "");
        y.insertAdjacentHTML("beforebegin", t), r.checkDate().calendar(null, 0, "init"), r.changeEvent(), I.thisElemDate = r.elemID, r.renderAdditional(), "function" == typeof o.ready && o.ready(lay.extend({}, o.dateTime, {month: o.dateTime.month + 1})), r.preview()
    }, I.prototype.remove = function (e) {
        var t = this, a = t.config, n = lay("#" + (e || t.elemID));
        return n[0] && (n.hasClass(T) || t.checkDate(function () {
            n.remove(), delete t.startDate, delete t.endDate, delete t.endState, delete t.startTime, delete t.endTime, delete D.thisId, "function" == typeof a.close && a.close(t)
        }), lay("." + S).remove()), t
    }, I.prototype.position = function () {
        var e = this.config;
        return lay.position(e.elem[0], this.elem, {position: e.position}), this
    }, I.prototype.hint = function (e) {
        var t = this, a = (t.config, lay.elem("div", {"class": r}));
        t.elem && (a.innerHTML = (e = "object" == typeof e ? e || {} : {content: e}).content || "", lay(t.elem).find("." + r).remove(), t.elem.appendChild(a), clearTimeout(t.hinTimer), t.hinTimer = setTimeout(function () {
            lay(t.elem).find("." + r).remove()
        }, "ms" in e ? e.ms : 3e3))
    }, I.prototype.getAsYM = function (e, t, a) {
        return a ? t-- : t++, t < 0 && (t = 11, e--), 11 < t && (t = 0, e++), [e, t]
    }, I.prototype.systemDate = function (e) {
        var t = e || new Date;
        return {
            year: t.getFullYear(),
            month: t.getMonth(),
            date: t.getDate(),
            hours: e ? e.getHours() : 0,
            minutes: e ? e.getMinutes() : 0,
            seconds: e ? e.getSeconds() : 0
        }
    }, I.prototype.checkDate = function (e) {
        var t, o, a, n, i, d = this, s = (new Date, d.config), l = d.lang(),
            r = s.dateTime = s.dateTime || d.systemDate(), y = s.elem[0], m = (d.isInput(y), function () {
                if (d.rangeElem) {
                    var e = [d.rangeElem[0].val(), d.rangeElem[1].val()];
                    if (e[0] && e[1]) return e.join(" " + d.rangeStr + " ")
                }
                return d.isInput(y) ? y.value : "static" === s.position ? "" : lay(y).attr("lay-date")
            }()), c = function (e) {
                e && (e.year > h[1] && (e.year = h[1], o = !0), 11 < e.month && (e.month = 11, o = !0), 59 < e.seconds && (e.seconds = 0, e.minutes++, o = !0), 59 < e.minutes && (e.minutes = 0, e.hours++, o = !0), 23 < e.hours && (e.hours = 0, o = !0), t = D.getEndDate(e.month + 1, e.year), e.date > t) && (e.date = t, o = !0)
            }, u = function (n, i, l) {
                var r = ["startTime", "endTime"];
                i = (i.match(d.EXP_SPLIT) || []).slice(1), l = l || 0, s.range && (d[r[l]] = d[r[l]] || {}), lay.each(d.format, function (e, t) {
                    var a = parseFloat(i[e]);
                    i[e].length < t.length && (o = !0), /yyyy|y/.test(t) ? (a < h[0] && (a = h[0], o = !0), n.year = a) : /MM|M/.test(t) ? (a < 1 && (a = 1, o = !0), n.month = a - 1) : /dd|d/.test(t) ? (a < 1 && (a = 1, o = !0), n.date = a) : /HH|H/.test(t) ? (a < 0 && (o = !(a = 0)), 23 < a && (a = 23, o = !0), n.hours = a, s.range && (d[r[l]].hours = a)) : /mm|m/.test(t) ? (a < 0 && (o = !(a = 0)), 59 < a && (a = 59, o = !0), n.minutes = a, s.range && (d[r[l]].minutes = a)) : /ss|s/.test(t) && (a < 0 && (o = !(a = 0)), 59 < a && (a = 59, o = !0), n.seconds = a, s.range) && (d[r[l]].seconds = a)
                }), c(n)
            };
        return "limit" === e ? s.range ? (c(d.rangeLinked ? d.startDate : r), d.endDate && c(d.endDate)) : c(r) : ("string" == typeof (m = m || s.value) && (m = m.replace(/\s+/g, " ").replace(/^\s|\s$/g, "")), (a = function () {
            var e, t, a;
            s.range && (d.endDate = d.endDate || lay.extend({}, s.dateTime, (e = {}, t = s.dateTime, a = d.getAsYM(t.year, t.month), "year" === s.type ? e.year = t.year + 1 : "time" !== s.type && (e.year = a[0], e.month = a[1]), "datetime" !== s.type && "time" !== s.type || (e.hours = 23, e.minutes = e.seconds = 59), e)))
        })(), "string" == typeof m && m ? d.EXP_IF.test(m) ? s.range ? (m = m.split(" " + d.rangeStr + " "), lay.each([s.dateTime, d.endDate], function (e, t) {
            u(t, m[e], e)
        })) : u(r, m) : (d.hint(l.formatError[0] + (s.range ? s.format + " " + d.rangeStr + " " + s.format : s.format) + l.formatError[1]), o = !0) : m && "date" === layui.type(m) ? s.dateTime = d.systemDate(m) : (s.dateTime = d.systemDate(), delete d.startTime, delete d.endDate, a(), delete d.endTime), d.rangeElem && (a = [d.rangeElem[0].val(), d.rangeElem[1].val()], n = [s.dateTime, d.endDate], lay.each(a, function (e, t) {
            d.EXP_IF_ONE.test(t) && u(n[e], t, e)
        })), c(r), s.range && c(d.endDate), o && m && d.setValue(!s.range || d.endDate ? d.parse() : ""), d.getDateTime(r) > d.getDateTime(s.max) ? (r = s.dateTime = lay.extend({}, s.max), i = !0) : d.getDateTime(r) < d.getDateTime(s.min) && (r = s.dateTime = lay.extend({}, s.min), i = !0), s.range && ((d.getDateTime(d.endDate) < d.getDateTime(s.min) || d.getDateTime(d.endDate) > d.getDateTime(s.max)) && (d.endDate = lay.extend({}, s.max), i = !0), d.startTime = {
            hours: s.dateTime.hours,
            minutes: s.dateTime.minutes,
            seconds: s.dateTime.seconds
        }, d.endTime = {
            hours: d.endDate.hours,
            minutes: d.endDate.minutes,
            seconds: d.endDate.seconds
        }, "month" === s.type) && (s.dateTime.date = 1, d.endDate.date = 1), i && m && (d.setValue(d.parse()), d.hint("value " + l.invalidDate + l.formatError[1])), d.startDate = d.startDate || m && lay.extend({}, s.dateTime), d.autoCalendarModel.auto && d.autoCalendarModel(), d.endState = !s.range || !d.rangeLinked || !(!d.startDate || !d.endDate), e && e()), d
    }, I.prototype.mark = function (e, a) {
        var n, t = this.config;
        return lay.each(t.mark, function (e, t) {
            e = e.split("-");
            e[0] != a[0] && 0 != e[0] || e[1] != a[1] && 0 != e[1] || e[2] != a[2] || (n = t || a[2])
        }), n && e.find("div").html('<span class="laydate-day-mark">' + n + "</span>"), this
    }, I.prototype.holidays = function (n, i) {
        var e = this.config, l = ["", "work"];
        return "array" === layui.type(e.holidays) && lay.each(e.holidays, function (a, e) {
            lay.each(e, function (e, t) {
                t === n.attr("lay-ymd") && n.find("div").html('<span class="laydate-day-holidays"' + (l[a] ? 'type="' + l[a] + '"' : "") + ">" + i[2] + "</span>")
            })
        }), this
    }, I.prototype.limit = function (t) {
        t = t || {};
        var i = this, e = i.config, l = {}, a = t.index > (t.time ? 0 : 41) ? i.endDate : e.dateTime;
        return lay.each({now: lay.extend({}, a, t.date || {}), min: e.min, max: e.max}, function (e, a) {
            var n;
            l[e] = i.newDate(lay.extend({
                year: a.year,
                month: "year" === t.type ? 0 : a.month,
                date: "year" === t.type || "month" === t.type ? 1 : a.date
            }, (n = {}, lay.each(t.time, function (e, t) {
                n[t] = a[t]
            }), n))).getTime()
        }), a = l.now < l.min || l.max < l.now, t.elem && t.elem[a ? "addClass" : "removeClass"](k), a
    }, I.prototype.thisDateTime = function (e) {
        var t = this.config;
        return e ? this.endDate : t.dateTime
    }, I.prototype.calendar = function (e, t, a) {
        t = t ? 1 : 0;
        var i, l, r, o = this, n = o.config, d = e || o.thisDateTime(t), s = new Date, y = o.lang(),
            m = "date" !== n.type && "datetime" !== n.type, c = lay(o.table[t]).find("td"),
            u = lay(o.elemHeader[t][2]).find("span");
        return d.year < h[0] && (d.year = h[0], o.hint(y.invalidDate)), d.year > h[1] && (d.year = h[1], o.hint(y.invalidDate)), o.firstDate || (o.firstDate = lay.extend({}, d)), s.setFullYear(d.year, d.month, 1), i = (s.getDay() + (7 - n.weekStart)) % 7, l = D.getEndDate(d.month || 12, d.year), r = D.getEndDate(d.month + 1, d.year), lay.each(c, function (e, t) {
            var a, n = [d.year, d.month];
            (t = lay(t)).removeAttr("class"), e < i ? (a = l - i + e, t.addClass("laydate-day-prev"), n = o.getAsYM(d.year, d.month, "sub")) : i <= e && e < r + i ? (a = e - i, o.rangeLinked || a + 1 === d.date && t.addClass(x)) : (a = e - r - i, t.addClass("laydate-day-next"), n = o.getAsYM(d.year, d.month)), n[1]++, n[2] = a + 1, t.attr("lay-ymd", n.join("-")).html("<div>" + n[2] + "</div>"), o.mark(t, n).holidays(t, n).limit({
                elem: t,
                date: {year: n[0], month: n[1] - 1, date: n[2]},
                index: e
            })
        }), lay(u[0]).attr("lay-ym", d.year + "-" + (d.month + 1)), lay(u[1]).attr("lay-ym", d.year + "-" + (d.month + 1)), "cn" === n.lang ? (lay(u[0]).attr("lay-type", "year").html(d.year + " \u5e74"), lay(u[1]).attr("lay-type", "month").html(d.month + 1 + " \u6708")) : (lay(u[0]).attr("lay-type", "month").html(y.month[d.month]), lay(u[1]).attr("lay-type", "year").html(d.year)), m && (n.range ? !e && "init" === a || (o.listYM = [[(o.startDate || n.dateTime).year, (o.startDate || n.dateTime).month + 1], [o.endDate.year, o.endDate.month + 1]], o.list(n.type, 0).list(n.type, 1), "time" === n.type ? o.setBtnStatus("\u65f6\u95f4", lay.extend({}, o.systemDate(), o.startTime), lay.extend({}, o.systemDate(), o.endTime)) : o.setBtnStatus(!0)) : (o.listYM = [[d.year, d.month + 1]], o.list(n.type, 0))), n.range && "init" === a && (o.rangeLinked ? (s = o.getAsYM(d.year, d.month, t ? "sub" : null), o.calendar(lay.extend({}, d, {
            year: s[0],
            month: s[1]
        }), 1 - t)) : o.calendar(null, 1 - t)), n.range || (c = ["hours", "minutes", "seconds"], o.limit({
            elem: lay(o.footer).find(".laydate-btns-now"),
            date: o.systemDate(/^(datetime|time)$/.test(n.type) ? new Date : null),
            index: 0,
            time: c
        }), o.limit({
            elem: lay(o.footer).find(C),
            index: 0,
            time: c
        })), o.setBtnStatus(), lay(o.shortcut).find("li." + x).removeClass(x), n.range && !m && "init" !== a && o.stampRange(), o
    }, I.prototype.list = function (n, i) {
        var l, r, e, o, d = this, s = d.config, y = d.rangeLinked ? s.dateTime : [s.dateTime, d.endDate][i],
            m = d.lang(), t = s.range && "date" !== s.type && "datetime" !== s.type, c = lay.elem("ul", {
                "class": w + " " + {
                    year: "laydate-year-list",
                    month: "laydate-month-list",
                    time: "laydate-time-list"
                }[n]
            }), a = d.elemHeader[i], u = lay(a[2]).find("span"), h = d.elemCont[i || 0], f = lay(h).find("." + w)[0],
            p = "cn" === s.lang, g = p ? "\u5e74" : "", v = d.listYM[i] || {}, D = ["hours", "minutes", "seconds"],
            T = ["startTime", "endTime"][i];
        return v[0] < 1 && (v[0] = 1), "year" === n ? (e = l = v[0] - 7, l < 1 && (e = l = 1), lay.each(new Array(15), function (e) {
            var t = lay.elem("li", {"lay-ym": l}), a = {year: l, month: 0, date: 1};
            l == v[0] && lay(t).addClass(x), t.innerHTML = l + g, c.appendChild(t), d.limit({
                elem: lay(t),
                date: a,
                index: i,
                type: n
            }), l++
        }), lay(u[p ? 0 : 1]).attr("lay-ym", l - 8 + "-" + v[1]).html(e + g + " - " + (l - 1) + g)) : "month" === n ? (lay.each(new Array(12), function (e) {
            var t = lay.elem("li", {"lay-ym": e}), a = {year: v[0], month: e, date: 1};
            e + 1 == v[1] && lay(t).addClass(x), t.innerHTML = m.month[e] + (p ? "\u6708" : ""), c.appendChild(t), d.limit({
                elem: lay(t),
                date: a,
                index: i,
                type: n
            })
        }), lay(u[p ? 0 : 1]).attr("lay-ym", v[0] + "-" + v[1]).html(v[0] + g)) : "time" === n && (r = function () {
            lay(c).find("ol").each(function (a, e) {
                lay(e).find("li").each(function (e, t) {
                    d.limit({
                        elem: lay(t),
                        date: [{hours: e}, {hours: d[T].hours, minutes: e}, {
                            hours: d[T].hours,
                            minutes: d[T].minutes,
                            seconds: e
                        }][a],
                        index: i,
                        time: [["hours"], ["hours", "minutes"], ["hours", "minutes", "seconds"]][a]
                    })
                })
            }), s.range || d.limit({
                elem: lay(d.footer).find(C),
                date: d[T],
                index: 0,
                time: ["hours", "minutes", "seconds"]
            })
        }, s.range ? d[T] || (d[T] = "startTime" === T ? y : d.endDate) : d[T] = y, lay.each([24, 60, 60], function (t, e) {
            var a = lay.elem("li"), n = ["<p>" + m.time[t] + "</p><ol>"];
            lay.each(new Array(e), function (e) {
                n.push("<li" + (d[T][D[t]] === e ? ' class="' + x + '"' : "") + ">" + lay.digit(e, 2) + "</li>")
            }), a.innerHTML = n.join("") + "</ol>", c.appendChild(a)
        }), r()), f && h.removeChild(f), h.appendChild(c), "year" === n || "month" === n ? (lay(d.elemMain[i]).addClass("laydate-ym-show"), lay(c).find("li").on("click", function () {
            var e = 0 | lay(this).attr("lay-ym");
            lay(this).hasClass(k) || (d.rangeLinked ? lay.extend(y, {
                year: "year" === n ? e : v[0],
                month: "year" === n ? v[1] - 1 : e
            }) : y[n] = e, "year" === s.type || "month" === s.type ? (lay(c).find("." + x).removeClass(x), lay(this).addClass(x), "month" === s.type && "year" === n && (d.listYM[i][0] = e, t && ((i ? d.endDate : y).year = e), d.list("month", i))) : (d.checkDate("limit").calendar(y, i, "init"), d.closeList()), d.setBtnStatus(), !s.range && s.autoConfirm && ("month" === s.type && "month" === n || "year" === s.type && "year" === n) && d.setValue(d.parse()).done().remove(), d.autoCalendarModel.auto && !d.rangeLinked ? d.choose(lay(h).find("td.layui-this"), i) : d.endState && d.done(null, "change"), lay(d.footer).find("." + L).removeClass(k))
        })) : (e = lay.elem("span", {"class": M}), o = function () {
            lay(c).find("ol").each(function (e) {
                var a = this, t = lay(a).find("li");
                a.scrollTop = 30 * (d[T][D[e]] - 2), a.scrollTop <= 0 && t.each(function (e, t) {
                    if (!lay(this).hasClass(k)) return a.scrollTop = 30 * (e - 2), !0
                })
            })
        }, u = lay(a[2]).find("." + M), o(), e.innerHTML = s.range ? [m.startTime, m.endTime][i] : m.timeTips, lay(d.elemMain[i]).addClass("laydate-time-show"), u[0] && u.remove(), a[2].appendChild(e), (f = lay(c).find("ol")).each(function (t) {
            var a = this;
            lay(a).find("li").on("click", function () {
                var e = 0 | this.innerHTML;
                lay(this).hasClass(k) || (s.range ? d[T][D[t]] = e : y[D[t]] = e, lay(a).find("." + x).removeClass(x), lay(this).addClass(x), r(), o(), (d.endDate || "time" === s.type || "datetime" === s.type && s.fullPanel) && d.done(null, "change"), d.setBtnStatus())
            })
        }), lay.touchEventsSupported() && f.on("touchstart", function () {
            this.style["overflow-y"] = "auto"
        })), d
    }, I.prototype.listYM = [], I.prototype.closeList = function () {
        var a = this;
        a.config;
        lay.each(a.elemCont, function (e, t) {
            lay(this).find("." + w).remove(), lay(a.elemMain[e]).removeClass("laydate-ym-show laydate-time-show")
        }), lay(a.elem).find("." + M).remove()
    }, I.prototype.setBtnStatus = function (e, t, a) {
        var n = this, i = n.config, l = n.lang(), r = lay(n.footer).find(C);
        i.range && "time" !== i.type && (t = t || (n.rangeLinked ? n.startDate : i.dateTime), a = a || n.endDate, i = !n.endState || n.newDate(t).getTime() > n.newDate(a).getTime(), n.limit({date: t}) || n.limit({date: a}) ? r.addClass(k) : r[i ? "addClass" : "removeClass"](k), e) && i && n.hint("string" == typeof e ? l.timeout.replace(/\u65e5\u671f/g, e) : l.timeout)
    }, I.prototype.parse = function (e, t) {
        var a = this, n = a.config, i = a.rangeLinked ? a.startDate : n.dateTime,
            t = t || ("end" == e ? lay.extend({}, a.endDate, a.endTime) : n.range ? lay.extend({}, i || n.dateTime, a.startTime) : n.dateTime),
            i = D.parse(t, a.format, 1);
        return n.range && e === undefined ? i + " " + a.rangeStr + " " + a.parse("end") : i
    }, I.prototype.newDate = function (e) {
        return e = e || {}, new Date(e.year || 1, e.month || 0, e.date || 1, e.hours || 0, e.minutes || 0, e.seconds || 0)
    }, I.prototype.getDateTime = function (e) {
        return this.newDate(e).getTime()
    }, I.prototype.setValue = function (e) {
        var t = this, a = t.config, n = a.elem[0];
        return "static" !== a.position && (e = e || "", t.isInput(n) ? lay(n).val(e) : (a = t.rangeElem) ? ("array" !== layui.type(e) && (e = e.split(" " + t.rangeStr + " ")), a[0].val(e[0] || ""), a[1].val(e[1] || "")) : (0 === lay(n).find("*").length && lay(n).html(e), lay(n).attr("lay-date", e))), t
    }, I.prototype.preview = function () {
        var e, t = this, a = t.config;
        a.isPreview && (e = lay(t.elem).find("." + E), a = !a.range || (t.rangeLinked ? t.endState : t.endDate) ? t.parse() : "", e.html(a), e.html()) && (e.css({color: "#16b777"}), setTimeout(function () {
            e.css({color: "#777"})
        }, 300))
    }, I.prototype.renderAdditional = function () {
        this.config.fullPanel && this.list("time", 0)
    }, I.prototype.stampRange = function () {
        var n, i = this, l = i.config, r = i.rangeLinked ? i.startDate : l.dateTime, e = lay(i.elem).find("td");
        l.range && !i.endState && lay(i.footer).find(C).addClass(k), r = r && i.newDate({
            year: r.year,
            month: r.month,
            date: r.date
        }).getTime(), n = i.endState && i.endDate && i.newDate({
            year: i.endDate.year,
            month: i.endDate.month,
            date: i.endDate.date
        }).getTime(), lay.each(e, function (e, t) {
            var a = lay(t).attr("lay-ymd").split("-"),
                a = i.newDate({year: a[0], month: a[1] - 1, date: a[2]}).getTime();
            l.rangeLinked && !i.startDate && a === i.newDate(i.systemDate()).getTime() && lay(t).addClass(lay(t).hasClass(y) || lay(t).hasClass(m) ? "" : "laydate-day-now"), lay(t).removeClass(o + " " + x), a !== r && a !== n || (i.rangeLinked || !i.rangeLinked && (e < 42 ? a === r : a === n)) && lay(t).addClass(lay(t).hasClass(y) || lay(t).hasClass(m) ? o : x), r < a && a < n && lay(t).addClass(o)
        })
    }, I.prototype.done = function (e, t) {
        var a = this, n = a.config,
            i = lay.extend({}, lay.extend(a.rangeLinked ? a.startDate : n.dateTime, a.startTime)),
            l = lay.extend({}, lay.extend(a.endDate, a.endTime));
        return lay.each([i, l], function (e, t) {
            "month" in t && lay.extend(t, {month: t.month + 1})
        }), a.preview(), e = e || [a.parse(), i, l], "change" === t && a.renderAdditional(), "function" == typeof n[t || "done"] && n[t || "done"].apply(n, e), a
    }, I.prototype.choose = function (e, a) {
        var n, i, t, l, r, o;
        e.hasClass(k) || (i = (n = this).config, t = a, n.rangeLinked && (n.endState || !n.startDate ? (a = 0, n.endState = !1, n.endDate = {}) : (a = 1, n.endState = !0)), l = n.thisDateTime(a), lay(n.elem).find("td"), e = {
            year: 0 | (e = e.attr("lay-ymd").split("-"))[0],
            month: (0 | e[1]) - 1,
            date: 0 | e[2]
        }, lay.extend(l, e), i.range ? (lay.each(["startTime", "endTime"], function (e, t) {
            n[t] = n[t] || {
                hours: e ? 23 : 0,
                minutes: e ? 59 : 0,
                seconds: e ? 59 : 0
            }, a === e && (n.getDateTime(lay.extend({}, l, n[t])) < n.getDateTime(i.min) ? (n[t] = {
                hours: i.min.hours,
                minutes: i.min.minutes,
                seconds: i.min.seconds
            }, lay.extend(l, n[t])) : n.getDateTime(lay.extend({}, l, n[t])) > n.getDateTime(i.max) && (n[t] = {
                hours: i.max.hours,
                minutes: i.max.minutes,
                seconds: i.max.seconds
            }, lay.extend(l, n[t])))
        }), a || (n.startDate = lay.extend({}, l)), n.endState && !n.limit({date: n.thisDateTime(1 - a)}) && (((r = n.endState && n.autoCalendarModel.auto ? n.autoCalendarModel() : r) || n.rangeLinked && n.endState) && n.newDate(n.startDate) > n.newDate(n.endDate) && (e = n.startDate.year === n.endDate.year && n.startDate.month === n.endDate.month && n.startDate.date === n.endDate.date, o = n.startDate, n.startDate = lay.extend({}, n.endDate, e ? {} : n.startTime), i.dateTime = lay.extend({}, n.startDate), n.endDate = lay.extend({}, o, e ? {} : n.endTime), e) && (o = n.startTime, n.startTime = n.endTime, n.endTime = o), r) && (i.dateTime = lay.extend({}, n.startDate)), n.rangeLinked ? (e = lay.extend({}, l), !t || a || r || (o = n.getAsYM(l.year, l.month, "sub"), lay.extend(i.dateTime, {
            year: o[0],
            month: o[1]
        })), n.calendar(e, t, r ? "init" : null)) : n.calendar(null, a, r ? "init" : null), n.endState && n.done(null, "change")) : "static" === i.position ? n.calendar().done().done(null, "change") : "date" === i.type ? i.autoConfirm ? n.setValue(n.parse()).done().remove() : n.calendar().done(null, "change") : "datetime" === i.type && n.calendar().done(null, "change"))
    }, I.prototype.tool = function (t, e) {
        var a = this, n = a.config, i = a.lang(), l = n.dateTime, r = "static" === n.position, o = {
            datetime: function () {
                lay(t).hasClass(k) || (a.list("time", 0), n.range && a.list("time", 1), lay(t).attr("lay-type", "date").html(a.lang().dateTips))
            }, date: function () {
                a.closeList(), lay(t).attr("lay-type", "datetime").html(a.lang().timeTips)
            }, clear: function () {
                r && (lay.extend(l, a.firstDate), a.calendar()), n.range && (delete n.dateTime, delete a.endDate, delete a.startTime, delete a.endTime), a.setValue(""), a.done(null, "onClear").done(["", {}, {}]).remove()
            }, now: function () {
                var e = new Date;
                if (lay(t).hasClass(k)) return a.hint(i.tools.now + ", " + i.invalidDate);
                lay.extend(l, a.systemDate(), {
                    hours: e.getHours(),
                    minutes: e.getMinutes(),
                    seconds: e.getSeconds()
                }), a.setValue(a.parse()), r && a.calendar(), a.done(null, "onNow").done().remove()
            }, confirm: function () {
                if (n.range) {
                    if (lay(t).hasClass(k)) return a.hint("time" === n.type ? i.timeout.replace(/\u65e5\u671f/g, "\u65f6\u95f4") : i.timeout)
                } else if (lay(t).hasClass(k)) return a.hint(i.invalidDate);
                a.setValue(a.parse()), a.done(null, "onConfirm").done().remove()
            }
        };
        o[e] && o[e]()
    }, I.prototype.change = function (n) {
        var i = this, l = i.config, r = i.thisDateTime(n), o = l.range && ("year" === l.type || "month" === l.type),
            d = i.elemCont[n || 0], s = i.listYM[n], e = function (e) {
                var t = lay(d).find(".laydate-year-list")[0], a = lay(d).find(".laydate-month-list")[0];
                return t && (s[0] = e ? s[0] - 15 : s[0] + 15, i.list("year", n)), a && (e ? s[0]-- : s[0]++, i.list("month", n)), (t || a) && (lay.extend(r, {year: s[0]}), o && (r.year = s[0]), l.range || i.done(null, "change"), l.range || i.limit({
                    elem: lay(i.footer).find(C),
                    date: {year: s[0]}
                })), i.setBtnStatus(), t || a
            };
        return {
            prevYear: function () {
                e("sub") || (i.rangeLinked ? (l.dateTime.year--, i.checkDate("limit").calendar(null, null, "init")) : (r.year--, i.checkDate("limit").calendar(null, n), i.autoCalendarModel.auto ? i.choose(lay(d).find("td.layui-this"), n) : i.done(null, "change")))
            }, prevMonth: function () {
                i.rangeLinked && (r = l.dateTime);
                var e = i.getAsYM(r.year, r.month, "sub");
                lay.extend(r, {
                    year: e[0],
                    month: e[1]
                }), i.checkDate("limit").calendar(null, null, "init"), i.rangeLinked || (i.autoCalendarModel.auto ? i.choose(lay(d).find("td.layui-this"), n) : i.done(null, "change"))
            }, nextMonth: function () {
                i.rangeLinked && (r = l.dateTime);
                var e = i.getAsYM(r.year, r.month);
                lay.extend(r, {
                    year: e[0],
                    month: e[1]
                }), i.checkDate("limit").calendar(null, null, "init"), i.rangeLinked || (i.autoCalendarModel.auto ? i.choose(lay(d).find("td.layui-this"), n) : i.done(null, "change"))
            }, nextYear: function () {
                e() || (i.rangeLinked ? (l.dateTime.year++, i.checkDate("limit").calendar(null, 0, "init")) : (r.year++, i.checkDate("limit").calendar(null, n), i.autoCalendarModel.auto ? i.choose(lay(d).find("td.layui-this"), n) : i.done(null, "change")))
            }
        }
    }, I.prototype.changeEvent = function () {
        var i = this;
        i.config;
        lay(i.elem).on("click", function (e) {
            lay.stope(e)
        }).on("mousedown", function (e) {
            lay.stope(e)
        }), lay.each(i.elemHeader, function (n, e) {
            lay(e[0]).on("click", function (e) {
                i.change(n).prevYear()
            }), lay(e[1]).on("click", function (e) {
                i.change(n).prevMonth()
            }), lay(e[2]).find("span").on("click", function (e) {
                var t = lay(this), a = t.attr("lay-ym"), t = t.attr("lay-type");
                a && (a = a.split("-"), i.listYM[n] = [0 | a[0], 0 | a[1]], i.list(t, n), lay(i.footer).find("." + L).addClass(k))
            }), lay(e[3]).on("click", function (e) {
                i.change(n).nextMonth()
            }), lay(e[4]).on("click", function (e) {
                i.change(n).nextYear()
            })
        }), lay.each(i.table, function (e, t) {
            lay(t).find("td").on("click", function () {
                i.choose(lay(this), e)
            })
        }), lay(i.footer).find("span").on("click", function () {
            var e = lay(this).attr("lay-type");
            i.tool(this, e)
        })
    }, I.prototype.isInput = function (e) {
        return /input|textarea/.test(e.tagName.toLocaleLowerCase()) || /INPUT|TEXTAREA/.test(e.tagName)
    }, I.prototype.events = function () {
        var e, t = this, a = t.config;
        a.elem[0] && !a.elem[0].eventHandler && (a.elem.on(a.trigger, e = function () {
            D.thisId !== a.id && t.render()
        }), a.elem[0].eventHandler = !0, a.eventElem.on(a.trigger, e), t.unbind = function () {
            t.remove(), a.elem.off(a.trigger, e), a.elem.removeAttr("lay-key"), a.elem.removeAttr(d), a.elem[0].eventHandler = !1, a.eventElem.off(a.trigger, e), a.eventElem.removeAttr("lay-key"), delete s.that[a.id]
        })
    }, s.that = {}, s.getThis = function (e) {
        var t = s.that[e];
        return !t && n && layui.hint().error(e ? a + " instance with ID '" + e + "' not found" : "ID argument required"), t
    }, l.run = function (n) {
        n(v).on("mousedown", function (e) {
            var t, a;
            D.thisId && (t = s.getThis(D.thisId)) && (a = t.config, e.target === a.elem[0] || e.target === a.eventElem[0] || e.target === n(a.closeStop)[0] || a.elem[0] && a.elem[0].contains(e.target) || t.remove())
        }).on("keydown", function (e) {
            var t;
            D.thisId && (t = s.getThis(D.thisId)) && "static" !== t.config.position && 13 === e.keyCode && n("#" + t.elemID)[0] && t.elemID === I.thisElemDate && (e.preventDefault(), n(t.footer).find(C)[0].click())
        }), n(i).on("resize", function () {
            if (D.thisId) {
                var e = s.getThis(D.thisId);
                if (e) return !(!e.elem || !n(".layui-laydate")[0]) && void e.position()
            }
        })
    }, D.render = function (e) {
        e = new I(e);
        return s.call(e)
    }, D.reload = function (e, t) {
        e = s.getThis(e);
        if (e) return e.reload(t)
    }, D.getInst = function (e) {
        e = s.getThis(e);
        if (e) return e.inst
    }, D.hint = function (e, t) {
        e = s.getThis(e);
        if (e) return e.hint(t)
    }, D.unbind = function (e) {
        e = s.getThis(e);
        if (e) return e.unbind()
    }, D.close = function (e) {
        e = s.getThis(e || D.thisId);
        if (e) return e.remove()
    }, D.parse = function (a, n, i) {
        return a = a || {}, n = ((n = "string" == typeof n ? s.formatArr(n) : n) || []).concat(), lay.each(n, function (e, t) {
            /yyyy|y/.test(t) ? n[e] = lay.digit(a.year, t.length) : /MM|M/.test(t) ? n[e] = lay.digit(a.month + (i || 0), t.length) : /dd|d/.test(t) ? n[e] = lay.digit(a.date, t.length) : /HH|H/.test(t) ? n[e] = lay.digit(a.hours, t.length) : /mm|m/.test(t) ? n[e] = lay.digit(a.minutes, t.length) : /ss|s/.test(t) && (n[e] = lay.digit(a.seconds, t.length))
        }), n.join("")
    }, D.getEndDate = function (e, t) {
        var a = new Date;
        return a.setFullYear(t || a.getFullYear(), e || a.getMonth() + 1, 1), new Date(a.getTime() - 864e5).getDate()
    }, n ? (D.ready(), layui.define("lay", function (e) {
        D.path = layui.cache.dir, l.run(lay), e(a, D)
    })) : "function" == typeof define && define.amd ? define(function () {
        return l.run(lay), D
    }) : (D.ready(), l.run(i.lay), i.laydate = D)
}(window, window.document);
!function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e) : function (e) {
        if (e.document) return t(e);
        throw new Error("jQuery requires a window with a document")
    } : t(e)
}("undefined" != typeof window ? window : this, function (T, M) {
    var f = [], g = T.document, c = f.slice, O = f.concat, R = f.push, P = f.indexOf, B = {}, W = B.toString,
        m = B.hasOwnProperty, y = {}, e = "1.12.4", C = function (e, t) {
            return new C.fn.init(e, t)
        }, I = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, $ = /^-ms-/, z = /-([\da-z])/gi, X = function (e, t) {
            return t.toUpperCase()
        };

    function U(e) {
        var t = !!e && "length" in e && e.length, n = C.type(e);
        return "function" !== n && !C.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }

    C.fn = C.prototype = {
        jquery: e, constructor: C, selector: "", length: 0, toArray: function () {
            return c.call(this)
        }, get: function (e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : c.call(this)
        }, pushStack: function (e) {
            e = C.merge(this.constructor(), e);
            return e.prevObject = this, e.context = this.context, e
        }, each: function (e) {
            return C.each(this, e)
        }, map: function (n) {
            return this.pushStack(C.map(this, function (e, t) {
                return n.call(e, t, e)
            }))
        }, slice: function () {
            return this.pushStack(c.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, e = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= e && e < t ? [this[e]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: R, sort: f.sort, splice: f.splice
    }, C.extend = C.fn.extend = function () {
        var e, t, n, r, i, o = arguments[0] || {}, a = 1, s = arguments.length, u = !1;
        for ("boolean" == typeof o && (u = o, o = arguments[a] || {}, a++), "object" == typeof o || C.isFunction(o) || (o = {}), a === s && (o = this, a--); a < s; a++) if (null != (r = arguments[a])) for (n in r) i = o[n], o !== (t = r[n]) && (u && t && (C.isPlainObject(t) || (e = C.isArray(t))) ? (i = e ? (e = !1, i && C.isArray(i) ? i : []) : i && C.isPlainObject(i) ? i : {}, o[n] = C.extend(u, i, t)) : t !== undefined && (o[n] = t));
        return o
    }, C.extend({
        expando: "jQuery" + (e + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isFunction: function (e) {
            return "function" === C.type(e)
        }, isArray: Array.isArray || function (e) {
            return "array" === C.type(e)
        }, isWindow: function (e) {
            return null != e && e == e.window
        }, isNumeric: function (e) {
            var t = e && e.toString();
            return !C.isArray(e) && 0 <= t - parseFloat(t) + 1
        }, isEmptyObject: function (e) {
            for (var t in e) return !1;
            return !0
        }, isPlainObject: function (e) {
            if (!e || "object" !== C.type(e) || e.nodeType || C.isWindow(e)) return !1;
            try {
                if (e.constructor && !m.call(e, "constructor") && !m.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (!y.ownFirst) for (var t in e) return m.call(e, t);
            for (t in e) ;
            return t === undefined || m.call(e, t)
        }, type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? B[W.call(e)] || "object" : typeof e
        }, globalEval: function (e) {
            e && C.trim(e) && (T.execScript || function (e) {
                T.eval.call(T, e)
            })(e)
        }, camelCase: function (e) {
            return e.replace($, "ms-").replace(z, X)
        }, nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function (e, t) {
            var n, r = 0;
            if (U(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++) ; else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(I, "")
        }, makeArray: function (e, t) {
            t = t || [];
            return null != e && (U(Object(e)) ? C.merge(t, "string" == typeof e ? [e] : e) : R.call(t, e)), t
        }, inArray: function (e, t, n) {
            var r;
            if (t) {
                if (P) return P.call(t, e, n);
                for (r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++) if (n in t && t[n] === e) return n
            }
            return -1
        }, merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n;) e[i++] = t[r++];
            if (n != n) for (; t[r] !== undefined;) e[i++] = t[r++];
            return e.length = i, e
        }, grep: function (e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) != a && r.push(e[i]);
            return r
        }, map: function (e, t, n) {
            var r, i, o = 0, a = [];
            if (U(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i); else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return O.apply([], a)
        }, guid: 1, proxy: function (e, t) {
            var n, r;
            return "string" == typeof t && (r = e[t], t = e, e = r), C.isFunction(e) ? (n = c.call(arguments, 2), (r = function () {
                return e.apply(t || this, n.concat(c.call(arguments)))
            }).guid = e.guid = e.guid || C.guid++, r) : undefined
        }, now: function () {
            return +new Date
        }, support: y
    }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = f[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        B["[object " + t + "]"] = t.toLowerCase()
    });
    var e = function (M) {
            var e, g, b, o, O, w, R, P, T, u, l, C, E, t, N, m, r, i, y, k = "sizzle" + +new Date, v = M.document, S = 0,
                B = 0, W = le(), I = le(), A = le(), $ = function (e, t) {
                    return e === t && (l = !0), 0
                }, z = {}.hasOwnProperty, n = [], X = n.pop, U = n.push, D = n.push, V = n.slice, j = function (e, t) {
                    for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                    return -1
                },
                Y = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                a = "[\\x20\\t\\r\\n\\f]", s = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                J = "\\[" + a + "*(" + s + ")(?:" + a + "*([*^$|!~]?=)" + a + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + s + "))|)" + a + "*\\]",
                G = ":(" + s + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + J + ")*)|.*)\\)|)",
                K = new RegExp(a + "+", "g"), L = new RegExp("^" + a + "+|((?:^|[^\\\\])(?:\\\\.)*)" + a + "+$", "g"),
                Q = new RegExp("^" + a + "*," + a + "*"), Z = new RegExp("^" + a + "*([>+~]|" + a + ")" + a + "*"),
                ee = new RegExp("=" + a + "*([^\\]'\"]*?)" + a + "*\\]", "g"), te = new RegExp(G),
                ne = new RegExp("^" + s + "$"), f = {
                    ID: new RegExp("^#(" + s + ")"),
                    CLASS: new RegExp("^\\.(" + s + ")"),
                    TAG: new RegExp("^(" + s + "|[*])"),
                    ATTR: new RegExp("^" + J),
                    PSEUDO: new RegExp("^" + G),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + a + "*(even|odd|(([+-]|)(\\d*)n|)" + a + "*(?:([+-]|)" + a + "*(\\d+)|))" + a + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + Y + ")$", "i"),
                    needsContext: new RegExp("^" + a + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + a + "*((?:-\\d)?\\d*)" + a + "*\\)|)(?=[^-]|$)", "i")
                }, re = /^(?:input|select|textarea|button)$/i, ie = /^h\d$/i, c = /^[^{]+\{\s*\[native \w/,
                oe = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ae = /[+~]/, se = /'|\\/g,
                d = new RegExp("\\\\([\\da-f]{1,6}" + a + "?|(" + a + ")|.)", "ig"), p = function (e, t, n) {
                    var r = "0x" + t - 65536;
                    return r != r || n ? t : r < 0 ? String.fromCharCode(65536 + r) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                }, ue = function () {
                    C()
                };
            try {
                D.apply(n = V.call(v.childNodes), v.childNodes), n[v.childNodes.length].nodeType
            } catch (F) {
                D = {
                    apply: n.length ? function (e, t) {
                        U.apply(e, V.call(t))
                    } : function (e, t) {
                        for (var n = e.length, r = 0; e[n++] = t[r++];) ;
                        e.length = n - 1
                    }
                }
            }

            function H(e, t, n, r) {
                var i, o, a, s, u, l, c, f, d = t && t.ownerDocument, p = t ? t.nodeType : 9;
                if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n;
                if (!r && ((t ? t.ownerDocument || t : v) !== E && C(t), t = t || E, N)) {
                    if (11 !== p && (l = oe.exec(e))) if (i = l[1]) {
                        if (9 === p) {
                            if (!(a = t.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n
                        } else if (d && (a = d.getElementById(i)) && y(t, a) && a.id === i) return n.push(a), n
                    } else {
                        if (l[2]) return D.apply(n, t.getElementsByTagName(e)), n;
                        if ((i = l[3]) && g.getElementsByClassName && t.getElementsByClassName) return D.apply(n, t.getElementsByClassName(i)), n
                    }
                    if (g.qsa && !A[e + " "] && (!m || !m.test(e))) {
                        if (1 !== p) d = t, f = e; else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((s = t.getAttribute("id")) ? s = s.replace(se, "\\$&") : t.setAttribute("id", s = k), o = (c = w(e)).length, u = ne.test(s) ? "#" + s : "[id='" + s + "']"; o--;) c[o] = u + " " + _(c[o]);
                            f = c.join(","), d = ae.test(e) && de(t.parentNode) || t
                        }
                        if (f) try {
                            return D.apply(n, d.querySelectorAll(f)), n
                        } catch (h) {
                        } finally {
                            s === k && t.removeAttribute("id")
                        }
                    }
                }
                return P(e.replace(L, "$1"), t, n, r)
            }

            function le() {
                var n = [];

                function r(e, t) {
                    return n.push(e + " ") > b.cacheLength && delete r[n.shift()], r[e + " "] = t
                }

                return r
            }

            function q(e) {
                return e[k] = !0, e
            }

            function h(e) {
                var t = E.createElement("div");
                try {
                    return !!e(t)
                } catch (F) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t)
                }
            }

            function ce(e, t) {
                for (var n = e.split("|"), r = n.length; r--;) b.attrHandle[n[r]] = t
            }

            function fe(e, t) {
                var n = t && e,
                    r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
                if (r) return r;
                if (n) for (; n = n.nextSibling;) if (n === t) return -1;
                return e ? 1 : -1
            }

            function x(a) {
                return q(function (o) {
                    return o = +o, q(function (e, t) {
                        for (var n, r = a([], e.length, o), i = r.length; i--;) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                    })
                })
            }

            function de(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e
            }

            for (e in g = H.support = {}, O = H.isXML = function (e) {
                e = e && (e.ownerDocument || e).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, C = H.setDocument = function (e) {
                var e = e ? e.ownerDocument || e : v;
                return e !== E && 9 === e.nodeType && e.documentElement && (t = (E = e).documentElement, N = !O(E), (e = E.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", ue, !1) : e.attachEvent && e.attachEvent("onunload", ue)), g.attributes = h(function (e) {
                    return e.className = "i", !e.getAttribute("className")
                }), g.getElementsByTagName = h(function (e) {
                    return e.appendChild(E.createComment("")), !e.getElementsByTagName("*").length
                }), g.getElementsByClassName = c.test(E.getElementsByClassName), g.getById = h(function (e) {
                    return t.appendChild(e).id = k, !E.getElementsByName || !E.getElementsByName(k).length
                }), g.getById ? (b.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && N) return (e = t.getElementById(e)) ? [e] : []
                }, b.filter.ID = function (e) {
                    var t = e.replace(d, p);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete b.find.ID, b.filter.ID = function (e) {
                    var t = e.replace(d, p);
                    return function (e) {
                        e = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return e && e.value === t
                    }
                }), b.find.TAG = g.getElementsByTagName ? function (e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : g.qsa ? t.querySelectorAll(e) : void 0
                } : function (e, t) {
                    var n, r = [], i = 0, o = t.getElementsByTagName(e);
                    if ("*" !== e) return o;
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }, b.find.CLASS = g.getElementsByClassName && function (e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && N) return t.getElementsByClassName(e)
                }, r = [], m = [], (g.qsa = c.test(E.querySelectorAll)) && (h(function (e) {
                    t.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + a + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + a + "*(?:value|" + Y + ")"), e.querySelectorAll("[id~=" + k + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + k + "+*").length || m.push(".#.+[+~]")
                }), h(function (e) {
                    var t = E.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + a + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                })), (g.matchesSelector = c.test(i = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.msMatchesSelector)) && h(function (e) {
                    g.disconnectedMatch = i.call(e, "div"), i.call(e, "[s!='']:x"), r.push("!=", G)
                }), m = m.length && new RegExp(m.join("|")), r = r.length && new RegExp(r.join("|")), e = c.test(t.compareDocumentPosition), y = e || c.test(t.contains) ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e, t = t && t.parentNode;
                    return e === t || !(!t || 1 !== t.nodeType || !(n.contains ? n.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)))
                } : function (e, t) {
                    if (t) for (; t = t.parentNode;) if (t === e) return !0;
                    return !1
                }, $ = e ? function (e, t) {
                    var n;
                    return e === t ? (l = !0, 0) : (n = !e.compareDocumentPosition - !t.compareDocumentPosition) || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !g.sortDetached && t.compareDocumentPosition(e) === n ? e === E || e.ownerDocument === v && y(v, e) ? -1 : t === E || t.ownerDocument === v && y(v, t) ? 1 : u ? j(u, e) - j(u, t) : 0 : 4 & n ? -1 : 1)
                } : function (e, t) {
                    if (e === t) return l = !0, 0;
                    var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                    if (!i || !o) return e === E ? -1 : t === E ? 1 : i ? -1 : o ? 1 : u ? j(u, e) - j(u, t) : 0;
                    if (i === o) return fe(e, t);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (n = t; n = n.parentNode;) s.unshift(n);
                    for (; a[r] === s[r];) r++;
                    return r ? fe(a[r], s[r]) : a[r] === v ? -1 : s[r] === v ? 1 : 0
                }), E
            }, H.matches = function (e, t) {
                return H(e, null, null, t)
            }, H.matchesSelector = function (e, t) {
                if ((e.ownerDocument || e) !== E && C(e), t = t.replace(ee, "='$1']"), g.matchesSelector && N && !A[t + " "] && (!r || !r.test(t)) && (!m || !m.test(t))) try {
                    var n = i.call(e, t);
                    if (n || g.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (F) {
                }
                return 0 < H(t, E, null, [e]).length
            }, H.contains = function (e, t) {
                return (e.ownerDocument || e) !== E && C(e), y(e, t)
            }, H.attr = function (e, t) {
                (e.ownerDocument || e) !== E && C(e);
                var n = b.attrHandle[t.toLowerCase()],
                    n = n && z.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !N) : undefined;
                return n !== undefined ? n : g.attributes || !N ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
            }, H.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, H.uniqueSort = function (e) {
                var t, n = [], r = 0, i = 0;
                if (l = !g.detectDuplicates, u = !g.sortStable && e.slice(0), e.sort($), l) {
                    for (; t = e[i++];) t === e[i] && (r = n.push(i));
                    for (; r--;) e.splice(n[r], 1)
                }
                return u = null, e
            }, o = H.getText = function (e) {
                var t, n = "", r = 0, i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else for (; t = e[r++];) n += o(t);
                return n
            }, (b = H.selectors = {
                cacheLength: 50,
                createPseudo: q,
                match: f,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {dir: "parentNode", first: !0},
                    " ": {dir: "parentNode"},
                    "+": {dir: "previousSibling", first: !0},
                    "~": {dir: "previousSibling"}
                },
                preFilter: {
                    ATTR: function (e) {
                        return e[1] = e[1].replace(d, p), e[3] = (e[3] || e[4] || e[5] || "").replace(d, p), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    }, CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || H.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && H.error(e[0]), e
                    }, PSEUDO: function (e) {
                        var t, n = !e[6] && e[2];
                        return f.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && te.test(n) && (t = (t = w(n, !0)) && n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(d, p).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        } : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    }, CLASS: function (e) {
                        var t = W[e + " "];
                        return t || (t = new RegExp("(^|" + a + ")" + e + "(" + a + "|$)")) && W(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    }, ATTR: function (t, n, r) {
                        return function (e) {
                            e = H.attr(e, t);
                            return null == e ? "!=" === n : !n || (e += "", "=" === n ? e === r : "!=" === n ? e !== r : "^=" === n ? r && 0 === e.indexOf(r) : "*=" === n ? r && -1 < e.indexOf(r) : "$=" === n ? r && e.slice(-r.length) === r : "~=" === n ? -1 < (" " + e.replace(K, " ") + " ").indexOf(r) : "|=" === n && (e === r || e.slice(0, r.length + 1) === r + "-"))
                        }
                    }, CHILD: function (h, e, t, g, m) {
                        var y = "nth" !== h.slice(0, 3), v = "last" !== h.slice(-4), x = "of-type" === e;
                        return 1 === g && 0 === m ? function (e) {
                            return !!e.parentNode
                        } : function (e, t, n) {
                            var r, i, o, a, s, u, l = y != v ? "nextSibling" : "previousSibling", c = e.parentNode,
                                f = x && e.nodeName.toLowerCase(), d = !n && !x, p = !1;
                            if (c) {
                                if (y) {
                                    for (; l;) {
                                        for (a = e; a = a[l];) if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                        u = l = "only" === h && !u && "nextSibling"
                                    }
                                    return !0
                                }
                                if (u = [v ? c.firstChild : c.lastChild], v && d) {
                                    for (p = (s = (r = (i = (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]) && r[2], a = s && c.childNodes[s]; a = ++s && a && a[l] || (p = s = 0, u.pop());) if (1 === a.nodeType && ++p && a === e) {
                                        i[h] = [S, s, p];
                                        break
                                    }
                                } else if (!1 === (p = d ? s = (r = (i = (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1] : p)) for (; (a = ++s && a && a[l] || (p = s = 0, u.pop())) && ((x ? a.nodeName.toLowerCase() !== f : 1 !== a.nodeType) || !++p || (d && ((i = (o = a[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [S, p]), a !== e));) ;
                                return (p -= m) === g || p % g == 0 && 0 <= p / g
                            }
                        }
                    }, PSEUDO: function (e, o) {
                        var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || H.error("unsupported pseudo: " + e);
                        return a[k] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? q(function (e, t) {
                            for (var n, r = a(e, o), i = r.length; i--;) e[n = j(e, r[i])] = !(t[n] = r[i])
                        }) : function (e) {
                            return a(e, 0, t)
                        }) : a
                    }
                },
                pseudos: {
                    not: q(function (e) {
                        var r = [], i = [], s = R(e.replace(L, "$1"));
                        return s[k] ? q(function (e, t, n, r) {
                            for (var i, o = s(e, null, r, []), a = e.length; a--;) (i = o[a]) && (e[a] = !(t[a] = i))
                        }) : function (e, t, n) {
                            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                        }
                    }), has: q(function (t) {
                        return function (e) {
                            return 0 < H(t, e).length
                        }
                    }), contains: q(function (t) {
                        return t = t.replace(d, p), function (e) {
                            return -1 < (e.textContent || e.innerText || o(e)).indexOf(t)
                        }
                    }), lang: q(function (n) {
                        return ne.test(n || "") || H.error("unsupported lang: " + n), n = n.replace(d, p).toLowerCase(), function (e) {
                            var t;
                            do {
                                if (t = N ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                            } while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                    }), target: function (e) {
                        var t = M.location && M.location.hash;
                        return t && t.slice(1) === e.id
                    }, root: function (e) {
                        return e === t
                    }, focus: function (e) {
                        return e === E.activeElement && (!E.hasFocus || E.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    }, enabled: function (e) {
                        return !1 === e.disabled
                    }, disabled: function (e) {
                        return !0 === e.disabled
                    }, checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    }, selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    }, empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                        return !0
                    }, parent: function (e) {
                        return !b.pseudos.empty(e)
                    }, header: function (e) {
                        return ie.test(e.nodeName)
                    }, input: function (e) {
                        return re.test(e.nodeName)
                    }, button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    }, text: function (e) {
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase())
                    }, first: x(function () {
                        return [0]
                    }), last: x(function (e, t) {
                        return [t - 1]
                    }), eq: x(function (e, t, n) {
                        return [n < 0 ? n + t : n]
                    }), even: x(function (e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }), odd: x(function (e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }), lt: x(function (e, t, n) {
                        for (var r = n < 0 ? n + t : n; 0 <= --r;) e.push(r);
                        return e
                    }), gt: x(function (e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = b.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[e] = function (t) {
                return function (e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }(e);
            for (e in {submit: !0, reset: !0}) b.pseudos[e] = function (n) {
                return function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && e.type === n
                }
            }(e);

            function pe() {
            }

            function _(e) {
                for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                return r
            }

            function he(a, e, t) {
                var s = e.dir, u = t && "parentNode" === s, l = B++;
                return e.first ? function (e, t, n) {
                    for (; e = e[s];) if (1 === e.nodeType || u) return a(e, t, n)
                } : function (e, t, n) {
                    var r, i, o = [S, l];
                    if (n) {
                        for (; e = e[s];) if ((1 === e.nodeType || u) && a(e, t, n)) return !0
                    } else for (; e = e[s];) if (1 === e.nodeType || u) {
                        if ((r = (i = (i = e[k] || (e[k] = {}))[e.uniqueID] || (i[e.uniqueID] = {}))[s]) && r[0] === S && r[1] === l) return o[2] = r[2];
                        if ((i[s] = o)[2] = a(e, t, n)) return !0
                    }
                }
            }

            function ge(i) {
                return 1 < i.length ? function (e, t, n) {
                    for (var r = i.length; r--;) if (!i[r](e, t, n)) return !1;
                    return !0
                } : i[0]
            }

            function me(e, t, n, r, i) {
                for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) !(o = e[s]) || n && !n(o, r, i) || (a.push(o), l && t.push(s));
                return a
            }

            function ye(p, h, g, m, y, e) {
                return m && !m[k] && (m = ye(m)), y && !y[k] && (y = ye(y, e)), q(function (e, t, n, r) {
                    var i, o, a, s = [], u = [], l = t.length, c = e || function (e, t, n) {
                            for (var r = 0, i = t.length; r < i; r++) H(e, t[r], n);
                            return n
                        }(h || "*", n.nodeType ? [n] : n, []), f = !p || !e && h ? c : me(c, s, p, n, r),
                        d = g ? y || (e ? p : l || m) ? [] : t : f;
                    if (g && g(f, d, n, r), m) for (i = me(d, u), m(i, [], n, r), o = i.length; o--;) (a = i[o]) && (d[u[o]] = !(f[u[o]] = a));
                    if (e) {
                        if (y || p) {
                            if (y) {
                                for (i = [], o = d.length; o--;) (a = d[o]) && i.push(f[o] = a);
                                y(null, d = [], i, r)
                            }
                            for (o = d.length; o--;) (a = d[o]) && -1 < (i = y ? j(e, a) : s[o]) && (e[i] = !(t[i] = a))
                        }
                    } else d = me(d === t ? d.splice(l, d.length) : d), y ? y(null, t, d, r) : D.apply(t, d)
                })
            }

            return pe.prototype = b.filters = b.pseudos, b.setFilters = new pe, w = H.tokenize = function (e, t) {
                var n, r, i, o, a, s, u, l = I[e + " "];
                if (l) return t ? 0 : l.slice(0);
                for (a = e, s = [], u = b.preFilter; a;) {
                    for (o in n && !(r = Q.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = Z.exec(a)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace(L, " ")
                    }), a = a.slice(n.length)), b.filter) !(r = f[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                        value: n,
                        type: o,
                        matches: r
                    }), a = a.slice(n.length));
                    if (!n) break
                }
                return t ? a.length : a ? H.error(e) : I(e, s).slice(0)
            }, R = H.compile = function (e, t) {
                var n, m, y, v, x, r, i = [], o = [], a = A[e + " "];
                if (!a) {
                    for (n = (t = t || w(e)).length; n--;) ((a = function f(e) {
                        for (var r, t, n, i = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = he(function (e) {
                            return e === r
                        }, a, !0), l = he(function (e) {
                            return -1 < j(r, e)
                        }, a, !0), c = [function (e, t, n) {
                            return e = !o && (n || t !== T) || ((r = t).nodeType ? u : l)(e, t, n), r = null, e
                        }]; s < i; s++) if (t = b.relative[e[s].type]) c = [he(ge(c), t)]; else {
                            if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) {
                                for (n = ++s; n < i && !b.relative[e[n].type]; n++) ;
                                return ye(1 < s && ge(c), 1 < s && _(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace(L, "$1"), t, s < n && f(e.slice(s, n)), n < i && f(e = e.slice(n)), n < i && _(e))
                            }
                            c.push(t)
                        }
                        return ge(c)
                    }(t[n]))[k] ? i : o).push(a);
                    (a = A(e, (m = o, v = 0 < (y = i).length, x = 0 < m.length, r = function (e, t, n, r, i) {
                        var o, a, s, u = 0, l = "0", c = e && [], f = [], d = T, p = e || x && b.find.TAG("*", i),
                            h = S += null == d ? 1 : Math.random() || .1, g = p.length;
                        for (i && (T = t === E || t || i); l !== g && null != (o = p[l]); l++) {
                            if (x && o) {
                                for (a = 0, t || o.ownerDocument === E || (C(o), n = !N); s = m[a++];) if (s(o, t || E, n)) {
                                    r.push(o);
                                    break
                                }
                                i && (S = h)
                            }
                            v && ((o = !s && o) && u--, e) && c.push(o)
                        }
                        if (u += l, v && l !== u) {
                            for (a = 0; s = y[a++];) s(c, f, t, n);
                            if (e) {
                                if (0 < u) for (; l--;) c[l] || f[l] || (f[l] = X.call(r));
                                f = me(f)
                            }
                            D.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && H.uniqueSort(r)
                        }
                        return i && (S = h, T = d), c
                    }, v ? q(r) : r))).selector = e
                }
                return a
            }, P = H.select = function (e, t, n, r) {
                var i, o, a, s, u, l = "function" == typeof e && e, c = !r && w(e = l.selector || e);
                if (n = n || [], 1 === c.length) {
                    if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && g.getById && 9 === t.nodeType && N && b.relative[o[1].type]) {
                        if (!(t = (b.find.ID(a.matches[0].replace(d, p), t) || [])[0])) return n;
                        l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                    }
                    for (i = f.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !b.relative[s = a.type]);) if ((u = b.find[s]) && (r = u(a.matches[0].replace(d, p), ae.test(o[0].type) && de(t.parentNode) || t))) {
                        if (o.splice(i, 1), e = r.length && _(o)) break;
                        return D.apply(n, r), n
                    }
                }
                return (l || R(e, c))(r, t, !N, n, !t || ae.test(e) && de(t.parentNode) || t), n
            }, g.sortStable = k.split("").sort($).join("") === k, g.detectDuplicates = !!l, C(), g.sortDetached = h(function (e) {
                return 1 & e.compareDocumentPosition(E.createElement("div"))
            }), h(function (e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || ce("type|href|height|width", function (e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), g.attributes && h(function (e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || ce("value", function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            }), h(function (e) {
                return null == e.getAttribute("disabled")
            }) || ce(Y, function (e, t, n) {
                if (!n) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
            }), H
        }(T),
        r = (C.find = e, C.expr = e.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = e.uniqueSort, C.text = e.getText, C.isXMLDoc = e.isXML, C.contains = e.contains, function (e, t, n) {
            for (var r = [], i = n !== undefined; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
                if (i && C(e).is(n)) break;
                r.push(e)
            }
            return r
        }), V = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }, Y = C.expr.match.needsContext, J = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, G = /^.[^:#\[\.,]*$/;

    function K(e, n, r) {
        if (C.isFunction(n)) return C.grep(e, function (e, t) {
            return !!n.call(e, t, e) !== r
        });
        if (n.nodeType) return C.grep(e, function (e) {
            return e === n !== r
        });
        if ("string" == typeof n) {
            if (G.test(n)) return C.filter(n, e, r);
            n = C.filter(n, e)
        }
        return C.grep(e, function (e) {
            return -1 < C.inArray(e, n) !== r
        })
    }

    C.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? C.find.matchesSelector(r, e) ? [r] : [] : C.find.matches(e, C.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, C.fn.extend({
        find: function (e) {
            var t, n = [], r = this, i = r.length;
            if ("string" != typeof e) return this.pushStack(C(e).filter(function () {
                for (t = 0; t < i; t++) if (C.contains(r[t], this)) return !0
            }));
            for (t = 0; t < i; t++) C.find(e, r[t], n);
            return (n = this.pushStack(1 < i ? C.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e, n
        }, filter: function (e) {
            return this.pushStack(K(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(K(this, e || [], !0))
        }, is: function (e) {
            return !!K(this, "string" == typeof e && Y.test(e) ? C(e) : e || [], !1).length
        }
    });
    var Q, Z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ee = ((C.fn.init = function (e, t, n) {
            if (e) {
                if (n = n || Q, "string" != typeof e) return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : C.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(C) : (e.selector !== undefined && (this.selector = e.selector, this.context = e.context), C.makeArray(e, this));
                if (!(r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : Z.exec(e)) || !r[1] && t) return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
                if (r[1]) {
                    if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : g, !0)), J.test(r[1]) && C.isPlainObject(t)) for (var r in t) C.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r])
                } else {
                    if ((n = g.getElementById(r[2])) && n.parentNode) {
                        if (n.id !== r[2]) return Q.find(e);
                        this.length = 1, this[0] = n
                    }
                    this.context = g, this.selector = e
                }
            }
            return this
        }).prototype = C.fn, Q = C(g), /^(?:parents|prev(?:Until|All))/),
        te = {children: !0, contents: !0, next: !0, prev: !0};

    function ne(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;) ;
        return e
    }

    C.fn.extend({
        has: function (e) {
            var t, n = C(e, this), r = n.length;
            return this.filter(function () {
                for (t = 0; t < r; t++) if (C.contains(this, n[t])) return !0
            })
        }, closest: function (e, t) {
            for (var n, r = 0, i = this.length, o = [], a = Y.test(e) || "string" != typeof e ? C(e, t || this.context) : 0; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
                o.push(n);
                break
            }
            return this.pushStack(1 < o.length ? C.uniqueSort(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? C.inArray(this[0], C(e)) : C.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), C.each({
        parent: function (e) {
            e = e.parentNode;
            return e && 11 !== e.nodeType ? e : null
        }, parents: function (e) {
            return r(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return r(e, "parentNode", n)
        }, next: function (e) {
            return ne(e, "nextSibling")
        }, prev: function (e) {
            return ne(e, "previousSibling")
        }, nextAll: function (e) {
            return r(e, "nextSibling")
        }, prevAll: function (e) {
            return r(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return r(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return r(e, "previousSibling", n)
        }, siblings: function (e) {
            return V((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return V(e.firstChild)
        }, contents: function (e) {
            return C.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : C.merge([], e.childNodes)
        }
    }, function (r, i) {
        C.fn[r] = function (e, t) {
            var n = C.map(this, i, e);
            return (t = "Until" !== r.slice(-5) ? e : t) && "string" == typeof t && (n = C.filter(t, n)), 1 < this.length && (te[r] || (n = C.uniqueSort(n)), ee.test(r)) && (n = n.reverse()), this.pushStack(n)
        }
    });
    var re, ie, E = /\S+/g;

    function oe() {
        g.addEventListener ? (g.removeEventListener("DOMContentLoaded", i), T.removeEventListener("load", i)) : (g.detachEvent("onreadystatechange", i), T.detachEvent("onload", i))
    }

    function i() {
        !g.addEventListener && "load" !== T.event.type && "complete" !== g.readyState || (oe(), C.ready())
    }

    for (ie in C.Callbacks = function (r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, C.each(e.match(E) || [], function (e, t) {
            n[t] = !0
        }), n) : C.extend({}, r);
        var i, t, o, a, s = [], u = [], l = -1, c = function () {
            for (a = r.once, o = i = !0; u.length; l = -1) for (t = u.shift(); ++l < s.length;) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1);
            r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
        }, f = {
            add: function () {
                return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
                    C.each(e, function (e, t) {
                        C.isFunction(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== C.type(t) && n(t)
                    })
                }(arguments), t) && !i && c(), this
            }, remove: function () {
                return C.each(arguments, function (e, t) {
                    for (var n; -1 < (n = C.inArray(t, s, n));) s.splice(n, 1), n <= l && l--
                }), this
            }, has: function (e) {
                return e ? -1 < C.inArray(e, s) : 0 < s.length
            }, empty: function () {
                return s = s && [], this
            }, disable: function () {
                return a = u = [], s = t = "", this
            }, disabled: function () {
                return !s
            }, lock: function () {
                return a = !0, t || f.disable(), this
            }, locked: function () {
                return !!a
            }, fireWith: function (e, t) {
                return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i) || c(), this
            }, fire: function () {
                return f.fireWith(this, arguments), this
            }, fired: function () {
                return !!o
            }
        };
        return f
    }, C.extend({
        Deferred: function (e) {
            var o = [["resolve", "done", C.Callbacks("once memory"), "resolved"], ["reject", "fail", C.Callbacks("once memory"), "rejected"], ["notify", "progress", C.Callbacks("memory")]],
                i = "pending", a = {
                    state: function () {
                        return i
                    }, always: function () {
                        return s.done(arguments).fail(arguments), this
                    }, then: function () {
                        var i = arguments;
                        return C.Deferred(function (r) {
                            C.each(o, function (e, t) {
                                var n = C.isFunction(i[e]) && i[e];
                                s[t[1]](function () {
                                    var e = n && n.apply(this, arguments);
                                    e && C.isFunction(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this === a ? r.promise() : this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? C.extend(e, a) : a
                    }
                }, s = {};
            return a.pipe = a.then, C.each(o, function (e, t) {
                var n = t[2], r = t[3];
                a[t[1]] = n.add, r && n.add(function () {
                    i = r
                }, o[1 ^ e][2].disable, o[2][2].lock), s[t[0]] = function () {
                    return s[t[0] + "With"](this === s ? a : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        }, when: function (e) {
            var i, t, n, r = 0, o = c.call(arguments), a = o.length,
                s = 1 !== a || e && C.isFunction(e.promise) ? a : 0, u = 1 === s ? e : C.Deferred(),
                l = function (t, n, r) {
                    return function (e) {
                        n[t] = this, r[t] = 1 < arguments.length ? c.call(arguments) : e, r === i ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                    }
                };
            if (1 < a) for (i = new Array(a), t = new Array(a), n = new Array(a); r < a; r++) o[r] && C.isFunction(o[r].promise) ? o[r].promise().progress(l(r, t, i)).done(l(r, n, o)).fail(u.reject) : --s;
            return s || u.resolveWith(n, o), u.promise()
        }
    }), C.fn.ready = function (e) {
        return C.ready.promise().done(e), this
    }, C.extend({
        isReady: !1, readyWait: 1, holdReady: function (e) {
            e ? C.readyWait++ : C.ready(!0)
        }, ready: function (e) {
            (!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0) !== e && 0 < --C.readyWait || (re.resolveWith(g, [C]), C.fn.triggerHandler && (C(g).triggerHandler("ready"), C(g).off("ready")))
        }
    }), C.ready.promise = function (e) {
        if (!re) if (re = C.Deferred(), "complete" === g.readyState || "loading" !== g.readyState && !g.documentElement.doScroll) T.setTimeout(C.ready); else if (g.addEventListener) g.addEventListener("DOMContentLoaded", i), T.addEventListener("load", i); else {
            g.attachEvent("onreadystatechange", i), T.attachEvent("onload", i);
            var t = !1;
            try {
                t = null == T.frameElement && g.documentElement
            } catch (n) {
            }
            t && t.doScroll && !function r() {
                if (!C.isReady) {
                    try {
                        t.doScroll("left")
                    } catch (n) {
                        return T.setTimeout(r, 50)
                    }
                    oe(), C.ready()
                }
            }()
        }
        return re.promise(e)
    }, C.ready.promise(), C(y)) break;
    y.ownFirst = "0" === ie, y.inlineBlockNeedsLayout = !1, C(function () {
        var e, t, n = g.getElementsByTagName("body")[0];
        n && n.style && (e = g.createElement("div"), (t = g.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(t).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", y.inlineBlockNeedsLayout = e = 3 === e.offsetWidth, e) && (n.style.zoom = 1), n.removeChild(t))
    });
    e = g.createElement("div");
    y.deleteExpando = !0;
    try {
        delete e.test
    } catch (yn) {
        y.deleteExpando = !1
    }
    var o, v = function (e) {
        var t = C.noData[(e.nodeName + " ").toLowerCase()], n = +e.nodeType || 1;
        return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
    }, ae = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, se = /([A-Z])/g;

    function ue(e, t, n) {
        if (n === undefined && 1 === e.nodeType) {
            var r = "data-" + t.replace(se, "-$1").toLowerCase();
            if ("string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : ae.test(n) ? C.parseJSON(n) : n)
                } catch (i) {
                }
                C.data(e, t, n)
            } else n = undefined
        }
        return n
    }

    function le(e) {
        for (var t in e) if (("data" !== t || !C.isEmptyObject(e[t])) && "toJSON" !== t) return;
        return 1
    }

    function ce(e, t, n, r) {
        if (v(e)) {
            var i, o = C.expando, a = e.nodeType, s = a ? C.cache : e, u = a ? e[o] : e[o] && o;
            if (u && s[u] && (r || s[u].data) || n !== undefined || "string" != typeof t) return s[u = u || (a ? e[o] = f.pop() || C.guid++ : o)] || (s[u] = a ? {} : {toJSON: C.noop}), "object" != typeof t && "function" != typeof t || (r ? s[u] = C.extend(s[u], t) : s[u].data = C.extend(s[u].data, t)), e = s[u], r || (e.data || (e.data = {}), e = e.data), n !== undefined && (e[C.camelCase(t)] = n), "string" == typeof t ? null == (i = e[t]) && (i = e[C.camelCase(t)]) : i = e, i
        }
    }

    function fe(e, t, n) {
        if (v(e)) {
            var r, i, o = e.nodeType, a = o ? C.cache : e, s = o ? e[C.expando] : C.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    i = (t = C.isArray(t) ? t.concat(C.map(t, C.camelCase)) : t in r || (t = C.camelCase(t)) in r ? [t] : t.split(" ")).length;
                    for (; i--;) delete r[t[i]];
                    if (n ? !le(r) : !C.isEmptyObject(r)) return
                }
                (n || (delete a[s].data, le(a[s]))) && (o ? C.cleanData([e], !0) : y.deleteExpando || a != a.window ? delete a[s] : a[s] = undefined)
            }
        }
    }

    C.extend({
        cache: {},
        noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
        hasData: function (e) {
            return !!(e = e.nodeType ? C.cache[e[C.expando]] : e[C.expando]) && !le(e)
        },
        data: function (e, t, n) {
            return ce(e, t, n)
        },
        removeData: function (e, t) {
            return fe(e, t)
        },
        _data: function (e, t, n) {
            return ce(e, t, n, !0)
        },
        _removeData: function (e, t) {
            return fe(e, t, !0)
        }
    }), C.fn.extend({
        data: function (e, t) {
            var n, r, i, o = this[0], a = o && o.attributes;
            if (e !== undefined) return "object" == typeof e ? this.each(function () {
                C.data(this, e)
            }) : 1 < arguments.length ? this.each(function () {
                C.data(this, e, t)
            }) : o ? ue(o, e, C.data(o, e)) : undefined;
            if (this.length && (i = C.data(o), 1 === o.nodeType) && !C._data(o, "parsedAttrs")) {
                for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && ue(o, r = C.camelCase(r.slice(5)), i[r]);
                C._data(o, "parsedAttrs", !0)
            }
            return i
        }, removeData: function (e) {
            return this.each(function () {
                C.removeData(this, e)
            })
        }
    }), C.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return r = C._data(e, t = (t || "fx") + "queue"), n && (!r || C.isArray(n) ? r = C._data(e, t, C.makeArray(n)) : r.push(n)), r || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = C.queue(e, t), r = n.length, i = n.shift(), o = C._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
                C.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return C._data(e, n) || C._data(e, n, {
                empty: C.Callbacks("once memory").add(function () {
                    C._removeData(e, t + "queue"), C._removeData(e, n)
                })
            })
        }
    }), C.fn.extend({
        queue: function (t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? C.queue(this[0], t) : n === undefined ? this : this.each(function () {
                var e = C.queue(this, t, n);
                C._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && C.dequeue(this, t)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                C.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n, r = 1, i = C.Deferred(), o = this, a = this.length, s = function () {
                --r || i.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e, e = undefined), e = e || "fx"; a--;) (n = C._data(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    }), y.shrinkWrapBlocks = function () {
        var e, t, n;
        return null != o ? o : (o = !1, (t = g.getElementsByTagName("body")[0]) && t.style ? (e = g.createElement("div"), (n = g.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", t.appendChild(n).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(g.createElement("div")).style.width = "5px", o = 3 !== e.offsetWidth), t.removeChild(n), o) : void 0)
    };
    var e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, de = new RegExp("^(?:([+-])=|)(" + e + ")([a-z%]*)$", "i"),
        s = ["Top", "Right", "Bottom", "Left"], pe = function (e, t) {
            return "none" === C.css(e = t || e, "display") || !C.contains(e.ownerDocument, e)
        };

    function he(e, t, n, r) {
        var i, o = 1, a = 20, s = r ? function () {
                return r.cur()
            } : function () {
                return C.css(e, t, "")
            }, u = s(), l = n && n[3] || (C.cssNumber[t] ? "" : "px"),
            c = (C.cssNumber[t] || "px" !== l && +u) && de.exec(C.css(e, t));
        if (c && c[3] !== l) for (l = l || c[3], n = n || [], c = +u || 1; c /= o = o || ".5", C.style(e, t, c + l), o !== (o = s() / u) && 1 !== o && --a;) ;
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r) && (r.unit = l, r.start = c, r.end = i), i
    }

    var d = function (e, t, n, r, i, o, a) {
            var s = 0, u = e.length, l = null == n;
            if ("object" === C.type(n)) for (s in i = !0, n) d(e, t, s, n[s], !0, o, a); else if (r !== undefined && (i = !0, C.isFunction(r) || (a = !0), t = l ? a ? (t.call(e, r), null) : (l = t, function (e, t, n) {
                return l.call(C(e), n)
            }) : t)) for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        }, ge = /^(?:checkbox|radio)$/i, me = /<([\w:-]+)/, ye = /^$|\/(?:java|ecma)script/i, ve = /^\s+/,
        xe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

    function be(e) {
        var t = xe.split("|"), n = e.createDocumentFragment();
        if (n.createElement) for (; t.length;) n.createElement(t.pop());
        return n
    }

    S = g.createElement("div"), k = g.createDocumentFragment(), q = g.createElement("input"), S.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", y.leadingWhitespace = 3 === S.firstChild.nodeType, y.tbody = !S.getElementsByTagName("tbody").length, y.htmlSerialize = !!S.getElementsByTagName("link").length, y.html5Clone = "<:nav></:nav>" !== g.createElement("nav").cloneNode(!0).outerHTML, q.type = "checkbox", q.checked = !0, k.appendChild(q), y.appendChecked = q.checked, S.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!S.cloneNode(!0).lastChild.defaultValue, k.appendChild(S), (q = g.createElement("input")).setAttribute("type", "radio"), q.setAttribute("checked", "checked"), q.setAttribute("name", "t"), S.appendChild(q), y.checkClone = S.cloneNode(!0).cloneNode(!0).lastChild.checked, y.noCloneEvent = !!S.addEventListener, S[C.expando] = 1, y.attributes = !S.getAttribute(C.expando);
    var x = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: y.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };

    function b(e, t) {
        var n, r, i = 0,
            o = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : undefined;
        if (!o) for (o = [], n = e.childNodes || e; null != (r = n[i]); i++) !t || C.nodeName(r, t) ? o.push(r) : C.merge(o, b(r, t));
        return t === undefined || t && C.nodeName(e, t) ? C.merge([e], o) : o
    }

    function we(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) C._data(n, "globalEval", !t || C._data(t[r], "globalEval"))
    }

    x.optgroup = x.option, x.tbody = x.tfoot = x.colgroup = x.caption = x.thead, x.th = x.td;
    var Te = /<|&#?\w+;/, Ce = /<tbody/i;

    function Ee(e) {
        ge.test(e.type) && (e.defaultChecked = e.checked)
    }

    function Ne(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f, d = e.length, p = be(t), h = [], g = 0; g < d; g++) if ((a = e[g]) || 0 === a) if ("object" === C.type(a)) C.merge(h, a.nodeType ? [a] : a); else if (Te.test(a)) {
            for (u = u || p.appendChild(t.createElement("div")), l = (me.exec(a) || ["", ""])[1].toLowerCase(), f = x[l] || x._default, u.innerHTML = f[1] + C.htmlPrefilter(a) + f[2], o = f[0]; o--;) u = u.lastChild;
            if (!y.leadingWhitespace && ve.test(a) && h.push(t.createTextNode(ve.exec(a)[0])), !y.tbody) for (o = (a = "table" !== l || Ce.test(a) ? "<table>" !== f[1] || Ce.test(a) ? 0 : u : u.firstChild) && a.childNodes.length; o--;) C.nodeName(c = a.childNodes[o], "tbody") && !c.childNodes.length && a.removeChild(c);
            for (C.merge(h, u.childNodes), u.textContent = ""; u.firstChild;) u.removeChild(u.firstChild);
            u = p.lastChild
        } else h.push(t.createTextNode(a));
        for (u && p.removeChild(u), y.appendChecked || C.grep(b(h, "input"), Ee), g = 0; a = h[g++];) if (r && -1 < C.inArray(a, r)) i && i.push(a); else if (s = C.contains(a.ownerDocument, a), u = b(p.appendChild(a), "script"), s && we(u), n) for (o = 0; a = u[o++];) ye.test(a.type || "") && n.push(a);
        return u = null, p
    }

    var ke, Se, Ae = g.createElement("div");
    for (ke in {
        submit: !0,
        change: !0,
        focusin: !0
    }) (y[ke] = (Se = "on" + ke) in T) || (Ae.setAttribute(Se, "t"), y[ke] = !1 === Ae.attributes[Se].expando);
    var De = /^(?:input|select|textarea)$/i, je = /^key/, Le = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        He = /^(?:focusinfocus|focusoutblur)$/, qe = /^([^.]*)(?:\.(.+)|)/;

    function _e() {
        return !0
    }

    function u() {
        return !1
    }

    function Fe() {
        try {
            return g.activeElement
        } catch (e) {
        }
    }

    function Me(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = undefined), t) Me(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = undefined) : null == i && ("string" == typeof n ? (i = r, r = undefined) : (i = r, r = n, n = undefined)), !1 === i) i = u; else if (!i) return e;
        return 1 === o && (a = i, (i = function (e) {
            return C().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = C.guid++)), e.each(function () {
            C.event.add(this, t, i, r, n)
        })
    }

    C.event = {
        global: {},
        add: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, d, p, h = C._data(e);
            if (h) for (n.handler && (n = (s = n).handler, i = s.selector), n.guid || (n.guid = C.guid++), o = (o = h.events) || (h.events = {}), (l = h.handle) || ((l = h.handle = function (e) {
                return void 0 === C || e && C.event.triggered === e.type ? undefined : C.event.dispatch.apply(l.elem, arguments)
            }).elem = e), a = (t = (t || "").match(E) || [""]).length; a--;) f = p = (d = qe.exec(t[a]) || [])[1], d = (d[2] || "").split(".").sort(), f && (u = C.event.special[f] || {}, f = (i ? u.delegateType : u.bindType) || f, u = C.event.special[f] || {}, p = C.extend({
                type: f,
                origType: p,
                data: r,
                handler: n,
                guid: n.guid,
                selector: i,
                needsContext: i && C.expr.match.needsContext.test(i),
                namespace: d.join(".")
            }, s), (c = o[f]) || ((c = o[f] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, r, d, l)) || (e.addEventListener ? e.addEventListener(f, l, !1) : e.attachEvent && e.attachEvent("on" + f, l)), u.add && (u.add.call(e, p), p.handler.guid || (p.handler.guid = n.guid)), i ? c.splice(c.delegateCount++, 0, p) : c.push(p), C.event.global[f] = !0)
        },
        remove: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, d, p, h, g, m = C.hasData(e) && C._data(e);
            if (m && (c = m.events)) {
                for (l = (t = (t || "").match(E) || [""]).length; l--;) if (p = g = (s = qe.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
                    for (f = C.event.special[p] || {}, d = c[p = (r ? f.delegateType : f.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = d.length; o--;) a = d[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (d.splice(o, 1), a.selector && d.delegateCount--, f.remove && f.remove.call(e, a));
                    u && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || C.removeEvent(e, p, m.handle), delete c[p])
                } else for (p in c) C.event.remove(e, p + t[l], n, r, !0);
                C.isEmptyObject(c) && (delete m.handle, C._removeData(e, "events"))
            }
        },
        trigger: function (e, t, n, r) {
            var i, o, a, s, u, l, c = [n || g], f = m.call(e, "type") ? e.type : e,
                d = m.call(e, "namespace") ? e.namespace.split(".") : [], p = u = n = n || g;
            if (3 !== n.nodeType && 8 !== n.nodeType && !He.test(f + C.event.triggered) && (-1 < f.indexOf(".") && (f = (d = f.split(".")).shift(), d.sort()), o = f.indexOf(":") < 0 && "on" + f, (e = e[C.expando] ? e : new C.Event(f, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = d.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = undefined, e.target || (e.target = n), t = null == t ? [e] : C.makeArray(t, [e]), s = C.event.special[f] || {}, r || !s.trigger || !1 !== s.trigger.apply(n, t))) {
                if (!r && !s.noBubble && !C.isWindow(n)) {
                    for (a = s.delegateType || f, He.test(a + f) || (p = p.parentNode); p; p = p.parentNode) c.push(p), u = p;
                    u === (n.ownerDocument || g) && c.push(u.defaultView || u.parentWindow || T)
                }
                for (l = 0; (p = c[l++]) && !e.isPropagationStopped();) e.type = 1 < l ? a : s.bindType || f, (i = (C._data(p, "events") || {})[e.type] && C._data(p, "handle")) && i.apply(p, t), (i = o && p[o]) && i.apply && v(p) && (e.result = i.apply(p, t), !1 === e.result) && e.preventDefault();
                if (e.type = f, !r && !e.isDefaultPrevented() && (!s._default || !1 === s._default.apply(c.pop(), t)) && v(n) && o && n[f] && !C.isWindow(n)) {
                    (u = n[o]) && (n[o] = null), C.event.triggered = f;
                    try {
                        n[f]()
                    } catch (h) {
                    }
                    C.event.triggered = undefined, u && (n[o] = u)
                }
                return e.result
            }
        },
        dispatch: function (e) {
            e = C.event.fix(e);
            var t, n, r, i, o, a = c.call(arguments), s = (C._data(this, "events") || {})[e.type] || [],
                u = C.event.special[e.type] || {};
            if ((a[0] = e).delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
                for (o = C.event.handlers.call(this, e, s), t = 0; (r = o[t++]) && !e.isPropagationStopped();) for (e.currentTarget = r.elem, n = 0; (i = r.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(i.namespace) || (e.handleObj = i, e.data = i.data, (i = ((C.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, a)) !== undefined && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var n, r, i, o, a = [], s = t.delegateCount, u = e.target;
            if (s && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1)) for (; u != this; u = u.parentNode || this) if (1 === u.nodeType && (!0 !== u.disabled || "click" !== e.type)) {
                for (r = [], n = 0; n < s; n++) r[i = (o = t[n]).selector + " "] === undefined && (r[i] = o.needsContext ? -1 < C(i, this).index(u) : C.find(i, this, null, [u]).length), r[i] && r.push(o);
                r.length && a.push({elem: u, handlers: r})
            }
            return s < t.length && a.push({elem: this, handlers: t.slice(s)}), a
        },
        fix: function (e) {
            if (e[C.expando]) return e;
            var t, n, r, i = e.type, o = e, a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = Le.test(i) ? this.mouseHooks : je.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new C.Event(o), t = r.length; t--;) e[n = r[t]] = o[n];
            return e.target || (e.target = o.srcElement || g), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n, r, i = t.button, o = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = (n = e.target.ownerDocument || g).documentElement, n = n.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !e.relatedTarget && o && (e.relatedTarget = o === e.target ? t.toElement : o), e.which || i === undefined || (e.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0), e
            }
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== Fe() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {
                    }
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === Fe() && this.blur) return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if (C.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                }, _default: function (e) {
                    return C.nodeName(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    e.result !== undefined && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n) {
            e = C.extend(new C.Event, n, {type: e, isSimulated: !0});
            C.event.trigger(e, null, t), e.isDefaultPrevented() && n.preventDefault()
        }
    }, C.removeEvent = g.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    } : function (e, t, n) {
        t = "on" + t;
        e.detachEvent && ("undefined" == typeof e[t] && (e[t] = null), e.detachEvent(t, n))
    }, C.Event = function (e, t) {
        if (!(this instanceof C.Event)) return new C.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && !1 === e.returnValue ? _e : u) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || C.now(), this[C.expando] = !0
    }, C.Event.prototype = {
        constructor: C.Event,
        isDefaultPrevented: u,
        isPropagationStopped: u,
        isImmediatePropagationStopped: u,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = _e, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = _e, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = _e, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, C.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, i) {
        C.event.special[e] = {
            delegateType: i, bindType: i, handle: function (e) {
                var t, n = e.relatedTarget, r = e.handleObj;
                return n && (n === this || C.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), y.submit || (C.event.special.submit = {
        setup: function () {
            if (C.nodeName(this, "form")) return !1;
            C.event.add(this, "click._submit keypress._submit", function (e) {
                e = e.target, e = C.nodeName(e, "input") || C.nodeName(e, "button") ? C.prop(e, "form") : undefined;
                e && !C._data(e, "submit") && (C.event.add(e, "submit._submit", function (e) {
                    e._submitBubble = !0
                }), C._data(e, "submit", !0))
            })
        }, postDispatch: function (e) {
            e._submitBubble && (delete e._submitBubble, this.parentNode) && !e.isTrigger && C.event.simulate("submit", this.parentNode, e)
        }, teardown: function () {
            if (C.nodeName(this, "form")) return !1;
            C.event.remove(this, "._submit")
        }
    }), y.change || (C.event.special.change = {
        setup: function () {
            if (De.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (C.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
            }), C.event.add(this, "click._change", function (e) {
                this._justChanged && !e.isTrigger && (this._justChanged = !1), C.event.simulate("change", this, e)
            })), !1;
            C.event.add(this, "beforeactivate._change", function (e) {
                e = e.target;
                De.test(e.nodeName) && !C._data(e, "change") && (C.event.add(e, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || C.event.simulate("change", this.parentNode, e)
                }), C._data(e, "change", !0))
            })
        }, handle: function (e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
        }, teardown: function () {
            return C.event.remove(this, "._change"), !De.test(this.nodeName)
        }
    }), y.focusin || C.each({focus: "focusin", blur: "focusout"}, function (n, r) {
        var i = function (e) {
            C.event.simulate(r, e.target, C.event.fix(e))
        };
        C.event.special[r] = {
            setup: function () {
                var e = this.ownerDocument || this, t = C._data(e, r);
                t || e.addEventListener(n, i, !0), C._data(e, r, (t || 0) + 1)
            }, teardown: function () {
                var e = this.ownerDocument || this, t = C._data(e, r) - 1;
                t ? C._data(e, r, t) : (e.removeEventListener(n, i, !0), C._removeData(e, r))
            }
        }
    }), C.fn.extend({
        on: function (e, t, n, r) {
            return Me(this, e, t, n, r)
        }, one: function (e, t, n, r) {
            return Me(this, e, t, n, r, 1)
        }, off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) r = e.handleObj, C(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler); else {
                if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = undefined), !1 === n && (n = u), this.each(function () {
                    C.event.remove(this, e, n, t)
                });
                for (i in e) this.off(i, t, e[i])
            }
            return this
        }, trigger: function (e, t) {
            return this.each(function () {
                C.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return C.event.trigger(e, t, n, !0)
        }
    });
    var Oe = / jQuery\d+="(?:null|\d+)"/g, Re = new RegExp("<(?:" + xe + ")[\\s/>]", "i"),
        Pe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, Be = /<script|<style|<link/i,
        We = /checked\s*(?:[^=]|=\s*.checked.)/i, Ie = /^true\/(.*)/, $e = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ze = be(g).appendChild(g.createElement("div"));

    function Xe(e, t) {
        return C.nodeName(e, "table") && C.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function Ue(e) {
        return e.type = (null !== C.find.attr(e, "type")) + "/" + e.type, e
    }

    function Ve(e) {
        var t = Ie.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function Ye(e, t) {
        if (1 === t.nodeType && C.hasData(e)) {
            var n, r, i, e = C._data(e), o = C._data(t, e), a = e.events;
            if (a) for (n in delete o.handle, o.events = {}, a) for (r = 0, i = a[n].length; r < i; r++) C.event.add(t, n, a[n][r]);
            o.data && (o.data = C.extend({}, o.data))
        }
    }

    function w(n, r, i, o) {
        r = O.apply([], r);
        var e, t, a, s, u, l, c = 0, f = n.length, d = f - 1, p = r[0], h = C.isFunction(p);
        if (h || 1 < f && "string" == typeof p && !y.checkClone && We.test(p)) return n.each(function (e) {
            var t = n.eq(e);
            h && (r[0] = p.call(this, e, t.html())), w(t, r, i, o)
        });
        if (f && (e = (l = Ne(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === l.childNodes.length && (l = e), e || o)) {
            for (a = (s = C.map(b(l, "script"), Ue)).length; c < f; c++) t = l, c !== d && (t = C.clone(t, !0, !0), a) && C.merge(s, b(t, "script")), i.call(n[c], t, c);
            if (a) for (u = s[s.length - 1].ownerDocument, C.map(s, Ve), c = 0; c < a; c++) t = s[c], ye.test(t.type || "") && !C._data(t, "globalEval") && C.contains(u, t) && (t.src ? C._evalUrl && C._evalUrl(t.src) : C.globalEval((t.text || t.textContent || t.innerHTML || "").replace($e, "")));
            l = null
        }
        return n
    }

    function Je(e, t, n) {
        for (var r, i = t ? C.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || C.cleanData(b(r)), r.parentNode && (n && C.contains(r.ownerDocument, r) && we(b(r, "script")), r.parentNode.removeChild(r));
        return e
    }

    C.extend({
        htmlPrefilter: function (e) {
            return e.replace(Pe, "<$1></$2>")
        }, clone: function (e, t, n) {
            var r, i, o, a, s, u = C.contains(e.ownerDocument, e);
            if (y.html5Clone || C.isXMLDoc(e) || !Re.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (ze.innerHTML = e.outerHTML, ze.removeChild(o = ze.firstChild)), !(y.noCloneEvent && y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e))) for (r = b(o), s = b(e), a = 0; null != (i = s[a]); ++a) if (r[a]) {
                f = c = l = p = d = void 0;
                var l, c, f, d = i, p = r[a];
                if (1 === p.nodeType) {
                    if (l = p.nodeName.toLowerCase(), !y.noCloneEvent && p[C.expando]) {
                        for (c in (f = C._data(p)).events) C.removeEvent(p, c, f.handle);
                        p.removeAttribute(C.expando)
                    }
                    "script" === l && p.text !== d.text ? (Ue(p).text = d.text, Ve(p)) : "object" === l ? (p.parentNode && (p.outerHTML = d.outerHTML), y.html5Clone && d.innerHTML && !C.trim(p.innerHTML) && (p.innerHTML = d.innerHTML)) : "input" === l && ge.test(d.type) ? (p.defaultChecked = p.checked = d.checked, p.value !== d.value && (p.value = d.value)) : "option" === l ? p.defaultSelected = p.selected = d.defaultSelected : "input" !== l && "textarea" !== l || (p.defaultValue = d.defaultValue)
                }
            }
            if (t) if (n) for (s = s || b(e), r = r || b(o), a = 0; null != (i = s[a]); a++) Ye(i, r[a]); else Ye(e, o);
            return 0 < (r = b(o, "script")).length && we(r, !u && b(e, "script")), r = s = i = null, o
        }, cleanData: function (e, t) {
            for (var n, r, i, o, a = 0, s = C.expando, u = C.cache, l = y.attributes, c = C.event.special; null != (n = e[a]); a++) if ((t || v(n)) && (o = (i = n[s]) && u[i])) {
                if (o.events) for (r in o.events) c[r] ? C.event.remove(n, r) : C.removeEvent(n, r, o.handle);
                u[i] && (delete u[i], l || "undefined" == typeof n.removeAttribute ? n[s] = undefined : n.removeAttribute(s), f.push(i))
            }
        }
    }), C.fn.extend({
        domManip: w, detach: function (e) {
            return Je(this, e, !0)
        }, remove: function (e) {
            return Je(this, e)
        }, text: function (e) {
            return d(this, function (e) {
                return e === undefined ? C.text(this) : this.empty().append((this[0] && this[0].ownerDocument || g).createTextNode(e))
            }, null, e, arguments.length)
        }, append: function () {
            return w(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Xe(this, e).appendChild(e)
            })
        }, prepend: function () {
            return w(this, arguments, function (e) {
                var t;
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = Xe(this, e)).insertBefore(e, t.firstChild)
            })
        }, before: function () {
            return w(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return w(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && C.cleanData(b(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && C.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return C.clone(this, e, t)
            })
        }, html: function (e) {
            return d(this, function (e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (e === undefined) return 1 === t.nodeType ? t.innerHTML.replace(Oe, "") : undefined;
                if ("string" == typeof e && !Be.test(e) && (y.htmlSerialize || !Re.test(e)) && (y.leadingWhitespace || !ve.test(e)) && !x[(me.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = C.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(b(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var n = [];
            return w(this, arguments, function (e) {
                var t = this.parentNode;
                C.inArray(this, n) < 0 && (C.cleanData(b(this)), t) && t.replaceChild(e, this)
            }, n)
        }
    }), C.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, a) {
        C.fn[e] = function (e) {
            for (var t, n = 0, r = [], i = C(e), o = i.length - 1; n <= o; n++) t = n === o ? this : this.clone(!0), C(i[n])[a](t), R.apply(r, t.get());
            return this.pushStack(r)
        }
    });
    var Ge, Ke = {HTML: "block", BODY: "block"};

    function Qe(e, t) {
        e = C(t.createElement(e)).appendTo(t.body), t = C.css(e[0], "display");
        return e.detach(), t
    }

    function Ze(e) {
        var t = g, n = Ke[e];
        return n || ("none" !== (n = Qe(e, t)) && n || ((t = ((Ge = (Ge || C("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || Ge[0].contentDocument).document).write(), t.close(), n = Qe(e, t), Ge.detach()), Ke[e] = n), n
    }

    var n, et, tt, nt, rt, it, ot, a, at = /^margin/, st = new RegExp("^(" + e + ")(?!px)[a-z%]+$", "i"),
        ut = function (e, t, n, r) {
            var i, o = {};
            for (i in t) o[i] = e.style[i], e.style[i] = t[i];
            for (i in r = n.apply(e, r || []), t) e.style[i] = o[i];
            return r
        }, lt = g.documentElement;

    function t() {
        var e, t = g.documentElement;
        t.appendChild(ot), a.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = tt = it = !1, et = rt = !0, T.getComputedStyle && (e = T.getComputedStyle(a), n = "1%" !== (e || {}).top, it = "2px" === (e || {}).marginLeft, tt = "4px" === (e || {width: "4px"}).width, a.style.marginRight = "50%", et = "4px" === (e || {marginRight: "4px"}).marginRight, (e = a.appendChild(g.createElement("div"))).style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", a.style.width = "1px", rt = !parseFloat((T.getComputedStyle(e) || {}).marginRight), a.removeChild(e)), a.style.display = "none", (nt = 0 === a.getClientRects().length) && (a.style.display = "", a.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", a.childNodes[0].style.borderCollapse = "separate", (e = a.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", nt = 0 === e[0].offsetHeight) && (e[0].style.display = "", e[1].style.display = "none", nt = 0 === e[0].offsetHeight), t.removeChild(ot)
    }

    ot = g.createElement("div"), (a = g.createElement("div")).style && (a.style.cssText = "float:left;opacity:.5", y.opacity = "0.5" === a.style.opacity, y.cssFloat = !!a.style.cssFloat, a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === a.style.backgroundClip, (ot = g.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.innerHTML = "", ot.appendChild(a), y.boxSizing = "" === a.style.boxSizing || "" === a.style.MozBoxSizing || "" === a.style.WebkitBoxSizing, C.extend(y, {
        reliableHiddenOffsets: function () {
            return null == n && t(), nt
        }, boxSizingReliable: function () {
            return null == n && t(), tt
        }, pixelMarginRight: function () {
            return null == n && t(), et
        }, pixelPosition: function () {
            return null == n && t(), n
        }, reliableMarginRight: function () {
            return null == n && t(), rt
        }, reliableMarginLeft: function () {
            return null == n && t(), it
        }
    }));
    var l, p, ct = /^(top|right|bottom|left)$/;

    function ft(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    T.getComputedStyle ? (l = function (e) {
        var t = e.ownerDocument.defaultView;
        return (t = t && t.opener ? t : T).getComputedStyle(e)
    }, p = function (e, t, n) {
        var r, i, o = e.style;
        return "" !== (i = (n = n || l(e)) ? n.getPropertyValue(t) || n[t] : undefined) && i !== undefined || C.contains(e.ownerDocument, e) || (i = C.style(e, t)), n && !y.pixelMarginRight() && st.test(i) && at.test(t) && (e = o.width, t = o.minWidth, r = o.maxWidth, o.minWidth = o.maxWidth = o.width = i, i = n.width, o.width = e, o.minWidth = t, o.maxWidth = r), i === undefined ? i : i + ""
    }) : lt.currentStyle && (l = function (e) {
        return e.currentStyle
    }, p = function (e, t, n) {
        var r, i, o, a = e.style;
        return null == (n = (n = n || l(e)) ? n[t] : undefined) && a && a[t] && (n = a[t]), st.test(n) && !ct.test(t) && (r = a.left, (o = (i = e.runtimeStyle) && i.left) && (i.left = e.currentStyle.left), a.left = "fontSize" === t ? "1em" : n, n = a.pixelLeft + "px", a.left = r, o) && (i.left = o), n === undefined ? n : n + "" || "auto"
    });
    var dt = /alpha\([^)]*\)/i, pt = /opacity\s*=\s*([^)]*)/i, ht = /^(none|table(?!-c[ea]).+)/,
        gt = new RegExp("^(" + e + ")(.*)$", "i"), mt = {position: "absolute", visibility: "hidden", display: "block"},
        yt = {letterSpacing: "0", fontWeight: "400"}, vt = ["Webkit", "O", "Moz", "ms"],
        xt = g.createElement("div").style;

    function bt(e) {
        if (e in xt) return e;
        for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = vt.length; n--;) if ((e = vt[n] + t) in xt) return e
    }

    function wt(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++) (r = e[a]).style && (o[a] = C._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && pe(r) && (o[a] = C._data(r, "olddisplay", Ze(r.nodeName)))) : (i = pe(r), (n && "none" !== n || !i) && C._data(r, "olddisplay", i ? n : C.css(r, "display"))));
        for (a = 0; a < s; a++) !(r = e[a]).style || t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none");
        return e
    }

    function Tt(e, t, n) {
        var r = gt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function Ct(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2) "margin" === n && (a += C.css(e, n + s[o], !0, i)), r ? ("content" === n && (a -= C.css(e, "padding" + s[o], !0, i)), "margin" !== n && (a -= C.css(e, "border" + s[o] + "Width", !0, i))) : (a += C.css(e, "padding" + s[o], !0, i), "padding" !== n && (a += C.css(e, "border" + s[o] + "Width", !0, i)));
        return a
    }

    function Et(e, t, n) {
        var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = l(e),
            a = y.boxSizing && "border-box" === C.css(e, "boxSizing", !1, o);
        if (i <= 0 || null == i) {
            if (((i = p(e, t, o)) < 0 || null == i) && (i = e.style[t]), st.test(i)) return i;
            r = a && (y.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + Ct(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function h(e, t, n, r, i) {
        return new h.prototype.init(e, t, n, r, i)
    }

    C.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) return "" === (t = p(e, "opacity")) ? "1" : t
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": y.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = C.camelCase(t), u = e.style;
                if (t = C.cssProps[s] || (C.cssProps[s] = bt(s) || s), a = C.cssHooks[t] || C.cssHooks[s], n === undefined) return a && "get" in a && (i = a.get(e, !1, r)) !== undefined ? i : u[t];
                if ("string" === (o = typeof n) && (i = de.exec(n)) && i[1] && (n = he(e, t, i), o = "number"), null != n && n == n && ("number" === o && (n += i && i[3] || (C.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), !(a && "set" in a && (n = a.set(e, n, r)) === undefined))) try {
                    u[t] = n
                } catch (l) {
                }
            }
        },
        css: function (e, t, n, r) {
            var i, o = C.camelCase(t);
            return t = C.cssProps[o] || (C.cssProps[o] = bt(o) || o), "normal" === (i = (i = (o = C.cssHooks[t] || C.cssHooks[o]) && "get" in o ? o.get(e, !0, n) : i) === undefined ? p(e, t, r) : i) && t in yt && (i = yt[t]), ("" === n || n) && (o = parseFloat(i), !0 === n || isFinite(o)) ? o || 0 : i
        }
    }), C.each(["height", "width"], function (e, i) {
        C.cssHooks[i] = {
            get: function (e, t, n) {
                if (t) return ht.test(C.css(e, "display")) && 0 === e.offsetWidth ? ut(e, mt, function () {
                    return Et(e, i, n)
                }) : Et(e, i, n)
            }, set: function (e, t, n) {
                var r = n && l(e);
                return Tt(0, t, n ? Ct(e, i, n, y.boxSizing && "border-box" === C.css(e, "boxSizing", !1, r), r) : 0)
            }
        }
    }), y.opacity || (C.cssHooks.opacity = {
        get: function (e, t) {
            return pt.test((t && e.currentStyle ? e.currentStyle : e.style).filter || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        }, set: function (e, t) {
            var n = e.style, e = e.currentStyle, r = C.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                i = e && e.filter || n.filter || "";
            ((n.zoom = 1) <= t || "" === t) && "" === C.trim(i.replace(dt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || e && !e.filter) || (n.filter = dt.test(i) ? i.replace(dt, r) : i + " " + r)
        }
    }), C.cssHooks.marginRight = ft(y.reliableMarginRight, function (e, t) {
        if (t) return ut(e, {display: "inline-block"}, p, [e, "marginRight"])
    }), C.cssHooks.marginLeft = ft(y.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(p(e, "marginLeft")) || (C.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - ut(e, {marginLeft: 0}, function () {
            return e.getBoundingClientRect().left
        }) : 0)) + "px"
    }), C.each({margin: "", padding: "", border: "Width"}, function (i, o) {
        C.cssHooks[i + o] = {
            expand: function (e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + s[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, at.test(i) || (C.cssHooks[i + o].set = Tt)
    }), C.fn.extend({
        css: function (e, t) {
            return d(this, function (e, t, n) {
                var r, i, o = {}, a = 0;
                if (C.isArray(t)) {
                    for (r = l(e), i = t.length; a < i; a++) o[t[a]] = C.css(e, t[a], !1, r);
                    return o
                }
                return n !== undefined ? C.style(e, t, n) : C.css(e, t)
            }, e, t, 1 < arguments.length)
        }, show: function () {
            return wt(this, !0)
        }, hide: function () {
            return wt(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                pe(this) ? C(this).show() : C(this).hide()
            })
        }
    }), ((C.Tween = h).prototype = {
        constructor: h, init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (C.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = h.propHooks[this.prop];
            return (e && e.get ? e : h.propHooks._default).get(this)
        }, run: function (e) {
            var t, n = h.propHooks[this.prop];
            return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), (n && n.set ? n : h.propHooks._default).set(this), this
        }
    }).init.prototype = h.prototype, (h.propHooks = {
        _default: {
            get: function (e) {
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (e = C.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0
            }, set: function (e) {
                C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[C.cssProps[e.prop]] && !C.cssHooks[e.prop] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = h.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, C.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }, _default: "swing"
    }, C.fx = h.prototype.init, C.fx.step = {};
    var N, Nt, k, S, kt = /^(?:toggle|show|hide)$/, St = /queueHooks$/;

    function At() {
        return T.setTimeout(function () {
            N = undefined
        }), N = C.now()
    }

    function Dt(e, t) {
        var n, r = {height: e}, i = 0;
        for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = s[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function jt(e, t, n) {
        for (var r, i = (A.tweeners[t] || []).concat(A.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r
    }

    function A(i, e, t) {
        var n, o, r, a, s, u, l, c = 0, f = A.prefilters.length, d = C.Deferred().always(function () {
            delete p.elem
        }), p = function () {
            if (o) return !1;
            for (var e = N || At(), e = Math.max(0, h.startTime + h.duration - e), t = 1 - (e / h.duration || 0), n = 0, r = h.tweens.length; n < r; n++) h.tweens[n].run(t);
            return d.notifyWith(i, [h, t, e]), t < 1 && r ? e : (d.resolveWith(i, [h]), !1)
        }, h = d.promise({
            elem: i,
            props: C.extend({}, e),
            opts: C.extend(!0, {specialEasing: {}, easing: C.easing._default}, t),
            originalProperties: e,
            originalOptions: t,
            startTime: N || At(),
            duration: t.duration,
            tweens: [],
            createTween: function (e, t) {
                t = C.Tween(i, h.opts, e, t, h.opts.specialEasing[e] || h.opts.easing);
                return h.tweens.push(t), t
            },
            stop: function (e) {
                var t = 0, n = e ? h.tweens.length : 0;
                if (!o) {
                    for (o = !0; t < n; t++) h.tweens[t].run(1);
                    e ? (d.notifyWith(i, [h, 1, 0]), d.resolveWith(i, [h, e])) : d.rejectWith(i, [h, e])
                }
                return this
            }
        }), g = h.props, m = g, y = h.opts.specialEasing;
        for (r in m) if (s = y[a = C.camelCase(r)], u = m[r], C.isArray(u) && (s = u[1], u = m[r] = u[0]), r !== a && (m[a] = u, delete m[r]), (l = C.cssHooks[a]) && "expand" in l) for (r in u = l.expand(u), delete m[a], u) r in m || (m[r] = u[r], y[r] = s); else y[a] = s;
        for (; c < f; c++) if (n = A.prefilters[c].call(h, i, g, h.opts)) return C.isFunction(n.stop) && (C._queueHooks(h.elem, h.opts.queue).stop = C.proxy(n.stop, n)), n;
        return C.map(g, jt, h), C.isFunction(h.opts.start) && h.opts.start.call(i, h), C.fx.timer(C.extend(p, {
            elem: i,
            anim: h,
            queue: h.opts.queue
        })), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always)
    }

    C.Animation = C.extend(A, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return he(n.elem, e, de.exec(t), n), n
            }]
        }, tweener: function (e, t) {
            for (var n, r = 0, i = (e = C.isFunction(e) ? (t = e, ["*"]) : e.match(E)).length; r < i; r++) n = e[r], A.tweeners[n] = A.tweeners[n] || [], A.tweeners[n].unshift(t)
        }, prefilters: [function (t, e, n) {
            var r, i, o, a, s, u, l, c = this, f = {}, d = t.style, p = t.nodeType && pe(t), h = C._data(t, "fxshow");
            for (r in n.queue || (null == (s = C._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function () {
                s.unqueued || u()
            }), s.unqueued++, c.always(function () {
                c.always(function () {
                    s.unqueued--, C.queue(t, "fx").length || s.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === ("none" === (l = C.css(t, "display")) ? C._data(t, "olddisplay") || Ze(t.nodeName) : l)) && "none" === C.css(t, "float") && (y.inlineBlockNeedsLayout && "inline" !== Ze(t.nodeName) ? d.zoom = 1 : d.display = "inline-block"), n.overflow && (d.overflow = "hidden", y.shrinkWrapBlocks() || c.always(function () {
                d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
            })), e) if (i = e[r], kt.exec(i)) {
                if (delete e[r], o = o || "toggle" === i, i === (p ? "hide" : "show")) {
                    if ("show" !== i || !h || h[r] === undefined) continue;
                    p = !0
                }
                f[r] = h && h[r] || C.style(t, r)
            } else l = undefined;
            if (C.isEmptyObject(f)) "inline" === ("none" === l ? Ze(t.nodeName) : l) && (d.display = l); else for (r in h ? "hidden" in h && (p = h.hidden) : h = C._data(t, "fxshow", {}), o && (h.hidden = !p), p ? C(t).show() : c.done(function () {
                C(t).hide()
            }), c.done(function () {
                for (var e in C._removeData(t, "fxshow"), f) C.style(t, e, f[e])
            }), f) a = jt(p ? h[r] : 0, r, c), r in h || (h[r] = a.start, p && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }], prefilter: function (e, t) {
            t ? A.prefilters.unshift(e) : A.prefilters.push(e)
        }
    }), C.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? C.extend({}, e) : {
            complete: n || !n && t || C.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !C.isFunction(t) && t
        };
        return r.duration = C.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in C.fx.speeds ? C.fx.speeds[r.duration] : C.fx.speeds._default, null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            C.isFunction(r.old) && r.old.call(this), r.queue && C.dequeue(this, r.queue)
        }, r
    }, C.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(pe).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        }, animate: function (t, e, n, r) {
            var i = C.isEmptyObject(t), o = C.speed(e, n, r), e = function () {
                var e = A(this, C.extend({}, t), o);
                (i || C._data(this, "finish")) && e.stop(!0)
            };
            return e.finish = e, i || !1 === o.queue ? this.each(e) : this.queue(o.queue, e)
        }, stop: function (i, e, o) {
            var a = function (e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = undefined), e && !1 !== i && this.queue(i || "fx", []), this.each(function () {
                var e = !0, t = null != i && i + "queueHooks", n = C.timers, r = C._data(this);
                if (t) r[t] && r[t].stop && a(r[t]); else for (t in r) r[t] && r[t].stop && St.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || C.dequeue(this, i)
            })
        }, finish: function (a) {
            return !1 !== a && (a = a || "fx"), this.each(function () {
                var e, t = C._data(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = C.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, C.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), C.each(["toggle", "show", "hide"], function (e, r) {
        var i = C.fn[r];
        C.fn[r] = function (e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(Dt(r, !0), e, t, n)
        }
    }), C.each({
        slideDown: Dt("show"),
        slideUp: Dt("hide"),
        slideToggle: Dt("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, r) {
        C.fn[e] = function (e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), C.timers = [], C.fx.tick = function () {
        var e, t = C.timers, n = 0;
        for (N = C.now(); n < t.length; n++) (e = t[n])() || t[n] !== e || t.splice(n--, 1);
        t.length || C.fx.stop(), N = undefined
    }, C.fx.timer = function (e) {
        C.timers.push(e), e() ? C.fx.start() : C.timers.pop()
    }, C.fx.interval = 13, C.fx.start = function () {
        Nt = Nt || T.setInterval(C.fx.tick, C.fx.interval)
    }, C.fx.stop = function () {
        T.clearInterval(Nt), Nt = null
    }, C.fx.speeds = {slow: 600, fast: 200, _default: 400}, C.fn.delay = function (r, e) {
        return r = C.fx && C.fx.speeds[r] || r, this.queue(e = e || "fx", function (e, t) {
            var n = T.setTimeout(e, r);
            t.stop = function () {
                T.clearTimeout(n)
            }
        })
    }, k = g.createElement("input"), q = g.createElement("div"), S = g.createElement("select"), e = S.appendChild(g.createElement("option")), (q = g.createElement("div")).setAttribute("className", "t"), q.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", F = q.getElementsByTagName("a")[0], k.setAttribute("type", "checkbox"), q.appendChild(k), (F = q.getElementsByTagName("a")[0]).style.cssText = "top:1px", y.getSetAttribute = "t" !== q.className, y.style = /top/.test(F.getAttribute("style")), y.hrefNormalized = "/a" === F.getAttribute("href"), y.checkOn = !!k.value, y.optSelected = e.selected, y.enctype = !!g.createElement("form").enctype, S.disabled = !0, y.optDisabled = !e.disabled, (k = g.createElement("input")).setAttribute("value", ""), y.input = "" === k.getAttribute("value"), k.value = "t", k.setAttribute("type", "radio"), y.radioValue = "t" === k.value;
    var Lt = /\r/g, Ht = /[\x20\t\r\n\f]+/g;
    C.fn.extend({
        val: function (t) {
            var n, e, r, i = this[0];
            return arguments.length ? (r = C.isFunction(t), this.each(function (e) {
                1 !== this.nodeType || (null == (e = r ? t.call(this, e, C(this).val()) : t) ? e = "" : "number" == typeof e ? e += "" : C.isArray(e) && (e = C.map(e, function (e) {
                    return null == e ? "" : e + ""
                })), (n = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in n && n.set(this, e, "value") !== undefined) || (this.value = e)
            })) : i ? (n = C.valHooks[i.type] || C.valHooks[i.nodeName.toLowerCase()]) && "get" in n && (e = n.get(i, "value")) !== undefined ? e : "string" == typeof (e = i.value) ? e.replace(Lt, "") : null == e ? "" : e : void 0
        }
    }), C.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = C.find.attr(e, "value");
                    return null != t ? t : C.trim(C.text(e)).replace(Ht, " ")
                }
            }, select: {
                get: function (e) {
                    for (var t, n = e.options, r = e.selectedIndex, i = "select-one" === e.type || r < 0, o = i ? null : [], a = i ? r + 1 : n.length, s = r < 0 ? a : i ? r : 0; s < a; s++) if (((t = n[s]).selected || s === r) && (y.optDisabled ? !t.disabled : null === t.getAttribute("disabled")) && (!t.parentNode.disabled || !C.nodeName(t.parentNode, "optgroup"))) {
                        if (t = C(t).val(), i) return t;
                        o.push(t)
                    }
                    return o
                }, set: function (e, t) {
                    for (var n, r, i = e.options, o = C.makeArray(t), a = i.length; a--;) if (r = i[a], -1 < C.inArray(C.valHooks.option.get(r), o)) try {
                        r.selected = n = !0
                    } catch (s) {
                        r.scrollHeight
                    } else r.selected = !1;
                    return n || (e.selectedIndex = -1), i
                }
            }
        }
    }), C.each(["radio", "checkbox"], function () {
        C.valHooks[this] = {
            set: function (e, t) {
                if (C.isArray(t)) return e.checked = -1 < C.inArray(C(e).val(), t)
            }
        }, y.checkOn || (C.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var D, qt, j = C.expr.attrHandle, _t = /^(?:checked|selected)$/i, L = y.getSetAttribute, Ft = y.input,
        Mt = (C.fn.extend({
            attr: function (e, t) {
                return d(this, C.attr, e, t, 1 < arguments.length)
            }, removeAttr: function (e) {
                return this.each(function () {
                    C.removeAttr(this, e)
                })
            }
        }), C.extend({
            attr: function (e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? C.prop(e, t, n) : (1 === o && C.isXMLDoc(e) || (t = t.toLowerCase(), i = C.attrHooks[t] || (C.expr.match.bool.test(t) ? qt : D)), n !== undefined ? null === n ? void C.removeAttr(e, t) : i && "set" in i && (r = i.set(e, n, t)) !== undefined ? r : (e.setAttribute(t, n + ""), n) : !(i && "get" in i && null !== (r = i.get(e, t))) && null == (r = C.find.attr(e, t)) ? undefined : r)
            }, attrHooks: {
                type: {
                    set: function (e, t) {
                        var n;
                        if (!y.radioValue && "radio" === t && C.nodeName(e, "input")) return n = e.value, e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }, removeAttr: function (e, t) {
                var n, r, i = 0, o = t && t.match(E);
                if (o && 1 === e.nodeType) for (; n = o[i++];) r = C.propFix[n] || n, C.expr.match.bool.test(n) ? Ft && L || !_t.test(n) ? e[r] = !1 : e[C.camelCase("default-" + n)] = e[r] = !1 : C.attr(e, n, ""), e.removeAttribute(L ? n : r)
            }
        }), qt = {
            set: function (e, t, n) {
                return !1 === t ? C.removeAttr(e, n) : Ft && L || !_t.test(n) ? e.setAttribute(!L && C.propFix[n] || n, n) : e[C.camelCase("default-" + n)] = e[n] = !0, n
            }
        }, C.each(C.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var o = j[t] || C.find.attr;
            Ft && L || !_t.test(t) ? j[t] = function (e, t, n) {
                var r, i;
                return n || (i = j[t], j[t] = r, r = null != o(e, t, n) ? t.toLowerCase() : null, j[t] = i), r
            } : j[t] = function (e, t, n) {
                if (!n) return e[C.camelCase("default-" + t)] ? t.toLowerCase() : null
            }
        }), Ft && L || (C.attrHooks.value = {
            set: function (e, t, n) {
                if (!C.nodeName(e, "input")) return D && D.set(e, t, n);
                e.defaultValue = t
            }
        }), L || (D = {
            set: function (e, t, n) {
                var r = e.getAttributeNode(n);
                if (r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n)) return t
            }
        }, j.id = j.name = j.coords = function (e, t, n) {
            if (!n) return (n = e.getAttributeNode(t)) && "" !== n.value ? n.value : null
        }, C.valHooks.button = {
            get: function (e, t) {
                t = e.getAttributeNode(t);
                if (t && t.specified) return t.value
            }, set: D.set
        }, C.attrHooks.contenteditable = {
            set: function (e, t, n) {
                D.set(e, "" !== t && t, n)
            }
        }, C.each(["width", "height"], function (e, n) {
            C.attrHooks[n] = {
                set: function (e, t) {
                    if ("" === t) return e.setAttribute(n, "auto"), t
                }
            }
        })), y.style || (C.attrHooks.style = {
            get: function (e) {
                return e.style.cssText || undefined
            }, set: function (e, t) {
                return e.style.cssText = t + ""
            }
        }), /^(?:input|select|textarea|button|object)$/i), Ot = /^(?:a|area)$/i, Rt = (C.fn.extend({
            prop: function (e, t) {
                return d(this, C.prop, e, t, 1 < arguments.length)
            }, removeProp: function (t) {
                return t = C.propFix[t] || t, this.each(function () {
                    try {
                        this[t] = undefined, delete this[t]
                    } catch (e) {
                    }
                })
            }
        }), C.extend({
            prop: function (e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && C.isXMLDoc(e) || (t = C.propFix[t] || t, i = C.propHooks[t]), n !== undefined ? i && "set" in i && (r = i.set(e, n, t)) !== undefined ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
            }, propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = C.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : Mt.test(e.nodeName) || Ot.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            }, propFix: {"for": "htmlFor", "class": "className"}
        }), y.hrefNormalized || C.each(["href", "src"], function (e, t) {
            C.propHooks[t] = {
                get: function (e) {
                    return e.getAttribute(t, 4)
                }
            }
        }), y.optSelected || (C.propHooks.selected = {
            get: function (e) {
                e = e.parentNode;
                return e && (e.selectedIndex, e.parentNode) && e.parentNode.selectedIndex, null
            }, set: function (e) {
                e = e.parentNode;
                e && (e.selectedIndex, e.parentNode) && e.parentNode.selectedIndex
            }
        }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            C.propFix[this.toLowerCase()] = this
        }), y.enctype || (C.propFix.enctype = "encoding"), /[\t\r\n\f]/g);

    function H(e) {
        return C.attr(e, "class") || ""
    }

    C.fn.extend({
        addClass: function (t) {
            var e, n, r, i, o, a, s = 0;
            if (C.isFunction(t)) return this.each(function (e) {
                C(this).addClass(t.call(this, e, H(this)))
            });
            if ("string" == typeof t && t) for (e = t.match(E) || []; n = this[s++];) if (a = H(n), r = 1 === n.nodeType && (" " + a + " ").replace(Rt, " ")) {
                for (o = 0; i = e[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                a !== (a = C.trim(r)) && C.attr(n, "class", a)
            }
            return this
        }, removeClass: function (t) {
            var e, n, r, i, o, a, s = 0;
            if (C.isFunction(t)) return this.each(function (e) {
                C(this).removeClass(t.call(this, e, H(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t) for (e = t.match(E) || []; n = this[s++];) if (a = H(n), r = 1 === n.nodeType && (" " + a + " ").replace(Rt, " ")) {
                for (o = 0; i = e[o++];) for (; -1 < r.indexOf(" " + i + " ");) r = r.replace(" " + i + " ", " ");
                a !== (a = C.trim(r)) && C.attr(n, "class", a)
            }
            return this
        }, toggleClass: function (i, t) {
            var o = typeof i;
            return "boolean" == typeof t && "string" == o ? t ? this.addClass(i) : this.removeClass(i) : C.isFunction(i) ? this.each(function (e) {
                C(this).toggleClass(i.call(this, e, H(this), t), t)
            }) : this.each(function () {
                var e, t, n, r;
                if ("string" == o) for (t = 0, n = C(this), r = i.match(E) || []; e = r[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e); else i !== undefined && "boolean" != o || ((e = H(this)) && C._data(this, "__className__", e), C.attr(this, "class", !e && !1 !== i && C._data(this, "__className__") || ""))
            })
        }, hasClass: function (e) {
            for (var t, n = 0, r = " " + e + " "; t = this[n++];) if (1 === t.nodeType && -1 < (" " + H(t) + " ").replace(Rt, " ").indexOf(r)) return !0;
            return !1
        }
    }), C.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, n) {
        C.fn[n] = function (e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), C.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    });
    var q = T.location, Pt = C.now(), Bt = /\?/,
        Wt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g,
        It = (C.parseJSON = function (e) {
            var i, o, t;
            return T.JSON && T.JSON.parse ? T.JSON.parse(e + "") : (o = null, (t = C.trim(e + "")) && !C.trim(t.replace(Wt, function (e, t, n, r) {
                return 0 === (o = i && t ? 0 : o) ? e : (i = n || t, o += !r - !n, "")
            })) ? Function("return " + t)() : C.error("Invalid JSON: " + e))
        }, C.parseXML = function (e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
                T.DOMParser ? t = (new T.DOMParser).parseFromString(e, "text/xml") : ((t = new T.ActiveXObject("Microsoft.XMLDOM"))["async"] = "false", t.loadXML(e))
            } catch (n) {
                t = undefined
            }
            return t && t.documentElement && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e), t
        }, /#.*$/), $t = /([?&])_=[^&]*/, zt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Xt = /^(?:GET|HEAD)$/, Ut = /^\/\//,
        Vt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Yt = {}, Jt = {}, Gt = "*/".concat("*"),
        Kt = q.href, _ = Vt.exec(Kt.toLowerCase()) || [];

    function Qt(o) {
        return function (e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0, i = e.toLowerCase().match(E) || [];
            if (C.isFunction(t)) for (; n = i[r++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function Zt(t, r, i, o) {
        var a = {}, s = t === Jt;

        function u(e) {
            var n;
            return a[e] = !0, C.each(t[e] || [], function (e, t) {
                t = t(r, i, o);
                return "string" != typeof t || s || a[t] ? s ? !(n = t) : void 0 : (r.dataTypes.unshift(t), u(t), !1)
            }), n
        }

        return u(r.dataTypes[0]) || !a["*"] && u("*")
    }

    function en(e, t) {
        var n, r, i = C.ajaxSettings.flatOptions || {};
        for (r in t) t[r] !== undefined && ((i[r] ? e : n = n || {})[r] = t[r]);
        return n && C.extend(!0, e, n), e
    }

    function tn(e, t, n, r) {
        var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
        if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
            if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                break
            }
            if (!0 !== a) if (a && e["throws"]) t = a(t); else try {
                t = a(t)
            } catch (f) {
                return {state: "parsererror", error: a ? f : "No conversion from " + u + " to " + o}
            }
        }
        return {state: "success", data: t}
    }

    function nn(e) {
        if (!C.contains(e.ownerDocument || g, e)) return !0;
        for (; e && 1 === e.nodeType;) {
            if ("none" === ((t = e).style && t.style.display || C.css(t, "display")) || "hidden" === e.type) return !0;
            e = e.parentNode
        }
        var t;
        return !1
    }

    C.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Kt,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(_[1]),
            global: !0,
            processData: !0,
            "async": !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Gt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": C.parseJSON, "text xml": C.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? en(en(e, C.ajaxSettings), t) : en(C.ajaxSettings, e)
        },
        ajaxPrefilter: Qt(Yt),
        ajaxTransport: Qt(Jt),
        ajax: function (e, t) {
            "object" == typeof e && (t = e, e = undefined);
            var n, u, l, c, f, d, r, p = C.ajaxSetup({}, t = t || {}), h = p.context || p,
                g = p.context && (h.nodeType || h.jquery) ? C(h) : C.event, m = C.Deferred(),
                y = C.Callbacks("once memory"), v = p.statusCode || {}, i = {}, o = {}, x = 0, a = "canceled", b = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (2 === x) {
                            if (!r) for (r = {}; t = zt.exec(l);) r[t[1].toLowerCase()] = t[2];
                            t = r[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    }, getAllResponseHeaders: function () {
                        return 2 === x ? l : null
                    }, setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return x || (e = o[n] = o[n] || e, i[e] = t), this
                    }, overrideMimeType: function (e) {
                        return x || (p.mimeType = e), this
                    }, statusCode: function (e) {
                        if (e) if (x < 2) for (var t in e) v[t] = [v[t], e[t]]; else b.always(e[b.status]);
                        return this
                    }, abort: function (e) {
                        e = e || a;
                        return d && d.abort(e), s(0, e), this
                    }
                };
            if (m.promise(b).complete = y.add, b.success = b.done, b.error = b.fail, p.url = ((e || p.url || Kt) + "").replace(It, "").replace(Ut, _[1] + "//"), p.type = t.method || t.type || p.method || p.type, p.dataTypes = C.trim(p.dataType || "*").toLowerCase().match(E) || [""], null == p.crossDomain && (e = Vt.exec(p.url.toLowerCase()), p.crossDomain = !(!e || e[1] === _[1] && e[2] === _[2] && (e[3] || ("http:" === e[1] ? "80" : "443")) === (_[3] || ("http:" === _[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = C.param(p.data, p.traditional)), Zt(Yt, p, t, b), 2 !== x) {
                for (n in (f = C.event && p.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Xt.test(p.type), u = p.url, p.hasContent || (p.data && (u = p.url += (Bt.test(u) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (p.url = $t.test(u) ? u.replace($t, "$1_=" + Pt++) : u + (Bt.test(u) ? "&" : "?") + "_=" + Pt++)), p.ifModified && (C.lastModified[u] && b.setRequestHeader("If-Modified-Since", C.lastModified[u]), C.etag[u]) && b.setRequestHeader("If-None-Match", C.etag[u]), (p.data && p.hasContent && !1 !== p.contentType || t.contentType) && b.setRequestHeader("Content-Type", p.contentType), b.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Gt + "; q=0.01" : "") : p.accepts["*"]), p.headers) b.setRequestHeader(n, p.headers[n]);
                if (p.beforeSend && (!1 === p.beforeSend.call(h, b, p) || 2 === x)) return b.abort();
                for (n in a = "abort", {success: 1, error: 1, complete: 1}) b[n](p[n]);
                if (d = Zt(Jt, p, t, b)) {
                    if (b.readyState = 1, f && g.trigger("ajaxSend", [b, p]), 2 === x) return b;
                    p["async"] && 0 < p.timeout && (c = T.setTimeout(function () {
                        b.abort("timeout")
                    }, p.timeout));
                    try {
                        x = 1, d.send(i, s)
                    } catch (w) {
                        if (!(x < 2)) throw w;
                        s(-1, w)
                    }
                } else s(-1, "No Transport")
            }
            return b;

            function s(e, t, n, r) {
                var i, o, a, s = t;
                2 !== x && (x = 2, c && T.clearTimeout(c), d = undefined, l = r || "", b.readyState = 0 < e ? 4 : 0, r = 200 <= e && e < 300 || 304 === e, n && (a = function (e, t, n) {
                    for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0];) u.shift(), i === undefined && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i) for (a in s) if (s[a] && s[a].test(i)) {
                        u.unshift(a);
                        break
                    }
                    if (u[0] in n) o = u[0]; else {
                        for (a in n) {
                            if (!u[0] || e.converters[a + " " + u[0]]) {
                                o = a;
                                break
                            }
                            r = r || a
                        }
                        o = o || r
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(p, b, n)), a = tn(p, a, b, r), r ? (p.ifModified && ((n = b.getResponseHeader("Last-Modified")) && (C.lastModified[u] = n), n = b.getResponseHeader("etag")) && (C.etag[u] = n), 204 === e || "HEAD" === p.type ? s = "nocontent" : 304 === e ? s = "notmodified" : (s = a.state, i = a.data, r = !(o = a.error))) : (o = s, !e && s || (s = "error", e < 0 && (e = 0))), b.status = e, b.statusText = (t || s) + "", r ? m.resolveWith(h, [i, s, b]) : m.rejectWith(h, [b, s, o]), b.statusCode(v), v = undefined, f && g.trigger(r ? "ajaxSuccess" : "ajaxError", [b, p, r ? i : o]), y.fireWith(h, [b, s]), f) && (g.trigger("ajaxComplete", [b, p]), --C.active || C.event.trigger("ajaxStop"))
            }
        },
        getJSON: function (e, t, n) {
            return C.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return C.get(e, undefined, t, "script")
        }
    }), C.each(["get", "post"], function (e, i) {
        C[i] = function (e, t, n, r) {
            return C.isFunction(t) && (r = r || n, n = t, t = undefined), C.ajax(C.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, C.isPlainObject(e) && e))
        }
    }), C._evalUrl = function (e) {
        return C.ajax({url: e, type: "GET", dataType: "script", cache: !0, "async": !1, global: !1, "throws": !0})
    }, C.fn.extend({
        wrapAll: function (t) {
            var e;
            return C.isFunction(t) ? this.each(function (e) {
                C(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = C(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                return e
            }).append(this)), this)
        }, wrapInner: function (n) {
            return C.isFunction(n) ? this.each(function (e) {
                C(this).wrapInner(n.call(this, e))
            }) : this.each(function () {
                var e = C(this), t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        }, wrap: function (t) {
            var n = C.isFunction(t);
            return this.each(function (e) {
                C(this).wrapAll(n ? t.call(this, e) : t)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                C.nodeName(this, "body") || C(this).replaceWith(this.childNodes)
            }).end()
        }
    }), C.expr.filters.hidden = function (e) {
        return y.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : nn(e)
    }, C.expr.filters.visible = function (e) {
        return !C.expr.filters.hidden(e)
    };
    var rn = /%20/g, on = /\[\]$/, an = /\r?\n/g, sn = /^(?:submit|button|image|reset|file)$/i,
        un = /^(?:input|select|textarea|keygen)/i;
    C.param = function (e, t) {
        var n, r = [], i = function (e, t) {
            t = C.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (t === undefined && (t = C.ajaxSettings && C.ajaxSettings.traditional), C.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, function () {
            i(this.name, this.value)
        }); else for (n in e) !function o(n, e, r, i) {
            if (C.isArray(e)) C.each(e, function (e, t) {
                r || on.test(n) ? i(n, t) : o(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
            }); else if (r || "object" !== C.type(e)) i(n, e); else for (var t in e) o(n + "[" + t + "]", e[t], r, i)
        }(n, e[n], t, i);
        return r.join("&").replace(rn, "+")
    }, C.fn.extend({
        serialize: function () {
            return C.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = C.prop(this, "elements");
                return e ? C.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !C(this).is(":disabled") && un.test(this.nodeName) && !sn.test(e) && (this.checked || !ge.test(e))
            }).map(function (e, t) {
                var n = C(this).val();
                return null == n ? null : C.isArray(n) ? C.map(n, function (e) {
                    return {name: t.name, value: e.replace(an, "\r\n")}
                }) : {name: t.name, value: n.replace(an, "\r\n")}
            }).get()
        }
    }), C.ajaxSettings.xhr = T.ActiveXObject !== undefined ? function () {
        return this.isLocal ? dn() : 8 < g.documentMode ? fn() : /^(get|post|head|put|delete|options)$/i.test(this.type) && fn() || dn()
    } : fn;
    var ln = 0, cn = {}, F = C.ajaxSettings.xhr();

    function fn() {
        try {
            return new T.XMLHttpRequest
        } catch (e) {
        }
    }

    function dn() {
        try {
            return new T.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {
        }
    }

    T.attachEvent && T.attachEvent("onunload", function () {
        for (var e in cn) cn[e](undefined, !0)
    }), y.cors = !!F && "withCredentials" in F, (y.ajax = !!F) && C.ajaxTransport(function (l) {
        var c;
        if (!l.crossDomain || y.cors) return {
            send: function (e, a) {
                var t, s = l.xhr(), u = ++ln;
                if (s.open(l.type, l.url, l["async"], l.username, l.password), l.xhrFields) for (t in l.xhrFields) s[t] = l.xhrFields[t];
                for (t in l.mimeType && s.overrideMimeType && s.overrideMimeType(l.mimeType), l.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) e[t] !== undefined && s.setRequestHeader(t, e[t] + "");
                s.send(l.hasContent && l.data || null), c = function (e, t) {
                    var n, r, i;
                    if (c && (t || 4 === s.readyState)) if (delete cn[u], c = undefined, s.onreadystatechange = C.noop, t) 4 !== s.readyState && s.abort(); else {
                        i = {}, n = s.status, "string" == typeof s.responseText && (i.text = s.responseText);
                        try {
                            r = s.statusText
                        } catch (o) {
                            r = ""
                        }
                        n || !l.isLocal || l.crossDomain ? 1223 === n && (n = 204) : n = i.text ? 200 : 404
                    }
                    i && a(n, r, i, s.getAllResponseHeaders())
                }, l["async"] ? 4 === s.readyState ? T.setTimeout(c) : s.onreadystatechange = cn[u] = c : c()
            }, abort: function () {
                c && c(undefined, !0)
            }
        }
    }), C.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (e) {
                return C.globalEval(e), e
            }
        }
    }), C.ajaxPrefilter("script", function (e) {
        e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), C.ajaxTransport("script", function (t) {
        var r, i;
        if (t.crossDomain) return i = g.head || C("head")[0] || g.documentElement, {
            send: function (e, n) {
                (r = g.createElement("script"))["async"] = !0, t.scriptCharset && (r.charset = t.scriptCharset), r.src = t.url, r.onload = r.onreadystatechange = function (e, t) {
                    !t && r.readyState && !/loaded|complete/.test(r.readyState) || (r.onload = r.onreadystatechange = null, r.parentNode && r.parentNode.removeChild(r), r = null, t) || n(200, "success")
                }, i.insertBefore(r, i.firstChild)
            }, abort: function () {
                r && r.onload(undefined, !0)
            }
        }
    });
    var pn = [], hn = /(=)\?(?=&|$)|\?\?/, gn = (C.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = pn.pop() || C.expando + "_" + Pt++;
            return this[e] = !0, e
        }
    }), C.ajaxPrefilter("json jsonp", function (e, t, n) {
        var r, i, o,
            a = !1 !== e.jsonp && (hn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && hn.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = C.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(hn, "$1" + r) : !1 !== e.jsonp && (e.url += (Bt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
            return o || C.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = T[r], T[r] = function () {
            o = arguments
        }, n.always(function () {
            i === undefined ? C(T).removeProp(r) : T[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, pn.push(r)), o && C.isFunction(i) && i(o[0]), o = i = undefined
        }), "script"
    }), C.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || g;
        var r = J.exec(e), n = !n && [];
        return r ? [t.createElement(r[1])] : (r = Ne([e], t, n), n && n.length && C(n).remove(), C.merge([], r.childNodes))
    }, C.fn.load);

    function mn(e) {
        return C.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }

    return C.fn.load = function (e, t, n) {
        var r, i, o, a, s;
        return "string" != typeof e && gn ? gn.apply(this, arguments) : (a = this, -1 < (s = e.indexOf(" ")) && (r = C.trim(e.slice(s, e.length)), e = e.slice(0, s)), C.isFunction(t) ? (n = t, t = undefined) : t && "object" == typeof t && (i = "POST"), 0 < a.length && C.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, a.html(r ? C("<div>").append(C.parseHTML(e)).find(r) : e)
        }).always(n && function (e, t) {
            a.each(function () {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this)
    }, C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        C.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), C.expr.filters.animated = function (t) {
        return C.grep(C.timers, function (e) {
            return t === e.elem
        }).length
    }, C.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, a, s = C.css(e, "position"), u = C(e), l = {};
            "static" === s && (e.style.position = "relative"), o = u.offset(), r = C.css(e, "top"), a = C.css(e, "left"), s = ("absolute" === s || "fixed" === s) && -1 < C.inArray("auto", [r, a]) ? (i = (s = u.position()).top, s.left) : (i = parseFloat(r) || 0, parseFloat(a) || 0), null != (t = C.isFunction(t) ? t.call(e, n, C.extend({}, o)) : t).top && (l.top = t.top - o.top + i), null != t.left && (l.left = t.left - o.left + s), "using" in t ? t.using.call(e, l) : u.css(l)
        }
    }, C.fn.extend({
        offset: function (t) {
            var e, n, r, i;
            return arguments.length ? t === undefined ? this : this.each(function (e) {
                C.offset.setOffset(this, t, e)
            }) : (n = {
                top: 0,
                left: 0
            }, (i = (r = this[0]) && r.ownerDocument) ? (e = i.documentElement, C.contains(e, r) ? ("undefined" != typeof r.getBoundingClientRect && (n = r.getBoundingClientRect()), r = mn(i), {
                top: n.top + (r.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: n.left + (r.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : n) : void 0)
        }, position: function () {
            var e, t, n, r;
            if (this[0]) return n = {
                top: 0,
                left: 0
            }, r = this[0], "fixed" === C.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), (n = C.nodeName(e[0], "html") ? n : e.offset()).top += C.css(e[0], "borderTopWidth", !0), n.left += C.css(e[0], "borderLeftWidth", !0)), {
                top: t.top - n.top - C.css(r, "marginTop", !0),
                left: t.left - n.left - C.css(r, "marginLeft", !0)
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && !C.nodeName(e, "html") && "static" === C.css(e, "position");) e = e.offsetParent;
                return e || lt
            })
        }
    }), C.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, i) {
        var o = /Y/.test(i);
        C.fn[t] = function (e) {
            return d(this, function (e, t, n) {
                var r = mn(e);
                if (n === undefined) return r ? i in r ? r[i] : r.document.documentElement[t] : e[t];
                r ? r.scrollTo(o ? C(r).scrollLeft() : n, o ? n : C(r).scrollTop()) : e[t] = n
            }, t, e, arguments.length, null)
        }
    }), C.each(["top", "left"], function (e, n) {
        C.cssHooks[n] = ft(y.pixelPosition, function (e, t) {
            if (t) return t = p(e, n), st.test(t) ? C(e).position()[n] + "px" : t
        })
    }), C.each({Height: "height", Width: "width"}, function (o, a) {
        C.each({padding: "inner" + o, content: a, "": "outer" + o}, function (r, e) {
            C.fn[e] = function (e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return d(this, function (e, t, n) {
                    var r;
                    return C.isWindow(e) ? e.document.documentElement["client" + o] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + o], r["scroll" + o], e.body["offset" + o], r["offset" + o], r["client" + o])) : n === undefined ? C.css(e, t, i) : C.style(e, t, n, i)
                }, a, n ? e : undefined, n, null)
            }
        })
    }), C.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), C.fn.size = function () {
        return this.length
    }, C.fn.andSelf = C.fn.addBack, layui.define(function (e) {
        e("jquery", layui.$ = C)
    }), C
});
!function (p) {
    "use strict";
    var m, h, e, n = p.layui && layui.define, d = {
            getPath: (e = document.currentScript ? document.currentScript.src : function () {
                for (var e, t = document.scripts, i = t.length - 1, n = i; 0 < n; n--) if ("interactive" === t[n].readyState) {
                    e = t[n].src;
                    break
                }
                return e || t[i].src
            }(), (p.LAYUI_GLOBAL || {}).layer_dir || e.substring(0, e.lastIndexOf("/") + 1)),
            config: {removeFocus: !0},
            end: {},
            events: {resize: {}},
            minStackIndex: 0,
            minStackArr: [],
            btn: ["&#x786E;&#x5B9A;", "&#x53D6;&#x6D88;"],
            type: ["dialog", "page", "iframe", "loading", "tips"],
            getStyle: function (e, t) {
                e = e.currentStyle || p.getComputedStyle(e, null);
                return e[e.getPropertyValue ? "getPropertyValue" : "getAttribute"](t)
            },
            link: function (e, i, t) {
                var n, a, o, s, l, r;
                g.path && (n = document.getElementsByTagName("head")[0], a = document.createElement("link"), o = ((t = "string" == typeof i ? i : t) || e).replace(/\.|\//g, ""), s = "layuicss-" + o, l = "creating", r = 0, a.rel = "stylesheet", a.href = g.path + e, a.id = s, document.getElementById(s) || n.appendChild(a), "function" == typeof i) && !function c(e) {
                    var t = document.getElementById(s);
                    return 100 < ++r ? p.console && console.error(o + ".css: Invalid") : void (1989 === parseInt(d.getStyle(t, "width")) ? (e === l && t.removeAttribute("lay-status"), t.getAttribute("lay-status") === l ? setTimeout(c, 100) : i()) : (t.setAttribute("lay-status", l), setTimeout(function () {
                        c(l)
                    }, 100)))
                }()
            }
        }, g = {
            v: "3.7.0",
            ie: (e = navigator.userAgent.toLowerCase(), !!(p.ActiveXObject || "ActiveXObject" in p) && ((e.match(/msie\s(\d+)/) || [])[1] || "11")),
            index: p.layer && p.layer.v ? 1e5 : 0,
            path: d.getPath,
            config: function (e, t) {
                return g.cache = d.config = m.extend({}, d.config, e = e || {}), g.path = d.config.path || g.path, "string" == typeof e.extend && (e.extend = [e.extend]), d.config.path && g.ready(), e.extend && (n ? layui.addcss("modules/layer/" + e.extend) : d.link("css/" + e.extend)), this
            },
            ready: function (e) {
                var t = "layer", i = (n ? "modules/" : "css/") + "layer.css?v=" + g.v;
                return n ? layui["layui.all"] ? "function" == typeof e && e() : layui.addcss(i, e, t) : d.link(i, e, t), this
            },
            alert: function (e, t, i) {
                var n = "function" == typeof t;
                return g.open(m.extend({content: e, yes: i = n ? t : i}, n ? {} : t))
            },
            confirm: function (e, t, i, n) {
                var a = "function" == typeof t;
                return a && (n = i, i = t), g.open(m.extend({content: e, btn: d.btn, yes: i, btn2: n}, a ? {} : t))
            },
            msg: function (e, t, i) {
                var n = "function" == typeof t, a = d.config.skin, a = (a ? a + " " + a + "-msg" : "") || "layui-layer-msg",
                    o = u.anim.length - 1;
                return n && (i = t), g.open(m.extend({
                    content: e,
                    time: 3e3,
                    shade: !1,
                    skin: a,
                    title: !1,
                    closeBtn: !1,
                    btn: !1,
                    resize: !1,
                    end: i,
                    removeFocus: !1
                }, n && !d.config.skin ? {
                    skin: a + " layui-layer-hui",
                    anim: o
                } : (-1 !== (t = t || {}).icon && (void 0 !== t.icon || d.config.skin) || (t.skin = a + " " + (t.skin || "layui-layer-hui")), t)))
            },
            load: function (e, t) {
                return g.open(m.extend({type: 3, icon: e || 0, resize: !1, shade: .01, removeFocus: !1}, t))
            },
            tips: function (e, t, i) {
                return g.open(m.extend({
                    type: 4,
                    content: [e, t],
                    closeBtn: !1,
                    time: 3e3,
                    shade: !1,
                    resize: !1,
                    fixed: !1,
                    maxWidth: 260,
                    removeFocus: !1
                }, i))
            }
        }, t = function (e) {
            var t = this, i = function () {
                t.creat()
            };
            t.index = ++g.index, t.config.maxWidth = m(h).width() - 30, t.config = m.extend({}, t.config, d.config, e), document.body ? i() : setTimeout(function () {
                i()
            }, 30)
        },
        u = (t.pt = t.prototype, ["layui-layer", ".layui-layer-title", ".layui-layer-main", ".layui-layer-dialog", "layui-layer-iframe", "layui-layer-content", "layui-layer-btn", "layui-layer-close"]),
        i = (u.anim = {
            0: "layer-anim-00",
            1: "layer-anim-01",
            2: "layer-anim-02",
            3: "layer-anim-03",
            4: "layer-anim-04",
            5: "layer-anim-05",
            6: "layer-anim-06",
            slideDown: "layer-anim-slide-down",
            slideLeft: "layer-anim-slide-left",
            slideUp: "layer-anim-slide-up",
            slideRight: "layer-anim-slide-right"
        }, u.SHADE = "layui-layer-shade", u.MOVE = "layui-layer-move", t.pt.config = {
            type: 0,
            shade: .3,
            fixed: !0,
            move: u[1],
            title: "&#x4FE1;&#x606F;",
            offset: "auto",
            area: "auto",
            closeBtn: 1,
            icon: -1,
            time: 0,
            zIndex: 19891014,
            maxWidth: 360,
            anim: 0,
            isOutAnim: !0,
            minStack: !0,
            moveType: 1,
            resize: !0,
            scrollbar: !0,
            tips: 2
        }, t.pt.vessel = function (e, t) {
            var i, n = this.index, a = this.config, o = a.zIndex + n, s = "object" == typeof a.title,
                l = a.maxmin && (1 === a.type || 2 === a.type),
                s = a.title ? '<div class="layui-layer-title" style="' + (s ? a.title[1] : "") + '">' + (s ? a.title[0] : a.title) + "</div>" : "";
            return a.zIndex = o, t([a.shade ? '<div class="' + u.SHADE + '" id="' + u.SHADE + n + '" times="' + n + '" style="z-index:' + (o - 1) + '; "></div>' : "", '<div class="' + u[0] + " layui-layer-" + d.type[a.type] + (0 != a.type && 2 != a.type || a.shade ? "" : " layui-layer-border") + " " + (a.skin || "") + '" id="' + u[0] + n + '" type="' + d.type[a.type] + '" times="' + n + '" showtime="' + a.time + '" conType="' + (e ? "object" : "string") + '" style="z-index: ' + o + "; width:" + a.area[0] + ";height:" + a.area[1] + ";position:" + (a.fixed ? "fixed;" : "absolute;") + '">' + (e && 2 != a.type ? "" : s) + "<div" + (a.id ? ' id="' + a.id + '"' : "") + ' class="layui-layer-content' + (0 == a.type && -1 !== a.icon ? " layui-layer-padding" : "") + (3 == a.type ? " layui-layer-loading" + a.icon : "") + '">' + (n = ["layui-icon-tips", "layui-icon-success", "layui-icon-error", "layui-icon-question", "layui-icon-lock", "layui-icon-face-cry", "layui-icon-face-smile"], o = "layui-anim layui-anim-rotate layui-anim-loop", 0 == a.type && -1 !== a.icon ? '<i class="layui-layer-face layui-icon ' + ((i = 16 == a.icon ? "layui-icon layui-icon-loading " + o : i) || n[a.icon] || n[0]) + '"></i>' : 3 == a.type ? (i = ["layui-icon-loading", "layui-icon-loading-1"], 2 == a.icon ? '<div class="layui-layer-loading-2 ' + o + '"></div>' : '<i class="layui-layer-loading-icon layui-icon ' + (i[a.icon] || i[0]) + " " + o + '"></i>') : "") + ((1 != a.type || !e) && a.content || "") + '</div><div class="layui-layer-setwin">' + (n = [], l && (n.push('<span class="layui-layer-min"></span>'), n.push('<span class="layui-layer-max"></span>')), a.closeBtn && n.push('<span class="layui-icon layui-icon-close ' + [u[7], u[7] + (a.title ? a.closeBtn : 4 == a.type ? "1" : "2")].join(" ") + '"></span>'), n.join("")) + "</div>" + (a.btn ? function () {
                var e = "";
                "string" == typeof a.btn && (a.btn = [a.btn]);
                for (var t, i = 0, n = a.btn.length; i < n; i++) e += '<a class="' + u[6] + i + '">' + a.btn[i] + "</a>";
                return '<div class="' + (t = [u[6]], a.btnAlign && t.push(u[6] + "-" + a.btnAlign), t.join(" ")) + '">' + e + "</div>"
            }() : "") + (a.resize ? '<span class="layui-layer-resize"></span>' : "") + "</div>"], s, m('<div class="' + u.MOVE + '" id="' + u.MOVE + '"></div>')), this
        }, t.pt.creat = function () {
            var e, t, i, n, a, o = this, s = o.config, l = o.index, r = "object" == typeof (f = s.content),
                c = m("body");
            if (s.id && m("." + u[0]).find("#" + s.id)[0]) e = m("#" + s.id).closest("." + u[0]), t = e.attr("times"), i = e.data("config"), n = m("#" + u.SHADE + t), "min" === (e.data("maxminStatus") || {}) ? g.restore(t) : i.hideOnClose && (n.show(), e.show()); else {
                switch (s.removeFocus && document.activeElement.blur(), "string" == typeof s.area && (s.area = "auto" === s.area ? ["", ""] : [s.area, ""]), s.shift && (s.anim = s.shift), 6 == g.ie && (s.fixed = !1), s.type) {
                    case 0:
                        s.btn = "btn" in s ? s.btn : d.btn[0], g.closeAll("dialog");
                        break;
                    case 2:
                        var f = s.content = r ? s.content : [s.content || "", "auto"];
                        s.content = '<iframe scrolling="' + (s.content[1] || "auto") + '" allowtransparency="true" id="' + u[4] + l + '" name="' + u[4] + l + '" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="' + s.content[0] + '"></iframe>';
                        break;
                    case 3:
                        delete s.title, delete s.closeBtn, -1 === s.icon && s.icon, g.closeAll("loading");
                        break;
                    case 4:
                        r || (s.content = [s.content, "body"]), s.follow = s.content[1], s.content = s.content[0] + '<i class="layui-layer-TipsG"></i>', delete s.title, s.tips = "object" == typeof s.tips ? s.tips : [s.tips, !0], s.tipsMore || g.closeAll("tips")
                }
                o.vessel(r, function (e, t, i) {
                    c.append(e[0]), r ? 2 == s.type || 4 == s.type ? m("body").append(e[1]) : f.parents("." + u[0])[0] || (f.data("display", f.css("display")).show().addClass("layui-layer-wrap").wrap(e[1]), m("#" + u[0] + l).find("." + u[5]).before(t)) : c.append(e[1]), m("#" + u.MOVE)[0] || c.append(d.moveElem = i), o.layero = m("#" + u[0] + l), o.shadeo = m("#" + u.SHADE + l), s.scrollbar || d.setScrollbar(l)
                }).auto(l), o.shadeo.css({
                    "background-color": s.shade[1] || "#000",
                    opacity: s.shade[0] || s.shade
                }), 2 == s.type && 6 == g.ie && o.layero.find("iframe").attr("src", f[0]), 4 == s.type ? o.tips() : (o.offset(), parseInt(d.getStyle(document.getElementById(u.MOVE), "z-index")) || (o.layero.css("visibility", "hidden"), g.ready(function () {
                    o.offset(), o.layero.css("visibility", "visible")
                }))), !s.fixed || d.events.resize[o.index] || (d.events.resize[o.index] = function () {
                    o.resize()
                }, h.on("resize", d.events.resize[o.index])), s.time <= 0 || setTimeout(function () {
                    g.close(o.index)
                }, s.time), o.move().callback(), u.anim[s.anim] && (a = "layer-anim " + u.anim[s.anim], o.layero.addClass(a).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                    m(this).removeClass(a)
                })), o.layero.data("config", s)
            }
        }, t.pt.resize = function () {
            var e = this, t = e.config;
            e.offset(), (/^\d+%$/.test(t.area[0]) || /^\d+%$/.test(t.area[1])) && e.auto(e.index), 4 == t.type && e.tips()
        }, t.pt.auto = function (e) {
            var t = this.config, i = m("#" + u[0] + e),
                n = ("" === t.area[0] && 0 < t.maxWidth && (g.ie && g.ie < 8 && t.btn && i.width(i.innerWidth()), i.outerWidth() > t.maxWidth) && i.width(t.maxWidth), [i.innerWidth(), i.innerHeight()]),
                a = i.find(u[1]).outerHeight() || 0, o = i.find("." + u[6]).outerHeight() || 0, e = function (e) {
                    (e = i.find(e)).height(n[1] - a - o - 2 * (0 | parseFloat(e.css("padding-top"))))
                };
            return 2 === t.type ? e("iframe") : "" === t.area[1] ? 0 < t.maxHeight && i.outerHeight() > t.maxHeight ? (n[1] = t.maxHeight, e("." + u[5])) : t.fixed && n[1] >= h.height() && (n[1] = h.height(), e("." + u[5])) : e("." + u[5]), this
        }, t.pt.offset = function () {
            var e = this, t = e.config, i = e.layero, n = [i.outerWidth(), i.outerHeight()],
                a = "object" == typeof t.offset;
            e.offsetTop = (h.height() - n[1]) / 2, e.offsetLeft = (h.width() - n[0]) / 2, a ? (e.offsetTop = t.offset[0], e.offsetLeft = t.offset[1] || e.offsetLeft) : "auto" !== t.offset && ("t" === t.offset ? e.offsetTop = 0 : "r" === t.offset ? e.offsetLeft = h.width() - n[0] : "b" === t.offset ? e.offsetTop = h.height() - n[1] : "l" === t.offset ? e.offsetLeft = 0 : "lt" === t.offset ? (e.offsetTop = 0, e.offsetLeft = 0) : "lb" === t.offset ? (e.offsetTop = h.height() - n[1], e.offsetLeft = 0) : "rt" === t.offset ? (e.offsetTop = 0, e.offsetLeft = h.width() - n[0]) : "rb" === t.offset ? (e.offsetTop = h.height() - n[1], e.offsetLeft = h.width() - n[0]) : e.offsetTop = t.offset), t.fixed || (e.offsetTop = /%$/.test(e.offsetTop) ? h.height() * parseFloat(e.offsetTop) / 100 : parseFloat(e.offsetTop), e.offsetLeft = /%$/.test(e.offsetLeft) ? h.width() * parseFloat(e.offsetLeft) / 100 : parseFloat(e.offsetLeft), e.offsetTop += h.scrollTop(), e.offsetLeft += h.scrollLeft()), "min" === i.data("maxminStatus") && (e.offsetTop = h.height() - (i.find(u[1]).outerHeight() || 0), e.offsetLeft = i.css("left")), i.css({
                top: e.offsetTop,
                left: e.offsetLeft
            })
        }, t.pt.tips = function () {
            var e = this.config, t = this.layero, i = [t.outerWidth(), t.outerHeight()], n = m(e.follow), a = {
                width: (n = n[0] ? n : m("body")).outerWidth(),
                height: n.outerHeight(),
                top: n.offset().top,
                left: n.offset().left
            }, o = t.find(".layui-layer-TipsG"), n = e.tips[0];
            e.tips[1] || o.remove(), a.autoLeft = function () {
                0 < a.left + i[0] - h.width() ? (a.tipLeft = a.left + a.width - i[0], o.css({
                    right: 12,
                    left: "auto"
                })) : a.tipLeft = a.left
            }, a.where = [function () {
                a.autoLeft(), a.tipTop = a.top - i[1] - 10, o.removeClass("layui-layer-TipsB").addClass("layui-layer-TipsT").css("border-right-color", e.tips[1])
            }, function () {
                a.tipLeft = a.left + a.width + 10, a.tipTop = a.top - (.75 * a.height < 21 ? 21 - .5 * a.height : 0), a.tipTop = Math.max(a.tipTop, 0), o.removeClass("layui-layer-TipsL").addClass("layui-layer-TipsR").css("border-bottom-color", e.tips[1])
            }, function () {
                a.autoLeft(), a.tipTop = a.top + a.height + 10, o.removeClass("layui-layer-TipsT").addClass("layui-layer-TipsB").css("border-right-color", e.tips[1])
            }, function () {
                a.tipLeft = a.left - i[0] - 10, a.tipTop = a.top - (.75 * a.height < 21 ? 21 - .5 * a.height : 0), a.tipTop = Math.max(a.tipTop, 0), o.removeClass("layui-layer-TipsR").addClass("layui-layer-TipsL").css("border-bottom-color", e.tips[1])
            }], a.where[n - 1](), 1 === n ? a.top - (h.scrollTop() + i[1] + 16) < 0 && a.where[2]() : 2 === n ? 0 < h.width() - (a.left + a.width + i[0] + 16) || a.where[3]() : 3 === n ? 0 < a.top - h.scrollTop() + a.height + i[1] + 16 - h.height() && a.where[0]() : 4 === n && 0 < i[0] + 16 - a.left && a.where[1](), t.find("." + u[5]).css({
                "background-color": e.tips[1],
                "padding-right": e.closeBtn ? "30px" : ""
            }), t.css({left: a.tipLeft - (e.fixed ? h.scrollLeft() : 0), top: a.tipTop - (e.fixed ? h.scrollTop() : 0)})
        }, t.pt.move = function () {
            var n = this, a = n.config, e = m(document), o = n.layero, r = ["LAY_MOVE_DICT", "LAY_RESIZE_DICT"],
                t = o.find(a.move), i = o.find(".layui-layer-resize");
            return a.move && t.css("cursor", "move"), t.on("mousedown", function (e) {
                var t, i;
                e.button || (t = m(this), i = {}, a.move && (i.layero = o, i.config = a, i.offset = [e.clientX - parseFloat(o.css("left")), e.clientY - parseFloat(o.css("top"))], t.data(r[0], i), d.eventMoveElem = t, d.moveElem.css("cursor", "move").show()), e.preventDefault())
            }), i.on("mousedown", function (e) {
                var t = m(this), i = {};
                a.resize && (i.layero = o, i.config = a, i.offset = [e.clientX, e.clientY], i.index = n.index, i.area = [o.outerWidth(), o.outerHeight()], t.data(r[1], i), d.eventResizeElem = t, d.moveElem.css("cursor", "se-resize").show()), e.preventDefault()
            }), d.docEvent || (e.on("mousemove", function (e) {
                var t, i, n, a, o, s, l;
                d.eventMoveElem && (t = (a = d.eventMoveElem.data(r[0]) || {}).layero, o = a.config, s = e.clientX - a.offset[0], l = e.clientY - a.offset[1], i = "fixed" === t.css("position"), e.preventDefault(), a.stX = i ? 0 : h.scrollLeft(), a.stY = i ? 0 : h.scrollTop(), o.moveOut || (i = h.width() - t.outerWidth() + a.stX, n = h.height() - t.outerHeight() + a.stY, i < (s = s < a.stX ? a.stX : s) && (s = i), n < (l = l < a.stY ? a.stY : l) && (l = n)), t.css({
                    left: s,
                    top: l
                })), d.eventResizeElem && (o = (a = d.eventResizeElem.data(r[1]) || {}).config, s = e.clientX - a.offset[0], l = e.clientY - a.offset[1], e.preventDefault(), g.style(a.index, {
                    width: a.area[0] + s,
                    height: a.area[1] + l
                }), o.resizing) && o.resizing(a.layero)
            }).on("mouseup", function (e) {
                var t, i;
                d.eventMoveElem && (i = (t = d.eventMoveElem.data(r[0]) || {}).config, d.eventMoveElem.removeData(r[0]), delete d.eventMoveElem, d.moveElem.hide(), i.moveEnd) && i.moveEnd(t.layero), d.eventResizeElem && (d.eventResizeElem.removeData(r[1]), delete d.eventResizeElem, d.moveElem.hide())
            }), d.docEvent = !0), n
        }, t.pt.callback = function () {
            var t = this, i = t.layero, n = t.config;
            t.openLayer(), n.success && (2 == n.type ? i.find("iframe").on("load", function () {
                n.success(i, t.index, t)
            }) : n.success(i, t.index, t)), 6 == g.ie && t.IE6(i), i.find("." + u[6]).children("a").on("click", function () {
                var e = m(this).index();
                0 === e ? n.yes ? n.yes(t.index, i, t) : n.btn1 ? n.btn1(t.index, i, t) : g.close(t.index) : !1 !== (n["btn" + (e + 1)] && n["btn" + (e + 1)](t.index, i, t)) && g.close(t.index)
            }), i.find("." + u[7]).on("click", function () {
                !1 !== (n.cancel && n.cancel(t.index, i, t)) && g.close(t.index)
            }), n.shadeClose && t.shadeo.on("click", function () {
                g.close(t.index)
            }), i.find(".layui-layer-min").on("click", function () {
                !1 !== (n.min && n.min(i, t.index, t)) && g.min(t.index, n)
            }), i.find(".layui-layer-max").on("click", function () {
                m(this).hasClass("layui-layer-maxmin") ? (g.restore(t.index), n.restore && n.restore(i, t.index, t)) : (g.full(t.index, n), setTimeout(function () {
                    n.full && n.full(i, t.index, t)
                }, 100))
            }), n.end && (d.end[t.index] = n.end)
        }, d.reselect = function () {
            m.each(m("select"), function (e, t) {
                var i = m(this);
                i.parents("." + u[0])[0] || 1 == i.attr("layer") && m("." + u[0]).length < 1 && i.removeAttr("layer").show()
            })
        }, t.pt.IE6 = function (e) {
            m("select").each(function (e, t) {
                var i = m(this);
                i.parents("." + u[0])[0] || "none" !== i.css("display") && i.attr({layer: "1"}).hide()
            })
        }, t.pt.openLayer = function () {
            g.zIndex = this.config.zIndex, g.setTop = function (e) {
                return g.zIndex = parseInt(e[0].style.zIndex), e.on("mousedown", function () {
                    g.zIndex++, e.css("z-index", g.zIndex + 1)
                }), g.zIndex
            }
        }, d.record = function (e) {
            if (!e[0]) return p.console && console.error("index error");
            var t = [e[0].style.width || e.width(), e[0].style.height || e.height(), e.position().top, e.position().left + parseFloat(e.css("margin-left"))];
            e.find(".layui-layer-max").addClass("layui-layer-maxmin"), e.attr({area: t})
        }, d.setScrollbar = function (e) {
            u.html.css("overflow", "hidden").attr("layer-full", e)
        }, d.restScrollbar = function (e) {
            u.html.attr("layer-full") == e && (u.html[0].style[u.html[0].style.removeProperty ? "removeProperty" : "removeAttribute"]("overflow"), u.html.removeAttr("layer-full"))
        }, (p.layer = g).getChildFrame = function (e, t) {
            return t = t || m("." + u[4]).attr("times"), m("#" + u[0] + t).find("iframe").contents().find(e)
        }, g.getFrameIndex = function (e) {
            return m("#" + e).parents("." + u[4]).attr("times")
        }, g.iframeAuto = function (e) {
            var t, i, n;
            e && (t = g.getChildFrame("html", e).outerHeight(), i = (e = m("#" + u[0] + e)).find(u[1]).outerHeight() || 0, n = e.find("." + u[6]).outerHeight() || 0, e.css({height: t + i + n}), e.find("iframe").css({height: t}))
        }, g.iframeSrc = function (e, t) {
            m("#" + u[0] + e).find("iframe").attr("src", t)
        }, g.style = function (e, t, i) {
            var e = m("#" + u[0] + e), n = e.find(".layui-layer-content"), a = e.attr("type"),
                o = e.find(u[1]).outerHeight() || 0, s = e.find("." + u[6]).outerHeight() || 0;
            e.attr("minLeft");
            a !== d.type[3] && a !== d.type[4] && (i || (parseFloat(t.width) <= 260 && (t.width = 260), parseFloat(t.height) - o - s <= 64 && (t.height = 64 + o + s)), e.css(t), s = e.find("." + u[6]).outerHeight() || 0, a === d.type[2] ? e.find("iframe").css({height: ("number" == typeof t.height ? t.height : e.height()) - o - s}) : n.css({height: ("number" == typeof t.height ? t.height : e.height()) - o - s - parseFloat(n.css("padding-top")) - parseFloat(n.css("padding-bottom"))}))
        }, g.min = function (e, t) {
            var i, n, a, o, s, l, r = m("#" + u[0] + e), c = r.data("maxminStatus");
            "min" !== c && ("max" === c && g.restore(e), r.data("maxminStatus", "min"), t = t || r.data("config") || {}, c = m("#" + u.SHADE + e), i = r.find(".layui-layer-min"), n = r.find(u[1]).outerHeight() || 0, o = (a = "string" == typeof (o = r.attr("minLeft"))) ? o : 181 * d.minStackIndex + "px", s = r.css("position"), l = {
                width: 180,
                height: n,
                position: "fixed",
                overflow: "hidden"
            }, d.record(r), 0 < d.minStackArr.length && (o = d.minStackArr[0], d.minStackArr.shift()), parseFloat(o) + 180 > h.width() && (o = h.width() - 180 - (d.minStackArr.edgeIndex = d.minStackArr.edgeIndex || 0, d.minStackArr.edgeIndex += 3)) < 0 && (o = 0), t.minStack && (l.left = o, l.top = h.height() - n, a || d.minStackIndex++, r.attr("minLeft", o)), r.attr("position", s), g.style(e, l, !0), i.hide(), "page" === r.attr("type") && r.find(u[4]).hide(), d.restScrollbar(e), c.hide())
        }, g.restore = function (e) {
            var t = m("#" + u[0] + e), i = m("#" + u.SHADE + e), n = t.attr("area").split(","), a = t.attr("type"),
                o = t.data("config") || {};
            t.removeData("maxminStatus"), g.style(e, {
                width: n[0],
                height: n[1],
                top: parseFloat(n[2]),
                left: parseFloat(n[3]),
                position: t.attr("position"),
                overflow: "visible"
            }, !0), t.find(".layui-layer-max").removeClass("layui-layer-maxmin"), t.find(".layui-layer-min").show(), "page" === a && t.find(u[4]).show(), o.scrollbar ? d.restScrollbar(e) : d.setScrollbar(e), i.show()
        }, g.full = function (t) {
            var i = m("#" + u[0] + t), e = i.data("maxminStatus");
            "max" !== e && ("min" === e && g.restore(t), i.data("maxminStatus", "max"), d.record(i), u.html.attr("layer-full") || d.setScrollbar(t), setTimeout(function () {
                var e = "fixed" === i.css("position");
                g.style(t, {
                    top: e ? 0 : h.scrollTop(),
                    left: e ? 0 : h.scrollLeft(),
                    width: "100%",
                    height: "100%"
                }, !0), i.find(".layui-layer-min").hide()
            }, 100))
        }, g.title = function (e, t) {
            m("#" + u[0] + (t || g.index)).find(u[1]).html(e)
        }, g.close = function (o, s) {
            var l, e,
                r = (t = m("." + u[0]).children("#" + o).closest("." + u[0]))[0] ? (o = t.attr("times"), t) : m("#" + u[0] + o),
                c = r.attr("type"), t = r.data("config") || {}, f = t.id && t.hideOnClose;
            r[0] && (l = {
                slideDown: "layer-anim-slide-down-out",
                slideLeft: "layer-anim-slide-left-out",
                slideUp: "layer-anim-slide-up-out",
                slideRight: "layer-anim-slide-right-out"
            }[t.anim] || "layer-anim-close", e = function () {
                var e = "layui-layer-wrap";
                if (f) return r.removeClass("layer-anim " + l), r.hide();
                if (c === d.type[1] && "object" === r.attr("conType")) {
                    r.children(":not(." + u[5] + ")").remove();
                    for (var t = r.find("." + e), i = 0; i < 2; i++) t.unwrap();
                    t.css("display", t.data("display")).removeClass(e)
                } else {
                    if (c === d.type[2]) try {
                        var n = m("#" + u[4] + o)[0];
                        n.contentWindow.document.write(""), n.contentWindow.close(), r.find("." + u[5])[0].removeChild(n)
                    } catch (a) {
                    }
                    r[0].innerHTML = "", r.remove()
                }
                "function" == typeof d.end[o] && d.end[o](), delete d.end[o], "function" == typeof s && s(), d.events.resize[o] && (h.off("resize", d.events.resize[o]), delete d.events.resize[o])
            }, m("#" + u.SHADE + o)[f ? "hide" : "remove"](), t.isOutAnim && r.addClass("layer-anim " + l), 6 == g.ie && d.reselect(), d.restScrollbar(o), "string" == typeof r.attr("minLeft") && (d.minStackIndex--, d.minStackArr.push(r.attr("minLeft"))), g.ie && g.ie < 10 || !t.isOutAnim ? e() : setTimeout(function () {
                e()
            }, 200))
        }, g.closeAll = function (n, a) {
            "function" == typeof n && (a = n, n = null);
            var o = m("." + u[0]);
            m.each(o, function (e) {
                var t = m(this), i = n ? t.attr("type") === n : 1;
                i && g.close(t.attr("times"), e === o.length - 1 ? a : null)
            }), 0 === o.length && "function" == typeof a && a()
        }, g.closeLast = function (e, t) {
            g.close(m(".layui-layer-" + (e = e || "page") + ":last").attr("times"), t)
        }, g.cache || {}), v = function (e) {
            return i.skin ? " " + i.skin + " " + i.skin + "-" + e : ""
        };
    g.prompt = function (i, n) {
        var e = "", t = "";
        "function" == typeof (i = i || {}) && (n = i), i.area && (e = 'style="width: ' + (o = i.area)[0] + "; height: " + o[1] + ';"', delete i.area), i.placeholder && (t = ' placeholder="' + i.placeholder + '"');
        var a,
            o = 2 == i.formType ? '<textarea class="layui-layer-input"' + e + t + "></textarea>" : '<input type="' + (1 == i.formType ? "password" : "text") + '" class="layui-layer-input"' + t + ">",
            s = i.success;
        return delete i.success, g.open(m.extend({
            type: 1,
            btn: ["&#x786E;&#x5B9A;", "&#x53D6;&#x6D88;"],
            content: o,
            skin: "layui-layer-prompt" + v("prompt"),
            maxWidth: h.width(),
            success: function (e) {
                (a = e.find(".layui-layer-input")).val(i.value || "").focus(), "function" == typeof s && s(e)
            },
            resize: !1,
            yes: function (e) {
                var t = a.val();
                t.length > (i.maxlength || 500) ? g.tips("&#x6700;&#x591A;&#x8F93;&#x5165;" + (i.maxlength || 500) + "&#x4E2A;&#x5B57;&#x6570;", a, {tips: 1}) : n && n(t, e, a)
            }
        }, i))
    }, g.tab = function (n) {
        var a = (n = n || {}).tab || {}, o = "layui-this", s = n.success;
        return delete n.success, g.open(m.extend({
            type: 1,
            skin: "layui-layer-tab" + v("tab"),
            resize: !1,
            title: function () {
                var e = a.length, t = 1, i = "";
                if (0 < e) for (i = '<span class="' + o + '">' + a[0].title + "</span>"; t < e; t++) i += "<span>" + a[t].title + "</span>";
                return i
            }(),
            content: '<ul class="layui-layer-tabmain">' + function () {
                var e = a.length, t = 1, i = "";
                if (0 < e) for (i = '<li class="layui-layer-tabli ' + o + '">' + (a[0].content || "no content") + "</li>"; t < e; t++) i += '<li class="layui-layer-tabli">' + (a[t].content || "no  content") + "</li>";
                return i
            }() + "</ul>",
            success: function (e) {
                var t = e.find(".layui-layer-title").children(), i = e.find(".layui-layer-tabmain").children();
                t.on("mousedown", function (e) {
                    e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0;
                    var e = m(this), t = e.index();
                    e.addClass(o).siblings().removeClass(o), i.eq(t).show().siblings().hide(), "function" == typeof n.change && n.change(t)
                }), "function" == typeof s && s(e)
            }
        }, n))
    }, g.photos = function (n, e, a) {
        var s = {};
        if ((n = m.extend(!0, {toolbar: !0, footer: !0}, n)).photos) {
            var t = !("string" == typeof n.photos || n.photos instanceof m), i = t ? n.photos : {}, o = i.data || [],
                l = i.start || 0, r = n.success;
            if (s.imgIndex = 1 + (0 | l), n.img = n.img || "img", delete n.success, t) {
                if (0 === o.length) return g.msg("&#x6CA1;&#x6709;&#x56FE;&#x7247;")
            } else {
                var c = m(n.photos), f = function () {
                    o = [], c.find(n.img).each(function (e) {
                        var t = m(this);
                        t.attr("layer-index", e), o.push({
                            alt: t.attr("alt"),
                            pid: t.attr("layer-pid"),
                            src: t.attr("lay-src") || t.attr("layer-src") || t.attr("src"),
                            thumb: t.attr("src")
                        })
                    })
                };
                if (f(), 0 === o.length) return;
                if (e || c.on("click", n.img, function () {
                    f();
                    var e = m(this).attr("layer-index");
                    g.photos(m.extend(n, {photos: {start: e, data: o, tab: n.tab}, full: n.full}), !0)
                }), !e) return
            }
            s.imgprev = function (e) {
                s.imgIndex--, s.imgIndex < 1 && (s.imgIndex = o.length), s.tabimg(e)
            }, s.imgnext = function (e, t) {
                s.imgIndex++, s.imgIndex > o.length && (s.imgIndex = 1, t) || s.tabimg(e)
            }, s.keyup = function (e) {
                var t;
                s.end || (t = e.keyCode, e.preventDefault(), 37 === t ? s.imgprev(!0) : 39 === t ? s.imgnext(!0) : 27 === t && g.close(s.index))
            }, s.tabimg = function (e) {
                if (!(o.length <= 1)) return i.start = s.imgIndex - 1, g.close(s.index), g.photos(n, !0, e)
            }, s.isNumber = function (e) {
                return "number" == typeof e && !isNaN(e)
            }, s.image = {}, s.getTransform = function (e) {
                var t = [], i = e.rotate, n = e.scaleX, e = e.scale;
                return s.isNumber(i) && 0 !== i && t.push("rotate(" + i + "deg)"), s.isNumber(n) && 1 !== n && t.push("scaleX(" + n + ")"), s.isNumber(e) && t.push("scale(" + e + ")"), t.length ? t.join(" ") : "none"
            }, s.event = function (e, i, n) {
                var a, o;
                s.main.find(".layui-layer-photos-prev").on("click", function (e) {
                    e.preventDefault(), s.imgprev(!0)
                }), s.main.find(".layui-layer-photos-next").on("click", function (e) {
                    e.preventDefault(), s.imgnext(!0)
                }), m(document).on("keyup", s.keyup), e.off("click").on("click", "*[toolbar-event]", function () {
                    var e = m(this);
                    switch (e.attr("toolbar-event")) {
                        case"rotate":
                            s.image.rotate = ((s.image.rotate || 0) + Number(e.attr("data-option"))) % 360, s.imgElem.css({transform: s.getTransform(s.image)});
                            break;
                        case"scalex":
                            s.image.scaleX = -1 === s.image.scaleX ? 1 : -1, s.imgElem.css({transform: s.getTransform(s.image)});
                            break;
                        case"zoom":
                            var t = Number(e.attr("data-option"));
                            s.image.scale = (s.image.scale || 1) + t, t < 0 && s.image.scale < 0 - t && (s.image.scale = 0 - t), s.imgElem.css({transform: s.getTransform(s.image)});
                            break;
                        case"reset":
                            s.image.scaleX = 1, s.image.scale = 1, s.image.rotate = 0, s.imgElem.css({transform: "none"});
                            break;
                        case"close":
                            g.close(i)
                    }
                    n.offset(), n.auto(i)
                }), s.main.on("mousewheel DOMMouseScroll", function (e) {
                    var t = e.originalEvent.wheelDelta || -e.originalEvent.detail,
                        i = s.main.find('[toolbar-event="zoom"]');
                    (0 < t ? i.eq(0) : i.eq(1)).trigger("click"), e.preventDefault()
                }), (p.layui || p.lay) && (a = p.layui.lay || p.lay, o = function (e, t) {
                    var i = Date.now() - t.timeStart, i = t.distanceX / i, n = h.width() / 3;
                    (.25 < Math.abs(i) || Math.abs(t.distanceX) > n) && ("left" === t.direction ? s.imgnext(!0) : "right" === t.direction && s.imgprev(!0))
                }, m.each([n.shadeo, s.main], function (e, t) {
                    a.touchSwipe(t, {onTouchEnd: o})
                }))
            }, s.loadi = g.load(1, {shade: !("shade" in n) && .9, scrollbar: !1});
            var t = o[l].src, d = function (e) {
                g.close(s.loadi);
                var t, i = o[l].alt || "";
                a && (n.anim = -1), s.index = g.open(m.extend({
                    type: 1,
                    id: "layui-layer-photos",
                    area: (e = [e.width, e.height], t = [m(p).width() - 100, m(p).height() - 100], !n.full && (t[0] < e[0] || t[1] < e[1]) && ((t = [e[0] / t[0], e[1] / t[1]])[1] < t[0] ? (e[0] = e[0] / t[0], e[1] = e[1] / t[0]) : t[0] < t[1] && (e[0] = e[0] / t[1], e[1] = e[1] / t[1])), [e[0] + "px", e[1] + "px"]),
                    title: !1,
                    shade: .9,
                    shadeClose: !0,
                    closeBtn: !1,
                    move: ".layer-layer-photos-main img",
                    moveType: 1,
                    scrollbar: !1,
                    moveOut: !0,
                    anim: 5,
                    isOutAnim: !1,
                    skin: "layui-layer-photos" + v("photos"),
                    content: '<div class="layer-layer-photos-main"><img src="' + o[l].src + '" alt="' + i + '" layer-pid="' + (o[l].pid || "") + '">' + (t = ['<div class="layui-layer-photos-pointer">'], 1 < o.length && t.push(['<div class="layer-layer-photos-page">', '<span class="layui-icon layui-icon-left layui-layer-photos-prev"></span>', '<span class="layui-icon layui-icon-right layui-layer-photos-next"></span>', "</div>"].join("")), n.toolbar && t.push(['<div class="layui-layer-photos-toolbar layui-layer-photos-header">', '<span toolbar-event="rotate" data-option="90" title="\u65cb\u8f6c"><i class="layui-icon layui-icon-refresh"></i></span>', '<span toolbar-event="scalex" title="\u53d8\u6362"><i class="layui-icon layui-icon-slider"></i></span>', '<span toolbar-event="zoom" data-option="0.1" title="\u653e\u5927"><i class="layui-icon layui-icon-add-circle"></i></span>', '<span toolbar-event="zoom" data-option="-0.1" title="\u7f29\u5c0f"><i class="layui-icon layui-icon-reduce-circle"></i></span>', '<span toolbar-event="reset" title="\u8fd8\u539f"><i class="layui-icon layui-icon-refresh-1"></i></span>', '<span toolbar-event="close" title="\u5173\u95ed"><i class="layui-icon layui-icon-close"></i></span>', "</div>"].join("")), n.footer && t.push(['<div class="layui-layer-photos-toolbar layui-layer-photos-footer">', "<h3>" + i + "</h3>", "<em>" + s.imgIndex + " / " + o.length + "</em>", '<a href="' + o[l].src + '" target="_blank">\u67e5\u770b\u539f\u56fe</a>', "</div>"].join("")), t.push("</div>"), t.join("")) + "</div>",
                    success: function (e, t, i) {
                        s.main = e.find(".layer-layer-photos-main"), s.footer = e.find(".layui-layer-photos-footer"), s.imgElem = s.main.children("img"), s.event(e, t, i), n.tab && n.tab(o[l], e), "function" == typeof r && r(e)
                    },
                    end: function () {
                        s.end = !0, m(document).off("keyup", s.keyup)
                    }
                }, n))
            }, u = function () {
                g.close(s.loadi), g.msg("&#x5F53;&#x524D;&#x56FE;&#x7247;&#x5730;&#x5740;&#x5F02;&#x5E38;<br>&#x662F;&#x5426;&#x7EE7;&#x7EED;&#x67E5;&#x770B;&#x4E0B;&#x4E00;&#x5F20;&#xFF1F;", {
                    time: 3e4,
                    btn: ["&#x4E0B;&#x4E00;&#x5F20;", "&#x4E0D;&#x770B;&#x4E86;"],
                    yes: function () {
                        1 < o.length && s.imgnext(!0, !0)
                    }
                })
            }, y = new Image;
            (y.src = t, y.complete) ? d(y) : (y.onload = function () {
                y.onload = null, d(y)
            }, y.onerror = function (e) {
                y.onerror = null, u(e)
            })
        }
    }, d.run = function (e) {
        h = (m = e)(p);
        var e = navigator.userAgent.toLowerCase(), e = /android|iphone|ipod|ipad|ios/.test(e), n = m(p);
        e && m.each({Height: "height", Width: "width"}, function (e, t) {
            var i = "inner" + e;
            h[t] = function () {
                return i in p ? p[i] : n[t]()
            }
        }), u.html = m("html"), g.open = function (e) {
            return new t(e).index
        }
    }, p.layui && layui.define ? (g.ready(), layui.define(["jquery", "lay"], function (e) {
        g.path = layui.cache.dir, d.run(layui.$), e("layer", p.layer = g)
    })) : "function" == typeof define && define.amd ? define(["jquery"], function () {
        return d.run(p.jQuery), g
    }) : (g.ready(), d.run(p.jQuery))
}(window);
layui.define("jquery", function (t) {
    "use strict";
    var s = layui.$, p = layui.hint(), e = {
        fixbar: function (i) {
            var o, t, e, n, r = "layui-fixbar", a = s(document), c = (i = s.extend(!0, {
                    target: "body",
                    bars: [],
                    "default": !0,
                    margin: 160,
                    duration: 320
                }, i), s(i.target)), u = i.scroll ? s(i.scroll) : s("body" === i.target ? a : c),
                l = (i["default"] && (i.bar1 && i.bars.push({
                    type: "bar1",
                    icon: "layui-icon-chat"
                }), i.bar2 && i.bars.push({type: "bar2", icon: "layui-icon-help"}), i.bars.push({
                    type: "top",
                    icon: "layui-icon-top"
                })), s("<ul>").addClass(r));
            layui.each(i.bars, function (t, e) {
                var n = s('<li class="layui-icon">');
                n.addClass(e.icon).attr({
                    "lay-type": e.type,
                    style: e.style || (i.bgcolor ? "background-color: " + i.bgcolor : "")
                }).html(e.content), n.on("click", function () {
                    var t = s(this).attr("lay-type");
                    "top" === t && ("body" === i.target ? s("html,body") : u).animate({scrollTop: 0}, i.duration), "function" == typeof i.click && i.click.call(this, t)
                }), "object" === layui.type(i.on) && layui.each(i.on, function (t, e) {
                    n.on(t, function () {
                        var t = s(this).attr("lay-type");
                        "function" == typeof e && e.call(this, t)
                    })
                }), "top" === e.type && (n.addClass("layui-fixbar-top"), o = n), l.append(n)
            }), c.find("." + r).remove(), "object" == typeof i.css && l.css(i.css), c.append(l), o && (e = function e() {
                return u.scrollTop() >= i.margin ? t || (o.show(), t = 1) : t && (o.hide(), t = 0), e
            }()), u.on("scroll", function () {
                e && (clearTimeout(n), n = setTimeout(function () {
                    e()
                }, 100))
            })
        }, countdown: function (i) {
            i = s.extend(!0, {date: new Date, now: new Date}, i);
            var o = arguments, r = (1 < o.length && (i.date = new Date(o[0]), i.now = new Date(o[1]), i.clock = o[2]), {
                options: i,
                clear: function () {
                    clearTimeout(r.timer)
                },
                reload: function (t) {
                    this.clear(), s.extend(!0, this.options, {now: new Date}, t), a()
                }
            }), a = ("function" == typeof i.ready && i.ready(), function c() {
                var t = new Date(i.date), e = new Date(i.now), t = 0 < (t = t.getTime() - e.getTime()) ? t : 0, n = {
                    d: Math.floor(t / 864e5),
                    h: Math.floor(t / 36e5) % 24,
                    m: Math.floor(t / 6e4) % 60,
                    s: Math.floor(t / 1e3) % 60
                };
                return 1 < o.length && (n = [n.d, n.h, n.m, n.s]), r.timer = setTimeout(function () {
                    e.setTime(e.getTime() + 1e3), i.now = e, a()
                }, 1e3), "function" == typeof i.clock && i.clock(n, r), t <= 0 && (clearTimeout(r.timer), "function" == typeof i.done) && i.done(n, r), c
            }());
            return r
        }, timeAgo: function (t, e) {
            var n = this, i = [[], []], o = (new Date).getTime() - new Date(t).getTime();
            return 26784e5 < o ? (o = new Date(t), i[0][0] = n.digit(o.getFullYear(), 4), i[0][1] = n.digit(o.getMonth() + 1), i[0][2] = n.digit(o.getDate()), e || (i[1][0] = n.digit(o.getHours()), i[1][1] = n.digit(o.getMinutes()), i[1][2] = n.digit(o.getSeconds())), i[0].join("-") + " " + i[1].join(":")) : 864e5 <= o ? (o / 1e3 / 60 / 60 / 24 | 0) + " \u5929\u524d" : 36e5 <= o ? (o / 1e3 / 60 / 60 | 0) + " \u5c0f\u65f6\u524d" : 18e4 <= o ? (o / 1e3 / 60 | 0) + " \u5206\u949f\u524d" : o < 0 ? "\u672a\u6765" : "\u521a\u521a"
        }, digit: function (t, e) {
            var n = "";
            e = e || 2;
            for (var i = (t = String(t)).length; i < e; i++) n += "0";
            return t < Math.pow(10, e) ? n + (0 | t) : t
        }, toDateString: function (t, e, n) {
            var i, o, r, a, c, u, l, s, g, f, d;
            return null === t || "" === t ? "" : (i = this, (o = new Date(function () {
                if (t) return !isNaN(t) && "string" == typeof t ? parseInt(t) : t
            }() || new Date)).getDate() ? (r = o.getFullYear(), a = o.getMonth(), c = o.getDate(), u = o.getHours(), l = o.getMinutes(), s = o.getSeconds(), g = o.getMilliseconds(), f = n && n.customMeridiem || function (t, e) {
                t = 100 * t + e;
                return t < 600 ? "\u51cc\u6668" : t < 900 ? "\u65e9\u4e0a" : t < 1100 ? "\u4e0a\u5348" : t < 1300 ? "\u4e2d\u5348" : t < 1800 ? "\u4e0b\u5348" : "\u665a\u4e0a"
            }, d = {
                yy: function () {
                    return String(r).slice(-2)
                }, yyyy: function () {
                    return i.digit(r, 4)
                }, M: function () {
                    return String(a + 1)
                }, MM: function () {
                    return i.digit(a + 1)
                }, d: function () {
                    return String(c)
                }, dd: function () {
                    return i.digit(c)
                }, H: function () {
                    return String(u)
                }, HH: function () {
                    return i.digit(u)
                }, h: function () {
                    return String(u % 12 || 12)
                }, hh: function () {
                    return i.digit(u % 12 || 12)
                }, A: function () {
                    return f(u, l)
                }, m: function () {
                    return String(l)
                }, mm: function () {
                    return i.digit(l)
                }, s: function () {
                    return String(s)
                }, ss: function () {
                    return i.digit(s)
                }, SSS: function () {
                    return i.digit(g, 3)
                }
            }, (e = e || "yyyy-MM-dd HH:mm:ss").replace(/\[([^\]]+)]|y{1,4}|M{1,2}|d{1,2}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|SSS/g, function (t, e) {
                return e || d[t] && d[t]() || t
            })) : (p.error('Invalid millisecond for "util.toDateString(millisecond)"'), ""))
        }, escape: function (t) {
            return t === undefined || null === t ? "" : /[<"'>]|&(?=#[a-zA-Z0-9]+)/g.test(t += "") ? t.replace(/&(?!#?[a-zA-Z0-9]+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;") : t
        }, unescape: function (t) {
            return t !== undefined && null !== t || (t = ""), (t += "").replace(/\&amp;/g, "&").replace(/\&lt;/g, "<").replace(/\&gt;/g, ">").replace(/\&#39;/g, "'").replace(/\&quot;/g, '"')
        }, openWin: function (t) {
            var e = (t = t || {}).window || window.open(t.url || "", t.target, t.specs);
            t.url || (e.document.open("text/html", "replace"), e.document.write(t.content || ""), e.document.close())
        }, toVisibleArea: function (t) {
            var e, n, i, o, r, a, c, u;
            (t = s.extend({
                margin: 160,
                duration: 200,
                type: "y"
            }, t)).scrollElem[0] && t.thisElem[0] && (e = t.scrollElem, c = t.thisElem, i = (r = "y" === t.type) ? "top" : "left", o = e[n = r ? "scrollTop" : "scrollLeft"](), r = e[r ? "height" : "width"](), a = e.offset()[i], u = {}, (c = c.offset()[i] - a) > r - t.margin || c < t.margin) && (u[n] = c - r / 2 + o, e.animate(u, t.duration))
        }, on: function (i, o, t) {
            "object" == typeof i && (t = o || {}, o = i, i = t.attr || "lay-on");
            var e, n = (t = s.extend({
                elem: "body",
                trigger: "click"
            }, "object" == typeof t ? t : {trigger: t})).elem = s(t.elem), r = "[" + i + "]", a = "UTIL_ON_DATA";
            if (n[0]) return n.data(a) || n.data(a, {
                events: {},
                callbacks: {}
            }), e = (a = n.data(a)).callbacks, o = a.events[i] = s.extend(!0, a.events[i], o), n.off(t.trigger, r, e[i]), n.on(t.trigger, r, e[i] = function (t) {
                var e = s(this), n = e.attr(i);
                "function" == typeof o[n] && o[n].call(this, e, t)
            }), o
        }
    };
    e.event = e.on, t("util", e)
});
layui.define(["jquery", "laytpl", "lay", "util"], function (e) {
    "use strict";
    var n, i, t, c = layui.$, m = layui.laytpl, p = layui.util, a = layui.hint(),
        o = layui.device().mobile ? "touchstart" : "mousedown", r = "dropdown", y = "layui_" + r + "_index", h = {
            config: {customName: {id: "id", title: "title", children: "child"}},
            index: layui[r] ? layui[r].index + 1e4 : 0,
            set: function (e) {
                var i = this;
                return i.config = c.extend({}, i.config, e), i
            },
            on: function (e, i) {
                return layui.onevent.call(this, r, e, i)
            }
        }, f = function () {
            var i = this, e = i.config, t = e.id;
            return f.that[t] = i, {
                config: e, reload: function (e) {
                    i.reload.call(i, e)
                }, reloadData: function (e) {
                    h.reloadData(t, e)
                }, close: function () {
                    i.remove()
                }
            }
        }, g = "layui-dropdown", l = "layui-menu-item-up", d = "layui-menu-item-down", v = "layui-menu-body-title",
        s = "layui-menu-item-group", w = "layui-menu-item-parent", u = "layui-menu-item-checked",
        V = "layui-menu-item-checked2", C = "layui-menu-body-panel", x = "layui-menu-body-panel-left",
        b = "layui-dropdown-shade", k = "." + s + ">." + v, E = function (e) {
            var i = this;
            i.index = ++h.index, i.config = c.extend({}, i.config, h.config, e), i.init()
        };
    E.prototype.config = {
        trigger: "click",
        content: "",
        className: "",
        style: "",
        show: !1,
        isAllowSpread: !0,
        isSpreadItem: !0,
        data: [],
        delay: [200, 300],
        shade: 0,
        accordion: !1
    }, E.prototype.reload = function (e, i) {
        var t = this;
        t.config = c.extend({}, t.config, e), t.init(!0, i)
    }, E.prototype.init = function (e, i) {
        var t, n = this, a = n.config, l = c(a.elem);
        return 1 < l.length ? (layui.each(l, function () {
            h.render(c.extend({}, a, {elem: this}))
        }), n) : (c.extend(a, lay.options(l[0])), !e && l[0] && l.data(y) ? (t = f.getThis(l.data(y))) ? t.reload(a, i) : void 0 : (a.elem = c(a.elem), a.id = "id" in a ? a.id : l.attr("id") || n.index, a.customName = c.extend({}, h.config.customName, a.customName), (a.show || "reloadData" === i && n.elemView && c("body").find(n.elemView.get(0)).length) && n.render(e, i), void n.events()))
    }, E.prototype.render = function (e, i) {
        var l = this, d = l.config, s = d.customName, t = c("body"), n = function () {
                var e = c('<ul class="layui-menu layui-dropdown-menu"></ul>');
                return 0 < d.data.length ? u(e, d.data) : e.html('<li class="layui-menu-item-none">No data</li>'), e
            }, u = function (r, e) {
                return layui.each(e, function (e, i) {
                    var t, n = i[s.children] && 0 < i[s.children].length, a = ("isSpreadItem" in i ? i : d).isSpreadItem,
                        l = (o = p.escape(i[s.title]), l = i.templet || d.templet, o = l ? "function" == typeof l ? l(i) : m(l).render(i) : o),
                        o = (n && (i.type = i.type || "parent"), i.type ? {
                            group: "group",
                            parent: "parent",
                            "-": "-"
                        }[i.type] || "parent" : "");
                    ("-" === o || i[s.title] || i[s.id] || n) && ((l = c(["<li" + (t = {
                        group: "layui-menu-item-group" + (d.isAllowSpread ? a ? " layui-menu-item-down" : " layui-menu-item-up" : ""),
                        parent: w,
                        "-": "layui-menu-item-divider"
                    }, n || o ? ' class="' + t[o] + '"' : i.disabled ? ' class="layui-disabled"' : "") + ">", (t = "href" in i ? '<a href="' + i.href + '" target="' + (i.target || "_self") + '">' + l + "</a>" : l, n ? '<div class="' + v + '">' + t + ("parent" === o ? '<i class="layui-icon layui-icon-right"></i>' : "group" === o && d.isAllowSpread ? '<i class="layui-icon layui-icon-' + (a ? "up" : "down") + '"></i>' : "") + "</div>" : '<div class="' + v + '">' + t + "</div>"), "</li>"].join(""))).data("item", i), n && (a = c('<div class="layui-panel layui-menu-body-panel"></div>'), t = c("<ul></ul>"), "parent" === o ? (a.append(u(t, i[s.children])), l.append(a)) : l.append(u(t, i[s.children]))), r.append(l))
                }), r
            },
            a = ['<div class="layui-dropdown layui-border-box layui-panel layui-anim layui-anim-downbit" lay-id="' + d.id + '">', "</div>"].join("");
        !(e = "contextmenu" !== d.trigger && !lay.isTopElem(d.elem[0]) ? e : !0) && d.elem.data(y + "_opened") || (l.elemView = c("." + g + '[lay-id="' + d.id + '"]'), "reloadData" === i && l.elemView.length ? l.elemView.html(d.content || n()) : (l.elemView = c(a), l.elemView.append(d.content || n()), d.className && l.elemView.addClass(d.className), d.style && l.elemView.attr("style", d.style), h.thisId = d.id, l.remove(), t.append(l.elemView), d.elem.data(y + "_opened", !0), e = d.shade ? '<div class="' + b + '" style="z-index:' + (l.elemView.css("z-index") - 1) + "; background-color: " + (d.shade[1] || "#000") + "; opacity: " + (d.shade[0] || d.shade) + '"></div>' : "", l.elemView.before(e), "mouseenter" === d.trigger && l.elemView.on("mouseenter", function () {
            clearTimeout(f.timer)
        }).on("mouseleave", function () {
            l.delayRemove()
        })), l.position(), (f.prevElem = l.elemView).data("prevElem", d.elem), l.elemView.find(".layui-menu").on(o, function (e) {
            layui.stope(e)
        }), l.elemView.find(".layui-menu li").on("click", function (e) {
            var i = c(this), t = i.data("item") || {}, n = t[s.children] && 0 < t[s.children].length,
                a = "all" === d.clickScope;
            t.disabled || n && !a || "-" === t.type || (!1 === ("function" == typeof d.click ? d.click(t, i) : null) || n || l.remove(), layui.stope(e))
        }), l.elemView.find(k).on("click", function (e) {
            var i = c(this).parent();
            "group" === (i.data("item") || {}).type && d.isAllowSpread && f.spread(i, d.accordion)
        }), "function" == typeof d.ready && d.ready(l.elemView, d.elem))
    }, E.prototype.position = function (e) {
        var i = this.config;
        lay.position(i.elem[0], this.elemView[0], {
            position: i.position,
            e: this.e,
            clickType: "contextmenu" === i.trigger ? "right" : null,
            align: i.align || null
        })
    }, E.prototype.remove = function () {
        this.config;
        var e = f.prevElem;
        e && (e.data("prevElem") && e.data("prevElem").data(y + "_opened", !1), e.remove()), lay("." + b).remove()
    }, E.prototype.normalizedDelay = function () {
        var e = this.config, e = [].concat(e.delay);
        return {show: e[0], hide: e[1] !== undefined ? e[1] : e[0]}
    }, E.prototype.delayRemove = function () {
        var e = this;
        e.config;
        clearTimeout(f.timer), f.timer = setTimeout(function () {
            e.remove()
        }, e.normalizedDelay().hide)
    }, E.prototype.events = function () {
        var i = this, e = i.config,
            t = ("hover" === e.trigger && (e.trigger = "mouseenter"), i.prevElem && i.prevElem.off(e.trigger, i.prevElemCallback), "mouseenter" === e.trigger);
        i.prevElem = e.elem, i.prevElemCallback = function (e) {
            clearTimeout(f.timer), i.e = e, t ? f.timer = setTimeout(function () {
                i.render()
            }, i.normalizedDelay().show) : i.render(), e.preventDefault()
        }, e.elem.on(e.trigger, i.prevElemCallback), t && e.elem.on("mouseleave", function () {
            i.delayRemove()
        })
    }, f.that = {}, f.getThis = function (e) {
        var i = f.that[e];
        return i || a.error(e ? r + " instance with ID '" + e + "' not found" : "ID argument required"), i
    }, f.spread = function (e, i) {
        var t = e.children("ul"), n = e.hasClass(l), a = function () {
            c(this).css({display: ""})
        };
        t.is(":animated") || (n ? (e.removeClass(l).addClass(d), t.hide().stop().slideDown(200, a)) : (t.stop().slideUp(200, a), e.removeClass(d).addClass(l)), n && i && ((t = e.siblings("." + d)).children("ul").stop().slideUp(200, a), t.removeClass(d).addClass(l)))
    }, n = c(window), i = c(document), n.on("resize", function () {
        if (h.thisId) {
            var e = f.getThis(h.thisId);
            if (e) return !(e.elemView && !e.elemView[0] || !c("." + g)[0]) && void ("contextmenu" === e.config.trigger ? e.remove() : e.position())
        }
    }), i.on(o, function (e) {
        var i, t;
        h.thisId && (i = f.getThis(h.thisId)) && (t = i.config, !lay.isTopElem(t.elem[0]) && "contextmenu" !== t.trigger && (e.target === t.elem[0] || t.elem.find(e.target)[0] || i.elemView && e.target === i.elemView[0] || i.elemView && i.elemView.find(e.target)[0]) || i.remove())
    }), t = ".layui-menu:not(.layui-dropdown-menu) li", i.on("click", t, function (e) {
        var i = c(this), t = i.parents(".layui-menu").eq(0), n = i.hasClass(s) || i.hasClass(w),
            a = t.attr("lay-filter") || t.attr("id"), l = lay.options(this);
        i.hasClass("layui-menu-item-divider") || n || (t.find("." + u).removeClass(u), t.find("." + V).removeClass(V), i.addClass(u), i.parents("." + w).addClass(V), l.title = l.title || c.trim(i.children("." + v).text()), layui.event.call(this, r, "click(" + a + ")", l))
    }), i.on("click", t + k, function (e) {
        var i = c(this), t = i.parents("." + s + ":eq(0)"), n = lay.options(t[0]),
            i = "string" == typeof i.parents(".layui-menu").eq(0).attr("lay-accordion");
        "isAllowSpread" in n && !n.isAllowSpread || f.spread(t, i)
    }), t = ".layui-menu ." + w, i.on("mouseenter", t, function (e) {
        var i, t = c(this).find("." + C);
        t[0] && ((i = t[0].getBoundingClientRect()).right > n.width() && (t.addClass(x), (i = t[0].getBoundingClientRect()).left < 0) && t.removeClass(x), i.bottom > n.height()) && t.eq(0).css("margin-top", -(i.bottom - n.height() + 5))
    }).on("mouseleave", t, function (e) {
        var i = c(this).children("." + C);
        i.removeClass(x), i.css("margin-top", 0)
    }), h.close = function (e) {
        e = f.getThis(e);
        return e ? (e.remove(), f.call(e)) : this
    }, h.reload = function (e, i, t) {
        e = f.getThis(e);
        return e ? (e.reload(i, t), f.call(e)) : this
    }, h.reloadData = function () {
        var t = c.extend([], arguments),
            n = (t[2] = "reloadData", new RegExp("^(" + ["data", "templet", "content"].join("|") + ")$"));
        return layui.each(t[1], function (e, i) {
            n.test(e) || delete t[1][e]
        }), h.reload.apply(null, t)
    }, h.render = function (e) {
        e = new E(e);
        return f.call(e)
    }, e(r, h)
});
layui.define(["jquery", "lay"], function (e) {
    "use strict";
    var g = layui.$, x = layui.lay, c = {
            config: {}, index: layui.slider ? layui.slider.index + 1e4 : 0, set: function (e) {
                var t = this;
                return t.config = g.extend({}, t.config, e), t
            }, on: function (e, t) {
                return layui.onevent.call(this, i, e, t)
            }
        }, i = "slider", v = "layui-disabled", b = "layui-slider-bar", T = "layui-slider-wrap", w = "layui-slider-wrap-btn",
        M = "layui-slider-tips", L = "layui-slider-input-txt", E = "layui-slider-hover", t = function (e) {
            var t = this;
            t.index = ++c.index, t.config = g.extend({}, t.config, c.config, e), t.render()
        };
    t.prototype.config = {
        type: "default",
        min: 0,
        max: 100,
        value: 0,
        step: 1,
        showstep: !1,
        tips: !0,
        input: !1,
        range: !1,
        height: 200,
        disabled: !1,
        theme: "#16baaa"
    }, t.prototype.render = function () {
        var n = this, a = n.config, e = g(a.elem);
        if (1 < e.length) return layui.each(e, function () {
            c.render(g.extend({}, a, {elem: this}))
        }), n;
        g.extend(a, x.options(e[0])), a.step < 1 && (a.step = 1), a.max < a.min && (a.max = a.min + a.step), a.range ? (a.value = "object" == typeof a.value ? a.value : [a.min, a.value], e = Math.min(a.value[0], a.value[1]), t = Math.max(a.value[0], a.value[1]), a.value[0] = Math.max(e, a.min), a.value[1] = Math.max(t, a.min), a.value[0] = Math.min(a.value[0], a.max), a.value[1] = Math.min(a.value[1], a.max), t = Math.floor((a.value[0] - a.min) / (a.max - a.min) * 100), i = (s = Math.floor((a.value[1] - a.min) / (a.max - a.min) * 100)) - t + "%", t += "%", s += "%") : ("object" == typeof a.value && (a.value = Math.min.apply(null, a.value)), a.value < a.min && (a.value = a.min), a.value > a.max && (a.value = a.max), i = Math.floor((a.value - a.min) / (a.max - a.min) * 100) + "%");
        var l, e = a.disabled ? "#c2c2c2" : a.theme,
            t = '<div class="layui-slider ' + ("vertical" === a.type ? "layui-slider-vertical" : "") + '">' + (a.tips ? '<div class="' + M + '"></div>' : "") + '<div class="layui-slider-bar" style="background:' + e + "; " + ("vertical" === a.type ? "height" : "width") + ":" + i + ";" + ("vertical" === a.type ? "bottom" : "left") + ":" + (t || 0) + ';"></div><div class="layui-slider-wrap" style="' + ("vertical" === a.type ? "bottom" : "left") + ":" + (t || i) + ';"><div class="layui-slider-wrap-btn" style="border: 2px solid ' + e + ';"></div></div>' + (a.range ? '<div class="layui-slider-wrap" style="' + ("vertical" === a.type ? "bottom" : "left") + ":" + s + ';"><div class="layui-slider-wrap-btn" style="border: 2px solid ' + e + ';"></div></div>' : "") + "</div>",
            i = g(a.elem), s = i.next(".layui-slider");
        if (s[0] && s.remove(), n.elemTemp = g(t), a.range ? (n.elemTemp.find("." + T).eq(0).data("value", a.value[0]), n.elemTemp.find("." + T).eq(1).data("value", a.value[1])) : n.elemTemp.find("." + T).data("value", a.value), i.html(n.elemTemp), "vertical" === a.type && n.elemTemp.height(a.height + "px"), a.showstep) {
            for (var o = (a.max - a.min) / a.step, r = "", u = 1; u < 1 + o; u++) {
                var d = 100 * u / o;
                d < 100 && (r += '<div class="layui-slider-step" style="' + ("vertical" === a.type ? "bottom" : "left") + ":" + d + '%"></div>')
            }
            n.elemTemp.append(r)
        }
        a.input && !a.range && (e = g('<div class="layui-slider-input"><div class="layui-slider-input-txt"><input type="text" class="layui-input"></div><div class="layui-slider-input-btn"><i class="layui-icon layui-icon-up"></i><i class="layui-icon layui-icon-down"></i></div></div>'), i.css("position", "relative"), i.append(e), i.find("." + L).children("input").val(a.value), "vertical" === a.type ? e.css({
            left: 0,
            top: -48
        }) : n.elemTemp.css("margin-right", e.outerWidth() + 15)), a.disabled ? (n.elemTemp.addClass(v), n.elemTemp.find("." + w).addClass(v)) : n.slide(), n.elemTemp.find("." + w).on("mouseover", function () {
            var e = "vertical" === a.type ? a.height : n.elemTemp[0].offsetWidth, t = n.elemTemp.find("." + T),
                i = ("vertical" === a.type ? e - g(this).parent()[0].offsetTop - t.height() : g(this).parent()[0].offsetLeft) / e * 100,
                t = g(this).parent().data("value"), e = a.setTips ? a.setTips(t) : t;
            n.elemTemp.find("." + M).html(e), clearTimeout(l), l = setTimeout(function () {
                "vertical" === a.type ? n.elemTemp.find("." + M).css({
                    bottom: i + "%",
                    "margin-bottom": "20px",
                    display: "inline-block"
                }) : n.elemTemp.find("." + M).css({left: i + "%", display: "inline-block"})
            }, 300)
        }).on("mouseout", function () {
            clearTimeout(l), n.elemTemp.find("." + M).css("display", "none")
        })
    }, t.prototype.slide = function (e, t, i) {
        var u = this, d = u.config, c = u.elemTemp, v = function () {
                return "vertical" === d.type ? d.height : c[0].offsetWidth
            }, m = c.find("." + T), o = c.next(".layui-slider-input"), r = o.children("." + L).children("input").val(),
            p = 100 / ((d.max - d.min) / Math.ceil(d.step)), f = function (e, t, i) {
                e = (e = 100 < (e = 100 < Math.ceil(e) * p ? Math.ceil(e) * p : Math.round(e) * p) ? 100 : e) < 0 ? 0 : e, m.eq(t).css("vertical" === d.type ? "bottom" : "left", e + "%");
                var n, a = h(m[0].offsetLeft), l = d.range ? h(m[1].offsetLeft) : 0,
                    s = ("vertical" === d.type ? (c.find("." + M).css({
                        bottom: e + "%",
                        "margin-bottom": "20px"
                    }), a = h(v() - m[0].offsetTop - m.height()), l = d.range ? h(v() - m[1].offsetTop - m.height()) : 0) : c.find("." + M).css("left", e + "%"), a = 100 < a ? 100 : a, l = 100 < l ? 100 : l, Math.min(a, l)),
                    a = Math.abs(a - l), l = ("vertical" === d.type ? c.find("." + b).css({
                        height: a + "%",
                        bottom: s + "%"
                    }) : c.find("." + b).css({width: a + "%", left: s + "%"}), d.min + Math.round((d.max - d.min) * e / 100));
                r = l, o.children("." + L).children("input").val(r), m.eq(t).data("value", l), c.find("." + M).html(d.setTips ? d.setTips(l) : l), d.range && (n = [m.eq(0).data("value"), m.eq(1).data("value")])[0] > n[1] && n.reverse(), u.value = d.range ? n : l, d.change && d.change(u.value), "done" === i && d.done && d.done(u.value)
            }, h = function (e) {
                var t = e / v() * 100 / p, i = Math.round(t) * p;
                return i = e == v() ? Math.ceil(t) * p : i
            }, y = g(['<div class="layui-auxiliar-moving" id="LAY-slider-moving"></div'].join(""));
        if ("set" === e) return f(t - d.min, i, "done");
        c.find("." + w).each(function (o) {
            var r = g(this);
            r.on("mousedown touchstart", function (e) {
                "touchstart" === (e = e || window.event).type && (e.clientX = e.originalEvent.touches[0].clientX, e.clientY = e.originalEvent.touches[0].clientY);
                var t, i, n, a, l = r.parent()[0].offsetLeft, s = e.clientX;
                "vertical" === d.type && (l = v() - r.parent()[0].offsetTop - m.height(), s = e.clientY);
                t = r, i = function (e) {
                    "touchmove" === (e = e || window.event).type && (e.clientX = e.touches[0].clientX, e.clientY = e.touches[0].clientY);
                    var t = l + ("vertical" === d.type ? s - e.clientY : e.clientX - s),
                        t = (t = (t = t < 0 ? 0 : t) > v() ? v() : t) / v() * 100 / p;
                    f(t, o), r.addClass(E), c.find("." + M).show(), e.preventDefault()
                }, n = function (e) {
                    r.removeClass(E), setTimeout(function () {
                        c.find("." + M).hide()
                    }, e)
                }, a = function () {
                    n && n(x.touchEventsSupported() ? 1e3 : 0), y.remove(), d.done && d.done(u.value), x.touchEventsSupported() && (t[0].removeEventListener("touchmove", i, !!x.passiveSupported && {passive: !1}), t[0].removeEventListener("touchend", a), t[0].removeEventListener("touchcancel", a))
                }, g("#LAY-slider-moving")[0] || g("body").append(y), y.on("mousemove", i), y.on("mouseup", a).on("mouseleave", a), x.touchEventsSupported() && (t[0].addEventListener("touchmove", i, !!x.passiveSupported && {passive: !1}), t[0].addEventListener("touchend", a), t[0].addEventListener("touchcancel", a))
            })
        }), c.on("click", function (e) {
            var t = g("." + w), i = g(this);
            !t.is(event.target) && 0 === t.has(event.target).length && t.length && (i = (t = (t = (t = "vertical" === d.type ? v() - e.clientY + i.offset().top - g(window).scrollTop() : e.clientX - i.offset().left - g(window).scrollLeft()) < 0 ? 0 : t) > v() ? v() : t) / v() * 100 / p, t = d.range ? "vertical" === d.type ? Math.abs(t - parseInt(g(m[0]).css("bottom"))) > Math.abs(t - parseInt(g(m[1]).css("bottom"))) ? 1 : 0 : Math.abs(t - m[0].offsetLeft) > Math.abs(t - m[1].offsetLeft) ? 1 : 0 : 0, f(i, t, "done"), e.preventDefault())
        }), o.children(".layui-slider-input-btn").children("i").each(function (t) {
            g(this).on("click", function () {
                r = o.children("." + L).children("input").val();
                var e = ((r = 1 == t ? r - d.step < d.min ? d.min : Number(r) - d.step : Number(r) + d.step > d.max ? d.max : Number(r) + d.step) - d.min) / (d.max - d.min) * 100 / p;
                f(e, 0, "done")
            })
        });
        var n = function () {
            var e = this.value,
                e = (e = (e = (e = isNaN(e) ? 0 : e) < d.min ? d.min : e) > d.max ? d.max : e, ((this.value = e) - d.min) / (d.max - d.min) * 100 / p);
            f(e, 0, "done")
        };
        o.children("." + L).children("input").on("keydown", function (e) {
            13 === e.keyCode && (e.preventDefault(), n.call(this))
        }).on("change", n)
    }, t.prototype.events = function () {
        this.config
    }, c.render = function (e) {
        e = new t(e);
        return function () {
            var i = this, n = i.config;
            return {
                setValue: function (e, t) {
                    return e = (e = e > n.max ? n.max : e) < n.min ? n.min : e, n.value = e, i.slide("set", e, t || 0)
                }, config: n
            }
        }.call(e)
    }, e(i, c)
});
layui.define(["jquery", "lay"], function (e) {
    "use strict";
    var k = layui.$, r = layui.lay, o = layui.hint(), i = layui.device().mobile ? "click" : "mousedown", n = {
            config: {}, index: layui.colorpicker ? layui.colorpicker.index + 1e4 : 0, set: function (e) {
                var i = this;
                return i.config = k.extend({}, i.config, e), i
            }, on: function (e, i) {
                return layui.onevent.call(this, "colorpicker", e, i)
            }
        }, l = function () {
            var e = this.config, i = e.id;
            return l.that[i] = this, {config: e}
        }, t = "colorpicker", c = "layui-colorpicker", a = ".layui-colorpicker-main", x = "layui-icon-down",
        P = "layui-icon-close", C = "layui-colorpicker-trigger-span", w = "layui-colorpicker-trigger-i",
        B = "layui-colorpicker-side-slider", I = "layui-colorpicker-basis", T = "layui-colorpicker-alpha-bgcolor",
        D = "layui-colorpicker-alpha-slider", E = "layui-colorpicker-basis-cursor", M = "layui-colorpicker-main-input",
        Y = function (e) {
            var i = {h: 0, s: 0, b: 0}, o = Math.min(e.r, e.g, e.b), t = Math.max(e.r, e.g, e.b), r = t - o;
            return i.b = t, i.s = 0 !== t ? 255 * r / t : 0, 0 !== i.s ? e.r == t ? i.h = (e.g - e.b) / r : e.g == t ? i.h = 2 + (e.b - e.r) / r : i.h = 4 + (e.r - e.g) / r : i.h = -1, t === o && (i.h = 0), i.h *= 60, i.h < 0 && (i.h += 360), i.s *= 100 / 255, i.b *= 100 / 255, i
        }, X = function (e) {
            var i, o = {}, t = e.h, r = 255 * e.s / 100, e = 255 * e.b / 100;
            return 0 == r ? o.r = o.g = o.b = e : (e = t % 60 * ((i = e) - (r = (255 - r) * e / 255)) / 60, (t = 360 === t ? 0 : t) < 60 ? (o.r = i, o.b = r, o.g = r + e) : t < 120 ? (o.g = i, o.b = r, o.r = i - e) : t < 180 ? (o.g = i, o.r = r, o.b = r + e) : t < 240 ? (o.b = i, o.r = r, o.g = i - e) : t < 300 ? (o.b = i, o.g = r, o.r = r + e) : t < 360 ? (o.r = i, o.g = r, o.b = i - e) : (o.r = 0, o.g = 0, o.b = 0)), {
                r: Math.round(o.r),
                g: Math.round(o.g),
                b: Math.round(o.b)
            }
        }, j = function (e) {
            var e = X(e), o = [e.r.toString(16), e.g.toString(16), e.b.toString(16)];
            return k.each(o, function (e, i) {
                1 === i.length && (o[e] = "0" + i)
            }), o.join("")
        }, F = function (e) {
            e = e.match(/[0-9]{1,3}/g) || [];
            return {r: e[0], g: e[1], b: e[2]}
        }, L = k(window), s = k(document), d = function (e) {
            this.index = ++n.index, this.config = k.extend({}, this.config, n.config, e), this.render()
        };
    d.prototype.config = {
        color: "",
        size: null,
        alpha: !1,
        format: "hex",
        predefine: !1,
        colors: ["#16baaa", "#16b777", "#1E9FFF", "#FF5722", "#FFB800", "#01AAED", "#999", "#c00", "#ff8c00", "#ffd700", "#90ee90", "#00ced1", "#1e90ff", "#c71585", "rgb(0, 186, 189)", "rgb(255, 120, 0)", "rgb(250, 212, 0)", "#393D49", "rgba(0,0,0,.5)", "rgba(255, 69, 0, 0.68)", "rgba(144, 240, 144, 0.5)", "rgba(31, 147, 255, 0.73)"]
    }, d.prototype.render = function () {
        var e = this, i = e.config;
        if (1 < (t = k(i.elem)).length) return layui.each(t, function () {
            n.render(k.extend({}, i, {elem: this}))
        }), e;
        k.extend(i, r.options(t[0]));
        var o = k(['<div class="layui-unselect layui-colorpicker">', "<span " + ("rgb" == i.format && i.alpha ? 'class="layui-colorpicker-trigger-bgcolor"' : "") + ">", '<span class="layui-colorpicker-trigger-span" ', 'lay-type="' + ("rgb" == i.format ? i.alpha ? "rgba" : "torgb" : "") + '" ', 'style="' + (o = "", i.color ? (o = i.color, 3 < (i.color.match(/[0-9]{1,3}/g) || []).length && (i.alpha && "rgb" == i.format || (o = "#" + j(Y(F(i.color))))), "background: " + o) : o) + '">', '<i class="layui-icon layui-colorpicker-trigger-i ' + (i.color ? x : P) + '"></i>', "</span>", "</span>", "</div>"].join("")),
            t = i.elem = k(i.elem);
        i.size && o.addClass("layui-colorpicker-" + i.size), t.addClass("layui-inline").html(e.elemColorBox = o), i.id = "id" in i ? i.id : t.attr("id") || e.index, e.color = e.elemColorBox.find("." + C)[0].style.background, e.events()
    }, d.prototype.renderPicker = function () {
        var o, e = this, i = e.config, t = e.elemColorBox[0],
            r = e.elemPicker = k(['<div id="layui-colorpicker' + e.index + '" data-index="' + e.index + '" class="layui-anim layui-anim-downbit layui-colorpicker-main">', '<div class="layui-colorpicker-main-wrapper">', '<div class="layui-colorpicker-basis">', '<div class="layui-colorpicker-basis-white"></div>', '<div class="layui-colorpicker-basis-black"></div>', '<div class="layui-colorpicker-basis-cursor"></div>', "</div>", '<div class="layui-colorpicker-side">', '<div class="layui-colorpicker-side-slider"></div>', "</div>", "</div>", '<div class="layui-colorpicker-main-alpha ' + (i.alpha ? "layui-show" : "") + '">', '<div class="layui-colorpicker-alpha-bgcolor">', '<div class="layui-colorpicker-alpha-slider"></div>', "</div>", "</div>", i.predefine ? (o = ['<div class="layui-colorpicker-main-pre">'], layui.each(i.colors, function (e, i) {
                o.push(['<div class="layui-colorpicker-pre' + (3 < (i.match(/[0-9]{1,3}/g) || []).length ? " layui-colorpicker-pre-isalpha" : "") + '">', '<div style="background:' + i + '"></div>', "</div>"].join(""))
            }), o.push("</div>"), o.join("")) : "", '<div class="layui-colorpicker-main-input">', '<div class="layui-inline">', '<input type="text" class="layui-input">', "</div>", '<div class="layui-btn-container">', '<button class="layui-btn layui-btn-primary layui-btn-sm" colorpicker-events="clear">\u6e05\u7a7a</button>', '<button class="layui-btn layui-btn-sm" colorpicker-events="confirm">\u786e\u5b9a</button>', "</div", "</div>", "</div>"].join(""));
        e.elemColorBox.find("." + C)[0];
        k(a)[0] && k(a).data("index") == e.index ? e.removePicker(d.thisElemInd) : (e.removePicker(d.thisElemInd), k("body").append(r)), n.thisId = i.id, d.thisElemInd = e.index, d.thisColor = t.style.background, e.position(), e.pickerEvents()
    }, d.prototype.removePicker = function (e) {
        var i = this.config, e = k("#layui-colorpicker" + (e || this.index));
        return e[0] && (e.remove(), delete n.thisId, "function" == typeof i.close) && i.close(this.color), this
    }, d.prototype.position = function () {
        var e = this, i = e.config;
        return r.position(e.bindElem || e.elemColorBox[0], e.elemPicker[0], {position: i.position, align: "center"}), e
    }, d.prototype.val = function () {
        var e, i = this, o = (i.config, i.elemColorBox.find("." + C)), t = i.elemPicker.find("." + M),
            r = o[0].style.backgroundColor;
        r ? (e = Y(F(r)), o = o.attr("lay-type"), i.select(e.h, e.s, e.b), "torgb" === o ? t.find("input").val(r) : "rgba" === o ? (o = F(r), 3 === (r.match(/[0-9]{1,3}/g) || []).length ? (t.find("input").val("rgba(" + o.r + ", " + o.g + ", " + o.b + ", 1)"), i.elemPicker.find("." + D).css("left", 280)) : (t.find("input").val(r), r = 280 * r.slice(r.lastIndexOf(",") + 1, r.length - 1), i.elemPicker.find("." + D).css("left", r)), i.elemPicker.find("." + T)[0].style.background = "linear-gradient(to right, rgba(" + o.r + ", " + o.g + ", " + o.b + ", 0), rgb(" + o.r + ", " + o.g + ", " + o.b + "))") : t.find("input").val("#" + j(e))) : (i.select(0, 100, 100), t.find("input").val(""), i.elemPicker.find("." + T)[0].style.background = "", i.elemPicker.find("." + D).css("left", 280))
    }, d.prototype.side = function () {
        var n = this, l = n.config, c = n.elemColorBox.find("." + C), a = c.attr("lay-type"),
            s = n.elemPicker.find(".layui-colorpicker-side"), e = n.elemPicker.find("." + B),
            d = n.elemPicker.find("." + I), t = n.elemPicker.find("." + E), u = n.elemPicker.find("." + T),
            f = n.elemPicker.find("." + D), p = e[0].offsetTop / 180 * 360, h = 100 - (t[0].offsetTop + 3) / 180 * 100,
            g = (t[0].offsetLeft + 3) / 260 * 100, v = Math.round(f[0].offsetLeft / 280 * 100) / 100,
            y = n.elemColorBox.find("." + w), i = n.elemPicker.find(".layui-colorpicker-pre").children("div"),
            m = function (e, i, o, t) {
                n.select(e, i, o);
                var r = X({h: e, s: i, b: o}), e = j({h: e, s: i, b: o}), i = n.elemPicker.find("." + M).find("input");
                y.addClass(x).removeClass(P), c[0].style.background = "rgb(" + r.r + ", " + r.g + ", " + r.b + ")", "torgb" === a ? i.val("rgb(" + r.r + ", " + r.g + ", " + r.b + ")") : "rgba" === a ? (f.css("left", 280 * t), i.val("rgba(" + r.r + ", " + r.g + ", " + r.b + ", " + t + ")"), c[0].style.background = "rgba(" + r.r + ", " + r.g + ", " + r.b + ", " + t + ")", u[0].style.background = "linear-gradient(to right, rgba(" + r.r + ", " + r.g + ", " + r.b + ", 0), rgb(" + r.r + ", " + r.g + ", " + r.b + "))") : i.val("#" + e), l.change && l.change(k.trim(n.elemPicker.find("." + M).find("input").val()))
            }, o = k(['<div class="layui-auxiliar-moving" id="LAY-colorpicker-moving"></div>'].join("")),
            b = function (e) {
                k("#LAY-colorpicker-moving")[0] || k("body").append(o), o.on("mousemove", e), o.on("mouseup", function () {
                    o.remove()
                }).on("mouseleave", function () {
                    o.remove()
                })
            };
        e.on("mousedown", function (e) {
            var t = this.offsetTop, r = e.clientY;
            b(function (e) {
                var i = t + (e.clientY - r), o = s[0].offsetHeight,
                    o = (i = o < (i = i < 0 ? 0 : i) ? o : i) / 180 * 360;
                m(p = o, g, h, v), e.preventDefault()
            }), e.preventDefault()
        }), s.on("click", function (e) {
            var i = e.clientY - k(this).offset().top + L.scrollTop(),
                i = (i = (i = i < 0 ? 0 : i) > this.offsetHeight ? this.offsetHeight : i) / 180 * 360;
            m(p = i, g, h, v), e.preventDefault()
        }), t.on("mousedown", function (e) {
            var n = this.offsetTop, l = this.offsetLeft, c = e.clientY, a = e.clientX;
            layui.stope(e), b(function (e) {
                var i = n + (e.clientY - c), o = l + (e.clientX - a), t = d[0].offsetHeight - 3,
                    r = d[0].offsetWidth - 3, r = ((o = r < (o = o < -3 ? -3 : o) ? r : o) + 3) / 260 * 100,
                    o = 100 - ((i = t < (i = i < -3 ? -3 : i) ? t : i) + 3) / 180 * 100;
                m(p, g = r, h = o, v), e.preventDefault()
            }), e.preventDefault()
        }), d.on("mousedown", function (e) {
            var i = e.clientY - k(this).offset().top - 3 + L.scrollTop(),
                o = e.clientX - k(this).offset().left - 3 + L.scrollLeft(),
                o = ((i = i < -3 ? -3 : i) > this.offsetHeight - 3 && (i = this.offsetHeight - 3), ((o = (o = o < -3 ? -3 : o) > this.offsetWidth - 3 ? this.offsetWidth - 3 : o) + 3) / 260 * 100),
                i = 100 - (i + 3) / 180 * 100;
            m(p, g = o, h = i, v), layui.stope(e), e.preventDefault(), t.trigger(e, "mousedown")
        }), f.on("mousedown", function (e) {
            var t = this.offsetLeft, r = e.clientX;
            b(function (e) {
                var i = t + (e.clientX - r), o = u[0].offsetWidth,
                    o = (o < (i = i < 0 ? 0 : i) && (i = o), Math.round(i / 280 * 100) / 100);
                m(p, g, h, v = o), e.preventDefault()
            }), e.preventDefault()
        }), u.on("click", function (e) {
            var i = e.clientX - k(this).offset().left,
                i = ((i = i < 0 ? 0 : i) > this.offsetWidth && (i = this.offsetWidth), Math.round(i / 280 * 100) / 100);
            m(p, g, h, v = i), e.preventDefault()
        }), i.each(function () {
            k(this).on("click", function () {
                k(this).parent(".layui-colorpicker-pre").addClass("selected").siblings().removeClass("selected");
                var e = this.style.backgroundColor, i = Y(F(e)), o = e.slice(e.lastIndexOf(",") + 1, e.length - 1);
                p = i.h, g = i.s, h = i.b, 3 === (e.match(/[0-9]{1,3}/g) || []).length && (o = 1), v = o, m(i.h, i.s, i.b, o)
            })
        }), r.touchEventsSupported() && layui.each([{elem: s, eventType: "click"}, {
            elem: u,
            eventType: "click"
        }, {elem: d, eventType: "mousedown"}], function (e, t) {
            r.touchSwipe(t.elem, {
                onTouchMove: function (e) {
                    var i, o;
                    e = e, i = t.eventType, e = e.touches[0], (o = document.createEvent("MouseEvent")).initMouseEvent(i, !0, !0, window, 1, e.screenX, e.screenY, e.clientX, e.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(o)
                }
            })
        })
    }, d.prototype.select = function (e, i, o, t) {
        this.config;
        var r = j({h: e, s: 100, b: 100}), e = (j({h: e, s: i, b: o}), e / 360 * 180), o = 180 - o / 100 * 180 - 3,
            i = i / 100 * 260 - 3;
        this.elemPicker.find("." + B).css("top", e), this.elemPicker.find("." + I)[0].style.background = "#" + r, this.elemPicker.find("." + E).css({
            top: o,
            left: i
        })
    }, d.prototype.pickerEvents = function () {
        var c = this, a = c.config, s = c.elemColorBox.find("." + C), d = c.elemPicker.find("." + M + " input"), o = {
            clear: function (e) {
                s[0].style.background = "", c.elemColorBox.find("." + w).removeClass(x).addClass(P), c.color = "", a.done && a.done(""), c.removePicker()
            }, confirm: function (e, i) {
                var o, t, r, n, l = k.trim(d.val());
                -1 < l.indexOf(",") ? (t = Y(F(l)), c.select(t.h, t.s, t.b), s[0].style.background = o = "#" + j(t), 3 < (l.match(/[0-9]{1,3}/g) || []).length && "rgba" === s.attr("lay-type") && (r = 280 * l.slice(l.lastIndexOf(",") + 1, l.length - 1), c.elemPicker.find("." + D).css("left", r), o = s[0].style.background = l)) : (3 === (r = -1 < (r = l).indexOf("#") ? r.substring(1) : r).length && (r = (n = r.split(""))[0] + n[0] + n[1] + n[1] + n[2] + n[2]), n = {
                    r: (r = parseInt(r, 16)) >> 16,
                    g: (65280 & r) >> 8,
                    b: 255 & r
                }, t = Y(n), s[0].style.background = o = "#" + j(t), c.elemColorBox.find("." + w).removeClass(P).addClass(x)), "change" === i ? (c.select(t.h, t.s, t.b, i), a.change && a.change(o)) : (c.color = l, a.done && a.done(l), c.removePicker())
            }
        };
        c.elemPicker.on("click", "*[colorpicker-events]", function () {
            var e = k(this), i = e.attr("colorpicker-events");
            o[i] && o[i].call(this, e)
        }), d.on("keyup", function (e) {
            var i = k(this);
            o.confirm.call(this, i, 13 === e.keyCode ? null : "change")
        })
    }, d.prototype.events = function () {
        var e = this;
        e.config;
        e.elemColorBox.on("click", function () {
            e.renderPicker(), k(a)[0] && (e.val(), e.side())
        })
    }, s.on(i, function (e) {
        var i, o, t;
        n.thisId && (i = l.getThis(n.thisId)) && (o = i.config, t = i.elemColorBox.find("." + C), k(e.target).hasClass(c) || k(e.target).parents("." + c)[0] || k(e.target).hasClass(a.replace(/\./g, "")) || k(e.target).parents(a)[0] || i.elemPicker && (i.color ? (e = Y(F(i.color)), i.select(e.h, e.s, e.b)) : i.elemColorBox.find("." + w).removeClass(x).addClass(P), t[0].style.background = i.color || "", "function" == typeof o.cancel && o.cancel(i.color), i.removePicker()))
    }), L.on("resize", function () {
        if (n.thisId) {
            var e = l.getThis(n.thisId);
            if (e) return !(!e.elemPicker || !k(a)[0]) && void e.position()
        }
    }), l.that = {}, l.getThis = function (e) {
        var i = l.that[e];
        return i || o.error(e ? t + " instance with ID '" + e + "' not found" : "ID argument required"), i
    }, n.render = function (e) {
        e = new d(e);
        return l.call(e)
    }, e(t, n)
});
layui.define("jquery", function (t) {
    "use strict";
    var u = layui.$, d = (layui.hint(), layui.device()), c = "element", r = "layui-this", h = "layui-show",
        o = ".layui-tab-title", i = function () {
            this.config = {}
        }, y = (i.prototype.set = function (t) {
            return u.extend(!0, this.config, t), this
        }, i.prototype.on = function (t, i) {
            return layui.onevent.call(this, c, t, i)
        }, i.prototype.tabAdd = function (t, i) {
            var a, e = u(".layui-tab[lay-filter=" + t + "]"), l = e.children(o), n = l.children(".layui-tab-bar"),
                e = e.children(".layui-tab-content"), s = "<li" + (a = [], layui.each(i, function (t, i) {
                    /^(title|content)$/.test(t) || a.push("lay-" + t + '="' + i + '"')
                }), 0 < a.length && a.unshift(""), a.join(" ")) + ">" + (i.title || "unnaming") + "</li>";
            return n[0] ? n.before(s) : l.append(s), e.append('<div class="layui-tab-item">' + (i.content || "") + "</div>"), i.change && this.tabChange(t, i.id), l.data("LAY_TAB_CHANGE", i.change), C.tabAuto(i.change ? "change" : null), this
        }, i.prototype.tabDelete = function (t, i) {
            t = u(".layui-tab[lay-filter=" + t + "]").children(o).find('>li[lay-id="' + i + '"]');
            return C.tabDelete(null, t), this
        }, i.prototype.tabChange = function (t, i) {
            t = u(".layui-tab[lay-filter=" + t + "]").children(o).find('>li[lay-id="' + i + '"]');
            return C.tabClick.call(t[0], {liElem: t}), this
        }, i.prototype.tab = function (a) {
            a = a || {}, e.on("click", a.headerElem, function (t) {
                var i = u(this).index();
                C.tabClick.call(this, {index: i, options: a})
            })
        }, i.prototype.progress = function (t, i) {
            var a = "layui-progress", t = u("." + a + "[lay-filter=" + t + "]").find("." + a + "-bar"),
                a = t.find("." + a + "-text");
            return t.css("width", function () {
                return /^.+\/.+$/.test(i) ? 100 * new Function("return " + i)() + "%" : i
            }).attr("lay-percent", i), a.text(i), this
        }, ".layui-nav"), f = "layui-nav-item", p = "layui-nav-bar", b = "layui-nav-tree", v = "layui-nav-child",
        m = "layui-nav-more", g = "layui-anim layui-anim-upbit", C = {
            tabClick: function (t) {
                var i = (t = t || {}).options || {}, a = t.liElem || u(this),
                    e = i.headerElem ? a.parent() : a.parents(".layui-tab").eq(0),
                    i = i.bodyElem ? u(i.bodyElem) : e.children(".layui-tab-content").children(".layui-tab-item"),
                    l = a.find("a"), l = "javascript:;" !== l.attr("href") && "_blank" === l.attr("target"),
                    n = "string" == typeof a.attr("lay-unselect"), s = e.attr("lay-filter"),
                    t = "index" in t ? t.index : a.parent().children("li").index(a);
                l || n || (a.addClass(r).siblings().removeClass(r), i.eq(t).addClass(h).siblings().removeClass(h)), layui.event.call(this, c, "tab(" + s + ")", {
                    elem: e,
                    index: t
                })
            }, tabDelete: function (t, i) {
                var i = i || u(this).parent(), a = i.parent().children("li").index(i), e = i.closest(".layui-tab"),
                    l = e.children(".layui-tab-content").children(".layui-tab-item"), n = e.attr("lay-filter");
                i.hasClass(r) && (i.next()[0] && i.next().is("li") ? C.tabClick.call(i.next()[0], {index: a + 1}) : i.prev()[0] && i.prev().is("li") && C.tabClick.call(i.prev()[0], null, a - 1)), i.remove(), l.eq(a).remove(), setTimeout(function () {
                    C.tabAuto()
                }, 50), layui.event.call(this, c, "tabDelete(" + n + ")", {elem: e, index: a})
            }, tabAuto: function (l) {
                var n = "layui-tab-more", s = "layui-tab-bar", o = "layui-tab-close", c = this;
                u(".layui-tab").each(function () {
                    var t, i = u(this), a = i.children(".layui-tab-title"),
                        e = (i.children(".layui-tab-content").children(".layui-tab-item"), 'lay-stope="tabmore"'),
                        e = u('<span class="layui-unselect layui-tab-bar" ' + e + "><i " + e + ' class="layui-icon">&#xe61a;</i></span>');
                    c === window && d.ie, i.attr("lay-allowclose") && a.find("li").each(function () {
                        var t, i = u(this);
                        i.find("." + o)[0] || ((t = u('<i class="layui-icon layui-icon-close layui-unselect ' + o + '"></i>')).on("click", C.tabDelete), i.append(t))
                    }), "string" != typeof i.attr("lay-unauto") && (a.prop("scrollWidth") > a.outerWidth() + 1 || a.find("li").length && a.height() > (t = a.find("li").eq(0).height()) + t / 2 ? ("change" === l && a.data("LAY_TAB_CHANGE") && a.addClass(n), a.find("." + s)[0] || (a.append(e), i.attr("overflow", ""), e.on("click", function (t) {
                        var i = a.hasClass(n);
                        a[i ? "removeClass" : "addClass"](n)
                    }))) : (a.find("." + s).remove(), i.removeAttr("overflow")))
                })
            }, hideTabMore: function (t) {
                var i = u(".layui-tab-title");
                !0 !== t && "tabmore" === u(t.target).attr("lay-stope") || (i.removeClass("layui-tab-more"), i.find(".layui-tab-bar").attr("title", ""))
            }, clickThis: function () {
                var t = u(this), i = t.closest(y), a = i.attr("lay-filter"), e = t.parent(), l = t.siblings("." + v),
                    n = "string" == typeof e.attr("lay-unselect");
                if ("javascript:;" !== t.attr("href") && "_blank" === t.attr("target") || n || l[0] || (i.find("." + r).removeClass(r), e.addClass(r)), i.hasClass(b)) {
                    var n = f + "ed", s = !e.hasClass(n), o = function () {
                        u(this).css({display: ""}), i.children("." + p).css({opacity: 0})
                    };
                    if (l.is(":animated")) return;
                    l.removeClass(g), l[0] && (s ? (l.slideDown(200, o), e.addClass(n)) : (e.removeClass(n), l.show().slideUp(200, o)), "string" != typeof i.attr("lay-accordion") && "all" !== i.attr("lay-shrink") || ((s = e.siblings("." + n)).removeClass(n), s.children("." + v).show().stop().slideUp(200, o)))
                }
                layui.event.call(this, c, "nav(" + a + ")", t)
            }, collapse: function () {
                var t = u(this), i = t.find(".layui-colla-icon"), a = t.siblings(".layui-colla-content"),
                    e = t.parents(".layui-collapse").eq(0), l = e.attr("lay-filter"), n = "none" === a.css("display");
                "string" == typeof e.attr("lay-accordion") && ((e = e.children(".layui-colla-item").children("." + h)).siblings(".layui-colla-title").children(".layui-colla-icon").html("&#xe602;"), e.removeClass(h)), a[n ? "addClass" : "removeClass"](h), i.html(n ? "&#xe61a;" : "&#xe602;"), layui.event.call(this, c, "collapse(" + l + ")", {
                    title: t,
                    content: a,
                    show: n
                })
            }
        }, a = (i.prototype.render = i.prototype.init = function (t, i) {
            var a = i ? '[lay-filter="' + i + '"]' : "", i = {
                tab: function () {
                    C.tabAuto.call({})
                }, nav: function () {
                    var s = {}, o = {}, c = {}, r = "layui-nav-title";
                    u(y + a).each(function (t) {
                        var i = u(this), a = u('<span class="' + p + '"></span>'), e = i.find("." + f);
                        i.find("." + p)[0] || (i.append(a), (i.hasClass(b) ? e.find("dd,>." + r) : e).on("mouseenter", function () {
                            !function (t, i, a) {
                                var e, l = u(this), n = l.find("." + v);
                                i.hasClass(b) ? n[0] || (e = l.children("." + r), t.css({
                                    top: l.offset().top - i.offset().top,
                                    height: (e[0] ? e : l).outerHeight(),
                                    opacity: 1
                                })) : (n.addClass(g), n.hasClass("layui-nav-child-c") && n.css({left: -(n.outerWidth() - l.width()) / 2}), n[0] ? t.css({
                                    left: t.position().left + t.width() / 2,
                                    width: 0,
                                    opacity: 0
                                }) : t.css({
                                    left: l.position().left + parseFloat(l.css("marginLeft")),
                                    top: l.position().top + l.height() - t.height()
                                }), s[a] = setTimeout(function () {
                                    t.css({width: n[0] ? 0 : l.width(), opacity: n[0] ? 0 : 1})
                                }, d.ie && d.ie < 10 ? 0 : 200), clearTimeout(c[a]), "block" === n.css("display") && clearTimeout(o[a]), o[a] = setTimeout(function () {
                                    n.addClass(h), l.find("." + m).addClass(m + "d")
                                }, 300))
                            }.call(this, a, i, t)
                        }).on("mouseleave", function () {
                            i.hasClass(b) ? a.css({
                                height: 0,
                                opacity: 0
                            }) : (clearTimeout(o[t]), o[t] = setTimeout(function () {
                                i.find("." + v).removeClass(h), i.find("." + m).removeClass(m + "d")
                            }, 300))
                        }), i.on("mouseleave", function () {
                            clearTimeout(s[t]), c[t] = setTimeout(function () {
                                i.hasClass(b) || a.css({width: 0, left: a.position().left + a.width() / 2, opacity: 0})
                            }, 200)
                        })), e.find("a").each(function () {
                            var t = u(this);
                            t.parent();
                            t.siblings("." + v)[0] && !t.children("." + m)[0] && t.append('<i class="layui-icon layui-icon-down ' + m + '"></i>'), t.off("click", C.clickThis).on("click", C.clickThis)
                        })
                    })
                }, breadcrumb: function () {
                    u(".layui-breadcrumb" + a).each(function () {
                        var t = u(this), i = "lay-separator", a = t.attr(i) || "/", e = t.find("a");
                        e.next("span[" + i + "]")[0] || (e.each(function (t) {
                            t !== e.length - 1 && u(this).after("<span " + i + ">" + a + "</span>")
                        }), t.css("visibility", "visible"))
                    })
                }, progress: function () {
                    var e = "layui-progress";
                    u("." + e + a).each(function () {
                        var t = u(this), i = t.find(".layui-progress-bar"), a = i.attr("lay-percent");
                        i.css("width", function () {
                            return /^.+\/.+$/.test(a) ? 100 * new Function("return " + a)() + "%" : a
                        }), t.attr("lay-showpercent") && setTimeout(function () {
                            i.html('<span class="' + e + '-text">' + a + "</span>")
                        }, 350)
                    })
                }, collapse: function () {
                    u(".layui-collapse" + a).each(function () {
                        u(this).find(".layui-colla-item").each(function () {
                            var t = u(this), i = t.find(".layui-colla-title"),
                                t = "none" === t.find(".layui-colla-content").css("display");
                            i.find(".layui-colla-icon").remove(), i.append('<i class="layui-icon layui-colla-icon">' + (t ? "&#xe602;" : "&#xe61a;") + "</i>"), i.off("click", C.collapse).on("click", C.collapse)
                        })
                    })
                }
            };
            return i[t] ? i[t]() : layui.each(i, function (t, i) {
                i()
            })
        }, new i), e = u(document);
    u(function () {
        a.render()
    }), e.on("click", ".layui-tab-title li", C.tabClick), u(window).on("resize", C.tabAuto), t(c, a)
});
layui.define(["lay", "layer"], function (e) {
    "use strict";
    var x = layui.$, a = layui.lay, i = layui.layer, b = layui.device(), t = "upload", r = "layui_" + t + "_index",
        o = {
            config: {}, index: layui[t] ? layui[t].index + 1e4 : 0, set: function (e) {
                var i = this;
                return i.config = x.extend({}, i.config, e), i
            }, on: function (e, i) {
                return layui.onevent.call(this, t, e, i)
            }
        }, l = function () {
            var i = this, e = i.config.id;
            return {
                upload: function (e) {
                    i.upload.call(i, e)
                }, reload: function (e) {
                    i.reload.call(i, e)
                }, config: (l.that[e] = i).config
            }
        }, u = "layui-upload-file", f = "layui-upload-form", F = "layui-upload-iframe", w = "layui-upload-choose",
        L = "UPLOADING", j = function (e) {
            var i = this;
            i.index = ++o.index, i.config = x.extend({}, i.config, o.config, e), i.render()
        };
    j.prototype.config = {
        accept: "images",
        exts: "",
        auto: !0,
        bindAction: "",
        url: "",
        force: "",
        field: "file",
        acceptMime: "",
        method: "post",
        data: {},
        drag: !0,
        size: 0,
        number: 0,
        multiple: !1,
        text: {
            "cross-domain": "Cross-domain requests are not supported",
            "data-format-error": "Please return JSON data format",
            "check-error": "",
            error: "",
            "limit-number": null,
            "limit-size": null
        }
    }, j.prototype.reload = function (e) {
        var i = this;
        i.config = x.extend({}, i.config, e), i.render(!0)
    }, j.prototype.render = function (e) {
        var i = this, t = i.config, n = x(t.elem);
        return 1 < n.length ? (layui.each(n, function () {
            o.render(x.extend({}, t, {elem: this}))
        }), i) : (x.extend(t, a.options(n[0], {attr: n.attr("lay-data") ? "lay-data" : null})), !e && n[0] && n.data(r) ? (e = l.getThis(n.data(r))) ? e.reload(t) : void 0 : (t.elem = x(t.elem), t.bindAction = x(t.bindAction), t.id = "id" in t ? t.id : n.attr("id") || i.index, i.file(), void i.events()))
    }, j.prototype.file = function () {
        var e = this, i = e.config,
            t = e.elemFile = x(['<input class="' + u + '" type="file" accept="' + i.acceptMime + '" name="' + i.field + '"', i.multiple ? " multiple" : "", ">"].join("")),
            n = i.elem.next();
        (n.hasClass(u) || n.hasClass(f)) && n.remove(), b.ie && b.ie < 10 && i.elem.wrap('<div class="layui-upload-wrap"></div>'), e.isFile() ? (e.elemFile = i.elem, i.field = i.elem[0].name) : i.elem.after(t), b.ie && b.ie < 10 && e.initIE()
    }, j.prototype.initIE = function () {
        var t, e = this.config,
            i = x('<iframe id="' + F + '" class="' + F + '" name="' + F + '" frameborder="0"></iframe>'),
            n = x(['<form target="' + F + '" class="' + f + '" method="post" key="set-mine" enctype="multipart/form-data" action="' + e.url + '">', "</form>"].join(""));
        x("#" + F)[0] || x("body").append(i), e.elem.next().hasClass(f) || (this.elemFile.wrap(n), e.elem.next("." + f).append((t = [], layui.each(e.data, function (e, i) {
            i = "function" == typeof i ? i() : i, t.push('<input type="hidden" name="' + e + '" value="' + i + '">')
        }), t.join(""))))
    }, j.prototype.msg = function (e) {
        return i.msg(e, {icon: 2, shift: 6})
    }, j.prototype.isFile = function () {
        var e = this.config.elem[0];
        if (e) return "input" === e.tagName.toLocaleLowerCase() && "file" === e.type
    }, j.prototype.preview = function (n) {
        window.FileReader && layui.each(this.chooseFiles, function (e, i) {
            var t = new FileReader;
            t.readAsDataURL(i), t.onload = function () {
                n && n(e, i, this.result)
            }
        })
    }, j.prototype.upload = function (e, i) {
        var t, n, a, o, u = this, f = u.config, c = f.text || {}, l = u.elemFile[0], s = function () {
            return e || u.files || u.chooseFiles || l.files
        }, r = function () {
            var a = 0, o = 0, l = s(), r = function () {
                f.multiple && a + o === u.fileLength && "function" == typeof f.allDone && f.allDone({
                    total: u.fileLength,
                    successful: a,
                    failed: o
                })
            }, t = function (t) {
                var n = new FormData, i = function (e) {
                    t.unified ? layui.each(l, function (e, i) {
                        delete i[L]
                    }) : delete e[L]
                };
                if (layui.each(f.data, function (e, i) {
                    i = "function" == typeof i ? i() : i, n.append(e, i)
                }), t.unified) layui.each(l, function (e, i) {
                    i[L] || (i[L] = !0, n.append(f.field, i))
                }); else {
                    if (t.file[L]) return;
                    n.append(f.field, t.file), t.file[L] = !0
                }
                var e = {
                    url: f.url,
                    type: "post",
                    data: n,
                    dataType: f.dataType || "json",
                    contentType: !1,
                    processData: !1,
                    headers: f.headers || {},
                    success: function (e) {
                        f.unified ? a += u.fileLength : a++, p(t.index, e), r(t.index), i(t.file)
                    },
                    error: function (e) {
                        f.unified ? o += u.fileLength : o++, u.msg(c.error || ["Upload failed, please try again.", "status: " + (e.status || "") + " - " + (e.statusText || "error")].join("<br>")), m(t.index), r(t.index), i(t.file)
                    }
                };
                "function" == typeof f.progress && (e.xhr = function () {
                    var e = x.ajaxSettings.xhr();
                    return e.upload.addEventListener("progress", function (e) {
                        var i;
                        e.lengthComputable && (i = Math.floor(e.loaded / e.total * 100), f.progress(i, (f.item || f.elem)[0], e, t.index))
                    }), e
                }), x.ajax(e)
            };
            f.unified ? t({unified: !0, index: 0}) : layui.each(l, function (e, i) {
                t({index: e, file: i})
            })
        }, d = function () {
            var n = x("#" + F);
            u.elemFile.parent().submit(), clearInterval(j.timer), j.timer = setInterval(function () {
                var e, i = n.contents().find("body");
                try {
                    e = i.text()
                } catch (t) {
                    u.msg(c["cross-domain"]), clearInterval(j.timer), m()
                }
                e && (clearInterval(j.timer), i.html(""), p(0, e))
            }, 30)
        }, p = function (e, i) {
            if (u.elemFile.next("." + w).remove(), l.value = "", "json" === f.force && "object" != typeof i) try {
                i = JSON.parse(i)
            } catch (t) {
                return i = {}, u.msg(c["data-format-error"])
            }
            "function" == typeof f.done && f.done(i, e || 0, function (e) {
                u.upload(e)
            })
        }, m = function (e) {
            f.auto && (l.value = ""), "function" == typeof f.error && f.error(e || 0, function (e) {
                u.upload(e)
            })
        }, h = f.exts, g = (n = [], layui.each(e || u.chooseFiles, function (e, i) {
            n.push(i.name)
        }), n), v = {
            preview: function (e) {
                u.preview(e)
            }, upload: function (e, i) {
                var t = {};
                t[e] = i, u.upload(t)
            }, pushFile: function () {
                return u.files = u.files || {}, layui.each(u.chooseFiles, function (e, i) {
                    u.files[e] = i
                }), u.files
            }, resetFile: function (e, i, t) {
                i = new File([i], t);
                u.files = u.files || {}, u.files[e] = i
            }
        }, y = {
            file: "\u6587\u4ef6",
            images: "\u56fe\u7247",
            video: "\u89c6\u9891",
            audio: "\u97f3\u9891"
        }[f.accept] || "\u6587\u4ef6", g = 0 === g.length ? l.value.match(/[^\/\\]+\..+/g) || [] : g;
        if (0 !== g.length) {
            switch (f.accept) {
                case"file":
                    layui.each(g, function (e, i) {
                        if (h && !RegExp(".\\.(" + h + ")$", "i").test(escape(i))) return t = !0
                    });
                    break;
                case"video":
                    layui.each(g, function (e, i) {
                        if (!RegExp(".\\.(" + (h || "avi|mp4|wma|rmvb|rm|flash|3gp|flv") + ")$", "i").test(escape(i))) return t = !0
                    });
                    break;
                case"audio":
                    layui.each(g, function (e, i) {
                        if (!RegExp(".\\.(" + (h || "mp3|wav|mid") + ")$", "i").test(escape(i))) return t = !0
                    });
                    break;
                default:
                    layui.each(g, function (e, i) {
                        if (!RegExp(".\\.(" + (h || "jpg|png|gif|bmp|jpeg|svg") + ")$", "i").test(escape(i))) return t = !0
                    })
            }
            if (t) return u.msg(c["check-error"] || "\u9009\u62e9\u7684" + y + "\u4e2d\u5305\u542b\u4e0d\u652f\u6301\u7684\u683c\u5f0f"), l.value = "";
            if ("choose" !== i && !f.auto || (f.choose && f.choose(v), "choose" !== i)) {
                if (u.fileLength = (a = 0, y = s(), layui.each(y, function () {
                    a++
                }), a), f.number && u.fileLength > f.number) return u.msg("function" == typeof c["limit-number"] ? c["limit-number"](f, u.fileLength) : "\u540c\u65f6\u6700\u591a\u53ea\u80fd\u4e0a\u4f20: " + f.number + " \u4e2a\u6587\u4ef6<br>\u60a8\u5f53\u524d\u5df2\u7ecf\u9009\u62e9\u4e86: " + u.fileLength + " \u4e2a\u6587\u4ef6");
                if (0 < f.size && !(b.ie && b.ie < 10)) if (layui.each(s(), function (e, i) {
                    i.size > 1024 * f.size && (i = 1 <= (i = f.size / 1024) ? i.toFixed(2) + "MB" : f.size + "KB", l.value = "", o = i)
                }), o) return u.msg("function" == typeof c["limit-size"] ? c["limit-size"](f, o) : "\u6587\u4ef6\u5927\u5c0f\u4e0d\u80fd\u8d85\u8fc7 " + o);
                if (!f.before || !1 !== f.before(v)) b.ie ? (9 < b.ie ? r : d)() : r()
            }
        }
    }, j.prototype.events = function () {
        var n = this, a = n.config, o = function (e) {
            n.chooseFiles = {}, layui.each(e, function (e, i) {
                var t = (new Date).getTime();
                n.chooseFiles[t + "-" + e] = i
            })
        }, l = function (e, i) {
            var t = n.elemFile,
                e = (a.item || a.elem, 1 < e.length ? e.length + "\u4e2a\u6587\u4ef6" : (e[0] || {}).name || t[0].value.match(/[^\/\\]+\..+/g) || []);
            t.next().hasClass(w) && t.next().remove(), n.upload(null, "choose"), n.isFile() || a.choose || t.after('<span class="layui-inline ' + w + '">' + e + "</span>")
        };
        a.elem.off("upload.start").on("upload.start", function () {
            var e = x(this);
            n.config.item = e, n.elemFile[0].click()
        }), b.ie && b.ie < 10 || a.elem.off("upload.over").on("upload.over", function () {
            x(this).attr("lay-over", "")
        }).off("upload.leave").on("upload.leave", function () {
            x(this).removeAttr("lay-over")
        }).off("upload.drop").on("upload.drop", function (e, i) {
            var t = x(this), i = i.originalEvent.dataTransfer.files || [];
            t.removeAttr("lay-over"), o(i), a.auto ? n.upload() : l(i)
        }), n.elemFile.on("change", function () {
            var e = this.files || [];
            0 !== e.length && (o(e), a.auto ? n.upload() : l(e))
        }), a.bindAction.off("upload.action").on("upload.action", function () {
            n.upload()
        }), a.elem.data(r) || (a.elem.on("click", function () {
            n.isFile() || x(this).trigger("upload.start")
        }), a.drag && a.elem.on("dragover", function (e) {
            e.preventDefault(), x(this).trigger("upload.over")
        }).on("dragleave", function (e) {
            x(this).trigger("upload.leave")
        }).on("drop", function (e) {
            e.preventDefault(), x(this).trigger("upload.drop", e)
        }), a.bindAction.on("click", function () {
            x(this).trigger("upload.action")
        }), a.elem.data(r, a.id))
    }, l.that = {}, l.getThis = function (e) {
        var i = l.that[e];
        return i || hint.error(e ? t + " instance with ID '" + e + "' not found" : "ID argument required"), i
    }, o.render = function (e) {
        e = new j(e);
        return l.call(e)
    }, e(t, o)
});
layui.define(["lay", "layer", "util"], function (e) {
    "use strict";
    var C = layui.$, h = layui.layer, d = layui.util, l = layui.hint(), w = (layui.device(), "form"), o = ".layui-form",
        N = "layui-this", T = "layui-hide", $ = "layui-disabled", t = function () {
            this.config = {
                verify: {
                    required: function (e) {
                        if (!/[\S]+/.test(e)) return "\u5fc5\u586b\u9879\u4e0d\u80fd\u4e3a\u7a7a"
                    }, phone: function (e) {
                        if (e && !/^1\d{10}$/.test(e)) return "\u624b\u673a\u53f7\u683c\u5f0f\u4e0d\u6b63\u786e"
                    }, email: function (e) {
                        if (e && !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e)) return "\u90ae\u7bb1\u683c\u5f0f\u4e0d\u6b63\u786e"
                    }, url: function (e) {
                        if (e && !/^(#|(http(s?)):\/\/|\/\/)[^\s]+\.[^\s]+$/.test(e)) return "\u94fe\u63a5\u683c\u5f0f\u4e0d\u6b63\u786e"
                    }, number: function (e) {
                        if (e && isNaN(e)) return "\u53ea\u80fd\u586b\u5199\u6570\u5b57"
                    }, date: function (e) {
                        if (e && !/^(\d{4})[-\/](\d{1}|0\d{1}|1[0-2])([-\/](\d{1}|0\d{1}|[1-2][0-9]|3[0-1]))*$/.test(e)) return "\u65e5\u671f\u683c\u5f0f\u4e0d\u6b63\u786e"
                    }, identity: function (e) {
                        if (e && !/(^\d{15}$)|(^\d{17}(x|X|\d)$)/.test(e)) return "\u8eab\u4efd\u8bc1\u53f7\u683c\u5f0f\u4e0d\u6b63\u786e"
                    }
                }, autocomplete: null
            }
        }, i = (t.prototype.set = function (e) {
            return C.extend(!0, this.config, e), this
        }, t.prototype.verify = function (e) {
            return C.extend(!0, this.config.verify, e), this
        }, t.prototype.getFormElem = function (e) {
            return C(o + (e ? '[lay-filter="' + e + '"]' : ""))
        }, t.prototype.on = function (e, t) {
            return layui.onevent.call(this, w, e, t)
        }, t.prototype.val = function (e, i) {
            return this.getFormElem(e).each(function (e, t) {
                var a = C(this);
                layui.each(i, function (e, t) {
                    var i, e = a.find('[name="' + e + '"]');
                    e[0] && ("checkbox" === (i = e[0].type) ? e[0].checked = t : "radio" === i ? e.each(function () {
                        this.checked = this.value == t
                    }) : e.val(t))
                })
            }), r.render(null, e), this.getValue(e)
        }, t.prototype.getValue = function (e, t) {
            t = t || this.getFormElem(e);
            var a = {}, n = {}, e = t.find("input,select,textarea");
            return layui.each(e, function (e, t) {
                var i;
                C(this);
                t.name = (t.name || "").replace(/^\s*|\s*&/, ""), t.name && (/^.*\[\]$/.test(t.name) && (i = t.name.match(/^(.*)\[\]$/g)[0], a[i] = 0 | a[i], i = t.name.replace(/^(.*)\[\]$/, "$1[" + a[i]++ + "]")), /^(checkbox|radio)$/.test(t.type) && !t.checked || (n[i || t.name] = t.value))
            }), n
        }, t.prototype.render = function (e, t) {
            var i = this.config, a = C(o + (t ? '[lay-filter="' + t + '"]' : "")), n = {
                input: function (e) {
                    var e = e || a.find("input,textarea"),
                        t = (i.autocomplete && e.attr("autocomplete", i.autocomplete), function (e, t) {
                            var i = e.val(), a = Number(i), n = Number(e.attr("step")) || 1, l = Number(e.attr("min")),
                                r = Number(e.attr("max")), s = Number(e.attr("lay-precision")),
                                o = "click" !== t && "" === i, c = "init" === t;
                            isNaN(a) || ("click" === t && (a = !!C(this).index() ? a - n : a + n), t = function (e) {
                                return ((e.toString().match(/\.(\d+$)/) || [])[1] || "").length
                            }, s = 0 <= s ? s : Math.max(t(n), t(i)), o || (c || r <= (a = a <= l ? l : a) && (a = r), s && (a = a.toFixed(s)), e.val(a)), e[(a < l || r < a) && !o ? "addClass" : "removeClass"]("layui-input-number-out-of-range"), c) || ((n = {
                                increment: e.next().find(".layui-icon-up"),
                                decrement: e.next().find(".layui-icon-down")
                            }).increment[r <= a && !o ? "addClass" : "removeClass"]($), n.decrement[a <= l && !o ? "addClass" : "removeClass"]($))
                        });
                    a.find("input[lay-affix],textarea[lay-affix]").each(function () {
                        var r = C(this), s = r.attr("lay-affix"), o = "layui-input-wrap", c = "layui-input-suffix",
                            u = "layui-input-affix", e = r.is("[disabled]") || r.is("[readonly]"), d = function (e, t) {
                                (e = C(e))[0] && e[C.trim(t) ? "removeClass" : "addClass"](T)
                            }, n = function (i) {
                                i = C.extend({}, f[s] || {value: s}, i, lay.options(r[0]));
                                var a, t = C('<div class="' + u + '">'), e = layui.isArray(i.value) ? i.value : [i.value],
                                    e = C((a = [], layui.each(e, function (e, t) {
                                        a.push('<i class="layui-icon layui-icon-' + t + (i.disabled ? " " + $ : "") + '"></i>')
                                    }), a.join(""))),
                                    n = (t.append(e), i.split && t.addClass("layui-input-split"), i.className && t.addClass(i.className), r.next("." + u)),
                                    l = (n[0] && n.remove(), r.parent().hasClass(o) || r.wrap('<div class="' + o + '"></div>'), r.next("." + c));
                                l[0] ? ((n = l.find("." + u))[0] && n.remove(), l.prepend(t), r.css("padding-right", function () {
                                    return (r.closest(".layui-input-group")[0] ? 0 : l.outerWidth()) + t.outerWidth()
                                })) : (t.addClass(c), r.after(t)), "auto" === i.show && d(t, r.val()), "function" == typeof i.init && i.init.call(this, r, i), r.on("input propertychange", function () {
                                    var e = this.value;
                                    "auto" === i.show && d(t, e)
                                }), r.on("blur", function () {
                                    "function" == typeof i.blur && i.blur.call(this, r, i)
                                }), e.on("click", function () {
                                    var e = r.attr("lay-filter");
                                    C(this).hasClass($) || ("function" == typeof i.click && i.click.call(this, r, i), layui.event.call(this, w, "input-affix(" + e + ")", {
                                        elem: r[0],
                                        affix: s,
                                        options: i
                                    }))
                                })
                            }, f = {
                                eye: {
                                    value: "eye-invisible", click: function (e, t) {
                                        var i = "LAY_FORM_INPUT_AFFIX_SHOW", a = e.data(i);
                                        e.attr("type", a ? "password" : "text").data(i, !a), n({value: a ? "eye-invisible" : "eye"})
                                    }
                                },
                                clear: {
                                    value: "clear", click: function (e) {
                                        e.val("").focus(), d(C(this).parent(), null)
                                    }, show: "auto", disabled: e
                                },
                                number: {
                                    value: ["up", "down"],
                                    split: !0,
                                    className: "layui-input-number",
                                    disabled: r.is("[disabled]"),
                                    init: function (e) {
                                        t.call(this, e, "init")
                                    },
                                    click: function (e) {
                                        t.call(this, e, "click")
                                    },
                                    blur: function (e) {
                                        t.call(this, e, "blur")
                                    }
                                }
                            };
                        n()
                    })
                }, select: function (e) {
                    var p, c = "\u8bf7\u9009\u62e9", m = "layui-form-select", g = "layui-select-title",
                        x = "layui-select-none", b = "", e = e || a.find("select"), k = function (e, t) {
                            C(e.target).parent().hasClass(g) && !t || (C("." + m).removeClass(m + "ed " + m + "up"), p && b && p.val(b)), p = null
                        }, u = function (a, e, t) {
                            var s, r, i, n, o, l, c = C(this), u = a.find("." + g), d = u.find("input"), f = a.find("dl"),
                                h = f.children("dd"), y = f.children("dt"), v = this.selectedIndex;
                            e || (r = c.attr("lay-search"), i = function () {
                                var e = a.offset().top + a.outerHeight() + 5 - F.scrollTop(), t = f.outerHeight();
                                v = c[0].selectedIndex, a.addClass(m + "ed"), h.removeClass(T), y.removeClass(T), s = null, h.removeClass(N), 0 <= v && h.eq(v).addClass(N), e + t > F.height() && t <= e && a.addClass(m + "up"), o()
                            }, n = function (e) {
                                a.removeClass(m + "ed " + m + "up"), d.blur(), s = null, e || l(d.val(), function (e) {
                                    var t = c[0].selectedIndex;
                                    e && (b = C(c[0].options[t]).html(), 0 === t && b === d.attr("placeholder") && (b = ""), d.val(b || ""))
                                })
                            }, o = function () {
                                var e, t, i = f.children("dd." + N);
                                i[0] && (e = i.position().top, t = f.height(), i = i.height(), t < e && f.scrollTop(e + f.scrollTop() - t + i - 5), e < 0) && f.scrollTop(e + f.scrollTop() - 5)
                            }, u.on("click", function (e) {
                                (a.hasClass(m + "ed") ? n : (k(e, !0), i))(), f.find("." + x).remove()
                            }), u.find(".layui-edge").on("click", function () {
                                d.focus()
                            }), d.on("keyup", function (e) {
                                9 === e.keyCode && i()
                            }).on("keydown", function (l) {
                                var e = l.keyCode, r = (9 === e && n(), function (a, n) {
                                    l.preventDefault();
                                    var e = function () {
                                        var e = f.children("dd." + N);
                                        if (f.children("dd." + T)[0] && "next" === a) {
                                            var t = f.children("dd:not(." + T + ",." + $ + ")"), i = t.eq(0).index();
                                            if (0 <= i && i < e.index() && !t.hasClass(N)) return t.eq(0).prev()[0] ? t.eq(0).prev() : f.children(":last")
                                        }
                                        return n && n[0] ? n : s && s[0] ? s : e
                                    }(), t = e[a](), i = e[a]("dd:not(." + T + ")");
                                    return t[0] ? (s = e[a](), i[0] && !i.hasClass($) || !s[0] ? (i.addClass(N).siblings().removeClass(N), void o()) : r(a, s)) : s = null
                                });
                                38 === e && r("prev"), 40 === e && r("next"), 13 === e && (l.preventDefault(), f.children("dd." + N).trigger("click"))
                            }), l = function (a, e, n) {
                                var l = 0, t = (layui.each(h, function () {
                                    var e = C(this), t = e.text(),
                                        i = ("cs" !== r && (t = t.toLowerCase(), a = a.toLowerCase()), -1 === t.indexOf(a));
                                    ("" === a || "blur" === n ? a !== t : i) && l++, "keyup" === n && e[i ? "addClass" : "removeClass"](T)
                                }), "keyup" === n && layui.each(y, function () {
                                    var e = C(this), t = e.nextUntil("dt").filter("dd");
                                    e[t.length == t.filter("." + T).length ? "addClass" : "removeClass"](T)
                                }), l === h.length);
                                return e(t), t
                            }, t && (e = "input propertychange", lay.ie && ("10" === lay.ie || "11" === lay.ie) && d.attr("placeholder") && (e = "keyup"), d.on(e, function (e) {
                                var t = this.value, e = e.keyCode;
                                if (9 === e || 13 === e || 37 === e || 38 === e || 39 === e || 40 === e) return !1;
                                l(t, function (e) {
                                    e ? f.find("." + x)[0] || f.append('<p class="' + x + '">\u65e0\u5339\u914d\u9879</p>') : f.find("." + x).remove()
                                }, "keyup"), "" === t && (c.val(""), f.find("." + N).removeClass(N), (c[0].options[0] || {}).value || f.children("dd:eq(0)").addClass(N), f.find("." + x).remove()), o()
                            }).on("blur", function (e) {
                                var t = c[0].selectedIndex;
                                p = d, b = C(c[0].options[t]).text(), 0 === t && b === d.attr("placeholder") && (b = ""), setTimeout(function () {
                                    l(d.val(), function (e) {
                                        b || d.val("")
                                    }, "blur")
                                }, 200)
                            })), h.on("click", function () {
                                var e = C(this), t = e.attr("lay-value"), i = c.attr("lay-filter");
                                return e.hasClass($) || (e.hasClass("layui-select-tips") ? d.val("") : (d.val(e.text()), e.addClass(N)), e.siblings().removeClass(N), c.val(t).removeClass("layui-form-danger"), layui.event.call(this, w, "select(" + i + ")", {
                                    elem: c[0],
                                    value: t,
                                    othis: a
                                }), n(!0)), !1
                            }), a.find("dl>dt").on("click", function (e) {
                                return !1
                            }), C(document).off("click", k).on("click", k))
                        };
                    e.each(function (e, t) {
                        var i = C(this), a = i.next("." + m), n = this.disabled, l = t.value,
                            r = C(t.options[t.selectedIndex]), t = t.options[0];
                        if ("string" == typeof i.attr("lay-ignore")) return i.show();
                        var s, o = "string" == typeof i.attr("lay-search"), t = t && !t.value && t.innerHTML || c,
                            r = C(['<div class="' + (o ? "" : "layui-unselect ") + m, (n ? " layui-select-disabled" : "") + '">', '<div class="' + g + '">', '<input type="text" placeholder="' + d.escape(C.trim(t)) + '" value="' + d.escape(C.trim(l ? r.html() : "")) + '"' + (!n && o ? "" : " readonly") + ' class="layui-input' + (o ? "" : " layui-unselect") + (n ? " " + $ : "") + '">', '<i class="layui-edge"></i></div>', '<dl class="layui-anim layui-anim-upbit' + (i.find("optgroup")[0] ? " layui-select-group" : "") + '">', (t = i.find("*"), s = [], layui.each(t, function (e, t) {
                                var i = t.tagName.toLowerCase();
                                0 !== e || t.value || "optgroup" === i ? s.push("optgroup" === i ? "<dt>" + t.label + "</dt>" : '<dd lay-value="' + d.escape(t.value) + '" class="' + (l === t.value ? N : "") + (t.disabled ? " " + $ : "") + '">' + C.trim(t.innerHTML) + "</dd>") : s.push('<dd lay-value="" class="layui-select-tips">' + C.trim(t.innerHTML || c) + "</dd>")
                            }), 0 === s.length && s.push('<dd lay-value="" class="' + $ + '">\u6ca1\u6709\u9009\u9879</dd>'), s.join("") + "</dl>"), "</div>"].join(""));
                        a[0] && a.remove(), i.after(r), u.call(this, r, n, o)
                    })
                }, checkbox: function (e) {
                    var o = {
                        checkbox: ["layui-form-checkbox", "layui-form-checked", "checkbox"],
                        "switch": ["layui-form-switch", "layui-form-onswitch", "switch"],
                        SUBTRA: "layui-icon-indeterminate"
                    }, e = e || a.find("input[type=checkbox]");
                    e.each(function (e, t) {
                        var i = C(this), a = i.attr("lay-skin") || "primary",
                            n = d.escape(C.trim(t.title || (t.title = i.attr("lay-text") || ""))), l = this.disabled,
                            r = o[a] || o.checkbox, s = i.next("." + r[0]);
                        if (s[0] && s.remove(), i.next("[lay-checkbox]")[0] && (n = i.next().html() || ""), n = "switch" === a ? n.split("|") : [n], "string" == typeof i.attr("lay-ignore")) return i.show();
                        l = C(['<div class="layui-unselect ' + r[0], t.checked ? " " + r[1] : "", l ? " layui-checkbox-disabled " + $ : "", '"', a ? ' lay-skin="' + a + '"' : "", ">", (s = {
                            checkbox: [n[0] ? "<div>" + n[0] + "</div>" : "primary" === a ? "" : "<div></div>", '<i class="layui-icon ' + ("primary" === a && !t.checked && i.get(0).indeterminate ? o.SUBTRA : "layui-icon-ok") + '"></i>'].join(""),
                            "switch": "<div>" + ((t.checked ? n[0] : n[1]) || "") + "</div><i></i>"
                        })[a] || s.checkbox, "</div>"].join(""));
                        i.after(l), function (a, n) {
                            var l = C(this);
                            a.on("click", function () {
                                var e = C(this), t = l.attr("lay-filter"),
                                    e = e.next("*[lay-checkbox]")[0] ? e.next().html() : l.attr("title") || "",
                                    i = l.attr("lay-skin") || "primary", e = "switch" === i ? e.split("|") : [e];
                                l[0].disabled || (l[0].indeterminate && (l[0].indeterminate = !1, a.find("." + o.SUBTRA).removeClass(o.SUBTRA).addClass("layui-icon-ok")), l[0].checked ? (l[0].checked = !1, a.removeClass(n[1]), "switch" === i && a.children("div").html(e[1])) : (l[0].checked = !0, a.addClass(n[1]), "switch" === i && a.children("div").html(e[0])), layui.event.call(l[0], w, n[2] + "(" + t + ")", {
                                    elem: l[0],
                                    value: l[0].value,
                                    othis: a
                                }))
                            })
                        }.call(this, l, r)
                    })
                }, radio: function (e) {
                    var r = "layui-form-radio", s = ["layui-icon-radio", "layui-icon-circle"],
                        e = e || a.find("input[type=radio]");
                    e.each(function (e, t) {
                        var i = C(this), a = i.next("." + r), n = this.disabled;
                        if ("string" == typeof i.attr("lay-ignore")) return i.show();
                        a[0] && a.remove();
                        n = C(['<div class="layui-unselect ' + r, t.checked ? " " + r + "ed" : "", (n ? " layui-radio-disabled " + $ : "") + '">', '<i class="layui-anim layui-icon ' + s[t.checked ? 0 : 1] + '"></i>', "<div>" + (a = d.escape(t.title || ""), a = i.next("[lay-radio]")[0] ? i.next().html() : a) + "</div>", "</div>"].join(""));
                        i.after(n), function (a) {
                            var n = C(this), l = "layui-anim-scaleSpring";
                            a.on("click", function () {
                                var e = n[0].name, t = n.parents(o), i = n.attr("lay-filter"),
                                    e = t.find("input[name=" + e.replace(/(\.|#|\[|\])/g, "\\$1") + "]");
                                n[0].disabled || (layui.each(e, function () {
                                    var e = C(this).next("." + r);
                                    this.checked = !1, e.removeClass(r + "ed"), e.children(".layui-icon").removeClass(l + " " + s[0]).addClass(s[1])
                                }), n[0].checked = !0, a.addClass(r + "ed"), a.children(".layui-icon").addClass(l + " " + s[0]), layui.event.call(n[0], w, "radio(" + i + ")", {
                                    elem: n[0],
                                    value: n[0].value,
                                    othis: a
                                }))
                            })
                        }.call(this, n)
                    })
                }
            }, t = function () {
                layui.each(n, function (e, t) {
                    t()
                })
            };
            return "object" === layui.type(e) ? C(e).is(o) ? (a = C(e), t()) : e.each(function (e, t) {
                var i = C(t);
                i.closest(o).length && ("SELECT" === t.tagName ? n.select(i) : "INPUT" === t.tagName && ("checkbox" === (t = t.type) || "radio" === t ? n[t](i) : n.input(i)))
            }) : e ? n[e] ? n[e]() : l.error('\u4e0d\u652f\u6301\u7684 "' + e + '" \u8868\u5355\u6e32\u67d3') : t(), this
        }, t.prototype.validate = function (e) {
            var u, d = this.config.verify, f = "layui-form-danger";
            return !(e = C(e))[0] || (e.attr("lay-verify") !== undefined || !1 !== this.validate(e.find("*[lay-verify]"))) && (layui.each(e, function (e, r) {
                var s = C(this), t = (s.attr("lay-verify") || "").split("|"), o = s.attr("lay-vertype"),
                    c = C.trim(s.val());
                if (s.removeClass(f), layui.each(t, function (e, t) {
                    var i = "", a = d[t];
                    if (a) {
                        var n = "function" == typeof a ? i = a(c, r) : !a[0].test(c),
                            l = "select" === r.tagName.toLowerCase() || /^(checkbox|radio)$/.test(r.type), i = i || a[1];
                        if ("required" === t && (i = s.attr("lay-reqtext") || i), n) return "tips" === o ? h.tips(i, "string" != typeof s.attr("lay-ignore") && l ? s.next() : s, {tips: 1}) : "alert" === o ? h.alert(i, {
                            title: "\u63d0\u793a",
                            shadeClose: !0
                        }) : /\b(string|number)\b/.test(typeof i) && h.msg(i, {icon: 5, shift: 6}), setTimeout(function () {
                            (l ? s.next().find("input") : r).focus()
                        }, 7), s.addClass(f), u = !0
                    }
                }), u) return u
            }), !u)
        }, t.prototype.submit = function (e, t) {
            var i = {}, a = C(this), e = "string" == typeof e ? e : a.attr("lay-filter"),
                n = this.getFormElem ? this.getFormElem(e) : a.parents(o).eq(0), l = n.find("*[lay-verify]");
            return !!r.validate(l) && (i = r.getValue(null, n), l = {
                elem: this.getFormElem ? window.event && window.event.target : this,
                form: (this.getFormElem ? n : a.parents("form"))[0],
                field: i
            }, "function" == typeof t && t(l), layui.event.call(this, w, "submit(" + e + ")", l))
        }), r = new t, t = C(document), F = C(window);
    C(function () {
        r.render()
    }), t.on("reset", o, function () {
        var e = C(this).attr("lay-filter");
        setTimeout(function () {
            r.render(null, e)
        }, 50)
    }), t.on("submit", o, i).on("click", "*[lay-submit]", i), e(w, r)
});
layui.define(["lay", "laytpl", "laypage", "form", "util"], function (n) {
    "use strict";
    var p = layui.$, r = layui.lay, m = layui.laytpl, O = layui.laypage, f = layui.layer, v = layui.form,
        g = layui.util, x = layui.hint(), b = layui.device(), k = {
            config: {
                checkName: "LAY_CHECKED",
                indexName: "LAY_INDEX",
                numbersName: "LAY_NUM",
                disabledName: "LAY_DISABLED"
            }, cache: {}, index: layui.table ? layui.table.index + 1e4 : 0, set: function (e) {
                return this.config = p.extend({}, this.config, e), this
            }, on: function (e, t) {
                return layui.onevent.call(this, N, e, t)
            }
        }, w = function () {
            var a = this, e = a.config, i = e.id || e.index;
            return {
                config: e, reload: function (e, t) {
                    a.reload.call(a, e, t)
                }, reloadData: function (e, t) {
                    k.reloadData(i, e, t)
                }, setColsWidth: function () {
                    a.setColsWidth.call(a)
                }, resize: function () {
                    a.resize.call(a)
                }
            }
        }, C = function (e) {
            var t = w.that[e];
            return t || x.error(e ? "The table instance with ID '" + e + "' not found" : "ID argument required"), t || null
        }, l = function (e) {
            var t = w.config[e];
            return t || x.error(e ? "The table instance with ID '" + e + "' not found" : "ID argument required"), t || null
        }, T = function (e) {
            var t = this.config || {}, a = (e = e || {}).item3, i = e.content;
            "numbers" === a.type && (i = e.tplData[k.config.numbersName]);
            ("escape" in a ? a : t).escape && (i = g.escape(i));
            t = e.text && a.exportTemplet || a.templet || a.toolbar;
            return t && (i = "function" == typeof t ? t.call(a, e.tplData, e.obj) : m(function (e) {
                try {
                    return r(e).html()
                } catch (t) {
                    return e
                }
            }(t) || String(i)).render(p.extend({LAY_COL: a}, e.tplData))), e.text ? p("<div>" + i + "</div>").text() : i
        }, N = "table", t = ".layui-table", R = "layui-hide", y = "layui-hide-v", h = "layui-none", D = "layui-table-view",
        o = ".layui-table-header", L = ".layui-table-body", u = ".layui-table-fixed-r", I = ".layui-table-pageview",
        A = ".layui-table-sort", E = "layui-table-checked", _ = "layui-table-edit", M = "layui-table-hover",
        P = "laytable-cell-group", W = "layui-table-col-special", j = "layui-table-tool-panel",
        H = "layui-table-expanded", S = "LAY_TABLE_MOVE_DICT", e = function (e) {
            return ['<table cellspacing="0" cellpadding="0" border="0" class="layui-table" ', '{{# if(d.data.skin){ }}lay-skin="{{=d.data.skin}}"{{# } }} {{# if(d.data.size){ }}lay-size="{{=d.data.size}}"{{# } }} {{# if(d.data.even){ }}lay-even{{# } }}>', "<thead>", "{{# layui.each(d.data.cols, function(i1, item1){ }}", "<tr>", "{{# layui.each(item1, function(i2, item2){ }}", '{{# if(item2.fixed && item2.fixed !== "right"){ left = true; } }}', '{{# if(item2.fixed === "right"){ right = true; } }}', (e = e || {}).fixed && "right" !== e.fixed ? '{{# if(item2.fixed && item2.fixed !== "right"){ }}' : "right" === e.fixed ? '{{# if(item2.fixed === "right"){ }}' : "", "{{# var isSort = !(item2.colGroup) && item2.sort; }}", '<th data-field="{{= item2.field||i2 }}" data-key="{{=d.index}}-{{=i1}}-{{=i2}}" {{# if( item2.parentKey){ }}data-parentkey="{{= item2.parentKey }}"{{# } }} {{# if(item2.minWidth){ }}data-minwidth="{{=item2.minWidth}}"{{# } }} {{# if(item2.maxWidth){ }}data-maxwidth="{{=item2.maxWidth}}"{{# } }} {{# if(item2.style){ }}style="{{=item2.style}}"{{# } }} {{#var colspan = layui.type(item2.colspan2) === \'number\' ? item2.colspan2 : item2.colspan; if(colspan){}} colspan="{{=colspan}}"{{#} if(item2.rowspan){}} rowspan="{{=item2.rowspan}}"{{#}}} {{# if(item2.unresize || item2.colGroup){ }}data-unresize="true"{{# } }} class="{{# if(item2.hide){ }}layui-hide{{# } }}{{# if(isSort){ }} layui-unselect{{# } }}{{# if(!item2.field){ }} layui-table-col-special{{# } }}"{{# if(item2.title){ }} title="{{ layui.$(\'<div>\' + item2.title + \'</div>\').text() }}"{{# } }}>', '<div class="layui-table-cell laytable-cell-', "{{# if(item2.colGroup){ }}", "group", "{{# } else { }}", "{{=d.index}}-{{=i1}}-{{=i2}}", '{{# if(item2.type !== "normal"){ }}', " laytable-cell-{{= item2.type }}", "{{# } }}", "{{# } }}", '" {{#if(item2.align){}}align="{{=item2.align}}"{{#}}}>', '{{# if(item2.type === "checkbox"){ }}', '<input type="checkbox" name="layTableCheckbox" lay-skin="primary" lay-filter="layTableAllChoose" {{# if(item2[d.data.checkName]){ }}checked{{# }; }}>', "{{# } else { }}", '<span>{{-item2.title||""}}</span>', "{{# if(isSort){ }}", '<span class="layui-table-sort layui-inline"><i class="layui-edge layui-table-sort-asc" title="\u5347\u5e8f"></i><i class="layui-edge layui-table-sort-desc" title="\u964d\u5e8f"></i></span>', "{{# } }}", "{{# } }}", "</div>", "</th>", e.fixed ? "{{# }; }}" : "", "{{# }); }}", "</tr>", "{{# }); }}", "</thead>", "</table>"].join("")
        },
        a = ['<table cellspacing="0" cellpadding="0" border="0" class="layui-table" ', '{{# if(d.data.skin){ }}lay-skin="{{=d.data.skin}}"{{# } }} {{# if(d.data.size){ }}lay-size="{{=d.data.size}}"{{# } }} {{# if(d.data.even){ }}lay-even{{# } }}>', "<tbody></tbody>", "</table>"].join(""),
        s = [, "{{# if(d.data.toolbar){ }}", '<div class="layui-table-tool">', '<div class="layui-table-tool-temp"></div>', '<div class="layui-table-tool-self"></div>', "</div>", "{{# } }}", '<div class="layui-table-box">', "{{# if(d.data.loading){ }}", '<div class="layui-table-init" style="background-color: #fff;">', '<i class="layui-icon layui-icon-loading layui-anim layui-anim-rotate layui-anim-loop"></i>', "</div>", "{{# } }}", "{{# var left, right; }}", '<div class="layui-table-header">', e(), "</div>", '<div class="layui-table-body layui-table-main">', a, "</div>", "{{# if(left){ }}", '<div class="layui-table-fixed layui-table-fixed-l">', '<div class="layui-table-header">', e({fixed: !0}), "</div>", '<div class="layui-table-body">', a, "</div>", "</div>", "{{# }; }}", "{{# if(right){ }}", '<div class="layui-table-fixed layui-table-fixed-r layui-hide">', '<div class="layui-table-header">', e({fixed: "right"}), '<div class="layui-table-mend"></div>', "</div>", '<div class="layui-table-body">', a, "</div>", "</div>", "{{# }; }}", "</div>", "{{# if(d.data.totalRow){ }}", '<div class="layui-table-total">', '<table cellspacing="0" cellpadding="0" border="0" class="layui-table" ', '{{# if(d.data.skin){ }}lay-skin="{{=d.data.skin}}"{{# } }} {{# if(d.data.size){ }}lay-size="{{=d.data.size}}"{{# } }} {{# if(d.data.even){ }}lay-even{{# } }}>', '<tbody><tr><td><div class="layui-table-cell" style="visibility: hidden;">Total</div></td></tr></tbody>', "</table>", "</div>", "{{# } }}", '<div class="layui-table-column layui-table-page layui-hide">', '<div class="layui-inline layui-table-pageview" id="layui-table-page{{=d.index}}"></div>', "</div>"].join(""),
        d = p(window), F = p(document), i = function (e) {
            this.index = ++k.index, this.config = p.extend({}, this.config, k.config, e), this.render()
        }, c = (i.prototype.config = {
            limit: 10,
            loading: !0,
            escape: !0,
            cellMinWidth: 60,
            cellMaxWidth: Number.MAX_VALUE,
            editTrigger: "click",
            defaultToolbar: ["filter", "exports", "print"],
            defaultContextmenu: !0,
            autoSort: !0,
            text: {none: "\u65e0\u6570\u636e"},
            cols: []
        }, i.prototype.render = function (e) {
            var t = this, a = t.config,
                i = (a.elem = p(a.elem), a.where = a.where || {}, a.id = "id" in a ? a.id : a.elem.attr("id") || t.index);
            if (w.that[i] = t, (w.config[i] = a).request = p.extend({
                pageName: "page",
                limitName: "limit"
            }, a.request), a.response = p.extend({
                statusName: "code",
                statusCode: 0,
                msgName: "msg",
                dataName: "data",
                totalRowName: "totalRow",
                countName: "count"
            }, a.response), null !== a.page && "object" == typeof a.page && (a.limit = a.page.limit || a.limit, a.limits = a.page.limits || a.limits, t.page = a.page.curr = a.page.curr || 1, delete a.page.elem, delete a.page.jump), !a.elem[0]) return t;
            if (a.elem.attr("lay-filter") || a.elem.attr("lay-filter", a.id), "reloadData" === e) return t.pullData(t.page, {type: "reloadData"});
            a.index = t.index, t.key = a.id || a.index, t.setInit(), a.height && /^full-.+$/.test(a.height) ? (t.fullHeightGap = a.height.split("-")[1], a.height = d.height() - (parseFloat(t.fullHeightGap) || 0)) : a.height && /^#\w+\S*-.+$/.test(a.height) ? (i = a.height.split("-"), t.parentHeightGap = i.pop(), t.parentDiv = i.join("-"), a.height = p(t.parentDiv).height() - (parseFloat(t.parentHeightGap) || 0)) : "function" == typeof a.height && (t.customHeightFunc = a.height, a.height = t.customHeightFunc());
            var l, e = a.elem, i = e.next("." + D), n = t.elem = p("<div></div>");
            n.addClass((l = [D, D + "-" + t.index, "layui-form", "layui-border-box"], a.className && l.push(a.className), l.join(" "))).attr({
                "lay-filter": "LAY-TABLE-FORM-DF-" + t.index,
                "lay-id": a.id,
                style: (l = [], a.width && l.push("width:" + a.width + "px;"), l.join(""))
            }).html(m(s, {open: "{{", close: "}}"}).render({
                data: a,
                index: t.index
            })), t.renderStyle(), i[0] && i.remove(), e.after(n), t.layTool = n.find(".layui-table-tool"), t.layBox = n.find(".layui-table-box"), t.layHeader = n.find(o), t.layMain = n.find(".layui-table-main"), t.layBody = n.find(L), t.layFixed = n.find(".layui-table-fixed"), t.layFixLeft = n.find(".layui-table-fixed-l"), t.layFixRight = n.find(u), t.layTotal = n.find(".layui-table-total"), t.layPage = n.find(".layui-table-page"), t.renderToolbar(), t.renderPagebar(), t.fullSize(), t.pullData(t.page), t.events()
        }, i.prototype.initOpts = function (e) {
            this.config;
            e.checkbox && (e.type = "checkbox"), e.space && (e.type = "space"), e.type || (e.type = "normal"), "normal" !== e.type && (e.unresize = !0, e.width = e.width || {
                checkbox: 50,
                radio: 50,
                space: 30,
                numbers: 60
            }[e.type])
        }, i.prototype.setInit = function (e) {
            var l, a, d = this, r = d.config;
            if (r.clientWidth = r.width || (l = function (e) {
                var t, a = (e = e || r.elem.parent()).width();
                try {
                    t = "none" === e.css("display")
                } catch (i) {
                }
                return !e[0] || a && !t ? a : l(e.parent())
            })(), "width" === e) return r.clientWidth;
            r.height = r.maxHeight || r.height, r.css && -1 === r.css.indexOf(D) && (a = r.css.split("}"), layui.each(a, function (e, t) {
                t && (a[e] = "." + D + "-" + d.index + " " + t)
            }), r.css = a.join("}"));
            var c = function (a, e, i, l) {
                var n, o;
                l ? (l.key = [r.index, a, i].join("-"), l.colspan = l.colspan || 0, l.rowspan = l.rowspan || 0, d.initOpts(l), (n = a + (parseInt(l.rowspan) || 1)) < r.cols.length ? (l.colGroup = !0, o = 0, layui.each(r.cols[n], function (e, t) {
                    t.HAS_PARENT || 1 <= o && o == (l.colspan || 1) || (t.HAS_PARENT = !0, t.parentKey = [r.index, a, i].join("-"), o += parseInt(1 < t.colspan ? t.colspan : 1), c(n, r.cols[n], e, t))
                })) : l.colGroup = !1, l.hide = l.hide && !l.colGroup || !1) : e.splice(i, 1)
            };
            layui.each(r.cols, function (a, i) {
                layui.each(i, function (e, t) {
                    a ? delete t.HAS_PARENT : c(a, i, e, t)
                })
            })
        }, i.prototype.renderStyle = function () {
            var e, a, t, i, l = this.config, n = this.index, o = [];
            layui.each(l.cols, function (a, e) {
                layui.each(e, function (e, t) {
                    e = [n, a, e].join("-"), t = ["width: ", t.width || l.cellMinWidth, "px"].join("");
                    o.push(".laytable-cell-" + e + "{" + t + "}")
                })
            }), (e = l.lineStyle) && (a = ".layui-table-view-" + n + " .layui-table-body .layui-table tr", t = e.split(";"), i = "none", layui.each(t, function (e, t) {
                if ("height" === (t = t.split(":"))[0]) return t = parseFloat(t[1]), isNaN(t) || (i = t - 1 + "px"), !0
            }), layui.each(["{" + e + "}", ".layui-table-cell{height: auto; max-height: " + i + "; white-space: normal; text-overflow: clip;}", "> td:hover > .layui-table-cell{overflow: auto;}"].concat(b.ie ? [".layui-table-edit{height: " + i + ";}", "td[data-edit]:hover:after{height: " + i + ";}"] : []), function (e, t) {
                t && o.push(a + " " + t)
            })), l.css && o.push(l.css), r.style({target: this.elem[0], text: o.join(""), id: "DF-table-" + n})
        }, i.prototype.renderToolbar = function () {
            var e = this.config,
                t = ['<div class="layui-inline" lay-event="add"><i class="layui-icon layui-icon-add-1"></i></div>', '<div class="layui-inline" lay-event="update"><i class="layui-icon layui-icon-edit"></i></div>', '<div class="layui-inline" lay-event="delete"><i class="layui-icon layui-icon-delete"></i></div>'].join(""),
                a = this.layTool.find(".layui-table-tool-temp"),
                i = ("default" === e.toolbar ? a.html(t) : "string" == typeof e.toolbar && (t = p(e.toolbar).html() || "") && a.html(m(t).render(e)), {
                    filter: {
                        title: "\u7b5b\u9009\u5217",
                        layEvent: "LAYTABLE_COLS",
                        icon: "layui-icon-cols"
                    },
                    exports: {title: "\u5bfc\u51fa", layEvent: "LAYTABLE_EXPORT", icon: "layui-icon-export"},
                    print: {title: "\u6253\u5370", layEvent: "LAYTABLE_PRINT", icon: "layui-icon-print"}
                }), l = [];
            "object" == typeof e.defaultToolbar && layui.each(e.defaultToolbar, function (e, t) {
                t = "string" == typeof t ? i[t] : t;
                t && l.push('<div class="layui-inline" title="' + t.title + '" lay-event="' + t.layEvent + '"><i class="layui-icon ' + t.icon + '"></i></div>')
            }), this.layTool.find(".layui-table-tool-self").html(l.join(""))
        }, i.prototype.renderPagebar = function () {
            var e, t = this.config, a = this.layPagebar = p('<div class="layui-inline layui-table-pagebar"></div>');
            t.pagebar && ((e = p(t.pagebar).html() || "") && a.append(m(e).render(t)), this.layPage.append(a))
        }, i.prototype.setParentCol = function (e, t) {
            var a = this.config, i = this.layHeader.find('th[data-key="' + t + '"]'), l = parseInt(i.attr("colspan")) || 0;
            i[0] && (t = t.split("-"), t = a.cols[t[1]][t[2]], e ? l-- : l++, i.attr("colspan", l), i[l ? "removeClass" : "addClass"](R), t.colspan2 = l, t.hide = l < 1, a = i.data("parentkey")) && this.setParentCol(e, a)
        }, i.prototype.setColsPatch = function () {
            var a = this, e = a.config;
            layui.each(e.cols, function (e, t) {
                layui.each(t, function (e, t) {
                    t.hide && a.setParentCol(t.hide, t.parentKey)
                })
            })
        }, i.prototype.setGroupWidth = function (i) {
            var e, l = this;
            l.config.cols.length <= 1 || ((e = l.layHeader.find((i ? "th[data-key=" + i.data("parentkey") + "]>" : "") + "." + P)).css("width", 0), layui.each(e.get().reverse(), function () {
                var e = p(this), t = e.parent().data("key"), a = 0;
                l.layHeader.eq(0).find("th[data-parentkey=" + t + "]").width(function (e, t) {
                    p(this).hasClass(R) || 0 < t && (a += t)
                }), a && e.css("max-width", a - 1), i && e.parent().data("parentkey") && l.setGroupWidth(e.parent())
            }), e.css("width", "auto"))
        }, i.prototype.setColsWidth = function () {
            var t, a, n = this, d = n.config, i = 0, r = 0, c = 0, s = 0, u = n.setInit("width"),
                e = (n.eachCols(function (e, t) {
                    t.hide || i++
                }), u = u - ("line" === d.skin || "nob" === d.skin ? 2 : i + 1) - n.getScrollWidth(n.layMain[0]) - 1, function (o) {
                    layui.each(d.cols, function (e, n) {
                        layui.each(n, function (e, t) {
                            var a = 0, i = t.minWidth || d.cellMinWidth, l = t.maxWidth || d.cellMaxWidth;
                            t ? t.colGroup || t.hide || (o ? c && c < i ? (r--, a = i) : c && l < c && (r--, a = l) : (a = t.width || 0, /\d+%$/.test(a) ? l < (a = (a = Math.floor(parseFloat(a) / 100 * u)) < i ? i : a) && (a = l) : a ? "normal" === t.type && (a < i && (t.width = a = i), l < a) && (t.width = a = l) : (t.width = a = 0, r++)), t.hide && (a = 0), s += a) : n.splice(e, 1)
                        })
                    }), s < u && 0 < r && (c = (u - s) / r)
                }), l = (e(), e(!0), n.autoColNums = r = 0 < r ? r : 0, n.eachCols(function (e, a) {
                    var i = a.minWidth || d.cellMinWidth, l = a.maxWidth || d.cellMaxWidth;
                    a.colGroup || a.hide || (0 === a.width ? n.cssRules(a.key, function (e) {
                        e.style.width = Math.floor(c < i ? i : l < c ? l : c) + "px"
                    }) : /\d+%$/.test(a.width) ? n.cssRules(a.key, function (e) {
                        var t = Math.floor(parseFloat(a.width) / 100 * u);
                        e.style.width = (t = l < (t = t < i ? i : t) ? l : t) + "px"
                    }) : n.cssRules(a.key, function (e) {
                        e.style.width = a.width + "px"
                    }))
                }), n.layMain.width() - n.getScrollWidth(n.layMain[0]) - n.layMain.children("table").outerWidth());
            0 < n.autoColNums && -i <= l && l <= i && (e = (a = (t = function (e) {
                return !(e = e || n.layHeader.eq(0).find("thead > tr:first-child > th:last-child")).data("field") && e.prev()[0] ? t(e.prev()) : e
            })()).data("key"), n.cssRules(e, function (e) {
                var t = e.style.width || a.outerWidth();
                e.style.width = parseFloat(t) + l + "px", 0 < n.layMain.height() - n.layMain.prop("clientHeight") && (e.style.width = parseFloat(e.style.width) - 1 + "px")
            })), n.setGroupWidth(), n.layMain.find("tbody").is(":empty") ? (e = n.layHeader.first().children("table").width(), n.layMain.find("table").width(e)) : n.layMain.find("table").width("auto"), n.loading(!0)
        }, i.prototype.resize = function () {
            this.layMain && (this.fullSize(), this.setColsWidth(), this.scrollPatch())
        }, i.prototype.reload = function (e, t, a) {
            var i = this;
            e = e || {}, delete i.haveInit, layui.each(e, function (e, t) {
                "array" === layui.type(t) && delete i.config[e]
            }), i.config = p.extend(t, {}, i.config, e), "reloadData" !== a && (layui.each(i.config.cols, function (e, t) {
                layui.each(t, function (e, t) {
                    delete t.colspan2
                })
            }), delete i.config.HAS_SET_COLS_PATCH), i.render(a)
        }, i.prototype.errorView = function (e) {
            var t = this, a = t.layMain.find("." + h), e = p('<div class="' + h + '">' + (e || "Error") + "</div>");
            a[0] && (t.layNone.remove(), a.remove()), t.layFixed.addClass(R), t.layMain.find("tbody").html(""), t.layMain.append(t.layNone = e), t.layTotal.addClass(y), t.layPage.find(I).addClass(y), k.cache[t.key] = [], t.syncCheckAll(), t.renderForm(), t.setColsWidth()
        }, i.prototype.page = 1, i.prototype.pullData = function (a, t) {
            var e, i, l = this, n = l.config,
                o = (n.HAS_SET_COLS_PATCH || l.setColsPatch(), n.HAS_SET_COLS_PATCH = !0, n.request), d = n.response,
                r = function () {
                    "object" == typeof n.initSort && l.sort({
                        field: n.initSort.field,
                        type: n.initSort.type,
                        reloadType: t.type
                    })
                }, c = function (e, t) {
                    l.setColsWidth(), "function" == typeof n.done && n.done(e, a, e[d.countName], t)
                };
            t = t || {}, "function" == typeof n.before && n.before(n), l.startTime = (new Date).getTime(), t.renderData ? ((e = {})[d.dataName] = k.cache[l.key], e[d.countName] = n.url ? "object" === layui.type(n.page) ? n.page.count : e[d.dataName].length : n.data.length, "object" == typeof n.totalRow && (e[d.totalRowName] = p.extend({}, l.totalRow)), l.renderData({
                res: e,
                curr: a,
                count: e[d.countName],
                type: t.type,
                sort: !0
            }), c(e, "renderData")) : n.url ? (i = {}, n.page && (i[o.pageName] = a, i[o.limitName] = n.limit), o = p.extend(i, n.where), n.contentType && 0 == n.contentType.indexOf("application/json") && (o = JSON.stringify(o)), l.loading(), p.ajax({
                type: n.method || "get",
                url: n.url,
                contentType: n.contentType,
                data: o,
                dataType: n.dataType || "json",
                jsonpCallback: n.jsonpCallback,
                headers: n.headers || {},
                complete: "function" == typeof n.complete ? n.complete : undefined,
                success: function (e) {
                    (e = "function" == typeof n.parseData ? n.parseData(e) || e : e)[d.statusName] != d.statusCode ? l.errorView(e[d.msgName] || '\u8fd4\u56de\u7684\u6570\u636e\u4e0d\u7b26\u5408\u89c4\u8303\uff0c\u6b63\u786e\u7684\u6210\u529f\u72b6\u6001\u7801\u5e94\u4e3a\uff1a"' + d.statusName + '": ' + d.statusCode) : (l.totalRow = e[d.totalRowName], l.renderData({
                        res: e,
                        curr: a,
                        count: e[d.countName],
                        type: t.type
                    }), r(), n.time = (new Date).getTime() - l.startTime + " ms"), c(e)
                },
                error: function (e, t) {
                    l.errorView("\u8bf7\u6c42\u5f02\u5e38\uff0c\u9519\u8bef\u63d0\u793a\uff1a" + t), "function" == typeof n.error && n.error(e, t)
                }
            })) : "array" === layui.type(n.data) && (e = {}, i = a * n.limit - n.limit, o = n.data.concat(), e[d.dataName] = n.page ? o.splice(i, n.limit) : o, e[d.countName] = n.data.length, "object" == typeof n.totalRow && (e[d.totalRowName] = p.extend({}, n.totalRow)), l.totalRow = e[d.totalRowName], l.renderData({
                res: e,
                curr: a,
                count: e[d.countName],
                type: t.type
            }), r(), c(e))
        }, i.prototype.eachCols = function (e) {
            return k.eachCols(null, e, this.config.cols), this
        }, i.prototype.col = function (e) {
            try {
                return e = e.split("-"), this.config.cols[e[1]][e[2]] || {}
            } catch (t) {
                return x.error(t), {}
            }
        }, i.prototype.getTrHtml = function (a, l, n, e) {
            var s = this, u = s.config, y = e && e.trs || [], h = e && e.trs_fixed || [], f = e && e.trs_fixed_r || [];
            return n = n || 1, layui.each(a, function (e, o) {
                var i = [], d = [], r = [], c = e + u.limit * (n - 1) + 1;
                if ("object" != typeof o) {
                    a[e] = o = {LAY_KEY: o};
                    try {
                        k.cache[s.key][e] = o
                    } catch (t) {
                    }
                }
                "array" === layui.type(o) && 0 === o.length || (o[k.config.numbersName] = c, l || (o[k.config.indexName] = e), s.eachCols(function (e, l) {
                    var t, e = l.field || e, a = l.key, n = o[e];
                    n !== undefined && null !== n || (n = ""), l.colGroup || (e = ['<td data-field="' + e + '" data-key="' + a + '" ' + (e = [], (t = "function" == typeof l.edit ? l.edit(o) : l.edit) && e.push('data-edit="' + t + '"'), l.templet && e.push('data-content="' + g.escape(n) + '"'), l.toolbar && e.push('data-off="true"'), l.event && e.push('lay-event="' + l.event + '"'), l.minWidth && e.push('data-minwidth="' + l.minWidth + '"'), l.maxWidth && e.push('data-maxwidth="' + l.maxWidth + '"'), l.style && e.push('style="' + l.style + '"'), e.join(" ")) + ' class="' + (t = [], l.hide && t.push(R), l.field || t.push(W), t.join(" ")) + '">', '<div class="layui-table-cell laytable-cell-' + ("normal" === l.type ? a : a + " laytable-cell-" + l.type) + '"' + (l.align ? ' align="' + l.align + '"' : "") + ">" + function () {
                        var e, t = p.extend(!0, {LAY_COL: l}, o), a = k.config.checkName, i = k.config.disabledName;
                        switch (l.type) {
                            case"checkbox":
                                return '<input type="checkbox" name="layTableCheckbox" lay-skin="primary" ' + (e = [], l[a] && (o[a] = l[a], l[a]) && (e[0] = "checked"), t[a] && (e[0] = "checked"), t[i] && e.push("disabled"), e.join(" ")) + ' lay-type="layTableCheckbox">';
                            case"radio":
                                return '<input type="radio" name="layTableRadio_' + u.index + '" ' + (e = [], t[a] && (e[0] = "checked"), t[i] && e.push("disabled"), e.join(" ")) + ' lay-type="layTableRadio">';
                            case"numbers":
                                return c
                        }
                        return l.toolbar ? m(p(l.toolbar).html() || "").render(t) : T.call(s, {
                            item3: l,
                            content: n,
                            tplData: t
                        })
                    }(), "</div></td>"].join(""), i.push(e), l.fixed && "right" !== l.fixed && d.push(e), "right" === l.fixed && r.push(e))
                }), e = ['data-index="' + e + '"'], o[k.config.checkName] && e.push('class="' + E + '"'), e = e.join(" "), y.push("<tr " + e + ">" + i.join("") + "</tr>"), h.push("<tr " + e + ">" + d.join("") + "</tr>"), f.push("<tr " + e + ">" + r.join("") + "</tr>"))
            }), {trs: y, trs_fixed: h, trs_fixed_r: f}
        }, k.getTrHtml = function (e, t) {
            e = C(e);
            return e.getTrHtml(t, null, e.page)
        }, i.prototype.renderData = function (e) {
            var a = this, i = a.config, t = e.res, l = e.curr, n = a.count = e.count, o = e.sort,
                d = t[i.response.dataName] || [], t = t[i.response.totalRowName], r = [], c = [], s = [], u = function () {
                    if (!o && a.sortKey) return a.sort({
                        field: a.sortKey.field,
                        type: a.sortKey.sort,
                        pull: !0,
                        reloadType: e.type
                    });
                    a.getTrHtml(d, o, l, {
                        trs: r,
                        trs_fixed: c,
                        trs_fixed_r: s
                    }), "fixed" === i.scrollPos && "reloadData" === e.type || a.layBody.scrollTop(0), "reset" === i.scrollPos && a.layBody.scrollLeft(0), a.layMain.find("." + h).remove(), a.layMain.find("tbody").html(r.join("")), a.layFixLeft.find("tbody").html(c.join("")), a.layFixRight.find("tbody").html(s.join("")), a.syncCheckAll(), a.renderForm(), a.fullSize(), a.haveInit ? a.scrollPatch() : setTimeout(function () {
                        a.scrollPatch()
                    }, 50), a.haveInit = !0, f.close(a.tipsIndex)
                };
            return k.cache[a.key] = d, a.layTotal[0 == d.length ? "addClass" : "removeClass"](y), a.layPage[i.page || i.pagebar ? "removeClass" : "addClass"](R), a.layPage.find(I)[!i.page || 0 == n || 0 === d.length && 1 == l ? "addClass" : "removeClass"](y), 0 === d.length ? a.errorView(i.text.none) : (a.layFixLeft.removeClass(R), o ? u() : (u(), a.renderTotal(d, t), a.layTotal && a.layTotal.removeClass(R), void (i.page && (i.page = p.extend({
                elem: "layui-table-page" + i.index,
                count: n,
                limit: i.limit,
                limits: i.limits || [10, 20, 30, 40, 50, 60, 70, 80, 90],
                groups: 3,
                layout: ["prev", "page", "next", "skip", "count", "limit"],
                prev: '<i class="layui-icon">&#xe603;</i>',
                next: '<i class="layui-icon">&#xe602;</i>',
                jump: function (e, t) {
                    t || (a.page = e.curr, i.limit = e.limit, a.pullData(e.curr))
                }
            }, i.page), i.page.count = n, O.render(i.page)))))
        }, k.renderData = function (e) {
            e = C(e);
            e && e.pullData(e.page, {renderData: !0, type: "reloadData"})
        }, i.prototype.renderTotal = function (e, o) {
            var d, r = this, c = r.config, s = {};
            c.totalRow && (layui.each(e, function (e, i) {
                "array" === layui.type(i) && 0 === i.length || r.eachCols(function (e, t) {
                    var e = t.field || e, a = i[e];
                    t.totalRow && (s[e] = (s[e] || 0) + (parseFloat(a) || 0))
                })
            }), r.dataTotal = [], d = [], r.eachCols(function (e, t) {
                var a, e = t.field || e, i = o && o[t.field], l = "totalRowDecimals" in t ? t.totalRowDecimals : 2,
                    l = s[e] ? parseFloat(s[e] || 0).toFixed(l) : "",
                    l = (a = t.totalRowText || "", (n = {LAY_COL: t})[e] = l, n = t.totalRow && T.call(r, {
                        item3: t,
                        content: l,
                        tplData: n
                    }) || a, i || n), n = (t.field && r.dataTotal.push({
                        field: t.field,
                        total: p("<div>" + l + "</div>").text()
                    }), ['<td data-field="' + e + '" data-key="' + t.key + '" ' + (a = [], t.minWidth && a.push('data-minwidth="' + t.minWidth + '"'), t.maxWidth && a.push('data-maxwidth="' + t.maxWidth + '"'), t.style && a.push('style="' + t.style + '"'), a.join(" ")) + ' class="' + (n = [], t.hide && n.push(R), t.field || n.push(W), n.join(" ")) + '">', '<div class="layui-table-cell laytable-cell-' + (a = t.key, "normal" === t.type ? a : a + " laytable-cell-" + t.type) + '"' + (n = [], t.align && n.push('align="' + t.align + '"'), n.join(" ")) + ">" + ("string" == typeof (a = t.totalRow || c.totalRow) ? m(a).render(p.extend({
                        TOTAL_NUMS: i || s[e],
                        TOTAL_ROW: o || {},
                        LAY_COL: t
                    }, t)) : l), "</div></td>"].join(""));
                d.push(n)
            }), e = r.layTotal.find(".layui-table-patch"), r.layTotal.find("tbody").html("<tr>" + d.join("") + (e.length ? e.get(0).outerHTML : "") + "</tr>"))
        }, i.prototype.getColElem = function (e, t) {
            return e.eq(0).find(".laytable-cell-" + t + ":eq(0)")
        }, i.prototype.renderForm = function (e) {
            this.config;
            var t = this.elem.attr("lay-filter");
            v.render(e, t)
        }, i.prototype.syncCheckAll = function () {
            var a, e = this, i = e.config, t = e.layHeader.find('input[name="layTableCheckbox"]'), l = k.checkStatus(e.key);
            t[0] && (a = l.isAll, e.eachCols(function (e, t) {
                "checkbox" === t.type && (t[i.checkName] = a)
            }), t.prop({checked: l.isAll, indeterminate: !l.isAll && l.data.length}), v.render(t))
        }, i.prototype.setRowActive = function (e, t, a) {
            this.config;
            e = this.layBody.find('tr[data-index="' + e + '"]');
            if (t = t || "layui-table-click", a) return e.removeClass(t);
            e.addClass(t), e.siblings("tr").removeClass(t)
        }, i.prototype.setRowChecked = function (i) {
            var e = this, l = e.config, n = "all" === i.index, o = "array" === layui.type(i.index),
                d = (t = e.layBody.find("tr"), n ? t : t.filter(o ? function () {
                    var e = p(this).data("index");
                    return -1 !== i.index.indexOf(e)
                } : '[data-index="' + i.index + '"]')), t = (i = p.extend({type: "checkbox"}, i), k.cache[e.key]),
                a = "checked" in i, r = function (e) {
                    return "radio" === i.type || (a ? i.checked : !e)
                }, t = (layui.each(t, function (e, t) {
                    var a;
                    "array" === layui.type(t) || t[l.disabledName] || (n || (o ? -1 !== i.index.indexOf(e) : Number(i.index) === e) ? (a = t[l.checkName] = r(t[l.checkName]), (e = d.filter('[data-index="' + e + '"]'))[a ? "addClass" : "removeClass"](E), "radio" === i.type && e.siblings().removeClass(E)) : "radio" === i.type && delete t[l.checkName])
                }), d.find('input[lay-type="' + ({
                    radio: "layTableRadio",
                    checkbox: "layTableCheckbox"
                }[i.type] || "checkbox") + '"]:not(:disabled)')), c = t.last(), s = c.closest(u);
            ("radio" === i.type && s.hasClass(R) ? t.first() : t).prop("checked", r(c.prop("checked"))), e.syncCheckAll(), e.renderForm(i.type)
        }, i.prototype.sort = function (l) {
            var e, t = this, a = {}, i = t.config, n = i.elem.attr("lay-filter"), o = k.cache[t.key];
            "string" == typeof (l = l || {}).field && (d = l.field, t.layHeader.find("th").each(function (e, t) {
                var a = p(this), i = a.data("field");
                if (i === l.field) return l.field = a, d = i, !1
            }));
            try {
                var d = d || l.field.data("field"), r = l.field.data("key");
                if (t.sortKey && !l.pull && d === t.sortKey.field && l.type === t.sortKey.sort) return;
                var c = t.layHeader.find("th .laytable-cell-" + r).find(A);
                t.layHeader.find("th").find(A).removeAttr("lay-sort"), c.attr("lay-sort", l.type || null), t.layFixed.find("th")
            } catch (s) {
                x.error("Table modules: sort field '" + d + "' not matched")
            }
            t.sortKey = {
                field: d,
                sort: l.type
            }, i.autoSort && ("asc" === l.type ? e = layui.sort(o, d, null, !0) : "desc" === l.type ? e = layui.sort(o, d, !0, !0) : (e = layui.sort(o, k.config.indexName, null, !0), delete t.sortKey, delete i.initSort)), a[i.response.dataName] = e || o, t.renderData({
                res: a,
                curr: t.page,
                count: t.count,
                sort: !0,
                type: l.reloadType
            }), l.fromEvent && (i.initSort = {
                field: d,
                type: l.type
            }, layui.event.call(l.field, N, "sort(" + n + ")", p.extend({config: i}, i.initSort)))
        }, i.prototype.loading = function (e) {
            var t = this;
            t.config.loading && (e ? (t.layInit && t.layInit.remove(), delete t.layInit, t.layBox.find(".layui-table-init").remove()) : (t.layInit = p(['<div class="layui-table-init">', '<i class="layui-icon layui-icon-loading layui-anim layui-anim-rotate layui-anim-loop"></i>', "</div>"].join("")), t.layBox.append(t.layInit)))
        }, i.prototype.cssRules = function (t, a) {
            var e = this.elem.children("style")[0];
            r.getStyleRules(e, function (e) {
                if (e.selectorText === ".laytable-cell-" + t) return a(e), !0
            })
        }, i.prototype.fullSize = function () {
            var e, a, i = this, t = i.config, l = t.height;
            i.fullHeightGap ? (l = d.height() - i.fullHeightGap) < 135 && (l = 135) : i.parentDiv && i.parentHeightGap ? (l = p(i.parentDiv).height() - i.parentHeightGap) < 135 && (l = 135) : i.customHeightFunc && (l = i.customHeightFunc()) < 135 && (l = 135), 1 < t.cols.length && (e = i.layFixed.find(o).find("th"), a = i.layHeader.first(), layui.each(e, function (e, t) {
                (t = p(t)).height(a.find('th[data-key="' + t.attr("data-key") + '"]').height() + "px")
            })), l && (e = parseFloat(l) - (i.layHeader.outerHeight() || 39), t.toolbar && (e -= i.layTool.outerHeight() || 51), t.totalRow && (e -= i.layTotal.outerHeight() || 40), (t.page || t.pagebar) && (e -= i.layPage.outerHeight() || 43), t.maxHeight ? layui.each({
                elem: l,
                layMain: e
            }, function (e, t) {
                i[e].css({height: "auto", maxHeight: t + "px"})
            }) : i.layMain.outerHeight(e))
        }, i.prototype.getScrollWidth = function (e) {
            var t;
            return e ? t = e.offsetWidth - e.clientWidth : ((e = document.createElement("div")).style.width = "100px", e.style.height = "100px", e.style.overflowY = "scroll", document.body.appendChild(e), t = e.offsetWidth - e.clientWidth, document.body.removeChild(e)), t
        }, i.prototype.scrollPatch = function () {
            var e = this, t = e.layMain.children("table"), a = e.layMain.width() - e.layMain.prop("clientWidth"),
                i = e.layMain.height() - e.layMain.prop("clientHeight"),
                l = (e.getScrollWidth(e.layMain[0]), t.outerWidth() - e.layMain.width()), n = function (e) {
                    var t;
                    a && i ? (e = e.eq(0)).find(".layui-table-patch")[0] || ((t = p('<th class="layui-table-patch"><div class="layui-table-cell"></div></th>')).find("div").css({width: a}), e.find("tr").append(t)) : e.find(".layui-table-patch").remove()
                };
            n(e.layHeader), n(e.layTotal);
            n = e.layMain.height() - i;
            e.layFixed.find(L).css("height", t.height() >= n ? n : "auto").scrollTop(e.layMain.scrollTop()), e.layFixRight[k.cache[e.key] && k.cache[e.key].length && 0 < l ? "removeClass" : "addClass"](R), e.layFixRight.css("right", a - 1)
        }, i.prototype.events = function () {
            var s = this, u = s.config, c = u.elem.attr("lay-filter"), e = s.layHeader.find("th"), y = ".layui-table-cell",
                o = p("body"), d = {}, r = (s.layTool.on("click", "*[lay-event]", function (e) {
                    var a, i = p(this), t = i.attr("lay-event"), l = k.cache[u.id], n = function (e) {
                        var t = p(e.list), a = p('<ul class="' + j + '"></ul>');
                        a.html(t), u.height && a.css("max-height", u.height - (s.layTool.outerHeight() || 50)), i.find("." + j)[0] || i.append(a), s.renderForm(), a.on("click", function (e) {
                            layui.stope(e)
                        }), e.done && e.done(a, t)
                    };
                    switch (layui.stope(e), F.trigger("table.tool.panel.remove"), f.close(s.tipsIndex), t) {
                        case"LAYTABLE_COLS":
                            n({
                                list: (a = [], s.eachCols(function (e, t) {
                                    t.field && "normal" == t.type && a.push('<li><input type="checkbox" name="' + t.field + '" data-key="' + t.key + '" data-parentkey="' + (t.parentKey || "") + '" lay-skin="primary" ' + (t.hide ? "" : "checked") + ' title="' + g.escape(p("<div>" + (t.fieldTitle || t.title || t.field) + "</div>").text()) + '" lay-filter="LAY_TABLE_TOOL_COLS"></li>')
                                }), a.join("")), done: function () {
                                    v.on("checkbox(LAY_TABLE_TOOL_COLS)", function (e) {
                                        var e = p(e.elem), t = this.checked, a = e.data("key"), i = s.col(a), l = i.hide,
                                            e = e.data("parentkey");
                                        i.key && (i.hide = !t, s.elem.find('*[data-key="' + a + '"]')[t ? "removeClass" : "addClass"](R), l != i.hide && s.setParentCol(!t, e), s.resize(), layui.event.call(this, N, "colToggled(" + c + ")", {
                                            col: i,
                                            config: u
                                        }))
                                    })
                                }
                            });
                            break;
                        case"LAYTABLE_EXPORT":
                            if (!l.length) return f.tips("\u5f53\u524d\u8868\u683c\u65e0\u6570\u636e", this, {tips: 3});
                            b.ie ? f.tips("\u5bfc\u51fa\u529f\u80fd\u4e0d\u652f\u6301 IE\uff0c\u8bf7\u7528 Chrome \u7b49\u9ad8\u7ea7\u6d4f\u89c8\u5668\u5bfc\u51fa", this, {tips: 3}) : n({
                                list: ['<li data-type="csv">\u5bfc\u51fa csv \u683c\u5f0f\u6587\u4ef6</li>', '<li data-type="xls">\u5bfc\u51fa xls \u683c\u5f0f\u6587\u4ef6</li>'].join(""),
                                done: function (e, t) {
                                    t.on("click", function () {
                                        var e = p(this).data("type");
                                        k.exportFile.call(s, u.id, null, e)
                                    })
                                }
                            });
                            break;
                        case"LAYTABLE_PRINT":
                            if (!l.length) return f.tips("\u5f53\u524d\u8868\u683c\u65e0\u6570\u636e", this, {tips: 3});
                            var o = window.open("about:blank", "_blank"),
                                d = ["<style>", "body{font-size: 12px; color: #5F5F5F;}", "table{width: 100%; border-collapse: collapse; border-spacing: 0;}", "th,td{line-height: 20px; padding: 9px 15px; border: 1px solid #ccc; text-align: left; font-size: 12px; color: #5F5F5F;}", "a{color: #5F5F5F; text-decoration:none;}", "img{max-height: 100%;}", "*.layui-hide{display: none}", "</style>"].join(""),
                                r = p(s.layHeader.html());
                            r.append(s.layMain.find("table").html()), r.append(s.layTotal.find("table").html()), r.find("th.layui-table-patch").remove(), r.find("thead>tr>th." + W).filter(function (e, t) {
                                return !p(t).children("." + P).length
                            }).remove(), r.find("tbody>tr>td." + W).remove(), o.document.write(d + r.prop("outerHTML")), o.document.close(), layui.device("edg").edg ? (o.onafterprint = o.close, o.print()) : (o.print(), o.close())
                    }
                    layui.event.call(this, N, "toolbar(" + c + ")", p.extend({event: t, config: u}, {}))
                }), s.layHeader.on("click", "*[lay-event]", function (e) {
                    var t = p(this), a = t.attr("lay-event"), t = t.closest("th").data("key"), t = s.col(t);
                    layui.event.call(this, N, "colTool(" + c + ")", p.extend({event: a, config: u, col: t}, {}))
                }), s.layPagebar.on("click", "*[lay-event]", function (e) {
                    var t = p(this).attr("lay-event");
                    layui.event.call(this, N, "pagebar(" + c + ")", p.extend({event: t, config: u}, {}))
                }), e.on("mousemove", function (e) {
                    var t = p(this), a = t.offset().left, e = e.clientX - a;
                    t.data("unresize") || w.eventMoveElem || (d.allowResize = t.width() - e <= 10, o.css("cursor", d.allowResize ? "col-resize" : ""))
                }).on("mouseleave", function () {
                    p(this);
                    w.eventMoveElem || o.css("cursor", "")
                }).on("mousedown", function (e) {
                    var t, a = p(this);
                    d.allowResize && (t = a.data("key"), e.preventDefault(), d.offset = [e.clientX, e.clientY], s.cssRules(t, function (e) {
                        var t = e.style.width || a.outerWidth();
                        d.rule = e, d.ruleWidth = parseFloat(t), d.minWidth = a.data("minwidth") || u.cellMinWidth, d.maxWidth = a.data("maxwidth") || u.cellMaxWidth
                    }), a.data(S, d), w.eventMoveElem = a)
                }), w.docEvent || F.on("mousemove", function (e) {
                    var t, a;
                    w.eventMoveElem && (t = w.eventMoveElem.data(S) || {}, w.eventMoveElem.data("resizing", 1), e.preventDefault(), t.rule) && (e = t.ruleWidth + e.clientX - t.offset[0], a = w.eventMoveElem.closest("." + D).attr("lay-id"), a = C(a)) && ((e = e < t.minWidth ? t.minWidth : e) > t.maxWidth && (e = t.maxWidth), t.rule.style.width = e + "px", a.setGroupWidth(w.eventMoveElem), f.close(s.tipsIndex))
                }).on("mouseup", function (e) {
                    var t, a, i, l, n;
                    w.eventMoveElem && (i = (t = w.eventMoveElem).closest("." + D).attr("lay-id"), a = C(i)) && (i = t.data("key"), l = a.col(i), n = a.config.elem.attr("lay-filter"), d = {}, o.css("cursor", ""), a.scrollPatch(), t.removeData(S), delete w.eventMoveElem, a.cssRules(i, function (e) {
                        l.width = parseFloat(e.style.width), layui.event.call(t[0], N, "colResized(" + n + ")", {
                            col: l,
                            config: a.config
                        })
                    }))
                }), w.docEvent = !0, e.on("click", function (e) {
                    var t = p(this), a = t.find(A), i = a.attr("lay-sort");
                    if (!a[0] || 1 === t.data("resizing")) return t.removeData("resizing");
                    s.sort({field: t, type: "asc" === i ? "desc" : "desc" === i ? null : "asc", fromEvent: !0})
                }).find(A + " .layui-edge ").on("click", function (e) {
                    var t = p(this), a = t.index(), t = t.parents("th").eq(0).data("field");
                    layui.stope(e), 0 === a ? s.sort({field: t, type: "asc", fromEvent: !0}) : s.sort({
                        field: t,
                        type: "desc",
                        fromEvent: !0
                    })
                }), s.commonMember = function (e) {
                    var t = p(this).parents("tr").eq(0).data("index"), r = s.layBody.find('tr[data-index="' + t + '"]'),
                        c = (c = k.cache[s.key] || [])[t] || {}, a = {
                            tr: r, config: u, data: k.clearCacheKey(c), dataCache: c, index: t, del: function () {
                                k.cache[s.key][t] = [], r.remove(), s.scrollPatch()
                            }, update: function (e, d) {
                                e = e || {}, layui.each(e, function (i, l) {
                                    var n = r.children('td[data-field="' + i + '"]'), o = n.children(y);
                                    c[i] = a.data[i] = l, s.eachCols(function (e, t) {
                                        var a;
                                        t.field == i ? (o.html(T.call(s, {
                                            item3: t,
                                            content: l,
                                            tplData: p.extend({LAY_COL: t}, c)
                                        })), n.data("content", l)) : d && (t.templet || t.toolbar) && (e = r.children('td[data-field="' + (t.field || e) + '"]'), a = c[t.field], e.children(y).html(T.call(s, {
                                            item3: t,
                                            content: a,
                                            tplData: p.extend({LAY_COL: t}, c)
                                        })), e.data("content", a))
                                    })
                                }), s.renderForm()
                            }, setRowChecked: function (e) {
                                s.setRowChecked(p.extend({index: t}, e))
                            }
                        };
                    return p.extend(a, e)
                }), a = (s.elem.on("click", 'input[name="layTableCheckbox"]+', function (e) {
                    var t = p(this), a = t.closest("td"), t = t.prev(),
                        i = (s.layBody.find('input[name="layTableCheckbox"]'), t.parents("tr").eq(0).data("index")),
                        l = t[0].checked, n = "layTableAllChoose" === t.attr("lay-filter");
                    t[0].disabled || (n ? s.setRowChecked({index: "all", checked: l}) : (s.setRowChecked({
                        index: i,
                        checked: l
                    }), layui.stope(e)), layui.event.call(t[0], N, "checkbox(" + c + ")", r.call(t[0], {
                        checked: l,
                        type: n ? "all" : "one",
                        getCol: function () {
                            return s.col(a.data("key"))
                        }
                    })))
                }), s.elem.on("click", 'input[lay-type="layTableRadio"]+', function (e) {
                    var t = p(this), a = t.closest("td"), t = t.prev(), i = t[0].checked,
                        l = t.parents("tr").eq(0).data("index");
                    if (layui.stope(e), t[0].disabled) return !1;
                    s.setRowChecked({
                        type: "radio",
                        index: l
                    }), layui.event.call(t[0], N, "radio(" + c + ")", r.call(t[0], {
                        checked: i, getCol: function () {
                            return s.col(a.data("key"))
                        }
                    }))
                }), s.layBody.on("mouseenter", "tr", function () {
                    var e = p(this), t = e.index();
                    e.data("off") || s.layBody.find("tr:eq(" + t + ")").addClass(M)
                }).on("mouseleave", "tr", function () {
                    var e = p(this), t = e.index();
                    e.data("off") || s.layBody.find("tr:eq(" + t + ")").removeClass(M)
                }).on("click", "tr", function (e) {
                    var t = [".layui-form-checkbox", ".layui-form-switch", ".layui-form-radio", "[lay-unrow]"].join(",");
                    p(e.target).is(t) || p(e.target).closest(t)[0] || a.call(this, "row")
                }).on("dblclick", "tr", function () {
                    a.call(this, "rowDouble")
                }).on("contextmenu", "tr", function (e) {
                    u.defaultContextmenu || e.preventDefault(), a.call(this, "rowContextmenu")
                }), function (e) {
                    var t = p(this);
                    t.data("off") || layui.event.call(this, N, e + "(" + c + ")", r.call(t.children("td")[0]))
                }), n = function (e, t) {
                    var a, i, l;
                    (e = p(e)).data("off") || (l = e.data("field"), i = e.data("key"), i = s.col(i), a = e.closest("tr").data("index"), a = k.cache[s.key][a], e.children(y), (i = "function" == typeof i.edit ? i.edit(a) : i.edit) && ((i = p("textarea" === i ? '<textarea class="layui-input ' + _ + '" lay-unrow></textarea>' : '<input class="layui-input ' + _ + '" lay-unrow>'))[0].value = (l = e.data("content") || a[l]) === undefined || null === l ? "" : l, e.find("." + _)[0] || e.append(i), i.focus(), t) && layui.stope(t))
                }, i = (s.layBody.on("change", "." + _, function () {
                    var e = p(this), t = e.parent(), a = this.value, i = e.parent().data("field"),
                        e = e.closest("tr").data("index"), e = k.cache[s.key][e], l = r.call(t[0], {
                            value: a, field: i, oldValue: e[i], td: t, reedit: function () {
                                setTimeout(function () {
                                    n(l.td);
                                    var e = {};
                                    e[i] = l.oldValue, l.update(e)
                                })
                            }, getCol: function () {
                                return s.col(t.data("key"))
                            }
                        }), e = {};
                    e[i] = a, l.update(e), layui.event.call(t[0], N, "edit(" + c + ")", l)
                }).on("blur", "." + _, function () {
                    p(this).remove()
                }), s.layBody.on(u.editTrigger, "td", function (e) {
                    n(this, e)
                }).on("mouseenter", "td", function () {
                    t.call(this)
                }).on("mouseleave", "td", function () {
                    t.call(this, "hide")
                }), s.layTotal.on("mouseenter", "td", function () {
                    t.call(this)
                }).on("mouseleave", "td", function () {
                    t.call(this, "hide")
                }), "layui-table-grid-down"), t = function (e) {
                    var t = p(this), a = t.children(y);
                    t.data("off") || t.parent().hasClass(H) || (e ? t.find(".layui-table-grid-down").remove() : !(a.prop("scrollWidth") > a.outerWidth() || 0 < a.find("br").length) || u.lineStyle || a.find("." + i)[0] || t.append('<div class="' + i + '"><i class="layui-icon layui-icon-down"></i></div>'))
                }, l = function (e, t) {
                    var a = p(this), i = a.parent(), l = i.data("key"), n = s.col(l), o = i.parent().data("index"),
                        i = i.children(y), d = "layui-table-cell-c", r = p('<i class="layui-icon layui-icon-up ' + d + '">');
                    "tips" === (t = t || n.expandedMode || u.cellExpandedMode) ? s.tipsIndex = f.tips(['<div class="layui-table-tips-main" style="margin-top: -' + (i.height() + 23) + "px;" + ("sm" === u.size ? "padding: 4px 15px; font-size: 12px;" : "lg" === u.size ? "padding: 14px 15px;" : "") + '">', i.html(), "</div>", '<i class="layui-icon layui-table-tips-c layui-icon-close"></i>'].join(""), i[0], {
                        tips: [3, ""],
                        time: -1,
                        anim: -1,
                        maxWidth: b.ios || b.android ? 300 : s.elem.width() / 2,
                        isOutAnim: !1,
                        skin: "layui-table-tips",
                        success: function (e, t) {
                            e.find(".layui-table-tips-c").on("click", function () {
                                f.close(t)
                            })
                        }
                    }) : (s.elem.find("." + d).trigger("click"), s.cssRules(l, function (e) {
                        var t = e.style.width, a = n.expandedWidth || u.cellExpandedWidth;
                        a < parseFloat(t) && (a = parseFloat(t)), r.data("cell-width", t), e.style.width = a + "px", setTimeout(function () {
                            s.scrollPatch()
                        })
                    }), s.setRowActive(o, H), i.next("." + d)[0] || i.after(r), r.on("click", function () {
                        var t = p(this);
                        s.setRowActive(o, [H, M].join(" "), !0), s.cssRules(l, function (e) {
                            e.style.width = t.data("cell-width"), setTimeout(function () {
                                s.resize()
                            })
                        }), t.remove()
                    })), a.remove(), layui.stope(e)
                }, h = (s.layBody.on("click", "." + i, function (e) {
                    l.call(this, e)
                }), s.layTotal.on("click", "." + i, function (e) {
                    l.call(this, e, "tips")
                }), function (e) {
                    var t = p(this), a = t.closest("td"), i = t.parents("tr").eq(0).data("index");
                    s.setRowActive(i), layui.event.call(this, N, (e || "tool") + "(" + c + ")", r.call(this, {
                        event: t.attr("lay-event"),
                        getCol: function () {
                            return s.col(a.data("key"))
                        }
                    }))
                });
            s.layBody.on("click", "*[lay-event]", function (e) {
                h.call(this), layui.stope(e)
            }).on("dblclick", "*[lay-event]", function (e) {
                h.call(this, "toolDouble"), layui.stope(e)
            }), s.layMain.on("scroll", function () {
                var e = p(this), t = e.scrollLeft(), e = e.scrollTop();
                s.layHeader.scrollLeft(t), s.layTotal.scrollLeft(t), s.layFixed.find(L).scrollTop(e), f.close(s.tipsIndex)
            }), s.layFixed.find(L).on("mousewheel DOMMouseScroll", function (e) {
                var t = e.originalEvent.wheelDelta || -e.originalEvent.detail, a = s.layMain.scrollTop();
                e.preventDefault(), s.layMain.scrollTop(a + (0 < t ? -30 : 30))
            })
        }, d.on("resize", function () {
            layui.each(w.that, function () {
                this.resize()
            })
        }), F.on("click", function () {
            F.trigger("table.remove.tool.panel")
        }), F.on("table.remove.tool.panel", function () {
            p("." + j).remove()
        }), k.init = function (i, o) {
            o = o || {};
            var e = "object" == typeof i ? i : p("string" == typeof i ? 'table[lay-filter="' + i + '"]' : t + "[lay-data], " + t + "[lay-options]"),
                d = "Table element property lay-data configuration item has a syntax error: ";
            return e.each(function () {
                var l, e = p(this), t = e.attr("lay-data"),
                    t = r.options(this, {attr: t ? "lay-data" : null, errorText: d + (t || e.attr("lay-options"))}),
                    n = p.extend({
                        elem: this,
                        cols: [],
                        data: [],
                        skin: e.attr("lay-skin"),
                        size: e.attr("lay-size"),
                        even: "string" == typeof e.attr("lay-even")
                    }, k.config, o, t), a = (i && e.hide(), e.find("thead>tr").each(function (i) {
                        n.cols[i] = [], p(this).children().each(function (e) {
                            var t = p(this), a = t.attr("lay-data"),
                                a = r.options(this, {attr: a ? "lay-data" : null, errorText: d + (a || t.attr("lay-options"))}),
                                t = p.extend({
                                    title: t.text(),
                                    colspan: parseInt(t.attr("colspan")) || 1,
                                    rowspan: parseInt(t.attr("rowspan")) || 1
                                }, a);
                            n.cols[i].push(t)
                        })
                    }), e.find("tbody>tr")), t = k.render(n);
                !a.length || o.data || t.config.url || (l = 0, k.eachCols(t.config.id, function (e, i) {
                    a.each(function (e) {
                        n.data[e] = n.data[e] || {};
                        var t = p(this), a = i.field;
                        n.data[e][a] = t.children("td").eq(l).html()
                    }), l++
                }), t.reloadData({data: n.data}))
            }), this
        }, w.that = {}, w.config = {}, function (a, i, e, l) {
            var n, o;
            l.colGroup && (n = 0, a++, l.CHILD_COLS = [], o = e + (parseInt(l.rowspan) || 1), layui.each(i[o], function (e, t) {
                t.parentKey ? t.parentKey === l.key && (t.PARENT_COL_INDEX = a, l.CHILD_COLS.push(t), c(a, i, o, t)) : t.PARENT_COL_INDEX || 1 <= n && n == (l.colspan || 1) || (t.PARENT_COL_INDEX = a, l.CHILD_COLS.push(t), n += parseInt(1 < t.colspan ? t.colspan : 1), c(a, i, o, t))
            }))
        });
    k.eachCols = function (e, a, i) {
        var e = w.config[e] || {}, l = [], n = (i = p.extend(!0, [], i || e.cols), layui.each(i, function (a, e) {
            if (a) return !0;
            layui.each(e, function (e, t) {
                c(0, i, a, t), t.PARENT_COL_INDEX || l.push(t)
            })
        }), function (e) {
            layui.each(e || l, function (e, t) {
                if (t.CHILD_COLS) return n(t.CHILD_COLS);
                "function" == typeof a && a(e, t)
            })
        });
        n()
    }, k.checkStatus = function (e) {
        var a = 0, i = 0, l = [], e = k.cache[e] || [];
        return layui.each(e, function (e, t) {
            "array" === layui.type(t) || t[k.config.disabledName] ? i++ : t[k.config.checkName] && (a++, t[k.config.disabledName] || l.push(k.clearCacheKey(t)))
        }), {data: l, isAll: !!e.length && a === e.length - i}
    }, k.setRowChecked = function (e, t) {
        e = C(e);
        e && e.setRowChecked(t)
    }, k.getData = function (e) {
        var a = [], e = k.cache[e] || [];
        return layui.each(e, function (e, t) {
            "array" !== layui.type(t) && a.push(k.clearCacheKey(t))
        }), a
    }, k.resize = function (e) {
        e ? l(e) && C(e).resize() : layui.each(w.that, function () {
            this.resize()
        })
    }, k.exportFile = function (e, t, a) {
        t = t || k.clearCacheKey(k.cache[e]);
        var o, d, i, r, l = (a = "object" == typeof a ? a : (l = {}, a && (l.type = a), l)).type || "csv",
            c = w.that[e], n = w.config[e] || {}, s = {csv: "text/csv", xls: "application/vnd.ms-excel"}[l],
            u = document.createElement("a");
        if (b.ie) return x.error("IE_NOT_SUPPORT_EXPORTS");
        if (n.tree && n.tree.view) try {
            t = p.extend(!0, [], k.cache[e]), t = function y(e) {
                return e.reduce(function (e, t) {
                    var a = t.children || [];
                    return delete t.children, e.concat(t, y(a))
                }, [])
            }(Array.from(t))
        } catch (h) {
        }
        u.href = "data:" + s + ";charset=utf-8,\ufeff" + encodeURIComponent((o = [], d = [], i = [], r = {}, layui.each(t, function (i, l) {
            var n = [];
            "object" == typeof e ? (layui.each(e, function (e, t) {
                0 == i && o.push(t || "")
            }), layui.each(layui.isArray(l) ? p.extend([], l) : k.clearCacheKey(l), function (e, t) {
                n.push('"' + (t || "") + '"')
            })) : k.eachCols(e, function (e, t) {
                var a;
                (!1 === t.ignoreExport || t.field && "normal" == t.type) && (t.hide && !1 !== t.ignoreExport || !0 === t.ignoreExport ? 0 == i && (r[t.field] = !0) : ((a = l[t.field]) !== undefined && null !== a || (a = ""), 0 == i && o.push(t.fieldTitle || t.title || t.field || ""), a = (a = T.call(c, {
                    item3: t,
                    content: a,
                    tplData: l,
                    text: "text",
                    obj: {
                        td: function (e) {
                            return c.layBody.find('tr[data-index="' + i + '"]>td').filter('[data-field="' + e + '"]')
                        }
                    }
                })).replace(/"/g, '""'), n.push(a = '"' + a + '"')))
            }), d.push(n.join(","))
        }), c && layui.each(c.dataTotal, function (e, t) {
            r[t.field] || i.push('"' + (t.total || "") + '"')
        }), o.join(",") + "\r\n" + d.join("\r\n") + "\r\n" + i.join(","))), u.download = (a.title || n.title || "table_" + (n.index || "")) + "." + l, document.body.appendChild(u), u.click(), document.body.removeChild(u)
    }, k.getOptions = l, k.hideCol = function (e, l) {
        var n = C(e);
        n && ("boolean" === layui.type(l) ? n.eachCols(function (e, t) {
            var a = t.key, i = n.col(a), t = t.parentKey;
            i.hide != l && (i = i.hide = l, n.elem.find('*[data-key="' + a + '"]')[i ? "addClass" : "removeClass"](R), n.setParentCol(i, t))
        }) : (l = layui.isArray(l) ? l : [l], layui.each(l, function (e, l) {
            n.eachCols(function (e, t) {
                var a, i;
                l.field === t.field && (a = t.key, i = n.col(a), t = t.parentKey, "hide" in l) && i.hide != l.hide && (i = i.hide = !!l.hide, n.elem.find('*[data-key="' + a + '"]')[i ? "addClass" : "removeClass"](R), n.setParentCol(i, t))
            })
        })), p("." + j).remove(), n.resize())
    }, k.reload = function (e, t, a, i) {
        if (l(e)) return (e = C(e)).reload(t, a, i), w.call(e)
    }, k.reloadData = function () {
        var a = p.extend([], arguments),
            i = (a[3] = "reloadData", new RegExp("^(" + ["elem", "id", "cols", "width", "height", "maxHeight", "toolbar", "defaultToolbar", "className", "css", "pagebar"].join("|") + ")$"));
        return layui.each(a[1], function (e, t) {
            i.test(e) && delete a[1][e]
        }), k.reload.apply(null, a)
    }, k.render = function (e) {
        e = new i(e);
        return w.call(e)
    }, k.clearCacheKey = function (e) {
        return delete (e = p.extend({}, e))[k.config.checkName], delete e[k.config.indexName], delete e[k.config.numbersName], delete e[k.config.disabledName], e
    }, p(function () {
        k.init()
    }), n(N, k)
});
layui.define(["table"], function (e) {
    "use strict";
    var E = layui.$, x = layui.form, B = layui.table, y = layui.hint(), j = {
            config: {}, on: B.on, eachCols: B.eachCols, index: B.index, set: function (e) {
                var t = this;
                return t.config = E.extend({}, t.config, e), t
            }, resize: B.resize, getOptions: B.getOptions, hideCol: B.hideCol, renderData: B.renderData
        }, i = function () {
            var a = this, e = a.config, n = e.id || e.index;
            return {
                config: e, reload: function (e, t) {
                    a.reload.call(a, e, t)
                }, reloadData: function (e, t) {
                    j.reloadData(n, e, t)
                }
            }
        }, P = function (e) {
            var t = i.that[e];
            return t || y.error(e ? "The treeTable instance with ID '" + e + "' not found" : "ID argument required"), t || null
        }, F = "layui-hide", L = ".layui-table-main", q = ".layui-table-fixed-l", R = ".layui-table-fixed-r",
        l = "layui-table-checked", h = "layui-table-tree", Y = "LAY_DATA_INDEX", m = "LAY_DATA_INDEX_HISTORY",
        s = "LAY_PARENT_INDEX", b = "LAY_CHECKBOX_HALF", H = "LAY_EXPAND", z = "LAY_HAS_EXPANDED",
        X = "LAY_ASYNC_STATUS", n = ["all", "parent", "children", "none"], t = function (e) {
            var t = this;
            t.index = ++j.index, t.config = E.extend(!0, {}, t.config, j.config, e), t.init(), t.render()
        }, f = function (n, i, e) {
            var l = B.cache[n];
            layui.each(e || l, function (e, t) {
                var a = t[Y] || "";
                -1 !== a.indexOf("-") && (l[a] = t), t[i] && f(n, i, t[i])
            })
        }, d = function (l, a, e) {
            var d = P(l), r = ("reloadData" !== e && (d.status = {expand: {}}), E.extend(!0, {}, d.getOptions(), a)),
                n = r.tree, o = n.customName.children, i = n.customName.id,
                c = (delete a.hasNumberCol, delete a.hasChecboxCol, delete a.hasRadioCol, B.eachCols(null, function (e, t) {
                    "numbers" === t.type ? a.hasNumberCol = !0 : "checkbox" === t.type ? a.hasChecboxCol = !0 : "radio" === t.type && (a.hasRadioCol = !0)
                }, r.cols), a.parseData), u = a.done;
            r.url ? e && (!c || c.mod) || (a.parseData = function () {
                var e = this, t = arguments, a = t[0],
                    t = ("function" === layui.type(c) && (a = c.apply(e, t) || t[0]), e.response.dataName);
                return n.data.isSimpleData && !n["async"].enable && (a[t] = d.flatToTree(a[t])), p(a[t], function (e) {
                    e[H] = H in e ? e[H] : e[i] !== undefined && d.status.expand[e[i]]
                }, o), e.autoSort && e.initSort && e.initSort.type && layui.sort(a[t], e.initSort.field, "desc" === e.initSort.type, !0), d.initData(a[t]), a
            }, a.parseData.mod = !0) : (a.data = a.data || [], n.data.isSimpleData && (a.data = d.flatToTree(a.data)), d.initData(a.data)), e && (!u || u.mod) || (a.done = function () {
                var e, t = arguments, a = t[3], n = (a || delete d.isExpandAll, this.elem.next()),
                    i = (d.updateStatus(null, {LAY_HAS_EXPANDED: !1}), f(l, o), n.find('[name="layTableCheckbox"][lay-filter="layTableAllChoose"]'));
                if (i.length && (e = j.checkStatus(l), i.prop({
                    checked: e.isAll && e.data.length,
                    indeterminate: !e.isAll && e.data.length
                })), !a && r.autoSort && r.initSort && r.initSort.type && j.sort(l), d.renderTreeTable(n), "function" === layui.type(u)) return u.apply(this, t)
            }, a.done.mod = !0)
        };
    t.prototype.init = function () {
        var e = this.config, t = e.tree.data.cascade,
            t = (-1 === n.indexOf(t) && (e.tree.data.cascade = "all"), B.render(E.extend({}, e, {
                data: [],
                url: "",
                done: null
            }))), a = t.config.id;
        (i.that[a] = this).tableIns = t, d(a, e)
    }, t.prototype.config = {
        tree: {
            customName: {
                children: "children",
                isParent: "isParent",
                name: "name",
                id: "id",
                pid: "parentId",
                icon: "icon"
            },
            view: {
                indent: 14,
                flexIconClose: '<i class="layui-icon layui-icon-triangle-r"></i>',
                flexIconOpen: '<i class="layui-icon layui-icon-triangle-d"></i>',
                showIcon: !0,
                icon: "",
                iconClose: '<i class="layui-icon layui-icon-folder"></i>',
                iconOpen: '<i class="layui-icon layui-icon-folder-open"></i>',
                iconLeaf: '<i class="layui-icon layui-icon-leaf"></i>',
                showFlexIconIfNotParent: !1,
                dblClickExpand: !0,
                expandAllDefault: !1
            },
            data: {isSimpleData: !1, rootPid: null, cascade: "all"},
            "async": {enable: !1, url: "", type: null, contentType: null, headers: null, where: null, autoParam: []},
            callback: {beforeExpand: null, onExpand: null}
        }
    }, t.prototype.getOptions = function () {
        return this.tableIns ? B.getOptions(this.tableIns.config.id) : this.config
    }, t.prototype.flatToTree = function (e) {
        var a, n, i, t, l, d, r, o = this.getOptions(), c = o.tree, u = c.customName, o = o.id;
        return e = e || B.cache[o], o = e, a = u.id, n = u.pid, i = u.children, t = c.data.rootPid, a = a || "id", n = n || "parentId", i = i || "children", r = {}, layui.each(o, function (e, t) {
            l = a + t[a], r[l] = E.extend({}, t), r[l][i] = []
        }), layui.each(r, function (e, t) {
            (d = a + t[n]) && r[d] && r[d][i].push(t)
        }), Object.keys(r).map(function (e) {
            return r[e]
        }).filter(function (e) {
            return t ? e[n] === t : !e[n]
        })
    }, t.prototype.treeToFlat = function (e, n, i) {
        var l = this, d = l.getOptions().tree.customName, r = d.children, o = d.pid, c = [];
        return layui.each(e, function (e, t) {
            var e = (i ? i + "-" : "") + e, a = E.extend({}, t);
            a[o] = t[o] || n, c.push(a), c = c.concat(l.treeToFlat(t[r], t[d.id], e))
        }), c
    }, t.prototype.getTreeNode = function (e) {
        var t, a, n = this;
        return e ? (a = (t = n.getOptions()).tree, t.id, a.customName, {
            data: e,
            dataIndex: e[Y],
            getParentNode: function () {
                return n.getNodeByIndex(e[s])
            }
        }) : y.error("\u627e\u4e0d\u5230\u8282\u70b9\u6570\u636e")
    }, t.prototype.getNodeByIndex = function (t) {
        var a, e, n = this, i = n.getNodeDataByIndex(t);
        return i ? ((e = n.getOptions()).tree.customName.parent, a = e.id, (e = {
            data: i,
            dataIndex: i[Y],
            getParentNode: function () {
                return n.getNodeByIndex(i[s])
            },
            update: function (e) {
                return j.updateNode(a, t, e)
            },
            remove: function () {
                return j.removeNode(a, t)
            },
            expand: function (e) {
                return j.expandNode(a, E.extend({}, e, {index: t}))
            },
            setChecked: function (e) {
                return j.setRowChecked(a, E.extend({}, e, {index: t}))
            }
        }).dataIndex = t, e) : y.error("\u627e\u4e0d\u5230\u8282\u70b9\u6570\u636e")
    }, t.prototype.getNodeById = function (a) {
        var e = this.getOptions(), n = e.tree.customName.id, i = "", e = j.getData(e.id, !0);
        if (layui.each(e, function (e, t) {
            if (t[n] === a) return i = t[Y], !0
        }), i) return this.getNodeByIndex(i)
    }, t.prototype.getNodeDataByIndex = function (e, t, a) {
        var n = this.getOptions(), i = n.tree, n = n.id, n = B.cache[n], l = n[e];
        if ("delete" !== a && l) return E.extend(l, a), t ? E.extend({}, l) : l;
        for (var d = n, r = String(e).split("-"), o = 0, c = i.customName.children; o < r.length; o++) {
            if (a && o === r.length - 1) {
                if ("delete" === a) return (o ? d[c] : d).splice(r[o], 1)[0];
                E.extend((o ? d[c] : d)[r[o]], a)
            }
            d = (o ? d[c] : d)[r[o]]
        }
        return t ? E.extend({}, d) : d
    }, j.getNodeDataByIndex = function (e, t) {
        e = P(e);
        if (e) return e.getNodeDataByIndex(t, !0)
    };
    t.prototype.initData = function (e, a) {
        var n = this, t = n.getOptions(), i = t.tree, t = t.id, i = (e = e || n.getTableData(), i.customName),
            l = i.isParent, d = i.children;
        return layui.each(e, function (e, t) {
            l in t || (t[l] = !(!t[d] || !t[d].length)), t[m] = t[Y], t[s] = a = a || "";
            e = t[Y] = (a ? a + "-" : "") + e;
            n.initData(t[d] || [], e)
        }), f(t, d, e), e
    }, r = {};
    var r, V = function (e, t, a) {
        return r[e] || (r[e] = layui.debounce(t, a)), r[e]
    }, U = function (t, a, n, i, l) {
        var e = t.trElem, d = t.tableViewElem || e.closest(".layui-table-view"), r = t.tableId || d.attr("lay-id"),
            o = t.options || B.getOptions(r), e = t.dataIndex || e.attr("lay-data-index"), c = P(r), u = o.tree || {},
            s = u.customName || {}, f = s.isParent, y = c.getNodeDataByIndex(e), p = "boolean" !== layui.type(a),
            x = p ? !y[H] : a, h = y[f] ? x : null;
        if (l && x != y[H] && (!y[X] || "local" === y[X])) {
            var m = u.callback.beforeExpand;
            if ("function" === layui.type(m) && !1 === m(r, y, a)) return h
        }
        var m = y[z], b = d.find('tr[lay-data-index="' + e + '"]'), g = b.find(".layui-table-tree-flexIcon"),
            v = (g.html(x ? u.view.flexIconOpen : u.view.flexIconClose), y[f] && g.css("visibility", "visible"), u.view.showIcon && b.find(".layui-table-tree-nodeIcon:not(.layui-table-tree-iconCustom,.layui-table-tree-iconLeaf)").html(x ? u.view.iconOpen : u.view.iconClose), y[H] = x, y[s.id]);
        if (v !== undefined && (c.status.expand[v] = x), null !== h) {
            v = y[s.children] || [];
            if (x) if (m) {
                if (!v.length) return;
                b.nextAll(v.map(function (e, t, a) {
                    return 'tr[lay-data-index="' + e[Y] + '"]'
                }).join(",")).removeClass(F), layui.each(v, function (e, t) {
                    t[f] && (!n || p || t[H] ? t[H] && U({
                        dataIndex: t[Y],
                        trElem: d.find('tr[lay-data-index="' + t[Y] + '"]').first(),
                        tableViewElem: d,
                        tableId: r,
                        options: o
                    }, !0) : U({
                        dataIndex: t[Y],
                        trElem: d.find('tr[lay-data-index="' + t[Y] + '"]').first(),
                        tableViewElem: d,
                        tableId: r,
                        options: o
                    }, a, n, i, l))
                })
            } else {
                var N, I, C, D, T, k, _, O, w, S, A, m = u["async"] || {}, b = m.url || o.url;
                if (m.enable && y[f] && !y[X]) return y[X] = "loading", g.html('<i class="layui-icon layui-icon-loading layui-anim layui-anim-loop layui-anim-rotate"></i>'), N = function (e) {
                    y[X] = "success", y[s.children] = e, c.initData(y[s.children], y[Y]), U(t, !0, !p && n, i, l)
                }, C = m.format, "function" === layui.type(C) ? C(y, o, N) : (I = E.extend({}, m.where || o.where), C = m.autoParam, layui.each(C, function (e, t) {
                    t = t.split("=");
                    I[t[0].trim()] = y[(t[1] || t[0]).trim()]
                }), (C = m.contentType || o.contentType) && 0 == C.indexOf("application/json") && (I = JSON.stringify(I)), w = m.method || o.method, D = m.dataType || o.dataType, T = m.jsonpCallback || o.jsonpCallback, k = m.headers || o.headers, _ = m.parseData || o.parseData, O = m.response || o.response, E.ajax({
                    type: w || "get",
                    url: b,
                    contentType: C,
                    data: I,
                    dataType: D || "json",
                    jsonpCallback: T,
                    headers: k || {},
                    success: function (e) {
                        (e = "function" == typeof _ ? _.call(o, e) || e : e)[O.statusName] != O.statusCode ? (y[X] = "error", g.html('<i class="layui-icon layui-icon-refresh"></i>')) : N(e[O.dataName])
                    },
                    error: function (e, t) {
                        y[X] = "error", "function" == typeof o.error && o.error(e, t)
                    }
                })), h;
                y[z] = !0, v.length && (!o.initSort || o.url && !o.autoSort || ((m = o.initSort).type ? layui.sort(v, m.field, "desc" === m.type, !0) : layui.sort(v, B.config.indexName, null, !0)), c.initData(y[s.children], y[Y]), w = B.getTrHtml(r, v, null, null, e), S = {
                    trs: E(w.trs.join("")),
                    trs_fixed: E(w.trs_fixed.join("")),
                    trs_fixed_r: E(w.trs_fixed_r.join(""))
                }, A = (e.split("-").length - 1 || 0) + 1, layui.each(v, function (e, t) {
                    S.trs.eq(e).attr({
                        "data-index": t[Y],
                        "lay-data-index": t[Y],
                        "data-level": A
                    }), S.trs_fixed.eq(e).attr({
                        "data-index": t[Y],
                        "lay-data-index": t[Y],
                        "data-level": A
                    }), S.trs_fixed_r.eq(e).attr({"data-index": t[Y], "lay-data-index": t[Y], "data-level": A})
                }), d.find(L).find('tbody tr[lay-data-index="' + e + '"]').after(S.trs), d.find(q).find('tbody tr[lay-data-index="' + e + '"]').after(S.trs_fixed), d.find(R).find('tbody tr[lay-data-index="' + e + '"]').after(S.trs_fixed_r), c.renderTreeTable(S.trs, A), n) && !p && layui.each(v, function (e, t) {
                    U({
                        dataIndex: t[Y],
                        trElem: d.find('tr[lay-data-index="' + t[Y] + '"]').first(),
                        tableViewElem: d,
                        tableId: r,
                        options: o
                    }, a, n, i, l)
                })
            } else c.isExpandAll = !1, (n && !p ? (layui.each(v, function (e, t) {
                U({
                    dataIndex: t[Y],
                    trElem: d.find('tr[lay-data-index="' + t[Y] + '"]').first(),
                    tableViewElem: d,
                    tableId: r,
                    options: o
                }, a, n, i, l)
            }), d.find(v.map(function (e, t, a) {
                return 'tr[lay-data-index="' + e[Y] + '"]'
            }).join(","))) : (b = c.treeToFlat(v, y[s.id], e), d.find(b.map(function (e, t, a) {
                return 'tr[lay-data-index="' + e[Y] + '"]'
            }).join(",")))).addClass(F);
            V("resize-" + r, function () {
                j.resize(r)
            }, 0)(), l && "loading" !== y[X] && (C = u.callback.onExpand, "function" === layui.type(C)) && C(r, y, x)
        }
        return h
    }, g = (j.expandNode = function (e, t) {
        var a, n, i, e = P(e);
        if (e) return a = (t = t || {}).index, n = t.expandFlag, i = t.inherit, t = t.callbackFlag, e = e.getOptions().elem.next(), U({trElem: e.find('tr[lay-data-index="' + a + '"]').first()}, n, i, null, t)
    }, j.expandAll = function (a, e) {
        if ("boolean" !== layui.type(e)) return y.error("expandAll \u7684\u5c55\u5f00\u72b6\u6001\u53c2\u6570\u53ea\u63a5\u6536true/false");
        var t = P(a);
        if (t) {
            t.isExpandAll = e;
            var n = t.getOptions(), i = n.tree, l = n.elem.next(), d = i.customName.isParent, r = i.customName.id,
                o = i.view.showFlexIconIfNotParent;
            if (e) {
                e = j.getData(a, !0);
                if (i["async"].enable) {
                    var c = !0;
                    if (layui.each(e, function (e, t) {
                        if (t[d] && !t[X]) return !(c = !1)
                    }), !c) return void layui.each(j.getData(a), function (e, t) {
                        j.expandNode(a, {index: t[Y], expandFlag: !0, inherit: !0})
                    })
                }
                var u = !0;
                if (layui.each(e, function (e, t) {
                    if (t[d] && !t[z]) return !(u = !1)
                }), u) t.updateStatus(null, function (e) {
                    (e[d] || o) && (e[H] = !0, e[r] !== undefined) && (t.status.expand[e[r]] = !0)
                }), l.find('tbody tr[data-level!="0"]').removeClass(F), l.find(".layui-table-tree-flexIcon").html(i.view.flexIconOpen), i.view.showIcon && l.find(".layui-table-tree-nodeIcon:not(.layui-table-tree-iconCustom,.layui-table-tree-iconLeaf)").html(i.view.iconOpen); else {
                    if (t.updateStatus(null, function (e) {
                        (e[d] || o) && (e[H] = !0, e[z] = !0, e[r] !== undefined) && (t.status.expand[e[r]] = !0)
                    }), n.initSort && n.initSort.type && n.autoSort) return j.sort(a);
                    var s, n = B.getTrHtml(a, e), f = {
                        trs: E(n.trs.join("")),
                        trs_fixed: E(n.trs_fixed.join("")),
                        trs_fixed_r: E(n.trs_fixed_r.join(""))
                    };
                    layui.each(e, function (e, t) {
                        var a = t[Y].split("-").length - 1;
                        s = {
                            "data-index": t[Y],
                            "lay-data-index": t[Y],
                            "data-level": a
                        }, f.trs.eq(e).attr(s), f.trs_fixed.eq(e).attr(s), f.trs_fixed_r.eq(e).attr(s)
                    }), layui.each(["main", "fixed-l", "fixed-r"], function (e, t) {
                        l.find(".layui-table-" + t + " tbody").html(f[["trs", "trs_fixed", "trs_fixed_r"][e]])
                    }), t.renderTreeTable(l, 0, !1)
                }
            } else t.updateStatus(null, function (e) {
                (e[d] || o) && (e[H] = !1, e[r] !== undefined) && (t.status.expand[e[r]] = !1)
            }), l.find('.layui-table-box tbody tr[data-level!="0"]').addClass(F), l.find(".layui-table-tree-flexIcon").html(i.view.flexIconClose), i.view.showIcon && l.find(".layui-table-tree-nodeIcon:not(.layui-table-tree-iconCustom,.layui-table-tree-iconLeaf)").html(i.view.iconClose);
            j.resize(a)
        }
    }, t.prototype.renderTreeTable = function (e, t, a) {
        var n = this, i = n.getOptions(), l = i.elem.next(), d = (l.hasClass(h) || l.addClass(h), i.id),
            r = i.tree || {}, o = (r.data, r.view || {}), c = r.customName || {}, u = c.isParent,
            s = (l.attr("lay-filter"), n),
            f = ((t = t || 0) || (l.find(".layui-table-body tr:not([data-level])").attr("data-level", t), layui.each(B.cache[d], function (e, t) {
                l.find('.layui-table-main tbody tr[data-level="0"]:eq(' + e + ")").attr("lay-data-index", t[Y]), l.find('.layui-table-fixed-l tbody tr[data-level="0"]:eq(' + e + ")").attr("lay-data-index", t[Y]), l.find('.layui-table-fixed-r tbody tr[data-level="0"]:eq(' + e + ")").attr("lay-data-index", t[Y])
            })), null), y = c.name, p = o.indent || 14;
        if (layui.each(e.find('td[data-field="' + y + '"]'), function (e, t) {
            var a, n, i = (t = E(t)).closest("tr"), t = t.children(".layui-table-cell");
            t.hasClass("layui-table-tree-item") || (n = i.attr("lay-data-index")) && (i = l.find('tr[lay-data-index="' + n + '"]'), (a = s.getNodeDataByIndex(n))[H] && a[u] && ((f = f || {})[n] = !0), a[b] && i.find('input[type="checkbox"][name="layTableCheckbox"]').prop("indeterminate", !0), n = t.html(), (t = i.find('td[data-field="' + y + '"]>div.layui-table-cell')).addClass("layui-table-tree-item"), t.html(['<div class="layui-inline layui-table-tree-flexIcon" ', 'style="', "margin-left: " + p * i.attr("data-level") + "px;", a[u] || o.showFlexIconIfNotParent ? "" : " visibility: hidden;", '">', a[H] ? o.flexIconOpen : o.flexIconClose, "</div>", o.showIcon ? '<div class="layui-inline layui-table-tree-nodeIcon' + (a[c.icon] || o.icon ? " layui-table-tree-iconCustom" : "") + (a[u] ? "" : " layui-table-tree-iconLeaf") + '">' + (a[c.icon] || o.icon || (a[u] ? a[H] ? o.iconOpen : o.iconClose : o.iconLeaf) || "") + "</div>" : "", n].join("")).find(".layui-table-tree-flexIcon").on("click", function (e) {
                layui.stope(e), U({trElem: i}, null, null, null, !0)
            }))
        }), !t && r.view.expandAllDefault && n.isExpandAll === undefined) return j.expandAll(d, !0);
        !1 !== a && f ? layui.each(f, function (e, t) {
            e = l.find('tr[lay-data-index="' + e + '"]');
            e.find(".layui-table-tree-flexIcon").html(o.flexIconOpen), U({trElem: e.first()}, !0)
        }) : V("renderTreeTable-" + d, function () {
            i.hasNumberCol && g(n), x.render(E('.layui-table-tree[lay-id="' + d + '"]'))
        }, 0)()
    }, function (a) {
        var e = a.getOptions(), t = e.elem.next(), n = 0, i = t.find(".layui-table-main tbody tr"),
            l = t.find(".layui-table-fixed-l tbody tr"), d = t.find(".layui-table-fixed-r tbody tr");
        layui.each(a.treeToFlat(B.cache[e.id]), function (e, t) {
            t.LAY_HIDE || (a.getNodeDataByIndex(t[Y]).LAY_NUM = ++n, i.eq(e).find(".laytable-cell-numbers").html(n), l.eq(e).find(".laytable-cell-numbers").html(n), d.eq(e).find(".laytable-cell-numbers").html(n))
        })
    }), p = (t.prototype.render = function (e) {
        var t = this;
        t.tableIns = B["reloadData" === e ? "reloadData" : "reload"](t.tableIns.config.id, E.extend(!0, {}, t.config)), t.config = t.tableIns.config
    }, t.prototype.reload = function (e, t, a) {
        var n = this;
        e = e || {}, delete n.haveInit, layui.each(e, function (e, t) {
            "array" === layui.type(t) && delete n.config[e]
        }), d(n.getOptions().id, e, a || !0), n.config = E.extend(t, {}, n.config, e), n.render(a)
    }, j.reloadData = function () {
        var e = E.extend(!0, [], arguments);
        return e[3] = "reloadData", j.reload.apply(null, e)
    }, function (e, a, n, i) {
        var l = [];
        return layui.each(e, function (e, t) {
            "function" === layui.type(a) ? a(t) : E.extend(t, a), l.push(E.extend({}, t)), i || (l = l.concat(p(t[n], a, n, i)))
        }), l
    }), o = (t.prototype.updateStatus = function (e, t, a) {
        var n = this.getOptions(), i = n.tree;
        return e = e || B.cache[n.id], p(e, t, i.customName.children, a)
    }, t.prototype.getTableData = function () {
        var e = this.getOptions();
        return B.cache[e.id]
    }, j.updateStatus = function (e, t, a) {
        var e = P(e), n = e.getOptions();
        return a = a || (n.url ? B.cache[n.id] : n.data), e.updateStatus(a, t)
    }, j.sort = function (e) {
        var t = P(e);
        t && t.getOptions().autoSort && (t.initData(), j.renderData(e))
    }, function (n) {
        var t = n.config.id, i = P(t), a = n.data = j.getNodeDataByIndex(t, n.index), l = a[Y],
            d = (n.dataIndex = l, n.update);
        n.update = function () {
            var e = arguments, t = (E.extend(i.getNodeDataByIndex(l), e[0]), d.apply(this, e)),
                a = n.config.tree.customName.name;
            return a in e[0] && n.tr.find('td[data-field="' + a + '"]').children("div.layui-table-cell").removeClass("layui-table-tree-item"), i.renderTreeTable(n.tr, n.tr.attr("data-level"), !1), t
        }, n.del = function () {
            j.removeNode(t, a)
        }, n.setRowChecked = function (e) {
            j.setRowChecked(t, {index: a, checked: e})
        }
    }), u = (j.updateNode = function (e, a, t) {
        var n, i, l, d, r, o = P(e);
        o && ((d = o.getOptions()).tree, d = (n = d.elem.next()).find('tr[lay-data-index="' + a + '"]'), i = d.attr("data-index"), l = d.attr("data-level"), t) && (d = o.getNodeDataByIndex(a, !1, t), r = B.getTrHtml(e, [d]), layui.each(["main", "fixed-l", "fixed-r"], function (e, t) {
            n.find(".layui-table-" + t + ' tbody tr[lay-data-index="' + a + '"]').replaceWith(E(r[["trs", "trs_fixed", "trs_fixed_r"][e]].join("")).attr({
                "data-index": i,
                "lay-data-index": a,
                "data-level": l
            }))
        }), o.renderTreeTable(n.find('tr[lay-data-index="' + a + '"]'), l))
    }, j.removeNode = function (e, t) {
        var a, n, i, l, d, r = P(e);
        r && (d = (a = r.getOptions()).tree, n = a.elem.next(), i = [], t = r.getNodeDataByIndex("string" === layui.type(t) ? t : t[Y], !1, "delete"), l = r.getNodeDataByIndex(t[s]), r.updateCheckStatus(l), l = r.treeToFlat([t], t[d.customName.pid], t[s]), layui.each(l, function (e, t) {
            i.push('tr[lay-data-index="' + t[Y] + '"]')
        }), n.find(i.join(",")).remove(), d = r.initData(), layui.each(r.treeToFlat(d), function (e, t) {
            t[m] && t[m] !== t[Y] && n.find('tr[lay-data-index="' + t[m] + '"]').attr({
                "data-index": t[Y],
                "lay-data-index": t[Y]
            })
        }), layui.each(B.cache[e], function (e, t) {
            n.find('tr[data-level="0"][lay-data-index="' + t[Y] + '"]').attr("data-index", e)
        }), a.hasNumberCol && g(r), j.resize(e))
    }, j.addNodes = function (e, t) {
        var a = P(e);
        if (a) {
            var n = a.getOptions(), i = n.tree, l = n.elem.next(), d = B.config.checkName,
                r = (t = t || {}).parentIndex, o = t.index, c = t.data, t = t.focus,
                u = (r = "number" === layui.type(r) ? r.toString() : r) ? a.getNodeDataByIndex(r) : null,
                o = "number" === layui.type(o) ? o : -1, c = E.extend(!0, [], layui.isArray(c) ? c : [c]);
            layui.each(c, function (e, t) {
                d in t || !u || (t[d] = u[d])
            }), a.getTableData();
            if (u) {
                var s = i.customName.isParent, f = i.customName.children;
                u[s] = !0;
                var y = (y = u[f]) ? (p = y.splice(-1 === o ? y.length : o), u[f] = y.concat(c, p)) : u[f] = c,
                    f = (a.updateStatus(y, function (e) {
                        (e[s] || i.view.showFlexIconIfNotParent) && (e[z] = !1)
                    }), a.treeToFlat(y));
                l.find(f.map(function (e) {
                    return 'tr[lay-data-index="' + e[Y] + '"]'
                }).join(",")).remove(), a.initData(), u[z] = !1, u[X] = "local", U({trElem: l.find('tr[lay-data-index="' + r + '"]')}, !0)
            } else {
                var p = B.cache[e].splice(-1 === o ? B.cache[e].length : o);
                if (B.cache[e] = B.cache[e].concat(c, p), n.url || (n.page ? (y = n.page, n.data.splice.apply(n.data, [y.limit * (y.curr - 1), y.limit].concat(B.cache[e]))) : n.data = B.cache[e]), a.initData(), l.find(".layui-none").length) return B.renderData(e), c;
                var x, f = B.getTrHtml(e, c), h = {
                    trs: E(f.trs.join("")),
                    trs_fixed: E(f.trs_fixed.join("")),
                    trs_fixed_r: E(f.trs_fixed_r.join(""))
                }, r = (layui.each(c, function (e, t) {
                    x = {
                        "data-index": t[Y],
                        "lay-data-index": t[Y],
                        "data-level": "0"
                    }, h.trs.eq(e).attr(x), h.trs_fixed.eq(e).attr(x), h.trs_fixed_r.eq(e).attr(x)
                }), parseInt(c[0][Y]) - 1), y = l.find(L), n = l.find(q), f = l.find(R);
                -1 == r ? (y.find('tr[data-level="0"][data-index="0"]').before(h.trs), n.find('tr[data-level="0"][data-index="0"]').before(h.trs_fixed), f.find('tr[data-level="0"][data-index="0"]').before(h.trs_fixed_r)) : -1 === o ? (y.find("tbody").append(h.trs), n.find("tbody").append(h.trs_fixed), f.find("tbody").append(h.trs_fixed_r)) : (r = p[0][m], y.find('tr[data-level="0"][data-index="' + r + '"]').before(h.trs), n.find('tr[data-level="0"][data-index="' + r + '"]').before(h.trs_fixed), f.find('tr[data-level="0"][data-index="' + r + '"]').before(h.trs_fixed_r)), layui.each(B.cache[e], function (e, t) {
                    l.find('tr[data-level="0"][lay-data-index="' + t[Y] + '"]').attr("data-index", e)
                }), a.renderTreeTable(l.find(c.map(function (e, t, a) {
                    return 'tr[lay-data-index="' + e[Y] + '"]'
                }).join(",")))
            }
            return a.updateCheckStatus(u), j.resize(e), t && l.find(L).find('tr[lay-data-index="' + c[0][Y] + '"]').get(0).scrollIntoViewIfNeeded(), c
        }
    }, j.checkStatus = function (e, n) {
        var i, t, a, l = P(e);
        if (l) return l = l.getOptions().tree, i = B.config.checkName, t = j.getData(e, !0).filter(function (e, t, a) {
            return e[i] || n && e[b]
        }), a = !0, layui.each("all" === l.data.cascade ? B.cache[e] : j.getData(e, !0), function (e, t) {
            if (!t[i]) return !(a = !1)
        }), {data: t, isAll: a}
    }, j.on("sort", function (e) {
        var e = e.config, t = e.elem.next(), e = e.id;
        t.hasClass(h) && j.sort(e)
    }), j.on("row", function (e) {
        e.config.elem.next().hasClass(h) && o(e)
    }), j.on("rowDouble", function (e) {
        var t = e.config, a = t.elem.next();
        t.id;
        a.hasClass(h) && (o(e), (t.tree || {}).view.dblClickExpand) && U({trElem: e.tr.first()}, null, null, null, !0)
    }), j.on("rowContextmenu", function (e) {
        var t = e.config, a = t.elem.next();
        t.id;
        a.hasClass(h) && o(e)
    }), j.on("tool", function (e) {
        var t = e.config, a = t.elem.next();
        t.id;
        a.hasClass(h) && o(e)
    }), j.on("edit", function (e) {
        var t = e.config, a = t.elem.next();
        t.id;
        a.hasClass(h) && (o(e), e.field === t.tree.customName.name) && ((a = {})[e.field] = e.value, e.update(a))
    }), j.on("radio", function (e) {
        var t = e.config, a = t.elem.next(), t = t.id;
        a.hasClass(h) && (a = P(t), o(e), u.call(a, e.tr, e.checked))
    }), t.prototype.setRowCheckedClass = function (e, t) {
        var a = this.getOptions(), n = (e.data("index"), a.elem.next());
        e[t ? "addClass" : "removeClass"](l), e.each(function () {
            var e = E(this).data("index");
            n.find('.layui-table-fixed-r tbody tr[data-index="' + e + '"]')[t ? "addClass" : "removeClass"](l)
        })
    }, t.prototype.updateCheckStatus = function (e, t) {
        var a, n, i, l, d, r, o, c = this, u = c.getOptions();
        return !!u.hasChecboxCol && (a = u.tree, n = u.id, i = u.elem.next(), l = B.config.checkName, "all" !== (d = a.data.cascade) && "parent" !== d || !e || (d = c.updateParentCheckStatus(e, "boolean" === layui.type(t) ? t : null), layui.each(d, function (e, t) {
            var a = i.find('tr[lay-data-index="' + t[Y] + '"]  input[name="layTableCheckbox"]:not(:disabled)'),
                n = t[l];
            c.setRowCheckedClass(a.closest("tr"), n), x.render(a.prop({checked: n, indeterminate: t[b]}))
        })), o = !(r = !0), e = (e = "all" === a.data.cascade ? B.cache[n] : j.getData(n, !0)).filter(function (e) {
            return !e[u.disabledName]
        }), layui.each(e, function (e, t) {
            if ((t[l] || t[b]) && (o = !0), t[l] || (r = !1), o && !r) return !0
        }), o = o && !r, x.render(i.find('input[name="layTableCheckbox"][lay-filter="layTableAllChoose"]').prop({
            checked: r,
            indeterminate: o
        })), r)
    }, t.prototype.updateParentCheckStatus = function (a, n) {
        var i, e = this.getOptions(), t = e.tree, e = e.id, l = B.config.checkName, t = t.customName.children, d = [];
        return !(a[b] = !1) === n ? a[t].length ? layui.each(a[t], function (e, t) {
            if (!t[l]) return n = !1, a[b] = !0
        }) : n = !1 : !1 === n ? layui.each(a[t], function (e, t) {
            if (t[l] || t[b]) return a[b] = !0
        }) : (n = !1, i = 0, layui.each(a[t], function (e, t) {
            t[l] && i++
        }), n = a[t].length ? a[t].length === i : a[l], a[b] = !n && 0 < i), a[l] = n, d.push(E.extend({}, a)), d = a[s] ? d.concat(this.updateParentCheckStatus(B.cache[e][a[s]], n)) : d
    }, function (e, t, a) {
        var n = this, i = n.getOptions(), l = i.tree, d = i.id, r = i.elem.next(),
            o = (e.length ? e : r).find(".laytable-cell-radio, .laytable-cell-checkbox").children("input").last(),
            i = "radio" === o.attr("type");
        if (a) {
            a = function () {
                var e = function (e) {
                    layui.stope(e)
                };
                o.parent().on("click", e), o.next().click(), o.parent().off("click", e)
            };
            i ? t && !o.prop("checked") && a() : "boolean" === layui.type(t) && o.prop("checked") === t || a()
        } else {
            var c, a = n.getNodeDataByIndex(e.attr("data-index")), u = B.config.checkName;
            if (!i) return t = "boolean" === layui.type(t) ? t : !a[u], i = n.updateStatus(a ? [a] : B.cache[d], function (e) {
                e[B.config.disabledName] || (e[u] = t, e[b] = !1)
            }, a && -1 !== ["parent", "none"].indexOf(l.data.cascade)), d = r.find(i.map(function (e) {
                return 'tr[lay-data-index="' + e[Y] + '"] input[name="layTableCheckbox"]:not(:disabled)'
            }).join(",")), n.setRowCheckedClass(d.closest("tr"), t), x.render(d.prop({
                checked: t,
                indeterminate: !1
            })), a && a[s] && (c = n.getNodeDataByIndex(a[s])), n.updateCheckStatus(c, t);
            a && (n.updateStatus(null, function (e) {
                var t;
                e[u] && (t = r.find('tr[lay-data-index="' + e[Y] + '"] input[type="radio"][lay-type="layTableRadio"]'), e[u] = !1, n.setRowCheckedClass(t.closest("tr"), !1), x.render(t.prop("checked", !1)))
            }), a[u] = t, n.setRowCheckedClass(e, t), n.setRowCheckedClass(e.siblings(), !1), x.render(e.find('input[type="radio"][lay-type="layTableRadio"]').prop("checked", t)))
        }
    });
    j.on("checkbox", function (e) {
        var t = e.config, a = t.elem.next(), t = t.id;
        a.hasClass(h) && (a = P(t), t = e.checked, o(e), e.isAll = u.call(a, e.tr, t))
    }), j.setRowChecked = function (a, e) {
        var t, n, i, l, d, r, o, c = P(a);
        c && (t = c.getOptions().elem.next(), i = (e = e || {}).index, n = e.checked, e = e.callbackFlag, i = "string" === layui.type(i) ? i : i[Y], r = c.getNodeDataByIndex(i)) && (l = function (e) {
            o.push(e), t.find('tr[lay-data-index="' + e + '"]').length || (e = c.getNodeDataByIndex(e)[s]) && l(e)
        }, (d = t.find('tr[lay-data-index="' + i + '"]')).length || (r = r[s], o = [], l(r), layui.each(o.reverse(), function (e, t) {
            j.expandNode(a, {index: t, expandFlag: !0})
        }), d = t.find('tr[lay-data-index="' + i + '"]')), u.call(c, d, n, e))
    }, j.checkAllNodes = function (e, t) {
        var a, e = P(e);
        e && (a = e.getOptions().elem.next(), u.call(e, a.find('tr[data-index="NONE"]'), !!t))
    }, j.getData = function (e, t) {
        var a, n = P(e);
        if (n) return a = [], layui.each(E.extend(!0, [], B.cache[e] || []), function (e, t) {
            a.push(t)
        }), t ? n.treeToFlat(a) : a
    }, j.reloadAsyncNode = function (a, e) {
        var t, n, i = P(a);
        i && (t = i.getOptions().tree)["async"] && t["async"].enable && (n = i.getNodeDataByIndex(e)) && (n[z] = !1, n[H] = !1, n[X] = !1, layui.each(i.treeToFlat(n[t.customName.children]).reverse(), function (e, t) {
            j.removeNode(a, t[Y])
        }), j.expandNode(a, {index: e, expandFlag: !0, callbackFlag: !0}))
    }, j.getNodeById = function (e, t) {
        e = P(e);
        if (e) return e.getNodeById(t)
    }, j.getNodesByFilter = function (e, t, a) {
        var n, i, l, d = P(e);
        if (d) return i = d.getOptions(), n = (a = a || {}).isSingle, a = (a = a.parentNode) && a.data, i = d.treeToFlat(a ? a[i.tree.customName.children] || [] : B.cache[e]).filter(t), l = [], layui.each(i, function (e, t) {
            if (l.push(d.getNodeByIndex(t[Y])), n) return !0
        }), l
    }, i.that = {}, j.reload = function (e, t, a, n) {
        e = P(e);
        if (e) return e.reload(t, a, n), i.call(e)
    }, j.render = function (e) {
        e = new t(e);
        return i.call(e)
    }, e("treeTable", j)
});
layui.define(["form", "util"], function (e) {
    "use strict";
    var p = layui.$, i = layui.form, y = layui.layer, f = layui.util, a = "tree", t = {
            config: {customName: {id: "id", title: "title", children: "children"}},
            index: layui[a] ? layui[a].index + 1e4 : 0,
            set: function (e) {
                var i = this;
                return i.config = p.extend({}, i.config, e), i
            },
            on: function (e, i) {
                return layui.onevent.call(this, a, e, i)
            }
        }, n = function () {
            var i = this, e = i.config, a = e.id || i.index;
            return n.that[a] = i, {
                config: n.config[a] = e, reload: function (e) {
                    i.reload.call(i, e)
                }, getChecked: function () {
                    return i.getChecked.call(i)
                }, setChecked: function (e) {
                    return i.setChecked.call(i, e)
                }
            }
        }, m = "layui-hide", u = "layui-disabled", k = "layui-tree-set", C = "layui-tree-iconClick",
        v = "layui-icon-addition", x = "layui-icon-subtraction", b = "layui-tree-entry", g = "layui-tree-main",
        w = "layui-tree-txt", N = "layui-tree-pack", F = "layui-tree-spread", T = "layui-tree-setLineShort",
        L = "layui-tree-showLine", S = "layui-tree-lineExtend", l = function (e) {
            var i = this;
            i.index = ++t.index, i.config = p.extend({}, i.config, t.config, e), i.render()
        };
    l.prototype.config = {
        data: [],
        showCheckbox: !1,
        showLine: !0,
        accordion: !1,
        onlyIconControl: !1,
        isJump: !1,
        edit: !1,
        text: {defaultNodeName: "\u672a\u547d\u540d", none: "\u65e0\u6570\u636e"}
    }, l.prototype.reload = function (e) {
        var a = this;
        layui.each(e, function (e, i) {
            "array" === layui.type(i) && delete a.config[e]
        }), a.config = p.extend(!0, {}, a.config, e), a.render()
    }, l.prototype.render = function () {
        var e = this, i = e.config,
            a = (i.customName = p.extend({}, t.config.customName, i.customName), e.checkids = [], p('<div class="layui-tree layui-border-box' + (i.showCheckbox ? " layui-form" : "") + (i.showLine ? " layui-tree-line" : "") + '" lay-filter="LAY-tree-' + e.index + '"></div>')),
            n = (e.tree(a), i.elem = p(i.elem));
        if (n[0]) {
            if (e.key = i.id || e.index, e.elem = a, e.elemNone = p('<div class="layui-tree-emptyText">' + i.text.none + "</div>"), n.html(e.elem), 0 == e.elem.find(".layui-tree-set").length) return e.elem.append(e.elemNone);
            i.showCheckbox && e.renderForm("checkbox"), e.elem.find(".layui-tree-set").each(function () {
                var e = p(this);
                e.parent(".layui-tree-pack")[0] || e.addClass("layui-tree-setHide"), !e.next()[0] && e.parents(".layui-tree-pack").eq(1).hasClass("layui-tree-lineExtend") && e.addClass(T), e.next()[0] || e.parents(".layui-tree-set").eq(0).next()[0] || e.addClass(T)
            }), e.events()
        }
    }, l.prototype.renderForm = function (e) {
        i.render(e, "LAY-tree-" + this.index)
    }, l.prototype.tree = function (r, e) {
        var d = this, s = d.config, o = s.customName, e = e || s.data;
        layui.each(e, function (e, i) {
            var a, n, t = i[o.children] && 0 < i[o.children].length,
                l = p('<div class="layui-tree-pack" ' + (i.spread ? 'style="display: block;"' : "") + "></div>"),
                c = p(['<div data-id="' + i[o.id] + '" class="layui-tree-set' + (i.spread ? " layui-tree-spread" : "") + (i.checked ? " layui-tree-checkedFirst" : "") + '">', '<div class="layui-tree-entry">', '<div class="layui-tree-main">', s.showLine ? t ? '<span class="layui-tree-iconClick layui-tree-icon"><i class="layui-icon ' + (i.spread ? "layui-icon-subtraction" : "layui-icon-addition") + '"></i></span>' : '<span class="layui-tree-iconClick"><i class="layui-icon layui-icon-file"></i></span>' : '<span class="layui-tree-iconClick"><i class="layui-tree-iconArrow ' + (t ? "" : m) + '"></i></span>', s.showCheckbox ? '<input type="checkbox" name="' + (i.field || "layuiTreeCheck_" + i[o.id]) + '" same="layuiTreeCheck" lay-skin="primary" ' + (i.disabled ? "disabled" : "") + ' value="' + i[o.id] + '">' : "", s.isJump && i.href ? '<a href="' + i.href + '" target="_blank" class="' + w + '">' + (i[o.title] || i.label || s.text.defaultNodeName) + "</a>" : '<span class="' + w + (i.disabled ? " " + u : "") + '">' + (i[o.title] || i.label || s.text.defaultNodeName) + "</span>", "</div>", s.edit ? (a = {
                    add: '<i class="layui-icon layui-icon-add-1"  data-type="add"></i>',
                    update: '<i class="layui-icon layui-icon-edit" data-type="update"></i>',
                    del: '<i class="layui-icon layui-icon-delete" data-type="del"></i>'
                }, n = ['<div class="layui-btn-group layui-tree-btnGroup">'], !0 === s.edit && (s.edit = ["update", "del"]), "object" == typeof s.edit ? (layui.each(s.edit, function (e, i) {
                    n.push(a[i] || "")
                }), n.join("") + "</div>") : void 0) : "", "</div></div>"].join(""));
            t && (c.append(l), d.tree(l, i[o.children])), r.append(c), c.prev("." + k)[0] && c.prev().children(".layui-tree-pack").addClass("layui-tree-showLine"), t || c.parent(".layui-tree-pack").addClass("layui-tree-lineExtend"), d.spread(c, i), s.showCheckbox && (i.checked && d.checkids.push(i[o.id]), d.checkClick(c, i)), s.edit && d.operate(c, i)
        })
    }, l.prototype.spread = function (n, t) {
        var l = this, c = l.config, e = n.children("." + b), i = e.children("." + g),
            a = i.find('input[same="layuiTreeCheck"]'), r = e.find("." + C), e = e.find("." + w),
            d = c.onlyIconControl ? r : i, s = "";
        d.on("click", function (e) {
            var i = n.children("." + N),
                a = (d.children(".layui-icon")[0] ? d : d.find(".layui-tree-icon")).children(".layui-icon");
            i[0] ? n.hasClass(F) ? (n.removeClass(F), i.slideUp(200), a.removeClass(x).addClass(v), l.updateFieldValue(t, "spread", !1)) : (n.addClass(F), i.slideDown(200), a.addClass(x).removeClass(v), l.updateFieldValue(t, "spread", !0), c.accordion && ((i = n.siblings("." + k)).removeClass(F), i.children("." + N).slideUp(200), i.find(".layui-tree-icon").children(".layui-icon").removeClass(x).addClass(v))) : s = "normal"
        }), e.on("click", function () {
            p(this).hasClass(u) || (s = n.hasClass(F) ? c.onlyIconControl ? "open" : "close" : c.onlyIconControl ? "close" : "open", a[0] && l.updateFieldValue(t, "checked", a.prop("checked")), c.click && c.click({
                elem: n,
                state: s,
                data: t
            }))
        })
    }, l.prototype.updateFieldValue = function (e, i, a) {
        i in e && (e[i] = a)
    }, l.prototype.setCheckbox = function (e, i, a) {
        var t, n = this, l = n.config.customName, c = a.prop("checked");
        a.prop("disabled") || ("object" != typeof i[l.children] && !e.find("." + N)[0] || e.find("." + N).find('input[same="layuiTreeCheck"]').each(function (e) {
            this.disabled || ((e = i[l.children][e]) && n.updateFieldValue(e, "checked", c), n.updateFieldValue(this, "checked", c))
        }), (t = function (e) {
            var i, a, n;
            e.parents("." + k)[0] && (a = (e = e.parent("." + N)).parent(), n = e.prev().find('input[same="layuiTreeCheck"]'), c ? n.prop("checked", c) : (e.find('input[same="layuiTreeCheck"]').each(function () {
                this.checked && (i = !0)
            }), i || n.prop("checked", !1)), t(a))
        })(e), n.renderForm("checkbox"))
    }, l.prototype.checkClick = function (a, n) {
        var t = this, l = t.config;
        a.children("." + b).children("." + g).on("click", 'input[same="layuiTreeCheck"]+', function (e) {
            layui.stope(e);
            var e = p(this).prev(), i = e.prop("checked");
            e.prop("disabled") || (t.setCheckbox(a, n, e), t.updateFieldValue(n, "checked", i), l.oncheck && l.oncheck({
                elem: a,
                checked: i,
                data: n
            }))
        })
    }, l.prototype.operate = function (r, d) {
        var s = this, o = s.config, u = o.customName, e = r.children("." + b), h = e.children("." + g);
        e.children(".layui-tree-btnGroup").on("click", ".layui-icon", function (e) {
            layui.stope(e);
            var i, e = p(this).data("type"), n = r.children("." + N), t = {data: d, type: e, elem: r};
            if ("add" == e) {
                n[0] || (o.showLine ? (h.find("." + C).addClass("layui-tree-icon"), h.find("." + C).children(".layui-icon").addClass(v).removeClass("layui-icon-file")) : h.find(".layui-tree-iconArrow").removeClass(m), r.append('<div class="layui-tree-pack"></div>'));
                var a, l = o.operate && o.operate(t), c = {};
                if (c[u.title] = o.text.defaultNodeName, c[u.id] = l, s.tree(r.children("." + N), [c]), o.showLine && (n[0] ? (n.hasClass(S) || n.addClass(S), r.find("." + N).each(function () {
                    p(this).children("." + k).last().addClass(T)
                }), (n.children("." + k).last().prev().hasClass(T) ? n.children("." + k).last().prev() : n.children("." + k).last()).removeClass(T), !r.parent("." + N)[0] && r.next()[0] && n.children("." + k).last().removeClass(T)) : (l = r.siblings("." + k), a = 1, c = r.parent("." + N), layui.each(l, function (e, i) {
                    p(i).children("." + N)[0] || (a = 0)
                }), (1 == a ? (l.children("." + N).addClass(L), l.children("." + N).children("." + k).removeClass(T), r.children("." + N).addClass(L), c.removeClass(S), c.children("." + k).last().children("." + N).children("." + k).last()) : r.children("." + N).children("." + k)).addClass(T))), !o.showCheckbox) return;
                h.find('input[same="layuiTreeCheck"]')[0].checked && (r.children("." + N).children("." + k).last().find('input[same="layuiTreeCheck"]')[0].checked = !0), s.renderForm("checkbox")
            } else "update" == e ? (l = h.children("." + w).html(), h.children("." + w).html(""), h.append('<input type="text" class="layui-tree-editInput">'), h.children(".layui-tree-editInput").val(f.unescape(l)).focus(), i = function (e) {
                var i = e.val().trim() || o.text.defaultNodeName;
                e.remove(), h.children("." + w).html(i), t.data[u.title] = i, o.operate && o.operate(t)
            }, h.children(".layui-tree-editInput").blur(function () {
                i(p(this))
            }), h.children(".layui-tree-editInput").on("keydown", function (e) {
                13 === e.keyCode && (e.preventDefault(), i(p(this)))
            })) : y.confirm('\u786e\u8ba4\u5220\u9664\u8be5\u8282\u70b9 "<span style="color: #999;">' + (d[u.title] || "") + '</span>" \u5417\uff1f', function (e) {
                var l, a, i;
                o.operate && o.operate(t), t.status = "remove", y.close(e), r.prev("." + k)[0] || r.next("." + k)[0] || r.parent("." + N)[0] ? (r.siblings("." + k).children("." + b)[0] ? (o.showCheckbox && (l = function (e) {
                    var i, a, n, t;
                    e.parents("." + k)[0] && (i = e.siblings("." + k).children("." + b), a = (e = e.parent("." + N).prev()).find('input[same="layuiTreeCheck"]')[0], n = 1, (t = 0) == a.checked) && (i.each(function (e, i) {
                        i = p(i).find('input[same="layuiTreeCheck"]')[0];
                        0 != i.checked || i.disabled || (n = 0), i.disabled || (t = 1)
                    }), 1 == n) && 1 == t && (a.checked = !0, s.renderForm("checkbox"), l(e.parent("." + k)))
                })(r), o.showLine && (e = r.siblings("." + k), a = 1, i = r.parent("." + N), layui.each(e, function (e, i) {
                    p(i).children("." + N)[0] || (a = 0)
                }), 1 == a ? (n[0] || (i.removeClass(S), e.children("." + N).addClass(L), e.children("." + N).children("." + k).removeClass(T)), (r.next()[0] ? i.children("." + k).last() : r.prev()).children("." + N).children("." + k).last().addClass(T), r.next()[0] || r.parents("." + k)[1] || r.parents("." + k).eq(0).next()[0] || r.prev("." + k).addClass(T)) : !r.next()[0] && r.hasClass(T) && r.prev().addClass(T))) : (e = r.parent("." + N).prev(), o.showLine ? (e.find("." + C).removeClass("layui-tree-icon"), e.find("." + C).children(".layui-icon").removeClass(x).addClass("layui-icon-file"), (i = e.parents("." + N).eq(0)).addClass(S), i.children("." + k).each(function () {
                    p(this).children("." + N).children("." + k).last().addClass(T)
                })) : e.find(".layui-tree-iconArrow").addClass(m), r.parents("." + k).eq(0).removeClass(F), r.parent("." + N).remove()), r.remove()) : (r.remove(), s.elem.append(s.elemNone))
            })
        })
    }, l.prototype.events = function () {
        var i = this, t = i.config;
        i.elem.find(".layui-tree-checkedFirst");
        i.setChecked(i.checkids), i.elem.find(".layui-tree-search").on("keyup", function () {
            var e = p(this), a = e.val(), e = e.nextAll(), n = [];
            e.find("." + w).each(function () {
                var i, e = p(this).parents("." + b);
                -1 != p(this).html().indexOf(a) && (n.push(p(this).parent()), (i = function (e) {
                    e.addClass("layui-tree-searchShow"), e.parent("." + N)[0] && i(e.parent("." + N).parent("." + k))
                })(e.parent("." + k)))
            }), e.find("." + b).each(function () {
                var e = p(this).parent("." + k);
                e.hasClass("layui-tree-searchShow") || e.addClass(m)
            }), 0 == e.find(".layui-tree-searchShow").length && i.elem.append(i.elemNone), t.onsearch && t.onsearch({elem: n})
        }), i.elem.find(".layui-tree-search").on("keydown", function () {
            p(this).nextAll().find("." + b).each(function () {
                p(this).parent("." + k).removeClass("layui-tree-searchShow " + m)
            }), p(".layui-tree-emptyText")[0] && p(".layui-tree-emptyText").remove()
        })
    }, l.prototype.getChecked = function () {
        var t = this, e = t.config, l = e.customName, i = [], a = [],
            c = (t.elem.find(".layui-form-checked").each(function () {
                i.push(p(this).prev()[0].value)
            }), function (e, n) {
                layui.each(e, function (e, a) {
                    layui.each(i, function (e, i) {
                        if (a[l.id] == i) return t.updateFieldValue(a, "checked", !0), delete (i = p.extend({}, a))[l.children], n.push(i), a[l.children] && (i[l.children] = [], c(a[l.children], i[l.children])), !0
                    })
                })
            });
        return c(p.extend({}, e.data), a), a
    }, l.prototype.setChecked = function (l) {
        this.config;
        this.elem.find("." + k).each(function (e, i) {
            var a = p(this).data("id"), n = p(i).children("." + b).find('input[same="layuiTreeCheck"]'), t = n.next();
            if ("number" == typeof l) {
                if (a.toString() == l.toString()) return n[0].checked || t.click(), !1
            } else "object" == typeof l && layui.each(l, function (e, i) {
                if (i.toString() == a.toString() && !n[0].checked) return t.click(), !0
            })
        })
    }, n.that = {}, n.config = {}, t.reload = function (e, i) {
        e = n.that[e];
        return e.reload(i), n.call(e)
    }, t.getChecked = function (e) {
        return n.that[e].getChecked()
    }, t.setChecked = function (e, i) {
        return n.that[e].setChecked(i)
    }, t.render = function (e) {
        e = new l(e);
        return n.call(e)
    }, e(a, t)
});
layui.define(["laytpl", "form"], function (e) {
    "use strict";
    var s = layui.$, n = layui.laytpl, t = layui.form, a = "transfer", i = {
            config: {}, index: layui[a] ? layui[a].index + 1e4 : 0, set: function (e) {
                var t = this;
                return t.config = s.extend({}, t.config, e), t
            }, on: function (e, t) {
                return layui.onevent.call(this, a, e, t)
            }
        }, l = function () {
            var t = this, e = t.config, a = e.id || t.index;
            return l.that[a] = t, {
                config: l.config[a] = e, reload: function (e) {
                    t.reload.call(t, e)
                }, getData: function () {
                    return t.getData.call(t)
                }
            }
        }, d = "layui-hide", h = "layui-btn-disabled", r = "layui-none", c = "layui-transfer-box",
        u = "layui-transfer-header", o = "layui-transfer-search", f = "layui-transfer-data", y = function (e) {
            return ['<div class="layui-transfer-box" data-index="' + (e = e || {}).index + '">', '<div class="layui-transfer-header">', '<input type="checkbox" name="' + e.checkAllName + '" lay-filter="layTransferCheckbox" lay-type="all" lay-skin="primary" title="{{= d.data.title[' + e.index + "] || 'list" + (e.index + 1) + "' }}\">", "</div>", "{{# if(d.data.showSearch){ }}", '<div class="layui-transfer-search">', '<i class="layui-icon layui-icon-search"></i>', '<input type="text" class="layui-input" placeholder="\u5173\u952e\u8bcd\u641c\u7d22">', "</div>", "{{# } }}", '<ul class="layui-transfer-data"></ul>', "</div>"].join("")
        }, p = ['<div class="layui-transfer layui-form layui-border-box" lay-filter="LAY-transfer-{{= d.index }}">', y({
            index: 0,
            checkAllName: "layTransferLeftCheckAll"
        }), '<div class="layui-transfer-active">', '<button type="button" class="layui-btn layui-btn-sm layui-btn-primary layui-btn-disabled" data-index="0">', '<i class="layui-icon layui-icon-next"></i>', "</button>", '<button type="button" class="layui-btn layui-btn-sm layui-btn-primary layui-btn-disabled" data-index="1">', '<i class="layui-icon layui-icon-prev"></i>', "</button>", "</div>", y({
            index: 1,
            checkAllName: "layTransferRightCheckAll"
        }), "</div>"].join(""), v = function (e) {
            var t = this;
            t.index = ++i.index, t.config = s.extend({}, t.config, i.config, e), t.render()
        };
    v.prototype.config = {
        title: ["\u5217\u8868\u4e00", "\u5217\u8868\u4e8c"],
        width: 200,
        height: 360,
        data: [],
        value: [],
        showSearch: !1,
        id: "",
        text: {none: "\u65e0\u6570\u636e", searchNone: "\u65e0\u5339\u914d\u6570\u636e"}
    }, v.prototype.reload = function (e) {
        var t = this;
        t.config = s.extend({}, t.config, e), t.render()
    }, v.prototype.render = function () {
        var e = this, t = e.config, a = e.elem = s(n(p, {open: "{{", close: "}}"}).render({data: t, index: e.index})),
            i = t.elem = s(t.elem);
        i[0] && (t.data = t.data || [], t.value = t.value || [], t.id = "id" in t ? t.id : elem.attr("id") || e.index, e.key = t.id, i.html(e.elem), e.layBox = e.elem.find("." + c), e.layHeader = e.elem.find("." + u), e.laySearch = e.elem.find("." + o), e.layData = a.find("." + f), e.layBtn = a.find(".layui-transfer-active .layui-btn"), e.layBox.css({
            width: t.width,
            height: t.height
        }), e.layData.css({height: (i = t.height - e.layHeader.outerHeight(), t.showSearch && (i -= e.laySearch.outerHeight()), i - 2)}), e.renderData(), e.events())
    }, v.prototype.renderData = function () {
        var e = this, t = e.config,
            l = [{checkName: "layTransferLeftCheck", views: []}, {checkName: "layTransferRightCheck", views: []}];
        e.parseData(function (a) {
            var i = a.selected ? 1 : 0,
                n = ["<li>", '<input type="checkbox" name="' + l[i].checkName + '" lay-skin="primary" lay-filter="layTransferCheckbox" title="' + a.title + '"' + (a.disabled ? " disabled" : "") + (a.checked ? " checked" : "") + ' value="' + a.value + '">', "</li>"].join("");
            i ? layui.each(t.value, function (e, t) {
                t == a.value && a.selected && (l[i].views[e] = n)
            }) : l[i].views.push(n), delete a.selected
        }), e.layData.eq(0).html(l[0].views.join("")), e.layData.eq(1).html(l[1].views.join("")), e.renderCheckBtn()
    }, v.prototype.renderForm = function (e) {
        t.render(e, "LAY-transfer-" + this.index)
    }, v.prototype.renderCheckBtn = function (r) {
        var c = this, o = c.config;
        r = r || {}, c.layBox.each(function (e) {
            var t = s(this), a = t.find("." + f), t = t.find("." + u).find('input[type="checkbox"]'),
                i = a.find('input[type="checkbox"]'), n = 0, l = !1;
            i.each(function () {
                var e = s(this).data("hide");
                (this.checked || this.disabled || e) && n++, this.checked && !e && (l = !0)
            }), t.prop("checked", l && n === i.length), c.layBtn.eq(e)[l ? "removeClass" : "addClass"](h), r.stopNone || (i = a.children("li:not(." + d + ")").length, c.noneView(a, i ? "" : o.text.none))
        }), c.renderForm("checkbox")
    }, v.prototype.noneView = function (e, t) {
        var a = s('<p class="layui-none">' + (t || "") + "</p>");
        e.find("." + r)[0] && e.find("." + r).remove(), t.replace(/\s/g, "") && e.append(a)
    }, v.prototype.setValue = function () {
        var e = this.config, t = [];
        return this.layBox.eq(1).find("." + f + ' input[type="checkbox"]').each(function () {
            s(this).data("hide") || t.push(this.value)
        }), e.value = t, this
    }, v.prototype.parseData = function (t) {
        var i = this.config, n = [];
        return layui.each(i.data, function (e, a) {
            a = ("function" == typeof i.parseData ? i.parseData(a) : a) || a, n.push(a = s.extend({}, a)), layui.each(i.value, function (e, t) {
                t == a.value && (a.selected = !0)
            }), t && t(a)
        }), i.data = n, this
    }, v.prototype.getData = function (e) {
        var t = this.config, i = [];
        return this.setValue(), layui.each(e || t.value, function (e, a) {
            layui.each(t.data, function (e, t) {
                delete t.selected, a == t.value && i.push(t)
            })
        }), i
    }, v.prototype.transfer = function (e, t) {
        var a, i = this, n = i.config, l = i.layBox.eq(e), r = [],
            t = (t ? ((a = (t = t).find('input[type="checkbox"]'))[0].checked = !1, l.siblings("." + c).find("." + f).append(t.clone()), t.remove(), r.push(a[0].value), i.setValue()) : l.each(function (e) {
                s(this).find("." + f).children("li").each(function () {
                    var e = s(this), t = e.find('input[type="checkbox"]'), a = t.data("hide");
                    t[0].checked && !a && (t[0].checked = !1, l.siblings("." + c).find("." + f).append(e.clone()), e.remove(), r.push(t[0].value)), i.setValue()
                })
            }), i.renderCheckBtn(), l.siblings("." + c).find("." + o + " input"));
        "" !== t.val() && t.trigger("keyup"), n.onchange && n.onchange(i.getData(r), e)
    }, v.prototype.events = function () {
        var n = this, l = n.config;
        n.elem.on("click", 'input[lay-filter="layTransferCheckbox"]+', function () {
            var e = s(this).prev(), t = e[0].checked, a = e.parents("." + c).eq(0).find("." + f);
            e[0].disabled || ("all" === e.attr("lay-type") && a.find('input[type="checkbox"]').each(function () {
                this.disabled || (this.checked = t)
            }), setTimeout(function () {
                n.renderCheckBtn({stopNone: !0})
            }, 0))
        }), n.elem.on("dblclick", "." + f + ">li", function (e) {
            var t = s(this), a = t.children('input[type="checkbox"]'), i = t.parent().parent();
            a[0].disabled || n.transfer(i.data("index"), t)
        }), n.layBtn.on("click", function () {
            var e = s(this), t = e.data("index");
            e.hasClass(h) || n.transfer(t)
        }), n.laySearch.find("input").on("keyup", function () {
            var i = this.value, e = s(this).parents("." + o).eq(0).siblings("." + f), t = e.children("li"),
                t = (t.each(function () {
                    var e = s(this), t = e.find('input[type="checkbox"]'), a = t[0].title,
                        a = ("cs" !== l.showSearch && (a = a.toLowerCase(), i = i.toLowerCase()), -1 !== a.indexOf(i));
                    e[a ? "removeClass" : "addClass"](d), t.data("hide", !a)
                }), n.renderCheckBtn(), t.length === e.children("li." + d).length);
            n.noneView(e, t ? l.text.searchNone : "")
        })
    }, l.that = {}, l.config = {}, i.reload = function (e, t) {
        e = l.that[e];
        return e.reload(t), l.call(e)
    }, i.getData = function (e) {
        return l.that[e].getData()
    }, i.render = function (e) {
        e = new v(e);
        return l.call(e)
    }, e(a, i)
});
layui.define(["jquery", "lay"], function (e) {
    "use strict";
    var a = layui.$, l = layui.lay, t = (layui.hint(), layui.device(), {
            config: {}, set: function (e) {
                var i = this;
                return i.config = a.extend({}, i.config, e), i
            }, on: function (e, i) {
                return layui.onevent.call(this, d, e, i)
            }
        }), d = "carousel", r = "layui-this", s = "layui-carousel-left", u = "layui-carousel-right",
        c = "layui-carousel-prev", h = "layui-carousel-next", o = "layui-carousel-arrow", m = "layui-carousel-ind",
        i = function (e) {
            var i = this;
            i.config = a.extend({}, i.config, t.config, e), i.render()
        };
    i.prototype.config = {
        width: "600px",
        height: "280px",
        full: !1,
        arrow: "hover",
        indicator: "inside",
        autoplay: !0,
        interval: 3e3,
        anim: "",
        trigger: "click",
        index: 0
    }, i.prototype.render = function () {
        var e = this, i = e.config, n = a(i.elem);
        if (1 < n.length) return layui.each(n, function () {
            t.render(a.extend({}, i, {elem: this}))
        }), e;
        a.extend(i, l.options(n[0])), i.elem = a(i.elem), i.elem[0] && (e.elemItem = i.elem.find(">*[carousel-item]>*"), i.index < 0 && (i.index = 0), i.index >= e.elemItem.length && (i.index = e.elemItem.length - 1), i.interval < 800 && (i.interval = 800), i.full ? i.elem.css({
            position: "fixed",
            width: "100%",
            height: "100%",
            zIndex: 9999
        }) : i.elem.css({
            width: i.width,
            height: i.height
        }), i.elem.attr("lay-anim", i.anim), e.elemItem.eq(i.index).addClass(r), e.elemItem.length <= 1 || (e.indicator(), e.arrow(), e.autoplay(), e.events()))
    }, i.prototype.reload = function (e) {
        var i = this;
        clearInterval(i.timer), i.config = a.extend({}, i.config, e), i.render()
    }, i.prototype.prevIndex = function () {
        var e = this.config.index - 1;
        return e = e < 0 ? this.elemItem.length - 1 : e
    }, i.prototype.nextIndex = function () {
        var e = this.config.index + 1;
        return e = e >= this.elemItem.length ? 0 : e
    }, i.prototype.addIndex = function (e) {
        var i = this.config;
        i.index = i.index + (e = e || 1), i.index >= this.elemItem.length && (i.index = 0)
    }, i.prototype.subIndex = function (e) {
        var i = this.config;
        i.index = i.index - (e = e || 1), i.index < 0 && (i.index = this.elemItem.length - 1)
    }, i.prototype.autoplay = function () {
        var e = this, i = e.config;
        i.autoplay && (clearInterval(e.timer), e.timer = setInterval(function () {
            e.slide()
        }, i.interval))
    }, i.prototype.arrow = function () {
        var i = this, e = i.config,
            n = a(['<button class="layui-icon ' + o + '" lay-type="sub">' + ("updown" === e.anim ? "&#xe619;" : "&#xe603;") + "</button>", '<button class="layui-icon ' + o + '" lay-type="add">' + ("updown" === e.anim ? "&#xe61a;" : "&#xe602;") + "</button>"].join(""));
        e.elem.attr("lay-arrow", e.arrow), e.elem.find("." + o)[0] && e.elem.find("." + o).remove(), e.elem.append(n), n.on("click", function () {
            var e = a(this).attr("lay-type");
            i.slide(e)
        })
    }, i.prototype["goto"] = function (e) {
        var i = this, n = i.config;
        e > n.index ? i.slide("add", e - n.index) : e < n.index && i.slide("sub", n.index - e)
    }, i.prototype.indicator = function () {
        var i, e = this, n = e.config,
            t = e.elemInd = a(['<div class="' + m + '"><ul>', (i = [], layui.each(e.elemItem, function (e) {
                i.push("<li" + (n.index === e ? ' class="layui-this"' : "") + "></li>")
            }), i.join("")), "</ul></div>"].join(""));
        n.elem.attr("lay-indicator", n.indicator), n.elem.find("." + m)[0] && n.elem.find("." + m).remove(), n.elem.append(t), "updown" === n.anim && t.css("margin-top", -t.height() / 2), t.find("li").on("hover" === n.trigger ? "mouseover" : n.trigger, function () {
            e["goto"](a(this).index())
        })
    }, i.prototype.slide = function (e, i) {
        var n = this, t = n.elemItem, a = n.config, o = a.index, l = a.elem.attr("lay-filter");
        n.haveSlide || ("sub" === e ? (n.subIndex(i), t.eq(a.index).addClass(c), setTimeout(function () {
            t.eq(o).addClass(u), t.eq(a.index).addClass(u)
        }, 50)) : (n.addIndex(i), t.eq(a.index).addClass(h), setTimeout(function () {
            t.eq(o).addClass(s), t.eq(a.index).addClass(s)
        }, 50)), setTimeout(function () {
            t.removeClass(r + " " + c + " " + h + " " + s + " " + u), t.eq(a.index).addClass(r), n.haveSlide = !1
        }, 350), n.elemInd.find("li").eq(a.index).addClass(r).siblings().removeClass(r), n.haveSlide = !0, e = {
            index: a.index,
            prevIndex: o,
            item: t.eq(a.index)
        }, "function" == typeof a.change && a.change(e), layui.event.call(this, d, "change(" + l + ")", e))
    }, i.prototype.events = function () {
        var t, a, o = this, e = o.config;
        e.elem.data("haveEvents") || (e.elem.on("mouseenter touchstart", function () {
            "always" !== o.config.autoplay && clearInterval(o.timer)
        }).on("mouseleave touchend", function () {
            "always" !== o.config.autoplay && o.autoplay()
        }), t = e.elem, a = "updown" === e.anim, l.touchSwipe(t, {
            onTouchEnd: function (e, i) {
                var n = Date.now() - i.timeStart, i = a ? i.distanceY : i.distanceX;
                (.25 < Math.abs(i / n) || Math.abs(i) > t[a ? "height" : "width"]() / 3) && o.slide(0 < i ? "" : "sub")
            }
        }), e.elem.data("haveEvents", !0))
    }, t.render = function (e) {
        return new i(e)
    }, e(d, t)
});
layui.define(["jquery", "lay"], function (e) {
    "use strict";
    var u = layui.jquery, r = layui.lay, c = {
            config: {}, index: layui.rate ? layui.rate.index + 1e4 : 0, set: function (e) {
                var a = this;
                return a.config = u.extend({}, a.config, e), a
            }, on: function (e, a) {
                return layui.onevent.call(this, l, e, a)
            }
        }, l = "rate", h = "layui-icon-rate", f = "layui-icon-rate-solid", o = "layui-icon-rate-half",
        s = "layui-icon-rate-solid layui-icon-rate-half", v = "layui-icon-rate layui-icon-rate-half", a = function (e) {
            var a = this;
            a.index = ++c.index, a.config = u.extend({}, a.config, c.config, e), a.render()
        };
    a.prototype.config = {
        length: 5,
        text: !1,
        readonly: !1,
        half: !1,
        value: 0,
        theme: ""
    }, a.prototype.render = function () {
        var e = this, a = e.config, l = u(a.elem);
        if (1 < l.length) return layui.each(l, function () {
            c.render(u.extend({}, a, {elem: this}))
        }), e;
        u.extend(a, r.options(l[0]));
        for (var t = a.theme ? 'style="color: ' + a.theme + ';"' : "", i = (a.elem = u(a.elem), a.value > a.length && (a.value = a.length), parseInt(a.value) === a.value || a.half || (a.value = Math.ceil(a.value) - a.value < .5 ? Math.ceil(a.value) : Math.floor(a.value)), '<ul class="layui-rate" ' + (a.readonly ? "readonly" : "") + ">"), n = 1; n <= a.length; n++) {
            var o = '<li class="layui-inline"><i class="layui-icon ' + (n > Math.floor(a.value) ? h : f) + '" ' + t + "></i></li>";
            a.half && parseInt(a.value) !== a.value && n == Math.ceil(a.value) ? i = i + '<li><i class="layui-icon layui-icon-rate-half" ' + t + "></i></li>" : i += o
        }
        i += "</ul>" + (a.text ? '<span class="layui-inline">' + a.value + "\u661f" : "") + "</span>";
        var l = a.elem, s = l.next(".layui-rate");
        s[0] && s.remove(), e.elemTemp = u(i), a.span = e.elemTemp.next("span"), a.setText && a.setText(a.value), l.html(e.elemTemp), l.addClass("layui-inline"), a.readonly || e.action()
    }, a.prototype.setvalue = function (e) {
        this.config.value = e, this.render()
    }, a.prototype.action = function () {
        var n = this.config, t = this.elemTemp, i = t.find("i").width(), l = t.children("li");
        l.each(function (e) {
            var a = e + 1, l = u(this);
            l.on("click", function (e) {
                n.value = a, n.half && e.pageX - u(this).offset().left <= i / 2 && (n.value = n.value - .5), n.text && t.next("span").text(n.value + "\u661f"), n.choose && n.choose(n.value), n.setText && n.setText(n.value)
            }), l.on("mousemove", function (e) {
                t.find("i").each(function () {
                    u(this).addClass(h).removeClass(s)
                }), t.find("i:lt(" + a + ")").each(function () {
                    u(this).addClass(f).removeClass(v)
                }), n.half && e.pageX - u(this).offset().left <= i / 2 && l.children("i").addClass(o).removeClass(f)
            }), l.on("mouseleave", function () {
                t.find("i").each(function () {
                    u(this).addClass(h).removeClass(s)
                }), t.find("i:lt(" + Math.floor(n.value) + ")").each(function () {
                    u(this).addClass(f).removeClass(v)
                }), n.half && parseInt(n.value) !== n.value && t.children("li:eq(" + Math.floor(n.value) + ")").children("i").addClass(o).removeClass("layui-icon-rate-solid layui-icon-rate")
            })
        }), r.touchSwipe(t, {
            onTouchMove: function (e, a) {
                var i;
                Date.now() - a.timeStart <= 200 || (a = e.touches[0].pageX, e = t.width() / n.length, a = (a - t.offset().left) / e, (i = (i = (e = a % 1) <= .5 && n.half ? .5 + (a - e) : Math.ceil(a)) > n.length ? n.length : i) < 0 && (i = 0), l.each(function (e) {
                    var a = u(this).children("i"), l = Math.ceil(i) - e == 1, t = Math.ceil(i) > e, e = i - e == .5;
                    t ? (a.addClass(f).removeClass(v), n.half && e && a.addClass(o).removeClass(f)) : a.addClass(h).removeClass(s), a.toggleClass("layui-rate-hover", l)
                }), n.value = i, n.setText && n.setText(n.value))
            }, onTouchEnd: function (e, a) {
                Date.now() - a.timeStart <= 200 || (t.find("i").removeClass("layui-rate-hover"), n.choose && n.choose(n.value), n.setText && n.setText(n.value))
            }
        })
    }, a.prototype.events = function () {
    }, c.render = function (e) {
        e = new a(e);
        return function () {
            var a = this;
            return {
                setvalue: function (e) {
                    a.setvalue.call(a, e)
                }, config: a.config
            }
        }.call(e)
    }, e(l, c)
});
layui.define("jquery", function (l) {
    "use strict";
    var g = layui.$, e = function (l) {
    };
    e.prototype.load = function (l) {
        var t, i, o, n, e, r, a, c, m, s, u, f, y, d = this, p = 0, h = g((l = l || {}).elem);
        if (h[0]) return e = g(l.scrollElem || document), r = l.mb || 50, a = !("isAuto" in l) || l.isAuto, c = l.end || "\u6ca1\u6709\u66f4\u591a\u4e86", m = l.scrollElem && l.scrollElem !== document, u = g('<div class="layui-flow-more"><a href="javascript:;">' + (s = "<cite>\u52a0\u8f7d\u66f4\u591a</cite>") + "</a></div>"), h.find(".layui-flow-more")[0] || h.append(u), f = function (l, e) {
            l = g(l), u.before(l), (e = 0 == e || null) ? u.html(c) : u.find("a").html(s), i = e, t = null, o && o()
        }, (y = function () {
            t = !0, u.find("a").html('<i class="layui-anim layui-anim-rotate layui-anim-loop layui-icon ">&#xe63e;</i>'), "function" == typeof l.done && l.done(++p, f)
        })(), u.find("a").on("click", function () {
            g(this);
            i || t || y()
        }), l.isLazyimg && (o = d.lazyimg({
            elem: l.elem + " img",
            scrollElem: l.scrollElem
        })), a && e.on("scroll", function () {
            var e = g(this), o = e.scrollTop();
            n && clearTimeout(n), !i && h.width() && (n = setTimeout(function () {
                var l = (m ? e : g(window)).height();
                (m ? e.prop("scrollHeight") : document.documentElement.scrollHeight) - o - l <= r && (t || y())
            }, 100))
        }), d
    }, e.prototype.lazyimg = function (l) {
        var e, c = this, m = 0, s = g((l = l || {}).scrollElem || document), u = l.elem || "img",
            f = l.scrollElem && l.scrollElem !== document, y = function (e, l) {
                var o, t = s.scrollTop(), l = t + l, i = f ? e.offset().top - s.offset().top + t : e.offset().top;
                t <= i && i <= l && e.attr("lay-src") && (o = e.attr("lay-src"), layui.img(o, function () {
                    var l = c.lazyimg.elem.eq(m);
                    e.attr("src", o).removeAttr("lay-src"), l[0] && n(l), m++
                }, function () {
                    c.lazyimg.elem.eq(m);
                    e.removeAttr("lay-src")
                }))
            }, n = function (l, e) {
                var o = (f ? e || s : g(window)).height(), t = s.scrollTop(), i = t + o;
                if (c.lazyimg.elem = g(u), l) y(l, o); else for (var n = 0; n < c.lazyimg.elem.length; n++) {
                    var r = c.lazyimg.elem.eq(n), a = f ? r.offset().top - s.offset().top + t : r.offset().top;
                    if (y(r, o), m = n, i < a) break
                }
            };
        return n(), s.on("scroll", function () {
            var l = g(this);
            e && clearTimeout(e), e = setTimeout(function () {
                n(null, l)
            }, 50)
        }), n
    }, l("flow", new e)
});
layui.define(["lay", "util", "element", "form"], function (e) {
    "use strict";
    var x = layui.$, D = layui.util, S = layui.element, I = layui.form, N = layui.layer, A = (layui.hint(), {
        ELEM_VIEW: "layui-code-view",
        ELEM_TAB: "layui-tab",
        ELEM_HEADER: "layui-code-header",
        ELEM_FULL: "layui-code-full",
        ELEM_PREVIEW: "layui-code-preview",
        ELEM_ITEM: "layui-code-item",
        ELEM_SHOW: "layui-show",
        ELEM_LINE: "layui-code-line",
        ELEM_LINE_NUM: "layui-code-line-number",
        ELEM_LN_MODE: "layui-code-ln-mode",
        CDDE_DATA_CLASS: "LayuiCodeDataClass",
        LINE_RAW_WIDTH: 45
    }), T = {
        elem: "",
        about: "",
        ln: !0,
        header: !1,
        encode: !0,
        copy: !0,
        text: {code: D.escape("</>"), preview: "Preview"},
        wordWrap: !0,
        lang: "text",
        highlighter: !1,
        langMarker: !1
    }, W = layui.code ? layui.code.index + 1e4 : 0, R = function (e) {
        return String(e).replace(/\s+$/, "").replace(/^\n|\n$/, "")
    };
    e("code", function (l, e) {
        var o, i, t, a, n, d, c, s, r, u, y, p, E, f, h, v, m, L, _, M, C, g = {
            config: l = x.extend(!0, {}, T, l), reload: function (e) {
                layui.code(this.updateOptions(e))
            }, updateOptions: function (e) {
                return delete (e = e || {}).elem, x.extend(!0, l, e)
            }, reloadCode: function (e) {
                layui.code(this.updateOptions(e), "reloadCode")
            }
        }, w = x(l.elem);
        return 1 < w.length ? layui.each(l.obverse ? w : w.get().reverse(), function () {
            layui.code(x.extend({}, l, {elem: this}), e)
        }) : (o = l.elem = x(l.elem))[0] && (x.extend(!0, l, lay.options(o[0]), (i = {}, layui.each(["title", "height", "encode", "skin", "about"], function (e, t) {
            var a = o.attr("lay-" + t);
            "string" == typeof a && (i[t] = a)
        }), i)), l.encode = (l.encode || l.preview) && !l.codeRender, l.code = l.code || (t = [], o.children("textarea").each(function () {
            t.push(R(this.value))
        }), 0 === t.length && t.push(R(o.html())), t.join("")), w = function (e) {
            "function" == typeof l.codeRender && (e = l.codeRender(String(e), l));
            var t = String(e).split(/\r?\n/g);
            return {
                lines: t, html: e = x.map(t, function (e, t) {
                    return ['<div class="' + A.ELEM_LINE + '">', l.ln ? ['<div class="' + A.ELEM_LINE_NUM + '">', D.digit(t + 1) + ".", "</div>"].join("") : "", '<div class="layui-code-line-content">', e || " ", "</div>", "</div>"].join("")
                })
            }
        }, a = l.code, n = function (e) {
            return "function" == typeof l.codeParse ? l.codeParse(e, l) : e
        }, "reloadCode" === e ? o.children(".layui-code-wrap").html(w(n(a)).html) : (d = layui.code.index = ++W, o.attr("lay-code-index", d), (M = A.CDDE_DATA_CLASS in o.data()) && o.attr("class", o.data(A.CDDE_DATA_CLASS) || ""), M || o.data(A.CDDE_DATA_CLASS, o.attr("class")), c = {
            copy: {
                className: "file-b",
                title: ["\u590d\u5236\u4ee3\u7801"],
                event: function (e) {
                    var t = D.unescape(n(l.code));
                    lay.clipboard.writeText({
                        text: t, done: function () {
                            N.msg("\u5df2\u590d\u5236", {icon: 1})
                        }, error: function () {
                            N.msg("\u590d\u5236\u5931\u8d25", {icon: 2})
                        }
                    }), "function" == typeof l.onCopy && l.onCopy(t)
                }
            }
        }, function b() {
            var e = o.parent("." + A.ELEM_PREVIEW), t = e.children("." + A.ELEM_TAB),
                a = e.children("." + A.ELEM_ITEM + "-preview");
            return t.remove(), a.remove(), e[0] && o.unwrap(), b
        }(), l.preview && (M = "LAY-CODE-DF-" + d, f = l.layout || ["code", "preview"], s = "iframe" === l.preview, E = x('<div class="' + A.ELEM_PREVIEW + '">'), C = x('<div class="layui-tab layui-tab-brief">'), r = x('<div class="layui-tab-title">'), _ = x('<div class="' + [A.ELEM_ITEM, A.ELEM_ITEM + "-preview", "layui-border"].join(" ") + '">'), u = x('<div class="layui-code-tools"></div>'), l.id && E.attr("id", l.id), E.addClass(l.className), C.attr("lay-filter", M), layui.each(f, function (e, t) {
            var a = x('<li lay-id="' + t + '">');
            0 === e && a.addClass("layui-this"), a.html(l.text[t]), r.append(a)
        }), x.extend(c, {
            full: {
                className: "screen-full",
                title: ["\u6700\u5927\u5316\u663e\u793a", "\u8fd8\u539f\u663e\u793a"],
                event: function (e) {
                    var e = e.elem, t = e.closest("." + A.ELEM_PREVIEW), a = "layui-icon-" + this.className,
                        i = "layui-icon-screen-restore", l = this.title, o = x("html,body"), n = "layui-scrollbar-hide";
                    e.hasClass(a) ? (t.addClass(A.ELEM_FULL), e.removeClass(a).addClass(i), e.attr("title", l[1]), o.addClass(n)) : (t.removeClass(A.ELEM_FULL), e.removeClass(i).addClass(a), e.attr("title", l[0]), o.removeClass(n))
                }
            }, window: {
                className: "release", title: ["\u5728\u65b0\u7a97\u53e3\u9884\u89c8"], event: function (e) {
                    D.openWin({content: n(l.code)})
                }
            }
        }), l.copy && ("array" === layui.type(l.tools) ? -1 === l.tools.indexOf("copy") && l.tools.unshift("copy") : l.tools = ["copy"]), u.on("click", ">i", function () {
            var e = x(this), t = e.data("type"),
                e = {elem: e, type: t, options: l, rawCode: l.code, finalCode: D.unescape(n(l.code))};
            c[t] && "function" == typeof c[t].event && c[t].event(e), "function" == typeof l.toolsEvent && l.toolsEvent(e)
        }), l.addTools && l.tools && (l.tools = [].concat(l.tools, l.addTools)), layui.each(l.tools, function (e, t) {
            var a = "object" == typeof t, i = a ? t : c[t] || {className: t, title: [t]}, l = i.className || i.type,
                o = i.title || [""], a = a ? i.type || l : t;
            a && (c[a] || ((t = {})[a] = i, x.extend(c, t)), u.append('<i class="layui-icon layui-icon-' + l + '" data-type="' + a + '" title="' + o[0] + '"></i>'))
        }), o.addClass(A.ELEM_ITEM).wrap(E), C.append(r), l.tools && C.append(u), o.before(C), s && _.html('<iframe allowtransparency="true" frameborder="0"></iframe>'), y = function (e) {
            var t = e.children("iframe")[0];
            s && t ? t.srcdoc = n(l.code) : e.html(l.code), setTimeout(function () {
                "function" == typeof l.done && l.done({
                    container: e, options: l, render: function () {
                        I.render(e.find(".layui-form")), S.render()
                    }
                })
            }, 3)
        }, "preview" === f[0] ? (_.addClass(A.ELEM_SHOW), o.before(_), y(_)) : o.addClass(A.ELEM_SHOW).after(_), l.previewStyle = [l.style, l.previewStyle].join(""), _.attr("style", l.previewStyle), S.on("tab(" + M + ")", function (e) {
            var t = x(this), a = x(e.elem).closest("." + A.ELEM_PREVIEW).find("." + A.ELEM_ITEM), e = a.eq(e.index);
            a.removeClass(A.ELEM_SHOW), e.addClass(A.ELEM_SHOW), "preview" === t.attr("lay-id") && y(e), L()
        })), p = x('<code class="layui-code-wrap"></code>'), o.addClass((E = ["layui-code-view layui-border-box"], l.wordWrap || E.push("layui-code-nowrap"), E.join(" "))), (C = l.theme || l.skin) && (o.removeClass("layui-code-theme-dark layui-code-theme-light"), o.addClass("layui-code-theme-" + C)), l.highlighter && o.addClass([l.highlighter, "language-" + l.lang, "layui-code-hl"].join(" ")), f = w(l.encode ? D.escape(n(a)) : a), h = f.lines, o.html(p.html(f.html)), l.ln && o.append('<div class="layui-code-ln-side"></div>'), l.height && p.css("max-height", l.height), l.codeStyle = [l.style, l.codeStyle].join(""), l.codeStyle && p.attr("style", function (e, t) {
            return (t || "") + l.codeStyle
        }), v = [{
            selector: ">.layui-code-wrap>.layui-code-line{}", setValue: function (e, t) {
                e.style["padding-left"] = t + "px"
            }
        }, {
            selector: ">.layui-code-wrap>.layui-code-line>.layui-code-line-number{}", setValue: function (e, t) {
                e.style.width = t + "px"
            }
        }, {
            selector: ">.layui-code-ln-side{}", setValue: function (e, t) {
                e.style.width = t + "px"
            }
        }], m = lay.style({
            target: o[0], id: "DF-code-" + d, text: x.map(x.map(v, function (e) {
                return e.selector
            }), function (e, t) {
                return ['.layui-code-view[lay-code-index="' + d + '"]', e].join(" ")
            }).join("")
        }), L = function b() {
            var e, i;
            return l.ln && (e = Math.floor(h.length / 100), i = p.children("." + A.ELEM_LINE).last().children("." + A.ELEM_LINE_NUM).outerWidth(), o.addClass(A.ELEM_LN_MODE), e) && A.LINE_RAW_WIDTH < i && lay.getStyleRules(m, function (e, t) {
                try {
                    v[t].setValue(e, i)
                } catch (a) {
                }
            }), b
        }(), l.header && ((_ = x('<div class="' + A.ELEM_HEADER + '"></div>')).html(l.title || l.text.code), o.prepend(_)), M = x('<div class="layui-code-fixbar"></div>'), l.copy && !l.preview && ((C = x(['<span class="layui-code-copy">', '<i class="layui-icon layui-icon-file-b" title="\u590d\u5236"></i>', "</span>"].join(""))).on("click", function () {
            c.copy.event()
        }), M.append(C)), l.langMarker && M.append('<span class="layui-code-lang-marker">' + l.lang + "</span>"), l.about && M.append(l.about), o.append(M), l.preview || setTimeout(function () {
            "function" == typeof l.done && l.done({})
        }, 3), l.elem.length === 1 + d && "function" == typeof l.allDone && l.allDone())), g
    })
}), layui["layui.all"] || layui.addcss("modules/code.css?v=6", "skincodecss");