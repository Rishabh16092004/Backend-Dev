const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  console.log("Form Data:", req.body);
  res.send(`Thanks ${name}, your message received!`);
});

app.listen(8000,()=>{
    console.log("server started");
})