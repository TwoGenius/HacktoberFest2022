const hex = document.querySelector(".hex");
const btn = document.querySelector(".generate");
const count = document.querySelector(".count");

const generateColor = () => {
  const randomColor = Math.random().toString(16).substring(2, 8);
  document.body.style.backgroundColor = "#" + randomColor;
  hex.innerHTML = "#" + randomColor;
  count.style.color = "#" + randomColor;
};

btn.addEventListener("click", generateColor);
generateColor();

// let color = Math.random();
// color = Math.random().toString(16);
// color = Math.random().toString(16).substring(2, 8);

// console.log(color);
