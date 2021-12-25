const viewportEl = document.getElementById("viewport");
const containerEl = document.getElementById("container");
const layoutEl = document.querySelector(".layout");

viewportEl.innerText = `Viewport Width: ${window.innerWidth}px`;
containerEl.innerText = `Container Width: ${layoutEl.offsetWidth}px`;

window.addEventListener("resize", function () {
  viewportEl.innerText = `Viewport Width: ${window.innerWidth}px`;
  containerEl.innerText = `Container Width: ${layoutEl.offsetWidth}px`;
});
