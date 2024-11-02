

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
│   ├── styles/               # CSS configurations and custom styles
│   ├── App.js                # Main entry point for routing
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

Based on your provided project details and the current state of your full-stack e-commerce application, here are some additional points for your README file under the "Known Issues & Future Improvements" section. These include both what you've mentioned and additional potential improvements that I can observe from your structure.

## Known Issues & Future Improvements

### General
- **Deployment**: The project is not yet deployed. Set up deployment on platforms like Vercel for the frontend and possibly Heroku for the backend.
- **Code Refactoring**: 
   - The **Login** and **Register** components need to be refactored for better code structure and improved user experience.
   - Ensure **consistent component naming** conventions for better readability and maintainability.
   - **Handle Axios Messages**: Implement proper handling of all Axios operations for success and error messages across the application.
- **Performance Optimization**: Optimize image loading, lazy load components, and add proper caching strategies.

### UI & UX Improvements
- **Shopping Cart**: 
   - Display an appropriate "No products found" component when no items are in the shopping cart.
   - Ensure the cart button on the header shows the **correct number of ordered items and quantities** dynamically.
   - Refactor the product input value logic on the cart page to ensure correct data display after changes.
- **Wishlist Feature**: Implement wishlist functionality, including adding items to the wishlist and displaying a counter in the header for the number of wishlist items.
- **Search Feature**: 
   - Main menu search functionality is missing and needs improvement.
   - Improve search results with pagination or filtering by categories.
- **Animations**:
   - Add a "product added to cart" and "added to wishlist" animation to give feedback to users after actions.
   - Implement a "product deleted successfully" animation for all CRUD operations (Create, Read, Update, Delete).
- **Product Buttons**: Each product should have three distinct buttons: "Add to Cart," "Quick View," and "Add to Wishlist." Ensure these buttons work correctly and are visually clear.
- **Review System**: Add a product review feature where users can post, edit, and delete reviews for products. Display user reviews on product detail pages.

### Layout & Styling
- **Header Links**: Ensure that all header links point to the correct routes and work as expected.
- **Footer Links**: Fix or implement footer links to make them functional, leading to the appropriate sections or external pages.
- **Responsive Design**: Review the app's responsiveness on various screen sizes. Improve the mobile experience, especially for the header, footer, and main navigation.
- **Component Consistency**: Ensure consistency in design and styling across the entire app, particularly for buttons, cards, and navigation elements.

### Features to Add
- **Pagination**: Add pagination for product listing pages to handle large datasets efficiently.
- **Sort & Filter**: Implement sorting and filtering features on the product listing page to allow users to sort by price, popularity, rating, etc.
- **Product Details**: Enhance the product details page by adding additional product specifications and related products.
- **Order Management**: Allow users to view and manage their past orders, including order status and details of each ordered item.

### Error Handling & Validation
- **Error Messages**: Ensure all error messages (e.g., for failed login attempts or invalid input) are user-friendly and display correctly.
  
### Backend Communication
- **API Integration**: Refactor how Axios handles backend API calls to ensure proper error and success message handling and ensure state consistency after CRUD operations.

## Acknowledgments
- [React.js](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)

## License
This project is licensed under the MIT License - see the LICENSE file for details.

---

Feel free to update the repository URL and any additional details you might want to include!
