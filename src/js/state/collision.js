var Immutable = require('immutable');

var wall = function(level, map) {
    var row = level.get(map.get('y'));
    return (row.get(map.get('x')) === '#');
}

var box = function(items, map) {
    var boxes = items.filter(function(value) {
        return value.get('type') === 'box';
    });

    return boxes.reduce(function(collision, box, key) {
        if (box.get('x') == map.get('x') && box.get('y') == map.get('y')) {
            return key;
        }

        return collision;
    }, false);
}

module.exports = function(level, items, map) {
    if (wall(level, map) !== false) {
        return Immutable.Map({
            type: 'wall',
            key: false
        });
    }

    if (box(items, map) !== false) {
        return Immutable.Map({
            type: 'box',
            key: box(items, map)
        });
    }

    return false;
};
