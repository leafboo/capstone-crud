import express from 'express';
import { pool } from './mysql.js'

const app = express();

pool.getConnection((err: unknown) => {
    if (err) {
        console.error("Connection to the database failed");
        return;
    }
    console.log("Successfully connected to the database");
})




app.get('/', (req, res) => {
    res.send("Welcome to the capstone CRUD API")
});

app.get('/users/:userId', (req, res) => {
    if (!req.params.userId) {
        console.error("userId URL parameter is empty");
        return;
    }
    const query = `SELECT * FROM Users WHERE Id = ${parseInt(req.params.userId)}`;
    pool.query(query, (err, results, fields) => {
        if (err) {
            throw err;
        }
        res.status(200);
        res.send(results);
    })
    
});
app.get('/users/:userId/workspaces', (req, res) => {
    if (!req.params.userId) {
        console.error("userId URL parameter is empty");
        return;
    }
    const query = `SELECT * FROM Workspaces WHERE UserID = ${parseInt(req.params.userId)}`;
    pool.query(query, (err, results, fields) => {
        if (err) {
            throw err;
        }
        res.status(200);
        res.send(results);
    })
});
app.get('/users/:userId/workspaces/:workspaceId', (req, res) => {
    if (!req.params.userId || !req.params.workspaceId) {
        console.error("URL parameters are empty");
        return;
    }
    const query = `SELECT * FROM Workspaces WHERE Id = ${parseInt(req.params.workspaceId)} AND UserID = ${parseInt(req.params.userId)}`;
    pool.query(query, (err, results, fields) => {
        if (err) {
            throw err;
        }
        res.status(200);
        res.send(results);
    })
});
app.get('/users/:userId/workspaces/:workspaceId/researchPapers', (req, res) => {
    if (!req.params.userId || !req.params.workspaceId) {
        console.error("URL parameters are empty");
        return;
    }
    const query = `SELECT ResearchPapers.Id, Title, YearOfPublication, Keywords, Abstract, Methods, Results, WorkspacesIn FROM ResearchPapers  
                   INNER JOIN WorkspaceResearchPapers ON ResearchPapers.Id = WorkspaceResearchPapers.PaperId
                   INNER JOIN Workspaces ON WorkspaceResearchPapers.WorkspaceId = Workspaces.Id
                   WHERE Workspaces.Id = ${parseInt(req.params.workspaceId)} AND Workspaces.UserId = ${parseInt(req.params.userId)};`;
    pool.query(query, (err, results, fields) => {
        if (err) {
            throw err;
        }
        res.status(200);
        res.send(results);
    })
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