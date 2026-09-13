const title = document.querySelector(".title");
const body = document.querySelector("body");

const colors = ["24", "216", "264"];
const color = colors[Math.floor(Math.random() * colors.length)];
let bodyColor;

function setTextShadow() {
   const num = Math.floor(Math.random() * 2);
   if (num === 0) {
      title.classList.add("low-shadow");
   } else if (num === 1) {
      title.classList.add("medium-shadow");
   }
};

function setTextBorder() {
   const num = Math.floor(Math.random() * 3);
   if (num === 0) {
      
   } else if (num === 1) {
      title.classList.add("thin-color-border");
   } else if (num === 2) {
      title.classList.add("thick-color-border");
   }
}

setTextShadow();
setTextBorder();

title.style.setProperty("--text-color", color);
body.style.setProperty("--color", color);
document.querySelector("div.content .container").style.setProperty("--color", color);

title.style.color = `hsl(${color})`;