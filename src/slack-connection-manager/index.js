const botToken = process.env.SLACK_BOT_TOKEN;

////////////////////////////////////////////////////////////
// API Managers
const RealTimeMessageManager = require('./RealTimeMessageManager.js');
const WebApiManager = require('./WebApiManager.js');
let rtm;
let web;

class SlackConnectionManager {
    constructor() {
        if (!SlackConnectionManager._instance) {
            // RTM API
            rtm = new RealTimeMessageManager(botToken);
            // Web API
            web = new WebApiManager(botToken);

            // Singleton management.
            SlackConnectionManager._instance = this;
        }

        return SlackConnectionManager._instance;
    }

    start() {
        rtm.start();
    }

    ////////////////////////////////////////////////////////
    // Slack Stuff
    getUserFromId(id) {
        return rtm.users.filter((user) => user.id === id)[0];
    }

    isPrivateMessage(channel) {
        return rtm.instantMessages.filter((im) => im.id === channel).length === 1;
    }

    ////////////////////////////////////////////////////////
    // RealTimeMessageManager
    subscribeToRtm(eventName, callback) {
        rtm.on(eventName, callback);
    }

    ////////////////////////////////////////////////////////
    // WebApiManager
    sendMessage(message) {
        web.sendMessage(message);
    }
}

const instance = new SlackConnectionManager();
module.exports = instance;
