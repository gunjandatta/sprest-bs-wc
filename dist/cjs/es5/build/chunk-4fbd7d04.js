"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generateElement = function (e, n, t) { void 0 === t && (t = !1); var l = null; return n && e.parentElement && null == (l = e.parentElement.querySelector("#" + n)) && ((l = document.createElement("div")).id = n, t && (l.style.display = "none"), e.parentElement.appendChild(l)), l; };
exports.a = generateElement;
