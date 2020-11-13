const withSass = require('@zeit/next-sass');
const withImages  = require('next-images');
const withCss = require('@zeit/next-css');

module.exports = withCss(withSass(withImages({
    webpack(config, options) {
        config.module.rules.push(
            {
                enforce: 'pre',
                test: /.scss$/,
                loader: 'sass-resources-loader',
                options: {
                    resources: ['./src/assets/scss/_mixins.scss', './src/assets/scss/_vars.scss'],
                },
            },
        );

        return config;
    },
})));
