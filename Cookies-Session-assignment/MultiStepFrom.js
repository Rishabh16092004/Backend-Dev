const express = require("express");
const session = require("express-session");

const app = express();

// Middleware
app.use(express.json());

app.use(
  session({
    secret: "secret123",
    resave: false,
    saveUninitialized: true,
  })
);


//STEP 1: Basic Info

app.post("/step1", (req, res) => {
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(400).json({
      message: "Name and Age are required",
    });
  }

  req.session.formData = {
    ...req.session.formData,
    name,
    age,
  };

  res.json({
    message: "Step 1 saved",
    data: req.session.formData,
  });
});

// STEP 2: Contact Info

app.post("/step2", (req, res) => {
  if (!req.session.formData) {
    return res.status(400).json({
      message: "Complete Step 1 first",
    });
  }

  const { email, phone } = req.body;

  if (!email || !phone) {
    return res.status(400).json({
      message: "Email and Phone are required",
    });
  }

  req.session.formData = {
    ...req.session.formData,
    email,
    phone,
  };

  res.json({
    message: "Step 2 saved",
    data: req.session.formData,
  });
});

// REVIEW DATA

app.get("/review", (req, res) => {
  res.json({
    message: "Current form data",
    data: req.session.formData || {},
  });
});

// FINAL SUBMIT

app.post("/submit", (req, res) => {
  if (!req.session.formData) {
    return res.status(400).json({
      message: "No data found",
    });
  }

  const finalData = req.session.formData;

  console.log("Final Submitted Data:", finalData);

  // destroy session after submit
  req.session.destroy();

  res.json({
    message: "Form submitted successfully",
    data: finalData,
  });
});

// RESET (OPTIONAL)

app.get("/reset", (req, res) => {
  req.session.destroy();
  res.json({ message: "Session reset done" });
});

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});