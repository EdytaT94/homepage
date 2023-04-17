{
  const welcome = () => {
    console.log("Witam wszystkich!");
  };

  const toggleBackground = () => {
    const body = document.querySelector(".body");
    const colorSwitch = document.querySelector(".js-nextBackgroundColor");

    body.classList.toggle("body--dark");
    colorSwitch.innerText = body.classList.contains("body--dark")
      ? "białe"
      : "fioletowe";
  };

  const init = () => {
    const button = document.querySelector(".js-toggleThemeBackground");
    button.addEventListener("click", toggleBackground);

    welcome();
  };

  init();
}
