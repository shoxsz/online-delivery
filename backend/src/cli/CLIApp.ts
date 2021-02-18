import { App } from "../core/App";
import { Instantiator } from "../core/SystemManager";
import { CreateSystem } from "../core/SystemManager";
import { InitializeMock, ShutdownMock } from "../mock/InitializeSystem";
import { createInterface, Interface } from "readline";
import { DisconnectMongo } from "../system-repo";

export class CLIApp implements App {

    private readline: Interface;
    private promise: Promise<void>;

    async initialize(instantiator: Instantiator) {

        await CreateSystem(instantiator);

        await InitializeMock();

        this.promise = new Promise<void>((resolve, reject) => {
            this.readline = createInterface({
                input: process.stdin,
                output: process.stdout
            });
    
            this.question(resolve, reject);
        });

        return this.promise;

    }

    private question(resolve: Function, reject: Function) {
        this.readline.question("cmd> ", input => {
            if(input == "exit") {
                resolve();
            } else {
                this.question(resolve, reject);
            }
        });
    }

    async shutdown() {

        await ShutdownMock();
        await DisconnectMongo();

    }

}