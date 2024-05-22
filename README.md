# E-commerce API

This is an E-commerce API build with Node.js, Express,MongoDB, Mongoose, and TypeScript. It supports CRUD operations for products and orders and includes input validation with Zod.

## Features

- Product Management (Create, Read, Update, Delete)
- Order Management (Create, Read, Read With Email)
- Inventory Management
- Input Validation with Zod
- Mostly Error Handling

## Prerequisites

- Node.js
- npm or yarn
- MongoDB
- Eslint

## Getting Started

1. **Clone the Repository**

2. **Install Dependencies**
   Using npm:

or using yarn:

3. **Set Up Environment Variables**
   Create a `.env` file:

4. **Run the Server**
   Using npm:

## API Endpoints

### Products

1. **Create a Product**

- Endpoint: `/api/products`
- Method: `POST`
- Request Body:
  ```json
  {
    "name": "Product Name",
    "description": "Product Description",
    "price": 100,
    "category": "Category",
    "tags": ["tag1", "tag2"],
    "variants": [
      {
        "type": "Color",
        "value": "Red"
      }
    ],
    "inventory": {
      "quantity": 10,
      "inStock": true
    }
  }
  ```

2. **Get All Products**

- Endpoint: `/api/products`
- Method: `GET`

3. **Get a Single Product**

- Endpoint: `/api/products/:productId`
- Method: `GET`

4. **Update a Product**

- Endpoint: `/api/products/:productId`
- Method: `PUT`

5. **Delete a Product**

- Endpoint: `/api/products/:productId`
- Method: `DELETE`

6. **Search Products**

- Endpoint: `/api/products/search?Term=searchTerm`
- Method: `GET`

### Orders

1. **Create an Order**

- Endpoint: `/api/orders`
- Method: `POST`
- Request Body:
  ```json
  {
    "email": "kmc@example.com",
    "productId": "productId",
    "price": 100,
    "quantity": 2
  }
  ```

2. **Get All Orders**

- Endpoint: `/api/orders`
- Method: `GET`

3. **Get Orders by Email**

- Endpoint: `/api/orders?email=user@example.com`
- Method: `GET`
