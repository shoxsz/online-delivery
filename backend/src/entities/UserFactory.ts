import { Entities } from "../core/Entities";
import { CreateUser, CreateUserAddress, CreateUserPhone } from "../core/types/CreateUser";
import { Encrypt } from "../utils/Encrypt";
import { User, UserAddress, UserPhone } from "./User";

export class UserFactory {

    static fromCreate(create: CreateUser) {

        const user = Entities.fillDefault(new User, { prefix: "use_" });

        user.name = create.name;
        user.email = create.email;
        user.passwordSalt = Encrypt.randomHex128();
        user.password = Encrypt.encrypt(create.password, user.passwordSalt);
        user.birthdate = create.birthdate;
        user.address = create.address.map(address => UserFactory.addressFromCreate(address));
        user.phone = create.phone.map(phone => UserFactory.phoneFromCreate(phone));

        return user;

    }

    static addressFromCreate(create: CreateUserAddress) {

        return Entities.fillDefault(new UserAddress(create), { prefix: "add_" });

    }

    static phoneFromCreate(create: CreateUserPhone) {

        return Entities.fillDefault(new UserPhone(create), { prefix: "pho_" });

    }

}