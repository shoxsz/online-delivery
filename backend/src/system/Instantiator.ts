import { Instantiator } from "../core/SystemManager";
import { FileImageStore } from "../images/FileImageStore";
import { ConnectMongo } from "../system-repo";
import { MongoImageResolve } from "../system-repo/MongoImageResolve";
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

    private tokenRepo: TokenRepo;
    private userRepo: MongoUserManagerRepo;
    private storeRepo: MongoStoreRepo;
    private productRepo: MongoSystemProductRepo;
    private imageRepo: MongoSystemImageRepo;
    private imageResolver: MongoImageResolve;

    private imageStore: FileImageStore;

    async initialize() {

        await ConnectMongo("mongodb://127.0.0.1:40000");

        this.tokenRepo = new TokenRepo();
        this.userRepo = new MongoUserManagerRepo();
        this.storeRepo = new MongoStoreRepo();
        this.productRepo = new MongoSystemProductRepo();
        this.imageRepo = new MongoSystemImageRepo();
        this.imageResolver = new MongoImageResolve();

        this.imageStore = new FileImageStore("images");

    }

    createAuth() {
        return new AuthWithToken(this.tokenRepo);
    }

    createUsers() {
        return new SystemUserManager(this.userRepo);
    }

    createStore() {
        return new SystemStoreManager(this.storeRepo, this.imageResolver);
    }

    createProduct() {
        return new SystemProductManager(this.productRepo, this.imageResolver);
    }

    createImage() {
        return new SystemImageManager(this.imageRepo, this.imageStore);
    }

}