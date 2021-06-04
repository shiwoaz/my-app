import express, { Express, Request, Response } from "express";
import cors from "cors";
import { createServer } from 'http'
import { Server, Socket } from 'socket.io'

import oauther from "./routers/oauth";
import user from "./routers/user";
import { FRONTSITE } from "./settings/Global";
import USERS, { addUser, delUser, getUsers } from './store'

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


  socket.on('join', ({ user, roomName }, cb) => {
    console.log(user, roomName, 'infos Join');
    socket.join(roomName)
    addUser({
      ...user,
      id: socket.id,
      rooms: roomName
    })
    console.log(USERS, "USERS Join");

    const client = io.sockets.adapter.rooms.get(roomName)
    // console.log(socket, client, 90);

  })

  socket.on('leave', (id) => {
    console.log(id, "leave");

    delUser(id)
  })

  socket.on('disconnect', () => {
    console.log(socket.id, "dis");
    delUser(socket.id)
  })


});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello").status(200);
});

app.use(cors());
app.use("", oauther);
app.use("", user);

app.get('/room/query', (req: Request, res: Response) => {
  // console.log(io.of('/').adapter.rooms, "rooms");
  const room = req.query.room
  console.log(room, "par");

  const result = io.of('/').adapter.rooms
  // console.log(result);

  const obj: {
    [k in string]: any
  } = {}

  for (let key of result!.keys()) {
    console.log(key);

    if (key?.length === 20 || key === 'undefined') {
      continue
    }

    if (!room) {
      const roomUser = getUsers(key)

      console.log(roomUser, "roomUser");


      obj[key] = roomUser
    } else {
      if (key === room) {
        const roomUser = getUsers(key)

        console.log(roomUser, "roomUserByID");


        obj[key] = roomUser
      }
    }

  }

  // console.log(result.keys());

  res.json(obj).status(200)

  return
})

HttpServer.listen("3001", () => console.log("at 3001"));
