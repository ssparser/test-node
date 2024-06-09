const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Routes
// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');

// Controllers
// const errorController = require('./controllers/error');

// Database
const sequelize = require('./util/database');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
// app.use('/admin', adminRoutes);
// app.use(shopRoutes);

// Error Handling
// app.use(errorController.get404);

// Sync Database
sequelize.sync().then(result => {
    console.log(result);
}).catch(err => {
    console.error('Database sync error:', err);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
