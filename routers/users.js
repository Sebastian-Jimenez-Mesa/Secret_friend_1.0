const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.get('/registro', usersController.form);

router.post('/registro', usersController.register);

router.get('/formularioJugadores', usersController.jugadores);



module.exports = router;