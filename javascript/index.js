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

function clearTime() {
  clearMinutes();
  clearSeconds();
  clearMilliseconds();
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

}

function clearMinutes() {
  //clear minutes printed
  minDec.innerHTML = 0;
  minUni.innerHTML = 0;
}

function clearSeconds() {
  //clear seconds printed
  secDec.innerHTML = 0;
  secUni.innerHTML = 0;
}

function clearMilliseconds() {
  milDec.innerHTML = 0;
  milUni.innerHTML = 0;
}

function clearSplits() {
  let listItems = splits.querySelectorAll('li');
  listItems.forEach(li => {
    li.remove();
  })

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
    setStopBtn(); //change left btn to STOP 
    setSplitBtn(); // change right btn to SPLIT
  } else {
    chronometer.stopClick();
    setStartBtn(); //change left btn to START
    setResetBtn(); //change right btn to RESET
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  switch (btnRight.innerHTML) {
    case 'SPLIT':
      var splitTime = chronometer.splitClick(); //get the split time
      printSplit(splitTime); //printing the split time
      break;
    case 'RESET':
      chronometer.resetClick(); //reset the time
      clearTime(); //reset printed time
      clearSplits(); //reset splits printed
      break;
  };
});
