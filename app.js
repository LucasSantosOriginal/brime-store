const wrapped = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
        id: 1,
        title: "Air Max Plus",
        price: 119,
        colors: [
            {
                code: "black",
                img: "./img/airmax-plus.png",
            },
            {
                code: "darkblue",
                img: "./img/airmax-plus2.png",
            },
        ],
    },
    {
        id: 2,
        title: "SpringBlade",
        price: 149,
        colors: [
            {
                code: "black",
                img: "./img/Adidas-Springblade.png",
            },
            {
                code: "red",
                img: "./img/Adidas-Springblade2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Air Max 97",
        price: 109,
        colors: [
            {
                code: "lightgray",
                img: "./img/air-max-97.png",
            },
            {
                code: "green",
                img: "./img/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Air Max TW",
        price: 129,
        colors: [
            {
                code: "black",
                img: "./img/airmax-tw.png",
            },
            {
                code: "lightgray",
                img: "./img/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Lebron 20",
        price: 99,
        colors: [
            {
                code: "gray",
                img: "./img/LEBRON20.png",
            },
            {
                code: "black",
                img: "./img/hippie2.png",
            },
        ],
    },
];

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");


menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change the current slide 
        wrapped.style.transform = `translateX(${-100 * index}vw)`;

        //change the choosen product 
        choosenProduct = products[index]

        //change text of currentProduct
        currentProductTitle.textContent = choosenProduct.title
        currentProductPrice.textContent = "U$" + choosenProduct.price
        currentProductImg.src = choosenProduct.colors[0].img

        //assing new colors 
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        })
    });
});



currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img
    })
})
