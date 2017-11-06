const slackConnectionManager = require('../slack-connection-manager');

slackConnectionManager.subscribeToRtm('message', (data) => {
    const channel = data.channel;

    if (slackConnectionManager.isPrivateMessage(channel)) {
        slackConnectionManager.sendMessage({
            channel,
            text: `You want to talk to Bashi?!\nBashi heard you say _'${data.text}'_.`
        });
    }
});
