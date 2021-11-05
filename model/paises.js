const mongoose = require("mongoose");  //importando o mongoose

const paisesModel = new mongoose.Schema({ //criando nosso modelo do banco
    nome: { type: String, required: true }, // chave/ valor: tipo do valor e se é obrigatorio
    populacao: { type: Number, required: true },
    linguamae: { type: String, required: true }, 
    pib: { type: Number, required: true },
    dataCriacao: { type: Date, default: Date.now } //default, valor padrao caso nao seja passado
});

const pais = mongoose.model("paises",paisesModel); // a criacao do modelo na colection Pessoas

module.exports = pais; //exportando o modelo pronto