const express = require('express');
const sequelize = require( './config/connection')


let port = process.env.PORT;
if (port == null || port == "") {
  port = 9000;
}


const app = express()