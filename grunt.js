module.exports = function(grunt) {

	grunt.initConfig({
		'meta': {
			'srcfiles': [
				'index.src.html'
			]
		},
		'shell': {
			'anolis': {
				'command': 'anolis --output-encoding=utf-8 --omit-optional-tags --quote-attr-values --enable=xspecxref --enable=refs --w3c-shortname="javascript" index.src.html index.html',
				'stdout': grunt.warn,
				'stderr': grunt.warn
			}
		},
		'watch': {
			'files': '<config:meta.srcfiles>',
			'tasks': 'default'
		}
	});

	grunt.loadNpmTasks('grunt-shell');

	grunt.registerTask('default', 'shell watch');

};