const express = require("express"); //import do express
const router = express.Router(); //define app como express
const cidade = require("../model/cidades"); // import do modelo cidade

router.get('/', (req,res) => {
    res.status(200).json({message:"rota cidades ok"});
});

router.get('/listall', async (req,res) => {
    await cidade.find({}).then((cidades) => { //pega todo mundo do banco
        console.log(cidades);
        res.status(200).json(cidades);
    }).catch((err) => {
        res.status(204).json({message:"Nada foi encontrado"});
        console.error(err);
    });
});

router.get('/listname/:nome', async (req,res) => {
    const nome = req.params.nome;  //recebendo nome por parametro
    await cidade.findOne({ nome:nome }).then((cidade) => { //findOne retorna o primeiro que der match com o item passado
        console.log(cidade);
        if(cidade == null){ //validando se retorna null 
            res.status(404).json({message: "nao foi encontrado"});
        }else{
            res.status(200).json(cidade);
        }
    }).catch((err) => {
        res.status(404).json({message:"Nada foi encontrado"});
        console.error(err);
    });
});

router.post('/add', async (req,res) => { //add novo cidade no banco

    //validando as entradas do usuario
    if(!req.body.nome){
        res.status(400).json({message: "esta faltando nome"});
        return;
    }else if(!req.body.quantidadebairros){
        res.status(400).json({message: "esta faltando quantidadebairros"});
        return;
    }else if(!req.body.populacao){
        res.status(400).json({message: "esta faltando populacao"});
        return; 
    }
    else if(!req.body.aniversariocidade){
        res.status(400).json({message: "esta faltando aniversariocidade"});
        return; // nao esquecer dos returns dentro dos ifs
    }

    await cidade.create(req.body).then(() => {
        res.status(200).json({message: "cadastrado com sucesso"});
    }).catch((err) => {
        res.status(400).json({message: "algo esta errado"});
        console.error(err);
    })
});

router.put('/update/:id', async (req,res) => {
    const id = req.params.id;
    if(!id){
        res.status(400).json({message: "esta faltando id na URL"});
        return;
    }else if(!req.body.nome){
        res.status(400).json({message: "esta faltando nome"});
        return;
    }else if(!req.body.quantidadebairros){
        res.status(400).json({message: "esta faltando quantidadebairros"});
        return;
    }
    else if(!req.body.populacao){
        res.status(400).json({message: "esta faltando populacao"});
        return;
    }else if(!req.body.aniversariocidade){
        res.status(400).json({message: "esta faltando aniversariocidade"});
        return;
    }


    await cidade.updateOne({ _id:id},req.body).then(() => { //updateOne atualiza o primeiro que encontrar e der match
        res.status(200).json({message: "Atualizado com sucesso"});
    }).catch((err) => {
        console.error(err);
        res.status(400).json({message: "algo esta errado"});
    });
});

router.delete('/delete/:id', async (req,res) => {
    if( req.params.id.length == 24){ //se o id tem pelo menos 24 chars
        await cidade.deleteOne({_id:req.params.id}).then(() => { //deleta o primeiro que der match
            res.status(200).json({message: "Deletado com sucesso"});
        }).catch((err) => {
            console.error(err);
            res.status(400).json({message: "algo esta errado"});
        });
    }else{
        res.status(400).json({message: "id precisa ter 24 caracteres"});
    }
});

module.exports = router;