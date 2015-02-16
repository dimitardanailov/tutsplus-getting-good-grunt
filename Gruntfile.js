module.exports = function (grunt) {
  
  grunt.initConfig({
    uglify: {
      options: {
        mangle: true,
        compress: true,
        sourceMap: "dist/application.map",
        banner: "/* Dimitar Danailov 2015 */\n"
      },
      target: {
        src: "dest/application.js",
        dest: "dist/application.min.js"
      },
    }, // END uglify
    jshint: {
      options: {
        jshintrc: ".jshintrc"
      },
      target: {
        src: "src/*.js"
      }
    }, // END jshint
    concat: {
      options: {
        seperator: ";",
        banner: "/* Dimitar Danailov 2015 */\n"
      },
      target: {
        src: "src/*.js",
        dest: "dest/application.js"
      }
    }, // END concat
    watch: {
      scripts: {
        files: ["src/*.js"],
        tasks: ["jshint"]
      }
    }, // END watch
    coffee: {
      options: {
        bare: false,
        join: false,
        seperator: ";"
      },
      target: {
        expand: true,
        cwd: 'src/',
        src: '*.coffee',
        dest: 'lib/',
        ext: ".js"
      }
    }, // END coffee
    nodeunit: {
      target: 'test/*_test.js'
    }, // END clean
    clean: {
      target: ['dist', 'lib']
    }, // END multi
    multi: {
      target: {
        name: "Dimitar",
        age: 23
      },
      other: {
        arr: [1, 2, 3],
        bool: true
      },
      last: {
        obj: {
          one: 1,
          two: 2
        }
      }
    } // END multi
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask("default", ['jshint', 'concat', 'uglify']);
  grunt.registerTask("reboot", ['clean', 'default']);

  grunt.registerTask("tutorial", "this is an example task", function() {
    if (+new Date() % 2 === 0) {
      console.log("the time is even.");
    } else {
      console.log("the time is odd.");
    }
  });

  grunt.registerTask("withArgs", function(one, two) {
    var str = this.name + ":";
    str += one || "one";
    str += two ? ", " + two : ", two" ;

    console.log(str);
  });

  grunt.registerMultiTask("multi", function() {
    console.log(this.target);
    console.log(this.data);
  });
};
