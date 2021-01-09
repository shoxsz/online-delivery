import { Document } from "mongoose";
import { User, UserAddress, UserPhone } from "../entities/User";
import { Validation } from "../entities/Validation";
import { UserManagerRepo } from "../system/UserManagerRepo";
import { convertToEntity } from "./helpers/convert-to-entity";
import { convertToModel } from "./helpers/convert-to-model";
import { convertUserToEntity } from "./helpers/convert-user-to-entity";
import { UserModel } from "./UserSchema";

export class MongoUserManagerRepo implements UserManagerRepo {

    private model = UserModel;

    async create(user: User): Promise<any> {

        const userModel: any = convertToModel(user);

        userModel.phones = userModel.phone.map(phone => convertToModel(phone));
        userModel.address = userModel.address.map(address => convertToModel(address));
        userModel.validations = userModel.validations.map(validation => convertToModel(validation));


        return this.model.create(userModel);

    }

    async update(userId: string, user: Partial<User>): Promise<any> {

        await this.model.updateOne(
            {
                _id: userId  
            },
            user
        );

    }

    async findByEmail(email: string, excludeId?: string): Promise<User> {

        const query: any = {
            email
        };

        if(excludeId) {
            query._id = { $ne: excludeId };
        }

        const found = await this.model.findOne(query);

        if(!found) {
            return null;
        }

        return convertUserToEntity(found);

    }

    async findById(userId: string): Promise<User> {

        const found = await this.model.findOne({ _id: userId });

        if(!found) {
            return null;
        }

        return convertUserToEntity(found);

    }

    async delete(userId: string): Promise<any> {

        await this.model.deleteOne({ _id: userId });

    }

}