import{a as getProps}from"./chunk-3f966420.js";import{a as generateElement}from"./chunk-4fbd7d04.js";var WPTabs=function(){function e(){}return e.prototype.render=function(){if(!this.el.hasAttribute("data-init")){var e=getProps(this.el,{cfgElementId:this.cfgElementId,className:this.className,elementId:this.elementId,type:this.type,wpClassName:this.wpClassName});this.el.removeAttribute("id"),generateElement(this.el,e.elementId),generateElement(this.el,e.cfgElementId,!0),$REST.WebParts.WPTabs(e),this.el.setAttribute("data-init","true")}},Object.defineProperty(e,"is",{get:function(){return"bs-webpart-tabs"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{cfgElementId:{type:String,attr:"cfg-element-id"},className:{type:String,attr:"class-name"},el:{elementRef:!0},elementId:{type:String,attr:"element-id"},type:{type:Number,attr:"type"},wpClassName:{type:String,attr:"wp-class-name"}}},enumerable:!0,configurable:!0}),e}();export{WPTabs as a};