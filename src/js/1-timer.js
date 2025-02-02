// Описаний в документації
//import flatpickr from "flatpickr";
// Додатковий імпорт стилів
//import "flatpickr/dist/flatpickr.min.css";
// Описаний у документації
//import iziToast from "izitoast";
// Додатковий імпорт стилів
//import "izitoast/dist/css/iziToast.min.css";
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
  btn.style.pointerEvents= "none"; //Забороняємо кликати по кнопці
  btn.style.opacity = "0.5";
  document.addEventListener("DOMContentLoaded", function () {
  // Получаем текущую дату и время в часовом поясе Украины
  const now = new Date();
      const formatter = new Intl.DateTimeFormat("uk-UA", {
        year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit",
        hour12: false, timeZone: "Europe/Kyiv",});
 
    const parts = formatter.formatToParts(now);
  // Собираем дату в нужном формате
  const day = parts.find(p => p.type === "day").value;
  const month = parts.find(p => p.type === "month").value;
  const year = parts.find(p => p.type === "year").value;
  const hour = parts.find(p => p.type === "hour").value;
  const minute = parts.find(p => p.type === "minute").value;

  const formattedDateTime = `${year}-${month}-${day} ${hour}:${minute}`;
  dateTimeInput.value = formattedDateTime; // Устанавливаем в input
});
//================================ Обираємо дату з календаря
let userSelectedDate;
let dateMs;
flatpickr("#datetime-picker", {
  enableTime: true, // Якщо потрібен вибір часу
  dateFormat: "Y-m-d H:i", // Формат дати
  minuteIncrement: 1,
  onClose: function(selectedDates) {
    if (selectedDates.length > 0) {
      const selectedDate = selectedDates[0]; // =========== Отримуємо першу обрану дату
    dateMs=selectedDate.getTime();
      const now = new Date(); // Поточна дата
        // Застосовуємо бібліотеку для повідомлення про помилково обрану дату
      if (selectedDate < now) {
          iziToast.error({
              title: 'Error',
              message: 'Please choose a date in the future!',
              position: 'topRight',
          });
        userSelectedDate = null; // Очищаємо значення
      } else {
        btn.style.pointerEvents= "auto"; //Включає активність кнопки
        btn.style.opacity = "1.0";//Знімаємо обмеження на колір
        userSelectedDate = selectedDate; // Зберігаємо обрану дату
        dateMs = userSelectedDate.getTime();
      }
    }
  }
});
// ======================= Змінним призначаємо елементи DOM
const daysNew = document.querySelector('span[data-days]');
const hoursNew = document.querySelector('span[data-hours]');
const minutesNew = document.querySelector('span[data-minutes]');
const secondsNew = document.querySelector('span[data-seconds]');
let result = 0;

//=============================Натискаємо кнопку
btn.addEventListener('click', () => { 
      dateTimeInput.style.pointerEvents= "none"; //Блокуємо input
      dateTimeInput.style.opacity = "0.5";
      let dateNew = Date.now();
      let intervalId=setInterval(() => {
        dateNew = Date.now();
        result = dateMs - dateNew;
      if (result === -1) { clearInterval(intervalId); }
          daysNew.textContent = `0${convertMs(result).days}`.slice(-3);   
          hoursNew.textContent = `0${convertMs(result).hours}`.slice(-2);
          minutesNew.textContent = `0${convertMs(result).minutes}`.slice(-2);
          secondsNew.textContent = `0${convertMs(result).seconds}`.slice(-2);    
      }, 1000);
  btn.style.pointerEvents= "none"; //Забороняємо кликати по кнопці
  btn.style.opacity = "0.5";
}  
)
//===============================Конвертуємо ms в дні години хвилини секунди
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour+2);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds};
}
