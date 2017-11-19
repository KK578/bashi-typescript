module.exports = {
    options: {
        reporter: "spec",
        require: [
            "ts-node/register",
            "source-map-support/register"
        ]
    },
    project: {
        files: [
            {
                expand: true,
                cwd: "src/",
                src: ["test/**/*-test.ts"]
            }
        ]
    }
};
