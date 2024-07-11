// DEPENDENCIES
const bands = require('express').Router()
const db = require('../models')
const { Band, MeetGreet, Event, SetTime } = db 
const { Op } = require('sequelize')

// FIND ALL BANDS
bands.get('/', async (req, res) => {
    try {
        const foundBands = await Band.findAll({
            ORDER: [ ['available_start_time', 'ASC']],
            WHERE: {
                name: { [Op.like]: `%${req.query.name ? req.query.name: ''}%` }
            }
        })
        res.status(200).json(foundBands)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC BAND -- SHOW ROUTE
bands.get('/:name', async (req, res) => {
    try {
        const foundBand = await Band.findOne({
            where: { name: req.params.name },
                include: [{ 
                    model: MeetGreet, 
                    as: "meet_greets", 
                    include: {model: Event, as: "event"}
                },
                {
                    model: SetTime,
                    as: "set_times",
                    include: {model: Event, as: "event"}
                }
            ]
        })
        res.status(200).json(foundBand)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A BAND
bands.post('/', async (req, res) => {
    try {
        const newBand = await Band.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new band',
            data: newBand
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

// UPDATE A BAND
bands.put('/:id', async (req, res) => {
    try {
        const updatedBands = await Band.update(req.body, {
            where: {
                band_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedBands} band(s)`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

// delete band
bands.delete('/:id', async (req, res) => {
    try {
        const deletedBands = await Band.destroy({
            where: {
                band_id:req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedBands} band(s)`
        })
    }catch(err) {
        res.status(500).json(err)
    }
})

// EXPORT
module.exports = bands
