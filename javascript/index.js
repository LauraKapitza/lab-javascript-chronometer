const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  // call function printMinutes and printSeconds
  let min = printMinutes();
  let sec = printSeconds();

  minDec.innerHTML = "";
  minUni.innerHTML = "";

  secDec.innerHTML = "";
  secUni.innerHTML = "";
}

function printMinutes() {
  // get the minutes
  let min = chronometer.getMinutes();
  return chronometer.twoDigitsNumber(min); //'xx'

}

function printSeconds() {
  // get the seconds
  let sec = chronometergetSeconds();
  return chronometer.twoDigitsNumber(sec); //'xx'
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  chronometer.splitClick(); //'xx:xx'
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  //change btn from START to STOP
  btnLeft.innerHTML = "STOP";
  btnLeft.setAttribute("class", "btn stop");
  
}

function setSplitBtn() {
  //change btn from RESET to SPLIT
  btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
  //change btn from STOP to START
  btnLeft.innerHTML = "START";
  btnLeft.setAttribute("class", "btn start");
  btnRight.setAttribute("class", "btn split")
}

function setResetBtn() {
  //change btn from SPLIT to RESET
  btnRight.innerHTML = "RESET";
  btnRight.setAttribute("class", "btn reset")
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if(btnLeft.innerHTML == "START") {
    chronometer.startClick(printTime);
    btnLeft.setStopBtn();
  } else {
    chronometer.stopClick();
    btnLeft.setStartBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(btnRight.innerHTML == "SPLIT") {
    chronometer.splitClick();
    btnRight.setResetBtn();
  } else {
    chronometer.resetClick();
    btnRight.setResetBtn();
  }
});
