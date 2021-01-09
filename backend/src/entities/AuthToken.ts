import { BaseEntity } from "./BaseEntity";
import { User } from "./User";

export class AuthToken extends BaseEntity {

    token: string;
    userId: string;
    user?: User;

    constructor(partial?: Partial<AuthToken>) {
        super(partial);
        Object.assign(this, partial);
    }

}