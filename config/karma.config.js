module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        { pattern: '../src/components/jquery/dist/jquery.js',watched: false, included: true, served: true},
        { pattern: '../src/components/angular/angular.js',watched: false, included: true, served: true},
        { pattern: '../src/components/angular-mocks/angular-mocks.js',watched: false, included: true, served: true},
        { pattern: '../src/components/lodash/lodash.js',watched: false, included: true, served: true},
        { pattern: '../src/components/nools/nools.js',watched: false, included: true, served: true},
        
        { pattern: '../src/app.js', watched: false, included: true, served: true},
        { pattern: '../src/controllers/**/*.js', watched: false, included: true, served: true},
        { pattern: '../src/services/**/*.js', watched: false, included: true, served: true},
        { pattern: '../src/models/**/*.js', watched: false, included: true, served: true},
        
        { pattern: '../src/resources/rules/*.txt',  watched: false, included: false, served: true},
        { pattern: '../test/**/*Spec.js', watched: false, included: true, served: true}
    ],

    proxies : {
        'resources/rules/tictactoe.txt': '/base/src/resources/rules/tictactoe.txt'
    },


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    plugins: ['karma-jasmine', 'karma-phantomjs-launcher'],


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  })
}