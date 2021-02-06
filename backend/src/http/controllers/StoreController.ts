import { Manager } from "../../core/SystemManager";
import { CONTROLLER } from "../decorators/Controller";
import { GUARD } from "../decorators/Guard";
import { DELETE, GET, POST, PUT } from "../decorators/Methods";
import { BODY, PARAM, QUERY, REQUEST } from "../decorators/Request";
import { CreateStoreVal } from "../validators/CreateStore";
import { StoreSearchVal } from "../validators/StoreSearch";
import { JSONValidator } from "./formatters/JSONValidator";
import { Authenticator } from "./guards/Authenticator";

@CONTROLLER("store")
export class StoreController {

    @POST()
    @GUARD(Authenticator)
    create(
        @BODY(JSONValidator) createStore: CreateStoreVal,
        @REQUEST() request
    ) {

        return Manager.store.create(request.user, createStore);

    }

    @PUT("/:id")
    @GUARD(Authenticator)
    update(
        @PARAM("id") id: string,
        @BODY(JSONValidator) updateStore: CreateStoreVal,
        @REQUEST() request
    ) {

        return Manager.store.update(request.user, id, updateStore);

    }

    @GET("/:id")
    @GUARD(Authenticator)
    get(
        @PARAM("id") id: string,
        @REQUEST() request
    ) {

        return Manager.store.getById(request.user, id);

    }

    @GET()
    @GUARD(Authenticator)
    search(
        @QUERY(JSONValidator) search: StoreSearchVal,
        @REQUEST() request
    ) {
        
        return Manager.store.search(request.user, search);

    }

    @DELETE("/:id")
    @GUARD(Authenticator)
    delete(
        @PARAM("id") id: string,
        @REQUEST() request
    ) {

        return Manager.store.delete(request.user, id);

    }

}