var Promise = require('bluebird');
var https = require('https');
var express = require('express');
var bodyParser = require('body-parser')
var read = require('node-readability')
var Xray = require('x-ray');
var xray = Xray();
var app = express();
var fs = require('fs');
app.use(bodyParser.urlencoded({ extended: false }))
var urls = [
  'https://www.championone.com/10-100-1000m-fiber-media-converter-and-chassis-sfp-port-with-poe.html',
  'https://www.championone.com/10-100-1000m-fiber-media-converter-card-20km-rated-built-in-bi-di-optics-1310tx-1550rx-chassis-required.html',
  'https://www.championone.com/10-100-1000m-fiber-media-converter-card-20km-rated-built-in-bi-di-optics-1550tx-1310rx-chassis-required.html',
  'https://www.championone.com/10-100-1000m-fiber-media-converter-card-20km-rated-built-in-optics-chassis-required.html',
  'https://www.championone.com/10-100-1000m-fiber-media-converter-card-80km-rated-built-in-optics-chassis-required.html',
  'https://www.championone.com/10-100-1000m-fiber-media-converter-card-sfp-port-chassis-required.html',
  'https://www.championone.com/10-100-1000m-fiber-media-converter-card-sfp-port-w-mgmt-chassis-required.html'
];
var responses = [];

var startRequests = (urls) => {
  urls.forEach((link) => {
    var path = link.split(".com/")[1];
    var pathWithoutHTML = path.slice(0, -5);
    var imgPath = 'http://localhost:8888/wp-content/uploads/2018/10/' + pathWithoutHTML + '.png';
    var date = '2018-10-06 00:48:12';
    xray(link, 'table')(function(err, table) {
      var pageData = `(1, \n'${imgPath}', \n'${date}', \n'${date}', \n'${pathWithoutHTML}', \n'<ul>${table}</ul>', \n'publish', \n'closed', \n'closed', \n'${path}', \n'${date}', \n'${date}', \n'products'),\n\n`

      fs.appendFileSync('output.sql', pageData, function(error) {
        if (error) {
          return console.log(error);
        }
      });
    });
  });
}

var startRequests = (urls) => {
  urls.forEach((link) => {
    var path = link.split(".com/")[1];
    var pathWithoutHTML = path.slice(0, -5);
    var imgPath = 'http://localhost:8888/wp-content/uploads/2018/10/' + pathWithoutHTML + '.png';
    var date = '2018-10-06 00:48:12';
    xray(link, 'table')(function(err, table) {
      var pageData = `(1, \n'${imgPath}', \n'${date}', \n'${date}', \n'${pathWithoutHTML}', \n'<ul>${table}</ul>', \n'publish', \n'closed', \n'closed', \n'${path}', \n'${date}', \n'${date}', \n'products'),\n\n`

      fs.appendFileSync('output.sql', pageData, function(error) {
        if (error) {
          return console.log(error);
        }
      });
    });
  });
}

console.log(startRequests(urls));
