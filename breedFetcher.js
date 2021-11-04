const request = require('request');
const args = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => {
  // console.log(typeof body);
  // console.log(body);
  if (error) {
    console.log(error);
  }
  const data = JSON.parse(body);
  console.log(data);
  // console.log(typeof data);
  // console.log(data[0].weight);
});

