const Router = require('express').Router;
const gameRoute = Router()

const {gameForm, gameLogic} = require('../controllers/game');

gameRoute.get('/', gameForm);
gameRoute.post('/', gameLogic);

module.exports = gameRoute;