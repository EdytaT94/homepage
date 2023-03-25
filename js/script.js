console.log("Witam wszystkich!");

let button = document.querySelector(".js-header__button");
let body = document.querySelector(".body");
let colorSwitch = document.querySelector(".js-header__colorSwitch");

button.addEventListener("click", () => {
  body.classList.toggle("body--dark");

  colorSwitch.innerText = body.classList.contains("body--dark")
    ? "białe"
    : "fioletowe";
});
