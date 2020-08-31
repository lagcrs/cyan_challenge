const model = require('../../app/models/index');

module.exports = {
    async index(req, res) {
        const { harvest_code } = req.query;

        var harvestId = await model.Harvest.findOne({
            where: { code: harvest_code },
            attributes: ['id']
        })
        .then( id => { return id } )

        var farmCode = await model.Farm.findAll({
            where: { harvest_id: harvestId['id'] },
            attributes: ['code', 'name']
        })
        .then( code => { return code } )

        return res.status(200).json(farmCode)
    }
}