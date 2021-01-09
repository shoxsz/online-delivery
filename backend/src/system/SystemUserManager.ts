import { Entities } from "../core/Entities";
import { CreateUser } from "../core/types/CreateUser";
import { UserManager } from "../core/UserManager";
import { User } from "../entities/User";
import { UserFactory } from "../entities/UserFactory";
import { Validation } from "../entities/Validation";
import { ValidationFactory } from "../entities/ValidationFactory";
import { EmailAlreadyInUse } from "../errors/EmailAlreadyInUse";
import { Encrypt } from "../utils/Encrypt";
import { UserManagerRepo } from "./UserManagerRepo";

export class SystemUserManager implements UserManager {

    constructor(
        private readonly users: UserManagerRepo
    ) {}

    async create(create: CreateUser): Promise<User> {

        await this.assertEmailUnique(create.email);

        const user = UserFactory.fromCreate(create);

        user.validations = [ValidationFactory.forEmail(user.email)];

        await this.users.create(user);

        return user;
        
    }

    private async assertEmailUnique(email: string, myId?: string) {

        const found = await this.users.findByEmail(email, myId);

        if(found) {
            throw new EmailAlreadyInUse();
        }

    }

    async update(user: User, userData: Partial<User>): Promise<User> {

        if(userData.email) {
            await this.assertEmailUnique(userData.email, user.id);
            userData.validations = [ValidationFactory.forEmail(userData.email)];
        }

        if(userData.password) {
            userData.passwordSalt = Encrypt.randomHex128();
            userData.password = Encrypt.encrypt(userData.password, userData.passwordSalt);
        }

        Entities.updateDefault(userData);

        await this.users.update(user.id, userData);

        return this.users.findById(user.id);

    }

    async delete(user: User): Promise<User> {

        await this.users.delete(user.id);
        return user;

    }

    async findById(userId: string): Promise<User> {

        const user = await this.users.findById(userId);

        if(!user) {
            return null;
        }

        return user;

    }

}