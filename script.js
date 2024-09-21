let products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 }
  ];
  
  let cart = [];
  
  function displayProducts() {
    const productList = document.querySelector('.product-list');
    products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      productDiv.innerHTML = `
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productList.appendChild(productDiv);
    });
  }
  
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
  }
  
  function updateCart() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
  
    const cartItems = document.querySelector('.cart-items');
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
      const cartItem = document.createElement('div');
      cartItem.innerHTML = `
        <p>${item.name} - $${item.price} <button onclick="removeFromCart(${index})">Remove</button></p>
      `;
      cartItems.appendChild(cartItem);
    });
  }
  
  function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
  }
  
  document.addEventListener('DOMContentLoaded', displayProducts);




  const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/ecommerce', { useNewUrlParser: true, useUnifiedTopology: true });

const Product = mongoose.model('Product', { name: String, price: Number });

app.get('/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.post('/orders', (req, res) => {
  // Logic to handle order creation
  res.send('Order received');
});

app.listen(3000, () => console.log('Server running on port 3000'));

  