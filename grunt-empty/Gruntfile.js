'use strict';

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);
  var config = {
    app:'app',
    dist:'dist'
  };
  grunt.initConfig({
    config:config,

    // copy:{
    //   dist_html:{
    //     src:'<%= config.app %>/index.max.html',
    //     dest:'<%= config.dist %>/index.max.html'
    //   },
    //
    //   dist_js:{
    //     src:'<%= config.app %>/js/index.js',
    //     dest:'<%= config.dist %>/js/index.js'
    //   }
    // },

    // copy:{
    //   dist:{
    //     src:'<%= config.app %>/index.max.html',
    //     dest:'<%= config.dist %>/index.max.html'
    //   },
    // },

    // copy:{
    //   dist_html:{
    //     files:[
    //       {
    //         src:'<%= config.app %>/index.max.html',
    //         dest:'<%= config.dist %>/index.max.html'
    //       },
    //       {
    //         src:'<%= config.app %>/js/index.js',
    //         dest:'<%= config.dist %>/js/index.js'
    //       }
    //     ]
    //   },
    //
    //   dist_js:{
    //     src:'<%= config.app %>/js/index.js',
    //     dest:'<%= config.dist %>/js/index.js'
    //   }
    // },

    // copy:{
    //   dist_html:{
    //     files:{
    //       '<%= config.dist %>/index.max.html':'<%= config.app %>/index.max.html',
    //       '<%= config.dist %>/js/index.is':['<%= config.app %>/js/index.js']
    //     }
    //   },
    // },

    copy:{
      dist_html:{
        files:[
          {
            expand:true,
            cwd:'<%= config.app %>/',
            src:'*.html',
            dest:'<%= config.dist %>/',
            ext:'.min.html',
            // extDot:'first'
            extDot:'last',
            flatten:false
          },

          {
            expand:true,
            cwd:'<%= config.app %>/',
            src:'**/*.js',
            dest:'<%= config.dist %>/',
            ext:'.js',
            extDot:'last',
            // flatten:false
            flatten:true,
            rename:function (dest,src) {
              return dest + 'js/' + src;
            }
          }
        ]
      },
    },

    // clean:{
    //   dist:{
    //     src:'<%= config.dist %>/index.max.html'
    //   }
    // }

    // clean:{
    //   dist:{
    //     src:[
    //       '<%= config.dist %>/index.max.html',
    //       '<%= config.dist %>/js/index.js'
    //     ]
    //   }
    // }

    // clean:{
    //   dist:{
    //     src:[
    //       '<%= config.dist %>/**/*'
    //     ]
    //   }
    // }

    clean:{
      dist:{
        src:[
          '<%= config.dist %>/**/*'
        ],
        // filter:'isFile'
        // filter:function (filepath) {
        //   return (!grunt.file.isDir(filepath));
        // }
      },
    }

  })
};
