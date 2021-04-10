const { json } = require('express')
const express = require('express')
const app = express()
const cars = require('./db')


app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('home', { cars: cars })
})
app.get('/cars', (req, res) => {
    res.send(cars)
})

app.listen(3000, () => {
    console.log('start server at port 3000.')
})

