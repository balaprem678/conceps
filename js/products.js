
// PRODUCTS DATA (Array / API format)
const products = [
    {
        id: 1,
        name: "Cloud Shift Lightweight Runner Pro Edition",
        brand: "Nike",
        discription: "Lightweight and stylish, these sneakers offer all-day comfort with breathable mesh, cushioned soles, and a durable grip. Perfect for casual wear, workouts, or daily adventures. Available in multiple colors and sizes.",
        price: 99.00,
        originalPrice: null,
        rating: 4.5,
        badge: null,
        image: "images/products/item_1.png",
        stock: "In Stock",
        sku: "SH-001-BLK-42",
        category: "Sneakers",
        morinfo: "10g powder, powder measure & water dispensing bottle (empty",
    },
    {
        id: 2,
        name: "Titan Edge High Impact Stability Lightweight Trainers",
        brand: "Nike",
        discription: "Lightweight and stylish, these sneakers offer all-day comfort with breathable mesh, cushioned soles, and a durable grip. Perfect for casual wear, workouts, or daily adventures. Available in multiple colors and sizes.",
        price: 85.99,
        originalPrice: null,
        rating: 4.2,
        badge: null,
        image: "images/products/item_2.png",
          stock: "In Stock",
        sku: "SH-001-BLK-42",
        category: "Sneakers",
        morinfo: "10g powder, powder measure & water dispensing bottle (empty",
    },
    {
        id: 3,
        name: "Wave Strike Dynamic Boost Sneaker",
        brand: "Nike",
        discription: "Lightweight and stylish, these sneakers offer all-day comfort with breathable mesh, cushioned soles, and a durable grip. Perfect for casual wear, workouts, or daily adventures. Available in multiple colors and sizes.",
        price: 120.00,
        originalPrice: null,
        rating: 4.0,
        badge: null,
        image: "images/products/item_3.png",
          stock: "In Stock",
        sku: "SH-001-BLK-42",
        category: "Sneakers",
        morinfo: "10g powder, powder measure & water dispensing bottle (empty",
    },
    {
        id: 4,
        name: "Wave Strike Dynamic Boost Sneaker",
        brand: "Nike",
        discription: "Lightweight and stylish, these sneakers offer all-day comfort with breathable mesh, cushioned soles, and a durable grip. Perfect for casual wear, workouts, or daily adventures. Available in multiple colors and sizes.",
        price: 140.00,
        originalPrice: 159.00,
        rating: 4.7,
        badge: "SAVE 25%",
        image: "images/products/item_4.png",
          stock: "In Stock",
        sku: "SH-001-BLK-42",
        category: "Sneakers",
        morinfo: "10g powder, powder measure & water dispensing bottle (empty",

    },
    {
        id: 5,
        name: "Cloud Shift Lightweight Runner Pro Edition",
        brand: "Nike",
        discription: "Lightweight and stylish, these sneakers offer all-day comfort with breathable mesh, cushioned soles, and a durable grip. Perfect for casual wear, workouts, or daily adventures. Available in multiple colors and sizes.",
        price: 99.00,
        originalPrice: 140.00,
        rating: 4.3,
        badge: "SAVE 47%",
        image: "images/products/item_5.png",
          stock: "In Stock",
        sku: "SH-001-BLK-42",
        category: "Sneakers",
        morinfo: "10g powder, powder measure & water dispensing bottle (empty",
    },
    {
        id: 6,
        name: "Titan Edge High Impact Stability Lightweight Trainers",
        brand: "Nike",
        discription: "Lightweight and stylish, these sneakers offer all-day comfort with breathable mesh, cushioned soles, and a durable grip. Perfect for casual wear, workouts, or daily adventures. Available in multiple colors and sizes.",
        price: 85.99,
        originalPrice: null,
        rating: 4.1,
        badge: null,
        image: "images/products/item_6.png",
          stock: "In Stock",
        sku: "SH-001-BLK-42",
        category: "Sneakers",
        morinfo: "10g powder, powder measure & water dispensing bottle (empty",
    },
    {
        id: 7,
        name: "Velocity Boost Xtreme High Shock Absorbers",
        brand: "Nike",
        discription: "Lightweight and stylish, these sneakers offer all-day comfort with breathable mesh, cushioned soles, and a durable grip. Perfect for casual wear, workouts, or daily adventures. Available in multiple colors and sizes.",
        price: 280.00,
        originalPrice: 310.00,
        rating: 4.8,
        badge: "SAVE 20%",
        image: "images/products/item_7.png",
          stock: "In Stock",
        sku: "SH-001-BLK-42",
        category: "Sneakers",
        morinfo: "10g powder, powder measure & water dispensing bottle (empty",
    },
    {
        id: 8,
        name: "Velocity Boost Xtreme High Shock Absorbers",
        brand: "Nike",
        discription: "Lightweight and stylish, these sneakers offer all-day comfort with breathable mesh, cushioned soles, and a durable grip. Perfect for casual wear, workouts, or daily adventures. Available in multiple colors and sizes.",
        price: 110.00,
        originalPrice: null,
        rating: 4.4,
        badge: null,
        image: "images/products/item_1.png",
          stock: "In Stock",
        sku: "SH-001-BLK-42",
        category: "Sneakers",
        morinfo: "10g powder, powder measure & water dispensing bottle (empty",
    },
    {
        id: 9,
        name: "Cloud Shift Lightweight Runner Pro Edition",
        brand: "Nike",
        discription: "Lightweight and stylish, these sneakers offer all-day comfort with breathable mesh, cushioned soles, and a durable grip. Perfect for casual wear, workouts, or daily adventures. Available in multiple colors and sizes.",
        price: 99.00,
        originalPrice: null,
        rating: 4.6,
        badge: null,
        image: "images/products/item_2.png",
          stock: "In Stock",
        sku: "SH-001-BLK-42",
        category: "Sneakers",
        morinfo: "10g powder, powder measure & water dispensing bottle (empty",
    },
    {
        id: 10,
        name: "Titan Edge High Impact Stability Lightweight Trainers",
        brand: "Nike",
        discription: "Lightweight and stylish, these sneakers offer all-day comfort with breathable mesh, cushioned soles, and a durable grip. Perfect for casual wear, workouts, or daily adventures. Available in multiple colors and sizes.",
        price: 46.00,
        originalPrice: 110.00,
        rating: 3.9,
        badge: "SAVE 87%",
        image: "images/products/item_3.png",
          stock: "In Stock",
        sku: "SH-001-BLK-42",
        category: "Sneakers",
        morinfo: "10g powder, powder measure & water dispensing bottle (empty",
    },
    {
        id: 11,
        name: "Wave Strike Dynamic Boost Sneaker",
        brand: "Nike",
        discription: "Lightweight and stylish, these sneakers offer all-day comfort with breathable mesh, cushioned soles, and a durable grip. Perfect for casual wear, workouts, or daily adventures. Available in multiple colors and sizes.",
        price: 120.00,
        originalPrice: null,
        rating: 4.2,
        badge: null,
        image: "images/products/item_4.png",
          stock: "In Stock",
        sku: "SH-001-BLK-42",
        category: "Sneakers",
        morinfo: "10g powder, powder measure & water dispensing bottle (empty",
    },
    {
        id: 12,
        name: "Velocity Boost Xtreme High Shock Absorbers",
        brand: "Nike",
        discription: "Lightweight and stylish, these sneakers offer all-day comfort with breathable mesh, cushioned soles, and a durable grip. Perfect for casual wear, workouts, or daily adventures. Available in multiple colors and sizes.",
        price: 110.00,
        originalPrice: null,
        rating: 4.5,
        badge: null,
        image: "images/products/item_5.png",
          stock: "In Stock",
        sku: "SH-001-BLK-42",
        category: "Sneakers",
        morinfo: "10g powder, powder measure & water dispensing bottle (empty",
    }
];

// STATE
let state = {
    currentPage: 1,
    perPage: 10,
    sortBy: 'high',
    searchQuery: 'Nike',
    filtered: [...products]
};

// RENDER CARD
function renderCard(product, index) {
    const ratingClass = product.ratingColor === 'green' ? 'green' : product.ratingColor === 'blue' ? 'blue' : '';
    const stars = '★'.repeat(Math.floor(product.rating)) + (product.rating % 1 >= 0.5 ? '½' : '');

    return `
    <div class="card" onclick="openProduct(${product.id})" style="animation-delay:${index * 0.05}s">
      ${product.badge ? `<div class="badge-save">${product.badge}</div>` : ''}
      <img class="card-img" src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/280x210/f5f5f5/999?text=Shoe'">
      <div class="card-body">
        <div class="card-name">${product.name}</div>
        <div class="card-footer">
          <div class="rating ${ratingClass}">
            <span class="star">★</span> ${product.rating}
          </div>
          <div class="price-wrap">
            ${product.originalPrice ? `<span class="price-old">$${product.originalPrice.toFixed(2)}</span>` : ''}
            <span class="price-new">$${product.price.toFixed(2)}</span>
          </div>
          <button class="add-btn" onclick="addToCart(${product.id})">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 001.98-1.67l1.62-8.33H6"/></svg>
            Add
          </button>
        </div>
      </div>
    </div>
  `;
}

// product Details Modal

function openProduct(id) {

    const product = products.find(p => p.id === id);
    if (!product) return;

    const drawer = document.getElementById("productDrawer");
    const overlay = document.getElementById("productOverlay");
    const content = document.getElementById("drawerContent");

    content.innerHTML = `
    <div class="drawer-content">
        <img src="${product.image}" class="drawer-img">

        <h2>${product.name}</h2>
        <p class="drawer-description">${product.discription}</p>


        <div class="drawer_flex ">
            <span>Avaibilaty :</span>
            <span class="instock">${product.stock}</span>
        </div>
        <div class="drawer_flex">
            <span>SKU :</span>
            <span>${product.sku}</span>
        </div>
        <div class="drawer_flex">
            <span>Category:</span>
            <span>${product.category}</span>
        </div>
        <div class="drawer_flex">
            <span>Rating :</span>
            <span>⭐⭐⭐⭐⭐</span>
        </div>
        <div class="drawer_flex">
            <span>Mor Info :</span>
            <span>${product.morinfo}</span>
        </div>
      

        <div class="drawer-price">
            ${product.originalPrice
            ? `<span class="old">$${product.originalPrice}</span>`
            : ''
        }
            <span class="new">$${product.price}</span>
        </div>

        <button class="drawer-cart">
            Add To Cart
        </button>
        </div>
    `;

    drawer.classList.add("active");
    overlay.classList.add("active");
}

function closeDrawer() {
    document.getElementById("productDrawer").classList.remove("active");
    document.getElementById("productOverlay").classList.remove("active");
}

document.getElementById("productOverlay")
    .addEventListener("click", closeDrawer);

// RENDER GRID
function renderGrid() {
    const { currentPage, perPage, filtered } = state;
    const start = (currentPage - 1) * perPage;
    const end = start + perPage;
    const pageItems = filtered.slice(start, end);

    const grid = document.getElementById('productGrid');
    grid.innerHTML = pageItems.length
        ? pageItems.map((p, i) => renderCard(p, i)).join('')
        : `<div style="grid-column:1/-1;text-align:center;padding:60px;color:#999;font-size:15px;">No products found.</div>`;

    // Update results text
    document.getElementById('resultsText').innerHTML =
        `${start + 1} – ${Math.min(end, filtered.length)} over ${filtered.length} results for <strong>${state.searchQuery || 'All'}</strong>`;

    renderPagination();
}

// RENDER PAGINATION
function renderPagination() {
    const total = Math.ceil(state.filtered.length / state.perPage);
    const cur = state.currentPage;
    const pag = document.getElementById('pagination');

    let html = `<button class="page-btn arrow" onclick="goPage(${cur - 1})" ${cur === 1 ? 'disabled style="opacity:.4"' : ''}>‹</button>`;
    for (let i = 1; i <= total; i++) {
        if (i > 5) { html += `<span style="color:#aaa;font-size:13px;padding:0 4px">...</span>`; break; }
        html += `<button class="page-btn ${i === cur ? 'active' : ''}" onclick="goPage(${i})">${i}</button>`;
    }
    html += `<button class="page-btn arrow" onclick="goPage(${cur + 1})" ${cur === total ? 'disabled style="opacity:.4"' : ''}>›</button>`;
    pag.innerHTML = html;
}

// ACTIONS
function goPage(n) {
    const total = Math.ceil(state.filtered.length / state.perPage);
    if (n < 1 || n > total) return;
    state.currentPage = n;
    renderGrid();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function sortProducts(val) {
    state.sortBy = val;
    state.currentPage = 1;
    if (val === 'high') state.filtered.sort((a, b) => b.price - a.price);
    else if (val === 'low') state.filtered.sort((a, b) => a.price - b.price);
    else if (val === 'name') state.filtered.sort((a, b) => a.name.localeCompare(b.name));
    renderGrid();
}

function filterProducts() {
    const q = document.getElementById('searchInput').value.toLowerCase();
    state.searchQuery = q;
    state.currentPage = 1;
    state.filtered = products.filter(p =>
        p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q)
    );
    sortProducts(state.sortBy);
}

function changePerPage(val) {
    state.perPage = parseInt(val);
    state.currentPage = 1;
    renderGrid();
}

function addToCart(id) {
    const p = products.find(x => x.id === id);
    if (p) alert(`Added "${p.name}" to cart! 🛒`);
}

// Time filter buttons
document.querySelectorAll('.time-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        document.querySelectorAll('.time-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
    });
});

// View toggle
document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
    });
});

// INIT
sortProducts('high');