var express = require('express');
var xmlparser = require('express-xml-bodyparser');

var app = express();
app.use(xmlparser());