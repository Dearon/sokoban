var PubSub = require('pubsub-js');
var $ = require('domtastic');

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var spritesheet = new Image();
spritesheet.src = './img/sprites.png';

var sprites = {
    wall: {
        x: 64,
        y: 0
    },
    floor: {
        x: 64,
        y: 320
    },
    box: {
        x: 192,
        y: 256
    }
};

var level = '';

PubSub.subscribe('new level', function(msg, data) {
    level = data.get('level');
});

var drawSprite = function(sprite, x, y) {
    ctx.drawImage(spritesheet, sprites[sprite].x, sprites[sprite].y, 64, 64, x, y, 32, 32);
};

var drawLevel = function() {
    level.map(function(row, rowOffset) {
        row.map(function(tile, tileOffset) {
            var x = tileOffset * 32;
            var y = rowOffset * 32;

            if (tile === '#') {
                drawSprite('wall', x, y);
            } else if (tile === '.') {
                drawSprite('floor', x, y);
            }
        });
    });
};

var draw = function(msg, data) {
    var html = data.reduce(function(html, row) {
        var rowHtml = row.reduce(function(html, field) {
            return html + field;
        }, '');
        
        return html + rowHtml + '<br>';
    }, '');

    $('.sokoban').html(html);
    drawLevel();
};

PubSub.subscribe('new state', draw);

module.exports = {};
