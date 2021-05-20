const express = require('express')
const parser = require('node-html-parser').parse
const axios = require('axios')
const app = express()

const url = "https://myanimelist.net/anime.php";

app.get('/genres', (req, res) => {
    axios.get(url).then(response => {

        const q = req.query.q
        const root = parser(response.data)
        const arr = root.querySelectorAll(".genre-link")[0].querySelectorAll(".genre-name-link");
        var arrRetorno = [];

        arr.map(t => {

            const texto = t.childNodes[0].rawText
            const genero = {

                category: texto.split('(')[0].trim(),
                amount: texto.split('(')[1].split(')')[0],
                link: "https://myanimelist.net" + t._attrs.href
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

app.get('/studios', (req, res) => {
    axios.get(url).then(response => {

        const q = req.query.q
        const root = parser(response.data)
        const arr = root.querySelectorAll(".genre-link")[1].querySelectorAll(".genre-name-link");
        var arrRetorno = [];

        arr.map(t => {
            const texto = t.childNodes[0].rawText
            const genero = {

                category: texto.split('(')[0].trim(),
                amount: texto.split('(')[1].split(')')[0],
                link: "https://myanimelist.net" + t._attrs.href
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

app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000`)
})