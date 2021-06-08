const express = require('express');
const path = require('path');

const sequelize = require('./config/connection');

const app = express();

let PORT = process.env.PORT;
if (PORT == null || PORT == "") {
  PORT = 8000;
}

app.use(express.static(path.join(__dirname, 'public')));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on port', PORT));
});
