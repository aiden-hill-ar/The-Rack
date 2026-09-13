const title = document.querySelector(".title");

const colors = ["24 100% 50%", "216 100% 50%", "264 100% 50%"];
const color = colors[Math.floor(Math.random() * colors.length)];

function setTextShadow() {
   const num = Math.floor(Math.random() * 2);
   if (num === 0) {
      title.classList.add("low-shadow");
   } else if (num === 1) {
      title.classList.add("medium-shadow");
   }
};

setTextShadow();
title.style.setProperty("--text-color", color);

title.style.color = `hsl(${color})`;