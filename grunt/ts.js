module.exports = {
    project: {
        files: [
            {
                expand: true,
                cwd: 'src/',
                src: ['**/*.ts'],
                dest: 'build/'
            }
        ]
    }
};
