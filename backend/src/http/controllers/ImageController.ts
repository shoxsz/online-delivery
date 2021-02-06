import { UPLOAD_SINGLE } from "../decorators/Upload";
import { PARAM, REQUEST } from "../decorators/Request";
import { CONTROLLER } from "../decorators/Controller";
import { DELETE, GET, POST } from "../decorators/Methods";
import { Manager } from "../../core/SystemManager";
import { GUARD } from "../decorators/Guard";
import { Authenticator } from "./guards/Authenticator";
import { ImageValidator, RequestImage } from "./formatters/ImageValidator";

@CONTROLLER("image")
export class ImageController {

    @POST()
    @GUARD(Authenticator)
    @UPLOAD_SINGLE("image")
    create(
        @REQUEST(ImageValidator) imageData: RequestImage
    ) {

        return Manager.images.create(imageData.user, imageData.image);

    }

    @DELETE("/:id")
    @GUARD(Authenticator)
    delete(
        @PARAM("id") id: string,
        @REQUEST() request
    ) {

        return Manager.images.delete(request.user, id);

    }

    @GET("/:id")
    get(
        @PARAM("id") id: string
    ) {

        return Manager.images.getById(id);

    }

}