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
    if(title !== '' & description !== ''){
        return res.status(201).send(`Novo Post Adicionado\n${title}\n${description}`)
    }
})
router.delete('/remover/:id', async(req, res)=>{
    let id  = req.params.id;
    const reque =  postModel.deletePost(id)
    if(reque){
        return res.status(200).send(`O elemento foi apagado`)
    }
    res.status(500).send(`O elemento  não existe então não pode ser apagado`)
})
module.exports = router;