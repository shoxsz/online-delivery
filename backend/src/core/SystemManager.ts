import { UserManager } from "./UserManager";
import { Auth } from "./Auth";
import { StoreManager } from "./StoreManager";
import { ProductManager } from "./ProductManager";
import { ImageManager } from "./ImageManager";

class SystemManager {

    constructor(
        readonly authenticator: Auth,
        readonly users: UserManager,
        readonly store: StoreManager,
        readonly product: ProductManager,
        readonly images: ImageManager
    ) {}

}

export let Manager: SystemManager = null;

export interface Instantiator {

    initialize(): Promise<void>;

    createAuth(): Auth;

    createUsers(): UserManager;

    createStore(): StoreManager;

    createProduct(): ProductManager;

    createImage(): ImageManager;

}

export const CreateSystem = (instantiator: Instantiator) => {

    Manager = new SystemManager(
        instantiator.createAuth(),
        instantiator.createUsers(),
        instantiator.createStore(),
        instantiator.createProduct(),
        instantiator.createImage()
    );

}