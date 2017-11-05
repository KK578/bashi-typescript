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
            rtm.on('authenticated', ((bot) => {
                this.bot = bot;
            }).bind(this));

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
