document.addEventListener("DOMContentLoaded", () => {
  const selectedServiceId = localStorage.getItem("selectedServiceId");
  const menu_bars = document.querySelectorAll('#menu-bar');
  const booking_panel = localStorage.getItem('BookingPanel');

  if (selectedServiceId) {
    const selectedService = document.querySelector(`#card-item[data-id="${selectedServiceId}"]`);
    console.log(selectedService);
    if (selectedService) {
      selectedService.classList.add('selected');
    } else {
      selectedService.classList.remove('selected');
    }
  }
  if (!selectedServiceId) {
    const menu_items = document.querySelectorAll('.router-disabled');
    menu_items.forEach((menu_item) => {
      menu_item.classList.add('pointer-events');
    });
    menu_bars.forEach((menu) => {
      menu.classList.add('cursor');
    })
  }

  if (!booking_panel) {
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
  console.log(pageName);
  const menu_num = document.getElementById('menu_num');
  const menu_text = document.getElementById('menu_text');
  const service_menu_num = document.getElementById('service_menu_num');
  const service_menu_text = document.getElementById('service_menu_text');
  if (pageName === 'service.html') {
    menu_num.classList.add('active-purple')
    menu_num.innerHTML = '<i class="fa-solid fa-check"></i>';
    menu_text.classList.add('active-white');
    service_menu_num.classList.add('active-num')
    service_menu_text.classList.add('active-text');
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
