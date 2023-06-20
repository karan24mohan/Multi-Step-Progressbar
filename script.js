const circles = document.querySelectorAll(".circle");
const buttons = document.querySelectorAll("button");
const contents = document.querySelectorAll(".content");
const submit = document.getElementById("submit");
let indicator = document.querySelector(".progressBar .indicator");

let currentStep = 0;

buttons.forEach((button, index) => {
  button.addEventListener("click", updateSteps);
});

function updateSteps(e) {
  currentStep = e.target.id === "next" ? ++currentStep : --currentStep;

  circles.forEach((circle, index) => {
    if (index < currentStep) {
      circle.classList.add("active");
      circle.innerHTML = `✅`;
    } else {
      circle.classList.remove("active");
      circle.innerHTML = index + 1;
    }
    // circle.classList[`${index < currentStep ? "add" : "remove"}`]("active");
  });
  // circles[currentStep - 1].innerHTML = `✅`;

  const progressActive = document.querySelectorAll(".circle.active");
  indicator.style.width = `${
    ((progressActive.length - 1) / (circles.length - 1)) * 100
  }%`;

  contents.forEach((content, index) => {
    if (content.classList.contains("active")) {
      content.classList.remove("active");
    }
  });
  contents[currentStep].classList.add("active");

  if (currentStep === circles.length - 1) {
    buttons[1].disabled = true;
    buttons[1].style.display = "none";
    submit.style.display = "inline";
  } else if (currentStep === 0) {
    buttons[0].disabled = true;
  } else {
    buttons.forEach((button) => (button.disabled = false));
    buttons[1].style.display = "inline";
    submit.style.display = "none";
  }
}
