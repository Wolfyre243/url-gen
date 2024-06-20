import { APIKey as apiKey } from './secret.js';

//Define DOM Elements
const button = document.getElementById('button');
const urlForm = document.getElementById('urlform');

//Functions
function handleClick() {
    console.log(apiKey);
}

function shortenURL(inputURL) {

}

//Event Listeners
button.addEventListener('click', handleClick);
urlForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const submittedURL = document.getElementById('url-input').value;

    if (submittedURL == "") {
        alert("Please enter a URL");
    } else {
        alert("Successful submission");
        console.log(submittedURL);
    }
});
