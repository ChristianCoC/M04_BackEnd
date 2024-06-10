/* eslint-disable prettier/prettier */
import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
       console.log(`Ruta: ${req.url}, Metodo: ${req.method}, Fecha: ${new Date()}, Hora: ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`),
       next(); 
    }
}

export function loggerGlobal (req: Request, res: Response, next: NextFunction) {
    console.log(`Ruta: ${req.url}, Metodo: ${req.method}, Fecha: ${new Date()}, Hora: ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`),
    next();
}