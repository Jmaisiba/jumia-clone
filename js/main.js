

const images = [
    "/assets/img/categories-item1.gif",
    "/assets/img/categories-item2.jpg",
    "/assets/img/categories-item3.jpg",
    "/assets/img/categories-item4.jpg",
    "/assets/img/categories-item5.jpg",
    "/assets/img/categories-item6.gif",
    "/assets/img/categories-item7.gif",
    "/assets/img/categories-item8.gif"
];

let currentIndex = 0;
const showcase = document.getElementById("imageShowcase");

function changeBackground(){
    // showcase.style.backgroundImage = `url('${images[currentIndex]}')`;
    showcase.style.backgroundImage =  `url('${images[currentIndex]}')`;
    currentIndex = (currentIndex+1) % images.length;

}

changeBackground();
setInterval(changeBackground, 5000);

