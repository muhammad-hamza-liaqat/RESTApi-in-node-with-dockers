const { start } = require('@bugsnag/js');
const bugsnagExpress = require('@bugsnag/plugin-express');

// Initialize Bugsnag with Express plugin
const bugsnagClient = start({
    apiKey: process.env.BUGSNAG_API_KEY,
    appVersion: '1.0.0',
    releaseStage: process.env.NODE_ENV || 'development',
    plugins: [bugsnagExpress]
});

const bugsnagMiddleware = bugsnagClient.getPlugin('express');

module.exports = {
    requestHandler: bugsnagMiddleware.requestHandler,
    errorHandler: bugsnagMiddleware.errorHandler,
    bugsnagClient
};
