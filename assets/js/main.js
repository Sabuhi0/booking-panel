document.addEventListener('DOMContentLoaded', () => {
  const selectedCardId = localStorage.getItem('selectedCardId');
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

const cardItems = document.querySelectorAll('#card-item');
const btn = document.getElementById("btn");
const warning_text = document.getElementById('alert-box');

function saveUserInfoAndRedirect(userInfo, itemId) {
  localStorage.setItem('selectedUserInfo', JSON.stringify(userInfo));
  localStorage.setItem('isCardItemSelected', 'true');
  localStorage.setItem('selectedCardId', itemId);
  window.location.href = 'pages/service.html';
}

cardItems.forEach((item) => {
  item.addEventListener('click', () => {
    const selectedUserInfo = {
      id: item.getAttribute('data-id'),
      name: item.getAttribute('data-name'),
      surname: item.getAttribute('data-surname'),
      email: item.getAttribute('data-email'),
    };
    saveUserInfoAndRedirect(selectedUserInfo, item.getAttribute('data-id'));
  });
});

btn.addEventListener('click', () => {
  if (localStorage.getItem('isCardItemSelected') === 'true') {
    window.location.href = 'pages/service.html';
  } else {
    warning_text.classList.add("show");
    setTimeout(() => warning_text.classList.remove("show"), 1800);
  }
});
