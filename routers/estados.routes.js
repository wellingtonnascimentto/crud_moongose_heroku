const express = require("express"); //import do express
const router = express.Router(); //define app como express
const estado = require("../model/estados"); // import do modelo estado

router.get('/', (req,res) => {
    res.status(200).json({message:"rota estados ok"});
});

router.get('/listar', async (req,res) => {
    await estado.find({}).then((estados) => { //pega todo mundo do banco
        console.log(estados);
        res.status(200).json(estados);
    }).catch((err) => {
        res.status(204).json({message:"Nada foi encontrado"});
        console.error(err);
    });
});

router.post('/add', async (req,res) => { //add nova estado no banco
    await estado.create(req.body).then(() => {
        res.status(200).json({message: "cadastrado com sucesso"});
    }).catch((err) => {
        res.status(400).json({message: "algo esta errado"});
        console.error(err);
    })
});

module.exports = router;