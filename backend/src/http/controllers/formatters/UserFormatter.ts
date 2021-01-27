import { User, UserAddress, UserPhone } from "../../../entities/User";
import { Validation } from "../../../entities/Validation";
import { Formatter } from "../../interfaces/Formatter";

type UserOutput = {

    id: string;

    createdAt: Date;
    updatedAt: Date;

    name: string;
    email: string;

    birthdate: Date;
    phone: UserPhone[];
    address: UserAddress[];

    validations: Validation[];

}

export class UserFormatter implements Formatter<User, UserOutput> {

    format(user: User, param: any) {

        const data = { ...user };

        delete data.password;
        delete data.passwordSalt;

        return data;

    }

}