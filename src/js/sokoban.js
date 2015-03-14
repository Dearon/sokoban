var Immutable = require('immutable');
var PubSub = require('pubsub-js');

var keyboard = require('./keyboard.js');
var input = require('./input.js');
var draw = require('./draw.js');

var stage = Immutable.List([
    Immutable.List(['#', '#', '#', '#', '#', '#', '#']),
    Immutable.List(['#', '.', '.', '.', '.', '.', '#']),
    Immutable.List(['#', '.', '.', '.', '.', '.', '#']),
    Immutable.List(['#', '.', '.', '.', '.', '.', '#']),
    Immutable.List(['#', '#', '#', '#', '#', '#', '#'])
]);

var items = Immutable.Map({
    player: Immutable.Map({
        symbol: '@',
        x: 2,
        y: 3
    })
});

var changeWorld = function(stage, items) {
    var world = {
        stage: stage,
        items: items
    };

    keyboard.world = world;
    input.world = world;
    draw.world = world;

    PubSub.publish('draw', world);
}

changeWorld(stage, items);
