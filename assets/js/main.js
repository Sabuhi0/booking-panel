// console.log("Hello World");
const cardItems = document.querySelectorAll('#card-item');
let isCardItemSelected = false;
let selectedUserInfo = null;

cardItems.forEach((item) => {
  item.addEventListener('click', function () {
    isCardItemSelected = true;
    selectedUserInfo = {
      name: this.getAttribute('data-name'),
      surname: this.getAttribute('data-surname'),
      email: this.getAttribute('data-email'),
    }
    console.log(selectedUserInfo);
  })
})


const btn = document.getElementById("btn");
const warning_text = document.getElementById('alert-box');

btn.addEventListener('click', function () {
  if (!isCardItemSelected) {
    warning_text.classList.add("show");
    setTimeout(function () {
      warning_text.classList.remove("show");
    }, 1800)
  } else {
    console.log("Seçilen kullanici bilgileri:", selectedUserInfo);
  }
})
