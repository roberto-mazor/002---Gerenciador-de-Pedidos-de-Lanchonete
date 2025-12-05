const express = require ('express')
const app = express()

app.get("/", function(req,res){
    res.send("Funciona")
})

let listaDePedidos =[
    {
        "codigo": 1,
        "cliente": "Roberto",
        "id_cliente": 100,
        "produto": "X-Bacon",
        "valor": 29.90
    },

    {
        "codigo": 2,
        "cliente": "Roberto",
        "id_cliente": 100,
        "produto": "X-Salada",
        "valor": 25.90        
    },

    {
        "codigo": 3,
        "cliente": "Manuela",
        "id_cliente": 85,
        "produto": "X-Fominha",
        "valor": 27.90        
    }
]

//listar
app.get("/pedidos", function (req, res){
    res.send(listaDePedidos)
})

//listar um
app.get ("/pedidos/:id", function (req, res){
    let id = req.params.id

    if(id > listaDePedidos.length){
        res.send("Pedido não encontrado")
    }
    res.send(listaDePedidos[id-1])
})

app.listen(3000)
// http://localhost:3000/