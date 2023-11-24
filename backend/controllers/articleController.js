'use strict';
const Article = require('../models/article');
const validator = require('validator');
const fs = require('fs');
const path = require('path');

const ArticleController = {
    save: async (req, res) => {
        // Tomar parámetros
        const params = req.body

        // Validar datos
        if (validator.isEmpty(params.title) && validator.isEmpty(params.content)) {
            return res.status(406).send({
                status: 'error',
                message: 'Los campos no pueden estar vacíos',
            })
        }

        // Crear objeto
        const article = new Article();
        article.title = params.title;
        article.content = params.content;
        article.image = params.image || null;

        // Guardar objeto
        try {
            await article.save();
        } catch(error) {
            console.error(error);
            return res.status(500).send({
                status: 'error',
                message: 'Error al guardar el artículo',
            })
        }

        // Devolver respuesta
        return res.status(200).send({
            status: 'success',
            article,
        });
    },
    allArticles: async (req, res) => {
        const last = parseInt(req.params.last);
        const query = Article.find({}).sort('-_id');

        if (last && !isNaN(last)) {
            query.limit(last);
        }

        try {
            const articles = await query.exec();

            if (!articles || articles.length === 0) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay artículos',
                });
            }

            return res.status(200).send({
                status: 'success',
                articles,
            });
        } catch (error) {
            console.error(error);
            return res.status(500).send({
                status: 'error',
                message: 'Error al obtener los artículos',
            });
        }
    },
    getArticle: async (req, res) => {
        const articleId = req.params.id;

        if (!articleId) {
            return res.status(404).send({
                status: 'error',
                message: 'El artículo no existe',
            });
        }

        try {
            const article = await Article.findById(articleId);
            return res.status(200).send({
                status: 'success',
                article,
            })
        } catch (error) {
            console.error(error);
            return res.status(500).send({
                status: 'error',
                message: 'Error al obtener el artículo',
            });
        }
    },
    updateArticle: async (req, res) => {
        const articleId = req.params.id;
        if (!articleId) {
            return res.status(404).send({
                status: 'error',
                message: 'El articulo no existe',
            });
        }

        const params = req.body;
        if (validator.isEmpty(params?.title || '') && validator.isEmpty(params?.content || '')) {
            return res.status(406).send({
                status: 'error',
                message: 'Los campos no pueden estar vacíos',
            });
        }

        try {
            const article = await Article.findByIdAndUpdate({'_id': articleId}, params, {new: true});
            return res.status(200).send({
                status: 'success',
                article,
            })
        } catch(error) {
            console.error(error);
            return res.status(500).send({
                status: 'error',
                message: 'Error al actualizar el articulo',
            })
        }
    },
    deleteArticle: async (req, res) => {
        const articleId = req.params.id;
        if (!articleId) {
            return res.status(404).send({
                status: 'error',
                message: 'El articulo no existe',
            });
        }

        try {
            await Article.findByIdAndDelete(articleId);
            return res.status(200).send({
                status: 'success',
                message: 'Articulo eliminado',
            })
        } catch (error) {
            console.error(error);
            return res.status(500).send({
                status: 'error',
                message: 'Error al borrar el articulo',
            });
        }
    },
    uploadImage: async (req, res) => {
        const articleId = req.params.id;

        if (!articleId) {
            return res.status(404).send({
                status: 'error',
                message: 'El articulo no existe',
            });
        }

        if (!req.files) {
            return res.status(404).send({
                status: 'error',
                message: 'No se ha subido la imagen',
            });
        }

        const { file } = req.files;
        const file_path = file.path;
        const file_split = file_path.split('\\');
        const image_name = file_split[2];
        const extension = image_name.split('.')[1];

        if (extension !== 'PNG' && extension !== 'JPG' && extension !== 'JPEG') {
            fs.unlinkSync(file_path, (err) => {
                if (err) {
                    console.error(err);
                }
            });

            return res.status(500).send({
                status: 'error',
                message: 'Extensión no permitida',
            });
        }

        try {
            const article = await Article.findByIdAndUpdate({'_id': articleId}, {image: image_name}, {new: true});
            console.log(article);
            return res.status(200).send({
                status: 'success',
                article,
            })
        } catch(error) {
            console.error(error);
            return res.status(500).send({
                status: 'error',
                message: 'Error al actualizar el articulo',
            })
        }
    },
    getImage: async (req, res) => {
        const image = req.params.image;
        const path_file = `./upload/articles/${image}`;

        fs.exists(path_file, (exists) => {
            if (exists) {
                return res.sendFile(path.resolve(path_file));
            } else {
                return res.status(404).send({
                    status: 'error',
                    message: 'No existe la imagen',
                });
            }
        })
    },
    search: async (req, res) => {
        const search = req.params.search;
        const article = await Article.find({
            "$or": [
                {"title": {"$regex": search, "$options": "i"}},
                {"content": {"$regex": search, "$options": "i"}}
            ]
        })
        .sort([['date', 'descending']]);

        if (!article.length) {
            return res.status(404).send({
                status: 'error',
                message: 'No hay artículos',
            });
        }

        return res.status(200).send({
            status: 'success',
            article
        })
    },
    test: (req, res) => {
        res.status(200).send({
            message: 'Soy la acción test de mi controlador de artículos'
        });
    },
};

module.exports = ArticleController;
