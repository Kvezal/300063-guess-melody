const getTimer = (time) => {
  const timer = {
    state: false,
    minutes: 0,
    seconds: 0,

    tick: () => {
      --time;

      timer.minutes = Math.trunc(time / 60);
      timer.seconds = time % 60;

      if (time <= 0) {
        window.clearInterval(timerId);
        timer.state = true;
      }
    }
  };

  let timerId = window.setInterval(timer.tick, 1000);

  return timer;
};

export default getTimer;
