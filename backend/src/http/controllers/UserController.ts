import { CreateUser } from "../../core/types/CreateUser";
import { UserManager } from "../../core/UserManager";
import { CONTROLLER } from "../decorators/Controller";
import { FORMATTER } from "../decorators/Formatter";
import { POST, GET } from "../decorators/Methods";
import { BODY } from "../decorators/Request";
import { Formatter, FormatterAny } from "../interfaces/Formatter";

class TestFormatter implements Formatter<any, string> {
    
    format(data: any) {
        return "OI"
    }

}

class TestFormatter2 implements FormatterAny {

    format(data: any) {
        return "HEY";
    }

}

@CONTROLLER("users")
export class UserController {

    constructor(readonly users: UserManager) {
        
    }

    @FORMATTER(TestFormatter)
    @POST("teste")
    test(@BODY() data: any) {
        return data;
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