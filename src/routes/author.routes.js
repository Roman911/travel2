const { Router } = require('express');
const { UserModel } = require("../models");

const router = Router();

router.post(
  '/',
  async (req, res) => {
    try {
      const { idAuthor } = req.body;
      const author = await UserModel.findOne({ _id: idAuthor });

      res.json({ idAuthor, name: author.name, avatar: author.avatar })
    } catch (e) {
      res.status(500).json({message: "Что-то пошло не так, попробуйте снова"})
    }
  }
);

module.exports = router;