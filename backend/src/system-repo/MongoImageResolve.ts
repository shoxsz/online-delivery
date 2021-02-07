import { Image } from "../entities/Image";
import { ImageError, ImageExceptions } from "../errors/Image";
import { ImageResolve } from "../system/ImageResolve";
import { convertToEntity } from "./helpers/convert-to-entity";
import { ImageModel } from "./ImageSchema";

export class MongoImageResolve implements ImageResolve {

    private images = ImageModel;

    async resolveIds(obj: any, fields: string[], failIfNotFound: boolean) {

        const ids: string[] = fields.map(field => obj[field]);

        const found = await this.images.find({ _id: { $in: ids } });

        const images: Image[] = [];
        const notFounds: string[] = [];
        for(let i = 0; i < ids.length; ++i) {

            const image = found.find(image => image._id == ids[i]);


            if(image) {
                images.push(convertToEntity(Image, image));
            } else {

                if(failIfNotFound) {
                    notFounds.push(ids[i]);
                } else {
                    images.push(null);
                }

            }

        }

        if(notFounds.length > 0) {
            throw ImageExceptions.notFounds(notFounds);
        }

        fields.map((field, idx) => obj[field] = images[idx].repoKey);

        return images;

    }

}