import { BashiApp } from "./BashiApp";
import { ConfigLoader } from "./common/config/ConfigLoader";
import { IConfigSettings, IContainer } from "./common/interface/";
import { BashiSlackContainer } from "./factory/BashiSlackContainer";

const configLoader = new ConfigLoader();
let config: IConfigSettings;

try {
    config = configLoader.loadConfig();
}
catch (e) {
    console.error(e.message);
    process.exit(1);
}

const container: IContainer = new BashiSlackContainer(config);
const app: BashiApp = container.resolve();
app.connect();
