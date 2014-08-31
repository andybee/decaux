var path = require('path')
  , fs = require('fs');

var pathfinder = require('./pathfinder');

function include(pathname, basepath) {
  if (pathname == 'stdio.js') {
    pathname = path.join(__dirname, pathname);
  } else {
    if (basepath) {
      pathname = path.resolve(basepath, pathname);
    }
    pathname = pathfinder(pathname);
  }
  if (include.files.indexOf(pathname) == -1) {
    eval.apply(global, [String(fs.readFileSync(pathname))]);
    include.files.push(pathname);
  }
}

include.files = [];

module.exports = include;