const express = require('express');
const router = express.Router();
const controller = require('./user.controller');

router.get('/', controller.showList);
router.get('/:id', controller.showOne);
router.delete('/:id', controller.destroy);
router.post('/', controller.create);

module.exports = router;