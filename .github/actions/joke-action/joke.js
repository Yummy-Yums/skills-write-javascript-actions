const fetch = import("node-fetch");

const options = {
    method: "GET",
    uri: "https://icanhazdadjoke.com/",
    headers: {
        Accept: "application/json",
        "User-Agent": "Writing JavaScript action GitHub Skills course.",
      },
    json: true,
};

async function getJoke() {
    const fetch = require('node-fetch');

    fetch(options.uri, options.headers)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
    
}