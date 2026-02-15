// Create a class for the element
class NavigationButton extends HTMLElement {
  // Always call super first in constructor
  constructor() {
    super();

  }

  connectedCallback() {
    const text = this.getAttribute("text") || "Home";
    const page = document.title;



    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML =
      `
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="Styles/Navigation.css">
    
    <div class="NavButtonBlue" unselectable="on">
    <div class="ButtonIcon" style="width: 36px; height: 36px">
    <slot></slot>
    </div>
    <div class="ButtonText"><h3>${text}</h3></div>
    </div>  
    `
    this.SetUp(text, page)

    const navButton = this.shadowRoot.querySelector(".NavButtonBlue");
    navButton.addEventListener("click", () => this.GoTo());

  }

  SetUp(text, page) {
    const navButton = this.shadowRoot.querySelector(".NavButtonBlue");

    if (text.localeCompare(page))
      navButton.classList.add("active");
    else {
      navButton.classList.add("inactive");
    }
  }

  GoTo() {
    console.log("Going to " + this.getAttribute("link") || "index");

    location.assign(this.getAttribute("link") || "index.html");
  }


}

customElements.define("navigation-button", NavigationButton);

