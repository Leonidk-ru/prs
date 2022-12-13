var eyes = require('eyes');
 var https = require('https');
 var fs = require('fs');
 var xml2js = require('xml2js');
 var parser = new xml2js.Parser();

const { XMLParser, XMLBuilder, XMLValidator} = require('fast-xml-parser');
const parser2 = new XMLParser();




 parser.on('error', function(err) { console.log('Parser error', err); });

 var data = '';
 https.get('https://raw.githubusercontent.com/Leonidk-ru/prs/main/feed_test_5.xml', function(res) {
     if (res.statusCode >= 200 && res.statusCode < 400) {
       res.on('data', function(data_) { data += data_.toString(); });
       res.on('end', function() {
         console.log('data', data);
         parser.parseString(data, function(err, result) {
           console.log('FINISHED', err, result);
         });
         let jObj = parser2.parse(data);
         const builder = new XMLBuilder();
         const xmlContent = builder.build(jObj);
         console.log( xmlContent);
       });
     }
   });

 