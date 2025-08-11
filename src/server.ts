import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to the capstone CRUD API")
})

app.listen(3000, () => {
    console.log("Listening in localhost:3000")
})