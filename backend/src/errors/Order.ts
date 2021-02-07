import { BaseError } from "./BaseError";

export class OrderError extends BaseError {
    constructor(message: string, error?: any) {
        super(message, error);
    }
}

export class OrderWithNoValidProducts extends OrderError {
    constructor() {
        super("O pedido não tem produtos válidos!");
    }
}

export class InvalidOrderStores extends OrderError {
    constructor(ids: string[]) {
        super(`As lojas informadas são inválidas [${ids.join(",")}]`);
    }
}

export class OrderExceptions {

    static noValidProducts() {
        return new OrderWithNoValidProducts();
    }

    static invalidStores(ids: string[]) {
        return new InvalidOrderStores(ids);
    }

    static invalidOrder(data: any) {

    }

}