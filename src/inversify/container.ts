import "reflect-metadata";

import {Container} from "inversify";
import {AuthorizationHttpEntry} from "../entries/authorization";
import {Types} from "./types";
import {Entry} from "../entries/abstract/entry";
import {AuthorizationController} from "../controllers/authorization";
import {JwtGenerator, TokenGenerator} from "../lib/jwt-generator";

process.on("unhandledRejection", (error: Error) => {
    console.error(error.message);
    console.error(error.stack);
});

process.on("uncaughtException", (error: Error) => {
    console.error(error.message);
    console.error(error.stack);
});

export const container = new Container();

container.bind<Entry>(Types.AuthorizationHttpEntry).to(AuthorizationHttpEntry);
container.bind<AuthorizationController>(Types.AuthorizationController).to(AuthorizationController);
container.bind<TokenGenerator>(Types.JwtGenerator).to(JwtGenerator);
