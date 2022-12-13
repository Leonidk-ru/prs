const { XMLParser, XMLValidator} = require('fast-xml-parser');
var fs = require('fs'),
    jObj,
    inspect = require('eyes').inspector({maxLength: false})
const parser = new XMLParser();
fs.readFile(__dirname + '/feed_test_5.xml', function(err, data) {
let jObj = parser.parse(data);
 console.dir(jObj.xml.source.vacancies.vacancy.salary)
 // let message = inspect(jObj)
})
// console.dir(jObj)