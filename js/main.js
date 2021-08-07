document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelector(".links");
  const scrollToTop = document.querySelector(".scroll-to-top");
  const features = document.querySelectorAll(".feature");
  features.forEach((feature, indx) => {
    feature.dataset.aos = "fade-up";
    feature.dataset.aosDelay = 100 * indx;
  });
  const services = document.querySelectorAll(".service");
  services.forEach((service, indx) => {
    service.dataset.aos = "fade-up";
    service.dataset.aosDelay = 100 * indx;
  });
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, indx) => {
    card.dataset.aos = "fade-up";
    card.dataset.aosDelay = 100 * indx;
  });

  links.addEventListener("click", () => {
    links.classList.toggle("active");
  });
  scrollToTop.addEventListener("click", e => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
  AOS.init({duration: 800});
});
