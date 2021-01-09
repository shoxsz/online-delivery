export interface Guard {

    allow(request: any): Promise<boolean>;

}