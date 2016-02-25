module.exports = function(grunt){

	grunt.initConfig({

		watch: {
			files: 'app/styles/sass/*.scss',
			//tasks: ['copy:main','concat','sass'],
			tasks: ['sass'],
			options: {
				livereload: true
			}
		},

		sass: {
			dist: {
				files: {
					'app/styles/css/main.css' : 'app/styles/sass/main.scss'
				}
			}	
		}

	});
	
	require('load-grunt-tasks')(grunt);

	//require('grunt-contrib-sass'); 'concat', 'useminPrepare', 'sass', 'connect', 'watch'
	grunt.registerTask('default', ['sass', 'watch']);
	//grunt.registerTask('default', ['sass']);

}
