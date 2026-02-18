class Vtuber {

    constructor(ID, ImgFileName, FullName, Name, AvailableBirthday, Day, Month, MainPlatform, Youtube, Twitch, Kick, Twitter, Category, clip) {
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
        this.Category = Category; //0. Hidden 1. Featured 2. Recommended 3. birthdaysOnly
        this.clip = clip;
    }

    Display() {
        const bdayA = this.availableBirthday ? "YES" : "NO";

        if (this.availableBirthday)
            console.log("ID: " + this.ID + " imgF: " + this.imgFileName + " FName: " + this.fullName + " name: " + this.name + " birthday?: " + bdayA + " bday: " + this.birthday.getDate() + "/" + this.birthday.toLocaleString('default', { month: 'long' }) + " mainPlat: " + this.mainPlat());
        else
            console.log("ID: " + this.ID + " imgF: " + this.imgFileName + " FName: " + this.fullName + " name: " + this.name + " birthday?: " + bdayA + " mainPlat: " + this.mainPlat());
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

const Vtubers = [];
let Loaded = false;
const loadEvent = new CustomEvent("VtubersLoaded");

window.addEventListener("DOMContentLoaded", () => {
    //console.log("DOM fully loaded and parsed");    
    //read json file
    readJson();  
});

function readJson() {
    //read json
    fetch("Database/Vtubers.json") 
        .then(res => res.json())
        .then(jsonData => {
            const dataLength = jsonData.length;
            jsonData.forEach((v) => {
                //create vtuber
                if (v.category != 0) {
                const vtuber = new Vtuber(v.ID, v.imgfileName, v.fullName, v.name, v.available_Birthday, v.birthday_Day, v.Birthday_Month, v.MainPlatform, v.youtube, v.twitch, v.kick, v.twitter, v.category, v.featuredClip);
                //place vtuber in the map
                Vtubers.push(vtuber);
                } 
            });                           
                
                // const l = Vtubers.length;
                // console.log("Vtubers list has " + l + " Elements");
                // Vtubers.forEach((t) => {console.log(t.Display()); });
                
              window.dispatchEvent(loadEvent);
        })       
}



