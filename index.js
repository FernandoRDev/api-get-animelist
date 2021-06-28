const express = require('express')
const app = express()
const PORT = 8080
const router = require('./api/routes')

app.use('/api', router)

app.listen(PORT, function () {
    console.log(`Servidor inicializado na porta http://localhost:${PORT}`);
})