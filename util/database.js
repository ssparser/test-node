const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mg', 'root', 'root', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;
