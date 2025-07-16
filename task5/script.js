document.addEventListener('DOMContentLoaded', () => {
    const featuredCrafts = [
        {
            name: "Hand-Carved Wooden Bowl",
            price: "$45.00",
            rating: 5,
            image: "https://i.ebayimg.com/images/g/WNAAAOSw5bZlHMki/s-l1600.webp"
        },
        {
            name: "Embroidered Linen Scarf",
            price: "$35.00",
            rating: 5,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe3tqFR4uZk5d0Z0wCDXiyXSR1mZYv_EQDxg&s"
        },
        {
            name: "Ceramic Coffee Mug",
            price: "$25.00",
            rating: 5,
            image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            name: "Hand-Poured Soy Candle",
            price: "$20.00",
            rating: 5,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsBIR-01FbiuHNuwGtybFBYXtqe4Pd6EMKpA&s"
        }
    ];

    const productGrid = document.querySelector('.product-grid');
    if (productGrid) {
        featuredCrafts.forEach(craft => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <img src="${craft.image}" alt="${craft.name}">
                <h3>${craft.name}</h3>
                <div class="stars">${'★'.repeat(craft.rating)}</div>
                <p>$${craft.price.replace('$', '')}</p>
                <button class="btn">Add to Cart</button>
            `;
            productGrid.appendChild(productElement);
        });
    }

    const newsletterForm = document.querySelector('.newsletter form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for subscribing to Artisan Alley!');
            newsletterForm.querySelector('input').value = '';
        });
    }
});
