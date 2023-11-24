'use strict';
const mongoose = require('mongoose');
const app = require('./app');
const port = 4000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://root:root@framework.tauzskr.mongodb.net/', {useNewUrlParser: true})
    .then(() => {
        console.log('MongoDB connected successfully');
        app.listen(port, () => {
            console.log('Server running on port ' + port);
        });
    });
