import { Image } from "../entities/Image";
import { SystemImageRepo } from "../system/SystemImageRepo";
import { convertToEntity } from "./helpers/convert-to-entity";
import { convertToModel } from "./helpers/convert-to-model";
import { ImageModel } from "./ImageSchema";

export class MongoSystemImageRepo implements SystemImageRepo {

    private images = ImageModel;

    async create(image: Image) {
        
        await this.images.create(convertToModel(image));

    }

    async delete(userId: string, _id: string) {
        
        await this.images.deleteOne({ userId, _id });

    }

    async getById(userId: string, _id: string) {
        
        const found  = await this.images.findOne({
            userId,
            _id
        });

        if(!found) {
            return null;
        }

        return convertToEntity(Image, found);

    }

}