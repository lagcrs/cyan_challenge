const model = require('../app/models/index');

module.exports = {
    async index(req, res) {
        await model.Harvest.findAll({
            attributes: ['code', 'start', 'end', 'mill_id']
        })
        .then(harvests => res.status(200).json(harvests))
        .catch(err => res.status(500).json({
            message: 'Unexpected error while searching for harvests',
            error: err
        }))
    },

    async store(req, res) {
        const { code, start, end, mill } = req.body;

        const millId =  await model.Mill.findOne({
            where: { name: mill },
            attributes: ["id"]
        })
        .then(id => { return id });

        await model.Harvest.create({
            code,
            start,
            end,
            mill_id: millId["id"],
        })
        .then(harvest => res.status(201).json({
            message: `Harvest ${harvest.code} successfully created`
        }))
        .catch(err => res.status(500).json({
            message: 'Unexpected error while creating new mill',
            error: true,
            error: err
        }))
    }
}