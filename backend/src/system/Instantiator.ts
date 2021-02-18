import { Instantiator } from "../core/SystemManager";
import { FileImageStore } from "../images/FileImageStore";
import { MongoImageResolve } from "../system-repo/MongoImageResolve";
import { MongoSystemProductRepo } from "../system-repo/MongoProductManagerRepo";
import { MongoRepo } from "../system-repo/MongoRepo";
import { MongoStoreRepo } from "../system-repo/MongoStoreRepo";
import { MongoSystemImageRepo } from "../system-repo/MongoSystemImageRepo";
import { MongoUserManagerRepo } from "../system-repo/MongoUserManagerRepo";
import { TokenRepo } from "../system-repo/TokenRepo";
import { AuthWithToken } from "./AuthWithToken";
import { SystemImageManager } from "./SystemImageManager";
import { SystemOrderManager } from "./SystemOrderManager";
import { SystemProductManager } from "./SystemProductManager";
import { SystemRepo } from "./SystemRepo";
import { SystemStoreManager } from "./SystemStoreManager";
import { SystemUserManager } from "./SystemUserManager";

export class SystemInstantiator implements Instantiator {

    private systemRepo: SystemRepo;

    private tokenRepo: TokenRepo;
    private userRepo: MongoUserManagerRepo;
    private storeRepo: MongoStoreRepo;
    private productRepo: MongoSystemProductRepo;
    private imageRepo: MongoSystemImageRepo;
    private imageResolver: MongoImageResolve;

    private imageStore: FileImageStore;

    async initialize() {

        this.systemRepo = new MongoRepo("mongodb://127.0.0.1:40000");
        await this.systemRepo.initialize();

        this.tokenRepo = new TokenRepo();
        this.userRepo = new MongoUserManagerRepo();
        this.storeRepo = new MongoStoreRepo();
        this.productRepo = new MongoSystemProductRepo();
        this.imageRepo = new MongoSystemImageRepo();
        this.imageResolver = new MongoImageResolve();

        this.imageStore = new FileImageStore("images");

    }

    async clearRepo() {
        await this.systemRepo.clearRepo();
    }

    async shutdownRepo() {
        await this.systemRepo.shutdown();
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

    createOrder() {
        return new SystemOrderManager(null);
    }

}