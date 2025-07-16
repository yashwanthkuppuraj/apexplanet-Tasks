document.addEventListener('DOMContentLoaded', () => {
    const allProducts = [
        { name: "Hand-Carved Wooden Bowl", price: 45.00, rating: 5, category: "woodwork", image: "https://i.ebayimg.com/images/g/WNAAAOSw5bZlHMki/s-l1600.webp", date: "2023-10-26" },
        { name: "Embroidered Linen Scarf", price: 35.00, rating: 5, category: "textiles", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe3tqFR4uZk5d0Z0wCDXiyXSR1mZYv_EQDxg&s", date: "2023-10-25" },
        { name: "Ceramic Coffee Mug", price: 25.00, rating: 5, category: "pottery", image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", date: "2023-10-24" },
        { name: "Hand-Poured Soy Candle", price: 20.00, rating: 5, category: "candles", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsBIR-01FbiuHNuwGtybFBYXtqe4Pd6EMKpA&s", date: "2023-10-23" },
        { name: "Silver Necklace", price: 75.00, rating: 4, category: "jewelry", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Lrw1ix6HBU9aIVyiCyadfpdy6bxxW1qg_g&s", date: "2023-10-22" },
        { name: "Woven Wall Hanging", price: 60.00, rating: 4, category: "textiles", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS0JyqsgqBT2xMYIkHy2KIPKPFTBSrlV9bmQ&s", date: "2023-10-21" },
        { name: "Clay Vase", price: 50.00, rating: 5, category: "pottery", image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/TIw66q/wrkr/t.resize(h:620,w:700)/data/Westelm/29082022img/7558366_1.jpg", date: "2023-10-20" },
        { name: "Wooden Coasters (Set of 4)", price: 30.00, rating: 4, category: "woodwork", image: "https://trovecraftindia.com/cdn/shop/files/whitelotuscoasterangle.jpg?v=1735802871", date: "2023-10-19" }
    ];

    const productGrid = document.querySelector('.product-grid');
    const categoryFilter = document.getElementById('category-filter');
    const sortBy = document.getElementById('sort-by');

    function displayProducts(products) {
        productGrid.innerHTML = '';
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <div class="stars">${'★'.repeat(product.rating)}</div>
                <p>$${product.price.toFixed(2)}</p>
                <button class="btn">Add to Cart</button>
            `;
            productGrid.appendChild(productElement);
        });
    }

    function filterAndSortProducts() {
        let filteredProducts = allProducts;

        const category = categoryFilter.value;
        if (category !== 'all') {
            filteredProducts = filteredProducts.filter(p => p.category === category);
        }

        const sortValue = sortBy.value;
        if (sortValue === 'price-lh') {
            filteredProducts.sort((a, b) => a.price - b.price);
        } else if (sortValue === 'price-hl') {
            filteredProducts.sort((a, b) => b.price - a.price);
        } else if (sortValue === 'newest') {
            filteredProducts.sort((a, b) => new Date(b.date) - new Date(a.date));
        } else if (sortValue === 'top-rated') {
            filteredProducts.sort((a, b) => b.rating - a.rating);
        }

        displayProducts(filteredProducts);
    }

    categoryFilter.addEventListener('change', filterAndSortProducts);
    sortBy.addEventListener('change', filterAndSortProducts);

    displayProducts(allProducts);
});
