const connection = require('../config/database');

const {
    getAllUser,
    editUserById,
    deleteUserById,
} = require('../services/CRUD');

const getHomePage = async (req, res) => {
    let results = await getAllUser();
    res.render('home.ejs', { listUsers: results });
};

const getEditPage = async (req, res) => {
    const userId = req.params.id;

    let [results, fields] = await connection
        .promise()
        .query('select * from Users where id = ?', [userId]);

    let user = results && results.length > 0 ? results[0] : {};

    res.render('edit.ejs', { userEdit: user });
};

const postCreateUser = (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    connection.query(
        ` INSERT INTO
        Users (email, name, city)
        VALUES(?, ?, ?)`,
        [email, name, city],
    );

    res.redirect('/');
};

const postEditUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let userId = req.body.userId;

    await editUserById(email, name, city, userId);

    res.redirect('/');
};

const postDeleteUser = async (req, res) => {
    const id = req.body.userId;

    await deleteUserById(id);

    res.redirect('/');
};

const getUserData = async (req, res) => {
    let results = await getAllUser();

    res.send(results);
};

module.exports = {
    getHomePage,
    getEditPage,
    postCreateUser,
    postEditUser,
    postDeleteUser,
    getUserData,
};
