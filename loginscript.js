// script.js

document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
  
    const result = await response.json();
  
    if (response.ok) {
      alert(`Welcome, ${result.user}!`);
    } else {
      alert('Invalid credentials');
    }
  });
  // server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Dummy users
const users = [
  { email: 'user@example.com', password: 'password123', name: 'John Doe' },
  { email: 'admin@example.com', password: 'adminpass', name: 'Admin User' }
];

// Login endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    res.json({ message: 'Login successful', user: user.name });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));