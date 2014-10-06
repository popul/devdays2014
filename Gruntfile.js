var config= {
    port: 3002
};

module.exports = function(grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: config.port,
                    base: '.',
                    hostname: '0.0.0.0',
                    livereload: true,
                    middleware: function(connect, options) {
                        return [
                            function(req, res, next) {
                                res.setHeader('Access-Control-Allow-Origin', '*');
                                res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
                                res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

                                // don't just call next() return it
                                return next();
                            },

                            // add other middlewares here
                            connect.static(require('path').resolve('.'))

                        ];
                    }
                }
            }
        },

        concurrent: {
            dev: {
                tasks: ['watch', 'connect:server:keepalive'],
                options: {
                    logConcurrentOutput: true
                }
            }
        },

        watch: {
            connect: {
                files: [
                    '*.html'
                ],
                tasks: ['concurrent:dev']
            },
            livereload: {
                files: [
                    '*.html'
                ],
                options: {
                    livereload: true
                }
            }
        }
    });

    // default option to connect server
    grunt.registerTask('default', ['concurrent:dev']);
};
