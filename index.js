let charArray = ["!", "#", "$", "%", "&",  "(", ")", "*", "+", ",", "-", ".", "/", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "<", "=", ">", "?", "@", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "^", "_", "`", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "{", "|", "}", "~"]

let passOne = '';
let passTwo = '';
let passThree = '';
let passFour = '';
let passLength = null;
let isPassGenerated = false;

let pass1 = document.querySelector("#pass1");
let pass2 = document.querySelector("#pass2");
let pass3 = document.querySelector("#pass3");
let pass4 = document.querySelector("#pass4");
  
function buttonPressed(){
    if(isPassGenerated === false){  
            passLength = document.getElementById("passLenght").value;
            generatePassword();  
    }
    pass1.textContent = passOne;
    pass2.textContent = passTwo;
    pass3.textContent = passThree;
    pass4.textContent = passFour;
    passOne = '';
    passTwo = '';
    passThree = '';
    passFour = '';
}

function generatePassword() {   
  for(let i = 0; i < passLength; i++){
      passOne+= charArray[Math.floor(Math.random()*charArray.length)];
      passTwo+= charArray[Math.floor(Math.random()*charArray.length)];
      passThree+= charArray[Math.floor(Math.random()*charArray.length)];
      passFour+= charArray[Math.floor(Math.random()*charArray.length)];
  }
}

