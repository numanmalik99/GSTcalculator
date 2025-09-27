function calculateGST() {
    const amount = parseFloat(document.getElementById('amount').value);
    const gstRate = parseFloat(document.getElementById('gstRate').value);

    if (isNaN(amount) || isNaN(gstRate) || amount < 0 || gstRate < 0) {
        alert('Please enter valid positive numbers for amount and GST rate.');
        return;
    }

    // Add GST calculations
    const gstAmount = (amount * gstRate) / 100;
    const inclusiveValue = amount + gstAmount;

    // Subtract GST calculations (assuming input amount is GST-inclusive)
    const exclusiveValue = amount / (1 + gstRate / 100);
    const subtractedGST = amount - exclusiveValue;

    // Update Add GST section
    document.getElementById('beforeGST').textContent = `$${amount.toFixed(2)}`;
    document.getElementById('addGSTAmount').textContent = `$${gstAmount.toFixed(2)}`;
    document.getElementById('inclusiveValue').textContent = `$${inclusiveValue.toFixed(2)}`;

    // Update Subtract GST section
    document.getElementById('valueWithGST').textContent = `$${amount.toFixed(2)}`;
    document.getElementById('subtractGSTAmount').textContent = `$${subtractedGST.toFixed(2)}`;
    document.getElementById('exclusiveValue').textContent = `$${exclusiveValue.toFixed(2)}`;

    // Show the result section
    document.getElementById('resultSection').classList.remove('hidden');
}