document.addEventListener("DOMContentLoaded", () => {
  const selectedServiceId = localStorage.getItem("selectedServiceId");
  if (selectedServiceId) {
    const selectedService = document.querySelector(`#card-item[data-id="${selectedServiceId}"]`);
    console.log(selectedService);
    if (selectedService) {
      selectedService.classList.add('selected');
    } else {
      selectedService.classList.remove('selected');
    }
  }
})


function saveUserInfoAndRedirect(serviceInfo, selectedServiceId) {
  localStorage.setItem('serviceInfo', JSON.stringify(serviceInfo));
  localStorage.setItem('isServiceSelected', 'true');
  localStorage.setItem('selectedServiceId', selectedServiceId);
  window.location.href = 'datetime.html';
}


const serviceItems = document.querySelectorAll('#card-item');
const btn = document.getElementById("btn");
const warning_text = document.getElementById('alert-box');

serviceItems.forEach((serviceItem) => {
  serviceItem.addEventListener('click', () => {
    const selectedServiceInfo = {
      id: serviceItem.getAttribute('data-id'),
      service_name: serviceItem.getAttribute('data-serviceName'),
      servicePrice: serviceItem.getAttribute('data-servicePrice'),
    }
    saveUserInfoAndRedirect(selectedServiceInfo, selectedServiceInfo.id)
    
  })
})

btn.addEventListener('click', () => {
  if (localStorage.getItem('isServiceSelected') === 'true') {
    window.location.href = 'datetime.html';
  } else {
    warning_text.classList.add('show');
    setTimeout(() => warning_text.classList.remove('show'), 1800);
  }
})
