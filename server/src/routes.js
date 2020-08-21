const express = require('express');
const MillController = require('./controllers/MillController');
const HarvestController = require('./controllers/HarvestController');
const FarmController = require('./controllers/FarmController');
const FieldController = require('./controllers/FieldController');

const routes = express.Router();

routes.get('/mills', MillController.index);
routes.post('/mills', MillController.store);

routes.get('/harvests', HarvestController.index);
routes.post('/harvests', HarvestController.store);

routes.get('/farms', FarmController.index);
routes.post('/farms', FarmController.store);

routes.get('/fields', FieldController.index);
routes.post('/fields', FieldController.store);

module.exports = routes;