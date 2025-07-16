document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('product-grid');
    const categoryBtns = document.querySelectorAll('.category-btn');
    const priceRange = document.getElementById('price-range');
    const priceValue = document.getElementById('price-value');
    const sortBy = document.getElementById('sort-by');

    const products = [
        { id: 1, name: 'Wireless Mouse', category: 'electronics', price: 25, rating: 4.5, image: 'https://via.placeholder.com/300' },
        { id: 2, name: 'T-Shirt', category: 'clothing', price: 15, rating: 4.2, image: 'https://via.placeholder.com/300' },
        { id: 3, name: 'Coffee Maker', category: 'home', price: 60, rating: 4.8, image: 'https://via.placeholder.com/300' },
        { id: 4, name: 'JavaScript Book', category: 'books', price: 40, rating: 4.9, image: 'https://via.placeholder.com/300' },
        { id: 5, name: 'Keyboard', category: 'electronics', price: 75, rating: 4.7, image: 'https://via.placeholder.com/300' },
        { id: 6, name: 'Jeans', category: 'clothing', price: 50, rating: 4.4, image: 'https://via.placeholder.com/300' },
        { id: 7, name: 'Blender', category: 'home', price: 45, rating: 4.6, image: 'https://via.placeholder.com/300' },
        { id: 8, name: 'Python Book', category: 'books', price: 35, rating: 4.8, image: 'https://via.placeholder.com/300' },
        { id: 9, name: 'Monitor', category: 'electronics', price: 200, rating: 4.9, image: 'https://via.placeholder.com/300' },
        { id: 10, name: 'Jacket', category: 'clothing', price: 80, rating: 4.5, image: 'https://via.placeholder.com/300' },
        { id: 11, name: 'Toaster', category: 'home', price: 30, rating: 4.3, image: 'https://via.placeholder.com/300' },
        { id: 12, name: 'Design Patterns Book', category: 'books', price: 55, rating: 4.9, image: 'https://via.placeholder.com/300' },
    ];

    let currentCategory = 'all';
    let currentPrice = 1000;
    let currentSort = 'default';

    function renderProducts() {
        let filteredProducts = products;

        // Filter by category
        if (currentCategory !== 'all') {
            filteredProducts = filteredProducts.filter(p => p.category === currentCategory);
        }

        // Filter by price
        filteredProducts = filteredProducts.filter(p => p.price <= currentPrice);

        // Sort products
        switch (currentSort) {
            case 'price-asc':
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case 'rating-desc':
                filteredProducts.sort((a, b) => b.rating - a.rating);
                break;
            case 'rating-asc':
                filteredProducts.sort((a, b) => a.rating - b.rating);
                break;
            case 'name-asc':
                filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'name-desc':
                filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
                break;
        }

        productGrid.innerHTML = '';
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-content">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-price">$${product.price.toFixed(2)}</p>
                    <div class="product-rating">
                        ${getStarRating(product.rating)}
                    </div>
                    <button class="add-to-cart-btn">Add to Cart</button>
                </div>
            `;
            productGrid.appendChild(productCard);
        });
    }

    function getStarRating(rating) {
        let stars = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars += '<i class="fas fa-star"></i>';
            } else if (i - 0.5 <= rating) {
                stars += '<i class="fas fa-star-half-alt"></i>';
            } else {
                stars += '<i class="far fa-star"></i>';
            }
        }
        return stars;
    }

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            renderProducts();
        });
    });

    priceRange.addEventListener('input', (e) => {
        currentPrice = e.target.value;
        priceValue.textContent = `$${currentPrice}`;
        renderProducts();
    });

    sortBy.addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderProducts();
    });

    renderProducts();
});
