import { Entities } from "../core/Entities";
import { IDGenerator } from "../core/IDGenerator";
import { AuthToken } from "./AuthToken";

export class AuthTokenFactory {

    static createFromUser(userId: string) {

        const token = Entities.fillDefault(new AuthToken, { prefix: "aut_" });

        token.userId = userId;
        token.token = IDGenerator.generate();
        
        return token;

    }

}