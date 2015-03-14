var PubSub = require('pubsub-js');
var $ = require('domtastic');

var draw = function(msg, data) {
    var html = data.reduce(function(html, row) {
        var rowHtml = row.reduce(function(html, field) {
            return html + field;
        }, '');
        
        return html + rowHtml + '<br>';
    }, '');

    $('.sokoban').html(html);
};

PubSub.subscribe('new state', draw);

module.exports = {};
