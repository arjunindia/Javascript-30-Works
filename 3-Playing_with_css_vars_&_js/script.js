let html = document.querySelector(":root");
let sp = document.querySelectorAll("input");
console.log(sp);
function setVar(a, b, c) {
  html.style.setProperty("--spacing", a);
  html.style.setProperty("--blur", b);
  html.style.setProperty("--base-color", c);
}
sp.forEach(function (e) {
  e.addEventListener("change", function () {
    setVar(`${sp[0].value}px`, `${sp[1].value}px`, `${sp[2].value}`);
  });
  html.addEventListener("mousemove", function () {
    setVar(`${sp[0].value}px`, `${sp[1].value}px`, `${sp[2].value}`);
  });
});

// document.querySelector(".controls").addEventListener("click", function (e) {
//   setVar(`${sp.value}px`, `${bl.value}px`, `${bg.value}`);
// });
