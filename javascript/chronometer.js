class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    let chronometer = this;
    this.intervalId = setInterval(function() {
      chronometer.currentTime += 1;
      if (callback) callback()
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
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    let min = this.getMinutes()
    let sec = this.getSeconds()
    return `${('0'+min).slice(-2)}:${('0'+sec).slice(-2)}`;
  }
}
