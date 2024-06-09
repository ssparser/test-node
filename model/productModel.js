const Sequalize = require('sequalize');

const sequalize = require('../util/database');

const product = sequalize.define('product', {
    id:{
        type: Sequalize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    title: Sequalize.STRING,
    price: {
        type: Sequalize.INTEGER,
        allowNull: false

    }
});

module.exports = product;








// const db = require('../util/database');

// module.exports = class product
// {
//     constructor(title, price) {
//         this.title = title
//         this.price = price
//     }

//     save()
//     {
//        return db.execute('insert into node (title, price) Values(?, ?)',
//        [this.title, this.price])
//     }

//     static fetchAll()
//     {
//         return db.execute('select * from node')
//     }

//     static deleteId(id)
//     {
//         return db.execute('DELETE FROM node WHERE id = ?', [id]);
//     }

//     static fetchProd(id)
//     {
//         return db.execute('SELECT * FROM node WHERE id = ?', [id]);
//     }


// }