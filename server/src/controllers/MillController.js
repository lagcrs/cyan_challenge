const { Mill } = require('../app/models/index');

module.exports = {
    async index(req, res) {
        await Mill.findAll({
            attributes: ['name']
        })
        .then(mills => res.status(200).json(mills))
        .catch(err => res.status(500).json({
            message: 'Unexpected error while searching for mills',
            error: err
        }))
    },

    async store(req, res) {
        const { name } = req.body;
        console.log(name)

        await Mill.create({
            name 
        })
        .then(mill => res.status(201).json({
            message: `Mill ${mill.name} successfully created`
        }))
        .catch(err => res.status(500).json({
            message: 'Unexpected error while creating new mill',
            error: true,
            error: err
        })) 
    }
}