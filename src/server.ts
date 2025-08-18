import express from 'express';
import mysql from 'mysql2';

const app = express();

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'd33zNutz',
    database: 'capstone',
    port: 3306,
    connectionLimit: 10
});

app.get('/', (req, res) => {
    res.send("Welcome to the capstone CRUD API")
});

app.get('/users/:userId', (req, res) => {
    const query = `SELECT * FROM Users WHERE Id = ${req.params.userId}`;
});
app.get('/users/:userId/workspaces', (req, res) => {

});
app.get('/users/:userId/workspaces/:workspaceId', (req, res) => {

});
app.get('/users/:userId/workspaces/:workspaceId/researchPapers', (req, res) => {

});


app.post('/users', (req, res) => {

});
app.post('/users/:userId/workspaces', (req, res) => {

});
app.post('/users/:userId/workspaces/:workspaceId/researchPapers', (req, res) => {

});

app.listen(3000, () => {
    console.log("Listening in localhost:3000")
});