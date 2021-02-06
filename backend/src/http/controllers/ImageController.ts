import { UPLOAD_SINGLE } from "../decorators/Upload";
import { REQUEST } from "../decorators/Request";
import { CONTROLLER } from "../decorators/Controller";
import { POST } from "../decorators/Methods";
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

}