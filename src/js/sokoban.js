var Immutable = require('immutable');
var $ = require('domtastic');
var Combokeys = require('Combokeys');
var PubSub = require('pubsub-js');

var combokeys = new Combokeys(document);

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

var buildState = function(stage, items) {
    var state = stage;

    items.every(function(item) {
        var row = state.get(item.get('x'));
        row = row.set(item.get('y'), item.get('symbol'));
        state = state.set(item.get('x'), row);
    });

    draw(state);
};

var draw = function(stage) {
    var html = stage.reduce(function(html, row) {
        var rowHtml = row.reduce(function(html, field) {
            return html + field;
        }, '');
        
        return html + rowHtml + '<br>';
    }, '');

    $('.sokoban').html(html);
};

buildState(stage, items);

var handleInput = function(msg, data) {
    var player = items.get('player');
    var x = player.get('x');
    var y = player.get('y');

    if (data === 'left') {
        y -= 1;
    }

    if (data === 'right') {
        y += 1;
    }

    if (data === 'up') {
        x -= 1;
    }

    if (data === 'down') {
        x += 1;
    }

    if (stage.get(x).get(y) != '#') {
        player = player.set('x', x);
        player = player.set('y', y);
        items = items.set('player', player);
    }

    buildState(stage, items);
};

PubSub.subscribe('input', handleInput);

combokeys.bind('left', function() {
    PubSub.publish('input', 'left');
});

combokeys.bind('right', function() {
    PubSub.publish('input', 'right');
});

combokeys.bind('up', function() {
    PubSub.publish('input', 'up');
});

combokeys.bind('down', function() {
    PubSub.publish('input', 'down');
});
