import { Express } from "./http/express/Express";
import { HttpApp } from "./http/HttpApp";
import { SystemInstantiator } from "./system/Instantiator";

const app: HttpApp = new HttpApp(new Express());

app.initialize(new SystemInstantiator())
.finally(
    () => app.shutdown()
);