document.getElementById('calculate-btn').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('amount').value);
    const stages = parseInt(document.getElementById('stages').value);
    const currency = document.getElementById('currency').value;
    const resultsContainer = document.getElementById('results');

    if (isNaN(amount) || isNaN(stages) || stages < 1 || stages > 8) {
        resultsContainer.innerHTML = '<p>Пожалуйста, введите корректные данные.</p>';
        return;
    }

    const currencySymbols = {
        RUB: '₽',
        USD: '$',
        EUR: '€'
    };

    let totalWeight = 0;
    for (let i = 0; i < stages; i++) {
        totalWeight += Math.pow(2, i);
    }

    let baseAmount = amount / totalWeight; //

    let result = '';
    resultsContainer.innerHTML = '';

    for (let i = 1; i <= stages; i++) {
        let stageAmount = baseAmount * Math.pow(2, i - 1);
        result = `<div class="result-item">Колено ${i}: <span>${stageAmount.toFixed(2)} ${currencySymbols[currency]}</span></div>`;
        resultsContainer.innerHTML += result;
    }
});
