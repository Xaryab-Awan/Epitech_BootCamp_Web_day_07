const section = document.querySelector("footer");
const counterDisplay = document.querySelector("footer div");

section.addEventListener("click", function () {
  let name = "";

  while (name.trim() === "") {
    name = prompt("What's your name ?");

    if (name === null) {
      name = "";
    }
  }

  const confirmed = confirm(`Are you sure that ${name} is your name ?`);

  if (confirmed) {
    const message = `Hello ${name} !`;
    alert(message);
    counterDisplay.textContent = message;
  }
});
