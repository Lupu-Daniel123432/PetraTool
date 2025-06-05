// favorites.js

// Funcție globală pentru actualizarea numărului de favorite
window.updateFavoriteCount = function() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const favoriteCountElements = document.querySelectorAll('.wishlist .item-count');
    
    favoriteCountElements.forEach(element => {
        element.textContent = favorites.length;
    });
};

document.addEventListener('DOMContentLoaded', function() {
    const favoritesContainer = document.querySelector('.produse-favorite');
    const products = JSON.parse(localStorage.getItem('allProducts')) || [];
    
    // Încarcă produsele favorite
    function loadFavorites() {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const favoriteProducts = products.filter(product => favorites.includes(product.id));
        
        displayFavoriteProducts(favoriteProducts);
        updateFavoriteCount(); // Actualizează numărul în header
    }
    
    // Afișează produsele favorite
    function displayFavoriteProducts(products) {
        favoritesContainer.innerHTML = '';
        
        if (products.length === 0) {
            favoritesContainer.innerHTML = '<p class="no-favorites">Nu aveți produse favorite. Adăugați câteva din pagina principală.</p>';
            return;
        }
        
        const gridContainer = document.createElement('div');
        gridContainer.className = 'lista-produse';
        
        products.forEach(product => {
            const productCard = createFavoriteProductCard(product);
            gridContainer.appendChild(productCard);
        });
        
        favoritesContainer.appendChild(gridContainer);
    }
    
    // Creează cardul pentru produsul favorit
    function createFavoriteProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.dataset.id = product.id;
        
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/300?text=Imagine+indisponibilă'">
                <div class="product-wishlist">
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="product-info">
                <h4 class="product-name">${product.name}</h4>
                <div class="product-category">${product.subcategory}</div>
                <div class="product-price">${product.price.toFixed(2)} MDL</div>
                <button class="remove-from-favorites-btn">
                    <i class="fas fa-trash"></i> Elimină
                </button>
            </div>
        `;
        
        // Adaugă event listener pentru butonul de eliminare
        const removeBtn = card.querySelector('.remove-from-favorites-btn');
        removeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            removeFromFavorites(product.id);
            card.remove();
            
            const gridContainer = document.querySelector('.lista-produse');
            if (gridContainer && gridContainer.children.length === 0) {
                favoritesContainer.innerHTML = '<p class="no-favorites">Nu aveți produse favorite. Adăugați câteva din pagina cu produse.</p>';
            }
            
            updateFavoriteCount(); // Actualizează numărul după eliminare
        });
        
        return card;
    }
    
    // Elimină produsul din favorite
    function removeFromFavorites(productId) {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        favorites = favorites.filter(id => id !== productId);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
    
    // Inițializează pagina
    loadFavorites();
});

// Actualizează numărul la încărcarea paginii (pentru cazul când se accesează direct favorites.html)
document.addEventListener('DOMContentLoaded', updateFavoriteCount);