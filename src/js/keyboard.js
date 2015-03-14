var Combokeys = require('Combokeys');
var combokeys = new Combokeys(document);
var PubSub = require('pubsub-js');

combokeys.bind('left', function() {
    PubSub.publish('movement', 'left');
});

combokeys.bind('right', function() {
    PubSub.publish('movement', 'right');
});

combokeys.bind('up', function() {
    PubSub.publish('movement', 'up');
});

combokeys.bind('down', function() {
    PubSub.publish('movement', 'down');
});

module.exports = {
    'world': {}
}
