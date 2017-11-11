export interface ISlackConnectionManager {
    start(): void;
    subscribeToRtm(eventName: string, callback: (error: Error, data: {}) => void): void;
}
