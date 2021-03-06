import { getProps } from "../common";
export class Table {
    render() {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        let props = getProps(this.el, {
            className: this.className,
            el: this.el
        });
        GD.Components.Table(props);
        this.el.setAttribute("data-init", "true");
    }
    static get is() { return "bs-table"; }
    static get properties() { return {
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "el": {
            "elementRef": true
        }
    }; }
}
