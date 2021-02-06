import { Image } from "../entities/Image";
import { User } from "../entities/User";
import { ImageData } from "./types/ImageData";

export interface ImageManager {

    create(user: User, image: ImageData): Promise<Image>;

    delete(user: User, imageId: string): Promise<Image>;

    getById(user: User, imageId: string): Promise<Image>;

}