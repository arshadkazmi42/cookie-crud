const { Chrome, Firefox } = require('./lib');


function CookieCrud(path) {

  this.chrome = new Chrome(path);
  this.firefox = null;
}

CookieCrud.prototype.getChrome = function() {
  return this.chrome;
}

CookieCrud.prototype.getFirefox = function() {
  return this.firefox;
}


module.exports = CookieCrud;
