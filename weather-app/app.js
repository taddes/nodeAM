const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=16532%20103%20street%20edmonton',
  json: true
}, (error, response, body) => {
  console.log({body});
});