const express = require("express"); //import do express
const router = express.Router(); //define app como express
const cidade = require("../model/cidades"); // import do modelo pessoa

router.get('/', (req,res) => {
    res.status(200).json({message:"rota pessoas ok"});
});

router.get('/listar', async (req,res) => {
    await cidade.find({}).then((cidades) => { //pega todo mundo do banco
        console.log(cidades);
        res.status(200).json(cidades);
    }).catch((err) => {
        res.status(204).json({message:"Nada foi encontrado"});
        console.error(err);
    });
});

router.post('/add', async (req,res) => { //add nova pessoa no banco
    await cidade.create(req.body).then(() => {
        res.status(200).json({message: "cadastrado com sucesso"});
    }).catch((err) => {
        res.status(400).json({message: "algo esta errado"});
        console.error(err);
    })
});

module.exports = router;