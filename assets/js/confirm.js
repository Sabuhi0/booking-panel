document.addEventListener('DOMContentLoaded', () => {

  // Page Route
  const pageUrl = window.location.pathname;
  const pageName = pageUrl.split('/').pop();
  console.log(pageName);
  const menu_nums = document.querySelectorAll('#menu_num');
  const menu_texts = document.querySelectorAll('#menu_text');
  const confirm_menu_num = document.getElementById('confirm_menu_num');
  const confirm_menu_text = document.getElementById('confirm_menu_text');
  if (pageName === 'confirm.html') {
    menu_nums.forEach((menu_num) => {
      menu_num.classList.add('active-purple')
      menu_num.innerHTML = '<i class="fa-solid fa-check"></i>';
    })
    menu_texts.forEach((menu_text) => {
      menu_text.classList.add('active-white')
    })
    confirm_menu_num.classList.add('active-num')
    confirm_menu_text.classList.add('active-text')
  }

  const staffInfo = JSON.parse(localStorage.getItem('staffInfo'));
  const serviceInfo = JSON.parse(localStorage.getItem('serviceInfo'));
  const date = JSON.parse(localStorage.getItem('selectedDate'));
  const time = JSON.parse(localStorage.getItem('selectedTime'));

  if (staffInfo && serviceInfo && date && time) {
    const userInfoDiv = document.getElementById('userInfo');
    userInfoDiv.innerHTML = `
    <h1>Staff: <span>${staffInfo.name} ${staffInfo.surname}</span></h1>
    <h1>Service: <span> ${serviceInfo.service_name}</span></h1>
    <h1>Date: <span> ${date.year}-${date.month}-${date.day} / ${time.time}-${time.endTime}</span></h1>
    <h1 class="d-flex">Total: <p> ${serviceInfo.servicePrice}</p></h1>
    `;
  } else {
    // window.location.href.split(' ') ? window.location.href = "http://127.0.0.1:5500/index.html" : "";
  }
  const submitBtn = document.getElementById('btn');
  const modal = document.getElementById('modal');
  const closeModal = document.getElementById('closeModal');

  submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const formData = { name, surname, email };

    const dataToSave = {
      DATA: {
        name: formData.name,
        surname: formData.surname,
        email: formData.email,
        date: `${date.day}-${date.month}-${date.year}`,
        service_id: serviceInfo.id,
        staff_id: staffInfo.id,
        time: time.time
      }
    };

    localStorage.setItem('BookingPanel', JSON.stringify(dataToSave));

    if (!name || !email || !phone || !surname) {
      showModal('Please, fill all required fields!');
      modal.style.color = '#f9a100'
    } else {
      showModal('Confirmation successfully completed!');
      modal.style.color = '#4FBF65'

      setTimeout(() => {
        localStorage.removeItem('staffInfo');
        localStorage.removeItem('serviceInfo');
        localStorage.removeItem('selectedDate');
        localStorage.removeItem('selectedTime');
        localStorage.removeItem('isServiceSelected');
        localStorage.removeItem('selectedServiceId');
        localStorage.removeItem('selectedStaffId');
        localStorage.removeItem('isStaffSelected');
        window.location.href = '/index.html';
      }, 1600);
    }
  });

  function showModal(message) {
    modal.querySelector('.modal-body').textContent = message;
    modal.style.opacity = '1';
    modal.style.zIndex = '1';
  }

  closeModal.addEventListener('click', () => {
    modal.style.opacity = '0';
    modal.style.zIndex = '-1';
  });

});