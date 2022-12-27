// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    // files: [
    //   {
    //     pattern: 'src/**/!(*.spec|*.module|environment*|main|polyfills|test).ts',
    //     type: 'js',
    //   }
    // ],
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-mocha-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      jasmine: {
        // you can add configuration options for Jasmine here
        // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
        // for example, you can disable the random execution with `random: false`
        // or set a specific seed with `seed: 4321`
        verboseDeprecations: true,
      },
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
    },
    mochaReporter: {
      ignoreSkipped: true,
      colors: {
        success: 'green',
        info: 'grey',
        warning: 'yellow',
        error: 'red'
      },
      symbols: {
        success: '+',
        info: '#',
        warning: '!',
        error: 'x'
      },
    },

    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage/angular-cv'),
      include: 'src/**/!(*.spec|*.module|environment*|main|polyfills|test).(ts|js)',
      reports: ['text-summary'],
    },

    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      // 'src/**/!(*.spec|*.module|environment*|main|polyfills|test).(ts|js)': ['coverage'],
      // 'src/app/**/*.js': ['coverage'],
    },

    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/angular-cv'),
      include: 'src/**/!(*.spec|*.module|environment*).(ts|js)',
      exclude: 'src/(main|polyfills|test).ts',
      // dir: 'coverage/',
      // file: 'coverage.text',
      // type: 'text-summary',
      // reporters: ['text-summary'],
      includeAllSources: true,
      // sourceStore : require('karma-coverage-istanbul-reporter').Store.create('fslookup')
    },

    reporters: ['mocha',  'coverage-istanbul'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: false,
    restartOnFileChange: true
  });
};
