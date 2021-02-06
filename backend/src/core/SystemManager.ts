import { UserManager } from "./UserManager";
import { Auth } from "./Auth";
import { StoreManager } from "./StoreManager";

class SystemManager {

    constructor(
        readonly authenticator: Auth,
        readonly users: UserManager,
        readonly store: StoreManager
    ) {}

}

export let Manager: SystemManager = null;

export interface Instantiator {

    createAuth(): Auth;

    createUsers(): UserManager;

    createStore(): StoreManager;

}

export const CreateSystem = (instantiator: Instantiator) => {

    Manager = new SystemManager(
        instantiator.createAuth(),
        instantiator.createUsers(),
        instantiator.createStore()
    );

}