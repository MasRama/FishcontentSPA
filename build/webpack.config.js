const { join, resolve } = require('path');
const Encore = require('@symfony/webpack-encore');
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}
Encore.setOutputPath('./public/assets');
Encore.setPublicPath('/assets');
Encore.addEntry('app', './resources/js/app.js');
Encore.disableSingleRuntimeChunk();
Encore.cleanupOutputBeforeBuild();
Encore.enableSourceMaps(!Encore.isProduction());
Encore.enableVersioning(Encore.isProduction());
Encore.configureDevServerOptions((options) => {
    if (!options.static) {
        options.static = [];
    }
    else if (!Array.isArray(options.static)) {
        options.static = [options.static];
    }
    options.liveReload = true;
    options.static.push({
        directory: join(__dirname, './resources/views'),
        watch: true,
    });
});
Encore.enablePostCssLoader();
Encore.configureCssLoader(() => {
});
const config = Encore.getWebpackConfig();
config.infrastructureLogging = {
    level: 'warn',
};
config.stats = 'errors-warnings';
config.resolve.alias.svelte = resolve('node_modules', 'svelte');
config.resolve.extensions.push('.svelte');
config.module.rules.push({
    test: /\.(html|svelte)$/,
    use: 'svelte-loader'
});
config.module.rules.push({
    test: /\.m?js/,
    resolve: {
        fullySpecified: false,
    },
});
config.resolve.mainFields = ['svelte', 'browser', 'module', 'main'];
module.exports = config;
//# sourceMappingURL=webpack.config.js.map