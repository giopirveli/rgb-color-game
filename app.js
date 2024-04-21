let easyBtn = document.querySelector("#easy");
let hardBtn = document.querySelector("#hard");
let startBtn = document.querySelector("#start");
let resultBtn = document.querySelector("#result");
let winningText = document.querySelector("h1");
let allBoxes = document.querySelectorAll(".colorDispley");
let section = document.querySelector("section");
let coins = document.querySelector('#coins')
let removElements = [];
let colorList = [];
let indicator = "";
let indi = true;
let startEasyOrHard = false;


function fillArray(quantity) {
  for (let i = 0; i < quantity; i++) {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    let rgb = `rgb(${r}, ${g}, ${b})`;
    colorList.push(rgb);
  }
}
function getRandomRgb(list) {
  let randIndex = Math.round(Math.random() * (list.length - 1));
  return list[randIndex];
}

startBtn.addEventListener("click", function () {
  if (indicator == "hard") {
    hardGame();
  } else if (indicator == "easy") {
    easyGame();
  } else {
    alert("Please select a mode");
  }
});

function getReady() {
  resultBtn.innerText = "result";
  resultBtn.classList.remove("success");
  resultBtn.classList.remove("error");
  allBoxes.forEach((div) => {
    div.style.opacity = "1";
  });
}


let counter = 0
function howManyWin(){
for(let i = 0; i < 10;i++){
  counter++
}
}
function divsClick() {
  let counterr = 0;


function howManyluse(){
  counterr++
}
  for (let i = 0; i < allBoxes.length; i++) {
    allBoxes[i].style.opacity = "1";
    allBoxes[i].style.backgroundColor = colorList.pop();
    allBoxes[i].addEventListener("click", function () {
      if (gameLogic == true) {
        if (allBoxes[i].style.backgroundColor == winningText.innerText) {
          resultBtn.innerText = "Success";
          resultBtn.classList.remove("error");
          resultBtn.classList.add("success");
          for (let i = 0; i < allBoxes.length; i++) {
            allBoxes[i].style.backgroundColor = winningText.innerText;
            allBoxes[i].style.opacity = "1";
          }
          howManyWin()
          coins.textContent = counter
          console.log(counter)
          console.log(counterr+'ramdeni ver gamovicani' )
          gameLogic = false;
        }
else if(counterr === 3 ){
  for(let i = 0 ; i< 5;i++){
    counter--
  }
  coins.textContent = counter;
  gameLogic = false
  alert('gacherda')
}
        else{
          resultBtn.innerText = "Error";
          resultBtn.classList.add("error");
          allBoxes[i].style.opacity = "0.5";
          howManyluse()
          console.log( counterr+' else ver gamoicani')
        }
      }
    });
  }
}
// importent
function hardGame() {
  gameLogic = true;
  fillArray(allBoxes.length);
  getReady();
  winningText.innerText = getRandomRgb(colorList);
  divsClick();
}

// importent
function easyGame() { 
  gameLogic = true;
  fillArray(allBoxes.length);
  getReady();
  winningText.innerText = getRandomRgb(colorList);
  divsClick();
}




// hard
function hardMode() {
  allBoxes = Array.from(document.querySelectorAll(".colorDispley"));
  allBoxes.forEach((div) => {
    div.style.backgroundColor = "steelblue";
  });
  getReady();
  for (let i = 0; i < 3; i++) {
    allBoxes[i].style.display = "block";
    removElements.pop();
  }
  allBoxes = allBoxes.concat(removElements);
}
// easy
function easyMode() {
  allBoxes = Array.from(document.querySelectorAll(".colorDispley"));
  allBoxes.forEach((div) => {
    div.style.backgroundColor = "steelblue";
  });
  for (let i = 0; i < 3; i++) {
    allBoxes[i].style.display = "none";
  }
  getReady();
  for (let i = 0; i < 3; i++) {
    removElements.push(allBoxes.shift());
    removElements.pop();
  }
}
//buttons
easyBtn.addEventListener("click", function () {
  if (indi === true) {
    indicator = "easy";
    hardBtn.classList.remove("Chosen");
    easyBtn.classList.add("Chosen");
    easyMode();
    startEasyOrHard = true;
    
  }
});
hardBtn.addEventListener("click", function () {
  indicator = "hard";
  easyBtn.classList.remove("Chosen");
  hardBtn.classList.add("Chosen");
  hardMode();
});
