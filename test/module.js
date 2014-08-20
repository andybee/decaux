global.include = require('../lib/include');

include('example.js');

console.log(sprintf('%s v%s', example(), '0.2.1'));
console.log(get_pi());