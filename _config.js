var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://hax:theman22@gallery-assisgn.bi5pxbr.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://hax:theman22@gallery-assisgn.bi5pxbr.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://hax:theman22@gallery-assisgn.bi5pxbr.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
