import { Manager } from "../../../core/SystemManager";
import { Guard } from "../../interfaces/Guard";
import { HttpHeaders } from "../../types/HttpHeaders";
import { InvalidToken } from "../errors/InvalidToken";

export class Authenticator implements Guard {

    async allow(headers: HttpHeaders) {

        const auth = headers.authorization;

        if(!auth) {
            throw new InvalidToken(auth);
        }

        const parts = auth.split(" ");

        if(parts.length != 2) {
            throw new InvalidToken(auth);
        }

        if(parts[0] != "Bearer") {
            throw new InvalidToken(auth);
        }

        const token = await Manager.authenticator.authorize(parts[1]);

        if(token == null) {
            throw new InvalidToken(auth);
        }

        return { user: token.user, token };

    }

}