const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello World from Express!');
});

mongoose.connect('mongodb://mongo:27017/mernDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.log("Error connecting to MongoDB: ", error);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
