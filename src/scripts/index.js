import LazyLoad from "vanilla-lazyload";

var lazyLoadInstance = new LazyLoad({
  elements_selector: ".lazy"
  // ... more custom settings?
});

document.addEventListener("DOMContentLoaded", function(event) {
  const images = Array.from(document.querySelectorAll(".magnify-outer"));
  if (!images.length) return;

  const modal = document.querySelector(".modal");
  const modalImage = document.querySelector(".modal .modal-content p img");
  const modalClose = document.querySelector(".modal-close");

  const onClickImage = e => {
    const imgLink = e.target.dataset.imglink;

    modalImage.dataset.src = imgLink + "?nf_resize=fit&w=&h=100";
    modalImage.src = imgLink;

    console.log(modalImage);

    lazyLoadInstance.update();
    modal.classList += "is-active";
  };

  images.forEach(a => (a.onclick = onClickImage));
});
