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

    addEndpoints(coords.get('endpoints'));
    addItems(coords.get('items'));
    addPlayer(coords.get('player'));

    PubSub.publish('new state', state);
};

var addEndpoints = function(endpoints) {
    endpoints.map(function(endpoint) {
        var row = state.get(endpoint.get('y'));
        row = row.set(endpoint.get('x'), endpoint.get('symbol'));
        state = state.set(endpoint.get('y'), row);
    });
};

var addItems = function(items) {
    items.map(function(item) {
        var row = state.get(item.get('y'));
        row = row.set(item.get('x'), item.get('symbol'));
        state = state.set(item.get('y'), row);
    });
};

var addPlayer = function(player) {
    var row = state.get(player.get('y'));
    row = row.set(player.get('x'), player.get('symbol'));
    state = state.set(player.get('y'),  row);
};

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
};

PubSub.subscribe('new level', initState);
PubSub.subscribe('keypress', handleKeypress);

module.exports = {};
