const intro = document.querySelector("#intro");
const surprise = document.querySelector("#surprise");
const finale = document.querySelector("#finale");
const surpriseButton = document.querySelector("#surpriseButton");
const continueButton = document.querySelector("#continueButton");

function showSurprise() {
  intro.hidden = true;
  finale.hidden = true;
  finale.classList.remove("reveal");
  surprise.hidden = false;
  surprise.classList.remove("reveal");

  requestAnimationFrame(() => {
    surprise.classList.add("reveal");
  });
}

function showFinale() {
  surprise.hidden = true;
  surprise.classList.remove("reveal");
  finale.hidden = false;
  finale.classList.remove("reveal");

  requestAnimationFrame(() => {
    finale.classList.add("reveal");
  });
}

surpriseButton.addEventListener("click", showSurprise);
continueButton.addEventListener("click", showFinale);
