//selectors
const checkboxEl = document.querySelector("input");
const circleEls = document.getElementsByClassName("animation");

function addAnimation() {
  console.log(checkboxEl.checked);
  if (checkboxEl.checked) {
    for (let i = 0; i < circleEls.length; i++) {
      circleEls[i].classList.add(`start${i + 1}`);
    }
  } else {
    for (let i = 0; i < circleEls.length; i++) {
      circleEls[i].classList.remove(`start${i + 1}`);
    }
  }
}

//event listerners && triggers
checkboxEl.addEventListener("change", addAnimation);
