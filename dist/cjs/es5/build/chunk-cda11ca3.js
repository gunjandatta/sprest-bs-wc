"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chunk_3f966420_js_1 = require("./chunk-3f966420.js");
var Dropdown = function () { function t() { } return t.prototype.render = function () { if (!this.el.hasAttribute("data-init")) {
    var t = chunk_3f966420_js_1.a(this.el, { className: this.className, dropLeft: this.dropLeft, dropRight: this.dropRight, dropUp: this.dropUp, el: this.el, formFl: this.formFl, id: this.id, isSplit: this.isSplit, label: this.label, menuOnly: this.menuOnly, multi: this.multi, setLabelToValue: this.setLabelToValue, type: this.type, value: this.value });
    this.el.removeAttribute("id"), GD.Components.Dropdown(t), this.el.setAttribute("data-init", "true");
} }, Object.defineProperty(t, "is", { get: function () { return "bs-dropdown"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t, "properties", { get: function () { return { className: { type: String, attr: "class-name" }, dropLeft: { type: Boolean, attr: "drop-left" }, dropRight: { type: Boolean, attr: "drop-right" }, dropUp: { type: Boolean, attr: "drop-up" }, el: { elementRef: !0 }, formFl: { type: Boolean, attr: "form-fl" }, id: { type: String, attr: "id" }, isSplit: { type: Boolean, attr: "is-split" }, label: { type: String, attr: "label" }, menuOnly: { type: Boolean, attr: "menu-only" }, multi: { type: Boolean, attr: "multi" }, setLabelToValue: { type: Boolean, attr: "set-label-to-value" }, type: { type: Number, attr: "type" }, value: { type: String, attr: "value" } }; }, enumerable: !0, configurable: !0 }), t; }();
exports.a = Dropdown;
