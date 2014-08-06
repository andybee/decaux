#!/usr/bin/env node

var fs = require('fs');
var path = require('path');

global.include = require('./include').include;
global.sprintf = require('sprintf-js').sprintf;

var argv = process.argv;
var defScript = "./main.js";
if (argv.length < 3 && !fs.existsSync(defScript)) {
  throw "Requires a filename argument (e.g. decaux " + defScript + ") or " + defScript + " in current directory.";
}

include(path.join(process.cwd(), (argv.length >= 3) ? argv[2] : defScript));
main(argv.length - 3, argv.slice(3, argv.length));