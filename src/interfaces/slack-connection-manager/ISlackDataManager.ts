import { BotUserResult, FullChannelResult, FullUserResult } from "@slack/client";

export interface ISlackDataManager {
    bot: BotUserResult;
    users: FullUserResult[];
    groups: FullChannelResult[];
    channels: FullChannelResult[];
    instantMessages: FullChannelResult[];

    setData(data): void;

    isPrivateChannel(channel: string): boolean;
}
