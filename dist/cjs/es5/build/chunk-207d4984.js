"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chunk_3f966420_js_1 = require("./chunk-3f966420.js");
var Navbar = function () { function e() { } return e.prototype.render = function () { if (!this.el.hasAttribute("data-init")) {
    var e = chunk_3f966420_js_1.a(this.el, { brand: this.brand, brandUrl: this.brandUrl, className: this.className, el: this.el, enableSearch: this.enableSearch, id: this.id, type: this.type });
    this.el.removeAttribute("id"), GD.Components.Navbar(e), this.el.setAttribute("data-init", "true");
} }, Object.defineProperty(e, "is", { get: function () { return "bs-navbar"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "properties", { get: function () { return { brand: { type: String, attr: "brand" }, brandUrl: { type: String, attr: "brand-url" }, className: { type: String, attr: "class-name" }, el: { elementRef: !0 }, enableSearch: { type: Boolean, attr: "enable-search" }, id: { type: String, attr: "id" }, type: { type: Number, attr: "type" } }; }, enumerable: !0, configurable: !0 }), e; }();
exports.a = Navbar;
