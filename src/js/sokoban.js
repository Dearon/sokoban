var PubSub = require('pubsub-js');

var level = require('./level.js');
var keyboard = require('./keyboard.js');
var input = require('./input.js');
var draw = require('./draw.js');

var changeWorld = function(world) {
    keyboard.world = world;
    input.world = world;
    draw.world = world;

    PubSub.publish('draw', world);
}

changeWorld(level('1'));
