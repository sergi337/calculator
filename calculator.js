function calculateSalesTax() {
    const price = parseFloat(document.getElementById('price').value);
    const taxRate = parseFloat(document.getElementById('taxRate').value);

    if (isNaN(price) || isNaN(taxRate)) {
        alert("Please enter valid numbers for both fields.");
        return;
    }

    const taxAmount = (price * taxRate) / 100;
    const totalAmount = price + taxAmount;

    document.getElementById('priceValue').innerText = `$${price.toFixed(2)}`;
    document.getElementById('taxRateValue').innerText = taxRate.toFixed(2);
    document.getElementById('taxValue').innerText = `$${taxAmount.toFixed(2)}`;
    document.getElementById('totalValue').innerText = `$${totalAmount.toFixed(2)}`;
}

function clearFields() {
    document.getElementById('price').value = '';
    document.getElementById('taxRate').value = '';
    document.getElementById('priceValue').innerText = '$0.00';
    document.getElementById('taxRateValue').innerText = '0';
    document.getElementById('taxValue').innerText = '$0.00';
    document.getElementById('totalValue').innerText = '$0.00';
}
