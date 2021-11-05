const mongoose = require("mongoose");  //importando o mongoose

async function Conn(){
    await mongoose.connect("mongodb://localhost:27017/PROJETO",{ // string de conexao ou local ou atlas
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => { // tudo certo faz isso
        console.log("MongoDB esta conectado");
    }).catch((err) => { // caso de erro faz isso
        console.error(err);
    });
}

module.exports = Conn; //exporta a conexao