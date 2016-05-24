/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      slides: {
        options: {
          engine: 'im',
          sizes: [{
            width: 2560,
            quality: 30,
          },{
            width: 1280,
            quality: 30,
          },{
            width: 640,
            quality: 30,
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'img/slides',
          dest: 'img/optimized'
        }]
      },
      boxes: {
        options: {
          engine: 'im',
          sizes: [{
            width: 1200,
            quality: 30,
          },{
            width: 600,
            quality: 30,
          },{
            width: 300,
            quality: 30,
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'img/boxes',
          dest: 'img/optimized'
        }]
      },
      profile: {
        options: {
          engine: 'im',
          sizes: [{
            width: 200,
            quality: 80,
          },{
            width: 100,
            quality: 80,
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'img/',
          dest: 'img/optimized'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['img/optimized'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['img/optimized']
        },
      },
    },

    /* Copy the "fixed" images that don't go through processing into the images/directory */
    copy: {
      dev: {
        files: [{
          expand: true,
          src: 'img/fixed/*.{gif,jpg,png}',
          dest: 'img/'
        }]
      },
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images']);

};
