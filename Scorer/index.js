const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");
const button3 = document.getElementById("btn3");
const button4 = document.getElementById("btn4");
const button5 = document.getElementById("btn5");
const button6 = document.getElementById("btn6");
let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2");
let reset = document.getElementById("reset");
let counter = 0;
let counter2 = 0;

reset.addEventListener("click", (e) => {
  e.preventDefault();
  counter = 0;
  counter2= 0
  score1.innerText = counter;
  score2.innerText = counter2;
});

button1.addEventListener("click", (e) => {
  e.preventDefault();
  score1.innerText = ++counter;
});

button2.addEventListener("click", (e) => {
  e.preventDefault();
  counter += 2;
  score1.innerText = counter;
});

button3.addEventListener("click", (e) => {
  e.preventDefault();
  counter += 3
  score1.innerText = counter;
});

button4.addEventListener("click", (e) => {
  e.preventDefault();
  counter2 += 1;
  score2.innerText = counter2;
});

button5.addEventListener("click", (e) => {
  e.preventDefault();
  counter2 += 2;
  score2.innerText = counter2;
});

button6.addEventListener("click", (e) => {
  e.preventDefault();
  counter2 += 3;
  score2.innerText = counter2;
});
