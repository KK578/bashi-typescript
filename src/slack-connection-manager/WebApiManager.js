const SlackClient = require("@slack/client");
let web;

class WebApiManager {
    constructor(botToken) {
        web = new SlackClient.WebClient(botToken);
    }

    ///////////////////////////////////////////////////////////
    // WebApiManager
    sendMessage(message) {
        web.chat.postMessage(message.channel, message.text, message);
    }
}

module.exports = WebApiManager;
