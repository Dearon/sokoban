var PubSub = require('pubsub-js');

require('./level.js');
require('./state.js');
require('./keyboard.js');
require('./draw.js');

PubSub.publish('load level', 1);
