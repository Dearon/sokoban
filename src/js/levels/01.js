var Immutable = require('immutable');

var level = [
    ['#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', '#', '#', '.', '.', '.', '#', '#'],
    ['#', '.', '.', '.', '.', '.', '#', '#'],
    ['#', '#', '#', '.', '.', '.', '#', '#'],
    ['#', '.', '#', '#', '.', '.', '#', '#'],
    ['#', '.', '#', '.', '.', '.', '#', '#'],
    ['#', '.', '.', '.', '.', '.', '.', '#'],
    ['#', '.', '.', '.', '.', '.', '.', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#'],
];

var endpoints = [
    {
        symbol: '*',
        x: 2,
        y: 1
    },
    {
        symbol: '*',
        x: 3,
        y: 5
    },
    {
        symbol: '*',
        x: 5,
        y: 4
    },
    {
        symbol: '*',
        x: 4,
        y: 1
    },
    {
        symbol: '*',
        x: 6,
        y: 3
    },
    {
        symbol: '*',
        x: 6,
        y: 6
    },
    {
        symbol: '*',
        x: 7,
        y: 4
    }
]

var items = [
    {
        type: 'box',
        symbol: 'B',
        x: 2,
        y: 4
    },
    {
        type: 'box',
        symbol: 'B',
        x: 3,
        y: 4
    },
    {
        type: 'box',
        symbol: 'B',
        x: 4,
        y: 4
    },
    {
        type: 'box',
        symbol: 'B',
        x: 6,
        y: 1
    },
    {
        type: 'box',
        symbol: 'B',
        x: 6,
        y: 3
    },
    {
        type: 'box',
        symbol: 'B',
        x: 6,
        y: 4
    },
    {
        type: 'box',
        symbol: 'B',
        x: 6,
        y: 5
    }
];

var player = {
    symbol: '@',
    x: 2,
    y: 3
};

module.exports = {
    level: level,
    endpoints: endpoints,
    items: items,
    player: player
};
