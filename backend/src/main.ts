import "./env";
import { Express } from "./http/express/Express";
import { HttpApp } from "./http/HttpApp";
import { InitializeMock } from "./mock/initmock";
import { SystemInstantiator } from "./system/Instantiator";

const system = new SystemInstantiator();

const app: HttpApp = new HttpApp(new Express());

app.initialize(system)
.catch(error => console.log(error))
.finally(async () => {
    await system.clearRepo();
    await InitializeMock();
})
.catch(error => console.log(error));