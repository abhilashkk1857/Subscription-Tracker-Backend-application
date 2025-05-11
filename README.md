# Subscription Tracker

The **Subscription Tracker** is a backend application designed to help users efficiently manage and monitor their recurring payments. Built with **Node.js, Express.js, and MongoDB**, this project provides a robust API for tracking active subscriptions, managing user accounts, and ensuring secure authentication.

## Features
- 🔹 **User Authentication** – Secure login and signup using JWT-based authentication.
- 🔹 **Subscription Management** – Add, update, delete, and retrieve subscription details.
- 🔹 **User Management** – Manage user profiles and retrieve user-specific data.
- 🔹 **Middleware Integration** – Includes custom middlewares for authentication, error handling, and Arcjet-based bot/email validation.
- 🔹 **Data Validation** – Schema validation and constraints using Mongoose.
- 🔹 **RESTful API** – Well-structured and versioned APIs for seamless interaction.
- 🔹 **Database Integration** – MongoDB for efficient data storage and retrieval.
- 🔹 **Rate Limiting and Bot Detection** – Powered by Arcjet for enhanced security.
- 🔹 **Error Handling** – Centralized error handling for better debugging and user feedback.

## Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT (JSON Web Tokens)
- **Middleware:** Arcjet for bot detection and email validation
- **Tools:** Git, GitHub, Postman

## Project Structure
```
src/
├── config/               # Configuration files (environment variables, Arcjet setup)
├── controllers/          # API controllers for handling business logic
├── database/             # Database connection setup
├── middlewares/          # Custom middlewares (auth, error handling, Arcjet)
├── models/               # Mongoose schemas and models
├── routes/               # API route definitions
└── server.js             # Entry point of the application
```

## Installation and Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/abhilashkk1857/Subscription-Tracker-Backend-application.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Subscription-Tracker-Backend-application
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create environment files:
   - Add `.env.development.local` or `.env.production.local` with the following variables:
     ```
     PORT=5000
     DB_URI=<your_mongodb_connection_string>
     JWT_SECRET=<your_jwt_secret>
     JWT_EXPIRES_IN=1d
     ARCJET_KEY=<your_arcjet_key>
     ARCJET_ENV=LIVE
     ```
5. Start the server:
   - For development:
     ```bash
     npm run dev
     ```
   - For production:
     ```bash
     npm start
     ```

## API Endpoints
### Authentication
- `POST /api/v1/auth/sign-up` – Register a new user.
- `POST /api/v1/auth/sign-in` – Login an existing user.
- `POST /api/v1/auth/sign-out` – Logout the user.

### Users
- `GET /api/v1/users` – Retrieve all users.
- `GET /api/v1/users/:id` – Retrieve a specific user (requires authorization).

### Subscriptions
- `GET /api/v1/subscriptions` – Retrieve all subscriptions for the logged-in user.
- `POST /api/v1/subscriptions` – Create a new subscription (requires authorization).
- `PUT /api/v1/subscriptions/:id` – Update a subscription.
- `DELETE /api/v1/subscriptions/:id` – Delete a subscription.

## Contact
For any inquiries or support, please contact [abhilashkk1857](https://github.com/abhilashkk1857).


