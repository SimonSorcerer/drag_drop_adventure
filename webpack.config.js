module.exports = {
    entry: './js/entry.jsx',
    output: {
        filename: './target/ddaBundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                include: /styles/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            {
                test: /\.jsx?$/,
                include: /js/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'babel-preset-stage-2']
                }
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    resolve: {
        alias: {
            'components': './components'
        }
    },
    externals: {
        //'react': 'React'
    },
};
