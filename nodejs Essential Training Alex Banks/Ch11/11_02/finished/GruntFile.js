module.exports = function(grunt) {
// Converting LESS to CSS with Grunt
// Now if I look at this style sheet, I notice that we are using Flexbox.
 // I can see a display: flex, flex-direction, justify-content, so on and so forth.
 //  The issue with this is if we're going to make sure that Flexbox works in all browsers,
 // we're going to need to add vendor prefixes.

// This can be a daunting task to do by hand so Grunt has a way that we can actually autoprefix our CSS files so that it will work in as many browsers as possible. Let's go ahead and add the autoprefixer. I'm going to navigate to our terminal, and from our terminal, I want to npm install grunt-autoprefixer, and we will save this package to our package.json under dev dependencies.
// So this is the plugin that will automatically add vendor prefixes to your CSS file.


	grunt.initConfig({
		jshint: {
			files: ["*.js", "lib/*.js", "test/*.js"],
			options: {
				esnext: true,
				globals: {
					jQuery: true
				}
			}
		},
		less: {
			production: {
				files: {
					"public/css/style.css": ["less/*.less"]
				}
			}
		},
		autoprefixer: {
			single_file: {
				src: "public/css/style.css",
				dest: "public/css/style.css"
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-autoprefixer");

	grunt.registerTask("css", ["less", "autoprefixer"]);
	grunt.registerTask("default", ["jshint", "css"]);
};
