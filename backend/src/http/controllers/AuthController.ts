import { Auth } from "../../core/Auth";
import { CONTROLLER } from "../decorators/Controller";
import { POST } from "../decorators/Methods";
import { BODY } from "../decorators/Request";

@CONTROLLER("auth")
export class AuthController {

    constructor(
        private readonly auth: Auth
    ) {}

    @POST()
    authenticate(
        @BODY() auth: any
    ) {

        return this.auth.authenticate(auth.username, auth.password);

    }

    @POST()
    deauthenticate(
        @BODY() auth: any
    ) {
        return this.auth.destroyAuth(auth.token);
    }

}