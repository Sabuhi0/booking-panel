document.addEventListener('DOMContentLoaded', () => {
  const selectedCardId = localStorage.getItem('selectedStaffId');
  const selectedDate = localStorage.getItem('selectedDate');
  const bookingPanel = localStorage.getItem('BookingPanel');
  const menu_bars = document.querySelectorAll('#menu-bar');

  // App data
  if (bookingPanel) {
    appData = JSON.parse(bookingPanel);
    console.log(appData);
  }

  if (selectedCardId) {
    const selectedCard = document.querySelector(`#card-item[data-id="${selectedCardId}"]`);
    if (selectedCard) {
      selectedCard.classList.add('selected');
    }
    else {
      console.log('Selected card not found');
    }
  }
  if (!selectedCardId) {
    const menu_items = document.querySelectorAll('.router-disabled');
    menu_items.forEach((menu_item) => {
      menu_item.classList.add('pointer-events');
    });
    menu_bars.forEach((menu) => {
      menu.classList.add('cursor');
    })
  }
  if (!selectedDate) {
    const pages = document.querySelectorAll('.page-disabled');
    pages.forEach((page) => {
      page.classList.add('pointer-events');
    });
    menu_bars.forEach((menu) => {
      menu.classList.add('cursor');
    })
  }

  // Page Router
  const pageUrl = window.location.pathname;
  const pageName = pageUrl.split('/').pop();
  const menu_num = document.getElementById('menu_num');
  const menu_text = document.getElementById('menu_text');

  if (pageName !== '') {
    menu_num.classList.add('active-num')
    menu_text.classList.add('active-text')
  } else {
    menu_num.classList.remove('active-num')
    menu_text.classList.remove('active-text')
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
