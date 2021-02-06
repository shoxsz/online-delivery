import { ImageManager } from "../core/ImageManager";
import { ImageData } from "../core/types/ImageData";
import { User } from "../entities/User";
import { SystemImageRepo } from "./SystemImageRepo";
import { SystemImageStore } from "./SystemImageStore";
import { ImageFactory } from "../entities/ImageFactory";
import { ImageExceptions } from "../errors/Image";

export class SystemImageManager implements ImageManager {

    constructor(
        private readonly imageRepo: SystemImageRepo,
        private readonly imageStore: SystemImageStore
    ) {}

    async create(user: User, imageData: ImageData) {

        const image = ImageFactory.create(user, imageData);

        await this.imageRepo.create(image);
        await this.imageStore.upload(image.repoKey, imageData);

        return image;

    }

    async delete(user: User, imageId: string) {
        
        const image = await this.getById(imageId);

        await this.imageRepo.delete(user.id, imageId);
        await this.imageStore.remove(image.repoKey);

        return image;

    }

    async getById(imageId: string) {
        
        const found = await this.imageRepo.getById(imageId);

        if(!found) {
            throw ImageExceptions.notFound(imageId);
        }

        return found;

    }
}