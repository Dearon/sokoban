var Immutable = require('immutable');
var PubSub = require('pubsub-js');

var level1 = require('./levels/01.js');

var levels = {
    1: level1
};

var load = function(msg, data) {
    if (levels[data] != "undefined") {
        var level = Immutable.List();
        for (var i = 0; i < levels[data].level.length; i++) {
            level = level.push(Immutable.List(levels[data].level[i]));
        }

        var items = Immutable.List();
        for (var i = 0; i < levels[data].items.length; i++) {
            items = items.push(Immutable.Map(levels[data].items[i]));
        }

        var player = Immutable.Map(levels[data].player);

        PubSub.publish('new level', Immutable.Map({
            level: level,
            items: items,
            player: player
        }));
    }
};

PubSub.subscribe('load level', load);

module.exports = {};
