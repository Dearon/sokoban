var Immutable = require('immutable');

var collision = require('./collision.js');

var changeCoordinates = function(map, direction) {
    if (direction === 'left') {
        return map.set('y', map.get('y') - 1);
    }

    if (direction === 'right') {
        return map.set('y', map.get('y') + 1);
    }

    if (direction === 'up') {
        return map.set('x', map.get('x') - 1);
    }

    if (direction === 'down') {
        return map.set('x', map.get('x') + 1);
    }
}

module.exports = function(key, level, coords) {
    var items = coords.get('items');
    var player = coords.get('player');

    player = changeCoordinates(player, key);

    var playerCollision = collision(level, items, player);

    if (playerCollision !== false) {
        if (playerCollision.get('type') === 'box') {
            var box = items.get(playerCollision.get('key'));
            box = changeCoordinates(box, key);

            if (collision(level, items, box) !== false) {
                return false;
            }

            items = items.set(playerCollision.get('key'), box);
        } else {
            return false;
        }
    }

    return Immutable.Map({
        items: items,
        player: player
    });
};
