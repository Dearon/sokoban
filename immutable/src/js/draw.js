var PubSub = require('pubsub-js');
var Immutable = require('immutable');

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
    endpoint: {
        x: 0,
        y: 384,
        width: 32,
        height: 32
    },
    box: {
        x: 192,
        y: 256
    },
    darkbox: {
        x: 256,
        y: 256
    },
    player: {
        x: 362,
        y: 248,
        width: 36,
        height: 59
    }
};

var level = '';

PubSub.subscribe('new level', function(msg, data) {
    level = data.get('level');
});

var drawSprite = function(sprite, x, y) {
    var scale = 0.5;

    var width = 64;
    var height = 64;

    if (sprites[sprite].width) {
        width = sprites[sprite].width;
        x = x + (((64 - width) / 2) * scale);
    }

    if (sprites[sprite].height) {
        height = sprites[sprite].height;
        y = y + (((64 - height) / 2) * scale);
    }

    ctx.drawImage(spritesheet, sprites[sprite].x, sprites[sprite].y, width, height, x, y, width*scale, height*scale);
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

var drawEndpoints = function(endpoints) {
    endpoints.map(function(endpoint) {
        var x = endpoint.get('x') * 32;
        var y = endpoint.get('y') * 32;
        drawSprite('endpoint', x, y);
    });
};

var drawBoxes = function(boxes, endpoints) {
    boxes.map(function(box) {
        var x = box.get('x') * 32;
        var y = box.get('y') * 32;

        if (endpoints.contains(box)) {
            drawSprite('darkbox', x, y);
        } else {
            drawSprite('box', x, y);
        }
    });
};

var drawPlayer = function(player) {
    var x = player.get('x') * 32;
    var y = player.get('y') * 32;
    drawSprite('player', x, y);
};

var draw = function(msg, data) {
    drawLevel();
    drawEndpoints(data.get('endpoints'));
    drawBoxes(data.get('boxes'), data.get('endpoints'));
    drawPlayer(data.get('player'));
};

PubSub.subscribe('new state', draw);

module.exports = {};
