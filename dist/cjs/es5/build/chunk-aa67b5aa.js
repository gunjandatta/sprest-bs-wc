"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chunk_3f966420_js_1 = require("./chunk-3f966420.js");
var Modal = function () { function t() { } return t.prototype.render = function () { if (!this.el.hasAttribute("data-init")) {
    var t = chunk_3f966420_js_1.a(this.el, { body: this.body, className: this.className, disableFade: this.disableFade, el: this.el, footer: this.footer, hideCloseButton: this.hideCloseButton, id: this.id, isCentered: this.isCentered, isLarge: this.isLarge, isSmall: this.isSmall, title: this.el.getAttribute("title") });
    this.el.removeAttribute("id"), GD.Components.Modal(t), this.el.setAttribute("data-init", "true");
} }, Object.defineProperty(t, "is", { get: function () { return "bs-modal"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t, "properties", { get: function () { return { body: { type: String, attr: "body" }, className: { type: String, attr: "class-name" }, disableFade: { type: Boolean, attr: "disable-fade" }, el: { elementRef: !0 }, footer: { type: String, attr: "footer" }, hideCloseButton: { type: Boolean, attr: "hide-close-button" }, id: { type: String, attr: "id" }, isCentered: { type: Boolean, attr: "is-centered" }, isLarge: { type: Boolean, attr: "is-large" }, isSmall: { type: Boolean, attr: "is-small" } }; }, enumerable: !0, configurable: !0 }), t; }();
exports.a = Modal;
