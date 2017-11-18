const utilities = require("./grunt/utilities");
const configs = require("./grunt/configs");

const customTasks = require("./grunt/aliases");

module.exports = function (grunt) {
    const gruntConfigs = Object.keys(configs).reduce((combinedConfigs, key) => {
        const newConfig = { [key]: configs[key].config };

        return Object.assign(combinedConfigs, newConfig);
    }, {});
    const npmTasks = Object.keys(configs).map((key) => configs[key].name);

    grunt.initConfig(gruntConfigs);
    utilities.loadNpmTasks(grunt, npmTasks);
    utilities.loadCustomTasks(grunt, customTasks);
    utilities.loadAdditionalModules(grunt);
};
