import { threadId } from "worker_threads";
import { ProductSearch } from "../core/types/ProductSearch";
import { SearchResult } from "../core/types/SearchResult";
import { Product } from "../entities/Product";
import { SystemProductRepo } from "../system/SystemProductRepo";
import { convertToEntity } from "./helpers/convert-to-entity";
import { convertToModel } from "./helpers/convert-to-model";
import { ProductModel } from "./ProductSchema";
import { StoreModel } from "./StoreSchema";

export class MongoSystemProductRepo implements SystemProductRepo {

    private model = ProductModel;
    private storesModel = StoreModel;

    async create(product: Product): Promise<any> {

        const modelProduct = convertToModel(product);

        await this.model.create(modelProduct);

        return product;

    }

    async update(id: string, product: Partial<Product>): Promise<any> {
        
        const response = await this.model.updateOne({ _id: id }, product);

        return response;

    }

    async getById(userId: string, storeId: string, _id: string): Promise<Product> {
        
        if(!(await this.storeExists(userId, storeId))) {
            return null;
        }

        const foundModel = await this.model.findOne({
            storeId,
            _id
        });

        if(!foundModel) {
            return null;
        }

        return convertToEntity(Product, foundModel);

    }

    async search(storeId: string, search: ProductSearch): Promise<SearchResult<Product>> {
        
        const found = await this.model.find(
            {
                storeId,
                name: { $regex: `${search.name}.*`, $options: 'i' }
            },
            null,
            {
                limit: search.perPage,
                skip: search.page * search.perPage
            }
        );

        const count = await this.model.count({ storeId });

        return {
            data: found.map(product => convertToEntity(Product, product)),
            count  
        };

    }

    async findAll(): Promise<Product[]> {
        
        const found = await this.model.find();

        return found.map(product => convertToEntity(Product, product));

    }

    async deleteById(id: string): Promise<any> {
        
        await this.model.deleteOne({ _id: id });

    }

    async storeExists(userId: string, storeId: string): Promise<boolean> {

        const foundStore = await this.storesModel.findOne(
            {
                _id: storeId,
                userId
            }
        );

            return !!foundStore;

    }

}