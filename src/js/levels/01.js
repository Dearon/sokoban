var Immutable = require('immutable');

var level = Immutable.List([
    Immutable.List(['#', '#', '#', '#', '#', '#', '#']),
    Immutable.List(['#', '.', '.', '.', '.', '.', '#']),
    Immutable.List(['#', '.', '.', '.', '.', '.', '#']),
    Immutable.List(['#', '.', '.', '.', '.', '.', '#']),
    Immutable.List(['#', '#', '#', '#', '#', '#', '#'])
]);

var items = Immutable.List([
    Immutable.Map({
        type: 'box',
        symbol: 'B',
        x: 1,
        y: 3
    })
]);

var player = Immutable.Map({
    symbol: '@',
    x: 2,
    y: 3
});

module.exports = Immutable.Map({
    level: level,
    items: items,
    player: player
});
