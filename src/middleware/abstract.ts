import {Request, Response} from "express";

export interface Middleware {
    middleware(req: Request, res: Response, next: () => void): Promise<void>;
}
