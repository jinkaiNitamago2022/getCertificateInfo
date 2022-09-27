const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    resolve: {
        alias: {
            https: require.resolve('https-browserify'),
            http: require.resolve("stream-http"),
            url: require.resolve("url/"),
            buffer: require.resolve("buffer/")
        }
    }
};
