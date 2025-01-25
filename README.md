# Project: Shared ORM Library 

This is a shared ORM library built using TypeORM and TypeScript. It provides a modular approach for managing entities, database migrations, and data access logic.


## Features

- Shared ORM setup for managing multiple entities and migrations.
- TypeORM-based database interactions.
- Modular and reusable design.
- Environment configuration for flexible deployment.

---

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14+)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/) or another supported database
- [Git](https://git-scm.com/)

---

## Installation

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd shared-orm-library
   ```

2. **Install Dependencies:**
   Using npm:
   ```bash
   npm install
   ```
   Or using yarn:
   ```bash
   yarn install
   ```

3. **Set Up Environment Variables:**
   Create a `.env` file in the root directory and configure it as follows:
   ```env
   NODE_ENV=development
   DB_HOST=localhost
   DB_PORT=3306
   DB_USERNAME=your_db_user
   DB_PASSWORD=your_db_password
   DB_NAME=your_db_name
   ```

---

## Configuration

- **Database Configuration:** Update the `src/data-source.ts` file to match your database credentials.
- **TypeORM Configuration:** Ensure your `.env` file has all required variables.

---

## Running the Application

1. **Development Mode:**
   Start the library in development mode with `ts-node-dev`:
   ```bash
   npm run dev
   ```

2. **Production Mode:**
   Build the library and run the application:
   ```bash
   npm run build
   npm start
   ```

---

## Database Migrations

1. **Generate a Migration:**
   ```bash
   npm run migration:generate 
   ```

2. **Run Migrations:**
   ```bash
   npm run migration:run
   ```

3. **Revert Migrations:**
   ```bash
   npm run migration:revert
   ```

