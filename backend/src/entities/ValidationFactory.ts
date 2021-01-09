import { DateTime } from "../core/DateTime";
import { Entities } from "../core/Entities";
import { Encrypt } from "../utils/Encrypt";
import { Validation } from "./Validation";

export class ValidationFactory {

    static forEmail(email: string) {

        const validation = new Validation();

        Entities.fillDefault(validation, { prefix: "val_" });

        validation.resourceType = "email";
        validation.resource = email;
        validation.expireAt = DateTime.daysFromToday(2);
        validation.secret = Encrypt.randomHex(4);

        return validation;

    }

}