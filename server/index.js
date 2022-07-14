const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mysql = require("mysql")
const cors = require('cors')

const db = mysql.createPool({
    host: "150.161.192.36",
    user: "sentinela",
    password: "5gmGhuh6",
    database: "sentinela_dev"
});

app.use(cors())

app.use(express.json())

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/api/get_link", (req, res) => {
    const sqlSelect = "SELECT * FROM links";
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })

})

app.post("/api/insert_link", (req, res) => {
    const sqlInsert = "INSERT INTO links (url, descricao) VALUES (?, ?)"

    const urlName = req.body.urlName
    const descricaoName = req.body.descricaoName

    db.query(sqlInsert, [urlName, descricaoName], (err, result) => {
        console.log(result)
    });
});

app.listen(3001, () => {
    console.log("running on port 3001")
});
