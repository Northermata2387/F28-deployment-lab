const express = require('express')
const path = require('path')

require('dotenv').config()

const port = process.env.PORT || 5050

const app = express()

app.use(express.json())

//THIS IS MIDDLEWARE TO SEND WHOLE FOLDER
app.use('/', express.static(path.join(__dirname, '../client/index.html')))

app.use(express.static(path.join(__dirname, '../client')))

app.listen(port, () => {
  console.log(`Docked at port` + port )
})