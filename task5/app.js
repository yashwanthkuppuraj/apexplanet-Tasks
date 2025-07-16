document.addEventListener('DOMContentLoaded', () => {
    const cartCount = document.getElementById('cart-count');

    function getCart() {
        return JSON.parse(localStorage.getItem('cart')) || [];
    }

    function saveCart(cart) {
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    }

    window.updateCartCount = function() {
        const cart = getCart();
        const count = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = count;
    }

    function addToCart(product) {
        const cart = getCart();
        const existingItem = cart.find(i => i.name === product.name);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        saveCart(cart);
        alert(`${product.name} added to cart!`);
    }

    document.body.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn') && e.target.textContent === 'Add to Cart') {
            const productElement = e.target.closest('.product');
            const name = productElement.querySelector('h3').textContent;
            const price = parseFloat(productElement.querySelector('p').textContent.replace('$', ''));
            const image = productElement.querySelector('img').src;
            
            addToCart({ name, price, image });
        }
    });

    updateCartCount();
});
