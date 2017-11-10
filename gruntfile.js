const utilities = require('./grunt/utilities');
const configs = require('./grunt/configs');

const npmTasks = ['grunt-eslint'];
const customTasks = require('./grunt/aliases');

module.exports = function (grunt) {
    grunt.initConfig({
        eslint: configs.eslint
    });

    utilities.loadNpmTasks(grunt, npmTasks);
    utilities.loadCustomTasks(grunt, customTasks);
    utilities.loadAdditionalModules(grunt);
};
