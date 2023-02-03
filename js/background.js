const images = [
    "0.png",
    "1.png",
    "2.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png",
    "8.png",
    "9.png",
    "12.png",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const background_div = document.querySelector(".background-region");
const bgImage = document.createElement("img")

bgImage.src = `img/${chosenImage}`;
bgImage.classList.add("background");
background_div.appendChild(bgImage);

