// Create a class for the element
class CalendarDay extends HTMLElement {
     // Always call super first in constructor
  constructor() {   
    super();
  }    

  connectedCallback() {
    this.attachShadow({ mode: "open" });

    const dayNumber = this.getAttribute("dayNumber") || "";
    let active = this.getAttribute("active") === "true";
    const invisible = this.getAttribute("invisible") === "true";
    const trueDay = this.getAttribute("trueDay") || "";
    const birthday = this.getAttribute("birthday") == "true";      

     this.shadowRoot.innerHTML = 
    `    
     <link rel="stylesheet" href="Styles/calendar.css">
     <link rel="stylesheet" href="style.css">

     <style>
            :host {
       width: 110px;
    height: 110px;
    position: relative;      
            }
            </style>

  <div id="${this.id}" onclick="BirthdayClick(${birthday} ,${trueDay})" class="DayFrame ${active ? "activeDay" : "inactiveDay"} ${invisible ? "invisibleDay" : "" } ${birthday ? "birthdayDay" : ""}">
    <div  class="DateNumberFrame">
        <div class="DateNumberDecor">

     <svg class="DateNumberHeart"  width="40" height="40" viewBox="0 0 99 99" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M87.1613 17.7549C82.3616 13.4961 76.3336 11.3666 70.3093 11.3666C63.8028 11.3666 57.299 13.849 52.3353 18.8109L49.5092 21.637C49.5092 21.637 49.5037 21.6406 49.5 21.6406C49.4963 21.6406 49.4936 21.6397 49.4908 21.637L46.6648 18.8109C41.701 13.8481 35.1973 11.3666 28.6908 11.3666C22.6664 11.3666 16.6384 13.497 11.8388 17.7549C0.733336 27.6081 0.077003 42.6561 9.06125 54.9147C18.4571 67.7361 49.1178 87.3904 49.4863 87.626V87.6287C49.4863 87.6287 49.4945 87.6333 49.5 87.6324C49.5046 87.6324 49.5101 87.6324 49.5138 87.6287V87.626C49.8823 87.3904 80.5429 67.7361 89.9388 54.9147C98.923 42.6552 98.2667 27.6081 87.1613 17.7549Z"
         fill="var(--Primary-Pink)"/>
      </svg>


    </div>
    <div class="DateNumberText">
    <p>${dayNumber}</p>
    </div>

    </div>


    <div class="TalentsFrame">
    <slot></slot>
      
    </div>

  </div>
    `  
 }  
} 
 
customElements.define("calendar-day", CalendarDay);

// Create a class for the element
class CalendarName extends HTMLElement {
     // Always call super first in constructor
  constructor() {   
    super();
  }   

  connectedCallback() {

    const name = this.getAttribute("birthdayName") || "";
      
     this.innerHTML = 
    `
    <div class="calendar-name"><p>${name}</p></div> 
    `  
 }  
} 
 
customElements.define("calendar-name", CalendarName);