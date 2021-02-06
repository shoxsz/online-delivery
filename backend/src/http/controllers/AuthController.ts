import { Manager } from "../../core/SystemManager";
import { CONTROLLER } from "../decorators/Controller";
import { FORMATTER } from "../decorators/Formatter";
import { GUARD } from "../decorators/Guard";
import { DELETE, POST } from "../decorators/Methods";
import { BODY, REQUEST } from "../decorators/Request";
import { AuthTokenFormatter } from "./formatters/AuthTokenFormatter";
import { Authenticator } from "./guards/Authenticator";

@CONTROLLER("auth")
export class AuthController {

    @POST()
    @FORMATTER(AuthTokenFormatter)
    authenticate(
        @BODY() auth: any
    ) {

        return Manager.authenticator.authenticate(auth.username, auth.password);

    }

    @DELETE()
    @GUARD(Authenticator)
    async deauthenticate(
        @REQUEST() request
    ) {
        await Manager.authenticator.destroyAuth(request.user.tokens?.[0]?.token);
    }

}