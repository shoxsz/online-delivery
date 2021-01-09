export interface Guard {

    /**
     * Receive the request object
     * 
     * @returns true if the route can be accessed, false otherwise, may throw an exception
     */
    allow(request: any): Promise<boolean>;

}