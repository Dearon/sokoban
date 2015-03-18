var Immutable = require('immutable');

var wall = function(level, target) {
    var row = level.get(target.get('y'));
    return (row.get(target.get('x')) === '#');
}

var box = function(resources, target) {
    var boxes = resources.get('boxes');
    return boxes.findIndex(function(box) {
        return (target.get('x') === box.get('x') && target.get('y') === box.get('y'));
    });
}

module.exports = function(level, resources, target) {
    if (wall(level, target) !== false) {
        return Immutable.Map({
            type: 'wall',
        });
    }

    var index = box(resources, target);

    if (index !== -1) {
        return Immutable.Map({
            type: 'box',
            index: index
        });
    }

    return false;
};
