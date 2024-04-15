document.addEventListener('DOMContentLoaded', function () {
  let currentDate = new Date();
  const calendar = document.getElementById('calendar');
  const monthYearLabel = document.getElementById('monthYear');

  function updateCalendar(date) {
    calendar.innerHTML = ''; // Takvimi temizle
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();
    const numDays = new Date(currentYear, currentMonth + 1, 0).getDate();

    for (let day = 1; day <= numDays; day++) {
      const calendar_box = document.createElement('div');
      calendar_box.textContent = day;
      calendar.appendChild(calendar_box);
    }

    monthYearLabel.textContent = date.toLocaleString('en', { month: 'long', year: 'numeric' });
  }

  document.getElementById('prevMonth').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendar(currentDate);
  });

  document.getElementById('nextMonth').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendar(currentDate);
  });

  updateCalendar(currentDate); 
});
