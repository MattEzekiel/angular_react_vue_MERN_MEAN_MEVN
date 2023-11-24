'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title: String,
    content: String,
    date: {type: Date, default: Date.now},
    image: {type: String, default: ''},
});

module.exports = mongoose.model('Article', ArticleSchema);
