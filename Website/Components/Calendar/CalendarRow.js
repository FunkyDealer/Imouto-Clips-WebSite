// Create a class for the element
class CalendarRow extends HTMLElement {
     // Always call super first in constructor
  constructor() {   
    super();
  }  
  
  connectedCallback() {

     this.attachShadow({ mode: "open" });

     this.shadowRoot.innerHTML = 
    `
   <link rel="stylesheet" href="Styles/calendar.css">

     <div id="${this.id}" class="DaysRow">
      <slot></slot>
      </div>
    `  
 }  
} 
 
customElements.define("calendar-row", CalendarRow);
