const doc = document
const tallies = doc.querySelector(".tallies");
const addButton = doc.querySelector(".add-button");

function addNewTally() {
    let tally = doc.createElement("div");
    tally.classList.add("tally");
    let title = doc.createElement("h1");
    title.classList.add("tally-title");
    title.textContent = "Title";
    tally.appendChild(title);
    tallies.appendChild(tally);
}

addButton.onclick = () => {
    addNewTally();
};