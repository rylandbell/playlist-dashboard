var ghpages = require('gh-pages');
var path = require('path');
 
ghpages.publish(path.join(__dirname, 'build'), function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log('all clear! (apparently.)');
  }
});