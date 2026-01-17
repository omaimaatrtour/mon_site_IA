fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const productList = document.getElementById('product-list');
        const productSelect = document.getElementById('product-select');

        data.forEach(product => {
            // Afficher les produits
            const div = document.createElement('div');
            div.textContent = `${product.name} - $${product.price}`;
            productList.appendChild(div);

            // Ajouter au select
            const option = document.createElement('option');
            option.value = product.price;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    });

// Simulateur de prix
document.getElementById('simulate-btn').addEventListener('click', () => {
    const select = document.getElementById('product-select');
    const quantity = parseInt(document.getElementById('quantity').value);
    const price = parseFloat(select.value);
    const total = price * quantity;
    document.getElementById('price-output').textContent = `Prix total: $${total}`;
});
