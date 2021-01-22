parcelRequire = function (e, r, n, t) {
    var i = "function" == typeof parcelRequire && parcelRequire,
        o = "function" == typeof require && require;

    function u(n, t) {
        if (!r[n]) {
            if (!e[n]) {
                var f = "function" == typeof parcelRequire && parcelRequire;
                if (!t && f) return f(n, !0);
                if (i) return i(n, !0);
                if (o && "string" == typeof n) return o(n);
                var c = new Error("Cannot find module '" + n + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            p.resolve = function (r) {
                return e[n][1][r] || r
            };
            var l = r[n] = new u.Module(n);
            e[n][0].call(l.exports, p, l, l.exports, this)
        }
        return r[n].exports;

        function p(e) {
            return u(p.resolve(e))
        }
    }
    u.isParcelRequire = !0, u.Module = function (e) {
        this.id = e, this.bundle = u, this.exports = {}
    }, u.modules = e, u.cache = r, u.parent = i, u.register = function (r, n) {
        e[r] = [function (e, r) {
            r.exports = n
        }, {}]
    };
    for (var f = 0; f < n.length; f++) u(n[f]);
    if (n.length) {
        var c = u(n[n.length - 1]);
        "object" == typeof exports && "undefined" != typeof module ? module.exports = c : "function" == typeof define && define.amd ? define(function () {
            return c
        }) : t && (this[t] = c)
    }
    return u
}({
    "A+Qy": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var e = function () {
            var e, t, l, n, o, i, a, s, d = 0,
                r = 0,
                p = Date.now(),
                y = p,
                h = p,
                c = 0,
                m = 1e3,
                g = 0,
                f = [
                    [16, 16, 48],
                    [0, 255, 255]
                ],
                u = 0,
                x = 1e3,
                C = 0,
                b = [
                    [16, 48, 16],
                    [0, 255, 0]
                ];
            for ((e = document.createElement("div")).style.cursor = "pointer", e.style.width = "80px", e.style.opacity = "0.9", e.style.zIndex = "10001", e.addEventListener("mousedown", function (e) {
                    e.preventDefault(), 0 == (d = (d + 1) % 2) ? (l.style.display = "block", i.style.display = "none") : (l.style.display = "none", i.style.display = "block")
                }, !1), (l = document.createElement("div")).style.textAlign = "left", l.style.lineHeight = "1.2em", l.style.backgroundColor = "rgb(" + Math.floor(f[0][0] / 2) + "," + Math.floor(f[0][1] / 2) + "," + Math.floor(f[0][2] / 2) + ")", l.style.padding = "0 0 3px 3px", e.appendChild(l), (n = document.createElement("div")).style.fontFamily = "Helvetica, Arial, sans-serif", n.style.fontSize = "9px", n.style.color = "rgb(" + f[1][0] + "," + f[1][1] + "," + f[1][2] + ")", n.style.fontWeight = "bold", n.innerHTML = "FPS", l.appendChild(n), (o = document.createElement("div")).style.position = "relative", o.style.width = "74px", o.style.height = "30px", o.style.backgroundColor = "rgb(" + f[1][0] + "," + f[1][1] + "," + f[1][2] + ")", l.appendChild(o); o.children.length < 74;)(t = document.createElement("span")).style.width = "1px", t.style.height = "30px", t.style.cssFloat = "left", t.style.backgroundColor = "rgb(" + f[0][0] + "," + f[0][1] + "," + f[0][2] + ")", o.appendChild(t);
            for ((i = document.createElement("div")).style.textAlign = "left", i.style.lineHeight = "1.2em", i.style.backgroundColor = "rgb(" + Math.floor(b[0][0] / 2) + "," + Math.floor(b[0][1] / 2) + "," + Math.floor(b[0][2] / 2) + ")", i.style.padding = "0 0 3px 3px", i.style.display = "none", e.appendChild(i), (a = document.createElement("div")).style.fontFamily = "Helvetica, Arial, sans-serif", a.style.fontSize = "9px", a.style.color = "rgb(" + b[1][0] + "," + b[1][1] + "," + b[1][2] + ")", a.style.fontWeight = "bold", a.innerHTML = "MS", i.appendChild(a), (s = document.createElement("div")).style.position = "relative", s.style.width = "74px", s.style.height = "30px", s.style.backgroundColor = "rgb(" + b[1][0] + "," + b[1][1] + "," + b[1][2] + ")", i.appendChild(s); s.children.length < 74;)(t = document.createElement("span")).style.width = "1px", t.style.height = 30 * Math.random() + "px", t.style.cssFloat = "left", t.style.backgroundColor = "rgb(" + b[0][0] + "," + b[0][1] + "," + b[0][2] + ")", s.appendChild(t);
            return {
                domElement: e,
                update: function () {
                    p = Date.now(), u = p - y, x = Math.min(x, u), C = Math.max(C, u), a.textContent = u + " MS (" + x + "-" + C + ")";
                    var e = Math.min(30, 30 - u / 200 * 30);
                    s.appendChild(s.firstChild).style.height = e + "px", y = p, r++, p > h + 1e3 && (c = Math.round(1e3 * r / (p - h)), m = Math.min(m, c), g = Math.max(g, c), n.textContent = c + " FPS (" + m + "-" + g + ")", e = Math.min(30, 30 - c / 100 * 30), o.appendChild(o.firstChild).style.height = e + "px", h = p, r = 0)
                }
            }
        };
        exports.Stats = e;
    }, {}]
}, {}, ["A+Qy"], null)