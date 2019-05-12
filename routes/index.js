const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')

const { API_KEY } = process.env

// GET /
router.get('/', async (req, res) => {

  try {

    // url
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=demo`

    // get stock feed
    const response = await fetch(url)
    const data = await response.json()
    const { 
      'Meta Data': metaData,
      'Time Series (5min)': timeSeries
    } = data

    // render index page
    res.render('index', { metaData, timeSeries })

  } catch (error) {
    
    // send error message
    res.send(error.message)
  }
})

module.exports = router
