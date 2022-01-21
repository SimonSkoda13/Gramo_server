import "reflect-metadata";
import {
  createConnection,
  getConnection,
  ConnectionOptions,
  QueryFailedError,
} from "typeorm";
import { User } from "./entity/Users/User";
import { Album } from "./entity/Albums/Album";
import console from "console";
import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

// CREATE
app.post("/users", async (req: Request<User>, res: Response<User>) => {
  const { firstName, lastName } = req.body;
  try {
    const user = User.create({ firstName, lastName });

    await user.save();

    return res.status(201).json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
// READ
app.get("/users", async function (req: Request, res: Response) {
  try {
    const result = await User.find();
    return res.status(201).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
app.get("/users/:id", async function (req: Request, res: Response) {
  try {
    const result = await User.findOne(req.params.id);
    return res.status(201).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
// UPDATE
app.put("/users/:id", async function (req: Request, res: Response) {
  try {
    const result = await User.findOne(req.params.id);
    User.merge(result, req.body);
    const results = await User.save(result);
    return res.status(201).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
// DELETE
app.put("/users/:id", async function (req: Request, res: Response) {
  try {
    const result = await User.delete(req.params.id);
    return res.status(201).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
// FIND

// create typeorm connection
createConnection()
  .then(async () => {
    app.listen(3001, () => console.log("server listening on port 3001"));
  })
  .catch((error) => {
    console.error(error);
  });

///some code needed

// // create and setup express app
// const app = express();
// app.use(express.json());

// // register routes
// app.get("/", async function(req: Request, res: Response) {
//     res.json("users");
// });

// app.get("/users", async function(req: Request, res: Response) {
//     const users = await userRepository.find();
//     res.json(users);
// });

// app.get("/users/:id", async function(req: Request, res: Response) {
//     console.log("<svsvsvs");
//     // const results = await userRepository.findOne(req.params.id);
//     return res.send({
//           id: 45,
//           name: "Vicko",
//           text: "string",
//           user: { id: 12, firstName: "string", lastName: "string" },
//         })
// });

// app.post("/craUser", async function(req: Request, res: Response) {
//     const user = await userRepository.create(req.body);
//     const results = await userRepository.save(user);
//     return res.send(results);
// });

// app.delete("/users/:id", async function(req: Request, res: Response) {
//     const results = await userRepository.delete(req.params.id);
//     return res.send(results);
// });

// app.get("/albums", async function(req: Request, res: Response) {
//     const albums = await albumRepository.find();
//     res.json(albums);
// });

// app.get("/albums/:id", async function(req: Request, res: Response) {
//     const results = await albumRepository.findOne(req.params.id);
//     return res.send(results);
// });

// app.post("/craAlbum", async function(req: Request, res: Response) {
//     const album = await albumRepository.create(req.body);
//     const results = await albumRepository.save(album);
//     return res.send(results);
// });

// app.delete("/albums/:id", async function(req: Request, res: Response) {
//     const results = await albumRepository.delete(req.params.id);
//     return res.send(results);
// });

// // start express server
// app.listen(3001);
// console.log("running express server on 3001");
