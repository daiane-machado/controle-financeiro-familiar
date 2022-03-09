import "reflect-metadata";
import express from 'express';
import { router } from "./routes";
import "./shared/container";
import "./database";


const app = express();

app.use(express.json());

app.use(router);

app.listen(3333, () => console.log("Server is runinng!"));
//Para documentação no swagger
//app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));