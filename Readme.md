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

## Frontend Snapshot

Home Page:

Featured Watches

![image](https://github.com/murlipatel1/e-commerce-watch-store/assets/100035961/a934f9bc-192f-445b-94b1-a15caac52ab9)


New arrivals

![image](https://github.com/murlipatel1/e-commerce-watch-store/assets/100035961/d74569b2-dee7-4bf3-aa2e-8ec632d96132)

Cart to buy the items

![image](https://github.com/murlipatel1/e-commerce-watch-store/assets/100035961/b0b24fb1-a63d-43fc-8864-ea9a41b01142)

Payment Page

![image](https://github.com/murlipatel1/e-commerce-watch-store/assets/100035961/dbbd2250-e665-4ca0-84ab-ba742e56b4bf)

Admin Dashboard

![image](https://github.com/murlipatel1/e-commerce-watch-store/assets/100035961/b66afa3d-6212-4355-8931-9f9dba05ba5c)

## Backend Snapshot

![image](https://github.com/murlipatel1/e-commerce-watch-store/assets/100035961/8be245a8-faa5-4197-8594-22f7b4706e71)


## MongoDB Snapshot

![image](https://github.com/murlipatel1/e-commerce-watch-store/assets/100035961/0a21b297-c295-4cc4-832b-5268b534d155)

