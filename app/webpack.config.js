const path = require("path");

module.exports = {
	mode: "development",
	entry: `./src/index.js`,
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "app.js",
	},
	// externals: {
	// 	"./libs/hello": "hello",
	// },
};
