const { Router } = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const { UserModel } = require("../models");

const router = Router();

router.post(
  '/register',
  [
    check('email', 'Некоректный email').isEmail(),
    check('password', 'Минимальная длина пароля 6 символов').isLength({min: 6})
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          messages: "Некоректные данные при регистрации"
        })
      }

      const {email, name, password} = req.body;
      const candidate = await UserModel.findOne({email});

      if (candidate) {
        return res.status(400).json({message: "Этот email уже занят"})
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new UserModel({email, name, password: hashedPassword, avatar: 'undefined'});

      await user.save();
      res.status(201).json({message: "Пользователь создан"})

    } catch (e) {
      res.status(500).json({message: "Что-то пошло не так, попробуйте снова"})
    }
  });

router.post(
  '/login',
  [
    check('email', 'Некоректный email').normalizeEmail().isEmail(),
    check('password', 'Введите пароль').exists()
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          messages: "Некоректные данные при входе в систему"
        })
      }

      const { email, password } = req.body;
      const user = await UserModel.findOne({ email });

      if (!user) {
        return res.status(400).json({ message: "Пользователь не найден" })
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ message: "Неверный пароль" })
      }

      const token = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );

      res.json({ token, userId: user.id, name: user.name, avatar: user.avatar })
    } catch (e) {
      res.status(500).json({message: "Что-то пошло не так, попробуйте снова"})
    }
  });

module.exports = router;