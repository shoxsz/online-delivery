export interface SystemRepo {

    initialize(): Promise<void>;

    clearRepo(): Promise<void>;

    shutdown(): Promise<void>;

}