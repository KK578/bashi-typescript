import { IRtmListener, ISlackConnectionManager } from "../../interfaces";

export class InstantMessageListener implements IRtmListener {
    private slackConnectionManager: ISlackConnectionManager;

    constructor(slackConnectionManager: ISlackConnectionManager) {
        this.slackConnectionManager = slackConnectionManager;
    }

    public onMessage(data) {
        const channel = data.channel;

        if (this.slackConnectionManager.getSlackDataManager().isPrivateChannel(channel)) {
            this.slackConnectionManager.sendMessage({
                channel,
                text: "You want to talk to Bashi?!\n" +
                      `Bashi heard you say... '${data.text}'`
            });
        }
    }
}
