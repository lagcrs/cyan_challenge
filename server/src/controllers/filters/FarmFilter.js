const model = require('../../app/models/index');

module.exports = {
    async index(req, res) {
        const { farm_code } = req.query;

        if( farm_code != '' ){
            var farmId = await model.Farm.findOne({
                where: { code: farm_code },
                attributes: ['id']
            })
            .then( id => { return id } )

        } else {
            res.status(400).json({
                message: 'Unexpected error'
            })
        }

        var fieldCode = await model.Field.findAll({
            where: { farm_id: farmId['id'] },
            attributes: ['code']
        })
        .then(code => { return code})  

        return res.status(200).json(fieldCode)
    }
}