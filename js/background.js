const images = ["01.png", "02.png", "03.png"];

const chosenImg = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");
bgImg.src = `img/${chosenImg}`;

document.body.appendChild(bgImg);
