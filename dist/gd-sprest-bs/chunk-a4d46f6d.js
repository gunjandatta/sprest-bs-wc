import{a as t}from"./chunk-3f966420.js";class e{render(){if(this.el.hasAttribute("data-init"))return;let e=t(this.el,{className:this.className,content:this.content,el:this.el,isFluid:this.isFluid,lead:this.lead,title:this.el.getAttribute("title")});GD.Components.Jumbotron(e),this.el.setAttribute("data-init","true")}static get is(){return"bs-jumbotron"}static get properties(){return{className:{type:String,attr:"class-name"},content:{type:String,attr:"content"},el:{elementRef:!0},isFluid:{type:Boolean,attr:"is-fluid"},lead:{type:String,attr:"lead"}}}}export{e as a};