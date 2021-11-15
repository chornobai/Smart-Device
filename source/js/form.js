const formBlock = document.querySelector('.form-column');
const form = formBlock.querySelector('form');
const formName = form.querySelector('#form-name');
const formPhone = form.querySelector('#form-phone');
const formText = form.querySelector('#form-comment');

// Валидация текстового поля.

formName.addEventListener('input', function () {
  this.value = this.value.replace(/[\d]/g, '');
  formName.reportValidity();
});

// Маска для поля  - телефон

window.addEventListener('DOMContentLoaded', () => {
  function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) { elem.setSelectionRange(pos, pos); }
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
    if (def.length >= val.length) { val = def; }

    this.value = matrix.replace(/./g, (a) => {
      if (/[_\d]/.test(a) && i < val.length) { return val.charAt(i++); } else if (i >= val.length) { return ''; } else { return a; }
    });
    if (event.type === 'blur') {
      if (this.value.length === 2) { this.value = ''; }
    } else { setCursorPosition(this.value.length, this); }
  }

  formPhone.addEventListener('input', mask, false);
  formPhone.addEventListener('focus', mask, false);
  formPhone.addEventListener('blur', mask, false);
});

// Отправка формы
form.addEventListener('submit', (evt) => {
  if (!formName.value || !formPhone.value || !formText.value) {
    evt.preventDefault;
  }

  localStorage.setItem('name-form', formName.value);
  localStorage.setItem('tel-form', formPhone.value);
  localStorage.setItem('message-form', formText.value);

  form.reset();
});
