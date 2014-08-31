global.include = require('../lib/index').include;
global.define = require('../lib/index').define;

include('example.js', __dirname);

console.log(sprintf('%s v%s', example(), DECAUX_VERSION));
console.log(get_pi());
console.log(alt());