import { UserManager } from "./UserManager";
import { Auth } from "./Auth";
import { StoreManager } from "./StoreManager";
import { ProductManager } from "./ProductManager";
import { ImageManager } from "./ImageManager";
import { OrderManager } from "./OrderManager";

class SystemManager {

    constructor(
        readonly authenticator: Auth,
        readonly users: UserManager,
        readonly store: StoreManager,
        readonly product: ProductManager,
        readonly images: ImageManager,
        readonly order: OrderManager
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

    createOrder(): OrderManager;

}

export const CreateSystem = async (instantiator: Instantiator) => {

    await instantiator.initialize();

    Manager = new SystemManager(
        instantiator.createAuth(),
        instantiator.createUsers(),
        instantiator.createStore(),
        instantiator.createProduct(),
        instantiator.createImage(),
        instantiator.createOrder()
    );

}