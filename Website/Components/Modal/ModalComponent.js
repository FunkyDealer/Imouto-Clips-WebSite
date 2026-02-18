// Create a class for the element
class Modal extends HTMLElement {
    // Always call super first in constructor
    constructor() {
        super();
    }

    connectedCallback() {

        this.attachShadow({ mode: "open" });
          const width = this.getAttribute("width") || 500;   


        this.shadowRoot.innerHTML =
            `          

    <link rel="stylesheet" href="Styles/Modal.css">
         
    <div id="modal" class="modal" style="min-width=${width}">
        <div class="TopContainer"
            style="display: grid; align-self: stretch; min-width: ${width}px; height: 77px; position: relative; background: linear-gradient(90deg, #FC5C9C 0%, #FB3282 100%); border-top-left-radius: 10px; border-top-right-radius: 10px">
            <div class="Closebutton"
                style="min-width: ${width-25}px; height: 77px; left: 0px; top: 0px; position: absolute; flex-direction: column; justify-content: center; align-items: flex-end; display: inline-flex">
                <div class="Closebutton"
                    style="flex-direction: column; justify-content: center; align-items: flex-start; display: flex">

                    <button data-close-button class="modal-close-button">
                        <svg class="modal-close-buttonGFX" width="22" height="22" viewBox="0 0 84 84" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M52.3896 44.5571C50.9779 43.1453 50.9779 40.8547 52.3896 39.4429L82.3841 9.44849C84.5386 7.29395 84.5386 3.77045 82.3841 1.61591C80.2296 -0.538636 76.7061 -0.538636 74.5515 1.61591L44.5571 31.6104C43.1453 33.0221 40.8547 33.0221 39.4429 31.6104L9.44849 1.61591C7.29395 -0.538636 3.77045 -0.538636 1.61591 1.61591C-0.538636 3.77045 -0.538636 7.29395 1.61591 9.44849L31.6104 39.4429C33.0221 40.8547 33.0221 43.1453 31.6104 44.5571L1.61591 74.5515C-0.538636 76.7061 -0.538636 80.2296 1.61591 82.3841C3.77045 84.5386 7.29395 84.5386 9.44849 82.3841L39.4429 52.3896C40.8547 50.9779 43.1453 50.9779 44.5571 52.3896L74.5515 82.3841C76.7061 84.5386 80.2296 84.5386 82.3841 82.3841C84.5386 80.2296 84.5386 76.7061 82.3841 74.5515L52.3896 44.5571Z"
                                fill="var(--Secondary-Pink)" />
                        </svg>
                    </button>

                </div>
            </div>
            
            <slot name="title"></slot>

        </div>

        <slot name="content"></slot>

    </div>

   <div id="overlay"></div>
    `

    this.modal = this.shadowRoot.getElementById("modal");
    this.overlay = this.shadowRoot.getElementById("overlay");

        // Close when clicking overlay
        this.overlay.addEventListener("click", () => this.close());

        // Close when clicking close button
        this.shadowRoot
            .querySelector("[data-close-button]")
            .addEventListener("click", () => this.close());
    }     
    
    open() {

        this.modal.classList.add("modalActive");
        this.overlay.classList.add("modalActive");
    }

    close() {

        this.modal.classList.remove("modalActive");
        this.overlay.classList.remove("modalActive");

        const videoFrame = document.querySelector("#videoFrame");
        if (videoFrame) videoFrame.innerHTML = ``
    }

    
}

customElements.define("modal-component", Modal);
