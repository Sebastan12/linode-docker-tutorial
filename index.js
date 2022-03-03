const express = require('express')
const { readFile } = require('fs')
const app = express()
const port =  process.env.PORT|| 3000

app.get('/', (req, res) => {
  readFile('./home.html', 'utf-8', (err, html) => {
      if(err){
          res.send("service currenty unavailable");
      }

      res.send(html);
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})