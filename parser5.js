const fs = require('fs-extra');
const xml2js = require('xml2js');
const parser = new xml2js.Parser();

const path = "feed_test_5.xml";

fs.readFile(path, {encoding: 'utf-8'}, function(error, data) {
     parser.parseString(data, function(err, res) {
         console.log(JSON.stringify(res.JMdict.entry, null, 4));
     });

});