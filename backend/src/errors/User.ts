import { BaseError } from "./BaseError";

export class UserError extends BaseError {

    constructor(message: string, error?: any) {
        super(message, error);
    }

}

export class UserEmailInUse extends UserError {

    constructor(email: string) {
        super(`O email informado, ${email}, já está em uso`);
    }

}

export class UserExceptions {

    static emailInUse(email: string) {

        return new UserEmailInUse(email);

    }

}