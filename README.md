# Luflix
![Luflix home screenshot](./client/src/assets/luflix.png)
Welcome to **Luflix**, an application designed to emulate Netflix but tailored to showcase _my_ favorite shows and movies. This project is a personal collection of entertainment that I love, providing a customized streaming experience.

## Features

- **User Authentication**: Sign up and log in to access your personal collection.
- **Browse Movies and Shows**: Explore a curated list of my favorite films and series.
- **Watch Trailers/Top moments**: Get a sneak peek by watching trailers or a compilation of top moments of the shows and movies.
- **Interactive Interface**: Enjoy a smooth and responsive user experience, similar to Netflix.
- **Fake Payments with Stripe**: Simulate a payment process using Stripe for a more realistic experience.
- **Prisma Integration**: Utilize Prisma as an ORM for seamless database interactions.

## Technologies Used

- **React**: For building the user interface.
- **TypeScript**: To enhance code quality and maintainability.
- **Tailwind CSS**: For styling and responsive design.
- **Node.js**: Backend server for handling requests.
- **PostgreSQL**: Database for storing user information and media data.
- **Stripe**: For handling fake payment processing.
- **Prisma**: For managing database schemas and queries.

## Educational Purpose

Please note that this application is **not** intended to work exactly like a streaming service. It was developed primarily for educational purposes to improve my skills in web development.

## Getting Started

1. **Clone the repository**:

   ```bash
   git clone https://github.com/LuciaBortolozzi/luflix.git
   ```

2. **Install dependencies**:

   For server side:

   ```bash
   cd luflix/server
   npm install
   ```

   For client side:

   ```bash
   cd luflix/client
   npm install
   ```

3. **Set up the environment**: Create a `.env` file and configure your database connection.

4. **Run the application**:

   For server side:

   ```bash
   cd luflix/server
   npx prisma studio
   npm run start:dev
   ```

   For client side:

   ```bash
   cd luflix/client
   npm run dev
   ```

## Contributing

Feel free to contribute by submitting issues or pull requests. I'd love to hear your feedback and suggestions!

## License

This project is open-source and available under the [MIT License](LICENSE).

---

Feel free to modify any sections or add additional information as needed!
