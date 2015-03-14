var level1 = require('./levels/01.js');

var levels = {
    1: level1
}

module.exports = function(level) {
    if (levels[level] != "undefined") {
        return levels[level];
    } else {
        return false;
    }
};
