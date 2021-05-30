import express, { Request, Response, Router } from "express";

import db from "../dao/m";
import { UserInfo } from "../dao/userInfo";

const router: Router = express.Router();

router.get("/userinfo", async (req: Request, res: Response) => {
  const userID = req.query.code as string;
  if (!!userID) {
    const row = await UserInfo(db, userID);
    console.log(row);
    res
      .json({
        data: row[0],
      })
      .status(200);
    return;
  } else {
    res
      .json({
        message: "bad request",
      })
      .status(403);
    return;
  }
});

export default router;
