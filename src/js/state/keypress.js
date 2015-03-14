var Immutable = require('immutable');

var wallCollision = function(level, x, y) {
    var row = level.get(x);
    return row.get(y) === '#';
};

var boxCollision = function(items, x, y) {
    var boxes = items.filter(function(value) {
        return value.get('type') === 'box';
    });

    return boxes.reduce(function(collision, box) {
        if (box.get('x') == x && box.get('y') == y) {
            collision = true;
        }

        return collision;
    }, false);
};

module.exports = function(key, level, coords) {
    var items = coords.get('items');
    var player = coords.get('player');

    if (key === 'left') { player = player.set('y', player.get('y') - 1); }
    if (key === 'right') { player = player.set('y', player.get('y') + 1); }
    if (key === 'up') { player = player.set('x', player.get('x') - 1); }
    if (key === 'down') { player = player.set('x', player.get('x') + 1); }

    if (wallCollision(level, player.get('x'), player.get('y'))) {
        return false;
    }

    console.log(boxCollision(items, player.get('x'), player.get('y')));

    if (boxCollision(items, player.get('x'), player.get('y'))) {
        return false;
    }

    return Immutable.Map({
        items: items,
        player: player
    });
};
