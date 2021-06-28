const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080
const router = require('./api/routes')

app.get('/', (req, res) => {
    res.send("How to use: https://github.com/FernandoRDev/api-get-animelist")
})

app.use('/api', router)

app.listen(PORT, function () {
    console.log(`Servidor inicializado na porta http://localhost:${PORT}`);
})