
const featuredDiv = document.getElementById("featured");
const recommendedDiv = document.getElementById("other");
const randomlyPicked = document.getElementById("random");

const readyEvent = new CustomEvent("VtubersPopulated");

window.addEventListener("VtubersLoaded", () => {
    console.log("Data Loaded");
    if (featuredDiv) LoadFeatured();
    if (recommendedDiv) LoadRecommended();
    if (randomlyPicked) LoadRandom();

    window.dispatchEvent(readyEvent);
});

function LoadFeatured() {
    if (featuredDiv) {
        const length = Vtubers.length;
        if (length > 0) {
            //console.log("Loading Featured, Vtubers list has " + length + " elements");

            Vtubers.forEach((v) => {
                if (v.Category == 1) {
                    //create card
                    featuredDiv.append(CreateVtuberCard(v));
                }
            });

            console.log("featured loaded");
        }
        else {
            console.log("Vtubers list was empty");
        }
    }
    else {
        console.log("featured div was not found");
    }
}

function LoadRecommended() {
    if (recommendedDiv) {
        const length = Vtubers.length;
        if (length > 0) {
            //console.log("Loading Recommended, Vtubers list has " + length + " elements");

            Vtubers.forEach((v) => {
                if (v.Category == 2) {
                    recommendedDiv.append(CreateVtuberCard(v));
                }
            });

            console.log("Recommended loaded");
        }
        else {
            console.log("Vtubers list was empty");
        }
    }
    else {
        console.log("Recommended div was not found")
    }
}

function LoadRandom() {
    if (randomlyPicked) {
        const length = Vtubers.length;
        if (length > 0) {
           // let randomNr = Math.floor(Math.random() * length);

            const startTime = performance.now();
            const randomNr = generateRandomNumbers(3, 0, length - 1);
            const endTime = performance.now();
            console.log(`Call took ${endTime - startTime} milliseconds`);

            for (let i = 0; i < 3; i++) {
                randomlyPicked.append(CreateVtuberCard(Vtubers[randomNr[i]]));
            }
        }
        else {
            console.log("vtubers list was empty");
        }
    }
    else {
        console.log("Random was not found");
    }
}

function generateRandomNumbers(count, min, max) {
    // if statement checks that `count` is less than `max + 1`
    if (count > max + 1) {
        return "count cannot be greater than the upper limit of range";
    } else {
        // 1: Create a `Set` object
        let uniqueNumbers = new Set();
        while (uniqueNumbers.size < count) {
            // 2: Generate each random number
            uniqueNumbers.add(Math.floor(Math.random() * (max - min + 1)) + min);
        }
        // 3: Immediately insert them numbers into the Set...
        return Array.from(uniqueNumbers);
    }
}

function CreateVtuberCard(vtuber) {
    const fragment = document.createDocumentFragment();

    const card = document.createElement("vtuber-card");

    card.setAttribute("name", vtuber.fullName);
    card.classList.add("cardHidden");

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