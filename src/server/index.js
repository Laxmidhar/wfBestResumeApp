const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes');

const root = './';
const port = process.env.PORT || '3000';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(root, 'dist/browser')));
// Serve static files from the 'dist' directory
//app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', routes);
// Catch all other routes and return the Angular index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/browser/index.html'));
});


// app.get('*', (req, res) => {
//   res.sendFile('dist/wf-best-resume-app/index.html', {root});
// });

app.listen(port, () => console.log(`API running on localhost:${port}`));