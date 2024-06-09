const  Sequelize  = require('sequelize');

const sequelize = new Sequelize('sys', 'root', 'Sidhu23000', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;
