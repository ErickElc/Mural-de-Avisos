const express =  require('express');
const router = require('./src/routes/index.routes.js')
const path = require('path');
const PORT = 3000;
const app = express();

app.use('/api', router)
app.use('/', express.static(path.join(__dirname, 'public')));



app.listen(PORT, ()=>{
    console.log(`Server rodando na porta ${PORT}`);
})

