import { Validation } from "../entities/Validation";

export interface ValidationManager {
    
    validateResource(resource: string, secret: string): Promise<Validation>;

}