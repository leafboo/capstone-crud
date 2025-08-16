import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to the capstone CRUD API")
});

app.get('/users/:userId', (req, res) => {

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