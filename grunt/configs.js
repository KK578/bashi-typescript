const eslint = require("./eslint");
const tslint = require("./tslint");
const ts = require("./ts");

module.exports = {
    eslint: { name: "grunt-eslint", config: eslint },
    tslint: { name: "grunt-tslint", config: tslint },
    ts: { name: "grunt-ts", config: ts }
};
