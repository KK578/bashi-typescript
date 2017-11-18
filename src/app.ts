import { IRtmListener, ISlackConnectionManager } from "./interfaces";

export class App {
    private slackConnectionManager: ISlackConnectionManager;
    private rtmListeners: IRtmListener[];

    public constructor(slackConnectionManager: ISlackConnectionManager,
                       rtmListeners: IRtmListener[]) {
        this.slackConnectionManager = slackConnectionManager;
        this.rtmListeners = rtmListeners;
    }

    public start() {
        this.startSlackManager();
        this.subscribeSlackListeners();
    }

    private startSlackManager(): void {
        this.slackConnectionManager.start();
    }

    private subscribeSlackListeners(): void {
        this.rtmListeners.forEach((listener) => {
            this.slackConnectionManager.subscribeToRtm("message",
                                                       listener.onMessage.bind(listener));
        });
    }
}
