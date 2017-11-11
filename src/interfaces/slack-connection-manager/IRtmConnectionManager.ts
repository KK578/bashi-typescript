export interface IRtmConnectionManager {
    // TODO: Create Interface types for these.
    bot: {
        name: string
    };
    users: {};
    groups: {};
    channels: {};
    instantMessages: {};

    start(): void;
    stop(): void;
}
