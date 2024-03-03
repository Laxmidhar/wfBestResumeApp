const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./src/server/routes');

const root = './';
const port = process.env.PORT || '3000';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(root, 'dist/browser/')));
app.use('/api', routes);
app.use((req, res, next) => {
  next();
});
app.get('*', (req, res) => {
  console.log('Requested URL:', req.url);
  res.sendFile(path.join(__dirname, 'dist/browser/index.html'));
});

app.listen(port, () => console.log(`API running on localhost :${port}`));


