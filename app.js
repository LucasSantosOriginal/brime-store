const wrapped = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        wrapped.style.transform = `translateX(${-100 * index}vw)`;
    });
});