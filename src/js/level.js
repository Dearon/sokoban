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

        var resources = Immutable.Map();

        var endpoints = Immutable.List();
        for (var i = 0; i < levels[data].resources.endpoints.length; i++) {
            endpoints = endpoints.push(Immutable.Map(levels[data].resources.endpoints[i]));
        }
        resources = resources.set('endpoints', endpoints);

        var boxes = Immutable.List();
        for (var i = 0; i < levels[data].resources.boxes.length; i++) {
            boxes = boxes.push(Immutable.Map(levels[data].resources.boxes[i]));
        }
        resources = resources.set('boxes', boxes);

        resources = resources.set('player', Immutable.Map(levels[data].resources.player));

        var endpoints = Immutable.List();
        for (var i = 0; i < levels[data].endpoints.length; i++) {
            endpoints = endpoints.push(Immutable.Map(levels[data].endpoints[i]));
        }

        var items = Immutable.List();
        for (var i = 0; i < levels[data].items.length; i++) {
            items = items.push(Immutable.Map(levels[data].items[i]));
        }

        var player = Immutable.Map(levels[data].player);

        PubSub.publish('new level', Immutable.Map({
            level: level,
            resources: resources,
            endpoints: endpoints,
            items: items,
            player: player
        }));
    }
};

PubSub.subscribe('load level', load);

module.exports = {};
