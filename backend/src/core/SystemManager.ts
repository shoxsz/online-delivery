import { UserManager } from "./UserManager";
import { Auth } from "./Auth";

class SystemManager {

    constructor(
        readonly authenticator: Auth,
        readonly users: UserManager
    ) {}

}

export let Manager: SystemManager = null;

export interface Instantiator {

    createAuth(): Auth;

    createUsers(): UserManager;

}

export const CreateSystem = (instantiator: Instantiator) => {

    Manager = new SystemManager(
        instantiator.createAuth(),
        instantiator.createUsers()
    );

}