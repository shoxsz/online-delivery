import { BaseError } from "../../../errors/BaseError";

export class InternalServerError extends BaseError {

    constructor() {
        super("Internal Server Error");
    }

}