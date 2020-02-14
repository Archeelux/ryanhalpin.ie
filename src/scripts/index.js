import LazyLoad from "vanilla-lazyload";

var lazyLoadInstance = new LazyLoad({
  elements_selector: ".lazy"
  // ... more custom settings?
});

document.addEventListener("DOMContentLoaded", function(event) {
  // Modals

  var rootEl = document.documentElement;
  var allModals = getAll(".modal");
  var modalButtons = getAll(".modal-button");
  var modalCloses = getAll(
    ".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button"
  );

  if (modalButtons.length > 0) {
    modalButtons.forEach(function(el) {
      el.addEventListener("click", function() {
        var target = document.getElementById(el.dataset.target);
        rootEl.classList.add("is-clipped");
        target.classList.add("is-active");
      });
    });
  }

  if (modalCloses.length > 0) {
    modalCloses.forEach(function(el) {
      el.addEventListener("click", function() {
        closeModals();
      });
    });
  }

  document.addEventListener("keydown", function(event) {
    var e = event || window.event;
    if (e.keyCode === 27) {
      closeModals();
    }
  });

  function closeModals() {
    rootEl.classList.remove("is-clipped");
    allModals.forEach(function(el) {
      el.classList.remove("is-active");
    });
  }

  // Functions

  function getAll(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
  }

  // const images = Array.from(document.querySelectorAll(".magnify-outer"));
  // if (!images.length) return;

  // const modal = document.querySelector(".modal");
  // const modalImage = document.querySelector(".modal .modal-content p img");
  // const modalClose = document.querySelector(".modal-close");

  // const onClickImage = e => {
  //   const imgLink = e.target.dataset.imglink;

  //   modalImage.dataset.src = imgLink + "?nf_resize=fit&w=&h=100";
  //   modalImage.src = imgLink;

  //   console.log(modalImage);

  //   lazyLoadInstance.update();
  //   modal.classList += "is-active";
  // };

  // images.forEach(a => (a.onclick = onClickImage));
});
