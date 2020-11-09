const express = require('express')
const MongoClient = require('mongodb').MongoClient;

const dbUrl = 'mongodb://localhost/zipdb';
MongoClient.connect(dbUrl, function (err, db) {
    if (err) throw err;
    console.log("DB Connected");
    db.close();
})

const app = express();
const port = process.env.PORT || 3000

const routes = require('./api/routes')
routes(app)

app.listen(port, function () {
    console.log('Server started on port: ' + port);
})