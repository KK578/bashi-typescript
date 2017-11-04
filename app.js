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

require('./src/slack-connection-manager/index.js');
