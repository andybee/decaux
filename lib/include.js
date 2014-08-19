var path = require('path')
  , fs = require('fs');

function include(pathname) {
  if (pathname == 'stdio.js') {
    pathname = path.join(__dirname, pathname);
  } else if (include.options.path == null) {
    include.options.path = path.resolve(path.dirname(pathname));
  } else {
    pathname = path.join(include.options.path, pathname);
  }
  eval.apply(global, [String(fs.readFileSync(pathname))]);
}

include.options = { path: null, files: [] };

module.exports = include;