const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const themeToggler = document.querySelector(".theme-toggler");

//SHOW SIDEBAR
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

//CLOSE SIDEBAR 
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

//CHANGE THEME COLOR
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
    // Teóricamente la siguiente linea es mas corta, pero no funciona.
    // themeToggler.querySelector('span').classList.toggle('active');
})


//FILLING ORDERS

Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = ` <td>${order.productName}</td>
                        <td>${order.productNumber}</td>
                        <td>${order.paymentStatus}</td>
                        <td class="${order.shipping === 'Declined' ? 'danger' : order.shipping === 'Pending' ? 'warning' : 'success'}">${order.shipping}</td>
                        <td class="primary">Details</td>`;
    
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})