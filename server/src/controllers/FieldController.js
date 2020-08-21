const model = require('../app/models/index');

module.exports = {
    async index(req, res) {
        await model.Field.findAll({
            attributes: ['code', 'coordinates','farm_id']
        })
        .then(fields => res.status(200).json(fields))
        .cathc(err => res.status(500).json({
            message: 'Unexpected error while searching for farms',
            error: err
        }));
    },

    async store(req, res) {
        const { code,  coordinates, farm } = req.body;

        const farmId = await model.Farm.findOne({
            where: { name: farm },
            attributes: ["id"]
        })
        .then( id => { return id } )

        const point = { type: 'Point', coordinates: coordinates};

        await model.Field.create({
            code,
            coordinates: point,
            farm_id: farmId["id"]
        })
        .then(field => res.status(201).json({
            message: `Field ${field.code} successfully created`
        }))
        .catch(err => res.status(500).json({
            message: 'Unexpected error while creating new field',
            error: true,
            error: err
        }))
    }
}