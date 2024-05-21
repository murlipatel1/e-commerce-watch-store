# User Management and E-Commerce API

This repository contains the backend code for a user management and e-commerce API built using Node.js, Express, and MongoDB. It provides functionalities for user authentication, product management, cart management, feedback submission, and payment processing.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [User Signup](#user-signup)
  - [User Login](#user-login)
  - [Update User Address](#update-user-address)
  - [Get User Address](#get-user-address)
  - [Add Product to Cart](#add-product-to-cart)
  - [Submit Feedback](#submit-feedback)
  - [Get User Details](#get-user-details)
  - [Payment Processing](#payment-processing)
- [Models](#models)
- [Middleware](#middleware)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```

2. Navigate to the project directory:
    ```bash
    cd your-repo-name
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```
4. Set up environment variables. Create a .env file in the root directory and add the following:
    ```bash
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```
5. Start the server:
    ```bash
    npm start
    ```

6. Usage
Send HTTP requests to the running server to interact with the API endpoints. The server will be running on http://localhost:3000 of frontend by default.

