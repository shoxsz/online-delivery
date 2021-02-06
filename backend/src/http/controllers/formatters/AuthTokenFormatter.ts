import { AuthToken } from "../../../entities/AuthToken";
import { Formatter } from "../../interfaces/Formatter";
import { ParamData } from "../../types/ParamData";

export type TokenData = {
    token: string;
}

export class AuthTokenFormatter implements Formatter<AuthToken, TokenData> {

    format(token: AuthToken, param: ParamData) {

        return {
            token: token.token
        };

    }

}
