const express = require("express");
const app = express();
app.use(express.json());

let books = [
  { id: 1, title: "Atomic Habits", author: "James Clear", year: 2018 },
  { id: 2, title: "Deep Work", author: "Cal Newport", year: 2016 },
  { id: 3, title: "Ikigai", author: "Hector Garcia", year: 2017 },
  { id: 4, title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
];

app.get("/books", (req, res) => {
  let { page = 1, limit = 2 } = req.query;

  page = Number(page);
  limit = Number(limit);

  const startIndex = (page - 1) * limit;
  const result = books.slice(startIndex, startIndex + limit);

  res.json({
    totalBooks: books.length,
    page,
    limit,
    data: result
  });
});


app.listen(8000, () => console.log("Server running"));
