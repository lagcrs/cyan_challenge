const express = require('express');

const MillController = require('./controllers/MillController');
const HarvestController = require('./controllers/HarvestController');
const FarmController = require('./controllers/FarmController');
const FieldController = require('./controllers/FieldController');

const MillFilter = require('./controllers/filters/MillFilter.js');
const HarvestFilter = require('./controllers/filters/HarvestFilter.js');
const FarmFilter = require('./controllers/filters/FarmFilter.js');
const FieldFilter = require('./controllers/filters/FieldFilter.js');

const routes = express.Router();

routes.get('/mills', MillController.index);
routes.post('/mills', MillController.store);

routes.get('/harvests', HarvestController.index);
routes.post('/harvests', HarvestController.store);

routes.get('/farms', FarmController.index);
routes.post('/farms', FarmController.store);

routes.get('/fields', FieldController.index);
routes.post('/fields', FieldController.store);

routes.get('/filter-mill', MillFilter.index);
routes.get('/filter-harvest', HarvestFilter.index);
routes.get('/filter-farm', FarmFilter.index);
routes.get('/filter-field', FieldFilter.index);

module.exports = routes;