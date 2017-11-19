module.exports = {
    lint: {
        description: "Lint files in the project.",
        tasks: [
            "eslint",
            "tslint"
        ]
    },
    test: {
        description: "Test project",
        tasks: [
            "mochaTest"
        ]
    }
};
