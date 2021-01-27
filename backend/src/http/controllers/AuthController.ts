import { Manager } from "../../core/SystemManager";
import { CONTROLLER } from "../decorators/Controller";
import { POST } from "../decorators/Methods";
import { BODY } from "../decorators/Request";

@CONTROLLER("auth")
export class AuthController {

    @POST()
    authenticate(
        @BODY() auth: any
    ) {

        return Manager.authenticator.authenticate(auth.username, auth.password);

    }

    @POST()
    deauthenticate(
        @BODY() auth: any
    ) {
        return Manager.authenticator.destroyAuth(auth.token);
    }

}