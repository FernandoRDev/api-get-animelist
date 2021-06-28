const express = require('express')
const router = express.Router()
const url = "https://myanimelist.net/anime.php";
const parser = require('node-html-parser').parse
const axios = require('axios')

router.get('/', (req, res) => {
    axios.get(url).then(response => {

        const date = new Date().getTime()
        const q = req.query.q
        const root = parser(response.data)
        const arr = root.querySelectorAll(".genre-link")[1].querySelectorAll(".genre-name-link");
        var arrRetorno = [];

        arr.map(t => {
            const texto = t.childNodes[0].rawText
            const genero = {

                category: texto.split('(')[0].trim(),
                amount: texto.split('(')[1].split(')')[0],
                link: "https://myanimelist.net" + t._attrs.href,
                timestamp: date
            }

            if (q != undefined) {
                if (genero.category.includes(q)) {
                    arrRetorno.push(genero)
                }
            } else {
                arrRetorno.push(genero)
            }
        })
        res.send(arrRetorno)
    })
})

module.exports = router