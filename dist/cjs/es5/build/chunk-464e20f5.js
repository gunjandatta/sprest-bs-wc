"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chunk_3f966420_js_1 = require("./chunk-3f966420.js");
var Accordion = function () { function e() { } return e.prototype.render = function () { if (!this.el.hasAttribute("data-init")) {
    var e = chunk_3f966420_js_1.a(this.el, { className: this.className, el: this.el, id: this.id });
    this.el.removeAttribute("id"), GD.Components.Accordion(e), this.el.setAttribute("data-init", "true");
} }, Object.defineProperty(e, "is", { get: function () { return "bs-accordion"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "properties", { get: function () { return { className: { type: String, attr: "class-name" }, el: { elementRef: !0 }, id: { type: String, attr: "id" } }; }, enumerable: !0, configurable: !0 }), e; }();
exports.a = Accordion;
