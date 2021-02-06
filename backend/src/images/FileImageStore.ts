import { ImageData } from "../core/types/ImageData";
import { SystemImageStore } from "../system/SystemImageStore";
import * as fs from "fs";
import * as path from "path";

export class FileImageStore implements SystemImageStore {

    constructor(
        private readonly path: string
    ){}

    upload(key: string, image: ImageData) {
        this.ensureImageFolderExists();
        const imagePath = this.getPath(key);
        fs.writeFileSync(imagePath, image.data);
    }

    remove(key: string) {
        this.ensureImageFolderExists();
        const imagePath = this.getPath(key);
        fs.unlinkSync(imagePath);
    }

    private ensureImageFolderExists() {

        if(!fs.existsSync(this.path)) {
            fs.mkdirSync(this.path, { recursive: true });
        }

    }

    private getPath(name: string) {

        return path.join(this.path, name);

    }
}