const express = require('express')
const app = express()
const port = process.env.PORT || 8888;
var request = require('request');
var URL = 'https://raw.githubusercontent.com/Leonidk-ru/prs/main/feed_test_5.xml';

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/version', (req, res) => {
  res.send(process.env.VERSION || 'No version')
})

app.get('/parser', (req, res) => {
  request(URL, function (err, res, body) {
    if (err) throw err;
    console.log(body);
    console.log(res.statusCode);
});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
