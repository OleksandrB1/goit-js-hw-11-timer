const refs = {
  addDays: document.querySelector('[data-value="days"]'),
  addHours: document.querySelector('[data-value="hours"]'),
  addMins: document.querySelector('[data-value="mins"]'),
  addSecs: document.querySelector('[data-value="secs"]'),
};
class CountdownTimer {
    constructor({ targetDate, selector }) {
        this.selector = selector;
        this.targetDate = targetDate;
    }
    start() {
        setInterval(() => {
            const currentTime = Date.now();
            const lastTime = this.targetDate.getTime() - currentTime;
            this.addClockElement(this.currentTimer(lastTime));
        }, 1000);
    }
    currentTimer(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        return { days, hours, mins, secs };
    }
      pad(value) {
    return String(value).padStart(2, '0');
    }
    addClockElement({ days, hours, mins, secs }) {
    refs.addDays.textContent = `${days}`;
    refs.addHours.textContent = `${hours}`;
    refs.addMins.textContent = `${mins}`;
    refs.addSecs.textContent = `${secs}`;
    } 
}
const timer = new CountdownTimer({
  selector: '#timer-1',
    targetDate: new Date('Aug 23, 2021'),
});
  
timer.start();