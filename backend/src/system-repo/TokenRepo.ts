import { Document, Model } from "mongoose";
import { AuthToken } from "../entities/AuthToken";
import { User } from "../entities/User";
import { AuthRepo } from "../system/AuthRepo";
import { convertToModel } from "./helpers/convert-to-model";
import { convertUserToEntity } from "./helpers/convert-user-to-entity";
import { UserModel } from "./UserSchema";

export class TokenRepo implements AuthRepo {

    private users = UserModel;

    async userByEmail(email: string): Promise<User> {

        const found = await this.users.findOne({ email });

        if(!found) {
            return null;
        }
        
        return convertUserToEntity(found);

    }

    async setUserToken(token: AuthToken): Promise<any> {

        const model = convertToModel(token);

        await this.users.updateOne(
            {
                _id: token.userId
            },
            {
                $set: {
                    tokens: [
                        model
                    ]
                }
            }
        );

    }

    async getTokenUser(token: string): Promise<AuthToken> {

        const found = await this.users.findOne(
            {
                'tokens.token': token
            });

        if(!found) {
            return null;
        }

        const userToken = (found as any).tokens[0];

        return new AuthToken({
            id: userToken._id,
            token,
            user: convertUserToEntity(found),
            createdAt: userToken.createdAt,
            updatedAt: userToken.updatedAt
        });

    }

    async deleteToken(token: string) {

        await this.users.updateOne(
            {
                'tokens.token': token
            },
            {
                $set: {
                    tokens: []
                }
            }
        );

    }

}