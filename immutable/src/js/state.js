var PubSub = require('pubsub-js');
var Immutable = require('immutable');

var keypress = require('./state/keypress.js');

var level = '';
var resources = Immutable.List();

var initState = function(msg, data) {
    level = data.get('level');
    resources = resources.push(data.get('resources'));
    PubSub.publish('new state', resources.last());
};

var handleKeypress = function(msg, data) {
    var result = keypress(data, level, resources.last());

    if (result) {
        resources = resources.push(result);
        PubSub.publish('new state', resources.last());
    }
};

PubSub.subscribe('new level', initState);
PubSub.subscribe('keypress', handleKeypress);

module.exports = {};
