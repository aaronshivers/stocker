require('dotenv').config()

const express = require('express')

const app = express()
const { PORT } = process.env

app.get('/', (req, res) => res.send('Hi there'))

app.listen(PORT, () => console.log(`Listening on port ${ PORT }.`))

module.exports = app
