import * as Slack from "../../interfaces/node-slack-sdk";

export interface IRtmConnectionManager {
    // TODO: Create Interface types for these.
    bot: Slack.IBotUser;
    users: [Slack.IUser];
    groups: [Slack.IGroup];
    channels: [Slack.IChannel];
    instantMessages: [Slack.IInstantMessage];

    start(): void;
    stop(): void;
}
