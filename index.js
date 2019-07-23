const BROWSERS = [ 'CHROME', 'FIREFOX' ];


function CookieCrud() {

  this.chrome = null;
  this.firefox = null;
}

CookieCrud.prototype.getChrome = () => {
  return this.chrome;
}

CookieCrud.prototype.getFirefox = () => {
  return this.firefox;
}


module.exports = CookieCrud;
