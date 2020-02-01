import express from  'express';
import mongoose from 'mongoose';
import bodyParser from  'body-parser';
import dotenv from 'dotenv';

import { ArticleController } from "./controllers";

import { updateLastSeen } from './middlewares';

const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use(updateLastSeen);

app.use('/auth', require('./routes/auth.routes'));
app.use('/post', require('./routes/post.routes'));

const ArticleCtrl = new ArticleController();

const PORT = process.env.PORT || 5000;

async function start() {
  try {
    await mongoose.connect(`mongodb+srv://Roman:${process.env.MONGO_DB_KEY}@cluster0-vogsm.mongodb.net/travel?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex: true
    });

    app.get("/article/:id", ArticleCtrl.show);
    app.get("/article", ArticleCtrl.index);
    app.post("/article", ArticleCtrl.create);

    app.listen(PORT, function () {
      console.log(`Server: http://localhost:${PORT}`);
    });
  } catch (e) {
    console.log('Serwer error', e.message);
    process.exit(1)
  }
}

start();