import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

//================Задаємо стилі
const head = document.head;
const style = document.createElement('style');
style.innerHTML = `span{
            font-size: 20px;
        }
        [data-days],[data-hours],[data-minutes],[data-seconds]{
            font-size: 40px;
        }
        .field{
            display: flex;
            flex-direction: column;
            margin-right: 20px;
            text-align: center;
        }        
        .label{
            text-transform: uppercase;
            font-size: 14px;
        }
        button{
          font-size: 18px;
        }
        #datetime-picker{
          font-size: 18px;
          margin-bottom: 20px;
        }
        .timer{
          display: flex;
        }
        .field{
          display: flex;
          flex-direction = "column";
        }
        `
  ;
head.appendChild(style);
//=========================================

const dateTimeInput = document.getElementById("datetime-picker");
const btn = document.querySelector('button[data-start]');//Кнопка
btn.style.pointerEvents = "none"; //Забороняємо кликати по кнопці
btn.style.opacity = "0.5";

document.addEventListener("DOMContentLoaded", function () {
  // Отримуємо поточну дату і час в годинниковому поясі Украини
  const now = new Date();  
  const formattedDateTime = now.toISOString().slice(0, 16).replace("T", " ");
  dateTimeInput.value = formattedDateTime;
});
let dateMs;
flatpickr("#datetime-picker", {
  enableTime: true,
  time_24hr: true, 
  dateFormat: "Y-m-d H:i", 
  minuteIncrement: 1,
  defaultDate: new Date(),
  minDate: "today",
  onClose: function(selectedDates) {
    if (selectedDates.length > 0) {
      const selectedDate = selectedDates[0]; 
      dateMs = selectedDate.getTime();
      if (selectedDate < new Date()) {
        iziToast.error({
          title: 'Помилка',
          message: 'Оберіть дату у майбутньому!',
          position: 'topRight',
        });
        dateTimeInput.value = ""; 
        btn.style.pointerEvents = "none"; 
        btn.style.opacity = "0.5";
      } else {
        btn.style.pointerEvents = "auto"; 
        btn.style.opacity = "1.0";
      }
    }
  }
});
const daysNew = document.querySelector('span[data-days]');
const hoursNew = document.querySelector('span[data-hours]');
const minutesNew = document.querySelector('span[data-minutes]');
const secondsNew = document.querySelector('span[data-seconds]');
//Натискаємо кнопку Старт
btn.addEventListener('click', () => { 
  dateTimeInput.style.pointerEvents = "none";
  dateTimeInput.style.opacity = "0.5";
  let intervalId = setInterval(() => {
    let result = dateMs - Date.now();
    if (result <= 0) { 
      clearInterval(intervalId);
      daysNew.textContent = "00";    
      hoursNew.textContent = "00";
      minutesNew.textContent = "00";
      secondsNew.textContent = "00";
      dateTimeInput.style.pointerEvents = "auto"; 
      dateTimeInput.style.opacity = "1.0";
      btn.style.pointerEvents = "auto";
      btn.style.opacity = "1.0";
      return;
    }
    //Конвертуємо мілісекунди
    const time = convertMs(result);
    daysNew.textContent = `0${time.days}`.slice(-3);   
    hoursNew.textContent = `0${time.hours}`.slice(-2);
    minutesNew.textContent = `0${time.minutes}`.slice(-2);
    secondsNew.textContent = `0${time.seconds}`.slice(-2);
  }, 1000);
  btn.style.pointerEvents = "none"; //Робимо кнопку неактивною 
  btn.style.opacity = "0.5";
});

function convertMs(ms) {
  const second = 1000, minute = second * 60, hour = minute * 60, day = hour * 24;
  return {
    days: Math.floor(ms / day),
    hours: Math.floor((ms % day) / hour),
    minutes: Math.floor(((ms % day) % hour) / minute),
    seconds: Math.floor((((ms % day) % hour) % minute) / second)
  };
}
