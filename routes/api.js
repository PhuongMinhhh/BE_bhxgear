const express = require('express');

const router = express.Router();
const infosController = require('../controllers/infoController');
const addressController = require('../controllers/addressController');
router.use('/info', infosController);
router.use('/address', addressController);
module.exports = router;