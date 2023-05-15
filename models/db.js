const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

/*
sequelize.authenticate()
.then(function(){
    console.log("Conexão com Banco de Dados realizada com sucesso!");
}).catch(function(){
    console.log("Page 404");
});
*/

module.exports = sequelize;