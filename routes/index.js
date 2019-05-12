const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')

const { API_KEY } = process.env

// GET /
router.get('/', async (req, res) => {

  // url
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=demo`

  // get stock feed
  const response = await fetch(url)
  const data = await response.json()

  res.send(data)
})

module.exports = router
