import { getProps } from "../common";
export class CardGroup {
    render() {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        let props = getProps(this.el, {
            className: this.className,
            el: this.el
        });
        GD.Components.CardGroup(props);
        this.el.setAttribute("data-init", "true");
    }
    static get is() { return "bs-card-group"; }
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
