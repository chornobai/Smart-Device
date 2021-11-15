const popupOpen = document.querySelector('.header-nav__button');
const popupOverlay = document.querySelector('.popup-wrapper');
const popupClose = document.querySelector('.popup-close');
const popupForm = popupOverlay.querySelector('form');
const popupName = popupForm.querySelector('#name');
const popupPhone = popupForm.querySelector('#phone');
const popupText = popupForm.querySelector('#comment');
const body = document.querySelector('body');

// Проверка - поддерживает ли браузер запись в LocalStorage //
let isStorageSupport = true;
let storage = '';

try {
  storage = localStorage.getItem('name');
} catch (err) {
  isStorageSupport = false;
}

// Открытие и модального окна установка фокуса в поле

popupOpen.addEventListener('click', (evt) => {
  evt.preventDefault;
  popupOverlay.classList.add('popup-wrapper--overlay');
  body.classList.add('no-scroll');
  if (storage) {
    popupName.focus();
  }
});

// Запись в LocalStorage //

popupForm.addEventListener('submit', (evt) => {
  if(!popupName.value || !popupPhone.value || !popupText.value){
    evt.preventDefault;
  }
  if (isStorageSupport) {
    localStorage.setItem('name', popupName.value);
    localStorage.setItem('tel', popupPhone.value);
    localStorage.setItem('message', popupText.value);
  }
  popupForm.reset();
});


//Валидация текстового поля.

popupName.addEventListener('input', function(){
  this.value = this.value.replace(/[\d]/g, '');
  popupName.reportValidity();
});

// Закрытие модального окна / нажатие кнопки

popupClose.addEventListener('click', (evt) => {
  evt.preventDefault;
  popupOverlay.classList.remove('popup-wrapper--overlay');
  body.classList.remove('no-scroll');

});

// Закрытие модального окна / клавишей Esc

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    popupOverlay.classList.remove('popup-wrapper--overlay');
  }
});

// Закрытие модального окна / клик вне модального окна


document.addEventListener('click', (evt) => {
  if (evt.target === popupOverlay) {
    popupOverlay.classList.remove('popup-wrapper--overlay');
  }
});


// Маска для поля  - телефон

window.addEventListener('DOMContentLoaded', () => {
  function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) {elem.setSelectionRange(pos, pos);}
    else if (elem.createTextRange) {
      const range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  }

  function mask(event) {
    const matrix = '+7 (___) ___-__-__';
    let i = 0;
    const def = matrix.replace(/\D/g, '');
    let val = this.value.replace(/\D/g, '');
    if (def.length >= val.length) {val = def;}
    this.value = matrix.replace(/./g, (a) => /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a);
    if (event.type === 'blur') {
      if (this.value.length === 2) {this.value = '';}
    } else {setCursorPosition(this.value.length, this);}
  }
  popupPhone.addEventListener('input', mask, false);
  popupPhone.addEventListener('focus', mask, false);
  popupPhone.addEventListener('blur', mask, false);
});
