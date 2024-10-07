const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const router = express.Router();

app.use(express.json()); 

router.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});

// Serve profile data
router.get('/profile', (req, res) => {
  fs.readFile('user.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading user.json:', err);
      return res.status(500).json({ error: 'Failed to read user data' });
    }
    let user;
    try {
      user = JSON.parse(data);
    } catch (parseError) {
      console.error('Error parsing user data:', parseError);
      return res.status(500).json({ error: 'Invalid user data format' });
    }
    res.json(user);
  });
});

// User login route
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  fs.readFile('user.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading user.json:', err);
      return res.status(500).json({ error: 'Failed to read user data' });
    }

    let user;
    try {
      user = JSON.parse(data);
    } catch (parseError) {
      console.error('Error parsing user data:', parseError);
      return res.status(500).json({ error: 'Invalid user data format' });
    }

    if (user.username !== username) {
      return res.json({
        status: false,
        message: "User Name is invalid"
      });
    }

    if (user.password !== password) {
      return res.json({
        status: false,
        message: "Password is invalid"
      });
    }

    return res.json({
      status: true,
      message: "User Is valid"
    });
  });
});

// User logout route
router.get('/logout/:username', (req, res) => {
  const { username } = req.params;
  res.send(`<b>${username} successfully logged out.</b>`);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Server Error');
});

app.use('/', router);

// Set up the server to listen on the specified port
const PORT = process.env.PORT || 8099;
app.listen(PORT, () => {
  console.log('Web Server is listening at port ' + PORT);
});
