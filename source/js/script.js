var link = document.querySelector(".page-header__menu-button");

var popup = document.querySelector(".site-list");
var close = popup.querySelector(".main-nav__close");

var isStorageSupport = true;
var storage = "";

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("site-list-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("site-list-show")) {
      popup.classList.remove("site-list-show");
    }
  }
});
