const fs = require('fs');

const processor = function(file) {
  const comments = hexo.locals.get('comments') || [];

  const comment = JSON.parse(fs.readFileSync(file.source, 'utf8'));

  comments.push(comment);

  hexo.locals.set('comments', function() {
    return comments;
  });
}

hexo.source.addProcessor('comments/*.json', processor);