module.exports = {
    options: {
        format: "node_modules/eslint-formatter-pretty"
    },
    project: {
        files: [
            {
                expand: true,
                src: [
                    "gruntfile.js",
                    "grunt/*.js",
                    "src/**/*.js"
                ]
            }
        ]
    },
    typescript: {
        options: {
            parser: "typescript-eslint-parser",
            parserOptions: {
                sourceType: "module"
            }
        },
        files: [
            {
                expand: true,
                src: [
                    "src/**/*.ts",
                    "!src/interfaces/**/*.ts"
                ]
            }
        ]
    }
};
