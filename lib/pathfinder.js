var path = require('path')
  , fs = require('fs');

var paths = [];
function pathfinder(pathname) {
  if (!fs.existsSync(pathname)) {
    var newPathname = path.resolve(path.dirname(require.main.filename), pathname);
    if (!fs.existsSync(newPathname)) {
      var found = false;
      for (var i in paths) {
        newPathname = path.resolve(paths[i], pathname);
        if (fs.existsSync(newPathname)) {
          found = true;
          break;
        }
      }
      if (!found) {
        throw 'Unable to resolve path';
      }
    }
    pathname = newPathname;
  }
  paths.unshift(path.dirname(pathname));
  return pathname;
}

pathfinder.paths = [];

module.exports = pathfinder;