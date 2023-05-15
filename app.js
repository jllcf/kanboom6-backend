const express = require('express');
var cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

//const { eAdmin } = require('./middlewares/auth');
const usuarios = require('./models/usuarios');
const app = express();
app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());
    next();
});



//Enviar dados 
app.post("/users", async(req, res) => {
    var dados = req.body;
    dados.password = await bcrypt.hash(dados.password, 8);
    await usuarios.create(dados)
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Usuário cadastrado com sucesso!"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Cadastro não realizado"
        });
    });
});



//Editar usuários
app.put("/users", async (req, res) => {
    const { id, email, password } = req.body;

    await usuarios.update(req.body, {where: {id, email, password}})
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Usuário editado com sucesso!"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro ao editar. Tente novamente."
        });
    });
    return res.json({
        erro: false,
        id,
        email,
        password
    });
});

//Deletar dados
app.delete("/users/:id", async (req, res) => {
    const { id, email, password } = req.params;

    await user.destroy({ where:{ id } })
    .then(() => {
        return res.status.json({
            erro: false,
        mensagem: "Registro apagado com sucesso"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro. Status(400)"
        });
    });
    return res.json({
        erro: false,
        id,
        email:
        password, 
    });
});

//editar a senha
app.put("/users-senha", async (req, res) => {
    const { id, password } = req.body;
    var passwordCrypt = await bcrypt.hash(password, 8);
    await usuarios.update({passwordCrypt}, {where: {id}})
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Senha editada com sucesso"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: status(400)"
        });
    });
    return res.json({
        erro: false,
        id,
        email,
        password
    });
});


app.post('/users', async (req, res) => {
    const user = await user.findOne({
        attributes: ['id', 'email', 'password'], 
        where: {email: req.body}});
    if(user === null){
        return res.status(400).json({
            erro: true,
            mensagem:"Erro: Usuário não cadastrado."
        });
    };
    if(!(await bcrypt.compare(req.body.password, user.password))){
        return res.status(400).json({
            erro: true,
            mensagem: "Senha inválida"
        });
    };

    var token = jwt.sign({id: user.id}, process.env.SECRET,  {
        //expiresIn: '7d' expira em 7 dias
        expiresIn: 1800 //30 minutos
    });
    return res.json({
        erro: false,
        mensagem: "Login realizado com sucesso!",
        token
    });
});

app.get("/val-token", async (req, res) => {
    return res.json({
        erro: false,
        mensagem: "Token válido"
    });
});


app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:3000");
});

