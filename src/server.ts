import { Request, Response, NextFunction } from "express";
import "reflect-metadata";
import express from 'express';
import "express-async-errors";
import { router } from "./routes";
import "./shared/container";
import "./database";
import { AppError } from "./erros/AppError";


const app = express();

app.use(express.json());

app.use(router);

//midlaware de erro
app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if(err instanceof AppError) {
            return response.status(err.statusCode).json({
                message: err.message
            })
        }
        return response.status(500).json({
            status:"error",
            message: `Internal server error - ${err.message}`,
        });
    }
); 

app.listen(3333, () => console.log("Server is runinng!"));

//Para documentação no swagger
//app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));