import { AuthToken } from "../entities/AuthToken";

export interface Auth {

    authenticate(username: string, password: string): Promise<AuthToken>;

    destroyAuth(token: string): Promise<void>;

    authorize(token: string): Promise<AuthToken>;

}