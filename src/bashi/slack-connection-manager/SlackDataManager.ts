import * as Slack from "../../interfaces/node-slack-sdk";
import { ISlackDataManager } from "../../interfaces/slack-connection-manager/ISlackDataManager";

export class SlackDataManager implements ISlackDataManager {
    public bot: Slack.IBotUser;
    public users: [Slack.IUser];
    public groups: [Slack.IGroup];
    public channels: [Slack.IChannel];
    public instantMessages: [Slack.IInstantMessage];

    setData(data) {
        this.bot = data.self;
        this.users = data.users;
        this.groups = data.groups;
        this.channels = data.channels;
        this.instantMessages = data.ims;
    }
}
