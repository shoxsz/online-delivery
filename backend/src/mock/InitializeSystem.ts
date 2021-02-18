import { Manager } from "../core/SystemManager"
import { Image } from "../entities/Image";
import { Product } from "../entities/Product";
import { Store } from "../entities/Store";
import { User } from "../entities/User";
import { IMAGES, mockImages } from "./images";
import { mockPizzas, PIZZAS } from "./pizzas";
import { mockStores, STORES } from "./store";
import { USERS } from "./users";

let user: User;
let store: Store;
let images: Image[];
let products: Product[];

const createUsers = async () => {

    return await Manager.users.create(USERS.ADMIN);

}

const createStore = async (user: User) => {

    return await Manager.store.create(user, STORES.STORE01);

}

const createProducts = async (user: User, store: Store) => {

    const pizzas = Object.values(PIZZAS);

    return await Promise.all(pizzas.map(pizza => Manager.product.create(user, pizza)));

}

const createImages = async (user: User) => {

    const images = Object.values(IMAGES);

    return await Promise.all(images.map(image => Manager.images.create(user, image)));

}

export const InitializeMock = async () => {

    user = await createUsers();
    console.log("CREATED USERS");

    mockImages();
    images = await createImages(user);
    console.log("CREATED IMAGES");

    mockStores(images[0].id, images[1].id)
    store = await createStore(user);
    console.log("CREATED STORE");

    mockPizzas(store.id, images[2].id);
    products = await createProducts(user, store);
    console.log("CREATED PRODUCTS");

}

export const ShutdownMock = async () => {

    await Promise.all(products?.map(async product => Manager.product.delete(user, store.id, product.id)));

    if(store) {
        await Manager.store.delete(user, store.id);
    }

    await Promise.all(images?.map(async image => Manager.images.delete(user, image.id)));

    if(user) {
        await Manager.users.delete(user);
    }
}