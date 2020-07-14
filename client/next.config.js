const withCSS = require('@zeit/next-css');
module.exports = withCSS({
    publicRuntimeConfig: {
        APP_NAME: 'node',
        API: 'https://localhost:8080/api',
        PRODUCTION: false,
        DOMAIN: 'https://localhost:3000',
        FB_APP_ID: 'JJSLKADFLKSAHFDSLKL'
    }
});
