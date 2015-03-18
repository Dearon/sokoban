var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var level = _.clone(level1, true);
var levelSolved = false;

var spritesheet = new Image();
spritesheet.src = 'sprites.png';

var sprites = {
    wall: { x: 64, y: 0, width: 64, height: 64 },
    floor: { x: 64, y: 320, width: 64, height: 64 },
    endpoint: { x: 0, y: 384, width: 32, height: 32 },
    box: { x: 192, y: 256, width: 64, height: 64 },
    solvedbox: { x: 256, y: 256, width: 64, height: 64 },
    player: { x: 362, y: 248, width: 36, height: 59 }
};

var tileSize = 64;
var spriteScale = 0.5;

var drawSprite = function(type, x, y) {
    x = ((x * tileSize) + ((tileSize - sprites[type].width) / 2)) * spriteScale;
    y = ((y * tileSize) + ((tileSize - sprites[type].height) / 2)) * spriteScale;
    context.drawImage(spritesheet, sprites[type].x, sprites[type].y, sprites[type].width, sprites[type].height, x, y, sprites[type].width*spriteScale, sprites[type].height*spriteScale);
};

var draw = function(level) {
    context.clearRect ( 0 , 0 , canvas.width, canvas.height );

    for (var y = 0; y < level.layout.length; y++) {
        for (var x = 0; x < level.layout[y].length; x++) {
            if (level.layout[y][x] === '#') { drawSprite('wall', x, y); }
            if (level.layout[y][x] === '.') { drawSprite('floor', x, y); }
        }
    }

    for (var i = 0; i < level.endpoints.length; i++) {
        drawSprite('endpoint', level.endpoints[i].x, level.endpoints[i].y);
    }

    levelSolved = true;

    for (var i = 0; i < level.boxes.length; i++) {
        var solved = _.find(level.endpoints, function(endpoint) { return (endpoint.x === level.boxes[i].x && endpoint.y === level.boxes[i].y); });

        if (solved) {
            drawSprite('solvedbox', level.boxes[i].x, level.boxes[i].y);
        } else {
            drawSprite('box', level.boxes[i].x, level.boxes[i].y);
            levelSolved = false;
        }
    }

    drawSprite('player', level.player.x, level.player.y);
};

var move = function(object, direction, canPush = true) {
    var x = object.x;
    var y = object.y;

    if (direction == 'left') { x -= 1; }
    if (direction == 'right') { x += 1; }
    if (direction == 'up') { y -= 1; }
    if (direction == 'down') { y += 1; }

    if (level.layout[y][x] === '#') { return false; }

    var index = _.findIndex(level.boxes, function(box) { return (box.x === x && box.y === y); });

    if (index !== -1 && ! canPush) { return false; }
    if (index !== -1 && canPush) {
        if (! move(level.boxes[index], direction, false)) {
            return false;
        }
    }

    object.x = x;
    object.y = y;

    return true;
}

var solved = function() {
    if (levelSolved) {
        console.log('You won!');
    }
}

Mousetrap.bind(['left', 'right', 'up', 'down'], function(e) {
    move(level.player, _.snakeCase(e.key));
    draw(level);
    solved();
});

draw(level);
