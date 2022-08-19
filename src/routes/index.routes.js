const express = require('express');
const postModel = require('../models/Posts.js');
const cors = require('cors')
const router = express.Router();

const options = {
    origin: 'http://localhost:3000'
}
router.use(cors());

router.get('/all', (req, res)=>{
    res.json(JSON.stringify(postModel.getAll()));
})

router.post('/new', express.json(),(req, res)=>{
    let title = req.body.title;
    let description = req.body.description;
    postModel.newPost(title, description)
    if(title !== undefined & description !== undefined){
        res.status(201);
        res.send(`Novo Post Adicionado\n${title}\n${description}`)
    }
    res.status(500);
    res.send(`Não foi possível inserir dados`)
})
router.delete('/remover/:id', (req, res)=>{
    let id  = req.params.id;
    (postModel.deletePost(id) === false) ? res.send(`O elemento ${id} não existe então não pode ser apagado`) : res.send(`O elemento ${id} foi apagado`);

})
module.exports = router;