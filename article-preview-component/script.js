document.addEventListener("DOMContentLoaded", function () {
  var shareButton = document.querySelector(".share");
  var shareContent = document.querySelector(".share_content");
  var shareMobile = document.getElementById("share");

  // Toggle share content for the desktop share button
  shareButton.addEventListener("click", function () {
    shareContent.classList.toggle("show");
    shareButton.classList.toggle("show");
    shareMobile.classList.toggle("show");
  });

  // Toggle share content for the mobile share button
  shareMobile.addEventListener("click", function () {
    shareContent.classList.toggle("show");
    shareButton.classList.toggle("show");
    shareMobile.classList.toggle("show");
  });
});
