const express = require('express')

const User = require('./api/user')

const app = express();
const port = 4000

app.get('/user', (req, res) => {
  res.json(User)
})

app.listen(port, () => {
  console.log(`Server Starts at ${port}`)
})