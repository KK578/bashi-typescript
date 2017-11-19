const eslint = require("./eslint");
const mochaTest = require("./mocha-test");
const tslint = require("./tslint");
const ts = require("./ts");

module.exports = {
    eslint: { name: "grunt-eslint", config: eslint },
    mochaTest: { name: "grunt-mocha-test", config: mochaTest },
    tslint: { name: "grunt-tslint", config: tslint },
    ts: { name: "grunt-ts", config: ts }
};
