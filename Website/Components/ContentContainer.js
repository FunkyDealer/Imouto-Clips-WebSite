// Create a class for the element
class ContentContainer extends HTMLElement {
    // Always call super first in constructor
    constructor() {
        super();
    }

    connectedCallback() {

        const title = this.getAttribute("title") || "About";

        this.attachShadow({ mode: "open" });

        this.shadowRoot.innerHTML =
            `
             <link rel="stylesheet" href="style.css">
            <style>
            :host {
             display: inline-flex;
             flex-direction: column;
             align-self: stretch;        
            }
            </style>
        
        <div class="ContentContainer" style="background: #FCEFEE; flex-direction: column; justify-content: flex-start; align-items: center; gap: 10px; display: inline-flex">               
                <div class="ContentTitle" style="align-self: stretch; padding-left: 25px; padding-right: 25px; padding-top: 10px; padding-bottom: 10px; background: var(--Pink-Light-Linear-Grad); justify-content: flex-start; align-items: center; display: inline-flex">
                    <div class="Icon"
                        style="align-self: stretch; flex-direction: column; justify-content: center; align-items: center; gap: 10px; display: inline-flex">

                        <!-- Icon-->
                        <slot name="icon"></slot>

                    </div>
                    <div class="ContentTitleText"
                        style="padding-left: 10px; padding-right: 10px; flex-direction: column; justify-content: center; align-items: flex-start; gap: 10px; display: inline-flex">
                        <div class="About"
                            style="justify-content: center; display: flex; flex-direction: column; color: #FC5C9C;">
                            <h2>${title}</h2>
                        </div>
                    </div>
                </div>

                <div class="Content" style="align-self: stretch; padding-left: 10px; padding-right: 10px; flex-direction: column; justify-content: center; align-items: flex-start; gap: 10px; display: flex">

                <!-- Content -->
                        <slot name="content"></slot>
                </div>
            </div>     
    `
    }
}

customElements.define("content-container", ContentContainer);