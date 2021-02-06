import { request } from "express";
import { Manager } from "../../core/SystemManager";
import { CONTROLLER } from "../decorators/Controller";
import { FORMATTER } from "../decorators/Formatter";
import { GUARD } from "../decorators/Guard";
import { DELETE, GET, POST, PUT } from "../decorators/Methods";
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

    @PUT()
    @FORMATTER(UserFormatter)
    @GUARD(Authenticator)
    updateUser(
        @REQUEST() request: any,
        @BODY(JSONValidator) update: CreateUserVal) {

        return Manager.users.update(request.user, update);

    }

    @GET("me")
    @FORMATTER(UserFormatter)
    @GUARD(Authenticator)
    getInfo(@REQUEST() request: any) {

        return request.user;

    }

    @DELETE()
    @FORMATTER(UserFormatter)
    @GUARD(Authenticator)
    deleteUser(@REQUEST() request: any) {

        return Manager.users.delete(request.user);

    }

}