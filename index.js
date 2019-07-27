const { Chrome, Firefox } = require('./lib');


function CookieCrud() {

  this.chrome = new Chrome();
  this.firefox = null;
}

CookieCrud.prototype.getChrome = () => {
  return this.chrome;
}

CookieCrud.prototype.getFirefox = () => {
  return this.firefox;
}


module.exports = CookieCrud;
