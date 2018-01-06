import { IConnection, IConnectionManager } from "./common/interface/";

export class BashiApp implements IConnection {
    private manager: IConnectionManager;

    constructor(manager: IConnectionManager) {
        this.manager = manager;
    }

    public connect(): Promise<boolean> {
        return this.manager.connect();
    }

    public disconnect(): Promise<boolean> {
        return this.manager.disconnect();
    }
}
