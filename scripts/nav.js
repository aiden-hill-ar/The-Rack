const nav = document.querySelector("nav");
const button = document.querySelector("nav .selected");

nav.addEventListener("mousemove", e => {
    const rect = button.getBoundingClientRect();

    const buttonX = rect.left + rect.width / 2;

    const distanceX = e.clientX - buttonX;

    button.style.setProperty("--pull-x", `${distanceX * 0.05}px`);
})

nav.addEventListener("mouseleave", e => {
    button.style.setProperty("--pull-x", "0px");
});