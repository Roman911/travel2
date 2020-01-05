import express from 'express';
import { ArticleModel } from "../models";

class ArticleController {

  index(req: express.Request, res: express.Response) {
    ArticleModel.find((err, articles) => {
      if (err) {
        return res.status(404).json({
          message: "Article not found"
        })
      }
      res.json(articles)
    })
  }

  show(req: express.Request, res: express.Response) {
    const id: string = req.params.id;
    ArticleModel.findById(id)
      .populate("author")
      .exec(function (err, article) {
        if (err) {
          return res.status(404).json({
            message: "Article not found"
          })
        }
        return res.json(article)
      })
  }

  create(req: express.Request, res: express.Response) {
    const postData = {
      author: req.body.author,
      text: req.body.text
    };
    const article = new ArticleModel(postData);
    article.save().then((obj) => {
      res.json(obj);
    })
      .catch(reason => {
        res.json(reason)
      })
  }
  //
  // delete(req: express.Request, res: express.Response) {
  //   const id: string = req.params.id;
  //   ArticleModel.findOneAndRemove({_id: id})
  //     .then(user => {
  //       if (user) {
  //         res.json({
  //           message: `Article ${user.fullName} deleted`
  //         });
  //       }
  //     })
  //     .catch(() => {
  //       res.json({
  //         message: 'Article not found'
  //       })
  //     })
  // }

}

export default ArticleController;