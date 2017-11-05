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

const slackConnectionManager = require('./src/slack-connection-manager/index.js');
slackConnectionManager.start();

const getTrainData = require('./src/train-time-notifier/train-data-crawler.js');
getTrainData((err, results) => {
    if (err) {
        return console.log(err);
    }

    const times = results.slice(0, 5).map((o) => {
        return `${o.time}\t${o.platform}`;
    });

    console.log(`Train\tPlatform\n${times.join('\n')}`);
});
