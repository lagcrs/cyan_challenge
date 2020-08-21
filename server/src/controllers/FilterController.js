const { index } = require("./FieldController");

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
                message: 'Mill name empty'
            })
        }

        if( harvest_code != '' ){
            var harvestId = await model.Harvest.findAll({
                where: { mill_id: millId['id'] },
                attributes: ['code']
            })
            .then( code => { return code } )
        }
        
        console.log(typeof(harvestId))
    }
}