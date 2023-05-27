const timer = (selector, endDate) => {
  const timer = document.querySelector(selector);
  const seconds = timer.querySelector("#seconds");
  const minutes = timer.querySelector("#minutes");
  const hours = timer.querySelector("#hours");
  const days = timer.querySelector("#days");

  const countTime = () => {
    const total = Date.parse(endDate) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / (1000 * 60)) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const updateTimer = () => {
    const interval = setInterval(setTimer, 1000);
    setTimer();

    function setTimer() {
      const time = countTime();
      seconds.textContent = addZero(time.seconds);
      minutes.textContent = addZero(time.minutes);
      hours.textContent = addZero(time.hours);
      days.textContent = addZero(time.days);
      if (time.total <= 0) {
        seconds.textContent = "00";
        minutes.textContent = "00";
        hours.textContent = "00";
        days.textContent = "00";
        clearInterval(interval);
      }
    }
  };

  const addZero = (num) => {
    if (num <= 9) {
      return "0" + num;
    } else {
      return num;
    }
  };

  updateTimer();
};
export default timer;
