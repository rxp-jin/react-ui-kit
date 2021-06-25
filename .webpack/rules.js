const { configureBabel } = require('../_babel.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

/**
 * @param themePaths {ThemePaths}
 * @param selectMode {SelectMode}
 * @param selectTarget {SelectTarget}
 * @returns {*[]}
 */
function rules(themePaths, selectMode, selectTarget) {
    const babelOptions = configureBabel(selectMode, selectTarget);
    const babelEnvDeps = require('webpack-babel-env-deps');
    return [
        {
            test: /\.graphql$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'graphql-tag/loader',
                },
            ],
        },
        {
            include: [
                path.resolve(__dirname, '..', 'server'),
                path.resolve(__dirname, '..', 'runtime'),
                themePaths.src,
                themePaths.generated,
                path.resolve(__dirname, '..', 'node_modules', 'debug'),
                babelEnvDeps.include(),
            ],
            // exclude: [/node_modules/],
            test: /\.(ts|tsx|mjs|js|svg|graphql)$/,
            use: [
                {
                    loader: 'babel-loader',
                    options: babelOptions,
                },
            ],
        },
        {
            test: [/\.scss$/],
            use: [
                selectMode({ development: 'style-loader' }),
                selectMode({ production: MiniCssExtractPlugin.loader }),
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                        localIdentName: '[name]-[local]-[hash:base64:3]',
                        modules: true,
                    },
                },
                {
                    loader: 'sass-loader',
                    options: {
                        data: `
                        @import "_vars";
                        @import "_mixins";
                        @import "_normalize";
                        @import "_fonts";
                        @import "_reset";
                        @import "_general";
                        `,
                        includePaths: ['src/scss'],
                    },
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        ident: 'postcss',
                        plugins: [require('autoprefixer')()],
                    },
                },
                'resolve-url-loader',
            ].filter(Boolean),
        },
        {
            test: /\.(jpe?g|png|svg|gif|ttf|eot|woff2?)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {},
                },
            ],
        },
    ];
}

module.exports.rules = rules;