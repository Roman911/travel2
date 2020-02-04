const { Router } = require('express');
const { PostModel } = require("../models");

const router = Router();

router.post(
  '/create',
  async (req, res) => {
    try {

      const {title, idAuthor, type_material, cover, link, tags, price, small_text, coordinates, photo, text} = req.body;

      const post = new PostModel({title, idAuthor, type_material, cover, link, tags, price, small_text, coordinates, photo, text, views: 0});

      await post.save();
      res.status(201).json({message: "Статю створено"});

    } catch (e) {
      res.status(500).json({message: "Что-то пошло не так, попробуйте снова"})
    }
  }
);
router.get(
  '/',
  async (req, res) => {
    try {
      PostModel.find((err, articles) => {
        if (err) {
          return res.status(404).json({
            message: "Article not found"
          })
        }
        res.json(articles)
      })
    } catch (e) {
      res.status(500).json({message: "Что-то пошло не так, попробуйте снова"})
    }
  }
);
router.get(
  '/:id',
  async (req, res) => {
    try {
      const id = req.params.id;
      PostModel.findById({_id: id})
        .exec(function (err, article) {
          if (err) {
            return res.status(404).json({
              message: "Article not found"
            })
          }
          return res.json(article)
        })
    } catch (e) {
      res.status(500).json({message: "Что-то пошло не так, попробуйте снова"})
    }
  }
);

module.exports = router;