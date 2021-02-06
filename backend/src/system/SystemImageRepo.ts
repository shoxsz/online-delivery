import { Image } from "../entities/Image";

export interface SystemImageRepo {

    create(image: Image): Promise<void>;

    delete(userId: string, imageId: string): Promise<void>;

    getById(imageId: string): Promise<Image>;

}