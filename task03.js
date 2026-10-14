const box = document.querySelector("footer div");

let characters = "";

document.addEventListener("keydown", function (event) {
  if (event.key.length === 1) {
    characters += event.key;
  }

  characters = characters.slice(-42);

  box.textContent = characters;
});
