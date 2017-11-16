const timeGrunt = require("time-grunt");

function quietGruntNewer(grunt) {
    const originalHeader = grunt.log.header;
    const originalWriteLn = grunt.log.writeln;

    // Cannot use arrow functions here as the this object is incorrect otherwise.
    grunt.log.header = function (message) {
        // Only if the header does not start with newer or newer-postrun.
        if (!/newer(-postrun)?:/.test(message)) {
            originalHeader.apply(this, arguments);
        }

        return this;
    };

    // Cannot use arrow functions here as the this object is incorrect otherwise.
    grunt.log.writeln = function (message) {
        // Only write the message if it is not the text from a grunt-newer task.
        if (message !== "No newer files to process.") {
            originalWriteLn.apply(this, arguments);
        }

        // Need to return the object as in grunt-legacy-log#writeln.
        return this;
    };
}

function loadAdditionalModules(grunt) {
    quietGruntNewer(grunt);
    timeGrunt(grunt);
}

function loadNpmTasks(grunt, tasks) {
    tasks.forEach(grunt.loadNpmTasks);
}

function loadCustomTasks(grunt, tasks) {
    Object.keys(tasks).forEach((key) => {
        const task = tasks[key];
        grunt.registerTask(key, task.description, task.tasks);
    });
}

module.exports = {
    loadCustomTasks,
    loadNpmTasks,
    loadAdditionalModules
};