const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

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
  let password1 = arrSelector(characters);
  let password2 = arrSelector(characters);
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

if (password1Box.textContent) {
  console.log('this works!')
}