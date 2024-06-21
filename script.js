import { APIKey as apiKey } from './secret.js';

//Define DOM Elements
const button = document.getElementById('button');
const urlForm = document.getElementById('urlform');

//Variables
const url = 'https://api.rebrandly.com/v1/links'; //link to rebrandly

//Functions
function displayLink(response) {
    if (response.errors) {
        console.log("There was an error");
    } else {
        console.log(response.shortUrl);
    }
}

async function shortenURL(inputURL) {
    const data = JSON.stringify({destination: inputURL});
    try {
        const response = await fetch(url,
            {
                method: 'POST',
                body: data,
                headers: {
                    'Content-type': 'application/json',
                    'apikey': apiKey
                }
            }
        );
        if (response.ok) {
            const jsonResponse = await response.json();
            displayLink(jsonResponse);
        }
    } catch (err) {
        console.log(err);
    }
}

//Event Listeners
urlForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const submittedURL = document.getElementById('url-input').value;

    if (submittedURL == "") {
        alert("Please enter a URL");
    } else {
        shortenURL(submittedURL);
    }
});
