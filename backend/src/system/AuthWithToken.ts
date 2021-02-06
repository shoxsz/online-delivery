import { Auth } from "../core/Auth";
import { AuthToken } from "../entities/AuthToken";
import { AuthTokenFactory } from "../entities/AuthTokenFactory";
import { AuthExceptions } from "../errors/Auth";
import { Encrypt } from "../utils/Encrypt";
import { AuthRepo } from "./AuthRepo";

export class AuthWithToken implements Auth {

    constructor(
        private readonly authRepo: AuthRepo
    ) {}

    async authenticate(username: string, password: string): Promise<AuthToken> {
        
        const user = await this.authRepo.userByEmail(username);

        if(!user) {
            throw AuthExceptions.invalidCredentials();
        }

        if(!Encrypt.testEncription(user.passwordSalt, user.password, password)) {
            throw AuthExceptions.invalidCredentials();
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