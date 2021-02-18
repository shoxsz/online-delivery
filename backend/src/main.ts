import { Express } from "./http/express/Express";
import { HttpApp } from "./http/HttpApp";
import { InitializeMock } from "./mock/initmock";
import { SystemInstantiator } from "./system/Instantiator";

const app: HttpApp = new HttpApp(new Express());

app.initialize(new SystemInstantiator())
.catch(error => console.log(error))
.finally(() => {
    InitializeMock();
})