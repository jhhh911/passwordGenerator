import { fullArray } from "/arrays.js";

let passwordLength = document.getElementById("myDropdown");

let loopLength;

passwordLength.onclick = function () {
  loopLength = passwordLength.value;
  return loopLength;
};

function random(arr) {
  return Math.floor(Math.random() * arr.length);
}

function arrSelector(arr) {
  let retArr = [];
  for (let i = 0; i < loopLength; i++) {
    let randomArr = arr[random(arr)];
    let chosenArr = randomArr[random(randomArr)];
    let chosenChar = chosenArr[random(chosenArr)];
    retArr.push(chosenChar);
  }
  return retArr;
}

let generate = document.getElementById("password-generator");
let password1Box = document.getElementById("password1");
let password2Box = document.getElementById("password2");

generate.onclick = function () {
  let password1 = arrSelector(fullArray);
  let password2 = arrSelector(fullArray);
  password1Box.textContent = password1.join("");
  password2Box.textContent = password2.join("");
};

password1Box.onclick = function () {
  navigator.clipboard.writeText(password1Box.innerText);
  alert("password copied to clipboard");
};

password2Box.onclick = function () {
  navigator.clipboard.writeText(password2Box.innerText);
  alert("password copied to clipboard");
};

