import { APIKey as apiKey } from './secret.js';

//Define DOM Elements
const inputField = document.getElementById('url-input');
const urlForm = document.getElementById('urlform');
const result = document.getElementById('result');

//Variables
const url = 'https://api.rebrandly.com/v1/links'; //link to rebrandly

//Functions
function displayLink(response) {
    if (response.errors) {
        console.log("There was an error");
    } else {
        result.innerHTML = response.shortUrl;
        inputField.value = '';
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

    const submittedURL = inputField.value;

    if (submittedURL == "") {
        alert("Please enter a URL");
    } else {
        shortenURL(submittedURL);
    }
});
