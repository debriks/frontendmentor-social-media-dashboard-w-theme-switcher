let switchEl = document.querySelector(".header__theme--switch");
let themeTxt = document.getElementById("themeTxt");

switchEl.addEventListener("click", () => {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    themeTxt.innerHTML = `Dark Mode`;
  } else {
    document.body.classList.add("dark");
    themeTxt.innerHTML = `Light Mode`;
  }
});
