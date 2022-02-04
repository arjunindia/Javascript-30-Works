let a = document.querySelectorAll(".audio");
let b = document.querySelectorAll(".btn");
let c = [65, 83, 68, 70, 71, 72, 74, 75, 76];
let body = document.querySelector("body");
function timeout(ms) {
  return new Promise((res) => setTimeout(res, ms));
}
body.addEventListener("keydown", (e) => {
  if (c.includes(e.keyCode)) {
    let index = c.indexOf(e.keyCode);
    a[index].play();
    b[index].classList.add("active");
    b[index].disabled = true;
    timeout(a[index].duration * 1010).then(() => {
      b[index].classList.remove("active");
      b[index].disabled = false;
    });
  }
});
b.forEach((i, k) => {
  i.addEventListener("click", async function () {
    a[k].play();
    i.classList.add("active");
    i.disabled = true;
    timeout(a[k].duration * 1010).then(() => {
      i.classList.remove("active");
      i.disabled = false;
    });
  });
});
