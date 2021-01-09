import { Validation } from "../entities/Validation";

export interface ValidationManagerRepo {

    findValidation(resource: string, secret: string): Promise<Validation>;

    deleteValidation(id: string): Promise<any>;

}