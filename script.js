const dots = document.querySelectorAll(".dot-container button");
const images = document.querySelectorAll(".image-container img");

let i = 0;
let j = 4;

function next() {
  document.getElementById("content" + (i + 1)).classList.remove("active");
  i = (j + i + 1) % j;
  document.getElementById("content" + (i + 1)).classList.add("active");
  indicator(i + 1);
}

function prev() {
  document.getElementById("content" + (i + 1)).classList.remove("active");
  i = (j + i - 1) % j;
  document.getElementById("content" + (i + 1)).classList.add("active");
  indicator(i + 1);
}