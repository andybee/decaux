var path = require('path')
  , fs = require('fs');

var pathfinder = require('./pathfinder');

function include(pathname) {
  if (pathname == 'stdio.js') {
    pathname = path.join(__dirname, pathname);
  } else {
    pathname = pathfinder(pathname);
  }
  if (include.files.indexOf(pathname) != -1) {
    return;
  }
  include.files.push(pathname);
  eval.apply(global, [String(fs.readFileSync(pathname))]);
}

include.files = [];

module.exports = include;