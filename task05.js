const canvas = document.querySelector("footer div canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "white";
ctx.beginPath();
ctx.moveTo(6, 6);
ctx.lineTo(14, 10);
ctx.lineTo(6, 14);
ctx.closePath();
ctx.fill();
ctx.strokeStyle = "black";
ctx.lineWidth = 1;
ctx.stroke();
const buttons = document.querySelectorAll("button");
const music = document.querySelector("audio");
music.src = "https://universal-soundbank.com/sounds/13631.mp3";
canvas.addEventListener("click", function () {
  music.play();
});
buttons[0].addEventListener("click", function () {
  music.pause();
});
buttons[1].addEventListener("click", function () {
  music.pause();
  music.currentTime = 0;
});
