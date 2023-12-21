document.addEventListener("DOMContentLoaded", function () {
  var accordionButtons = document.querySelectorAll(".accordion-toggle");

  accordionButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var accordionItem = this.closest(".accordion");

      accordionItem.classList.toggle("active");

      if (accordionItem.classList.contains("active")) {
        this.style.backgroundImage = "url('assets/images/icon-minus.svg')";
      } else {
        this.style.backgroundImage = "url('assets/images/icon-plus.svg')";
      }
    });
  });
});
