document.addEventListener('DOMContentLoaded', () => {
    const checkoutForm = document.getElementById('checkout-form');
    const step1 = document.getElementById('step-1');
    const step2 = document.getElementById('step-2');
    const summaryItems = document.querySelector('.summary-items');
    const summarySubtotal = document.getElementById('summary-subtotal');
    const summaryShipping = document.getElementById('summary-shipping');
    const summaryTotal = document.getElementById('summary-total');
    const paymentOptions = document.querySelectorAll('input[name="payment"]');
    const ccDetails = document.getElementById('cc-details');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let currentStep = 1;

    function displaySummary() {
        summaryItems.innerHTML = '';
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('summary-item');
            itemElement.innerHTML = `
                <p>${item.name} (x${item.quantity})</p>
                <p>$${(item.price * item.quantity).toFixed(2)}</p>
            `;
            summaryItems.appendChild(itemElement);
        });

        const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const shipping = 0; // Assuming free shipping
        const total = subtotal + shipping;

        summarySubtotal.textContent = `$${subtotal.toFixed(2)}`;
        summaryShipping.textContent = `$${shipping.toFixed(2)}`;
        summaryTotal.textContent = `$${total.toFixed(2)}`;
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        if (currentStep === 1) {
            step1.style.display = 'none';
            step2.style.display = 'block';
            currentStep = 2;
        } else {
            // Final submission
            alert('Order placed successfully! Thank you for your purchase!');
            localStorage.removeItem('cart');
            window.location.href = 'index.html';
        }
    }

    paymentOptions.forEach(option => {
        option.addEventListener('change', (e) => {
            if (e.target.value === 'cc') {
                ccDetails.style.display = 'block';
            } else {
                ccDetails.style.display = 'none';
            }
        });
    });

    checkoutForm.addEventListener('submit', handleFormSubmit);

    displaySummary();
});
