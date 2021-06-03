import express, { Express, Request, Response } from "express";
import cors from "cors";
import { createServer } from 'http'
import { Server, Socket } from 'socket.io'

import oauther from "./routers/oauth";
import user from "./routers/user";
import { FRONTSITE } from "./settings/Global";

const app: Express = express();

const HttpServer = createServer(app)

// const io = require('socket.io')(Server) 

const io = new Server(HttpServer, {
  cors: {
    origin: FRONTSITE,
    methods: ["GET", "POST"]
  }
})

io.on("connection", (socket: Socket) => {
  console.log("connect");

  socket.on('join', user => {
    console.log(user);
  })

});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello").status(200);
});

app.use(cors());
app.use("", oauther);
app.use("", user);

HttpServer.listen("3001", () => console.log("at 3001"));
