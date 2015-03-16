var Immutable = require('immutable');

var level = [
    ['#', '#', '#', '#', '#', '#', '#'],
    ['#', '.', '.', '.', '.', '.', '#'],
    ['#', '.', '.', '.', '.', '.', '#'],
    ['#', '.', '.', '.', '.', '.', '#'],
    ['#', '.', '.', '.', '.', '.', '#'],
    ['#', '.', '.', '.', '.', '.', '#'],
    ['#', '#', '#', '#', '#', '#', '#']
];

var endpoints = [
    {
        symbol: '*',
        x: 4,
        y: 3
    }
]

var items = [
    {
        type: 'box',
        symbol: 'B',
        x: 2,
        y: 3
    }
];

var player = {
    symbol: '@',
    x: 3,
    y: 3
};

module.exports = {
    level: level,
    endpoints: endpoints,
    items: items,
    player: player
};
