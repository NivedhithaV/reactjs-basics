var path = require("path");

/* __dirname
 * The directory name of the current module.
 * This the same as the path.dirname() of the __filename (file name of the current module)
 **/
var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
	entry: SRC_DIR + "/app/index.js",
	output: {
		path: DIST_DIR + "/app",
		filename: "bundle.js",
		publicPath: "/app/"
	},
	module: {
		loaders: [{
			test: /\.js?/,
			include: SRC_DIR,
			loader: "babel-loader",
			query: {
				presets: ["react", "es2015", "stage-2"]
			}
		}]
	}
};

/* module.exports
 * Object that's actually returned as the result of a require call.
 * Allows a module to select what should be shared with the application
 **/

module.exports = config;