import express from "express";
import parser from "body-parser";

export class Application {
    public static readonly _server = express();

    public static get server() {
        Application._server.use(parser.json());

        return this._server;
    }
}
