import { AuthToken } from "../entities/AuthToken";
import { User } from "../entities/User";

export interface AuthRepo {

    userByEmail(email: string): Promise<User>;

    setUserToken(token: AuthToken): Promise<any>;

    getTokenUser(token: string): Promise<AuthToken>;

    deleteToken(token: string): Promise<void>;

}