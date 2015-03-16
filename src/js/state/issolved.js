module.exports = function(endpoints, items) {
    var boxes = items.filter(function(value) {
        return value.get('type') === 'box';
    });

    var won = boxes.reduce(function(won, box) {
        var match = endpoints.reduce(function(match, endpoint) {
            if (box.get('x') === endpoint.get('x') && box.get('y') === endpoint.get('y')) {
                return true;
            }

            return match;
        }, false);

        if (match) {
            return won;
        } else {
            return false;
        }
    }, true);

    if (won) {
        console.log('You won!');
    }
};
