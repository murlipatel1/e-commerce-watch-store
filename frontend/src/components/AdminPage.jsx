import React, { useEffect, useState } from 'react';
import './AdminDashboard.css'; // Import your CSS file

function AdminDashboard() {
  const [feedbackData, setFeedbackData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [productName, setProductName] = useState('');
  const [productGroup, setProductGroup] = useState('');
  const [productColour, setProductColour] = useState('');
  const [productDetails, setProductDetails] = useState('');
  const [productPrice, setProductPrice] = useState('');

  useEffect(() => {
    fetchDataAndDisplay();
  }, []);

  const fetchDataAndDisplay = async () => {
    try {
      // Fetch all feedback
      const feedbackResponse = await fetch("http://localhost:5000/admin/all-feedback");
      const feedbackData = await feedbackResponse.json();
      setFeedbackData(feedbackData.feedback);

      // Fetch all users
      const usersResponse = await fetch("http://localhost:5000/admin/all-users");
      const usersData = await usersResponse.json();
      setUserData(usersData.users);

      // Fetch all products
      const productsResponse = await fetch("http://localhost:5000/admin/all-products", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`
        }
      });
      const productsData = await productsResponse.json();
      setProductsData(productsData.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const addProduct = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/admin/add-product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`
        },
        body: JSON.stringify({
          name: productName,
          group: productGroup,
          colour: productColour,
          details: productDetails,
          price: productPrice
        })
      });

      if (response.ok) {
        const data = await response.json();
        alert("Product added successfully!");
        console.log(data.product);
        setProductName('');
        setProductGroup('');
        setProductColour('');
        setProductDetails('');
        setProductPrice('');
        fetchDataAndDisplay();
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Error adding product:", error);
      alert("An error occurred while adding the product. Please try again later.");
    }
  };

  const deleteProduct = async (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        const response = await fetch(`http://localhost:5000/admin/delete-product/${productId}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("adminToken")}`
          }
        });

        if (response.ok) {
          const data = await response.json();
          alert(data.message);
          fetchDataAndDisplay();
        } else {
          const errorData = await response.json();
          alert(`Error: ${errorData.error}`);
        }
      } catch (error) {
        console.error("Error deleting product:", error);
        alert("An error occurred while deleting the product. Please try again later.");
      }
    }
  };

  return (
    <div className='admindiv'>
      <header className='aheader'>
        <h1 className='ah2'>Admin Dashboard</h1>
      </header>

      <main className='amain'>
        <h2 className='ah2'>All Feedback</h2>
        <table className='atable' id="feedbackTable">
          <thead className='athead'>
            <tr className=''>
              <th className='ath'>UserId</th>
              <th className='ath'>Feedback Message</th>
            </tr>
          </thead>
          <tbody className='atbody'>
            {feedbackData && feedbackData.map((feedbackItem, index) => (
              <tr key={index}>
                <td className='atd' >{feedbackItem.userId ? feedbackItem.userId : 'N/A'}</td>
                <td className='atd' >{feedbackItem.message}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className='ah2'>All Users</h2>
        <table className='atable' id="usersTable">
          <thead className='athead'>
            <tr>
              <th className='ath'>Username</th>
              <th className='ath'>Email</th>
            </tr>
          </thead>
          <tbody className='atbody'>
            {userData && userData.map((user, index) => (
              <tr key={index}>
                <td className='atd' >{user.username}</td>
                <td className='atd' >{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className='ah2'>All Products</h2>
        <table className='atable' id="productsTable">
          <thead className='athead'>
            <tr>
              <th className='ath'>Name</th>
              <th className='ath'>Group</th>
              <th className='ath'>Colour</th>
              <th className='ath'>Details</th>
              <th className='ath'>Price</th>
              <th className='ath'>Action</th>
            </tr>
          </thead>
          <tbody className='atbody'>
            {productsData && productsData.map((product, index) => (
              <tr key={index}>
                <td className='atd'>{product.name}</td>
                <td className='atd'>{product.group}</td>
                <td className='atd'>{product.colour}</td>
                <td className='atd'>{product.details}</td>
                <td className='atd'>{product.price}</td>
                <td className='atd'>
                  <button className="delete-button" onClick={() => deleteProduct(product._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className='ah2'>Add Product</h2>
        <form className='aform' id="addProductForm" onSubmit={addProduct}>
          <label htmlFor="productName">Product Name:</label>
          <input type="text" id="productName" name="productName" value={productName} onChange={(e) => setProductName(e.target.value)} required />

          <label htmlFor="productGroup">Product Group:</label>
          <input type="text" id="productGroup" name="productGroup" value={productGroup} onChange={(e) => setProductGroup(e.target.value)} required />

          <label htmlFor="productColour">Product Colour:</label>
          <input type="text" id="productColour" name="productColour" value={productColour} onChange={(e) => setProductColour(e.target.value)} required />

          <label htmlFor="productDetails">Product Details:</label>
          <textarea id="productDetails" name="productDetails" value={productDetails} onChange={(e) => setProductDetails(e.target.value)} rows="4"></textarea>

          <label htmlFor="productPrice">Product Price:</label>
          <input type="number" id="productPrice" name="productPrice" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} step="0.01" required />

          <button type="submit">Add Product</button>
        </form>
      </main>
    </div>
  );
}

export default AdminDashboard;
