'use strict';
require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');
const port = 4000;

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_DB, {useNewUrlParser: true})
    .then(() => {
        console.log('MongoDB connected successfully');
        app.listen(port, () => {
            console.log('Server running on port ' + port);
        });
    });
