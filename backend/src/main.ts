import { CLIApp } from "./cli/CLIApp";
import { Express } from "./http/express/Express";
import { HttpApp } from "./http/HttpApp";
import { SystemInstantiator } from "./system/Instantiator";

//const app: HttpApp = new HttpApp(new Express());
const app: CLIApp = new CLIApp();

app.initialize(new SystemInstantiator())
.catch(error => console.log(error))
.finally(() => app.shutdown())
.catch(error => console.log(error))
.finally(() => console.log("Finished!"));