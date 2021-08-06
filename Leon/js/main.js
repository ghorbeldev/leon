const links = document.querySelector(".links");
const scrollToTop = document.querySelector(".scroll-to-top");
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
