var fs = require('fs'),
    https = require('node:https');
    inspect = require('eyes').inspector({maxLength: false}),
    xml2js = require('xml2js');
  var message, vac, vacancies, vacancy;
var parser = new xml2js.Parser();
const xmlUrl = 'https://raw.githubusercontent.com/Leonidk-ru/prs/main/feed_test_5.xml';

https.get(xmlUrl, function(res) {
  res.on('data', function (chunk) {

  parser.parseString(chunk, function(e, result) {
    console.log(result)
}); 
   });
}).on('error', function(e) {
    console.log("Got error: " + e.message);
  });
     

//console.log(vacancies) 
// console.log(result.source.vacancies[0].vacancy)