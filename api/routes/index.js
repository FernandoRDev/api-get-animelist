const express = require('express')
const router = express.Router()
const genres = require('./genres')
const studios = require('./studios')

router.use('/genres', genres)

router.use('/studios', studios)

module.exports = router