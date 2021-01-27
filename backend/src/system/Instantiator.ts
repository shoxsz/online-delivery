import { Instantiator } from "../core/SystemManager";
import { MongoUserManagerRepo } from "../system-repo/MongoUserManagerRepo";
import { TokenRepo } from "../system-repo/TokenRepo";
import { AuthWithToken } from "./AuthWithToken";
import { SystemUserManager } from "./SystemUserManager";

export class SystemInstantiator implements Instantiator {

    createAuth() {
        return new AuthWithToken(new TokenRepo);
    }

    createUsers() {
        return new SystemUserManager(new MongoUserManagerRepo);
    }

}