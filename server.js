const express = require('express');

const sequelize = require('./config/connection');

const app = express();

let PORT = process.env.PORT;
if (PORT == null || PORT == "") {
  PORT = 8000;
}

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on port', PORT));
});
