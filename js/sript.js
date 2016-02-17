var btnFeedback  = document.querySelector(".btn-feedback");
var popupFeedback = document.querySelector(".modal-content");
var closePopupFeedback = popupFeedback.querySelector(".modal-content-close");
var formFeedback = popupFeedback.querySelector("form");
var nameFeedback = popupFeedback.querySelector("[name=login]");
var emailFeedback = popupFeedback.querySelector("[name=e-mail]");
var textFeedback = popupFeedback.querySelector("textarea");

btnFeedback.addEventListener("click", function(event){
  event.preventDefault();
  popupFeedback.classList.add("modal-content-show");
  nameFeedback.focus();
      });

closePopupFeedback.addEventListener("click", function(event){
  event.preventDefault();
  popupFeedback.classList.remove("modal-content-show");
  popupFeedback.classList.remove("modal-error");
});

formFeedback.addEventListener("submit", function(event) {
        if (!nameFeedback.value || !emailFeedback.value || !textFeedback.value) {
          event.preventDefault();
          console.log("Нужно ввести логин и пароль");
          popupFeedback.classList.add("modal-error");
        } 
      });

window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (popupFeedback.classList.contains("modal-content-show")) {
            popupFeedback.classList.remove("modal-content-show");
            popupFeedback.classList.remove("modal-error");
          }
        }
      });

