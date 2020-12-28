const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'mysql',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const insert_sql = `INSERT INTO people(name) values('Davi')`
connection.query(insert_sql)

var html = `<h1>Full Cycle Rocks!</h1>
            <br/><br/>
            <h3>Lista de nomes:</h3>
            <br/>`

const find_sql = 'SELECT * FROM people'
connection.query(find_sql, (error, result) => {
    result.forEach(people => {
        html += `<li>${people.name}</li>`
    });
})

connection.end()

app.get('/', (req, res) => {
    res.send(html)
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})