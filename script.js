let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  renderCart();
}

function renderCart() {
  const container = document.getElementById('cartItems');
  container.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    const div = document.createElement('div');
    div.style.display = 'flex';
    div.style.justifyContent = 'space-between';

    const text = document.createElement('span');
    text.textContent = `${item.name} - ${item.price} MAD`;

    const remove = document.createElement('span');
    remove.textContent = '❌';
    remove.style.cursor = 'pointer';
    remove.onclick = () => removeItem(index);

    div.appendChild(text);
    div.appendChild(remove);
    container.appendChild(div);

    total += item.price;
  });

  document.getElementById('total').textContent = total;
}

function removeItem(index) {
  cart.splice(index, 1);
  renderCart();
}

function sendWhatsApp() {
  let message = 'Order:%0A';
  let total = 0;

  cart.forEach(item => {
    message += `${item.name} - ${item.price} MAD%0A`;
    total += item.price;
  });

  message += `Total: ${total} MAD`;

  let phone = '+212617487715';
  let url = `https://wa.me/${phone}?text=${message}`;

  window.open(url, '_blank');
}
