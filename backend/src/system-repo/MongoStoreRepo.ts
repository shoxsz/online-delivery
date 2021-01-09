import { SearchResult } from "../core/types/SearchResult";
import { Store } from "../entities/Store";
import { StoreFactory } from "../entities/StoreFactory";
import { SystemStoreRepo } from "../system/SystemStoreRepo";
import { StoreSearch } from "../core/types/StoreSearch";
import { ObjectHelper } from "../utils/ObjectHelper";
import { convertToModel } from "./helpers/convert-to-model";
import { StoreModel } from "./StoreSchema";

export class MongoStoreRepo implements SystemStoreRepo {
    
    readonly stores = StoreModel;

    async create(store: Store): Promise<void> {
        
        const model = convertToModel(store);

        await this.stores.create(model);

    }

    async update(userId: string, storeId: string, store: Partial<Store>): Promise<boolean> {

        const up = await this.stores.updateOne(
            {
                _id: storeId,
                userId
            },
            {
                store
            }
        );

        return up.nModified > 0;

    }

    async getById(userId: string, storeId: string): Promise<Store> {

        const store = await this.stores.findOne(
            {
                _id: storeId,
                userId
            }
        );

        if(!store) {
            return null;
        }

        return this.toStore(store);

    }

    async search(userId: string, search: StoreSearch): Promise<SearchResult<Store>> {

        const found = await this.stores.find(
            {
                userId,
                name: { $regex: `${search.name}.*`, $options: 'i' }
            },
            null,
            {
                limit: search.perPage,
                skip: search.perPage * search.page
            }
        );

        const count = await this.stores.count(
            {
                userId,
                name: { $regex: `${search.name}.*`, $options: 'i' }
            }
        );

        return {
            data: found.map(store => this.toStore(store)),
            count
        };

    }

    private toStore(model: any): Store {

        const { _id, __v, ...store } = model.toObject();

        return StoreFactory.instantiate({ id: _id, ...store });

    }

}