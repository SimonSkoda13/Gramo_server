import {Request, Response} from "express";
import express = require("express");
import {createDatabase} from "typeorm-extension";
import {createConnection, getConnection, ConnectionOptions, QueryFailedError} from "typeorm";
import { User } from "./entity/User";

// create typeorm connection
createConnection().then(connection => {
    const userRepository = connection.getRepository(User);

    // create and setup express app
    const app = express();
    app.use(express.json());

    // register routes

    app.get("/users", async function(req: Request, res: Response) {
        const users = await userRepository.find();
        res.json(users);
    });

    app.get("/users/:id", async function(req: Request, res: Response) {
        const results = await userRepository.findOne(req.params.id);
        return res.send(results);
    });

    app.post("/craUser", async function(req: Request, res: Response) {
        const user = await userRepository.create(req.body);
        const results = await userRepository.save(user);
        return res.send(results);
    });

    app.delete("/users/:id", async function(req: Request, res: Response) {
        const results = await userRepository.delete(req.params.id);
        return res.send(results);
    });


    app.get("/albums", async function(req: Request, res: Response) {
        const albums = await userRepository.find();
        res.json(albums);
    });

    app.get("/albums/:id", async function(req: Request, res: Response) {
        const results = await userRepository.findOne(req.params.id);
        return res.send(results);
    });

    app.post("/craAlbum", async function(req: Request, res: Response) {
        const album = await userRepository.create(req.body);
        const results = await userRepository.save(album);
        return res.send(results);
    });

    app.delete("/albums/:id", async function(req: Request, res: Response) {
        const results = await userRepository.delete(req.params.id);
        return res.send(results);
    });





    // start express server
    app.listen(3000);
});