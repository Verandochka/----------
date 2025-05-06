document.addEventListener('DOMContentLoaded', function() {
    const barcelonaButton = document.getElementById('barcelona');
    const interButton = document.getElementById('inter');
    const messageDiv = document.getElementById('message');
    const buttonContainer = document.querySelector('.button-container');
    const winnerImage = document.getElementById('winner-image'); // Виправлено id

    function disableButtons() {
        barcelonaButton.disabled = true;
        interButton.disabled = true;
    }

    function hideButtons() {
        buttonContainer.style.display = 'none';
    }

    barcelonaButton.addEventListener('click', () => {
        document.body.style.backgroundColor = 'green';
        messageDiv.textContent = 'правильний вибір';
        messageDiv.style.display = 'block';
        winnerImage.style.display = 'block'; // Показуємо зображення
        hideButtons();
    });

    interButton.addEventListener('click', () => {
        document.body.style.backgroundColor = 'red';
        messageDiv.textContent = 'ти Лузер';
        messageDiv.style.display = 'block';
        hideButtons();
    });
});