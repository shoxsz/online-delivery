import { CreateUser } from "../../core/types/CreateUser";
import { UserManager } from "../../core/UserManager";
import { CONTROLLER } from "../decorators/Controller";
import { POST, GET } from "../decorators/Methods";
import { BODY } from "../decorators/Request";

@CONTROLLER("users")
export class UserController {

    constructor(readonly users: UserManager) {
        
    }

    @POST()
    createUser(@BODY() create: CreateUser) {

        create.birthdate = new Date(create.birthdate);

        return this.users.create(create);

    }

    
    @GET("me")
    getMe() {

        

    }

}