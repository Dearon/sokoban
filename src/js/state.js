var PubSub = require('pubsub-js');
var Immutable = require('immutable');

var keypress = require('./state/keypress.js');

var level = '';
var store = Immutable.List();
var state = '';

var initState = function(msg, data) {
    level = data;
    buildState();
};

var buildState = function() {
    state = level.get('level');

    if (store.count() > 0) {
        var coords = store.last();
    } else {
        var coords = level;
    }

    addItems(coords.get('items'));
    addPlayer(coords.get('player'));

    PubSub.publish('new state', state);
};

var addItems = function(items) {
    items.map(function(item) {
        var row = state.get(item.get('x'));
        row = row.set(item.get('y'), item.get('symbol'));
        state = state.set(item.get('x'), row);
    });
}

var addPlayer = function(player) {
    var row = state.get(player.get('x'));
    row = row.set(player.get('y'), player.get('symbol'));
    state = state.set(player.get('x'),  row);
}

var handleKeypress = function(msg, data) {
    if (store.count() > 0) {
        var coords = store.last();
    } else {
        var coords = level;
    }

    var result = keypress(data, level.get('level'), coords);

    if (result) {
        store = store.push(result);
        buildState();
    }
}

PubSub.subscribe('new level', initState);
PubSub.subscribe('keypress', handleKeypress);

module.exports = {};
