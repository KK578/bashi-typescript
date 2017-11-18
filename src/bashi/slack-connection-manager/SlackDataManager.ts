import { BotUserResult, FullChannelResult, FullUserResult, GroupsInfoResult, RtmStartResult } from "@slack/client";
import { ISlackDataManager } from "../../interfaces";

export class SlackDataManager implements ISlackDataManager {
    public bot: BotUserResult;
    public users: FullUserResult[];
    public groups: FullChannelResult[];
    public channels: FullChannelResult[];
    public instantMessages: FullChannelResult[];

    public setData(data: RtmStartResult) {
        this.bot = data.self;
        this.users = data.users;
        this.groups = data.groups;
        this.channels = data.channels;
        this.instantMessages = data.ims;
    }

    public isPrivateChannel(channel: string) {
        return this.instantMessages.filter((c) => c.id === channel).length > 0;
    }
}
