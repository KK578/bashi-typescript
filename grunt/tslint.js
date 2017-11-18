module.exports = {
    options: {
        configuration: "./.tslint.json"
    },
    project: {
        files: [
            {
                expand: true,
                src: ["src/**/*.ts"]
            }
        ]
    }
};
