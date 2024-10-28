const { start } = require('@bugsnag/js');
const bugsnagExpress = require('@bugsnag/plugin-express');

const bugsnagClient = start({
    apiKey: process.env.BUGSNAG_API_KEY,
    appVersion: '1.0.0',
    releaseStage: process.env.NODE_ENV || 'development',
    plugins: [bugsnagExpress]
});

const bugsnagMiddleware = bugsnagClient.getPlugin('express');

process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
    bugsnagClient.notify(error);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    bugsnagClient.notify(reason);
});

module.exports = {
    requestHandler: bugsnagMiddleware.requestHandler,
    errorHandler: bugsnagMiddleware.errorHandler,
    bugsnagClient
};
