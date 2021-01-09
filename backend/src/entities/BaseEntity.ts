export abstract class BaseEntity {

    id: string;

    createdAt: Date;
    updatedAt: Date;

    constructor(partial: Partial<BaseEntity> = {}) {

        this.id = partial.id;
        this.createdAt = new Date(partial.createdAt);
        this.updatedAt = new Date(partial.updatedAt);

    }

}