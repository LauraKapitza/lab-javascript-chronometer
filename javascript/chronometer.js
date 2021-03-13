class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
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
    let mm = this.twoDigitsNumber(this.getMinutes())
    let ss = this.twoDigitsNumber(this.getSeconds())
    return `${mm}:${ss}`;
  }
}
