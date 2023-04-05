const express = require('express');
const app = express();
const User = require('./src/models/User');

app.use(express.json());

app.get('/usuarios', async(req, res) => {

    await User.findAll({
        attributes: ['nome', 'email', 'telefone', 'cep']
    })
        .then((userhome) => {
            return res.json({
                erro: false,
                userhome
            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Nenhum valor encontrado para a página home!"
            });
        });
});

app.post("/cadastrar", async(req, res) => {
    console.log(req.body);

    await User.create(req.body)
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Usuario cadastrado com sucesso!"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "ERRO: Usuario não cadastrado!"
        });
    });
});

app.listen(8080, () => { 
    console.log("Servidor inciado na porta 8080: http//localhost:8080")
});



