const request = require('request');
const yargs = require('yargs');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

  let encodedAddress = encodeURIComponent(argv.address)

const key = `AIzaSyAL9yhgdOZb--J31oayTlYY_VBND49QKKU`;

request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${key}`,
  json: true
}, (error, response, body) => {
  if (error) {
    console.log(`Unable to connect to servers: ${error}.`)
  } else if (body.status === 'ZERO_RESULTS') {
    console.log(`Unable to find that address`)
  } else if (body.status === 'OK') {
  console.log(JSON.stringify(body, undefined, 2));
  console.log('\n');
  console.log(`Address ${body.results[0].formatted_address}`);
  console.log(`Lat ${body.results[0].geometry.location.lat}`);
  console.log(`Lat ${body.results[0].geometry.location.lng}`);
  }
  // Body is part of HTTP request
});