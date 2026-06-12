const express = require("express");
const cors = require("cors");

const app = express();

const users=[];
app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});

// Jobs Route
app.get("/jobs", (req, res) => {
  res.json([
    {
      id: 1,
      title: "Frontend Developer",
      company: "ABC Tech"
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "XYZ Solutions"
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "Tech Solutions"
    },
    {
      id: 4,
      title: "UI/UX Designer",
      company: "Creative Studio"
    },
    {
      id: 5,
      title: "Data Analyst",
      company: "Data Corp"
    }
  ]);
});

// Register Route
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  users.push({
    name,
    email,
    password
  });

  res.json({
    message: "User Registered Successfully"
  });
});

// Login Route
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
    res.json({
      message: "Login Successful"
    });
  } else {
    res.json({
      message: "Invalid Email or Password"
    });
  }
});

// Start Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});