const model = require('../app/models/index');

module.exports = {
    async index(req, res) {
        await model.Farm.findAll({
            attributes: ['code', 'name','harvest_id']
        })
        .then(farms => res.status(200).json(farms))
        .catch(err => res.status(500).json({
            message: 'Unexpected error while searching for farms',
            error: err
        }));
    },

    async store(req, res) {
        const { code, name, harvest } = req.body;

        const harvestId = await model.Harvest.findOne({
            where: { code: harvest },
            attributes: ["id"]
        })
        .then( id =>{ return id });

        await model.Farm.create({
            code,
            name,
            harvest_id: harvestId["id"]
        })
        .then(farm => res.status(201).json({
            message: `Farm ${farm.code} successfully created`
        }))
        .catch(err => res.status(500).json({
            message: 'Unexpected error while creating new mill',
            error: true,
            error: err
        }))
    }
}