var btnFeedback  = document.querySelector(".btn-feedback");
var popupFeedback = document.querySelector(".modal-content");
var closePopupFeedback = popupFeedback.querySelector(".modal-content-close");
var formFeedback = popupFeedback.querySelector("form");
var nameFeedback = popupFeedback.querySelector("[name=login]");
var emailFeedback = popupFeedback.querySelector("[name=e-mail]");
var textFeedback = popupFeedback.querySelector("textarea");
var overlayFeedback = document.querySelector(".modal-overlay");


btnFeedback.addEventListener("click", function(event){
  event.preventDefault();
  overlayFeedback.classList.add("modal-overlay-show");
  popupFeedback.classList.add("modal-content-show");
  nameFeedback.focus();
      });

closePopupFeedback.addEventListener("click", function(event){
  event.preventDefault();
  popupFeedback.classList.remove("modal-content-show");
  popupFeedback.classList.remove("modal-error");
  overlayFeedback.classList.remove("modal-overlay-show");
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
            overlayFeedback.classList.remove("modal-overlay-show");
          }
        }
      });

overlayFeedback.addEventListener("click", function(event){
  event.preventDefault();
  popupFeedback.classList.remove("modal-content-show");
  popupFeedback.classList.remove("modal-error");
  overlayFeedback.classList.remove("modal-overlay-show");
});


ymaps.ready(init);
var myMap,
    myPlacemark;

function init(){     
        myMap = new ymaps.Map ("map-interactive", {
            center: [59.93869678, 30.32588304], 
            zoom: 16});
  
        myPlacemark = new ymaps.Placemark([59.93867179, 30.32296542], { 
            hintContent: "Gllacy"},
           {iconLayout: "default#image",
            iconImageHref: "img/pin-map.svg", 
            iconImageSize: [79, 138], 
            iconImageOffset: [-42, -138]
           
        });
  
        myMap.geoObjects.add(myPlacemark);}




