const express = require('express');

const router = express.Router();
const infosController = require('../controllers/infoController');

router.use('/info', infosController);

module.exports = router;