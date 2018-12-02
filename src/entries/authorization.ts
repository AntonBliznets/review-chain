import {Request} from "express";
import {Entry} from "./abstract/entry";
import {api, HttpMethod} from "../lib/api-decorator";
import {inject, injectable} from "inversify";
import {Types} from "../inversify/types";
import {AuthorizationController} from "../controllers/authorization";

@injectable()
export class AuthorizationHttpEntry extends Entry {
    constructor(
        @inject(Types.AuthorizationController) private readonly controller: AuthorizationController,
    ) {
        super();
    }

    @api(HttpMethod.Post, "/sign")
    public async registration(req: Request) {
        return {token: await this.controller.registration(req.body)};
    }
}
