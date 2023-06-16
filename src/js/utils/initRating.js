const NUMBER_OF_STARS = 10;

export default function initRatings() {
  const ratings = document.querySelectorAll('.rating');

  ratings.forEach(rating => {
    initRating(rating);
  });
}
function initRating(rating) {
  const ratingActive = rating.querySelector('.rating-active');
  const ratingValue = rating.querySelector('.rating-value');

  if (ratingValue) {
    setRatingActiveWidth(ratingActive, ratingValue.innerHTML);
  }
}

function setRatingActiveWidth(ratingActive, index) {
  const ratingActiveWidth = (index / NUMBER_OF_STARS) * 100;
  ratingActive.style.width = `${ratingActiveWidth}%`;
}
