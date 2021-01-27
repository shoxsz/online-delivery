import { BaseError } from "../../../errors/BaseError";

export class InvalidToken extends BaseError {

    constructor(auth: string) {
        super(`Token de autorização incorreto: "${auth}"`);
    }

}