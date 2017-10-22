const getTimer = (time) => {
  return {
    state: false,
    time,

    tick() {
      --this.time;

      let minutes = Math.trunc(this.time / 60);
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }

      let seconds = this.time % 60;
      if (seconds < 10) {
        seconds = `0${seconds}`;
      }

      this.minutes = minutes;
      this.seconds = seconds;

      if (this.time <= 0) {
        window.clearInterval(this.id);
        this.state = true;
      }
    }
  };
};

export default getTimer;
