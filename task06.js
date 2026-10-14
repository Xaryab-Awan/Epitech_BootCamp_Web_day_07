const container = document.querySelector("footer div");
const box = document.querySelector("footer div canvas");
const coordinates = document.querySelectorAll("footer div")[1];

container.style.position = "relative";
box.style.position = "absolute";
const x = (container.clientWidth - box.offsetWidth) / 2;
const y = (container.clientHeight - box.offsetHeight) / 2;

box.style.left = x + "px";
box.style.top = y + "px";
box.style.margin = "0";

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

box.addEventListener("mousedown", function (event) {
  isDragging = true;

  const boxRect = box.getBoundingClientRect();

  offsetX = event.clientX - boxRect.left;
  offsetY = event.clientY - boxRect.top;

  box.style.cursor = "grabbing";
});

document.addEventListener("mousemove", function (event) {
  if (!isDragging) return;

  const containerRect = container.getBoundingClientRect();

  let x = event.clientX - containerRect.left - container.clientLeft - offsetX;
  let y = event.clientY - containerRect.top - container.clientTop - offsetY;

  x = Math.max(0, Math.min(x, container.clientWidth - box.offsetWidth));
  y = Math.max(0, Math.min(y, container.clientHeight - box.offsetHeight));

  box.style.left = x + "px";
  box.style.top = y + "px";

  coordinates.textContent = `New coordinates => {x:${Math.round(x)}, y:${Math.round(y)}}`;
});

document.addEventListener("mouseup", function () {
  isDragging = false;
  box.style.cursor = "grab";
});
