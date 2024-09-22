document.getElementById('calculate-btn').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('amount').value); // Депозит
    const stages = parseInt(document.getElementById('stages').value); // Количество колен
    const multiplier = parseFloat(document.getElementById('multiplier').value); // Множитель
    const currency = document.getElementById('currency').value; // Валюта
    const resultsContainer = document.getElementById('results');

    if (isNaN(amount) || isNaN(stages) || isNaN(multiplier) || stages < 1 || stages > 8) {
        resultsContainer.innerHTML = '<p>Пожалуйста, введите корректные данные.</p>';
        return;
    }

    const currencySymbols = {
        RUB: '₽',
        USD: '$',
        EUR: '€'
    };

    // Рассчитываем сумму для каждого колена с учетом множителя
    let totalWeight = 0;
    for (let i = 0; i < stages; i++) {
        totalWeight += Math.pow(multiplier, i); // Множитель влияет на вес каждого колена
    }

    let baseAmount = amount / totalWeight; // Находим сумму первого колена

    let result = '';
    resultsContainer.innerHTML = ''; // Очистка предыдущих результатов

    for (let i = 1; i <= stages; i++) {
        let stageAmount = baseAmount * Math.pow(multiplier, i - 1); // Увеличиваем сумму для каждого следующего колена
        result = `<div class="result-item">Колено ${i}: <span>${stageAmount.toFixed(2)} ${currencySymbols[currency]}</span></div>`;
        resultsContainer.innerHTML += result;
    }
});
