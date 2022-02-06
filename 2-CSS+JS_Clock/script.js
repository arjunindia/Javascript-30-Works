function rAngle() {
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  return [h * 30 + m * 0.5 + 90, m * 6 + 90, s * 6 + 90];
}

setInterval(() => {
  let angle = rAngle();
  if (angle[2] == 90) {
    document.querySelector(".hand").style.transition = "none";
  } else {
    document.querySelector(".hand").style.transition =
      "transform 0.5s cubic-bezier(0.19, 1, 0.22, 1)";
  }
  document.querySelector(
    ".hour-hand"
  ).style.transform = `rotate(${angle[0]}deg)`;
  document.querySelector(
    ".minute-hand"
  ).style.transform = `rotate(${angle[1]}deg)`;

  document.querySelector(
    ".second-hand"
  ).style.transform = `rotate(${angle[2]}deg)`;
}, 100);
