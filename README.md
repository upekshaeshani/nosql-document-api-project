\# NoSQL Document API Project



This project demonstrates how to use the DataStax Astra DB Document API

with Node.js.



\## Project Overview



The application is a simple Book Management example. It stores book

documents in an Astra DB collection and demonstrates basic CRUD operations.



\## Technologies Used



\- Node.js

\- JavaScript

\- DataStax Astra DB

\- Astra DB Document API

\- `@datastax/astra-db-ts`

\- `dotenv`



\## Features



The application demonstrates:



\- Connecting to Astra DB

\- Creating a document collection

\- Creating/inserting documents

\- Reading documents

\- Reading a single document

\- Updating documents

\- Deleting documents



\## Example Document



```json

{

&#x20; "\_id": "book-001",

&#x20; "title": "The Hobbit",

&#x20; "author": "J.R.R. Tolkien",

&#x20; "year": 1937,

&#x20; "genre": "Fantasy Adventure"

}

\## Project Structure



nosql-document-api-project/

├── .env

├── .gitignore

├── index.js

├── package.json

├── package-lock.json

└── README.md



\## CRUD Operations



The application demonstrates the following operations:



Create



Adds book documents to the books collection.



Read



Retrieves all books and retrieves an individual book by its ID.



Update



Updates information about an existing book.



Delete



Deletes a book from the collection.



