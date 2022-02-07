const panels = document.querySelectorAll(".panel");

function togglePanels() {
  this.classList.toggle("open");
}
function toggleAct(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("active");
  }
}
panels.forEach((panel) => panel.addEventListener("click", togglePanels));
panels.forEach((panel) => panel.addEventListener("transitionend", toggleAct));
