require('dotenv').config();
const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
});
app.get('/about', (req, res) => {
    res.send('About Us');
});

app.get('/contact', (req, res) => {
    res.send('Contact Us');
});

app.get('/services', (req, res) => {
    res.send('Our Services');
});

app.listen(process.env.PORT, () => {
    console.log(`Server listening at http://localhost:${port}`);
});