const connection = require('../config/database');

const getAllUser = async () => {
    let [results, fields] = await connection
        .promise()
        .query('select * from Users u');
    return results;
};

const postNewUser = async (email, name, city) => {
    let [results, fields] = await connection.promise().query(
        ` INSERT INTO
            Users (email, name, city)
            VALUES(?, ?, ?)`,
        [email, name, city],
    );
};

const editUserById = async (email, name, city, userId) => {
    let [results, fields] = await connection.promise().query(
        `UPDATE Users
        SET email = ?, name = ?, city = ?
        WHERE id = ?`,
        [email, name, city, userId],
    );
};

const deleteUserById = async (userId) => {
    let [results, fields] = await connection
        .promise()
        .query('DELETE FROM Users WHERE id = ?', [userId]);
};

module.exports = {
    getAllUser,
    postNewUser,
    editUserById,
    deleteUserById,
};
