
// buttonEl.addEventListener("click", () => {
//   const color = getRandomHexColor();
//   document.body.style.backgroundColor = color;
//   colorBody.textContent = color;

// });


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}