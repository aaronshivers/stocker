require('dotenv').config()

const express = require('express')
const fetch = require('node-fetch')

const app = express()
const { PORT } = process.env

const indexRoutes = require('./routes/index')

app.use(indexRoutes)

app.listen(PORT, () => console.log(`Listening on port ${ PORT }.`))

module.exports = app
