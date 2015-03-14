var Immutable = require('immutable');

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
    }),
    box: Immutable.Map({
        symbol: 'B',
        x: 1,
        y: 3
    })
});

module.exports = {
    stage: stage,
    items: items
}
