let barsIcon = document.querySelector(".bars");
let barsPhone = document.querySelector(".bars-phone");

barsIcon.addEventListener("click", function () {
  barsPhone.classList.toggle("active");
});
