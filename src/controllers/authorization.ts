import {inject, injectable} from "inversify";
import {Types} from "../inversify/types";
import {TokenGenerator} from "../lib/jwt-generator";

type RegistrationData = {
    name: string,
    email: string,
    domain: string,
    password: string,
}

@injectable()
export class AuthorizationController {
    constructor(@inject(Types.JwtGenerator) private readonly generator: TokenGenerator) {
    }

    async registration(data: RegistrationData): Promise<string> {
        return this.generator.generate(data);
    }
}
