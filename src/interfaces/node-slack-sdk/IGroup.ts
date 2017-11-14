import { IUser } from "./IUser";
import { IChannelTopic } from "./IChannelTopic";

export interface IGroup {
    id: string;
    name: string;
    is_group: boolean;
    created: number;
    creator: string;
    is_archived: boolean;
    name_normalized: string;
    is_mpim: boolean;
    has_pins: boolean;
    is_open: boolean;
    last_read: string;
    members: [IUser];
    topic: IChannelTopic;
    purpose: IChannelTopic;
}
