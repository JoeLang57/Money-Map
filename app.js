const form = document.getElementById('budget-form');

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

    // Calculate annualized values
    const annualIncome = income * 12;
    const annualHousing = housing * 12;
    const annualTransportation = transportation * 12;
    const annualFood = food * 12;
    const annualEntertainment = entertainment * 12;
    const annualPersonalCare = personalCare * 12;
    const annualExtras = extras * 12;

    // Store results in localStorage for use on the new screen
    localStorage.setItem('annualIncome', annualIncome);
    localStorage.setItem('annualHousing', annualHousing);
    localStorage.setItem('annualTransportation', annualTransportation);
    localStorage.setItem('annualFood', annualFood);
    localStorage.setItem('annualEntertainment', annualEntertainment);
    localStorage.setItem('annualPersonalCare', annualPersonalCare);
    localStorage.setItem('annualExtras', annualExtras);

    // Redirect to the new screen
    window.location.href = 'annual-report.html';
});
