document.addEventListener('DOMContentLoaded', () => {
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
    window.location.href.split(' ') ? window.location.href = "http://127.0.0.1:5500/index.html" : "";
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

const checkFormFields = () => {
  const name = document.getElementById('inputName').value.trim();
  const surname = document.getElementById('inputSurname').value.trim();
  const email = document.getElementById('inputEmail').value.trim();
  const phone = document.getElementById('inputPhone').value.trim();

  return name && surname && email && phone;
}