const { Chrome, Firefox } = require('./lib');


function CookieCrud() {

  this.chrome = new Chrome();
  this.firefox = null;
}

CookieCrud.prototype.getChrome = function() {
  return this.chrome;
}

CookieCrud.prototype.getFirefox = function() {
  return this.firefox;
}


module.exports = CookieCrud;
