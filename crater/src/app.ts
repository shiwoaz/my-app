import express, { Express, Request, Response } from "express";
import cors from "cors";

import oauther from "./routers/oauth";
import user from "./routers/user";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello").status(200);
});

app.use(cors());
app.use("", oauther);
app.use("", user);

app.listen("3001", () => console.log("at 3001"));
