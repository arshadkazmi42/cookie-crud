const Chrome = require('chrome-cookie');
const Firefox = require('firefox-cookie');


function CookieCrud(chromePath, firefoxPath) {

  this.chrome = new Chrome(chromePath);
  this.firefox = new Firefox(firefoxPath);
}


CookieCrud.prototype.getChrome = function() {
  return this.chrome;
};


CookieCrud.prototype.getFirefox = function() {
  return this.firefox;
};


module.exports = CookieCrud;
