

# Full-Stack E-Commerce Frontend

This repository contains the frontend of a full-stack eCommerce application built with React and React Router DOM. The frontend offers users a seamless shopping experience with features such as product browsing, shopping cart management, user registration, and login.

## Table of Contents
- Features
- Technologies
- Getting Started
- Project Structure
- Available Pages and Components
- Acknowledgments

## Features
- **Product Listing & Details**: Browse products and view detailed information, including descriptions and prices.
- **User Authentication**: Register and log in with JWT token-based authentication. Role-based access control for users.
- **Shopping Cart**: Add, view, and manage products in the shopping cart.
- **Routing**: Implemented with React Router for smooth navigation between pages.
- **Private & Public Routes**: Certain pages (e.g., user profile) are protected and require login.

## Technologies
- **Frontend**: React.js
- **Styling**: Custom Module CSS
- **Routing**: React Router DOM
- **State Management**: Context API (Product, Shopping, and Auth Contexts)
- **Icons**: React Icons
- **API Communication**: Axios for sending HTTP requests to the backend

## Getting Started

### Prerequisites
- Node.js v14+ and npm

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/ecommerce-frontend.git
   cd ecommerce-frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```


3. **Run the application**:
   ```bash
   npm start
   ```
   The application will be available at `http://localhost:3000`.

## Project Structure

```plaintext
.
├── public/                   # Static assets
├── src/
│   ├── components/           # Reusable components (e.g., footer, header, etc.)
│   ├── layouts/              # Layout components (e.g., header, footer)
│   ├── pages/                # Page components (e.g., home, product details)
│   ├── contexts/             # Context API providers for product, auth, and shopping cart
│   ├── styles/               # Tailwind CSS configurations and custom styles
│   ├── App.js                # Main entry point for routing
│   ├── index.js              # Application bootstrap
└── package.json              # Project metadata and dependencies
```

## Available Pages and Components

### Pages
- **Home** (`/`): Displays featured products and promotional content.
- **Products** (`/products`): Displays a list of all products.
- **Product Details** (`/product/:id`): Displays detailed information about a single product.
- **Register** (`/register`): User registration page.
- **Login** (`/login`): User login page.
- **User Profile** (`/userprofile`): Displays user profile (protected route).
- **Shopping Cart** (`/shoppingcart`): Displays the user's shopping cart.

### Components
- **Header**: The navigation bar visible on all pages.
- **Footer**: Footer section of the website.
- **User Profile**: User account management.
- **Product Listing**: Display list of products with filtering and sorting options.
- **Shopping Cart**: Add, remove, and update items in the shopping cart.
- **PublicRoutes & PrivateRoutes**: Components that manage public and protected route access.

### Contexts
- **ProductProviderContext**: Handles product state and interactions.
- **AuthContext**: Manages user authentication state (JWT tokens, login, logout).
- **ShoppingProviderContext**: Manages the shopping cart state and interactions.

## Acknowledgments
- [React.js](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)

## License
This project is licensed under the MIT License - see the LICENSE file for details.

---

Feel free to update the repository URL and any additional details you might want to include!
