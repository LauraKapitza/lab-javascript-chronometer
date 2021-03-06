class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    let chronometer = this;
    setInterval(function() {
      chronometer.currentTime += 1;
    }, 1000)
  }
  getMinutes() {
    return Math.trunc(this.currentTime/60);
  }
  getSeconds() {
    return this.currentTime % 60;
  }
  twoDigitsNumber(value) {
    return ('0'+value).slice(-2);
  }
  stopClick() {
    // ... your code goes here
  }
  resetClick() {
    // ... your code goes here
  }
  splitClick() {
    // ... your code goes here
  }
}
