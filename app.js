const form = document.getElementById('budget-form');
const resultBox = document.getElementById('result');
const totalIncomeEl = document.getElementById('total-income');
const totalExpensesEl = document.getElementById('total-expenses');
const netSavingsEl = document.getElementById('net-savings');
const optionalCutsEl = document.getElementById('optional-cuts');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get income and expense values
    const income = parseFloat(document.getElementById('income').value);
    const housing = parseFloat(document.getElementById('housing').value);
    const transportation = parseFloat(document.getElementById('transportation').value);
    const food = parseFloat(document.getElementById('food').value);
    const entertainment = parseFloat(document.getElementById('entertainment').value);
    const personalCare = parseFloat(document.getElementById('personalCare').value);
    const extras = parseFloat(document.getElementById('extras').value);

    // Calculate total expenses and net savings
    const totalExpenses = housing + transportation + food + entertainment + personalCare + extras;
    const netSavings = income - totalExpenses;

    // Update result values
    totalIncomeEl.textContent = income.toFixed(2);
    totalExpensesEl.textContent = totalExpenses.toFixed(2);
    netSavingsEl.textContent = netSavings.toFixed(2);

    // Show optional cuts if spending exceeds income
    optionalCutsEl.innerHTML = '';
    if (netSavings < 0) {
        optionalCutsEl.innerHTML = '<h6 class="optional-cuts">You are overspending! Here are some suggested cuts:</h6>';
        if (entertainment > 100) {
            optionalCutsEl.innerHTML += '<p>- Reduce Entertainment to under $100.</p>';
        }
        if (extras > 50) {
            optionalCutsEl.innerHTML += '<p>- Reduce Extras to under $50.</p>';
        }
        if (personalCare > 100) {
            optionalCutsEl.innerHTML += '<p>- Reduce Personal Care to under $100.</p>';
        }
    }

    // Show result box
    resultBox.classList.remove('d-none');
});
