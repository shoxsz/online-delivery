import { ImageData } from "../../../core/types/ImageData";
import { User } from "../../../entities/User";
import { Formatter } from "../../interfaces/Formatter";

export type RequestImage = {

    user: User;
    image: ImageData

}

export class ImageValidator implements Formatter<any, RequestImage> {

    format(request: any): RequestImage {

        const imageData: ImageData = {
            name: request.file.originalname,
            format: request.file.mimetype,
            size: request.file.size,
            data: request.file.data
        };

        return {
            user: request.user,
            image: imageData
        };

    }

}