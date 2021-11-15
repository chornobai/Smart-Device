const navigationBlock = document.querySelector('.navigation');
const addressBlock = document.querySelector('.address');
const accButton = document.querySelectorAll('.footer-button');

// Удаление класса no-js

addressBlock.classList.remove('no-js');
navigationBlock.classList.remove('no-js');

// Аккордион

accButton.forEach((item) => {
  item.addEventListener('click', () => {
    const block = item.closest('section');

    if (block.classList.contains('accordion-open')) {
      block.classList.remove('accordion-open');

    } else {
      navigationBlock.classList.remove('accordion-open');
      addressBlock.classList.remove('accordion-open');
      block.classList.add('accordion-open');
    }

  });
});
