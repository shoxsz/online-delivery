import { Express } from "./http/express/Express";
import { HttpApp } from "./http/HttpApp";

const app: HttpApp = new HttpApp(new Express());

app.initialize()
.finally(
    () => app.shutdown()
);