"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chunk_3f966420_js_1 = require("./chunk-3f966420.js");
var Alert = function () { function e() { } return e.prototype.render = function () { if (!this.el.hasAttribute("data-init")) {
    var e = chunk_3f966420_js_1.a(this.el, { className: this.className, content: this.content, el: this.el, header: this.header, isDismissible: this.isDismissible, type: this.type });
    GD.Components.Alert(e), this.el.setAttribute("data-init", "true");
} }, Object.defineProperty(e, "is", { get: function () { return "bs-alert"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "properties", { get: function () { return { className: { type: String, attr: "class-name" }, content: { type: String, attr: "content" }, el: { elementRef: !0 }, header: { type: String, attr: "header" }, isDismissible: { type: Boolean, attr: "is-dismissible" }, type: { type: Number, attr: "type" } }; }, enumerable: !0, configurable: !0 }), e; }();
exports.a = Alert;
