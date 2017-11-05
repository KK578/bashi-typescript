const request = require('request');
const cheerio = require('cheerio');

const url = process.env.TRAIN_URL;

function trimWhitespace(text) {
    return text.replace(/^\s*(.*?)\s*$/m, '$1');
}

function getTrainData(callback) {
    request(url, (err, res, html) => {
        if (err) {
            return callback(err);
        }

        if (res.statusCode !== 200) {
            return callback(new Error('Bad response', res));
        }

        const results = [];
        const $ = cheerio.load(html, {
            normalizeWhitespace: true
        });

        // Train times are <li> inside of a <div#timetableWrapper>
        $('.row.origin').each((i, element) => {
            const $$ = $(element);

            const time = $$.find('time').text();
            const platform = $$.find('.times-platform').text();

            const o = {
                time: trimWhitespace(time),
                platform: platform.match(/\d+/)[0]
            };

            results.push(o);
        });

        callback(null, results);
    });
}

module.exports = getTrainData;
