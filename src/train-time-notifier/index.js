const getTrainData = require('./train-data-crawler.js');
const slackConnectionManager = require('../slack-connection-manager/index.js');

slackConnectionManager.subscribeToRtm('message', (data) => {
    if (data.text === 'train') {
        slackConnectionManager.sendMessage({
            channel: data.channel,
            text: 'Did someone mention _Trains_?'
        });

        getTrainData((err, results) => {
            if (err) {
                return console.log(err);
            }

            const times = results.slice(0, 5).map((o) => {
                return `${o.time}\t${o.platform}`;
            });
            const text = `*Train*\t*Platform*\n${times.join('\n')}`;

            slackConnectionManager.sendMessage({
                channel: data.channel,
                text
            });
        });
    }
});
