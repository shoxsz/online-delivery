import { User } from "../entities/User";
import { CreateUser } from "./types/CreateUser";

export interface UserManager {

    create(user: CreateUser): Promise<User>;

    update(user: User, userData: Partial<User>): Promise<User>;

    delete(user: User): Promise<User>;

    findById(userId: string): Promise<User>;

}