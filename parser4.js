var fs = require('fs');
 var slash = require('slash');
var xml2js = require('xml2js');

var parser = new xml2js.Parser();

let filename = slash(__dirname+'/feed_test_5.xml');

// console.log(filename);

fs.readFile(filename,  "utf8", function(err, data) {

    if(err) {
        console.log('Err1111');
        console.log(err);
    } else {
        //console.log(data);
        // data.toString('ascii', 0, data.length)

        parser.parseString(data.replace(/&(?!(?:apos|quot|[gl]t|amp);|#)/g, '&amp;'), function (err, result) {
            if(err) {
                console.log('Err');
                console.log(err);
            } else {
                console.log(JSON.stringify(result));
                console.log('Done');
            }            
        });
    }
});