{
  const welcome = () => {
    console.log("Witam wszystkich!");
  };

  const toggleBackground = () => {
    const body = document.querySelector(".body");
    const colorSwitch = document.querySelector(".js-header__colorSwitch");

    body.classList.toggle("body--dark");
    colorSwitch.innerText = body.classList.contains("body--dark")
      ? "białe"
      : "fioletowe";
  };

  const init = () => {
    const button = document.querySelector(".js-header__button");
    button.addEventListener("click", toggleBackground);

    welcome();
  };

  init();
}
