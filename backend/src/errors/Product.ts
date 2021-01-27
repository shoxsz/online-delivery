import { BaseError } from "./BaseError";

export class ProductError extends BaseError {

    constructor(message: string) {
        super(message);
    }

}

export class ProductStoreNotFound extends ProductError {

    constructor(storeId: string) {
        super(`A loja ${storeId} não foi encontrada`);
    }

}

export class ProductNotFound extends ProductError {

    constructor(productId: string) {
        super(`O produto ${productId} não foi encontrado`);
    }

}

export class ProductExceptions { 

    static storeNotFound(storeId: string) {

        return new ProductStoreNotFound(storeId);

    }

    static notFound(productId: string) {
        
        return new ProductNotFound(productId);

    }

}