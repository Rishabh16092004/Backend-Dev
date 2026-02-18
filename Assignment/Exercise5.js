const express = require("express");
const app = express();
app.use(express.json());

let books = [
  { id: 1, title: "Atomic Habits", author: "James Clear", year: 2018 },
  { id: 2, title: "Deep Work", author: "Cal Newport", year: 2016 },
  { id: 3, title: "Ikigai", author: "Hector Garcia", year: 2017 },
  { id: 4, title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
];

app.get("/search", (req, res) => {
  const { title } = req.query;

  if (!title) return res.send("Provide title query");

  const result = books.filter(b =>
    b.title.toLowerCase().includes(title.toLowerCase())
  );

  res.json(result);
});


app.listen(8000, () => console.log("Server running"));
