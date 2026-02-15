// Create a class for the element
class PageTitle extends HTMLElement {
    // Always call super first in constructor
    constructor() {
        super();
    }

    connectedCallback() {

        const title = this.getAttribute("title") || "About Us";

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
        
      <div class="SectionTitle" style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 10px; display: inline-flex">
                <div class="Titlecontainer"
                    style="align-self: stretch; padding-left: 25px; padding-right: 25px; padding-top: 10px; padding-bottom: 10px; background: var(--Pink-Dark-Linear-Grad); overflow: hidden; justify-content: flex-start; align-items: center; display: inline-flex">
                    <div class="Icon"
                        style="width: 58px; height: 58px; overflow: hidden; flex-direction: column; justify-content: center; align-items: center; gap: 10px; display: inline-flex">
                       
                        <!-- Icon-->
                        <slot name="icon"></slot>
                        
                    </div>
                    <div class="Text" style="padding-left: 10px; padding-right: 10px; overflow: hidden; flex-direction: column; justify-content: center; align-items: flex-start; gap: 10px; display: inline-flex">
                        <div class="AboutUs"
                            style="justify-content: center; display: flex; flex-direction: column; color: #FCCDE2">
                            <h1>${title}</h1></div>
                    </div>
                </div>
            </div>
    `
    }
}

customElements.define("title-container", PageTitle);