const express = require('express')
const app = express()
let port = 3000;

app.use(express.static('dist'))
app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})