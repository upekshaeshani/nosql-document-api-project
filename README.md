# NoSQL Document API Project

This project demonstrates how to use the **DataStax Astra DB Document API** with **Node.js**.

The application is a simple Book Management system that stores book documents in an Astra DB collection and demonstrates the main CRUD (Create, Read, Update, Delete) operations.

## Project Overview

The application connects to a DataStax Astra DB database using the Astra DB Document API.

It demonstrates how to:

- Connect a Node.js application to Astra DB
- Create a document collection
- Insert documents
- Retrieve documents
- Retrieve a single document by ID
- Update an existing document
- Delete a document

## Technologies Used

- **Node.js**
- **JavaScript**
- **DataStax Astra DB**
- **Astra DB Document API**
- **@datastax/astra-db-ts**
- **dotenv**
- **Git and GitHub**

## Project Structure

```text
nosql-document-api-project/
│
├── .gitignore
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

> Note: The `.env` file is used locally to store database credentials but is intentionally excluded from GitHub for security reasons.

## Database Collection

The application uses a collection named:

```text
books
```

Each book is stored as a document.

### Example Document

```json
{
  "_id": "book-001",
  "title": "The Hobbit",
  "author": "J.R.R. Tolkien",
  "year": 1937,
  "genre": "Fantasy Adventure"
}
```

## CRUD Operations

### 1. Create

The application inserts book documents into the `books` collection.

Example:

```javascript
await collection.insertOne({
  _id: "book-001",
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  year: 1937,
  genre: "Fantasy"
});
```

The application also adds additional books to demonstrate storing multiple documents.

### 2. Read

The application retrieves all books from the collection.

```javascript
const allBooks = await collection.find({}).toArray();
```

It also retrieves an individual book using its document ID:

```javascript
const book = await collection.findOne({
  _id: "book-001"
});
```

### 3. Update

The application updates an existing book using `updateOne()`.

For example, the genre of *The Hobbit* is updated:

```javascript
await collection.updateOne(
  { _id: "book-001" },
  {
    $set: {
      genre: "Fantasy Adventure"
    }
  }
);
```

### 4. Delete

The application deletes a book using its document ID:

```javascript
await collection.deleteOne({
  _id: "book-003"
});
```

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/upekshaeshani/nosql-document-api-project.git
```

Navigate into the project:

```bash
cd nosql-document-api-project
```

### 2. Install dependencies

Run:

```bash
npm install
```

## Configuration

Create a `.env` file in the project root.

Add your Astra DB connection details:

```env
API_ENDPOINT=YOUR_ASTRA_API_ENDPOINT
APPLICATION_TOKEN=YOUR_ASTRA_APPLICATION_TOKEN
```

Replace the placeholder values with your own Astra DB credentials.

**Never share or commit your application token.**

## Running the Application

Run the application with:

```bash
node index.js
```

The application connects to Astra DB and performs the CRUD operations.

## Example Output

```text
Connected to Astra DB!
Books collection is ready!

1. CREATE
Already exists: The Hobbit
Added: 1984
Added: To Kill a Mockingbird

2. READ
Found 3 books:
- To Kill a Mockingbird by Harper Lee (1960)
- 1984 by George Orwell (1949)
- The Hobbit by J.R.R. Tolkien (1937)

3. READ ONE
{
  _id: 'book-001',
  title: 'The Hobbit',
  author: 'J.R.R. Tolkien',
  year: 1937,
  genre: 'Fantasy'
}

4. UPDATE
Updated book:
{
  _id: 'book-001',
  title: 'The Hobbit',
  author: 'J.R.R. Tolkien',
  year: 1937,
  genre: 'Fantasy Adventure'
}

5. DELETE
Deleted: To Kill a Mockingbird

6. FINAL BOOK LIST
- 1984 by George Orwell
- The Hobbit by J.R.R. Tolkien

CRUD operations completed successfully!
```

## Environment Variables and Security

Database credentials are stored in a local `.env` file.

The `.env` file is excluded from GitHub using `.gitignore`:

```text
node_modules/
.env
```

This prevents sensitive Astra DB credentials from being committed to the repository.

## Learning Objectives

This project demonstrates practical use of a NoSQL document database and provides experience with:

- NoSQL databases
- Document-based data storage
- Astra DB
- Document API
- Node.js database connections
- CRUD operations
- Environment variables
- Git and GitHub

## Conclusion

This project demonstrates how a Node.js application can connect to DataStax Astra DB and perform basic document database operations.

The project successfully implements:

- Database connection
- Collection creation
- Document insertion
- Document retrieval
- Single-document retrieval
- Document updates
- Document deletion

## Author

**Upeksha Eshani**

GitHub:  
https://github.com/upekshaeshani
