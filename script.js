const intro = document.querySelector("#intro");
const surprise = document.querySelector("#surprise");
const surpriseButton = document.querySelector("#surpriseButton");
const resetButton = document.querySelector("#resetButton");

function showSurprise() {
  intro.hidden = true;
  surprise.hidden = false;
  surprise.classList.remove("reveal");

  requestAnimationFrame(() => {
    surprise.classList.add("reveal");
  });
}

function resetSurprise() {
  surprise.hidden = true;
  surprise.classList.remove("reveal");
  intro.hidden = false;
  surpriseButton.focus();
}

surpriseButton.addEventListener("click", showSurprise);
resetButton.addEventListener("click", resetSurprise);
