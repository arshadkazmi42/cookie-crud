const SQLiteCrud = require('./sqlite-crud');


function Firefox() {
  this.sqliteCrud = new SQLiteCrud();
}

Firefox.prototype.setCookie = function(cookie) {

}

Firefox.prototype.getCookie = function(domain) {

}


module.exports = Firefox;
