let inventory = JSON.parse(localStorage.getItem('pos_inventory')) || [
    // {
    //     id: 1,
    //     name: 'Hot Coffee',
    //     price: 3.50,
    //     category: 'Food'
    // },
    // {
    //     id: 2,
    //     name: 'Croissant',
    //     price: 2.75,
    //     category: 'Food'
    // }
];
let cart = [];
let transactions = JSON.parse(localStorage.getItem('pos_transactions')) || [];

function showView(viewId){
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.querySelectorAll('.nav-links li').forEach(l => l.classList.remove('active'));
    document.getElementById(viewId + '-view').classList.add('active');
    event.currentTarget.classList.add('active');
    if(viewId === 'inventory'){
        renderInventory();
    }
    if(viewId === 'pos'){
        renderCatalog();
    }
    if(viewId === 'transactions'){
        renderTransactions();
    }
}

function renderCatalog(filter = ''){
    const grid = document.getElementById('items-grid');
    grid.innerHTML = '';
    inventory.filter(item => item.name.toLowerCase().includes(filter.toLowerCase())).forEach(item => {
        const div = document.createElement('div');
        div.className = 'product-card';
        div.innerHTML = `<h4>${item.name}</h4><p>$${item.price.toFixed(2)}</p><small>${item.category}</small>`;
        div.onclick = () => addToCart(item);
        grid.appendChild(div);
    });
}

function filterCatalog(){
    renderCatalog(document.getElementById('search-items').value);
}

function addToCart(item){
    cart.push(item);
    renderCart();
}

function renderCart(){
    const container = document.getElementById('cart-items');
    container.innerHTML = '';
    let subtotal = 0;
    cart.forEach((item, index) => {
        subtotal += item.price;
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `<span>${item.name}</span><span>$${item.price.toFixed(2)}</span>`;
        container.appendChild(div);
    });
    const tax = subtotal * 0.08;
    const total = subtotal + tax;
    document.getElementById('subtotal').innerText = `$${subtotal.toFixed(2)}`;
    document.getElementById('tax').innerText = `$${tax.toFixed(2)}`;
    document.getElementById('total-price').innerText = `$${total.toFixed(2)}`;
}

function clearCart(){
    cart = [];
    renderCart();
}

function processTransaction(){
    if(cart.length === 0){
        return alert('Cart is empty');
    }
    const transaction = {
        id: 'TXN' + Date.now(),
        date: new Date().toLocaleString(),
        items: cart.map(i => i.name).join(', '),
        total: document.getElementById('total-price').innerText
    };
    transactions.unshift(transaction);
    localStorage.setItem('pos_transactions', JSON.stringify(transactions));
    alert('Transaction Successful!');
    clearCart();
}

function renderInventory(){
    const body = document.getElementById('inventory-body');
    body.innerHTML = '';
    inventory.forEach(item => {
        const row = body.insertRow();
        row.innerHTML = `<td>${item.name}</td><td>${item.category}</td><td>$${item.price.toFixed(2)}</td><td><button class="btn-delete" onclick="deleteItem(${item.id})">Delete</button></td>`;
    });
}

function deleteItem(id){
    inventory = inventory.filter(i => i.id !== id);
    localStorage.setItem('pos_inventory', JSON.stringify(inventory));
    renderInventory();
}

function renderTransactions(){
    const body = document.getElementById('transactions-body');
    body.innerHTML = '';
    transactions.forEach(txn => {
        const row = body.insertRow();
        row.innerHTML = `<td>${txn.date}</td><td>${txn.id}</td><td>${txn.items}</td><td>${txn.total}</td>`;
    });
}

document.getElementById('add-item-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const newItem = {
        id: Date.now(),
        name: document.getElementById('item-name').value,
        price: parseFloat(document.getElementById('item-price').value),
        category: document.getElementById('item-category').value
    };
    inventory.push(newItem);
    localStorage.setItem('pos_inventory', JSON.stringify(inventory));
    e.target.reset();
    renderInventory();
    alert('Item added to inventory');
});

document.addEventListener('DOMContentLoaded', () => {
    renderCatalog();
});