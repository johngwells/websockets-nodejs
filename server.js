const express = require('express');

const app = express()

app.use('/', (req, res) => {
  res.status(200).send('<p>Hello World</p>');
});

app.listen(3000, () => {
  console.log('Listening on port 3000...');
});
