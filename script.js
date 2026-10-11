const form = document.querySelector('.form');
const status = document.querySelector('.form-status');

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!form.checkValidity()) {
    status.textContent =
      'Будь ласка, коректно заповніть обов’язкові поля.';

    form.reportValidity();
    return;
  }

  status.textContent = 'Дякуємо! Заявку надіслано.';
  form.reset();
});
