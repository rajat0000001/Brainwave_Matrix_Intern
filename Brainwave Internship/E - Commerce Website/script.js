const produc =[
    { id: 1, name: "Laptop", category: "el", image: "l.png", price: "₹99,999" },
    { id: 2, name: "T-Shirt", category: "cl", image: "t.png", price: "₹199" },
    { id: 3, name: "Headphones", category: "el", image: "h.png", price: "₹1099" },
    { id: 4, name: "Watch", category: "acce", image: "w.png", price: "₹99" },
    { id: 6, name: "Fogg", category: "acce", image: "fo.png", price: "₹129" },
    { id: 7, name: "Airdopes", category: "el", image: "A.png", price: "₹1499" },
    { id: 8, name: "Television", category: "el", image: "Tel.png", price: "₹3999" },
    { id: 9, name: "Wooden Chair", category: "acce", image: "wc.png", price: "₹699" },
    { id: 10, name: "Soap", category: "acce", image: "soap.png", price: "₹35" },
    { id: 5, name: "Comb", category: "acce", image: "com.png", price: "₹49" },
    { id: 11, name: "Shirt", category: "cl", image: "shirt.png", price: "₹249" },
    { id: 12, name: "Shoes", category: "cl", image: "sh.png", price: "₹699" },
];

const productContainer = document.getElementById('products');

function displayProducts(filteredProducts) {
    productContainer.innerHTML = '';
    filteredProducts.forEach(product => {
        productContainer.innerHTML += `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
    });
}

function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = produc.find(product => product.id === id);

    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
}

function filterCategory(category) {
    const filtered = produc.filter(product => product.category === category);
    displayProducts(filtered);
}


document.getElementById('search').addEventListener('input', (e) => {
    const searchText = e.target.value.toLowerCase();
    const filtered = produc.filter(product => product.name.toLowerCase().includes(searchText));
    displayProducts(filtered);
});

displayProducts(produc);