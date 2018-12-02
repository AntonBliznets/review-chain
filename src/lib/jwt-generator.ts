import * as JWT from "jsonwebtoken";
import * as crypto from "crypto";
import {injectable} from "inversify";

export interface TokenGenerator {
   generate(payload: object): string;
}

@injectable()
export class JwtGenerator implements TokenGenerator {
    generate(payload: object): string {
        const jti = crypto.randomBytes(32).toString("hex");

        return JWT.sign(payload, "secret", {jwtid: jti});
    }
}
