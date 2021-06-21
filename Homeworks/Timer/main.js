const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const restart = document.querySelector(".restart");
let out = document.querySelector(".out");
let time = [];

start.addEventListener("click", () => {  
  let input = document.querySelectorAll(".input");
  input.forEach((el) => {
    time.push(Number(el.value));
  });
  const int = setInterval(() => {
    let [hour, minut, second] = time;
    out.innerHTML = `${hour}:${minut}:${second}`;

    if (hour <= 0 && minut <= 0 && second <= 0) {
      clearInterval(int);
      return;
    } else if (!minut && !second) {
      hour--;
      minut = 59;
      second = 59;
    } else if (!second) {
      minut--;
      second = 59;
    } else second--;

    time = [hour, minut, second];

    pause.addEventListener("click", () => {
      
      clearInterval(int);
    });

    restart.addEventListener("click", () => {
      time = [];
      input.forEach((el) => {
        time.push(Number(el.value));
      });
    });
  }, 1000);
});
