import mysql from 'mysql2'

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'd33zNutz',
    database: 'capstone',
    port: 3306,
    connectionLimit: 10
})

connection.getConnection((error) => {
    if (error) {
        console.error('error connecting: ' + error.stack);
        return;
    }

    console.log("Connection successful with id: ");
});

connection.query('SELECT * FROM ResearchPapers', (error, results, fields) => {
    if (error) {
        console.error('error connecting: ' + error.stack);
        return;
    }
    console.log(results);
});

connection.end();