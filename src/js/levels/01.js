var Immutable = require('immutable');

var level = [
    ['#', '#', '#', '#', '#', '#', '#'],
    ['#', '.', '.', '.', '.', '.', '#'],
    ['#', '.', '.', '.', '.', '.', '#'],
    ['#', '.', '.', '.', '.', '.', '#'],
    ['#', '#', '#', '#', '#', '#', '#']
];

var items = [
    {
        type: 'box',
        symbol: 'B',
        x: 1,
        y: 3
    }
];

var player = {
    symbol: '@',
    x: 2,
    y: 3
};

module.exports = {
    level: level,
    items: items,
    player: player
};
