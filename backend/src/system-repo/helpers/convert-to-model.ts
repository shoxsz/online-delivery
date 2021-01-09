import { BaseEntity } from "../../entities/BaseEntity";

export const convertToModel = <T extends BaseEntity> (entity: T) => {

    const data: any = { ...entity };

    if(data.id) {
        data._id = data.id;
        delete data.id;
    }

    return data;

}