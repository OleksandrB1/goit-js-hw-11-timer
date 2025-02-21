class CountdownTimer {

  constructor({ targetDate, selector }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.addDays = document.querySelector(this.selector).querySelector('[data-value="days"]')
    this.addHours = document.querySelector(this.selector).querySelector('[data-value="hours"]')
    this.addMins = document.querySelector(this.selector).querySelector('[data-value="mins"]')
    this.addSecs = document.querySelector(this.selector).querySelector('[data-value="secs"]')
    this.start()
  }
 
  start() {
      setInterval(() => {
          const currentTime = Date.now();
          const lastTime = this.targetDate.getTime() - currentTime;
          this.currentTimer(lastTime);
      }, 1000);
  }
  
  currentTimer(time) {
      this.addDays.textContent = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      this.addHours.textContent = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      this.addMins.textContent = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      this.addSecs.textContent = this.pad(Math.floor((time % (1000 * 60)) / 1000));
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

}
const timer1 = new CountdownTimer({
  selector: '#timer-1',
    targetDate: new Date('Jan 01, 2026'),
});

const timer2 = new CountdownTimer({
  selector: '#timer-2',
    targetDate: new Date('Feb 01, 2026'),
});
