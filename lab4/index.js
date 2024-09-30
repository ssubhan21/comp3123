const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());


app.get('/hello', (req, res) => {
    res.send('Hello Express JS');
});


app.get('/user', (req, res) => {
    const { firstname, lastname } = req.query;
    res.send(`Hello, ${firstname} ${lastname}`);
});



app.post('/user/:firstname/:lastname', (req, res) => {
    const { firstname, lastname } = req.params;
    res.send(`User created: ${firstname} ${lastname}`);
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
