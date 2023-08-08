const btn = document.querySelector(".timer-btn");
const panel = document.querySelector(".wrapper__timer");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const input4 = document.getElementById("input4");

input2.addEventListener("keydown", (e) => {
  if (e.key === "Backspace" && input2.value === "") {
    input1.focus();
  }
});
input3.addEventListener("keydown", (e) => {
  if (e.key === "Backspace" && input3.value === "") {
    input2.focus();
  }
});

input4.addEventListener("keydown", (e) => {
  if (e.key === "Backspace" && input4.value === "") {
    input3.focus();
  }

  if (e.key === "Enter") {
    timer(`${input1.value}${input2.value}:${input3.value}${input4.value}`);
  }
});

input1.addEventListener("input", (e) => {
  if (e.target.value != "") {
    input2.focus();
  }
});
input2.addEventListener("input", (e) => {
  if (e.target.value != "") {
    input3.focus();
  }
});
input3.addEventListener("input", (e) => {
  console.log(e.key);
  if (e.target.value != "") {
    input4.focus();
  }

  if (e.target.value === "") {
  }
});

btn.addEventListener("click", (event) => {
  timer(`${input1.value}${input2.value}:${input3.value}${input4.value}`);
});

function timer(time) {
  if (time.length <= 5) {
    let minutes;
    let seconds;
    let totalTimeInSeconds;

    time = time.split(":");
    time.forEach((el, i) => {
      if (i === 0) {
        minutes = el;
      }
      if (i === 1) {
        seconds = el;
      }
    });

    minutes = minutes.split("");

    minutes[0] === "0" ? (minutes = minutes[1]) : (minutes = minutes.join(""));
    totalTimeInSeconds = Number(seconds) + Number(minutes) * 60;

    const interval = setInterval(() => {
      panel.innerHTML = `${minutes.length > 1 ? minutes : "0" + minutes}:${
        String(seconds).length > 1 ? seconds : "0" + seconds
      }`;
      totalTimeInSeconds = Number(totalTimeInSeconds) - 1;
      seconds = Number(seconds) - 1;
      if (seconds == 0 && minutes >= 1) {
        seconds = 60;
        minutes = minutes - 1;
      }
      if (totalTimeInSeconds === 0) {
        clearInterval(interval);

        panel.innerHTML = `<span style="color: white; text-align: center">Готово</span>`;
      }
    }, 1000);
  }
}
