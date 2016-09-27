module.exports = set;

function set (context, path, value) {
  if (path.indexOf('.') == -1 && path.indexOf('[') == -1) {
    context[path] = value;
    return;
  }

  var crumbs = parseCrumbs(path);
  var i = -1;
  var len = crumbs.length;

  while (++i < len) {
    if (crumbs[i].length == 0) continue;

    if (i + 1 < len && context[crumbs[i]] == undefined) {
      context[crumbs[i]] = {};
    }

    if (i + 1 < len) {
      context = context[crumbs[i]];
      continue;
    }

    context[crumbs[i]] = value;
  }
}

function parseCrumbs (path) {
  var crumbs = path.split(/\.|\[|\]/g);

  if (crumbs[crumbs.length - 1] == "") {
    crumbs = crumbs.slice(0, -1);
  }

  return crumbs;
}
