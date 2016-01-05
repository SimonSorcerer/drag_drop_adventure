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
                loader: 'style!css' 
            },
            {
                test: /\.jsx?$/,
                include: /js/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
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