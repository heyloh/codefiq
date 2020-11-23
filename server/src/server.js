const express = require('express');
const routes = require('./routes');

require('./database');

const app = express();

app.use(express.json());
app.use(routes);

const port = 3333;

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});

module.exports = app;