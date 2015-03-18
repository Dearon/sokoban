var Combokeys = require('Combokeys');
var combokeys = new Combokeys(document);
var PubSub = require('pubsub-js');

combokeys.bind('left', function() {
    PubSub.publish('keypress', 'left');
});

combokeys.bind('right', function() {
    PubSub.publish('keypress', 'right');
});

combokeys.bind('up', function() {
    PubSub.publish('keypress', 'up');
});

combokeys.bind('down', function() {
    PubSub.publish('keypress', 'down');
});

module.exports = {};
