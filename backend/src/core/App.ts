import { Instantiator } from "./SystemManager";

export interface App {

    initialize(instantiator: Instantiator): Promise<void>;

    shutdown(): Promise<void>;

}