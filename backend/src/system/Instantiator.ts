import { Instantiator } from "../core/SystemManager";
import { MongoStoreRepo } from "../system-repo/MongoStoreRepo";
import { MongoUserManagerRepo } from "../system-repo/MongoUserManagerRepo";
import { TokenRepo } from "../system-repo/TokenRepo";
import { AuthWithToken } from "./AuthWithToken";
import { SystemStoreManager } from "./SystemStoreManager";
import { SystemUserManager } from "./SystemUserManager";

export class SystemInstantiator implements Instantiator {

    createAuth() {
        return new AuthWithToken(new TokenRepo);
    }

    createUsers() {
        return new SystemUserManager(new MongoUserManagerRepo);
    }

    createStore() {
        return new SystemStoreManager(new MongoStoreRepo());
    }

}