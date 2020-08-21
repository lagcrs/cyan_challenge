const model = require('../app/models/index');

module.exports = {
    async index(req, res) {
        const { 
            mill_name, 
            harvest_start, 
            harvest_end, 
            harvest_code, 
            farm_name,
            farm_code,
            field_code 
        } = req.query;

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

        if( harvest_code != '' ){
            var harvestId = await model.Harvest.findOne({
                where: { mill_id: millId['id'], start: harvest_start, end: harvest_end, code: harvest_code },
                attributes: ['id']
            })
            .then( id => { return id } )

        } else {
            res.status(400).json({
                message: 'Unexpected error'
            })
        }

        if( farm_name != '' ){
            var farmId = await model.Farm.findOne({
                where: { harvest_id: harvestId['id'], name: farm_name, code: farm_code },
                attributes: ['id']
            })
            .then( id => { return id } )

        } else {
            res.status(400).json({
                message: 'Unexpected error'
            })
        }
        
        if( field_code != '' ){
            var fields = await model.Field.findAll({
                where: { farm_id: farmId['id'], code: field_code },
                attributes: ['code', 'coordinates']
            })
            .then(fields => { return fields})            
        } else {
            res.status(400).json({
                message: 'Unexpected error'
            })
        }

        var data = []
        for (var i in fields) {
            data.push(fields[i]['dataValues'])
        }
        
       return res.status(200).json(data)
    }
}