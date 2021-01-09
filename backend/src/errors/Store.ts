class StoreException extends Error {
    constructor(message: string) {
        super(message);
    }
}

class StoreNotFound extends StoreException {
    constructor(id: string) {
        super(`A loja ${id} não foi encontrada.`);
    }
}

export class StoreExceptions {

    static notFound(id: string) {

        throw new StoreNotFound(id);

    }

}