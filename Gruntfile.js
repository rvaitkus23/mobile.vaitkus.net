/*global module:false*/
module.exports = function(grunt) {
  var app_js = [
    'www/js/GAPluginInit.js',
    'www/js/plugins/Flashlight.js',
    'www/js/openfb.js',
    
    'www/js/app.js',
    'www/js/controllers/AppCtrl.js',
    'www/js/controllers/startPageCtrl.js',
    'www/js/controllers/aboutCtrl.js',
    'www/js/controllers/barcodeScannerCtrl.js',
    'www/js/controllers/cameraCtrl.js',
    'www/js/controllers/featuresCtrl.js',
    'www/js/controllers/flashlightCtrl.js',
    'www/js/controllers/localNotificationCtrl.js',
    'www/js/controllers/mapCtrl.js',
    'www/js/controllers/OAuthCtrl.js',
    'www/js/controllers/pushNotificationCtrl.js',
    'www/js/directives.js'
  ],

  app_css = [
    'www/css/style.css'
  ];

  // Project configuration.
  grunt.initConfig({
  watch: {
    sass: {
      files: 'www/sass/**/*.scss',
      tasks: ['sass'],
    }
  },

  sass: {
    dist: {
      files: [{
        expand: true,
        cwd: 'www/sass',
        src: ['*.scss'],
        dest: 'www/css',
        ext: '.css'
      }]
    }
  },

  uglify: {
    options: {
      mangle: false
    },
    release_js: {
      files: {
        './www/build/app.min.js': app_js
      }
    }
  },

  cssmin: {
    combine: {
      files: {
        './www/build/app.min.css': app_css
      }
    }
  },

  injector: {
    options: {
      addRootSlash: false
    },
    prod_js: {
      options: {
        ignorePath:'www/'
      },
      files: {
        './www/index.html': 'www/build/app.min.js'
      }
    },
    prod_css: {
      options: {
        ignorePath:'www/'
      },
      files: {
        './www/index.html': 'www/build/app.min.css'
      }
    },
    dev_js: {
      options: {
        ignorePath:'www/'
      },
      files: {
        './www/index.html': app_js
      }
    },
    dev_css: {
      options: {
        ignorePath:'www/'
      },
      files: {
        './www/index.html': app_css
      }
    }
  }
});

  grunt.registerTask('sass-watch', 'watch:sass');

  grunt.registerTask('build:release', ['sass', 'uglify', 'cssmin', 'injector:prod_js', 'injector:prod_css']);
  grunt.registerTask('build:dev',     ['sass', 'injector:dev_js', 'injector:dev_css']);

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-injector');
};
