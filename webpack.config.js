module.exports = {
    entry: "./js/entry.js",
    output: {
        filename: "./target/ddaBundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};