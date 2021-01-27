import { Manager } from "../../core/SystemManager";
import { CONTROLLER } from "../decorators/Controller";
import { FORMATTER } from "../decorators/Formatter";
import { GUARD } from "../decorators/Guard";
import { GET, POST } from "../decorators/Methods";
import { BODY, REQUEST } from "../decorators/Request";
import { CreateUserVal } from "../validators/CreateUser";
import { UserFormatter } from "./formatters/UserFormatter";
import { Authenticator } from "./guards/Authenticator";
import { JSONValidator } from "./JSONValidator";

@CONTROLLER("users")
export class UserController {

    @POST()
    @FORMATTER(UserFormatter)
    createUser(@BODY(JSONValidator) create: CreateUserVal) {

        return Manager.users.create(create);

    }

    @GET("me")
    @FORMATTER(UserFormatter)
    @GUARD(Authenticator)
    getInfo(@REQUEST() request: any) {

        

        return request.user;

    }

}