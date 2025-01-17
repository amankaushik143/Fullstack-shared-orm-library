# Project: Shared ORM Library 

## Overview
This project demonstrates using TypeORM with MySQL to manage database schema and run migrations efficiently. It includes setup for defining entities, generating migrations, and applying them to the database.

---

## Prerequisites

1. **Node.js**: Ensure you have Node.js installed (v14+ recommended).
2. **MySQL**: Set up a MySQL server and create a database (e.g., `MyStore`).
3. **TypeScript**: Ensure TypeScript is installed globally or locally in the project.

---

## Project Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd shared-orm-library
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Update environment variables**:
   Configure your database connection details in `src/data-source.ts`:
   ```typescript

   const AppDataSource = new DataSource({
     type: 'mysql',
     host: 'localhost',
     port: 3306,
     username: 'your_username',
     password: 'your_password',
     database: 'MyStore',
     entities: [Product, Category],
     migrations: [path.join(__dirname, './migrations/*.ts')],
     synchronize: false,
     logging: true,
   });

   ```

4. **Compile TypeScript**:
   Compile your TypeScript files to JavaScript:
   ```bash
   tsc
   ```

---

## Scripts in `package.json`

Add the following scripts to `package.json` to simplify migration and database tasks:
```json
"scripts": {
  "typeorm": "npx typeorm-ts-node-commonjs --dataSource src/data-source.ts",
  "typeorm:generate": "npm run typeorm migration:generate src/migrations/Migration --timestamp",
  "typeorm:run": "npm run typeorm migration:run",
  "typeorm:revert": "npm run typeorm migration:revert",
  "start": "ts-node src/index.ts"
}
```

---

## Generating and Running Migrations

1. **Generate a new migration**:
   ```bash
   npm run typeorm:generate
   ```

2. **Apply migrations to the database**:
   ```bash
   npm run typeorm:run
   ```

3. **Revert the last migration (if needed)**:
   ```bash
   npm run typeorm:revert
   ```

4. **List pending migrations**:
   ```bash
   npx ts-node ./node_modules/typeorm/cli.js migration:show -d src/data-source.ts
   ```

---


## Additional Notes
- Ensure MySQL server is running before applying migrations.
- Always verify the `migrations` table for applied migration records.



