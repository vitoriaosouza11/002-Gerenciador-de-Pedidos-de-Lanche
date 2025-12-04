const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('esta online')
})


let listaDePedidos = [
    {
        "id":1,
        "cliente":"Vitória Souza",
        "id_cliente":100,
        "produto":"X-Egg",
        "valor":29.9
    },
    {
        "id":2,
        "cliente":"Vitória Souza",
        "id_cliente":100,
        "produto":"X-Bacon",
        "valor":32.5
    },
    {
        "id":3,
        "cliente":"João Silva",
        "id_cliente":101,
        "produto":"X-Salada",
        "valor":28.5
    }
]

//listar
app.get("/listarpedidos", function (req, res){
    res.send(listaDePedidos)
})

//listar um
app.get("/listarpedido/:id", function (req, res){
    let idInformado = req.params.id
    if(idInformado > listaDePedidos.length){
        res.send("Pedido inválido")
    }else{
        res.send(listaDePedidos[idInformado-1])
    }
})

app.listen(3000)