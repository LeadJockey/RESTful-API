const express = require('express');
const router = express.Router();
const controller = require('./store.controller');

router.get('/', controller.create);
router.get('/goods',controller.showList);
module.exports = router;
