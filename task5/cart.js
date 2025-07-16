document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.querySelector('.cart-items');
    const subtotalEl = document.getElementById('subtotal');
    const shippingEl = document.getElementById('shipping');
    const totalEl = document.getElementById('total');

    function getCart() {
        return JSON.parse(localStorage.getItem('cart')) || [];
    }

    function saveCart(cart) {
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
        // We need to call the global updateCartCount function from app.js
        // This is a bit of a hack, a better solution would be a more structured app
        // with shared state management, but for this simple case it works.
        if (window.updateCartCount) {
            window.updateCartCount();
        }
    }

    function displayCartItems() {
        const cart = getCart();
        cartItemsContainer.innerHTML = '';
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            updateOrderSummary();
            return;
        }

        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <h3>${item.name}</h3>
                    <p>$${item.price.toFixed(2)}</p>
                    <div class="quantity">
                        <button class="quantity-btn" data-name="${item.name}" data-action="decrease">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" data-name="${item.name}" data-action="increase">+</button>
                    </div>
                </div>
                <button class="remove-btn" data-name="${item.name}">Remove</button>
            `;
            cartItemsContainer.appendChild(cartItem);
        });
        updateOrderSummary();
    }

    function updateOrderSummary() {
        const cart = getCart();
        const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const shipping = 0; // Assuming free shipping for now
        const total = subtotal + shipping;

        subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
        shippingEl.textContent = `$${shipping.toFixed(2)}`;
        totalEl.textContent = `$${total.toFixed(2)}`;
    }

    function updateQuantity(name, action) {
        let cart = getCart();
        const item = cart.find(i => i.name === name);
        if (item) {
            if (action === 'increase') {
                item.quantity++;
            } else if (action === 'decrease') {
                if (item.quantity > 1) {
                    item.quantity--;
                } else {
                    // If quantity is 1, decrease means remove
                    cart = cart.filter(i => i.name !== name);
                }
            }
            saveCart(cart);
        }
    }

    function removeFromCart(name) {
        let cart = getCart();
        cart = cart.filter(i => i.name !== name);
        saveCart(cart);
    }

    cartItemsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('quantity-btn')) {
            const name = e.target.dataset.name;
            const action = e.target.dataset.action;
            updateQuantity(name, action);
        }
        if (e.target.classList.contains('remove-btn')) {
            const name = e.target.dataset.name;
            removeFromCart(name);
        }
    });

    displayCartItems();
});
