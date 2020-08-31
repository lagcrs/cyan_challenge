const model = require('../../app/models/index');

module.exports = {
    async index(req, res) {
        const { mill_name } = req.query;

        if( mill_name != '' ){
            var millId = await model.Mill.findOne({
                where: { name: mill_name },
                attributes: ['id']
            })
            .then( id => { return id } )
            
        } else {
            res.status(400).json({
                message: 'Unexpected error'
            })
        }

        var harvestCode = await model.Harvest.findAll({
            where: { mill_id: millId['id']},
            attributes: ['code', 'start', 'end']
        })
        .then( code => { return code } )

        return res.status(200).json(harvestCode)
    }
}
