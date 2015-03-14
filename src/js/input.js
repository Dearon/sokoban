var PubSub = require('pubsub-js');

var movement = function(msg, data) {
    var world = module.exports.world;

    var player = world.items.get('player');
    var x = player.get('x');
    var y = player.get('y');

    if (data === 'left') {
        y -= 1;
    }

    if (data === 'right') {
        y += 1;
    }

    if (data === 'up') {
        x -= 1;
    }

    if (data === 'down') {
        x += 1;
    }

    if (world.stage.get(x).get(y) != '#') {
        player = player.set('x', x);
        player = player.set('y', y);
        world.items = world.items.set('player', player);
    }

    PubSub.publish('draw', module.exports.world);
};

PubSub.subscribe('movement', movement);

module.exports = {
    'world': {}
}
