const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sequelize = require('./util/database');

const app = express();

const adminRoutes = require('./routes/admin');

const errorController = require('./controller/error');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);

app.use(errorController.get404);

sequelize.sync().then(result => {
    console.log(result);
}).catch(err => {
    console.error('Database sync error:', err);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
