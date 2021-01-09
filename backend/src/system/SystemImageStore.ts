import { ImageStore } from "../core/ImageStore";
import { ImageData } from "../core/types/ImageData";
import { ImageFormat } from "../core/types/ImageFormat";
import * as fs from "fs";
import * as path from "path";

export class SystemImageStore implements ImageStore {

    constructor(
        private readonly path
    ) {}

    async upload(imageId: string, data: Buffer, format: ImageFormat): Promise<ImageData> {
        
        this.ensureImageFolderExists();

        const imageName = this.formatName(imageId, format);
        const imagePath = this.getPath(imageName);

        fs.writeFileSync(imagePath, data);

        return {
            id: imageId,
            name: imageName,
            data,
            format
        };

    }

    async delete(imageId: string): Promise<ImageData> {

        const image = this.findImage(imageId);

        if(!image) {
            return null;
        }

        fs.unlinkSync(this.getPath(image.name));

        return image;

    }

    async download(imageId: string): Promise<ImageData> {

        return this.findImage(imageId);

    }

    private findImage(imageId: string): ImageData {

        const files = fs.readdirSync(this.path);

        const found = files.find(file => file.startsWith(imageId));

        if(!found) {
            return null;
        }

        const format = this.getFileFormat(found);

        const data = fs.readFileSync(this.getPath(found));

        return {
            id: imageId,
            name: found,
            format,
            data
        };

    }

    private getFileFormat(name: string) {

        if(name.endsWith(".png")) {
            return ImageFormat.PNG;
        }

        if(name.endsWith(".jpg")) {
            return ImageFormat.JPEG;
        }

        return null;

    }

    private ensureImageFolderExists() {

        if(!fs.existsSync(this.path)) {
            fs.mkdirSync(this.path, { recursive: true });
        }

    }

    private ensureImageExists(imageName: string) {

        return fs.existsSync(this.getPath(imageName));

    }

    private getPath(name: string) {

        return path.join(this.path, name);

    }

    private formatName(name: string, format: ImageFormat) {

        return `${name}${this.getFormatName(format)}`;

    }

    private getFormatName(format: ImageFormat) {        
    
        switch(format) {
            case ImageFormat.PNG:
                return ".png";
            case ImageFormat.JPEG:
                return ".jpg";
            default:
                return null;
        }

    }

}