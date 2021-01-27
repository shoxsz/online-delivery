import { BaseError } from "./BaseError";

export type FieldErrors = {

    [key: string]: string;

}

export class ValidationException extends BaseError {

    constructor(error: FieldErrors, message?: string) {
        super(message || null, error);
    }

}

export class ValidationExceptions {

    static exception(error: FieldErrors, message?: string) {

        return new ValidationException(error, message);

    }

}