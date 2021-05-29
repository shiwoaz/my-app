import express, { Express, Request, Response } from "express";

import oauther from "./routers/oauth";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello").status(200);
});

app.use("", oauther);

app.listen("3001", () => console.log("at 3001"));
