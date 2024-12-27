# BlinkIt Clone - MERN Stack Project

## Overview
BlinkIt Clone is a web application that replicates the functionality of BlinkIt, an online grocery delivery platform. This project is built using the MERN (MongoDB, Express.js, React.js, and Node.js) stack. It allows users to browse products, add items to their cart, and place orders efficiently.

## Features
- **User Authentication**: Sign up, log in, and log out functionality with JWT-based authentication.
- **Product Management**: View products with details such as name, price, and category.
- **Cart Functionality**: Add, remove, and update product quantities in the cart.
- **Order Management**: Place orders and view order history.
- **Admin Panel**: Add, update, and delete products (admin-only feature).
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Tech Stack
### Frontend
- **React.js**: For building user interfaces.
- **Redux**: For state management.
- **Axios**: For making API requests.
- **CSS/Bootstrap**: For styling and responsive design.

### Backend
- **Node.js**: Runtime environment.
- **Express.js**: Web framework.
- **MongoDB**: Database for storing application data.
- **Mongoose**: ODM library for MongoDB.

### Other Tools
- **JWT**: For user authentication.
- **bcryptjs**: For password hashing.
- **cloudinary**: For image hosting.
- **cookie-parser**: For handling cookies.
- **cors**: For Cross-Origin Resource Sharing.
- **dotenv**: For environment variable management.
- **helmet**: For securing HTTP headers.
- **morgan**: For HTTP request logging.
- **multer**: For file uploads.
- **nodemon**: For automatic server restarts during development.
- **resend**: For email services.
- **stripe**: For payment processing.

## Installation
### Prerequisites
- Node.js and npm installed.
- MongoDB instance running locally or in the cloud.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/blinkit-clone.git
   cd blinkit-clone
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   cd client
   npm install
   cd server
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the `backend` directory with the following:
     ```env
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     CLOUDINARY_URL=your_cloudinary_url # Optional
     STRIPE_SECRET_KEY=your_stripe_secret_key # Optional
     ```

4. Start the application:
   - Start the backend:
     ```bash
     cd server
     npm start
     ```
   - Start the frontend:
     ```bash
     cd client
     npm start
     ```

5. Open your browser and navigate to `http://localhost:3000`.
