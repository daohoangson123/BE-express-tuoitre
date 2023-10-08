require('dotenv').config();
const express = require('express');
// const path = require('path');
const configViewEg = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const apiRoutes = require('./routes/api');
const app = express();
const port = process.env.PORT || 8000;
const hostname = process.env.HOST_NAME;
var cors = require('cors');
//get client
// const mysql = require('mysql2');
const connection = require('./config/database');

app.use(cors());

//req.body đặt trên đầu ko là ko ăn
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

//template engine
configViewEg(app);
// app.set('views', path.join(__dirname, '/views'));
// app.set('view engine', 'ejs');

//static file
// app.use(express.static(path.join(__dirname, '/public')));

//routes
app.use('/', webRoutes);
app.use('/', apiRoutes);
// app.get('/', (req, res) => {
//     res.send('BE - Express - Tuổi trẻ data');
// });

// app.get('/sample', (req, res) => {
//     res.render('sample.ejs');
// });

//conection
// const connection = mysql.createConnection({
//     host: 'localhost',
//     port: 3307,
//     user: 'root',
//     password: '123456',
//     database: 'hoidanit',
// });

// simple query
// connection.query('SELECT * FROM Users u', function (err, results, fields) {});

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
});
