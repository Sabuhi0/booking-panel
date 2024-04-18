let currentMonth = 4;
let currentYear = 2024;
const specialDays = [25, 26, 27];


document.getElementById('prev-month').addEventListener('click', () => {
  changeMonth(-1);
});

document.getElementById('next-month').addEventListener('click', () => {
  changeMonth(1);
});

function changeMonth(change) {
  currentMonth += change;
  if (currentMonth > 12) {
    currentMonth = 1;
    currentYear++;
  } else if (currentMonth < 1) {
    currentMonth = 12;
    currentYear--;
  }
  updateCalendar();
}

const updateCalendar = () => {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  document.getElementById('month-year').textContent = `${monthNames[currentMonth - 1]} ${currentYear}`;
  loadDays(currentMonth, currentYear);
}

const loadDays = (month, year) => {
  const daysContainer = document.getElementById('days-container');
  daysContainer.innerHTML = '';
  const daysInMonth = new Date(year, month, 0).getDate();
  for (let day = 1; day <= daysInMonth; day++) {
    const dayButton = document.createElement('button');
    dayButton.textContent = day;
    if (specialDays.includes(day)) {
      dayButton.classList.add('special-day');
    }
    dayButton.addEventListener('click', () => selectDay(day, month, year));
    daysContainer.appendChild(dayButton);
  }
}
const selectDay = (day, month, year) => {
  const selectDateText = document.getElementById('selected-date');
  const timeSlotsContainer = document.getElementById('time-slots');
  timeSlotsContainer.innerHTML = '';

  if (specialDays.includes(day)) {
    selectDateText.textContent = `${year}-${('0' + month).slice(-2)}-${('0' + day).slice(-2)}`;
    const startTimes = ['09:00', '09:30', '10:00', '10:30'];
    startTimes.forEach((time, index) => {
      const endTime = startTimes[index + 1];
      if (endTime) {
        const timeButton = document.createElement('button');
        timeButton.innerHTML = `<span>${time}</span> <span>${endTime}</span>`;
        timeButton.addEventListener('click', () => {
          console.log(`Selected day: ${day}, time: ${time} to ${endTime}`);
          localStorage.setItem('reservation', JSON.stringify({ day, time, endTime }));
          window.location.href = 'confirm.html';
        });
        timeSlotsContainer.appendChild(timeButton);
      }
    });
    timeSlotsContainer.style.display = 'block';
  } else {
    selectDateText.textContent = "Select date";
  }
}

updateCalendar();

const btn = document.getElementById("btn");
const warning_text = document.getElementById('alert-box');

btn.addEventListener('click', () => {
  if (localStorage.getItem('reservation')) {
    window.location.href = 'confirm.html';
  } else {
    warning_text.classList.add('show');
    setTimeout(() => warning_text.classList.remove('show'), 1800);
  }
});

