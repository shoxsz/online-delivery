import { CreateUser } from "../../core/types/CreateUser";
import { UserManager } from "../../core/UserManager";
import { CONTROLLER } from "../decorators/Controller";
import { FORMATTER } from "../decorators/Formatter";
import { POST, GET } from "../decorators/Methods";
import { BODY } from "../decorators/Request";
import { Formatter, FormatterAny } from "../types/Formatter";

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

    @POST("teste")
    @FORMATTER(TestFormatter2)
    test(@BODY(TestFormatter) data: string) {
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