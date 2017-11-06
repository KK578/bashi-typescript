// Load environment variables.
const environmentLoaded = require('dotenv').config();

if (environmentLoaded.error) {
    const error = environmentLoaded.error;

    switch (error.code) {
        case 'ENOENT':
            console.error('No .env file was found.');
            break;

        default:
            console.error(error.message);
            break;
    }

    process.exit(error.errno);
}

///////////////////////////////////////////////////////////
// Slack connectivity
const slackConnectionManager = require('./src/slack-connection-manager/index.js');
slackConnectionManager.start();

// Respond to train requests.
require('./src/train-time-notifier');

slackConnectionManager.subscribeToRtm('message', (data) => {
    const channel = data.channel;

    if (slackConnectionManager.isPrivateMessage(channel)) {
        slackConnectionManager.sendMessage({
            channel,
            text: `You want to talk to Bashi?!\nBashi heard you say _'${data.text}'_.`
        });
    }
});
