let fontSize = 16;

const buttons = document.querySelectorAll("footer div button");
const select = document.querySelector("select");

buttons[0].addEventListener("click", function () {
  fontSize++;
  document.body.style.fontSize = fontSize + "px";
});

buttons[1].addEventListener("click", function () {
  fontSize--;
  document.body.style.fontSize = fontSize + "px";
});

select.addEventListener("change", function () {
  document.body.style.backgroundColor = select.value;
});
