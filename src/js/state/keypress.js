var Immutable = require('immutable');

var collision = require('./collision.js');
var issolved = require('./issolved.js');

var changeCoordinates = function(map, direction) {
    if (direction === 'left') {
        return map.set('x', map.get('x') - 1);
    }

    if (direction === 'right') {
        return map.set('x', map.get('x') + 1);
    }

    if (direction === 'up') {
        return map.set('y', map.get('y') - 1);
    }

    if (direction === 'down') {
        return map.set('y', map.get('y') + 1);
    }
}

module.exports = function(key, level, resources) {
    var player = changeCoordinates(resources.get('player'), key);
    resources = resources.set('player', player);

    var playerCollides = collision(level, resources, resources.get('player'));

    if (playerCollides !== false) {
        if (playerCollides.get('type') === 'box') {
            var boxes = resources.get('boxes');
            var box = boxes.get(playerCollides.get('index'));
            box = changeCoordinates(box, key);

            if (collision(level, resources, box) !== false) {
                return false;
            }

            boxes = boxes.set(playerCollides.get('index'), box);
            resources = resources.set('boxes', boxes);
        } else {
            return false;
        }
    }

    issolved(resources);

    return resources;
};
