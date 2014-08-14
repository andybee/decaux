var path = require('path');
var fs = require('fs');

exports.include = include;

function include(pathname) {
  if (pathname != 'stdio.js') {
    if (include.options.path === null) {
    	include.options.path = path.dirname(pathname);
    } else {
    	pathname = path.join(include.options.path, pathname);
    }
    if (include.options.files.indexOf(pathname) != -1) {
    	return;
    }
  } else {
    pathname = path.join(__dirname, pathname);
  }
  include.options.files.push(pathname);
  eval.apply(global, [String(fs.readFileSync(pathname))]);
}

include.options = { path: null, files: [] };