import { CreateUser } from "../../core/types/CreateUser";
import { UserManager } from "../../core/UserManager";
import { CONTROLLER } from "../decorators/Controller";
import { FORMATTER } from "../decorators/Formatter";
import { GUARD } from "../decorators/Guard";
import { POST, GET } from "../decorators/Methods";
import { BODY } from "../decorators/Request";
import { Formatter, FormatterAny } from "../interfaces/Formatter";
import { Guard } from "../interfaces/Guard";
import { HttpHeaders } from "../types/HttpHeaders";

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

class TestGuard implements Guard {

    allow(headers: HttpHeaders): boolean {

        return headers.authorization === "123456";

    }

}

@CONTROLLER("users")
export class UserController {

    constructor(readonly users: UserManager) {
        
    }

    @GUARD(TestGuard)
    @FORMATTER(TestFormatter2)
    @POST("teste")
    test(@BODY(TestFormatter) data: any) {
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