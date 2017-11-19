module.exports = {
    options: {
        reporter: "spec"
    },
    project: {
        files: [
            {
                expand: true,
                cwd: "build/",
                src: ["test/**/*-test.js"]
            }
        ]
    }
};
