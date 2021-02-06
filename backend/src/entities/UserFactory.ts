import { Entities } from "../core/Entities";
import { CreateUser, CreateUserAddress, CreateUserPhone } from "../core/types/CreateUser";
import { Encrypt } from "../utils/Encrypt";
import { User, UserAddress, UserPhone } from "./User";
import { Validation } from "./Validation";
import { ValidationFactory } from "./ValidationFactory";

export class UserFactory {

    static updateFromCreate(user: User, create: CreateUser) {
        
        user.name = create.name;
        user.birthdate = create.birthdate;
        user.address = create.address.map(address => UserFactory.addressFromCreate(address));
        user.phone = create.phone.map(phone => UserFactory.phoneFromCreate(phone));

        if(!Encrypt.testEncription(user.passwordSalt, user.password, create.password)) {
            user.passwordSalt = Encrypt.randomHex128();
            user.password = Encrypt.encrypt(create.password, user.passwordSalt);
        }

        if(user.email != create.email) {
            user.email = create.email;
            user.validations = [ValidationFactory.forEmail(create.email)];
        }

        Entities.updateDefault(user);

        return user;
        
    }

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