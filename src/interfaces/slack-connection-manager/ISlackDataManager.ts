import * as Slack from "../node-slack-sdk";

export interface ISlackDataManager {
    bot: Slack.IBotUser;
    users: [Slack.IUser];
    groups: [Slack.IGroup];
    channels: [Slack.IChannel];
    instantMessages: [Slack.IInstantMessage];

    setData(data): void;
}
