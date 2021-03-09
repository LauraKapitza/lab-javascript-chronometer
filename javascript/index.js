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
  
}

function setSplitBtn() {
  // ... your code goes here
  chronometer.splitClick(printTime);
}

function setStartBtn() {
  // ... your code goes here
  chronometer.startClick(printTime);
}

function setResetBtn() {
  // ... your code goes here
  chronometer.resetClick();
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  //change btn from START to STOP
  //chronometer.startClick(printTime);
  console.log('NOOOOOOOO')
  btnLeft.innerHTML = "STOP";
  btnLeft.setAttribute("class", "btn stop");

//change btn from STOP to START
  //chronometer.stopClick(printTime);
  //btnLeft.innerHTML = "START";
  //btnLeft.setAttribute("class", "btn start");
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  //change btn from RESET to SPLIT
  //chronometer.splitClick(printTime);
  btnRight.innerHTML = "SPLIT";
  btnRight.setAttribute("class", "btn split")

  //change btn from SPLIT to RESET
  //chronometer.resetClick(printTime);
  btnRight.innerHTML = "RESET";
  btnRight.setAttribute("class", "btn reset")
});
