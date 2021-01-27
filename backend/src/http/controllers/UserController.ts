import { UserManager } from "../../core/UserManager";
import { CONTROLLER } from "../decorators/Controller";
import { POST } from "../decorators/Methods";
import { BODY } from "../decorators/Request";
import { CreateUserVal } from "../validators/CreateUser";
import { JSONValidator } from "./JSONValidator";

@CONTROLLER("users")
export class UserController {

    constructor(readonly users: UserManager) {}

    @POST()
    createUser(@BODY(JSONValidator) create: CreateUserVal): CreateUserVal {

        return create;

    }

}