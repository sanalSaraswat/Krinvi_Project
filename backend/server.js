const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')
const bodyParser = require('body-parser')


const app = express()

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'aimer556',
    database: 'krinvi_database',
});

db.getConnection((err) => {
    if (err) {
        console.error('Error connecting to the database: ', err);
    } else {
        console.log('Connected to the database.');
    }
});




app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/api/insert', (req, res) => {

    const name = req.body.name
    const email = req.body.email
    const number = req.body.number
    const linkedInLink = req.body.linkedInLink
    const country = req.body.country
    const state = req.body.state
    const city = req.body.city
    const pincode = req.body.pincode


    const sqlQuery = 'insert into user_info (Name, Email, Phone_no, LinkedInLink, Country, State, City, Pincode) values (?, ?, ?, ?, ?, ?, ?, ?)'

    db.query(sqlQuery, [name, email, number, linkedInLink, country, state, city, pincode], (result, error) => {
        res.send(result)
        console.log(result)
        console.log(error)
    })

})



app.listen(8000, () => {
    console.log('Listenting...')
})