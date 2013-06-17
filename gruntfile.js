/*jshint node:true */
module.exports = function( grunt ) {
    grunt.loadNpmTasks( "grunt-git-authors" );
    grunt.loadNpmTasks( "grunt-contrib-jshint" );
    grunt.loadNpmTasks( "grunt-contrib-csslint" );
    grunt.loadNpmTasks( "grunt-contrib-qunit" );
    grunt.loadNpmTasks( "grunt-contrib-watch" );
    grunt.loadNpmTasks( "grunt-contrib-uglify" );
    grunt.loadNpmTasks( "grunt-contrib-compress" );
    grunt.loadNpmTasks( "grunt-contrib-copy" );
    grunt.loadNpmTasks( "grunt-contrib-clean" );
    grunt.loadNpmTasks( "grunt-contrib-less" );
    grunt.loadNpmTasks( "grunt-shell" );

    grunt.initConfig( {
	jshint: {
	    all: [ 'gruntfile.js', 'js/*.js', 'package.json' ],
	    options: {
		jquery: true,
			smarttabs: true,
			multistr: true
	    }
	},
	csslint: {
	    files: [ 'css/*.css' ]
	},
	qunit: {
	    files: ['test/**/*.html']
	},
	copy: {
	    main: {
		files: [
		    { expand: true, cwd: './js', src: [ '*' ], dest: './dist/js' },
		    { expand: true, cwd: './css', src: [ '*' ], dest: './dist/css' },
		    { expand: true, cwd: './ext', src: [ '*' ], dest: './dist/ext' },
		    { expand: true, cwd: './img', src: [ '*' ], dest: './dist/img' },
		    { cwd: '.', src: [ 'manifest.json', 'window.html' ], dest: './dist/' }
		]
	    }
	},
	compress: {
	    zip: {
		options: {
		    archive: './leag.zip'
		},
		files: [
		    { expand: true, cwd: './dist', src: [ './**' ] }
		]
	    }
	},
	clean: [ './dist/*', 'leag.zip' ]
    } );

    grunt.registerTask( 'test', [ 'jshint', 'qunit' ] );
    grunt.registerTask( 'dist', [ 'clean', 'copy', 'compress' ] );
};
