const { registerTransforms } = require('@tokens-studio/sd-transforms');
module.exports = async () => {
    registerTransforms();
    return {
        source: ['tokens/**/*.json'],
        platforms: {
            web: {
                transformGroup: 'tokens-studio',
                buildPath: 'build/web/',
                files: [{ destination: 'tokens.css', format: 'css/variables' }]
            },
            ts: {
                transformGroup: 'tokens-studio',
                buildPath: 'build/ts/',
                files: [{ destination: 'tokens.ts', format: 'javascript/module' }]
            }
        }
    };
};