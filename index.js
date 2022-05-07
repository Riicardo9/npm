const express = require("express")
const app = express()
const path = require('path')

app.set('port', 3000)


//se le envia solo un hola
app.get("/", (req, res) => {
    res.send('Hola mundo x2')
})


/* para enviar un html */
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"templates/pruebas.html"))
})

app.get("/saludar",(req, res) => {
    const valor = "hola"
    res.send(valor)
})

app.get("/adios",(req, res) => {
    res.send("Adios")
})


app.listen(app.get('port'), () => {
    console.log('servidor en el puerto', app.get('port'))
})

