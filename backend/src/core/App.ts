export interface App {

    initialize(): Promise<void>;

    shutdown(): Promise<void>;

}