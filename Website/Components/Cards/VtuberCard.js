// Create a class for the element
class VtuberCard extends HTMLElement {
    // Always call super first in constructor
    constructor() {
        super();
    }

    connectedCallback() {
        const name = this.getAttribute("name") || "Miruku Kumazuki";
        const img = this.getAttribute("img") || "https://placehold.co/500x500";
        const mainLink = this.getAttribute("mainLink") || "";
        this.attachShadow({ mode: "open" });

        const size = 200;

        this.shadowRoot.innerHTML =
            `
             <link rel="stylesheet" href="style.css">
            <style>
            :host {
             display: inline-flex;
             flex-direction: column;
          
            }
            </style>
        
<div class="VtuberCard">
  <div id="img" class="VtuberImg" style="width: ${size}px; height: ${size}px; background: white; overflow: hidden; border-top-left-radius: 10px; border-top-right-radius: 10px; flex-direction: column; justify-content: flex-start; align-items: center; display: flex">
  <a href="${mainLink}" target="_blank">  
  <img alt="${name}" style="width: ${size}px; height: ${size}px" src="${img}">
  </a>
  </div>
  <div  class="VtuberNameAndLinksDiv" style="align-self: stretch; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 5px; display: flex">
    <div  class="VtuberNameDiv" style="align-self: stretch; overflow: hidden; flex-direction: column; justify-content: center; align-items: center; display: flex">
      <div  class="CardText" style="align-self: stretch; text-align: center; justify-content: center; display: flex; flex-direction: column; color: #FC5C9C; font-size: 20px; font-family: Fredoka; font-weight: 600; word-wrap: break-word">${name}</div>
    </div>
    
    <div class="VtuberLinks" style="align-self: stretch; padding-left: 10px; padding-right: 10px; padding-top: 5px; padding-bottom: 5px; overflow: hidden; justify-content: center; align-items: center; gap: 10px; display: inline-flex">
      
      <!-- Clip -->
      <slot name="clip"></slot>

      <!-- YTLogo -->
      <slot name="YT"></slot>

      <!-- Twitch logo -->
      <slot name="twitch"></slot>

      <!-- X logo -->
      <slot name="X"></slot>

    </div>
  </div>
</div>
    `
        const href = this.shadowRoot.getElementById("img");
        if (mainLink.length <= 8) href.classList.add("disabled");
    }
}

customElements.define("vtuber-card", VtuberCard);