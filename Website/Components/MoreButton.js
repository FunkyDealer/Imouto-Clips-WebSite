// Create a class for the element
class MoreButton extends HTMLElement {
     // Always call super first in constructor
  constructor() {   
    super();    
  }  
  
  connectedCallback() {
    const text = this.getAttribute("text") || "More";
    const link = this.getAttribute("link") || "Home.Html";

    this.attachShadow({ mode: "open" });

     this.shadowRoot.innerHTML = 
    `
          <link rel="stylesheet" href="style.css">
          <link rel="stylesheet" href="Styles/Button.css">

        <div class="ButtonFramePink">
          <div class="Icon" style="justify-content: center; align-items: center; gap: 10px; display: flex">
            
            <slot></slot>

          </div>
          <div style=" justify-content: center; align-items: center; display: flex">
            <div style="text-align: right; justify-content: center; display: flex; flex-direction: column; color: var(--Primary-Pink);"><h3>${text}<h3></div>
          </div>
        </div>      
    `  
    const button = this.shadowRoot.querySelector(".ButtonFramePink");
    button.addEventListener("click", () => this.GoTo());
 } 
 
  GoTo() {

    console.log("Going to " + this.getAttribute("link") || "Home.Html");

     location.assign(this.getAttribute("link") || "index.html");
  }

} 
 
customElements.define("more-button", MoreButton);