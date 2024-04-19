const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Landing/home page
app.get('/', (req, res) => {
  res.send(`
    <h1>Hello I'm Shan, Welcome to the Home Page</h1>
    <ul>
      <li><a href="resource/meme.jpg">Funniest JS Meme</a></li>
      <li><a href="/error.html">Error Page</a></li>
    </ul>
  `);
});

// Route for funniest JS meme
app.get('/funniest-meme', (req, res) => {
  // You can replace this with your funniest JS meme URL
  res.send(`
    <h1>Funniest JS Meme</h1>
    <img src="https://example.com/funniest-meme.jpg" alt="Funniest JS Meme">
  `);
});

// Route for causing an error (418 error)
app.get('/error', (req, res) => {
  res.status(418).send('<h1>418 - I’m a teapot</h1><p>This is not the page you are looking for.</p>');
});

// Handling 404 errors
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'error.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
