const express = require("express");
const app = express();
app.use(express.json());

let books = [
  { id: 1, title: "Atomic Habits", author: "James Clear", year: 2018 },
  { id: 2, title: "Deep Work", author: "Cal Newport", year: 2016 },
  { id: 3, title: "Ikigai", author: "Hector Garcia", year: 2017 },
  { id: 4, title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
];

function validateYear(req, res, next) {
  const { year } = req.body;
  if (year === undefined) return next();
  if (typeof year !== "number" || year < 1500 || year > 2026) {
    return res.status(400).json({error: "Year must be number between 1500 and 2026"});
  }
  next();
}

app.get("/books",(req,res)=>{
    res.json(books);
})

app.post("/books", validateYear, (req, res) => {
  const newBook = {
    id: books.length + 1,
    ...req.body
  };

  books.push(newBook);
  res.json(newBook);
});


app.listen(8000, () => console.log("Server running"));
