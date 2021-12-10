const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: "crud"
});

db.connect(error =>{
    if(error) throw error;
    console.log('Database server running!');
})

module.exports = db;