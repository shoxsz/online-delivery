import { plainToClass } from "class-transformer";
import { validate, ValidationError } from "class-validator";
import { FieldErrors, ValidationExceptions } from "../../../errors/ValidationException";
import { ObjectHelper } from "../../../utils/ObjectHelper";
import { Formatter } from "../../interfaces/Formatter";
import { ParamData } from "../../types/ParamData";

export class JSONValidator implements Formatter<any, any> {

    async format(data: any, param: ParamData) {

        const resolved = plainToClass(param.type, data, { excludeExtraneousValues: true });

        const errors = await validate(resolved);

        if(errors.length > 0) {
            throw ValidationExceptions.exception(this.formatErrors(errors));
        }

        return resolved;

    }

    private formatErrors(errors: ValidationError[]) {

        let fieldErrors: FieldErrors = {};

        errors.forEach(error => {

            if(error.constraints) {
                fieldErrors[error.property] = Object.values(error.constraints).join(", ");
            }

            if(error.children) {
                const errors = ObjectHelper.appendPrefix(this.formatErrors(error.children), `${error.property}.`);
                fieldErrors = ObjectHelper.merge(fieldErrors, errors);
            }

        });

        return fieldErrors;

    }

}