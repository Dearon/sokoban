var _ = require('lodash');
var $ = require('domtastic');

var stage = [
    ['#', '#', '#', '#', '#', '#', '#'],
    ['#', '.', '.', '.', '.', '.', '#'],
    ['#', '.', '.', '@', '.', '.', '#'],
    ['#', '.', '.', '.', '.', '.', '#'],
    ['#', '#', '#', '#', '#', '#', '#']
];

var plainStage = function(stage) {
    return _.reduce(stage, function(result, row) {
        var plainRow = _.reduce(row, function(result, field) {
            return result + field;
        }, '');

        return result + plainRow + '<br>';
    }, '');
};

$('.sokoban').html(plainStage(stage));
