module.exports = function(resources) {
    var boxes = resources.get('boxes');
    var endpoints = resources.get('endpoints');

    var won = boxes.reduce(function(won, box) {
        var match = endpoints.find(function(endpoint) {
            return (box.get('x') === endpoint.get('x') && box.get('y') === endpoint.get('y'));
        });

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
