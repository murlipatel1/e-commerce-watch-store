import React, { useState, useEffect } from 'react';
import './product.css'; // Import CSS file

const ProductDisplay = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/admin/all-products', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
          },
        });
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Function to add a product to the cart
  const addToCart = (productId) => {
    const product = products.find(p => p._id === productId);
    if (product) {
      const existingCartItem = cart.find(item => item.productId === productId);
      if (existingCartItem) {
        existingCartItem.quantity++;
        setCart([...cart]);
      } else {
        setCart([...cart, { productId, quantity: 1 }]);
      }
    }
  }

  // Function to remove a product from the cart
  const removeFromCart = (productId) => {
    const existingCartItemIndex = cart.findIndex(item => item.productId === productId);
    if (existingCartItemIndex !== -1) {
      const existingCartItem = cart[existingCartItemIndex];
      if (existingCartItem.quantity > 1) {
        existingCartItem.quantity--;
        setCart([...cart]);
      } else {
        const newCart = [...cart.slice(0, existingCartItemIndex), ...cart.slice(existingCartItemIndex + 1)];
        setCart(newCart);
      }
    }
  }

  // Function to toggle the cart modal
  const toggleCart = () => {
    if (cart.length === 0) {
      alert("Your cart is empty. Please add items to your cart first.");
      return;
    }
    setShowCart(!showCart);
  }

  // JSX for displaying cart items
  const cartItemsDisplay = cart.map(item => {
    const product = products.find(p => p._id === item.productId);
    return (
      <li key={item.productId}>
        {product.name} - Quantity: {item.quantity} - Individual Price: ${product.price * item.quantity}
        <button onClick={() => removeFromCart(item.productId)}>Remove</button>
      </li>
    );
  });

  const paymentpage = ()=>{
    window.location.href = '/payment';
  }

  const chunkArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
    arr.slice(index * size, index * size + size)
    );
  };

  // Chunk the products into arrays of 6 items each
  const chunkedProducts = chunkArray(products, Math.ceil(products.length / 3));

  // JSX for displaying products in three rows
  const productRows = chunkedProducts.map((row, index) => (
    <div key={index} className="product-column">
      {row.map(product => (
        <div key={product._id} className="product-card">
          {/* <img src={product.image} alt={product.name} /> */}
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product._id)}>Add to Cart</button>
        </div>
      ))}
    </div>
  ));

  return (
    <div className='pdiv' >
      <header>
        <h1 className='proh1'>Product Display and Cart</h1>
      </header>

      <div>
        {/* <h2 style={{ marginLeft: '30px' }}>Mens Wear</h2> */}
        <div className="product-container">
          {productRows}
        </div>
      </div>

      <div className="pcart" onClick={toggleCart}>
        Cart <span id="cart-count">{cart.reduce((total, item) => total + item.quantity, 0)}</span>
      </div>

      {showCart && (
        <div id="cart-modal" onClick={toggleCart}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Your Cart</h2>
            <ul id="cart-items">
              {cartItemsDisplay}
            </ul>
            <p id="total-cart-price"></p>
            <p id="gst-amount"></p>
            <p id="total-amount-with-gst"></p>
            <button onClick={paymentpage} id="redirectToPaymentBtn">Proceed to Payment</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDisplay;
