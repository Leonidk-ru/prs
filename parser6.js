var fs = require('fs'),
    inspect = require('eyes').inspector({maxLength: false}),
    xml2js = require('xml2js');
  var message, vac, vacancies, vacancy;
var parser = new xml2js.Parser();

fs.readFile(__dirname + '/feed_test_5.xml', function(err, data) {
  let vac = parser.parseString(data, function (err, result) {
           let vacancies = result.source.vacancies[0].vacancy;
           module.export = vacancies;
//         const message = rse(vacancy);
         //console.log(vacancy)    

 vacancies.forEach(function(item)  {
           console.dir( item );
         });

  //       console.log(vacancies[1].category[2]);
         //        console.log(message);
    })
}) 

console.log(vacancies) 
 //  console.log(message);

 /* const express = require('express')
const app = express()
const port = 8888

app.get('/', (req, res) => {
    
    return res.send(JSON.stringify(message));
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

*/