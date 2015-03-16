module.exports = function(endpoints, items) {
    var boxes = items.filter(function(value) {
        return value.get('type') === 'box';
    });

    boxes.map(function(box) {
        endpoints.map(function(endpoint) {
            if (box.get('x') === endpoint.get('x') && box.get('y') === endpoint.get('y')) {
                console.log('You won!');
            }
        });
    });
};
