const express = require('express');
const MillController = require('./controllers/MillController');
const HarvestController = require('./controllers/HarvestController');

const routes = express.Router();

routes.get('/mills', MillController.index);
routes.post('/mills', MillController.store);

routes.get('/harvests', HarvestController.index);
routes.post('/harvests', HarvestController.store);

module.exports = routes;