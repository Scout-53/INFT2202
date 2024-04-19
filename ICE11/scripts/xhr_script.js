console.log('xhr_script.js loaded')

let url_posts = 'https://jsonplaceholder.typicode.com/posts';
let url_comments = 'https://jsonplaceholder.typicode.com/comments';
let url_albums = 'https://jsonplaceholder.typicode.com/albums';
let url_photos = 'https://jsonplaceholder.typicode.com/photos';
let url_todos = 'https://jsonplaceholder.typicode.com/todos';
let url_users = 'https://jsonplaceholder.typicode.com/users';

console.log('xhr_script.js loaded');

let xhr = new XMLHttpRequest();  // Instantiate the XMLHttpRequest object
let url = 'https://jsonplaceholder.typicode.com/photos';  // API URL

xhr.open('GET', url, true);  // Configure the request, 'GET' method, and asynchronous
xhr.setRequestHeader('Content-Type', 'application/json');  // Set expected response format

// Display the loading message when the request is sent
document.getElementById('loading').style.display = 'block';

xhr.onreadystatechange = function() {  // Create a callback function
    if (xhr.readyState === 4) {  // Check that the state is done
        document.getElementById('loading').style.display = 'none';  // Hide loading message
        if (xhr.status === 200) {  // Check if the request was successful
            let data = JSON.parse(xhr.responseText);  // Turn into JSON
            console.log(data);  // Console log to see what we have

            // Update the first image and figcaption
            document.getElementById('photo1').src = data[0].thumbnailUrl;
            document.getElementById('photo1').closest('figure').querySelector('figcaption').innerText = data[0].title;

            // Update the second image and figcaption
            document.getElementById('photo2').src = data[1].thumbnailUrl;
            document.getElementById('photo2').closest('figure').querySelector('figcaption').innerText = data[1].title;
        } else {
            document.getElementById('error-message').style.display = 'block';  // Show error message
            console.error('Error in request:', xhr.statusText);  // Send error message to console
        }
    }
};

xhr.send();  // Send the request
