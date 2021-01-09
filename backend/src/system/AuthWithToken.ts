import { Auth } from "../core/Auth";
import { AuthToken } from "../entities/AuthToken";
import { AuthTokenFactory } from "../entities/AuthTokenFactory";
import { Encrypt } from "../utils/Encrypt";
import { AuthRepo } from "./AuthRepo";

export class AuthWithToken implements Auth {

    constructor(
        private readonly authRepo: AuthRepo
    ) {}

    async authenticate(username: string, password: string): Promise<AuthToken> {
        
        const user = await this.authRepo.userByEmail(username);

        if(!user) {
            return null;
        }

        if(!Encrypt.testEncription(user.passwordSalt, user.password, password)) {
            return null;
        }

        const authToken = AuthTokenFactory.createFromUser(user.id);

        await this.authRepo.setUserToken(authToken);

        return authToken;

    }

    async destroyAuth(token: string): Promise<void> {

        await this.authRepo.deleteToken(token);

    }

    async authorize(token: string): Promise<AuthToken> {
        
        const authToken = await this.authRepo.getTokenUser(token);

        if(!authToken) {
            return null;
        }

        if(!authToken.user) {
            return null;
        }

        return authToken;

    }

}