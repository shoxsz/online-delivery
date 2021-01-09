import { ValidationManager } from "../core/ValidationManager";
import { Validation } from "../entities/Validation";
import { ValidationManagerRepo } from "./ValidationManagerRepo";

export class SystemValidationManager implements ValidationManager {

    constructor(
        private readonly validations: ValidationManagerRepo
    ) {}

    async validateResource(resource: string, secret: string): Promise<Validation> {

        const validation = await this.validations.findValidation(resource, secret);

        if(!validation) {
            return null;
        }

        await this.validations.deleteValidation(validation.id);

        return validation;

    }

}