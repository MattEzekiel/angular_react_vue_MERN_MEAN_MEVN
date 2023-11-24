'use strict';

const express = require('express');
const router = express.Router();
const ArticleController = require('../controllers/articleController');
const multipart = require('connect-multiparty');
const middleware_upload = multipart({uploadDir: './upload/articles'});

router.get('/test', ArticleController.test);
router.get('/articles/:last?', ArticleController.allArticles);
router.get('/article/:id', ArticleController.getArticle);
router.get('/article/image/:image/', ArticleController.getImage);
router.get('/article/search/:search', ArticleController.search);
router.put('/article/:id', ArticleController.updateArticle);
router.delete('/article/:id', ArticleController.deleteArticle);
router.post('/create', ArticleController.save);
router.patch('/upload-image/:id', middleware_upload, ArticleController.uploadImage);

module.exports = router;
