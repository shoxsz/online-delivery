import { BaseEntity } from "../../entities/BaseEntity";
import { Type } from "../../utils/Type";

export const convertToEntity = <T extends BaseEntity> (type: Type<T>, model: any) => {

    model = model.toObject();

    model.id = model._id;

    delete model.__v;
    delete model._id;

    return new type(model);

}