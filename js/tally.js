const doc = document
const tallies = doc.querySelector(".tallies");
let eachTally = Array.from(doc.querySelectorAll(".tally"));
const addButton = doc.querySelector(".add-button");

const modernStyle = doc.querySelector(".set-modern");
let modernStyleActivated = false;

const classicStyle = doc.querySelector(".set-classic");
let classicStyleActivated = false;

const color = doc.querySelector(".set-color");

function addNewTally() {
    let tally = doc.createElement("div");
    tally.classList.add("tally");
    let title = doc.createElement("h1");
    title.classList.add("tally-title");
    title.textContent = "Title";
    tally.appendChild(title);
    tallies.appendChild(tally);
}

function setTallyStyle(style) {
    let activatedStyle;
    if (style === "modern") {
        activatedStyle = modernStyleActivated;
    } else if (style === "classic") {
        activatedStyle = classicStyleActivated;
    };

    console.log(activatedStyle)
    eachTally.forEach((tally) => {
        if (activatedStyle === false) {
            if (tally.classList = "tally classic") {
                tally.classList.remove("classic");
                tally.classList.add(style);
            } else {
                tally.classList.add(style);
            }
            if (tally.classList = "tally modern") {
                tally.classList.remove("modern");
                tally.classList.add(style);
            } else {
                tally.classList.add(style);
            }
        } else {
            tally.classList.remove(style);
        }
    });

    if (modernStyleActivated === false && style === "modern") {
        modernStyleActivated = true;
    } else if (modernStyleActivated === true && style === "modern") {
        modernStyleActivated = false;
    };
    if (classicStyleActivated === false && style === "classic") {
        classicStyleActivated = true;
    } else if (classicStyleActivated === true && style === "classic") {
        classicStyleActivated = false;
    };
};

modernStyle.onclick = () => {
    setTallyStyle("modern");
};

classicStyle.onclick = () => {
    setTallyStyle("classic");
};

addButton.onclick = () => {
    addNewTally();
    eachTally = Array.from(doc.querySelectorAll(".tally"));
};

