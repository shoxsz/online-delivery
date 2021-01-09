import { User } from "../entities/User";

export interface UserManagerRepo {

    create(user: User): Promise<any>;

    update(userId: string, user: Partial<User>): Promise<any>;

    findByEmail(email: string, excludeId?: string): Promise<User>;

    findById(userId: string): Promise<User>;

    delete(userId: string): Promise<any>;

}