let button = document.querySelector(".but");
let passOne = document.querySelector(".pass1");
let passTwo = document.querySelector(".pass2");
let alet = document.querySelector(".alert");
let passwordg = false
let complete = false
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U"
,"V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
 "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}",
 "]",",","|",":",";","<",">",".","?","/"
];
function generate(){
  if(passOne.textContent.length < 15 && passOne.textContent.length < 15){
    check()
  }
  alet.textContent = "Your passwords has been generated"
  // aleut()
  // console.log(passOne.textContent)
}
function check(){
  for (let i = 0; i < 15; i++) {
    let num = (Math.floor(Math.random() * characters.length) + 1);
    passOne.textContent += characters[num]
  }
  for (let i = 0; i < 15; i++) {
    let num = (Math.floor(Math.random() * characters.length) + 1);
    passTwo.textContent += characters[num]
  }
}
// function aleut(){
//   setTimeout(
//   alet.textContent = "Your passwords has been generated", 3000)
// }
