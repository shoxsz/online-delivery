import { App } from "./core/App";
import { HttpApp } from "./http/HttpApp";
import { ExpressApp } from "./http/express/ExpressApp";

const app: HttpApp = new ExpressApp();

app.initialize()
.finally(
    () => app.shutdown()
);