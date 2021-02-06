import { Manager } from "../../core/SystemManager";
import { CreateProduct } from "../../core/types/CreateProduct";
import { CONTROLLER } from "../decorators/Controller";
import { GUARD } from "../decorators/Guard";
import { DELETE, GET, POST, PUT } from "../decorators/Methods";
import { BODY, PARAM, QUERY, REQUEST } from "../decorators/Request";
import { CreateProductVal } from "../validators/Createproduct";
import { ProductSearchVal } from "../validators/ProductSearch";
import { JSONValidator } from "./formatters/JSONValidator";
import { Authenticator } from "./guards/Authenticator";

@CONTROLLER()
export class ProductController {

    @POST("/store/:sid/product")
    @GUARD(Authenticator)
    create(
        @PARAM("sid") storeId: string,
        @BODY(JSONValidator) createProduct: CreateProductVal,
        @REQUEST() request
    ) {
        return Manager.product.create(request.user, { storeId, ...createProduct });

    }

    @PUT("/store/:sid/product/:id")
    @GUARD(Authenticator)
    update(
        @PARAM("sid") storeId: string,
        @PARAM("id") id: string,
        @BODY(JSONValidator) updateProduct: CreateProductVal,
        @REQUEST() request
    ) {
        return Manager.product.update(request.user, id, { storeId, ...updateProduct });

    }

    @GET("/store/:sid/product/:id")
    @GUARD(Authenticator)
    get(
        @PARAM("sid") storeId: string,
        @PARAM("id") id: string,
        @REQUEST() request
    ) {
        return Manager.product.getById(request.user, storeId, id);
    }

    @GET("/store/:sid/product")
    @GUARD(Authenticator)
    search(
        @PARAM("sid") storeId: string,
        @QUERY(JSONValidator) search: ProductSearchVal,
        @REQUEST() request
    ) {
        return Manager.product.search(request.user, storeId, search);
    }
    
    @DELETE("/store/:sid/product/:id")
    @GUARD(Authenticator)
    delete(
        @PARAM("sid") storeId: string,
        @PARAM("id") id: string,
        @REQUEST() request
    ) {

        return Manager.product.delete(request.user, storeId, id);

    }
}