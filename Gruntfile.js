module.exports = function(grunt) {

		'use strict';
	var gruntConfig = {

		pkg: grunt.file.readJSON('package.json'),

		// ========= Concatenate JS =========
		concat: {
			css: {
				src: [
					'bower_components/angular-ui-notification/dist/angular-ui-notification.min.css',
					'bower_components/angular-ui-select/dist/select.min.css',
					'bower_components/select2/dist/css/select2.min.css',
					'css/**/*.css'
					],
				dest: 'prod/css/all.min.css'
			},
			js: {
				src: [
					'bower_components/jquery/dist/jquery.min.js',
					'bootstrap-sass-3.3.6/bootstrap-sass-3.3.6/assets/javascripts/bootstrap.min.js',
					'bower_components/angular/angular.js',
					'bower_components/angular-route/angular-route.min.js',
					'bower_components/angular-ui-notification/dist/angular-ui-notification.min.js',
					'bower_components/angular-ui-select/dist/select.min.js',
					'bower_components/angular-cookies/angular-cookies.min.js',
					'bower_components/smartcrop/smartcrop.js',
					'bower_components/select2/dist/js/select2.full.min.js',
					'js/**/*.js'
				],
				dest: 'prod/js/all.min.js'
			}
		},

		// ========= Copy IMAGES =========
		copy: {
			main: {
				files: [
					{
						expand:true,
						src: ['images/**'],
						dest: 'prod/image/'
					},
					{
						expand:true,
						src: ['template/**'],
						dest: 'prod/'
					},
					{
						expand:true,
						src: ['index.html'],
						dest: 'prod/'
					},
					{
						expand:true,
						src: ['bootstrap-sass-3.3.6/bootstrap-sass-3.3.6/assets/fonts/**/*'],
						dest: 'prod/'
					}
				]
			}
		},

		// ========= Files to WATCH =========
		watch: {
			dist: {
				files: ['js/**/*', 'css/**/*', 'images/**/*', 'template/**/*', 'index.html'],
				tasks: ['default'],
				options: {
					spawn: false
				}
			}
		}
	};

	grunt.initConfig(gruntConfig);

	// load plugins
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');

	// Tasks
	grunt.registerTask('default', [
									'concat:js',
									'concat:css',
									'copy',
								]);

};
