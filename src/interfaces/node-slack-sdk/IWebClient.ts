import { ChatPostMessageParams, ChatPostMessageResult } from "@slack/client";

/**
 * A minimalistic interface wrapper for @Slack/client.WebClient.
 * Only functions that are used in Bashi are added to this interface,
 *  to improve testability.
 */
export interface IWebClient {
    chat: {
        postMessage(channel: string,
                    text: string,
                    opts?: ChatPostMessageParams)
                    : Promise<ChatPostMessageResult>;
    };
}
