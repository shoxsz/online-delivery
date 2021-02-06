import { UserManager } from "./UserManager";
import { Auth } from "./Auth";
import { StoreManager } from "./StoreManager";
import { ProductManager } from "./ProductManager";

class SystemManager {

    constructor(
        readonly authenticator: Auth,
        readonly users: UserManager,
        readonly store: StoreManager,
        readonly product: ProductManager
    ) {}

}

export let Manager: SystemManager = null;

export interface Instantiator {

    createAuth(): Auth;

    createUsers(): UserManager;

    createStore(): StoreManager;

    createProduct(): ProductManager;

}

export const CreateSystem = (instantiator: Instantiator) => {

    Manager = new SystemManager(
        instantiator.createAuth(),
        instantiator.createUsers(),
        instantiator.createStore(),
        instantiator.createProduct()
    );

}