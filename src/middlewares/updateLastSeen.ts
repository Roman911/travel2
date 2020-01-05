import express from "express";
import { UserModel } from "../models";

export default (_: express.Request, __: express.Response, next: express.NextFunction) => {

  UserModel.findOneAndUpdate(

    { _id: '5dfddec493c17614e0bdd778' },
    {
      last_seen: new Date()
    },
    {
      new: true
    },
    () => {}
    );
  next()
}