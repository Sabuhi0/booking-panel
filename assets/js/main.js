document.addEventListener('DOMContentLoaded', () => {
  const selectedCardId = localStorage.getItem('selectedStaffId');
  if (selectedCardId) {
    const selectedCard = document.querySelector(`#card-item[data-id="${selectedCardId}"]`);
    if (selectedCard) {
      selectedCard.classList.add('selected');
    }
    else {
      console.log('Selected card not found');
    }
  }
});

const staffItems = document.querySelectorAll('#card-item');
const btn = document.getElementById("btn");
const warning_text = document.getElementById('alert-box');

function saveUserInfoAndRedirect(staffInfo, selectedStaffId) {
  localStorage.setItem('staffInfo', JSON.stringify(staffInfo));
  localStorage.setItem('isStaffSelected', 'true');
  localStorage.setItem('selectedStaffId', selectedStaffId);
  window.location.href = 'pages/service.html';
}

staffItems.forEach((staffItem) => {
  staffItem.addEventListener('click', () => {
    const selectedStaffInfo = {
      id: staffItem.getAttribute('data-id'),
      name: staffItem.getAttribute('data-name'),
      surname: staffItem.getAttribute('data-surname'),
    };
    saveUserInfoAndRedirect(selectedStaffInfo, staffItem.getAttribute('data-id'));
  });
});

btn.addEventListener('click', () => {
  if (localStorage.getItem('isStaffSelected') === 'true') {
    window.location.href = 'pages/service.html';
  } else {
    warning_text.classList.add("show");
    setTimeout(() => warning_text.classList.remove("show"), 1800);
  }
});
