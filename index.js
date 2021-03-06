const express = require("express");  //chamando o express
const app = express();  //definindo o app como express

app.use(express.json());  //definindo o JSON no projeto

const Conn = require("./model/conn/index"); //importando a conexao

Conn(); //executa a func de conexao

const port = 3000; //porta do node

const paisesRouter = require("./routers/paises.routes");
app.use('/paises',paisesRouter);

const estadosRouter = require("./routers/estados.routes");
app.use('/estados',estadosRouter);

const cidadesRouter = require("./routers/cidades.routes");
app.use('/cidades',cidadesRouter);

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
});