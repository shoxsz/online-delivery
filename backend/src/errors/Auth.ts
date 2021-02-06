import { BaseError } from "./BaseError";

export class AuthError extends BaseError {
    constructor(message: string, error?: any){
        super(message, error);
    }
}

export class AuthInvalidCredentials extends AuthError {
    constructor() {
        super("Email/Senha inválidos");
    }
}

export class AuthExceptions {

    static invalidCredentials() {
        return new AuthInvalidCredentials();
    }

}