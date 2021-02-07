import { BaseError } from "./BaseError";

export class ImageError extends BaseError {
    constructor(message: string, errors?: any) {
        super(message, errors);
    }
}

export class ImageNotFoundError extends ImageError {
    constructor(id: string) {
        super(`A imagem ${id} não foi encontrada`);
    }
}

export class ImagesNotFoundError extends ImageError {
    constructor(ids: string[]) {
        super(`As imagens [${ids.join(",")}] não foram encontradas`);
    }
}


export class ImageExceptions {

    static notFound(id: string) {
        return new ImageNotFoundError(id);
    }

    static notFounds(ids: string[]) {
        return new ImagesNotFoundError(ids);
    }

}