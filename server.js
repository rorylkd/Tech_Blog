const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const sequelize = require('./config/connection');

const routes = require('./controllers/routes');

const app = express();

let PORT = process.env.PORT;
if (PORT == null || PORT == "") {
  PORT = 8000;
}

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on port', PORT));
});
