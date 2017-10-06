const timer = (time) => {
  const timerObject = {
    state: false,
    minutes: 0,
    seconds: 0,

    tick: () => {
      --time;

      timer._minutes = Math.trunc(time / 60);
      timer._seconds = time % 60;

      if (time <= 0) {
        window.clearInterval(timerId);
        timerObject.state = true;
      }
    }
  };

  let timerId = window.setInterval(timerObject.tick, 1000);

  return timerObject;
};

export default timer;
