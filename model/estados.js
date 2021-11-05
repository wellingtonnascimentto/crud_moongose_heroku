const mongoose = require("mongoose");  //importando o mongoose

const estadosModel = new mongoose.Schema({ //criando nosso modelo do banco
    nome: { type: String, required: true }, // chave/ valor: tipo do valor e se é obrigatorio
    regiao: { type: String, required: true },
    populacao: { type: Number, required: true }, 
    salariominimo: { type: Number, required: true },
    dataCriacao: { type: Date, default: Date.now } //default, valor padrao caso nao seja passado
});

const estado = mongoose.model("estados",estadosModel); // a criacao do modelo na colection Pessoas

module.exports = estado; //exportando o modelo pronto