const getTrainData = require('./train-data-crawler.js');
const slackConnectionManager = require('../slack-connection-manager');

slackConnectionManager.subscribeToRtm('message', (data) => {
    if (data.text.toLowerCase() === 'train') {
        slackConnectionManager.sendMessage({
            channel: data.channel,
            text: 'Did someone mention _Trains_?'
        });

        getTrainData((err, results) => {
            if (err) {
                return console.log(err);
            }

            const times = results.slice(0, 5)
                                 .map((o) => `${o.time}\t${o.platform}`)
                                 .join('\n');
            const text = `*Train*\t*Platform*\n${times}`;

            slackConnectionManager.sendMessage({
                channel: data.channel,
                text
            });
        });
    }
});
