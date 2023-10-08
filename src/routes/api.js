const express = require('express');
const router = express.Router();
const { getUserData } = require('../controllers/homeController');

router.get('/api/user-list', getUserData);

module.exports = router;
