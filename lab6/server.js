const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const noteRoute = require("./routes/NoteRoutes");

const DB_URL = "mongodb+srv://Subhan:sabeel16@cluster0.ugn4v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongoose.Promise = global.Promise;

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "dev-ops"
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.use("/notes", noteRoute);
app.get('/', (req, res) => {
    res.send("<h1>Welcome to Note taking application - Week06 Exercise</h1>");
});


app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});