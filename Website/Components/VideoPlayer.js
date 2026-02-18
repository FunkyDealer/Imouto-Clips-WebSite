// Create a class for the element
class VideoPlayer extends HTMLElement {
    // Always call super first in constructor
    constructor() {
        super();
    }

    connectedCallback() {

        const link = this.getAttribute("link") || "";

        this.innerHTML =
            `
             <link rel="stylesheet" href="style.css">
            <style>
            :host {
             display: inline-flex;
             flex-direction: column;            
            }
                
            </style>            
       <iframe 
  height="315" 
  width="560" 
  src="https://${link}" 
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen>
</iframe>
    `
    }
}

customElements.define("video-player", VideoPlayer);