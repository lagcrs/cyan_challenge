const model = require('../../app/models/index');

module.exports = {
    async index(req, res) {
        const { field_code } = req.query;

        if( field_code != '' ){
            var fields = await model.Field.findAll({
                where: { code: field_code },
                attributes: [ 'coordinates']
            })
            .then(fields => { return fields})            
        } else {
            res.status(400).json({
                message: 'Unexpected error'
            })
        }

        
        var fieldData = [];
        for (var i in fields) {
            fieldData.push(fields[i]['coordinates']['coordinates'])
        }

        return res.status(200).json(fieldData)
    }
}