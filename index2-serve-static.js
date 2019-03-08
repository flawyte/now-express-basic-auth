const fs = require('fs');
const mime = require('mime/lite');

/*
 *
 */

function handleRequest(req, res, root) {
  // Check if the resource exists and if it's a directory or a file
  const file = fs.statSync(root + req.url);

  // If it's a directory return its 'index.html' file, otherwise return the requested file
  let path;
  if (file.isDirectory()) {
    if (req.url.endsWith('/'))
      path = root + req.url + 'index.html';
    else
      path = root + req.url + '/index.html';
  }
  else
    path = root + req.url;

  const html = fs.readFileSync(path);
  res.set('Content-Type', mime.getType(path));
  res.end(html);
}

/*
 *
 */

module.exports = (root) => {
  return (req, res, next) => {
    try {
      handleRequest(req, res, root);
    } catch (err) {
      console.log(err);
      next();
    }
  }
}
