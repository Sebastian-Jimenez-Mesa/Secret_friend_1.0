const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.get('/users/registro', usersController.form);

router.post('/users/registro', usersController.register);

module.exports = router;