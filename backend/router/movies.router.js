const express = require('express')
const { Parser } = require('json2csv')
const router = express.Router()
const movies = require('./movies.json')

router.get('/', async (req, res) => {
    const { search, activeRegion: region, activeType: type } = req.query
    try {
        const filteredMovies = movies.filter((movie) => {
            let found = true
            if (search !== '') {
                found = found && movie.title.toLowerCase().includes(search)
            }

            if (region !== 'all') {
                found =
                    found && movie.region.toLowerCase() === region.toLowerCase()
            }

            if (type !== 'all') {
                found = found && movie.type.toLowerCase() === type.toLowerCase()
            }

            return found
        })
        res.status(201).json(filteredMovies)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
})

router.get('/download', async (req, res) => {
    try {
        const json2csvParser = new Parser()
        const csv = json2csvParser.parse(movies)

        res.attachment('movies.csv').send(csv)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
})

module.exports = router
