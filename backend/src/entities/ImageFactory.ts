import { Entities } from "../core/Entities";
import { IDGenerator } from "../core/IDGenerator";
import { ImageData } from "../core/types/ImageData";
import { Image } from "./Image";
import { User } from "./User";

export class ImageFactory {

    static create(user: User, data: ImageData) {

        const image = new Image();

        image.name = data.name;
        image.format = data.format;
        image.size = data.size;
        image.repoKey = IDGenerator.generate();
        image.userId = user.id;

        Entities.fillDefault(image, { prefix: "img_" });

        return image;

    }

}