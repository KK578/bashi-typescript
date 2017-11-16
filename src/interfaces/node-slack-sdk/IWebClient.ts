export interface IWebClient {
    chat: {
        postMessage(channel, text, message, callback);
    }
}