const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); // javascript만으로 <img src='img/1.jpeg'> html 만들 수 있다.
console.log(bgImage);

bgImage.src = `img/${chosenImage}`; //

document.body.appendChild(bgImage); //appendChild는 body에 html 추가
