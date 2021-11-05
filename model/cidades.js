const mongoose = require("mongoose");  //importando o mongoose

const cidadesModel = new mongoose.Schema({ //criando nosso modelo do banco
    nome: { type: String, required: true }, // chave/ valor: tipo do valor e se é obrigatorio
    quantidadebairros: { type: Number, required: true },
    populacao: { type: Number, required: true }, 
    aniversariocidade: { type: String, required: true },
    dataCriacao: { type: Date, default: Date.now } //default, valor padrao caso nao seja passado
});

const cidade = mongoose.model("cidades",cidadesModel); // a criacao do modelo na colection Pessoas

module.exports = cidade; //exportando o modelo pronto