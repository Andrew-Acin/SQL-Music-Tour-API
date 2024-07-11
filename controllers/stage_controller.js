// DEPENDENCIES
const stage = require('express').Router()
const db = require('../models')
const { Event } = db
const { Op } = require('sequelize')

// FIND ALL stage
stage.get('/', async (req, res) => {
    try {
        const foundstage = await Event.findAll({
            order: [['available_start_time', 'ASC']],
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
            }
        })
        res.status(200).json(foundstage)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC EVENT
stage.get('/:name', async (req, res) => {
    try {
        const foundEvent = await Event.findOne({
            where: { name: req.params.name },
            include: [{
                model: SetTime,
                as: "set_times",
                include: {
                    model: Event,
                    as: "event",
                    where: { name: { [Op.like]: `%${req.query.event ? req.query.Event : ''}% ` } }
                }
            },
            {
                model: SetTime,
                as: "set_times",
                include: {
                    model: Event,
                    as: "event",
                    where: { name: { [Op.like]: `%${req.query.event ? req.query.Event : ''}% ` } }
                }
            }
            ]
        })
        res.status(200).json(foundEvent)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE AN EVENT
stage.post('/', async (req, res) => {
    try {
        const newEvent = await Event.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new event',
            data: newEvent
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

// UPDATE AN EVENT
stage.put('/:id', async (req, res) => {
    try {
        const updatedstage = await Event.update(req.body, {
            where: {
                event_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedstage} event(s)`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

// DELETE AN EVENT
stage.delete('/:id', async (req, res) => {
    try {
        const deletedstage = await Event.destroy({
            where: {
                event_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedstage} event(s)`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

// EXPORT
module.exports = stage
