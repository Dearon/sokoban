var PubSub = require('pubsub-js');

var level1 = require('./levels/01.js');

var levels = {
    1: level1
};

var load = function(msg, data) {
    if (levels[data] != "undefined") {
        PubSub.publish('new level', levels[data]);
    }
};

PubSub.subscribe('load level', load);

module.exports = {};
