var PubSub = require('pubsub-js');
var $ = require('domtastic');

var buildState = function(msg, data) {
    var state = data.stage;

    data.items.map(function(item) {
        var row = state.get(item.get('x'));
        row = row.set(item.get('y'), item.get('symbol'));
        state = state.set(item.get('x'), row);
    });

    draw(state);
};

var draw = function(state) {
    var html = state.reduce(function(html, row) {
        var rowHtml = row.reduce(function(html, field) {
            return html + field;
        }, '');
        
        return html + rowHtml + '<br>';
    }, '');

    $('.sokoban').html(html);
};

PubSub.subscribe('draw', buildState);

module.exports = {
    'world': {}
}
