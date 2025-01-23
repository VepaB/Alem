// Показ строки для собственного варианта услуги
document.getElementById('service-type').addEventListener('change', function() {
    const customService = document.getElementById('custom-service');
    if (this.value === 'other') {
        customService.style.display = 'block';
        customService.setAttribute('required', 'required');
    } else {
        customService.style.display = 'none';
        customService.removeAttribute('required');
    }
});

// Обработка отправки формы
document.getElementById('service-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Остановка стандартного действия формы
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('success-message').style.display = 'block';
});

// Закрытие сообщения об успешной отправке
document.getElementById('close-button').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('success-message').style.display = 'none';
});
