const Sequelize = require('sequelize');

const sequelize = new Sequelize("soundlounge", "root", "12345", { 
    host: 'localhost',
    dialect:  'mysql' 

});

sequelize.authenticate()
.then(function(){
    console.log("Conexão com o banco de dados realizada com sucesso!")

}).catch(function(err){
    console.log("ERRO: Conexão com o banco de dados não realizada!" + err)

});

module.exports = sequelize;