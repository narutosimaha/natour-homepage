// const labels = document.querySelectorAll(".form__label");
// const inputs = document.querySelectorAll(".form__input");

// //INPUT
// inputs.forEach((el) =>
//   el.addEventListener("input", (e) => {
//     const label = e.target.parentElement.querySelector(".form__label");
//     if (e.target.value === "") {
//       label.classList.add("form__label--hidden");
//       return;
//     }
//     label.classList.remove("form__label--hidden");
//   })
// );
const video = document.querySelector(".footer .video");
const openvideo = document.querySelector("#video");
const popup_button = document.querySelectorAll(".btn-bnow");
const popup = document.querySelector(".popup");
const popup_close = document.querySelector(".popup__close");
const body = document.body;

openvideo.addEventListener("click", () => {
  video.classList.toggle("video--hidden");
});

popup_button.forEach((el) => {
  el.addEventListener("click", () => {
    popup.classList.remove("popup--hidden");
  });
});

popup_close.addEventListener("click", function () {
  popup.classList.add("popup--hidden");
});

popup.addEventListener("click", function (el) {
  if (el.target != popup) return;
  this.classList.add("popup--hidden");
  console.log(el.target);
});

///////////////////////////
// Navigation
const navList = document.querySelector(".navigation__list");
const navCheckBox = document.querySelector(".navigation__checkbox");
navList.addEventListener("click", function (el) {
  if (!el.target.classList.contains("navigation__link")) return;
  el.preventDefault();
  const id = el.target.getAttribute("href");
  navCheckBox.checked = false;
  setTimeout(() => {
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    console.log("hey");
  }, 200);
});
