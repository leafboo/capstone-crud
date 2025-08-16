import mysql from 'mysql2'

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'capstone',
    port: 3333
})

connection.connect((error) => {
    if (error) {
        console.error('error connecting: ' + error.stack);
        return;
    }

    console.log("Connection successful with id: " + connection.threadId);
});

connection.query('SELECT * FROM ResearchPapers', (error, results, fields) => {
    if (error) {
        console.error('error connecting: ' + error.stack);
        return;
    }
    console.log(results);
});

connection.end();