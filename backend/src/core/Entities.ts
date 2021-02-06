import { isEntityName } from "typescript";
import { BaseEntity } from "../entities/BaseEntity";
import { DateTime } from "./DateTime";
import { IDGenerator, IDGeneratorOptions } from "./IDGenerator";

export class Entities {

    static fillDefault<T extends BaseEntity>(entity: T, idOptions?: IDGeneratorOptions) {

        entity.id = IDGenerator.generate(idOptions);
        entity.createdAt = DateTime.today();
        entity.updatedAt = DateTime.today();
        return entity;

    }

    static updateDefault<T extends BaseEntity>(entity: T): T {
        entity.updatedAt = DateTime.today();
        return entity;
    }

}