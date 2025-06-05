document.write(`
<header>
<div class="header-top">
    <div class="logo">
        <img class="logo_img" src="logo.png" alt="PetreaTools Logo" />
        <p>PetreaTools</p>
    </div>
    <div class="header-top-right">
        <p class="language">RO</p>
        <a href="cart.html" class="icon cart">
            <i class="fas fa-shopping-cart"></i>
            <div class="item-count">0</div>
        </a>
        <a href="favorite.html" class="icon wishlist">
        <i class="fa-solid fa-heart" style="color: #000000;"></i>
            <div class="item-count">0</div>
        </a>
        <a href="log-in.html" class="icon"><i class="fa-solid fa-user" style="color: #000000;"></i></a>
    </div>
</div>
<hr />
<div class="header-bottom">
    <div class="mobile-menu-icon" id="menu-icon">
        <i class="fas fa-bars"></i>
    </div>
    <ul class="desktop-menu">
        <li><a href="index.html">Acasă</a></li>
        <li><a href="Despre-noi.html">Despre noi</a></li>
        <li><a href="produse.html">Produse</a></li>
        <li><a href="Contacte.html">Contacte</a></li>
        <li><a href="FAQ.html">FAQ</a></li>
    </ul>
    <div class="search-bar">
        <input type="text" placeholder="Caută..." class="search-input" />
        <div class="search-icon"><i class="fas fa-search"></i></div>
    </div>
</div>
</header>

<div class="mobile-menu" id="mobile-menu">
<div class="close-btn" id="close-btn"><i class="fas fa-times"></i></div>
<ul>
    <li><a href="index.html">Acasă</a></li>
    <li><a href="Despre-noi.html">Despre noi</a></li>
    <li><a href="produse.html">Produse</a></li>
    <li><a href="Contacte.html">Contacte</a></li>
    <li><a href="FAQ.html">FAQ</a></li>
</ul>
</div>
`);

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById("menu-icon");
    const mobileMenu = document.getElementById("mobile-menu");
    const closeBtn = document.getElementById("close-btn");

    menuIcon?.addEventListener("click", () => mobileMenu.style.left = "0");
    closeBtn?.addEventListener("click", () => mobileMenu.style.left = "-100%");
});