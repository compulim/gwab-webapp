'use strict';

const
  express = require('express'),
  app = express(),
  port = process.env.port || 80;

app.use(express.static('public/'));

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});