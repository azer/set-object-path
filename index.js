module.exports = set;

function set (context, path, value) {
  if (path.indexOf('.') == -1 && path.indexOf('[') == -1) {
    context[path] = value;
    return;
  }

  var crumbs = path.split(/\.|\[|\]/g);
  var i = -1;
  var len = crumbs.length;
  var result;

  while (++i < len) {
    if (!crumbs[i]) continue;
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
