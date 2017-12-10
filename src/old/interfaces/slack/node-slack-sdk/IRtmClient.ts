/**
 * A minimalistic interface wrapper for @Slack/client.RtmClient.
 * Only functions that are used in Bashi are added to this interface,
 *  to improve testability.
 */
export interface IRtmClient {
    on(event: string, handler?: (...args: any[]) => void): void;
    start(opts?: any): void;
}
