const path = require('path');

module.exports = {
    resolve: function (location) {
        return path.join(__dirname, '..', location);
    }
};