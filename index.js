require("dotenv").config();

const { DataAPIClient } = require("@datastax/astra-db-ts");

const client = new DataAPIClient(process.env.APPLICATION_TOKEN);
const db = client.db(process.env.API_ENDPOINT);

async function main() {
  console.log("Connected to Astra DB!");

  // Create the books collection
  const collection = await db.createCollection("books", {
    checkExists: true,
  });

  console.log("Books collection is ready!\n");

  // --------------------------------
  // CREATE
  // --------------------------------

  console.log("1. CREATE");

  const books = [
    {
      _id: "book-001",
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      year: 1937,
      genre: "Fantasy",
    },
    {
      _id: "book-002",
      title: "1984",
      author: "George Orwell",
      year: 1949,
      genre: "Dystopian",
    },
    {
      _id: "book-003",
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
      genre: "Classic",
    },
  ];

  for (const book of books) {
    try {
      await collection.insertOne(book);
      console.log(`Added: ${book.title}`);
    } catch (error) {
      if (error.message.includes("already exists")) {
        console.log(`Already exists: ${book.title}`);
      } else {
        throw error;
      }
    }
  }

  // --------------------------------
  // READ
  // --------------------------------

  console.log("\n2. READ");

  const allBooks = await collection.find({}).toArray();

  console.log(`Found ${allBooks.length} books:`);

  allBooks.forEach((book) => {
    console.log(
      `- ${book.title} by ${book.author} (${book.year})`
    );
  });

  // --------------------------------
  // READ ONE
  // --------------------------------

  console.log("\n3. READ ONE");

  const book = await collection.findOne({
    _id: "book-001",
  });

  console.log(book);

  // --------------------------------
  // UPDATE
  // --------------------------------

  console.log("\n4. UPDATE");

  await collection.updateOne(
    { _id: "book-001" },
    {
      $set: {
        year: 1937,
        genre: "Fantasy Adventure",
      },
    }
  );

  const updatedBook = await collection.findOne({
    _id: "book-001",
  });

  console.log("Updated book:");
  console.log(updatedBook);

  // --------------------------------
  // DELETE
  // --------------------------------

  console.log("\n5. DELETE");

  await collection.deleteOne({
    _id: "book-003",
  });

  console.log("Deleted: To Kill a Mockingbird");

  // --------------------------------
  // FINAL LIST
  // --------------------------------

  console.log("\n6. FINAL BOOK LIST");

  const finalBooks = await collection.find({}).toArray();

  finalBooks.forEach((book) => {
    console.log(
      `- ${book.title} by ${book.author}`
    );
  });

  console.log("\nCRUD operations completed successfully!");
}

main().catch((error) => {
  console.error("\nApplication error:");
  console.error(error);
});