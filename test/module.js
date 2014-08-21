global.include = require('../lib/index').include;
global.define = require('../lib/index').define;

include('example.js');

console.log(sprintf('%s v%s', example(), DECAUX_VERSION));
console.log(get_pi());