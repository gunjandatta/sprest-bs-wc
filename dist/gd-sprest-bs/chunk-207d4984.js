import{a as t}from"./chunk-3f966420.js";class e{render(){if(this.el.hasAttribute("data-init"))return;let e=t(this.el,{brand:this.brand,brandUrl:this.brandUrl,className:this.className,el:this.el,enableSearch:this.enableSearch,id:this.id,type:this.type});this.el.removeAttribute("id"),GD.Components.Navbar(e),this.el.setAttribute("data-init","true")}static get is(){return"bs-navbar"}static get properties(){return{brand:{type:String,attr:"brand"},brandUrl:{type:String,attr:"brand-url"},className:{type:String,attr:"class-name"},el:{elementRef:!0},enableSearch:{type:Boolean,attr:"enable-search"},id:{type:String,attr:"id"},type:{type:Number,attr:"type"}}}}export{e as a};