// Create a class for the element
class StaffCard extends HTMLElement {
    // Always call super first in constructor
    constructor() {
        super();
    }

    connectedCallback() {

        const name = this.getAttribute("name") || "Funky";
        const role = this.getAttribute("role") || "Editor/Designer";
        const myImg = this.getAttribute("img") || "";

        this.attachShadow({ mode: "open" });

        this.shadowRoot.innerHTML =
            `
             <link rel="stylesheet" href="style.css">
            <style>
            :host {
             display: inline-flex;
             flex-direction: column;            
            }
            </style>
            
            <div class="StaffCard"
                        style="background: linear-gradient(180deg, white 0%, #C5E3F6 100%); box-shadow: 3px 4px 3px rgba(0, 0, 0, 0.25); overflow: hidden; border-radius: 10px; outline: 4px #C5E3F6 solid; flex-direction: column; justify-content: center; align-items: center; gap: 5px; display: flex">
                        <div class="StaffImg" style="width: 180px; height: 180px; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: center; display: flex">
                            <img style="width: 194px; height: 194px"
                                src="${myImg}"/>
                        </div>
                        <div class="StaffNameAndLinksDiv"
                            style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 5px; display: flex">
                            <div data-layer="Staff name Div" class="StaffNameDiv"
                                style="align-self: stretch; flex-direction: column; justify-content: center; align-items: center; display: flex">
                                <div class="MyStaffName" style="align-self: stretch; text-align: center; justify-content: center; display: flex; flex-direction: column; color: #6196E5; font-size: 24px; font-family: Fredoka; font-weight: 600; word-wrap: break-word">
                                    ${name}</div>
                                <div data-layer="My Staff name" class="MyStaffName"
                                    style="align-self: stretch; text-align: center; justify-content: center; display: flex; flex-direction: column; color: #6196E5; font-size: 16px; font-family: Fredoka; font-weight: 400; word-wrap: break-word">
                                    ${role}</div>
                            </div>
                            <div class="VtuberLinks"
                                style="align-self: stretch; padding-left: 10px; padding-right: 10px; padding-top: 5px; padding-bottom: 5px; overflow: hidden; justify-content: center; align-items: center; gap: 10px; display: inline-flex">
                              
                                <slot name="X"></slot>
                                <slot name="YT"></slot>                               

                            </div>
                        </div>
                    </div>
    `
    }
}

customElements.define("staff-card", StaffCard);