module.exports = function(grunt){

	grunt.initConfig({

		//pkg: grunt.file.readJSON('package.json'),

		uglify: {
			target: {
				files: {
					'dist/vendor.min.js' : 'dist/vendor.js',
					'dist/modules.min.js' : 'dist/modules.js'
				}
			}
		},

		clean: {
			build: {
				src: 'dist'
			}
		},

		copy: {
			modules: {
				expand: true,
				cwd: 'app/',
				src: '**/*',
				dest: 'dist/',
				filter: 'isFile'
			},
			bowerComps: {
				expand: true,
				cwd: '',
				src: ['bower_components/**/*'],
				dest: 'dist/',
				filter: 'isFile'				
			},
		},

		connect: {
			server: {
				options: {
					port:1337,
					hostname: '*',
					base: 'dist',
					livereload: true				
				}
			}
		},

		watch: {
			files: 'app/**/*',
			//tasks: ['copy:main','concat','sass'],
			tasks: ['sass'],
			options: {
				livereload: true
			}
		},

		concat: {
			basic_and_extras: {
				files: {
					'dist/vendor.js' : 'bower_components/angular/angular.js',
					'dist/modules.js' : ['app/*.js','app/modules/**/*.js']
				}
			}
		},

		sass: {
			dist: {
				files: {
					'dist/main.css' : 'dist/styles/main.scss'
				}
			}	
		}

	});
	
	require('load-grunt-tasks')(grunt);

	//require('grunt-contrib-sass'); 'concat', 'useminPrepare', 'sass', 'connect', 'watch'
	grunt.registerTask('default', ['clean', 'copy', 'concat', 'sass', 'connect', 'watch']);
	//grunt.registerTask('default', ['sass']);

}
