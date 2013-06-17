module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          port: 9001,
          base: '.'
        }
      }
    },
  coffee: {
    compile: {
        expand: true,
        flatten: false,
        cwd: 'js/src',
        src: ['**/*.coffee'],
        dest: 'js/src',
        ext: '.js'
      //}
    }
  },
  less: {
    compile: {
      files: { //1:1 compile
        'css/main.css': 'css/main.less' 
      }
    }
  },
  watch: {
    coffee: {
      files: ['js/src/**/*.coffee'],
      tasks:["coffee"]
    },
    less: {
      files: ['css/main.less'],
      tasks:["less"]
    }
  }     
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-coffee");

  //Dev
  grunt.registerTask('default', ['connect','coffee:compile','less:compile','watch']);
  };