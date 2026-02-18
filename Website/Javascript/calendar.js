let animating = false; //used to prevent multiple clicks on the month buttons while the calendar is animating
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const daysOfTheWeek = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const CurrentDate = new Date();
const monthText = document.getElementById("month");
const yearText = document.getElementById("year");
const calendar = document.getElementById("calendar");
const nextMonthButton = document.querySelectorAll('[data-nextMonth-button]');
const prevMonthButton = document.querySelectorAll('[data-prevMonth-button]');
let VtuberMapByMonth;

function buildCalendarFragment(year, month) {
    const fragment = document.createDocumentFragment();
    let firstDay = new Date(year, month, 1).getDay();

    if (firstDay === 0) firstDay = 6; //turn 0(sunday) into 6 to make it the last day of the week
    else firstDay = firstDay - 1; //turn 1-6 into 0-5 to make it the first 6 days of the week

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    let currentDay = 1;
    let invisibleRow = false; //used to mark rows that should be invisible (after the end of the month)

    for (let i = 0; i < 6; i++) { //go throught each row
        const row = document.createElement("calendar-row");
        const rowId = "row" + (i + 1);
        row.setAttribute("id", rowId);
        //console.log("Created row with id: " + rowId);       

        for (let j = 0; j < 7; j++) {
            const day = document.createElement("calendar-day");
            const dayNumber = (i * 7 + j + 1);
            const dayId = "day" + dayNumber;
            day.setAttribute("id", dayId);
            const today = currentDay;

            //attributes
            let active = true;
            if (i == 0 && j < firstDay || currentDay > daysInMonth) active = false;

            day.setAttribute("active", active);

            if (!active) {
                day.setAttribute("dayNumber", "");
                day.setAttribute("trueDay", 0);
                if (invisibleRow) day.setAttribute("invisible", true);
            }
            else {
                day.setAttribute("dayNumber", currentDay);
                day.setAttribute("trueDay", currentDay);
                currentDay++;
            }
            // console.log("building frag");

            if (active) {
                const birthdays = SearchDayInMonth(month, today);
                const size = birthdays.length;

                if (size > 0) //birthdays
                {
                    for (let k = 0; k < size; k++) {
                        const birthdayName = document.createElement("calendar-name");
                        birthdayName.setAttribute("birthdayName", birthdays[k].name);
                        day.appendChild(birthdayName);
                        day.setAttribute("birthday", true);
                    }
                }
                else {
                }
            }
            row.append(day);
        }
        fragment.append(row);

        //if (currentDay > daysInMonth) break; //stop creating days if we have reached the end of the month
        if (currentDay > daysInMonth) invisibleRow = true; //mark row as invisible if we have reached the end of the month
    }
    return fragment;
}

function SearchDayInMonth(Month, Day) {
    let dayBirthdays = [];

    VtuberMapByMonth.get(Month).forEach(v => {
        if (v.birthday.getDate() == Day) dayBirthdays.push(v); 
    })
    return dayBirthdays;
}

function LoadCalendar() {
    //create rows
    if (calendar) {
        const year = CurrentDate.getFullYear();
        const month = CurrentDate.getMonth();

        if (monthText) monthText.textContent = monthNames[month];  //set month text to current month 
        if (yearText) yearText.textContent = year;
        const newPanel = document.createElement("div");
        newPanel.className = "calendar-panel panel-active";
        newPanel.append(buildCalendarFragment(year, month));

        // const fragment = buildCalendarFragment(year, month);
        calendar.append(newPanel);
    }
    else {
        console.error("Calendar element not found");
    }
}

function transitionToMonth(year, month, direction = "right") {
    if (animating) return; //prevent multiple clicks while animating

    if (monthText) monthText.textContent = monthNames[month]; //set month text to current month 
    if (yearText) yearText.textContent = year;
    const newPanel = document.createElement("div");
    newPanel.className = "calendar-panel " + (direction === "right" ? "panel-enter-right" : "panel-enter-left");
    newPanel.append(buildCalendarFragment(year, month));

    const oldPanel = calendar.querySelector(".calendar-panel");
    if (oldPanel.classList.contains("panel-active")) {
        oldPanel.classList.remove("panel-active");
    }
    //calendar.appendChild(newPanel);
    calendar.insertBefore(newPanel, oldPanel);

    // force reflow to enable the animation
    void newPanel.offsetWidth;

    //activate the animation
    newPanel.classList.add("panel-active");
    if (oldPanel) {
        oldPanel.classList.add(direction === "right" ? "panel-exit-left" : "panel-exit-right");
    }
    //clean up after animation
    newPanel.addEventListener("transitionend", function onEnd(e) {
        //if (e.propertyName == "transform") return; //ignore transform transitions
        newPanel.removeEventListener("transitionend", onEnd);
        if (oldPanel) {  calendar.removeChild(oldPanel); }
        newPanel.classList.remove("panel-enter-right", "panel-enter-left");
        newPanel.classList.remove("panel-active"); //ensure final state
        animating = false;
    });
}

window.addEventListener("DOMContentLoaded", () => {
    //console.log("DOM fully loaded and parsed");

    VtuberMapByMonth = new Map();
    //read json file
    readJson();
  
});

function readVtuberList(month) {
    console.log(month);
}

nextMonthButton.forEach(button => {
    button.addEventListener('click', () => {
        if (animating) return; //prevent multiple clicks while animating
        //console.log("next month button clicked");
        CurrentDate.setMonth(CurrentDate.getMonth() + 1);
        transitionToMonth(CurrentDate.getFullYear(), CurrentDate.getMonth(), "right");
    });
})

prevMonthButton.forEach(button => {
    button.addEventListener('click', () => {
        if (animating) return; //prevent multiple clicks while animating
        //console.log("previous month button clicked");
        CurrentDate.setMonth(CurrentDate.getMonth() - 1);
        transitionToMonth(CurrentDate.getFullYear(), CurrentDate.getMonth(), "left");
    });
})

function readJson() {
    for (let i = 0; i < 12; i++) { //create months
        const month = [];
        VtuberMapByMonth.set(i, month);
    }

    fetch("Database/Vtubers.json") //read json
        .then(res => res.json())
        .then(jsonData => {
            const dataLength = jsonData.length;
            jsonData.forEach((v, index) => {
                //create vtuber
                if (v.category != 0) {
                const vtuber = new Vtuber(v.ID, v.imgfileName, v.fullName, v.name, v.available_Birthday, v.birthday_Day, v.Birthday_Month, v.MainPlatform, v.youtube, v.twitch, v.kick, v.twitter, v.category);
                //place vtuber in the map
                if (vtuber.availableBirthday) VtuberMapByMonth.get(vtuber.birthday.getMonth()).push(vtuber);
                }
            });
             //VtuberMapByMonth.forEach(readVtuberList);
             LoadCalendar();
        })       
}

class Vtuber {

    constructor(ID, ImgFileName, FullName, Name, AvailableBirthday, Day, Month, MainPlatform, Youtube, Twitch, Kick, Twitter, Category) {
        this.ID = ID;
        this.imgFileName = ImgFileName;
        this.fullName = FullName;
        this.name = Name;
        this.availableBirthday = AvailableBirthday;

        this.mainPlatform = MainPlatform; //0. Youtube 1. Twitch 2. Kick 3.Twitter
        this.youtube = Youtube;
        this.twitch = Twitch;
        this.kick = Kick;
        this.twitter = Twitter;
        const year = new Date().getFullYear();
        const month = Month - 1;
        const day = Day;
        this.birthday = new Date(year, month, day);
        this.Category = Category; //1. Hidden 2. Feature 3. Reccomended
    }

    Display() {
        const bdayA = this.availableBirthday ? "YES" : "NO";

        if (this.availableBirthday)
            console.log("ID: " + this.ID + "imgF: " + this.imgFileName + " FName: " + this.fullName + " name: " + this.name + " birthday?: " + bdayA + " bday: " + this.birthday.getDate() + "/" + this.birthday.toLocaleString('default', { month: 'long' }) + " mainPlat: " + this.mainPlat());
        else
            console.log("ID: " + this.ID + "imgF: " + this.imgFileName + " FName: " + this.fullName + " name: " + this.name + " birthday?: " + bdayA + " mainPlat: " + this.mainPlat());
    }

    mainPlat() {
        switch (this.mainPlatform) {
            case 0: return "Youtube";
            case 1: return "Twitch";
            case 2: return "Kick";
            case 3: return "Twitter";
        }
    }
     MainPlatLink() {
         switch (this.mainPlatform) {
            case 0: return this.youtube;
            case 1: return this.twitch;
            case 2: return this.kick;
            case 3: return this.twitter;
        }
    }
}

const modalElement = document.querySelector("modal-component");
const myModal = modalElement.shadowRoot.getElementById("modal");
const myOverlay = modalElement.shadowRoot.getElementById("overlay");

// const myModal = document.getElementById("modal");
// const myOverlay = document.getElementById('overlay');

function BirthdayClick(birthday , day) {
    if (birthday) {
          //console.log("clicked the day is " + day);
         OpenModal(day);
    }     
}

function OpenModal(day) {
    if (myModal == null) { console.log("no modal"); return;  }

    const modalDate = document.getElementById("ModalDate");
    const modalWeekDay = document.getElementById("MonthWeekDay");

    const modalContent = document.getElementById("modalContent");

    while (modalContent.firstChild) {
             modalContent.removeChild(modalContent.firstChild);
    }

    const birthdays = SearchDayInMonth(CurrentDate.getMonth(), day);   

    let birthdaysfrags = [];
    birthdays.forEach(v => { birthdaysfrags.push(v); })
    //console.log(names);

    modalDate.textContent = day + " " + monthNames[CurrentDate.getMonth()] + " " + CurrentDate.getFullYear(); 

    const birthdaydate = new Date(CurrentDate.getFullYear(), CurrentDate.getMonth(), day);
    modalWeekDay.textContent = daysOfTheWeek[birthdaydate.getDay()];  
    
    //modalContent.textContent = `${names}`;

    birthdays.forEach(element => {
        modalContent.append(CreateVtuberCard(element));
    });    

    modalElement.open();
}

function CreateVtuberCard(vtuber) {
    const fragment = document.createDocumentFragment();

    const card = document.createElement("vtuber-card");

    card.setAttribute("name", vtuber.fullName);
   // card.classList.add("cardHidden");

    const img = "./Database/VtubersImages/" + vtuber.imgFileName;

    // console.log(vtuber.imgFileName);
    //  console.log(img);

    card.setAttribute("img", img);

    const links = [];

    if (vtuber.twitch.length > 13) {
        const twitch = document.createElement("twitch-link");
        twitch.setAttribute("link", vtuber.twitch);
        twitch.slot = "twitch";
        links.push(twitch);
    }

    if (vtuber.youtube.length > 15) {
        const youtube = document.createElement("youtube-link");
        youtube.setAttribute("link", vtuber.youtube);
        youtube.slot = "YT"
        links.push(youtube);
    }

    if (vtuber.twitter.length > 9) {
        const X = document.createElement("twitter-link");
        X.setAttribute("link", vtuber.twitter);
        X.slot = "X";
        links.push(X);
    }

    links.forEach((l) => {
        card.append(l);
    })

    const link = "https://" + vtuber.MainPlatLink();
    card.setAttribute("mainLink", link);

    fragment.append(card);

    return fragment;
}