// Karma configuration
// Generated on Wed Feb 24 2016 13:17:30 GMT+0000 (GMT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'bower_components/angular/angular.js',  
      'bower_components/angular-mocks/angular-mocks.js', 
      'app/js/*.js',
      'test/*.spec.js'
    ],


    /*

files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-credit-cards/release/angular-credit-cards.js',
      'bower_components/angular-cookies/angular-cookies.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-modal-service/dst/angular-modal-service.min.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/moment/min/moment.min.js',
      'bower_components/ng-file-upload/ng-file-upload.js',
      'bower_components/ng-tv4/ng-tv4.min.js',
      'bower_components/angular-file-saver/dist/angular-file-saver.bundle.min.js',
      'bower_components/ng-lodash/build/ng-lodash.min.js',
      'bower_components/moment/moment.js',
      'app/modules/app.js',
    ],

    */


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
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
