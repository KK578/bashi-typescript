const eslint = require('./eslint');
const ts = require('./ts');

module.exports = {
    eslint: { name: 'grunt-eslint', config: eslint },
    ts: { name: 'grunt-ts', config: ts }
};
