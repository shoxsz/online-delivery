import { CreateStore } from "../core/types/CreateStore";

export const STORES: { [key: string]: CreateStore } = {};

export const mockStores = (cover: string, logo: string) => {

    STORES.STORE01 = {
        name: "Pizzaria",
        cover,
        description: "Muito boa",
        logo
    };

}