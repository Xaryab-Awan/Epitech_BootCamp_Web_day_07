const firstBox = document.querySelector("footer div");
const link = firstBox.querySelector("a");

function updatePage() {
  if (document.cookie.includes("acceptsCookies=true")) {
    firstBox.style.display = "none";

    if (!document.querySelector("#deleteCookieBox")) {
      const newdiv = document.createElement("div");
      newdiv.id = "deleteCookieBox";

      const button = document.createElement("button");
      button.textContent = "Delete the cookie";

      newdiv.appendChild(button);
      firstBox.parentElement.appendChild(newdiv);

      button.addEventListener("click", function () {
        document.cookie = "acceptsCookies=; max-age=0; path=/";

        newdiv.remove();

        firstBox.style.display = "";
      });
    }
  } else {
    firstBox.style.display = "";
  }
}

link.addEventListener("click", function (event) {
  event.preventDefault();

  document.cookie = "acceptsCookies=true; max-age=86400; path=/";

  updatePage();
});

updatePage();
