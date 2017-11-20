import { ISlackDataManager } from "../../../interfaces/";

export class MockSlackDataManager implements ISlackDataManager {
    public bot: any;
    public users: any[];
    public groups: any[];
    public channels: any[];
    public instantMessages: any[];

    public setData(data: any): void {
        this.bot = data.bot;
        this.users = data.users;
        this.groups = data.groups;
        this.channels = data.channels;
        this.instantMessages = data.instantMessages;
    }

    public isPrivateChannel(channel: string): boolean {
        return true;
    }
}
