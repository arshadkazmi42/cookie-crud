const sqlite3 = require('sqlite3').verbose();

const BROWSERS = {
  chrome: 'CHROME', 
  firefox: 'FIREFOX'
};


const PATHS = {
  [BROWSERS['chrome']]: '',
  [BROWSERS['firefox']]: ''
}


function CookieCrud(path) {

  if (!path){
    throw new Error('Invalid path');
  }

  this.db = this.connect(path)
  this.browser = None
}

CookieCrud.prototype.setChrome = function() {
  this.browser = BROWSERS['chrome'];
}

CookieCrud.prototype.setFirefox = function() {
  this.browser = BROWSERS['firefox'];
}

CookieCrud.prototype.connect = function(path) {
  return new sqlite3.Database(path, (err) => {
    if (err) {
      console.error(err);
      throw new Error('Failed to connect to database');
    }

    console.info(`Connected to db ${path}`);
  })
}


CookieCrud.prototype.read


module.exports = CookieCrud;
