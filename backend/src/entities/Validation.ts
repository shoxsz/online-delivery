import { BaseEntity } from "./BaseEntity";

export class Validation extends BaseEntity{
 
    resourceType: string;
    resource: string;
    secret: string;
    expireAt: Date;

    constructor(validation?: Partial<Validation>) {
        super(validation);
        Object.assign(this, validation);
    }

}