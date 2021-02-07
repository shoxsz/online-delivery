import { CreateUser } from "../core/types/CreateUser";
import { UserManager } from "../core/UserManager";
import { User } from "../entities/User";
import { UserFactory } from "../entities/UserFactory";
import { ValidationFactory } from "../entities/ValidationFactory";
import { UserExceptions } from "../errors/User";
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

    async update(user: User, update: CreateUser): Promise<User> {

        if(user.email != update.email) {
            await this.assertEmailUnique(update.email);
        }

        const updatedUser = UserFactory.updateFromCreate(user, update);

        await this.users.update(user.id, updatedUser);

        return this.users.findById(user.id);

    }

    private async assertEmailUnique(email: string, myId?: string) {

        const found = await this.users.findByEmail(email, myId);

        if(found) {
            throw UserExceptions.emailInUse(email);
        }

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