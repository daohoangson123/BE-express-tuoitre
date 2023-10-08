const connection = require('../config/database');

const getAllUser = async () => {
    let [results, fields] = await connection
        .promise()
        .query('select * from Users u');
    return results;
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
    editUserById,
    deleteUserById,
};
