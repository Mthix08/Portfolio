const ham = document.getElementById("ham");
const navUl = document.getElementById("nav-links");

ham.addEventListener("click", function (event) {
  event.preventDefault();
  navUl.classList.toggle("active");
});
