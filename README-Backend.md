
# Full-Stack E-Commerce Backend

This repository contains the backend of a full-stack eCommerce application, built with Node.js, Express.js, PostgreSQL, and AWS S3 for image storage. The backend handles user management, product catalog, orders, reviews, and more, offering a complete solution for eCommerce platforms.

## Table of Contents
- Features
- Technologies
- Getting Started
- Configuration
- API Endpoints
- Project Structure
- Acknowledgments

## Features
- **User Authentication & Authorization**: Secure user login with JWT tokens and role-based access.
- **Product Management**: Manage products, brands, and images, with CRUD operations.
- **Order Management**: Manage user orders and order items with detailed product information.
- **Review System**: Allow users to create, update, and delete reviews for products.
- **Image Storage**: Integrate with Amazon S3 for image upload and retrieval.
- **Data Validation & Error Handling**: Comprehensive validation with express-validator and custom error handling.

## Technologies
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL, Sequelize ORM
- **Authentication**: JWT
- **File Storage**: Amazon S3
- **Environment Management**: dotenv
- **Validation**: express-validator

## Getting Started

### Prerequisites
- Node.js v14+ and npm
- PostgreSQL database
- AWS account with an S3 bucket for image storage

## For Recommendation
- Before start to projet I highly recommend to watch this Amazon Aws Cloud Configuration video
-[ https://youtu.be/DNbsunwSOPM?si=7gkoKqMTe-vxTbZA](https://www.youtube.com/watch?v=DNbsunwSOPM)

### Installation

1. **Clone the repository**:
   ```bash
   https://github.com/mlbyl/CloneKnifoProjectFull.git
   cd Backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up PostgreSQL Database**:
   Create a PostgreSQL database and store the credentials for the `.env` file.

4. **Configuration**:
   Create a `.env` file in the root directory with the following keys:

   ```plaintext
   PORT=3000 #Project server port
   
   DB_NAME=your_db_name
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   DB_HOST=your_db_host
   DB_PORT=5432

   JWT_SECRET=your_jwt_secret

   AWS_ACCESS_KEY=your_aws_access_key
   AWS_SECRET_KEY=your_aws_secret_key
   AWS_REGION=your_aws_region
   AWS_BUCKET_NAME=your_s3_bucket_name
   ```

5. **Synchronize the Database**:
   ```bash
   npm start
   ```

### Running the Server
After configuring the `.env` file and synchronizing the database, start the server with:
```bash
npm start
```
The server will run on `http://localhost:3000` by default.

## Configuration

- **AWS S3**: Configure the AWS SDK in `/config/awsConfig.js`. Ensure you have access permissions for S3.
- **Database Connection**: Sequelize setup in `/config/connectDb.js`.
- **Environment Variables**: Configure database credentials, JWT secrets, and AWS keys in the `.env` file.

## API Endpoints

### User Routes
- **GET** `/api/users/`: Retrieve all users
- **GET** `/api/users/userwithorderitems/:id`: Retrieve user with order details
- **GET** `/api/users/userbyid/:id`: Retrieve user by ID
- **GET** `/api/users/userbyfirstname/:firstname`: Retrieve user by first name
- **GET** `/api/users/userbylastname/:lastname`: Retrieve user by last name
- **GET** `/api/users/userbyemail/:email`: Retrieve user by email
- **POST** `/api/users/register`: Register a new user
- **POST** `/api/users/login`: User login
- **PUT** `/api/users/update/:id`: Update user details
- **DELETE** `/api/users/delete/:id`: Delete user

### Review Routes
- **GET** `/api/reviews/:id`: Retrieve a review by ID
- **POST** `/api/reviews/create`: Create a new review
- **POST** `/api/reviews/update/:id`: Update a review by ID
- **DELETE** `/api/reviews/delete/:id`: Delete a review by ID

### Product Routes
- **GET** `/api/products/`: Retrieve all products
- **GET** `/api/products/productswithimages`: Retrieve all products with images
- **GET** `/api/products/productbyid/:id`: Retrieve a product by ID
- **GET** `/api/products/productbyname/:name`: Retrieve a product by name
- **POST** `/api/products/create`: Create a new product
- **POST** `/api/products/update/:id`: Update a product by ID
- **DELETE** `/api/products/delete/:id`: Delete a product by ID

### Image Routes
- **GET** `/api/images/imagebyid/:id`: Retrieve image by ID
- **POST** `/api/images/upload`: Upload an image
- **DELETE** `/api/images/delete/:id`: Delete an image by ID

### Order Item Routes
- **POST** `/api/orderitems/create`: Create an order item
- **PUT** `/api/orderitems/update/:id`: Update an order item by ID
- **DELETE** `/api/orderitems/delete/:id`: Delete an order item by ID

### Brand Routes
- **GET** `/api/brands/`: Retrieve all brands
- **GET** `/api/brands/brandbyid/:id`: Retrieve a brand by ID
- **GET** `/api/brands/brandbyname/:name`: Retrieve a brand by name
- **POST** `/api/brands/create`: Create a new brand
- **POST** `/api/brands/update/:id`: Update a brand by ID
- **DELETE** `/api/brands/delete/:id`: Delete a brand by ID

## Project Structure

```plaintext
.
├── config/                  # AWS and database configurations
├── controllers/             # Controllers for handling requests
├── helpers/                 # Response handlers and utilities
├── middlewares/             # Middlewares for validation, auth, and file uploads
├── models/                  # Sequelize models for database entities
├── routes/                  # Express routes for users, products, etc.
├── services/                # Business logic for controllers
├── .env                     # Environment configuration file
└── package.json             # Dependencies and scripts
```
Sure! Below is the "Known Issues and Future Enhancements" section formatted for inclusion in your README. You can place this at the end of your README file.


## Known Issues and Future Enhancements

### Known Issues
1. **Testing**: No automated tests are currently set up for this project. Adding unit and integration tests for controllers and services would improve stability and reliability.
2. **Logging**: There is minimal logging for the application. Implementing a logging system (e.g., with Winston or Morgan) could help monitor and debug issues in production.
3. **Role-Based Access Control (RBAC)**:
   - Currently, all authenticated users can access certain routes.The database currently supports role-based access control, but is not written as service code.

### Future Enhancements
1. **Complete Documentation**: 
   - Expand on API endpoint documentation, ideally with an API documentation tool like Swagger or Postman. This would help developers understand how to interact with the backend services more easily.
   - Add JSDoc comments to the codebase for better inline documentation of methods and data structures.

2. **Pagination and Filtering**:
   - For endpoints that retrieve lists of data (e.g., products, users), implementing pagination and filtering options will improve performance and usability.

3. **Email Notifications**:
   - For user-related actions like registration and order confirmations, setting up email notifications using a service like SendGrid or Amazon SES could enhance the user experience.

4. **Caching**:
   - Adding caching for frequently accessed data, like product lists, using Redis or another caching layer would improve response times and reduce database load.

5. **Environment-Specific Configurations**:
   - Configurations for different environments (development, testing, production) are not fully documented or separated. Using a library like `config` or handling this through environment variables could enhance deployment flexibility.

6. **File Upload Validation**:
   - While file uploads are managed with Multer and AWS S3, adding stricter file validation (e.g., file size limits and allowed file types) could improve security and prevent unnecessary storage costs.


## Acknowledgments
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [AWS SDK for JavaScript](https://docs.aws.amazon.com/sdk-for-javascript/)
- [PostgreSQL](https://www.postgresql.org/)
- [Multer](https://github.com/expressjs/multer)


