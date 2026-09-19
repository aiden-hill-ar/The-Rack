const doc = document;
doc.addEventListener("DOMContentLoaded", () => {
    fetch("../templates/mini-calculator.html")
    .then(response => response.text())
    .then(html => {
        doc.querySelector("#mini-calculator").innerHTML = html;
    })
    .catch(error => {
        console.error("Mini calculator failed to load:", error);
    });
})