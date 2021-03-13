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
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  // get the minutes
  let min = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerHTML = min[0];
  minUni.innerHTML = min[1];

}

function printSeconds() {
  // get the seconds
  let sec = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerHTML = sec[0];
  secUni.innerHTML = sec[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let splitTime = chronometer.splitClick(); //'xx:xx'
  console.log(splitTime)
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
  btnRight.setAttribute("class", "btn split")
}

function setStartBtn() {
  //change btn from STOP to START
  btnLeft.innerHTML = "START";
  btnLeft.setAttribute("class", "btn start");
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
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  switch (btnRight.innerHTML) {
    case 'SPLIT':
      chronometer.splitClick();
      break;
    case 'RESET':
      chronometer.resetClick();
      break;
  };
});
