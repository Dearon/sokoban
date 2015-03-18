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

var resources = {
    endpoints: [
        {
            x: 1,
            y: 2
        },
        {
            x: 5,
            y: 3
        },
        {
            x: 4,
            y: 5
        },
        {
            x: 1,
            y: 4
        },
        {
            x: 3,
            y: 6
        },
        {
            x: 6,
            y: 6
        },
        {
            x: 4,
            y: 7
        }
    ],
    boxes: [
        {
            x: 4,
            y: 2
        },
        {
            x: 4,
            y: 3
        },
        {
            x: 4,
            y: 4
        },
        {
            x: 1,
            y: 6
        },
        {
            x: 3,
            y: 6
        },
        {
            x: 4,
            y: 6
        },
        {
            x: 5,
            y: 6
        }
    ],
    player: {
        x: 3,
        y: 2
    }
};

var endpoints = [
    {
        symbol: '*',
        x: 1,
        y: 2
    },
    {
        symbol: '*',
        x: 5,
        y: 3
    },
    {
        symbol: '*',
        x: 4,
        y: 5
    },
    {
        symbol: '*',
        x: 1,
        y: 4
    },
    {
        symbol: '*',
        x: 3,
        y: 6
    },
    {
        symbol: '*',
        x: 6,
        y: 6
    },
    {
        symbol: '*',
        x: 4,
        y: 7
    }
]

var items = [
    {
        type: 'box',
        symbol: 'B',
        x: 4,
        y: 2
    },
    {
        type: 'box',
        symbol: 'B',
        x: 4,
        y: 3
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
        x: 1,
        y: 6
    },
    {
        type: 'box',
        symbol: 'B',
        x: 3,
        y: 6
    },
    {
        type: 'box',
        symbol: 'B',
        x: 4,
        y: 6
    },
    {
        type: 'box',
        symbol: 'B',
        x: 5,
        y: 6
    }
];

var player = {
    symbol: '@',
    x: 3,
    y: 2
};

module.exports = {
    level: level,
    resources: resources,
    endpoints: endpoints,
    items: items,
    player: player
};
