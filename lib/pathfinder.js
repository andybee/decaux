var debug = require('debug')('pathfinder');
var path = require('path')
var fs = require('fs');

function pathfinder(pathname) {
  if (pathname.indexOf('/') !== 0) {
    debug(pathname + ' not an absolute path, begin resolution attempts');
    var found = false;
    for (var i = 0; i < pathfinder.paths.length; i++) {
      var basepath = pathfinder.paths[i];
      var candidate = path.resolve(basepath, pathname);
      debug('Attempting ' + candidate + '...');
      if (fs.existsSync(candidate)) {
        debug('Candidate exists!');
        found = true;
        pathname = candidate;
        break;
      }
    }
    if (!found) {
      throw 'Unable to resolve path';
    }
  }

  var dirname = path.dirname(pathname);
  if (pathfinder.paths.indexOf(dirname) === -1) {
    pathfinder.paths.unshift(dirname);
  }
  return pathname;
}

pathfinder.paths = [];

module.exports = pathfinder;