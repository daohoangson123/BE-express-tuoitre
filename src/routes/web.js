const express = require('express');
const router = express.Router();
const {
    getHomePage,
    getEditPage,
    postCreateUser,
    postEditUser,
    postDeleteUser,
} = require('../controllers/homeController');

//routes

router.get('/', getHomePage);

router.get('/edit-user/:id', getEditPage);

router.post('/create-user', postCreateUser);

router.post('/edit-user', postEditUser);

router.post('/delete-user/:id', postDeleteUser);

module.exports = router;
