function setup() {
  const ratingItems = document.querySelectorAll(".rating .item");
  const selectedRatingElement = document.getElementById("selectedRating");
  const ratingContainer = document.querySelector(".container__rating");
  const thankYouContainer = document.querySelector(".container__thank-you");
  const backBtn = document.getElementById("backBtn");

  ratingItems.forEach((item) => {
    item.addEventListener("click", () => {
      const selectedRating = item.textContent;
      selectedRatingElement.textContent = selectedRating;

      ratingItems.forEach((item) => {
        item.classList.remove("selected");
      });

      item.classList.add("selected");

      submitBtn.disabled = false;
    });
  });

  const submitBtn = document.getElementById("submitBtn");
  submitBtn.addEventListener("click", () => {
    const selectedRating = selectedRatingElement.textContent;
    thankYouContainer.style.display = "block";
    ratingContainer.style.display = "none";
    document.getElementById("selectedRating").textContent = selectedRating;
  });

  backBtn.addEventListener("click", () => {
    ratingContainer.style.display = "block";
    thankYouContainer.style.display = "none";
  });
}

window.onload = setup;
