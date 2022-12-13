const port = process.env.PORT || 8888;
var request = require('request');
var URL = 'https://raw.githubusercontent.com/Leonidk-ru/prs/main/feed_test_5.xml';

  request(URL, function (err, res, body) {
    if (err) throw err;
    console.log(body);
    console.log(res.statusCode);
});
