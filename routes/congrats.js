const Router = require('express').Router;
const congratsRoute = Router();

const congratsPage = require('../controllers/congrats')

congratsRoute.get('/',congratsPage);

module.exports = congratsRoute;