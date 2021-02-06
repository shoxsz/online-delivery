import { Instantiator } from "../core/SystemManager";
import { FileImageStore } from "../images/FileImageStore";
import { MongoSystemProductRepo } from "../system-repo/MongoProductManagerRepo";
import { MongoStoreRepo } from "../system-repo/MongoStoreRepo";
import { MongoSystemImageRepo } from "../system-repo/MongoSystemImageRepo";
import { MongoUserManagerRepo } from "../system-repo/MongoUserManagerRepo";
import { TokenRepo } from "../system-repo/TokenRepo";
import { AuthWithToken } from "./AuthWithToken";
import { SystemImageManager } from "./SystemImageManager";
import { SystemProductManager } from "./SystemProductManager";
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

    createProduct() {
        return new SystemProductManager(new MongoSystemProductRepo());
    }

    createImage() {
        return new SystemImageManager(new MongoSystemImageRepo(), new FileImageStore("images"));
    }

}