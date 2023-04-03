const Sequelize = require('sequelize');
const sequelize = require('./db');
const db = require ('./db')

const User = sequelize.define('usuario', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: { 
        type: Sequelize.STRING,
    },
    email: { 
        type: Sequelize.STRING,
    },
    telefone: {
        type: Sequelize.DOUBLE 
    },
    cep: {
        type: Sequelize.DOUBLE 
    },
});

//Criar a tabela 
//User.sync();

module.exports = User;